import {memo} from "react"
import {CustomDropdownOptionProps, CustomOption} from "./custom-option.tsx";
import {DefaultOption} from "./default-option.tsx";

interface OptionProps {
    text: string | number;
    handleShowList: () => void;
    customDropdownOptionProps?: CustomDropdownOptionProps
    isSelected: boolean
    isDisabled?: boolean
}

export const Option = memo(function Option(props: OptionProps) {
    const {text, handleShowList, customDropdownOptionProps, isDisabled, isSelected} = props
    return (
        <>
            {
                !customDropdownOptionProps
                    ? <DefaultOption isDisabled={isDisabled} text={text} handleShowList={handleShowList}
                                     isSelected={isSelected}/>
                    : <CustomOption {...customDropdownOptionProps} isDisabled={isDisabled} isSelected={isSelected}
                                    handleShowList={handleShowList}/>
            }
        </>
    )
})