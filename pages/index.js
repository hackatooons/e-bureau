import Head from 'next/head'
import Form from '../components/Form'

export default function Home({ isConnected }) {
  return (
    <>
      <Head>
        <title>E-bureau</title>
      </Head>
      <Form title="General Diary" fields={['Emails', 'Sample', 'Sample']} />
    </>
  )
}
