import React from 'react'
import { Button, Container, Carousel } from 'react-bootstrap'

import { MainPresaleButton } from '../Main/MainPresaleButton'
import { CallbackButton } from '../Modal_Callback/MainCallbackButton'

// import styles
import style from '../../styles/components/Carousel.module.scss'

export function CarouselComponent( {data} ) {

    return (
        <Carousel style={{marginTop: '-56px'}}>
            {data.map(img => {
                return (
                    img.text_disable ? (
                        <Carousel.Item key={img.id}>
                            <img
                                className="d-block w-100"
                                src={`${img.src}`}
                                alt={img.alt}
                            />
                            <Carousel.Caption 
                                className="d-flex flex-column h-100 align-items-center"
                                // className=" justify-content-center"
                                style={{position: 'absolute', transform: 'translateY(51%)!important'}}
                            >
                                {/* Кнопка перевода к оплате */}
                                {/* <MainPresaleButton/> */}
                                
                                {/* Кнопка заказаобратного звонка */}
                                <CallbackButton />

                            </Carousel.Caption>
                        </Carousel.Item>            
                    ) : (
                        <Carousel.Item key={img.id}>
                        <img
                            className="d-block w-100"
                            src={`${img.src}`}
                            alt={img.alt}
                        />
                        <Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center">
                            <h3
                                className={` ${style.h3_background} `}
                            >
                                {img.h3}
                            </h3>
                            <p
                                className={` ${style.p_background} `}
                            >
                                {img.p}
                            </p>
                            <MainPresaleButton/>
                        </Carousel.Caption>
                    </Carousel.Item>  
                    )
                )
            })}
        </Carousel>
    )
}