import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentWithoutHeader } from '../../components/CardComponents/CardComponentWithoutHeader'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

import fs from 'fs'
import path from 'path'

export async function getStaticPaths() {
    const pagesInfoDirectory = path.join(process.cwd(), '/data/pages/resolvable/resolvable_pages_info/')
    const filenames = fs.readdirSync(pagesInfoDirectory)
    const paths = filenames.map((filename) => {
        return (
            { params: { pid: filename.slice(0, -5) } }
        )
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const pagesInfoDirectory = path.join(process.cwd(), '/data/pages/resolvable/resolvable_pages_info/')
    const filenames = fs.readdirSync(pagesInfoDirectory)
    const pageFileName = filenames.filter(filename => filename.slice(0, -5) == context.params.pid);
    const pageFilePath = path.join(pagesInfoDirectory, pageFileName[0])
    const page = fs.readFileSync(pageFilePath, 'utf8')
    
    // load markdown
    const pagesTextDirectory = path.join(process.cwd(), '/data/pages/resolvable/resolvable_pages_texts/')
    const parsedPage = JSON.parse(page)
    const mdText = fs.readFileSync(pagesTextDirectory + parsedPage.text, 'utf8')

    return {
        props: {
            page,
            mdText
        },
    }
}


export default function ResolvablePage ( {page, mdText} ) {
    const data = JSON.parse(page)
    const text = mdText
    
    return (
        <MainLayout
            title={data.title}
            description={data.description}
        >
            <HeadingComponent 
                heading='Что мы лечим'
            />
            <CardComponentWithoutHeader
                // cardHeader={data.header}
                // cardTitle={data.title}
                cardText={text}
                cardImg={data.img}
            />
        </MainLayout>
    )
}