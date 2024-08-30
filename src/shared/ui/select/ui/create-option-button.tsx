import {type FC} from "react";
import classNames from "classnames";
import add from "shared/assets/svg/add.svg";

interface CreateOptionButtonProps {
    inputValue?: string
    onCreateOption: () => void
    disabled?: boolean
}

export const CreateOptionButton: FC<CreateOptionButtonProps> = (props) => {
    const {inputValue, onCreateOption, disabled} = props
    return (
        <button
            className={
                classNames("flex overflow-hidden flex-col gap-1 justify-center p-1 bg-white rounded-lg" +
                    " border border-solid shadow-2xl backdrop-blur-md border-neutral-900 border-opacity-10 w-full", {
                    ["disabled"]: disabled
                })
            }
            onClick={() => {
                if (!disabled) {
                    onCreateOption()
                }
            }}
        >
            <div
                className="flex overflow-hidden gap-2 items-center px-3 py-1.5 w-full bg-white rounded min-h-[36px] max-w-[434px] break-words">
                <img src={add} alt="add"
                     className="object-contain self-stretch my-auto w-5 aspect-square"/>
                <span
                    className="flex-1 text-start shrink self-stretch my-auto text-base font-medium tracking-normal leading-none min-w-[240px] text-neutral-900 text-opacity-90">
                    Создать «{inputValue}»
                </span>
            </div>
        </button>
    )
}
