describe('God Info End to End Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('div.navItem > a.navText').eq(2).click();
    });

    it('Should be able to visit the /achilles page', () => {
        cy.clickAchilles();
    });

    it('The god icon should be correct', () => {
        cy.clickAchilles();
        cy.get('div.godIcon > img').should('have.attr', 'src').should('include', '/god-icons/achilles.jpg');
    });

    it('The god name should be visible and be Achilles', () => {
        cy.clickAchilles();
        cy.get('div.godNfo > div.align-items-center > h1').should('be.visible');
        cy.get('div.godNfo > div.align-items-center > h1').contains('Achilles');
    });

    it('The god\'s title should be visible and correct', () => {
        cy.clickAchilles();
        cy.get('div.godNfo > div.align-items-center > h2').should('be.visible');
        cy.get('div.godNfo > div.align-items-center > h2').contains('Hero of the Trojan War');
    });

    it('The god\'s roles should be visible and correct', () => {
        cy.clickAchilles();
        cy.get('div.godNfo > div.justify-content-between > p').should('be.visible');
        cy.get('div.godNfo > div.justify-content-between > p').contains('Solo');
        cy.get('div.godNfo > div.justify-content-between > p').eq(1).contains('Warrior');
        cy.get('div.godNfo > div.justify-content-between > p').eq(2).contains('Greek');
        cy.get('div.godNfo > div.justify-content-between > p').eq(3).contains('Melee');
        cy.get('div.godNfo > div.justify-content-between > p').eq(4).contains('Physical');
    });
})