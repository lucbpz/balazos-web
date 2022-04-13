import React from 'react'
import SectionTitle from "../SectionTitle"

const SecondHero = () => {

    return (
        <div className="full row" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            width: "100vw",
            flexWrap: "wrap",
          }}>
            <div className="large-8 columns large-centered">
                <div className="section-title">
                    <h2>Confía en los mejores</h2>
                </div>
            </div>
            <img style={{ maxHeight: "422px", filter: 'drop-shadow(5px 5px 5px #222)' }} alt="logo bodas.net" src="/static/img/bodasnet.png" />

        </div>
    )
}

export default SecondHero;