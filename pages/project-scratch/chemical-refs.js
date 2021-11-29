import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>Chemical References</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>back home</a>
                </Link>
            </h2>
        </>
    )
  }
  