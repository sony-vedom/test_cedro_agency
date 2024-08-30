import React, {ReactNode} from "react";
import crossIcon from "shared/assets/svg/cross.svg"

export interface ChipProps {
    name: string;
    avatarComponent?: ReactNode;
    crossComponent?: ReactNode
}

export const Chip: React.FC<ChipProps & { onDelete: () => void }> = (props) => {
    const {
        name,
        avatarComponent,
        onDelete,
        crossComponent
    } = props
    return (
        <div className="flex justify-center  p-1 rounded bg-purple-900 bg-opacity-10 min-h-[24px] items-start">
            {avatarComponent && <div className={"shrink-0 self-stretch my-auto w-[16px] h-[16px]"}>
                {avatarComponent}
            </div>}
            <div
                className="gap-2 self-stretch pr-0.5 pl-1 my-auto font-medium text-xs leading-[133%] tracking-[-0.01em] text-[#6e328c]">{name}</div>
            <button className={"shrink-0 self-stretch my-auto w-4 h-4 aspect-square flex justify-center items-center"} onClick={onDelete}>
                {
                    crossComponent
                        ? crossComponent
                        : <img
                            src={crossIcon}
                            alt="cross"/>}
            </button>
        </div>
    )
}
