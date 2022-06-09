type Props = {
    variant?: string
}

export const Input: React.FC<Props> = ({ variant }) =>
    <input className="border rounded px-4 h-16 w-24 text-primary text-base text-center focus:outline-none focus:ring-1 focus:ring-purple focus:border-transparent" type="text" placeholder="315"></input>