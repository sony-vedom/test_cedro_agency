import {FC} from "react";

export const Hint: FC<{ hint?: string }> = (props) => {
    const {hint} = props
    return <p className="hint text-[13px] mt-2 leading-[138%] tracking-[-0.01em] text-[rgba(19,8,23,0.4)]">
        {hint}
    </p>
}