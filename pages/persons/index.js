import { MainLayout } from '../../layouts/MainLayout'
import { Row, Col, Tab, Nav } from 'react-bootstrap'

import { CardComponentDeck } from '../../components/CardComponents/CardComponentDeck'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { spb_persons } from '../../data/pages/persons/spb/spb_persons.js'
import { doctors_perm } from '../../data/pages/persons/perm/doctors_perm'
// import { administrators } from '../../data/pages/persons/administrators'
// import { trainers } from '../../data/pages/persons/trainers'

// import styles
import style from '../../styles/pages/contacts_page.module.scss'

export default function PersonsPage() {
    return (
        <MainLayout
            title='Персонал'
            description='Сотрудники центров Кинезис'
        >
            <HeadingComponent 
                heading='Наша команда'
            />
            <Tab.Container id="persons_cards" defaultActiveKey="first" >
                <Row 
                    className={` ${style.margin} justify-content-md-center`}
                >
                    <Nav variant="pills">
                        <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="first" className={style.button_outline_none}>
                                    Санкт-Петербург
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className={style.button_outline_none}>
                                    Пермь
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                        {/* <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="   " className={style.button_outline_none}>
                                    Администраторы
                                </Nav.Link>
                            </Nav.Item>
                        </Col> */}
                        {/* <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="   " className={style.button_outline_none}>
                                    Инструкторы
                                </Nav.Link>
                            </Nav.Item>
                        </Col> */}
                    </Nav>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <CardComponentDeck 
                                    data={spb_persons}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <CardComponentDeck 
                                    data={doctors_perm}
                                />
                            </Tab.Pane>
                            {/* <Tab.Pane eventKey="second">
                                <CardComponentDeck 
                                    data={administrators}
                                />
                            </Tab.Pane> */}
                            {/* <Tab.Pane eventKey="third">
                                <CardComponentDeck 
                                    data={trainers}
                                />
                            </Tab.Pane> */}
                        </Tab.Content>
                    </Col>
                </Row>
                
            </Tab.Container>
        </MainLayout>
    )
} 