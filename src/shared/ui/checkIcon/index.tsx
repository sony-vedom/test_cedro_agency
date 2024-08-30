import {FC, ReactNode} from "react";
import CheckSvg from "shared/assets/svg/check.svg?react";
import CheckDisabledSvg from "shared/assets/svg/check-gray.svg?react";
import classNames from "classnames";

export const CheckIcon: FC<{ checkComponent?: ReactNode, isDisabled?: boolean }> = ({checkComponent, isDisabled}) => {
    return <>
        <div className={classNames("flex gap-2.5 items-start self-stretch p-0.5 my-auto w-[26px]")}>
            <div
                className="flex gap-2.5 justify-center items-center h-[22px] min-h-[22px] text-amber-400 rounded-[36px] w-[22px]">
                {!checkComponent
                    ? !isDisabled
                        ? <CheckSvg
                            className="object-contain self-stretch my-auto"/> :
                        <CheckDisabledSvg className="object-contain self-stretch my-auto"/>
                    : checkComponent}
            </div>
        </div>
    </>
}