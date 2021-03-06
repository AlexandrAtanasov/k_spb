import { Button, CardDeck, Card, Container } from 'react-bootstrap'
import ReactMarkdown from "react-markdown";
import { MainPresaleButton } from '../Main/MainPresaleButton'

// import styles 
import style_heading from '../../styles/components/HeadingComponent.module.scss'
import style from '../../styles/components/CardDeckComponent.module.scss'

// import data
import { presale } from '../../data/main/presale/presale'
import { presale_headings } from '../../data/main/presale/presale_headings.js'

// import button
import { CallbackButton } from '../Modal_Callback/MainCallbackButton'

export function MainPresale( ) {

    return (
        <div>
            {/* <Container className={` ${style_heading.heading_container} `}>
                <h2 className={` ${style_heading.heading} `} >
                    {presale_headings.openPreSale}
                </h2>
            </Container> */}

            {/* <MainPresaleButton/> */}
            
            <Container className={` ${style_heading.heading_container} `}>
                <h2 className={` ${style_heading.heading} `} >
                    {presale_headings.centerHelp}
                </h2>
            </Container>

            <Card 
                className={` ${style.margin} `}
                border="light" 
            >
                <Card.Body className={` ${style.padding}`}>
                    <CardDeck
                        className={`${style.deck_justify}`} 
                    >
                        {presale.map(elem => {
                            return(
                                elem.active ? 
                                    <Card 
                                        key={elem.id}
                                        className={`${style.min_width} ${style.align}`}    
                                    >
                                        <Card.Img 
                                            variant="top" 
                                            src={elem.img} 
                                        />
                                        <Card.Body>
                                        <Card.Title>
                                            {elem.title}
                                        </Card.Title>
                                        <ReactMarkdown
                                            source={elem.text} 
                                        />
                                        </Card.Body>
                                    </Card>
                                : null
                            )
                        })}
                    </CardDeck>
                </Card.Body>
            </Card>
            
            {/* ???????????? ?????? ???????????? */}
            {/* <MainPresaleButton/> */}

            {/* ???????????? ???????????? ?????????????????? ???????????? */}
            <CallbackButton />
            <br/>
            
        </div>
    )
}