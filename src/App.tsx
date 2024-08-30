import React from 'react'
import {Select} from "shared/ui/select";
import {mockCustomElem, mockCustomElemStrange, NewCheckIcon} from "./mockData.tsx";

const App: React.FC = () => {
    return (
        <main className={"grid gap-5 justify-start mx-auto p-10"}>
            <Select
                hint={"hint"}
                title={"Простой селект"}
                placeholder={"Placeholder"}
                onChange={(value, option) => {
                    console.log("Простой селект")
                    console.log(value)
                    console.log(option)
                    console.log("________________________")
                }}
                options={[
                    {value: "List item", name: "List item1"},
                    {value: 1, name: "List item2"},
                    mockCustomElem
                ]}/>
            <Select
                hint={"hint"}
                title={"Простой селект с комбобоксом и заблокированной опцией"}
                placeholder={"Placeholder"}
                options={[
                    {value: "List item", name: "List item1"},
                    {value: {count: 1}, name: "List item2", disabled: true},
                    {...mockCustomElem, disabled: true}
                ]}
                onChange={(value, option) => {
                    console.log("Простой селект с комбобоксом и заблокированной опцией")
                    console.log(value)
                    console.log(option)
                    console.log("________________________")
                }}
            />
            <Select
                title={"Мульти селект"}
                placeholder={"Placeholder"}
                multiple
                options={[
                    {value: "List item", name: "List item1"},
                    {value: [1, 2, 3, 4], name: "List item2"},
                    mockCustomElem
                ]}
                onChange={(value, option) => {
                    console.log("Мульти селект")
                    console.log(value)
                    console.log(option)
                    console.log("________________________")
                }}
            />
            <Select
                hint={"hint"}
                title={"Мульти селект с комбоксом"}
                placeholder={"Placeholder"}
                multiple
                combobox
                onAddOption={(inputValue, addNewValue, setPending) => {
                    const request = (value: string) => new Promise((resolve, _) => {
                        setTimeout(() => {
                            resolve(value)
                        }, 500)
                    })
                    setPending(true)
                    request(inputValue).then((value) => {
                        addNewValue({value: value, name: value as string,})
                        setPending(false)
                    })
                }}
                options={[
                    {value: "List item", name: "List item1"},
                    {value: 1, name: "List item2"},
                    mockCustomElem
                ]}
                onChange={(value, option) => {
                    console.log("Мульти селект с комбоксом")
                    console.log(value)
                    console.log(option)
                    console.log("________________________")
                }}
            />
            <Select
                hint={"hint"}
                title={"Мульти селект со странной кастомизацией и комбобоксом"}
                placeholder={"Placeholder"}
                multiple
                combobox
                dropdownButtonProps={{
                    DropdownComponent: NewCheckIcon
                }}
                onAddOption={(inputValue, addNewValue, setPending) => {
                    const request = (value: string) => new Promise((resolve, _) => {
                        setTimeout(() => {
                            resolve(value)
                        }, 500)
                    })
                    setPending(true)
                    request(inputValue).then((value) => {
                        addNewValue({value: value, name: value as string,})
                        setPending(false)
                    })
                }}
                options={[
                    mockCustomElemStrange,
                    mockCustomElemStrange,
                    mockCustomElemStrange
                ]}
                onChange={(value, option) => {
                    console.log("Мульти селект со странной кастомизацией и комбобоксом")
                    console.log(value)
                    console.log(option)
                    console.log("________________________")
                }}
            />
        </main>
    )
}

export default App
