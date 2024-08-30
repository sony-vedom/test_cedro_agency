import classnames, {
    backdropBlur,
    backgroundColor,
    borderColor,
    borderOpacity,
    borderRadius,
    borders,
    boxShadow,
    display,
    flexDirection,
    gap,
    minWidth,
    padding,
    TTailwindString,
} from "tailwindcss-classnames";

export const optionListStyles: TTailwindString = classnames(
    display('flex'),
    flexDirection('flex-col'),
    gap('gap-1'),
    padding('p-1'),
    minWidth('min-w-[284px]' as TTailwindString),
    backgroundColor('bg-white'),
    borderRadius('rounded-lg'),
    borders('border', 'border-solid'),
    backdropBlur('backdrop-blur-md'),
    borderColor('border-neutral-900'),
    borderOpacity('border-opacity-10'),
    boxShadow('shadow-pre-xl' as TTailwindString)
);
