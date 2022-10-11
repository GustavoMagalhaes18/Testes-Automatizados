import Canal from '../support/pages/procurarCanais/acoes.cy'
describe('', () => {
    it('Canal Renato Cariani', () => {
       Canal.acessarSite();
       Canal.procurarCanal();
    })

    it('Canal Ei Nerd', () => {
        Canal.acessarSite();
        Canal.procurarCanal2();
    })

    it('Canal Universo Narrado', () => {
        Canal.acessarSite();
        Canal.procurarCanal3();
    })
})