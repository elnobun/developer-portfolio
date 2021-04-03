import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="title" content="Ellis Enobun | FrontEnd Web Developer & Designer"/>
                    <meta name="description"
                          content="FrontEnd web developer with experience in design, developing and maintaining responsive websites. Proficient in developing user stories, use cases, user interfaces, writing and testing codes, implementing new features based on user feedback."/>
                    <meta name="keywords" content="FrontEnd web developer, Responsive websites, web design"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"/>
                    {/*Open Graph Facebook*/}
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="Ellis Enobun | FrontEnd Web Developer & Designer"/>
                    <meta property="og:image" content="https://i.imgur.com/jHM3nel.png"/>
                    <meta property="og:description"
                          content="FrontEnd web developer with experience in design, developing and maintaining responsive websites. Proficient in developing user stories, use cases, user interfaces, writing and testing codes, implementing new features based on user feedback."/>
                    <meta property="og:url" content="https://www.ellisenobun.com/"/>
                    <meta name="author" content="Ellis Enobun"/>

                    {/*Twitter*/}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://www.ellisenobun.com/"/>
                    <meta property="twitter:title" content="Ellis Enobun | FrontEnd Web Developer & Designer"/>
                    <meta property="twitter:description"
                          content="FrontEnd web developer with experience in design, developing and maintaining responsive websites. Proficient in developing user stories, use cases, user interfaces, writing and testing codes, implementing new features based on user feedback."/>
                    <meta property="twitter:image" content="https://i.imgur.com/jHM3nel.png"/>
                    <meta name="author" content="Ellis Enobun"/>
                </Head>
                <body className="dark:bg-dark">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
