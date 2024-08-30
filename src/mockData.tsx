import {FC} from "react";
import classNames from "classnames";

export const mockCustomElem = {
    value: [1, 2, 3, 5], name: "List item3",
    dropdownOptionProps: {
        title: "Нейтири",
        subtitle: "Смешно разговаривает",
        avatarComponent: <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kzl1aQvIkyNVBzz8iu6xKcjROVMssdoTdg&s'}
        alt="avatar"
        className="my-auto w-[32px] h-[32px] rounded-[50%]"/>,
    },
    labelOptionProps: {
        name: "Нейтири",
        avatarComponent: <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kzl1aQvIkyNVBzz8iu6xKcjROVMssdoTdg&s'}
        alt="avatar"
        className="my-auto w-full h-full rounded-[50%]"/>,
    }
}

export const mockCustomElemStrange = {
    value: [1, 2, 3, 5], name: "Strange",
    dropdownOptionProps: {
        title: "Нейтири",
        subtitle: "Смешно разговаривает",
        avatarComponent: <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kzl1aQvIkyNVBzz8iu6xKcjROVMssdoTdg&s'}
        alt="avatar"
        className="my-auto w-[32px] h-[32px] rounded-[50%]"/>,
        checkComponent: <img loading="lazy"
        src={'https://www.svgrepo.com/show/13695/star.svg'}
        alt=""
        className="object-contain self-stretch my-auto w-8 aspect-square"/>
    },
    labelOptionProps: {
        name: "Нейтири",
        avatarComponent: <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kzl1aQvIkyNVBzz8iu6xKcjROVMssdoTdg&s'}
        alt="avatar"
        className="my-auto w-full h-full rounded-[50%]"/>,
        crossComponent: <img loading="lazy"
        src={'https://www.svgrepo.com/show/468387/cross.svg'}
        alt=""
        className="w-full h-full"/>
    }
}

export const NewCheckIcon: FC<{isShowList: boolean}> = ({isShowList}) => {
    return <img
        src={"https://www.svgrepo.com/show/418044/arrow-bottom-1.svg"}
    alt="drop-down"
    className={classNames("shrink-0 self-stretch my-auto aspect-square show-animation w-[22px]", {
        'rotate-180': isShowList
    })}
    />
}