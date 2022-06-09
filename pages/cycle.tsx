import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Button, Footer, Variant, Input, TrainingMax } from '../components'

const Home: NextPage = () => {
    return (
        <>
            <div className="flex justify-center my-4"><Button variant={Variant.secondary} onClick={() => { window.location.href = "/" }}>back</Button></div >
            <div><Header title="cycles"></Header></div >
            <div className="my-16"><TrainingMax lift="squat" weight={255} />
                <TrainingMax lift="bench" weight={175} />
                <TrainingMax lift="dealift" weight={285} />
                <TrainingMax lift="ohp" weight={115} />
            </div>
            <div className="flex justify-center my-4"><Button variant={Variant.secondary} onClick={() => { window.location.href = "/day" }}>day one</Button></div >
            <div className="flex justify-center my-4"><Button variant={Variant.secondary} onClick={() => { console.log("JELGA") }}>day two</Button></div >
            <div className="flex justify-center my-4"><Button variant={Variant.secondary} onClick={() => { console.log("JELGA") }}>day three</Button></div >
            {/* <div className="flex justify-center my-4"><Input variant={Variant.primary}></Input></div > */}
            <div><Footer text="hello there this is the footer"></Footer></div>
        </>
    )
}

export default Home
