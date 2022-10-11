describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.youtube.com/')
    })

    it('Canal Renato Cariani', () => {
        cy.get('#search-input > #search').type("renato cariani")
        cy.get('#search-icon-legacy').click()
        cy.get('.ytd-channel-renderer > #img').should('be.visible')
    })

    it('Canal Ei Nerd', () => {
        cy.get('#search-input > #search').type("ei nerd")
        cy.get('#search-icon-legacy').click()
        cy.get('.ytd-channel-renderer > #img').should('be.visible')
    })

    it('Procurar pelo canal Universo Narrado', () => {
        cy.get('#search-input > #search').type("universo narrado")
        cy.get('#search-icon-legacy').click()
        cy.get('.ytd-channel-renderer > #img').should('be.visible')
    })
})