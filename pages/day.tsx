import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Button, Footer, Variant, Input, TrainingMax, Lift } from '../components'

const Home: NextPage = () => {
    return (
        <>
            <div className="flex justify-center my-4"><Button variant={Variant.secondary} onClick={() => { window.location.href = "/cycle" }}>back</Button></div >
            <div><Header title="day one"></Header></div >
            <div className="my-16"><TrainingMax lift="squat" weight={255} />
                <TrainingMax lift="dealift" weight={285} />
            </div>
            <Lift lift="squat" percent={.8} weight={255} />
            <Lift lift="squat" percent={.9} weight={255} />
            <Lift lift="squat" percent={1} weight={255} />
            {/* <div className="flex justify-center my-4"><Input variant={Variant.primary}></Input></div > */}
            <div><Footer text="hello there this is the footer"></Footer></div>
        </>
    )
}

export default Home
