import {FC} from "react"
import {OptionsInternal} from "../../types"
import Scrollbar from "react-scrollbars-custom";
import classNames from "classnames";
import {ValueOf} from "shared/lib/type";
import {Option} from "./option"
import * as styles from "./style.ts"
import {useModalType} from "shared/ui/select/lib/useModal.ts";

interface OptionsListProps extends Omit<ReturnType<useModalType>, "setIsShowModal" | "isShowModal"> {
    options: OptionsInternal,
    onChangeSelect: (option: ValueOf<OptionsInternal>, index: number) => void
    selectedOptions: OptionsInternal | null
}

export const OptionsList: FC<OptionsListProps> = (props) => {
    const {options, handleModal, selectedOptions, onChangeSelect} = props
    if (!Object.keys(options)) {
        return <></>
    }
    return (
        <div className={styles.optionListStyles}>
            <Scrollbar
                style={{
                    width: "100%",
                    height: `calc(${Object.keys(options).length} * 42px)`,
                    maxHeight: "170px"
                }}
                trackYProps={{
                    className: '!bg-transparent !flex !justify-end',
                }}
                thumbYProps={{
                    className: classNames('!bg-[#919399] !w-[6px] !bg-opacity-[0.48]')
                }}
                contentProps={{
                    className: classNames('!p-0')
                }}
                wrapperProps={{
                    className: classNames('!inset-0')
                }}
            >
                {Object.entries(options).map(([key, val]) => (
                    <Option
                        isDisabled={val.option.disabled}
                        isSelected={selectedOptions ? key in selectedOptions : false}
                        key={key}
                        handleShowList={() => {
                            handleModal()
                            onChangeSelect(val, Number(key))
                        }}
                        customDropdownOptionProps={val.option.dropdownOptionProps}
                        text={val.option.name ?? ""}
                    />
                ))}
            </Scrollbar>
        </div>
    )
}


