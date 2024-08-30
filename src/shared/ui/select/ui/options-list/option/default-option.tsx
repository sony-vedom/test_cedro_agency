import React from "react";
import classNames from "classnames";
import {optionWrapperStyles} from "./style.ts";
import {CheckIcon} from "shared/ui/checkIcon";

interface DefaultOptionProps {
    text: string | number;
    handleShowList: () => void;
    isSelected: boolean
    isDisabled?: boolean
}

export const DefaultOption: React.FC<DefaultOptionProps> = (props) => {
    const {text, handleShowList, isSelected, isDisabled} = props
    return (
        <div onClick={() => {
            if (!isDisabled) {
                handleShowList()
            }
        }} className={classNames(optionWrapperStyles, 'min-h-[42px]', {
            ['hover:bg-[#130817] hover:bg-opacity-5 cursor-pointer']: !isDisabled
        })}>
            <div className={classNames("flex-1 shrink self-stretch my-auto w-full", {
                ["disabled text-[rgba(19, 8, 23, 0.4)]"]: isDisabled,
                ["cursor-pointer"]: !isDisabled
            })}>
                {text}
            </div>
            {isSelected && <CheckIcon isDisabled={isDisabled}/>}
        </div>
    )
}
