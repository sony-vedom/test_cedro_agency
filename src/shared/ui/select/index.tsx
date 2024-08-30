import React, {useRef} from 'react';
import {DropdownButtonProps} from "./ui/dropdown-button";
import {OptionsList} from "./ui/options-list";
import classNames from "classnames";
import {type OptionType} from "./types"
import "./ui/select-global-styles.css"
import {Popup} from "./ui/popup";
import {CreateOptionButton} from "./ui/create-option-button.tsx";
import {SearchInput} from "./ui/search-input.tsx";
import {Hint} from "shared/ui/select/ui/hint";
import {useModal} from "shared/ui/select/lib/useModal.ts";
import {useClosePopupByBackgroundClick, useGetDisplayValuesForPopup} from "shared/ui/select/lib/popup-hooks.ts";
import {useFilteredOptions} from "shared/ui/select/lib";

interface SelectProps {
    options?: OptionType[]
    title?: string
    placeholder?: string
    dropdownButtonProps?: DropdownButtonProps,
    isError?: boolean,
    isDisabled?: boolean,
    onChange?: (value: string | number | null | undefined, option: OptionType) => void,
    multiple?: boolean
    combobox?: boolean
    hint?: string
    onAddOption?: (inputValue: string, addOption: (newValue: OptionType) => void, setPending: (isPending: boolean) => void) => void
}


export const Select: React.FC<SelectProps> = (props) => {
    const {
        title,
        options,
        placeholder,
        dropdownButtonProps,
        isDisabled,
        onChange,
        multiple,
        combobox,
        onAddOption,
        hint
    } = props


    const optionsListModal = useModal()
    const {isShowModal, setIsShowModal} = useModal()

    const rootEl = useRef<HTMLDivElement | null>(null)
    const popupList = useRef<HTMLDivElement | null>(null)
    const popupCreateButton = useRef<HTMLDivElement | null>(null)
    useClosePopupByBackgroundClick(rootEl, popupList, () => {
        optionsListModal.setIsShowModal(false)
    })
    useClosePopupByBackgroundClick(rootEl, popupCreateButton, () => {
        setIsShowModal(false)
    })

    const {
        filteredOptions,
        handleCreateOption,
        isPendingCreate,
        setSelectedOptions,
        inputValue,
        handleChangeSelect,
        isError,
        selectedOptions,
        handleInputChange
    } = useFilteredOptions({
        options,
        onChange,
        multiple,
        combobox,
        onAddOption,
        isError: props.isError,
        handleCloseModalCreateButton: () => {
            setIsShowModal(false)
        },
        handleOpenModalCreateButton: () => {
            setIsShowModal(true)
        }
    })

    const inputWrapper = useRef<HTMLDivElement | null>(null)
    const {coordinatesTop, coordinatesLeft, width} = useGetDisplayValuesForPopup(
        inputWrapper, [inputValue, selectedOptions]
    )

    if ((combobox && !onAddOption) || (!combobox && onAddOption)) {
        console.error("При передаче пропса combobox обязателен пропс onAddOption и наоборот")
    }

    return (
        <div tabIndex={1} ref={rootEl}
             className={classNames("flex flex-col relative", {
                 ["select-wrapper_error"]: isError && !isDisabled,
                 ["select-wrapper"]: !isError && !isDisabled,
                 ["select-wrapper_disabled"]: isDisabled,
             })}>
            <SearchInput
                ref={inputWrapper}
                title={title} multiple={multiple}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                inputValue={inputValue}
                isDisabled={isDisabled}
                placeholder={placeholder}
                handleModal={() => {
                    if (!isShowModal && !isDisabled) {
                        if (inputValue && !Object.keys(filteredOptions).length) {
                            setIsShowModal(true)
                            return
                        }
                        optionsListModal.handleModal()
                    }
                }}

                isShowModal={optionsListModal.isShowModal} handleInputChange={handleInputChange}
                dropdownProps={dropdownButtonProps}
            />
            <Hint hint={hint}/>
            <Popup
                ref={popupCreateButton}
                isShow={isShowModal && !isDisabled}
                leftInput={coordinatesLeft}
                width={width}
                topInput={coordinatesTop}>
                <CreateOptionButton
                    disabled={isPendingCreate}
                    inputValue={inputValue}
                    onCreateOption={handleCreateOption}/>
            </Popup>
            <Popup ref={popupList} isShow={optionsListModal.isShowModal && !isShowModal && !isDisabled}
                   leftInput={coordinatesLeft}
                   width={width}
                   topInput={coordinatesTop}>
                <OptionsList
                    handleModal={() => {
                        if (!isDisabled && !multiple) {
                            optionsListModal.handleModal()
                            rootEl.current?.focus()
                        }
                    }}
                    selectedOptions={selectedOptions}
                    onChangeSelect={handleChangeSelect}
                    options={filteredOptions}/>
            </Popup>
        </div>
    )
}
