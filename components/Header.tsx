type Props = {
    title: string
}

export const Header: React.FC<Props> = ({ title }) => <h1 className="my-16 text-center text-2xl font-bold">{title}</h1>