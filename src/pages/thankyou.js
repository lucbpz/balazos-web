import React from 'react'
import { Link } from 'gatsby'
import { Header, Main } from 'grommet'

const ThankYou = () => {

    return (
        <>
            <Header background="black">
                <img
                    style={{ padding: "1rem" }}
                    width="63"
                    height="24"
                    alt="Logo de balazos"
                    src={"/balazos-logo.png"}
                />
            </Header>
            <Main pad="large">
                <h1>Gracias por contactar con nosotros!</h1>
                <p>Nos pondremos en contacto contigo próximamente, y lo haremos más rápido si es por teléfono :)</p>
                <p>Un abrazo balacil!</p>
                <Link to={'/'}>
                    <a className={"button small"} style={{ backgroundColor: '', color: '' }} href="/">
                        Vuelve a nuestra web
                    </a>
                </Link>
            </Main>
        </>
    )
}

export default ThankYou