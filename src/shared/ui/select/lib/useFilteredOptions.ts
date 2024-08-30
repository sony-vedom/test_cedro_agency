import {OptionsInternal, OptionType, type Value} from "shared/ui/select/types";
import React, {useRef, useState} from "react";
import {ValueOf} from "shared/lib/type";

export const useFilteredOptions = (args: {
    options?: OptionType[]
    onChange?: (value: string | number | null | undefined, option: OptionType) => void,
    multiple?: boolean
    combobox?: boolean
    onAddOption?: (inputValue: string, addOption: (newValue: OptionType) => void, setPending: (isPending: boolean) => void) => void
    handleCloseModalCreateButton: () => void,
    handleOpenModalCreateButton: () => void,
    isError?: boolean,
}) => {
    const {
        options,
        onAddOption,
        onChange,
        multiple,
        combobox,
        handleCloseModalCreateButton,
        handleOpenModalCreateButton
    } = args
    const countId = useRef<number>(0)
    const [internalOptions, setInternalOptions] = useState<OptionsInternal>(() => {
        return options?.reduce((acc, option) => {
            acc[countId.current] = {option: option}
            countId.current = countId.current + 1
            return acc
        }, {} as any)
    })
    const [isError, setIsError] = useState(args.isError)
    const [selectedOptions, setSelectedOptions] = useState<OptionsInternal | null>(null)
    const [inputValue, setInputValue] = useState<string>()
    const [filteredOptions, setFilteredOptions] = useState<OptionsInternal>(internalOptions)
    const [isPendingCreate, setIsPendingCreate] = useState<boolean>(false)

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setIsError(false)
        const searchTerm = (e.target as HTMLInputElement).value;
        setInputValue(searchTerm)
        if (!searchTerm) {
            setFilteredOptions(internalOptions)
            handleCloseModalCreateButton()
            return
        }
        if (selectedOptions && !Object.keys(selectedOptions).some((el) => el === searchTerm) && !multiple) {
            setSelectedOptions(null)
        }
        const filteredItems = Object.fromEntries(Object.entries(internalOptions).filter(([_, value]) => {
                if (value.option.dropdownOptionProps) {
                    return String(value.option.dropdownOptionProps.title).toLowerCase().includes(searchTerm.toLowerCase())
                }
                return String(value.option.name).toLowerCase().includes(searchTerm.toLowerCase())
            }
        ))
        setFilteredOptions(filteredItems);
        if (searchTerm && !Object.keys(filteredItems).length) {
            if (!combobox) {
                setIsError(true)
            } else {
                handleOpenModalCreateButton()
            }
            return
        }
        handleCloseModalCreateButton()
    }

    const handleChangeSelect = (option: ValueOf<OptionsInternal>, index: number) => {
        onChange?.(option.option.value, option.option)
        if (!multiple) {
            setSelectedOptions({
                [index]: internalOptions[index]
            })
            setInputValue(internalOptions[index].option.dropdownOptionProps
                ? internalOptions[index].option.dropdownOptionProps.title
                : internalOptions[index].option.name)
            return
        }
        if (multiple) {
            setInputValue("")
            if (selectedOptions && index in selectedOptions) {
                const copy = {...selectedOptions}
                delete copy[index]
                setSelectedOptions(copy)
                return
            }
            setSelectedOptions(prevState => {
                return {
                    ...prevState,
                    [index]: internalOptions[index]
                }
            })
            setFilteredOptions(internalOptions)
        }
    }

    const handleCreateOption = () => {
        if (inputValue) {
            onAddOption?.(inputValue,
                (newValue: Value) => {
                    const newIndex = countId.current + 1
                    countId.current = countId.current + 1
                    setInternalOptions((prevState) => {
                        const newState = {...prevState}
                        newState[newIndex] = {option: newValue}
                        return newState
                    })
                    setSelectedOptions((prevState) => {
                        if (multiple) {
                            const newState = {...prevState}
                            newState[newIndex] = {option: newValue}
                            return newState
                        } else {
                            return {option: {value: newValue}, selected: true}
                        }
                    })
                    setFilteredOptions(() => {
                        const newState = {...internalOptions}
                        newState[newIndex] = {option: newValue}
                        return newState
                    })
                    if (multiple) {
                        setInputValue("")
                        handleCloseModalCreateButton()
                    } else {
                        handleCloseModalCreateButton()
                    }

                },
                (isPending) => {
                    setIsPendingCreate(isPending)
                })
        }
    }

    return {
        isError,
        filteredOptions,
        handleInputChange,
        handleChangeSelect,
        handleCreateOption,
        isPendingCreate,
        selectedOptions,
        setSelectedOptions,
        inputValue
    }
}