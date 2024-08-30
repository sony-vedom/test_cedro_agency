import React from "react";
import {OptionsInternal} from "../../types"
import {Chip} from "../../../chip"

interface ChipListProps {
    options?: OptionsInternal | null
    onDelete?: (index: number) => void
}

export const ChipList: React.FC<ChipListProps> = (props) => {
    const {options, onDelete} = props
    return (
        <>
            {Object.entries(options ?? {}).map(([key, value]) => {
                if (value.option.labelOptionProps) {
                    return <Chip key={key}
                                 onDelete={() => {
                                     onDelete?.(Number(key))
                                 }}
                                 {...value.option.labelOptionProps}
                    />
                }
                return <Chip key={key} name={value?.option?.name}
                             onDelete={() => {
                                 onDelete?.(Number(key))
                             }}
                />
            })}
        </>
    );
};
