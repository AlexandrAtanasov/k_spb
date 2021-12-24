import { Button, Container } from 'react-bootstrap'

// import Components
import { ModalCallback } from '../Modal_Callback/Modal_Callback'

// import styles 
import style_heading from '../../styles/components/HeadingComponent.module.scss'
import style from '../../styles/components/CardDeckComponent.module.scss'

export function CallbackButton ( ) {

    return (
        <div>
            <Container>
                <Button variant="success" size="lg" block>
                    <ModalCallback />
                </Button>
            </Container>
        </div>
    )
}