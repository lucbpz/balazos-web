describe('when a user fills out the form', async () => {
    it('sends an email', () => {
        cy.visit('/')

        // cy.createInbox().then(({ id, emailAddress }) => {
        cy.get('input[name="name"]').type('John Doe')
        cy.get('input[name="email"]').type('john.doe@gmail.com')
        cy.get('input[name="subject"]').type('Test')
        cy.get('textarea[name="message"]').type('Una nueva versión de la web de balazos se está desplegando!')
        cy.get('form').should('have.attr', 'name', 'contact')
        cy.get('form').should('have.attr', 'data-netlify', 'true')
        cy.get('form').should('have.attr', 'data-netlify-honeypot', 'bot-field')
        cy.get('form').should('have.attr', 'method', 'POST')

        cy.get('input[type="submit"]').click()

        cy.url().should('include', '/thankyou')
        cy.get('h1').contains('Gracias por contactar con nosotros!').should('be.visible')

        // cy.waitForLatestEmail(id).then(latestEmail => {
        //     expect(latestEmail).is.ok
        //     expect(latestEmail.body).is.ok
        // })
        // });

    })
})