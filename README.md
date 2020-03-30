<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="http://www.balazosdirecto.com">
    <img alt="Balazos" src="http://balazosdirecto.surge.sh/balazos-logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  Balazos - Grupo de versiones. Sitio web construido con Gatsby
</h1>

<p align="center">
  <a href="http://www.balazosdirecto.com">balazosdirecto.com</a>
</p>

<p align="center">
  <a href="https://travis-ci.org"><img src="https://travis-ci.org/lucbpz/balazos-web.svg?branch=master" /></a>
</p>

- [🎉 Features](#-features)
  - [⛵ Lighthouse score](#-lighthouse-score)
  - [🏆 SEO component](#-seo-component)
- [✨ Development](#-development)
- [🚚 Deployment](#-deployment)
- [🔮 CMS](#-cms)
- [🏛 Licenses](#-licenses)

## 🎉 Features
Toda la página [web](http://balazosdirecto.com) es una Single Page Application hecha en React y construida por [Gatsby v2](https://www.gatsbyjs.org).


En un principio contaba con un template comprado en [themeforest](https://themeforest.net/), que ha sido migrado (solo las partes que me interesaban) a componentes de React.
Para alimentar los datos, se utiliza GraphQL.

### ⛵ Lighthouse score

![Lighthouse scores](https://lighthouse.now.sh/?perf=83&a11y=87&bp=85&seo=90)

Cosas a mejorar:
* Dónde se encuentra alejada la web, ya que es un dominio comprado pero que apunta a otro sitio donde esta web está desplegada de forma gratuita, con lo cual no cuenta con los mejores recursos para renderizarse cuanto antes.
* El vídeo que se carga nada más entrar.
* Accesibilidad.
* Convertir a PWA (¿tiene sentido?)

### 🏆 SEO component

Incluye un componente SEO (actualmente sólo para las tags de la página de inicio, ya que es la única ruta), inspirado en el SEO component de [kremalicious](https://github.com/kremalicious/portfolio).

## ✨ Development

Se puede arrancar perfectamente en local instalando las dependencias
- [] TODO: Dockerizar.

```bash
git clone git@github.com:lucbpz/balazos-web.git
cd balazos-web/

# instalar dependencias y arrancar
npm i
gatsby develop
```

## 🚚 Deployment

El proyecto está montado en un entorno de CI/CD con Travis y Surge.
Los deploys se hacen automáticamente.

- push a `master` hace un trigger de un despliegue a producción.

El comando para hacer deploy no es más que una build de Gatsby, que luego se despliega con Surge.
```bash
npm run build
npm run deploy:dev
```

## 🔮 CMS

El CMS elegido es el CMS de Netlify, el cual funciona de forma super sencilla cuando todo está integrado en la plataforma de Netlify.
Es decir, si alojas la web en Netlify y utilizas NetlifyCMS, no hay ningún problema.

El reto ha sido utilizar Netlify CMS pero alojando la web en otro dominio, y haciendo uso del login que permite Netlify a través de GitHub.
Para ello se ha hecho uso de una Lambda Function en AWS que permite esta integración. Hay varios proyectos que permiten esta integración con AWS.

Documentación de Netlify:
- [oauth-provider-tokens](https://docs.netlify.com/visitor-access/oauth-provider-tokens/#setup-and-settings)

Proyectos para integración NetlifyCMS - OAuth con GitHub:
- [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
- [netlify-serverless-oauth2-backend](https://github.com/marksteele/netlify-serverless-oauth2-backend)

## 🏛 Licenses

**© Copyright 2020 Lucas Bernalte**

Todas las imágenes tienen copyright.

Puedes hacer un fork, y partir tu proyecto a partir de aquí, siempre y cuando las imágenes y vídeos que se sirven sean diferentes y se cambie el estilo, ya que es un template de pago.

Para todo lo demás:

**The MIT License**

[Full MIT license text](LICENSE)
