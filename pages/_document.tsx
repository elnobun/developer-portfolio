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
