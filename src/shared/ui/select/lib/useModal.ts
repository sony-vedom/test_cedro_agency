import React, {useState} from "react";

export type useModalType = () => {
    isShowModal: boolean,
    handleModal: () => void
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
};
export const useModal: useModalType = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false)
    return {
        isShowModal,
        handleModal: () => {
            setIsShowModal(prev => !prev)
        },
        setIsShowModal
    }
}
