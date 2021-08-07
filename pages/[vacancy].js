import { MainLayout } from '../layouts/MainLayout'
import { CardComponentWithoutHeader } from '../components/CardComponents/CardComponentWithoutHeader'
import { HeadingComponent } from '../components/Heading/HeadingComponent'

import { local } from '../data/localization_data/pages/vacancy/vacancy'
import { vacancy_texts } from '../data/pages/vacancy/vacancy_texts'

import fs from 'fs'
import path from 'path'

export async function getStaticPaths() {
    const pagesInfoDirectory = path.join(process.cwd(), '/data/pages/vacancy/vacancy_pages_info/')
    const filenames = fs.readdirSync(pagesInfoDirectory)
    const paths = filenames.map((filename) => {
        return (
            { params: { vacancy: filename.slice(0, -5) } }
        )
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const pagesInfoDirectory = path.join(process.cwd(), '/data/pages/vacancy/vacancy_pages_info/')
    const filenames = fs.readdirSync(pagesInfoDirectory)
    const pageFileName = filenames.filter(filename => filename.slice(0, -5) == context.params.vacancy);
    const pageFilePath = path.join(pagesInfoDirectory, pageFileName[0])
    const page = fs.readFileSync(pageFilePath, 'utf8')
   
    // load markdown
    const pagesTextDirectory = path.join(process.cwd(), '/data/pages/vacancy/vacancy_pages_texts/')
    const mdText = vacancy_texts.map(elem => {
        return(
            elem.active ? (
                fs.readFileSync(pagesTextDirectory + elem.text, 'utf8')
            ) : null
        )
    })

    return {
        props: {
            page,
            mdText
        },
    }
}

export default function VacancyPage ( {page, mdText} ) {
    const data = JSON.parse(page)
    const text = mdText

    return (
        <MainLayout
            title={data.title}
            description={`Вакансии центра кинезитарапии`}
        >
            <HeadingComponent 
                heading={local.main_layout_title}
            />
            {text.map(text => {
                return(
                    <div 
                        key={Math.random()}
                    >
                        <CardComponentWithoutHeader
                            // cardHeader={data.header}
                            // cardTitle={data.title}
                            cardText={text}
                        />
                    </div>
                )})
            }
        </MainLayout>
    )
}