type Props = {
    lift: string,
    weight: number,
}

export const TrainingMax: React.FC<Props> = ({ lift, weight }) => <p className=" text-center text-base font-bold">{lift}: {weight}</p>