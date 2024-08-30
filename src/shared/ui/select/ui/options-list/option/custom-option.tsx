import React, {ReactNode} from "react";
import {CheckIcon} from "shared/ui/checkIcon";
import classNames from "classnames";

export interface CustomDropdownOptionProps {
    title: string
    subtitle?: string
    avatarComponent?: ReactNode
    checkComponent?: ReactNode
    isDisabled?: boolean
}

export const CustomOption: React.FC<CustomDropdownOptionProps & {
    isSelected: boolean,
    handleShowList: () => void
}> = (props) => {
    const {
        title,
        subtitle,
        checkComponent,
        avatarComponent,
        isSelected,
        handleShowList,
        isDisabled
    } = props
    return (
        <div onClick={() => {
            if (!isDisabled) {
                handleShowList()
            }
        }}
             className={classNames("flex gap-3 items-center pr-3 pl-2 w-full rounded-lg hover:bg-opacity-5", {
                 ["disabled"]: isDisabled,
                 ["cursor-pointer hover:bg-opacity-5"]: !isDisabled,
             })}>
            <div className="flex flex-1 shrink items-center self-stretch py-2 my-auto basis-4">
                <div className={classNames("flex gap-2 items-center self-stretch pr-2 my-auto w-10", {
                    [" opacity-[0.5]"]: isDisabled,

                })}>
                    {
                        avatarComponent
                    }
                </div>
                <div
                    className="flex flex-col flex-1 shrink justify-center self-stretch pl-1 my-auto font-medium whitespace-nowrap basis-0">
                    <div
                        className={classNames("text-base text-neutral-900 text-opacity-90 text-[15px] leading-[147%] tracking-[-0.01em]", {
                            ["disabled text-[rgba(19, 8, 23, 0.4)]"]: isDisabled,
                        })}>
                        {title}
                    </div>
                    <div
                        className="text-sm tracking-normal leading-none text-neutral-900 text-opacity-40">
                        {subtitle}
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center self-stretch py-1 pl-4 my-auto w-[42px]">
                {isSelected && <CheckIcon checkComponent={checkComponent}/>}
            </div>
        </div>
    )
}