import React, {FC} from "react";

export interface SimpleInputProps {
    placeholder?: string
    value?: string
    onInput: (e: React.FormEvent<HTMLInputElement>) => void
    onClick?: () => void
    readOnly?: boolean
}

export const SimpleInput: FC<SimpleInputProps> = (props) => {
    const {placeholder = "", value, onInput, onClick, readOnly} = props
    return <input
        autoComplete={'off'}
        id={"search-input"}
        name={"search-input"}
        onClick={onClick}
        onInput={onInput}
        value={value || ""}
        type="text"
        readOnly={readOnly}
        className="flex-1 shrink self-stretch my-auto basis-0 outline-none cursor-[initial]"
        placeholder={placeholder}
        aria-label={placeholder}
    />
}
