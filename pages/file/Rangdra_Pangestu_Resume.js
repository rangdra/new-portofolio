import Head from 'next/head';

const Resume = () => {
    return (
        <>
            <Head>
                <title>Rangdra_Pangestu_Resume.pdf</title>
            </Head>
            <iframe
                src="/Rangdra_Pangestu_Resume.pdf"
                frameBorder="0"
                scrolling="auto"
                height="1200px"
                width="100%"
            ></iframe>
        </>
    );
};

export default Resume;
