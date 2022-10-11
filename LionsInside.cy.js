describe('Acessar um vídeo no Youtube', () => {
    before(() => {
        cy.visit('https://www.youtube.com/')
    })

    it('Acessar o vídeo Lions Inside', () => {
        cy.get('#search-input > #search').type("lions inside")
        cy.get('#search-icon-legacy').click()
        cy.get(':nth-child(3) > :nth-child(3) > #dismissible > ytd-thumbnail.style-scope > #thumbnail').click()

    })
})