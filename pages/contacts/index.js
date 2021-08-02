import { useState, useEffect } from 'react'
import { 
    Row,
    Col,
    Tab,
    Nav,
    Button,
    Card
} from 'react-bootstrap'
import { MainLayout } from '../../layouts/MainLayout'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
import { ModalCallback } from '../../components/Modal_Callback/Modal_Callback'
import { ModalContacts } from '../../components/Modal_Contacts/Modal_Contacts'
import ReactMarkdown from "react-markdown";

// import loadMaps from '../../data/pages/contacts/maps';

// import styles
import style from '../../styles/pages/contacts_page.module.scss'

// import data
import { contacts } from '../../data/pages/contacts/contacts'

export default function LocationsPage() {

    // const [loaded, setLoaded] = useState(false);
    // useEffect(() => {
    //     loadMaps(() => {
    //         setLoaded(true);
    //     });
    // });

    // TODO: REFACTOR THIS SHIT! tommorow...
    return (
        <MainLayout
            title='Как нас найти'
            description='Наш адрес в городе Санкт-Петербурге'
        >
            <HeadingComponent 
                heading='Как нас найти'
            />
            <Tab.Container id="persons_cards" defaultActiveKey="1" >
                
                <Row 
                    className={` ${style.margin} justify-content-md-center`}
                >
                    <Nav variant="pills">
                        {
                            contacts.map( elem => {
                                return (
                                    <Col lg='auto' key={elem.id}>
                                        <Nav.Item>
                                            <Nav.Link eventKey={elem.id} className={style.button_outline_none}>
                                                {elem.header}
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                )
                            })
                        }
                    </Nav>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <Tab.Content>
                            
                            <Tab.Pane eventKey={contacts[0].id} key={contacts[0].id}>
                                <Card id="card_contacts">
                                    <Card.Body>
                                        <Card.Title>
                                            {contacts[0].title}
                                        </Card.Title>
                                        {/* <ReactMarkdown
                                            source={contacts[0].text} 
                                        /> */}
                                    </Card.Body>
                                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abc2ea2478e78790d6e4c73d17bde597dd853a35872b3313ac4dc08a25091418b&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
                                </Card>
                            </Tab.Pane>

                        </Tab.Content>

                        <div className={` ${style.div_for_button} `} >
                            <Button className="button_green_color" href="#callback">
                                <ModalCallback />
                            </Button>
                        </div>
                        <div className={` ${style.div_for_button} `}>
                            <Button className="button_green_color" href="#callToCenters">
                                <ModalContacts />
                            </Button>
                        </div>
                        
                    </Col>
                </Row>
                
            </Tab.Container>
        </MainLayout>
    )
} 