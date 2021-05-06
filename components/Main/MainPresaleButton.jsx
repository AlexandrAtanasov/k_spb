import { Button, Container } from 'react-bootstrap'

// import styles 
import style_heading from '../../styles/components/HeadingComponent.module.scss'
import style from '../../styles/components/CardDeckComponent.module.scss'

export function MainPresaleButton ( ) {

    return (
        <div>
            <Container>
                <Button variant="success" size="lg" block>
                    Оформить абонемент по предпродаже
                </Button>
            </Container>
        </div>
    )
}