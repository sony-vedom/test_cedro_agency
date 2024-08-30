import { forwardRef, PropsWithChildren} from "react";
import {createPortal} from "react-dom";
import classNames from "classnames";

interface PopupProps extends PropsWithChildren {
    width?: number
    topInput?: number
    leftInput?: number
    isShow?: boolean
}

export const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
        const {width, topInput, children, leftInput, isShow} = props
        return (
            createPortal(
                <div
                    ref={ref}
                    id={"select-popup"}
                    style={{
                        width: `${width}px`,
                        top: `${topInput ? topInput : -9999}px`,
                        left: `${topInput ? leftInput : -9999}px`
                    }}
                    className={classNames("show-animation opacity-0 invisible absolute mt-2", {
                        ["!visible !opacity-100"]: isShow
                    })}>
                    {children}
                </div>, document.body
            )
        )
    }
)