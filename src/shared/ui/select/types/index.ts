import {ChipProps} from "../../chip";
import {CustomDropdownOptionProps} from "shared/ui/select/ui/options-list/option/custom-option.tsx";

export type Value = any

export interface OptionType {
    name: string
    value?: Value
    dropdownOptionProps?: CustomDropdownOptionProps
    labelOptionProps?: ChipProps
    disabled?: boolean
}

export interface OptionsInternal {
    [key: number]: { option: OptionType }
}
