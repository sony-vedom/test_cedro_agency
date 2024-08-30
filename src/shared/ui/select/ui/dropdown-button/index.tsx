import {ComponentType, FC} from "react";
import arrowSvg from "../../../../assets/svg/arrow.svg"
import classNames from "classnames";

export interface DropdownButtonProps {
    DropdownComponent?: ComponentType<{ isShowList: boolean }>
    dropDownSrcImage?: string
}

export const DropdownButton: FC<DropdownButtonProps & {
    isShowList: boolean
    onClick: () => void
}> = (props) => {
    const {dropDownSrcImage = arrowSvg, DropdownComponent, isShowList, onClick} = props
    return (
        <button onClick={onClick} className={"w-5 "}>
            {!DropdownComponent
                ? <img
                    src={dropDownSrcImage}
                    alt="drop-down"
                    className={classNames("shrink-0 self-stretch my-auto aspect-square show-animation w-[12px]", {
                        'rotate-180': isShowList
                    })}
                />
                : <DropdownComponent isShowList={isShowList}/>}
        </button>
    )
}
