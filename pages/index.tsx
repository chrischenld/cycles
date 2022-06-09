import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Button, Footer, Variant, Input } from '../components'

const noop = () => { }

const Home: NextPage = () => {
  return (
    <>
      <div><Header title="cycles"></Header></div >
      <div className="flex justify-center my-4"><Button variant={Variant.secondary} onClick={() => { window.location.href = "/cycle" }}>cycle three</Button></div >
      <div className="flex justify-center my-4"><Button onClick={noop}>start new cycle</Button></div >
      {/* <div className="flex justify-center my-4"><Input variant={Variant.primary}></Input></div > */}
      <div><Footer text="hello there this is the footer"></Footer></div>
    </>
  )
}

export default Home
