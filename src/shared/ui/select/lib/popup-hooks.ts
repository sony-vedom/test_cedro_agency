import React, {useEffect, useState} from "react";

export const useGetDisplayValuesForPopup = (ref: React.MutableRefObject<HTMLDivElement | null>, coordinatesStateDependency: any[]) => {
    const [coordinates, setCoordinates] = useState<DOMRect | undefined>()
    useEffect(() => {
        setCoordinates(ref?.current?.getBoundingClientRect())
    }, [...coordinatesStateDependency]);
    return {
        coordinatesTop: coordinates?.bottom,
        coordinatesLeft: coordinates?.left,
        width: ref?.current?.clientWidth
    }
}

export const useClosePopupByBackgroundClick = (refRootEl: React.MutableRefObject<HTMLDivElement | null>, popupRef: React.MutableRefObject<HTMLDivElement | null>, handleClose: () => void) => {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (!(refRootEl.current!.contains(e.target as HTMLElement) || popupRef.current!.contains(e.target as HTMLElement))) {
                handleClose()
            }
        }
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [])
}
