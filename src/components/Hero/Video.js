import React, { useState } from 'react';


const PlaceholderComponent = () => (
    <img src="/hero-placeholder.jpg" />
)

export default () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            {isLoading && <PlaceholderComponent />}
            <video autoPlay id="fullscreen-video" loop muted
                onLoadStart={() => {
                    console.log('...I am loading...')
                    setIsLoading(true)
                }}
                onLoadedData={() => {
                    console.log('Data is loaded!')
                    setIsLoading(false)
                }}>
                >
            <source src={"/hero.mp4"} type="video/mp4" />
                <track
                    default
                    kind="captions"
                    srcLang="en"
                    src="/media/examples/friday.vtt"
                />
            </video>
        </>
    )
}