import { useState } from "react"

export enum Variant {
    primary = "Primary",
    secondary = "Secondary",
    tertiary = "Tertiary"
}

const clickCounter = (fart?: number) => ({ fart = 0 }) => {
    const [clicks, setClicks] = useState(fart);
    return setClicks(clicks + 1)
}

type Props = {
    icon?: React.ReactNode
    variant?: Variant
    onClick: () => void
}

const getButtonClassName = (variant: Variant) => {
    switch (variant) {
        case Variant.primary:
            return "bg-purple hover:bg-darkPurple text-secondary"
            break
        case Variant.secondary:
            return "bg-lightPurple hover:bg-mediumPurple text-purple"
            break
    }
}

export const Button: React.FC<Props> = ({ variant = Variant.primary, children, onClick }) => {
    const buttonClassName = getButtonClassName(variant)

    return <button
        className={`px-8 py-4 flex-initial rounded text-base font-bold  ${buttonClassName}`}
        onClick={onClick}> {children}</button >
}