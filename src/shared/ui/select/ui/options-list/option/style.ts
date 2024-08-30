import {
    alignItems, backgrounds, borderRadius,
    classnames, cursor,
    display,
    fontSize,
    fontWeight,
    gap,
    letterSpacing, lineHeight, minHeight,
    padding, textColor, textOpacity, TTailwindString,
    width
} from "tailwindcss-classnames";

export const optionWrapperStyles = classnames(
    display('flex'),
    gap("gap-2"),
    alignItems("items-center"),
    padding("px-3", "py-2"),
    width("w-full"),
    fontWeight('font-medium'),
    fontSize('text-base'),
    letterSpacing('tracking-normal'),
    lineHeight('leading-none'),
    backgrounds('bg-white'),
    borderRadius('rounded'),
    minHeight('min-h-[36px]' as TTailwindString),
    textColor('text-neutral-900'),
    textOpacity('text-opacity-90'),
    cursor('cursor-pointer'),
)
