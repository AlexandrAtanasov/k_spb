import Head from 'next/head'
import React from 'react'

export function HeadComponent( {title, description} ) {
    return (
        <React.Fragment>
            <Head>
                <title>
                    {title} | Кинезитерапия в Санкт-Петербурге
                </title>
                <meta 
                    name='description' 
                    content={description}
                />
        
            </Head>
        </React.Fragment>
    )
}