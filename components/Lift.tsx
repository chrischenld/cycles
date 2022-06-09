import { Button, Variant, Input, TrainingMax } from '../components'

type Props = {
    lift: string,
    percent: number,
    weight: number,
}

export const Lift: React.FC<Props> = ({ lift, percent, weight }) =>
    <div className="flex my-4 justify-center space-x-8">
        <p className="px-8 py-4 text-base font-bold">{lift} @ {`${percent * 100}%`}: {weight}</p>
        <Button onClick={() => { console.log("JELGA") }}>5</Button>
    </div>