import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Icon Facility Services"}
                </title>
            </Head>
        </>
    )
}

export default PageHead