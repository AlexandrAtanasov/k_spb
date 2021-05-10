import { Button, Container } from 'react-bootstrap'

// import Components
import { ModalPresale } from '../Modal_Presale/Modal_Presale'

// import styles 
import style_heading from '../../styles/components/HeadingComponent.module.scss'
import style from '../../styles/components/CardDeckComponent.module.scss'

export function MainPresaleButton ( ) {

    return (
        <div>
            <Container>
                <Button variant="success" size="lg" block>
                    <ModalPresale />
                </Button>
            </Container>
        </div>
    )
}