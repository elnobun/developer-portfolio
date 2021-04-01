import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="title" content="Ellis Enobun | FrontEnd Web Developer & Designer"/>
                    <meta name="description"
                          content="FrontEnd web developer with experience in design, developing and maintaining responsive websites. Proficient in developing user stories, use cases, user interfaces, writing and testing codes, implementing new features based on user feedback.."/>
                    <meta name="keywords" content="FrontEnd web developer, Responsive websites, web design"/>
                </Head>
                <body className="dark:bg-dark">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
