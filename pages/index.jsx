import Head from 'next/head'
import Nav from '../components/Nav'
import moment from 'moment'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home page</title>
      </Head>
      < Nav />

      <h1 style={{textAlign: "center", lineHeight: "45vh", fontFamily: "cursive"}} > {moment(new Date()).format("MMMM Do YYYY")} </h1>
      
    </div>
  )
}
