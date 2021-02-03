import React from 'react'
import { Link } from 'gatsby'
import { Header, Main } from 'grommet'

const PageNotFound = () => {

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
                <h1>Oops! Página no encontrada</h1>
                <Link to={'/'}>
                    <a className={"button small"} style={{ backgroundColor: '', color: '' }} href="/">
                        Vuelve a nuestra web
                    </a>
                </Link>
            </Main>
        </>
    )
}

export default PageNotFound