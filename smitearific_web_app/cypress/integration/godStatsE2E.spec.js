describe('God Stats End to End Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('nav > div > div > a.navText').eq(1).click();
        cy.wait(1200);
    });

    it('Should be able to get all gods via an API call', () => {
        cy.request('http://localhost:8080/gods').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body._embedded.gods).to.have.length(111)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    });

    it('The table should be visible', () => {
        cy.get('div.react-bootstrap-table').should('be.visible');
    });

    it('The table should be sorted by Pick & Ban Rate Desc by default', () => {
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(4).should('have.attr', 'aria-label').should('include', 'sort desc');
    });

    it('Should be able to sort by desc with all table heads', () => {
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(0).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(0).should('have.attr', 'aria-label').should('include', 'sort desc');
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(1).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(1).should('have.attr', 'aria-label').should('include', 'sort desc');
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(2).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(2).should('have.attr', 'aria-label').should('include', 'sort desc');
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(3).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(3).should('have.attr', 'aria-label').should('include', 'sort desc');
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(4).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(4).should('have.attr', 'aria-label').should('include', 'sort desc');
    });

    it('Should be able to sort by asc with all table heads', () => {
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(0).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(0).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(0).should('have.attr', 'aria-label').should('include', 'sort asc');
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(1).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(1).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(1).should('have.attr', 'aria-label').should('include', 'sort asc');
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(2).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(2).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(2).should('have.attr', 'aria-label').should('include', 'sort asc');
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(3).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(3).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(3).should('have.attr', 'aria-label').should('include', 'sort asc');
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(4).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(4).click();
        cy.get('div.react-bootstrap-table > table > thead > tr > th.sortable').eq(4).should('have.attr', 'aria-label').should('include', 'sort asc');
    });

    it('Should be able to search by full name', () => {
        cy.get('div.justify-content-between > label > input').type("Ah Puch");
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').should('have.length', 1);
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').contains("Ah Puch");
        cy.get('div.justify-content-between > label > input').clear();
        // Also try all lowercase
        cy.get('div.justify-content-between > label > input').type("ah puch");
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').should('have.length', 1);
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').contains("Ah Puch");
        cy.get('div.justify-content-between > label > input').clear();
        // Also try mixed case
        cy.get('div.justify-content-between > label > input').type("aH pUcH");
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').should('have.length', 1);
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').contains("Ah Puch");
    });

    it('Should be able to search by partial name', () => {
        cy.get('div.justify-content-between > label > input').type("gand");
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').should('have.length', 1);
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').contains("Jormungandr");
        cy.get('div.justify-content-between > label > input').clear();
        // Also try all uppercase
        cy.get('div.justify-content-between > label > input').type("GAND");
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').should('have.length', 1);
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').contains("Jormungandr");
        cy.get('div.justify-content-between > label > input').clear();
        // Also try mixed case
        cy.get('div.justify-content-between > label > input').type("gAnD");
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').should('have.length', 1);
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').contains("Jormungandr");
    });

    it.only('Should not be able to search by numbers', () => {
        cy.get('div.justify-content-between > label > input').type("10.05");
        cy.get('div.react-bootstrap-table > table > tbody > tr > td > div').should('have.length', 0);
    });

    it('Should be able to sort by gods played in solo lane', () => {
        cy.get('div.justify-content-between > div.btn-group > button').eq(1).click();
        cy.get('div.justify-content-between > label > input').should('have.attr', "value", "Solo");
    });

    it('Should be able to sort by gods played in the jungle', () => {
        cy.get('div.justify-content-between > div.btn-group > button').eq(2).click();
        cy.get('div.justify-content-between > label > input').should('have.attr', "value", "Jung");
    });

    it('Should be able to sort by gods played in middle lane', () => {
        cy.get('div.justify-content-between > div.btn-group > button').eq(3).click();
        cy.get('div.justify-content-between > label > input').should('have.attr', "value", "Mid");
    });

    it('Should be able to sort by gods played as ADCs', () => {
        cy.get('div.justify-content-between > div.btn-group > button').eq(4).click();
        cy.get('div.justify-content-between > label > input').should('have.attr', "value", "ADC");
    });

    it('Should be able to sort by gods played as supports', () => {
        cy.get('div.justify-content-between > div.btn-group > button').eq(5).click();
        cy.get('div.justify-content-between > label > input').should('have.attr', "value", "Supp");
    });

    it('Should be able to sort by gods played in any lane', () => {
        cy.get('div.justify-content-between > div.btn-group > button').eq(0).click();
        cy.get('div.justify-content-between > label > input').should('have.attr', "value").should('be.empty');
    });
})
