import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <title>
                    {headTitle ? headTitle : "Icon Facility Services"}
                </title>
            </Head>
        </>
    )
}

export default PageHead