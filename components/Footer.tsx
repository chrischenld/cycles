type Props = {
    text: string
}

export const Footer: React.FC<Props> = ({ text }) => <p className="my-16 text-center text-base">{text}</p>