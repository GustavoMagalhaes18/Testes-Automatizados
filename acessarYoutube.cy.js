describe('Youtube', () => {
    it('Cenário Válido, acessar o site do youtube', () =>{
        cy.visit('https://www.youtube.com/')
        cy.get('body').should('be.visible')
    }
    )
}
)