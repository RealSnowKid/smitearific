describe('God Stats End to End Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('nav > div > div > a.navText').eq(1).click();
        cy.wait(1000);
    });

    it('Should be able to get all gods via an API call', () => {
        cy.request('http://localhost:8080/gods').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body._embedded.gods).to.have.length(111)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    });
})
