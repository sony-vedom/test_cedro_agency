import {OptionsInternal} from "../types";
import React, {forwardRef} from "react";
import {DropdownButton, DropdownButtonProps} from "./dropdown-button";
import classNames from "classnames";
import searchSvg from "shared/assets/svg/search.svg";
import {SimpleInput} from "../../simple-input";
import {ChipList} from "./chip-list";
import {useModalType} from "shared/ui/select/lib/useModal.ts";

interface SearchInputProps extends Omit<ReturnType<useModalType>, "setIsShowModal"> {
    title?: string
    multiple?: boolean
    selectedOptions: OptionsInternal | null
    setSelectedOptions: React.Dispatch<React.SetStateAction<OptionsInternal | null>>
    isDisabled?: boolean
    inputValue?: string
    placeholder?: string
    handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void
    dropdownProps?: DropdownButtonProps
}

export const SearchInput = forwardRef<HTMLDivElement, SearchInputProps>((props, ref) => {
    const {
        title, multiple, selectedOptions,
        setSelectedOptions, inputValue,
        placeholder, handleModal, isShowModal, handleInputChange,
        dropdownProps, isDisabled
    } = props
    return (
        <div ref={ref} className="flex flex-col w-full text-base whitespace-nowrap">
            <span className="font-semibold tracking-tight leading-none text-neutral-900 text-opacity-90 mb-2">
            {title}
            </span>
            <div className={"inline-block"}>
                <div className={
                    classNames("flex overflow-hidden gap-2.5 items-center p-2 bg-white rounded-lg flex-wrap input-wrapper " +
                        "border border-solid border-neutral-900 border-opacity-10 min-h-[44px] chip-list min-w-[284px] max-w-[450px] transition-all duration-200")
                }>
                    {!Object.keys(selectedOptions ?? {}).length && multiple && <label htmlFor={"search-input"}>
                        <img draggable="false" src={searchSvg} alt={"search"}
                             className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"/>
                    </label>}
                    {multiple && <ChipList onDelete={(index) => {
                        const copy = {...selectedOptions}
                        delete copy[index]
                        setSelectedOptions(copy)
                    }} options={selectedOptions}/>}
                    <SimpleInput
                        readOnly={isDisabled}
                        onClick={() => {
                            if (!isDisabled) {
                                handleModal()
                            }
                        }}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => {
                            handleInputChange((e))
                        }}
                        value={inputValue} placeholder={placeholder}/>
                    <DropdownButton
                        onClick={handleModal}
                        isShowList={isShowModal}
                        {...dropdownProps}
                    />
                </div>
            </div>
        </div>
    )
})