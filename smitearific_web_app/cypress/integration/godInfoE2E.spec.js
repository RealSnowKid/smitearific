describe('God Info End to End Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('div.navItem > a.navText').eq(2).click();
    });

    it('Should be able to get all gods via an API call', () => {
        cy.request('http://localhost:8081/godinfoes').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body._embedded.godinfoes).to.have.length(112)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
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

    it('The god\'s passive ability should be visible and correct', () => {
        cy.clickAchilles();
        cy.get('div.abilities > nav > a').eq(0).should('be.visible');
        cy.get('div.abilities > nav > a > img').eq(0).should('have.attr', 'src').should('include', 'gift-of-the-gods.jpg');
        cy.get('div.abilities > nav > a').eq(0).should('have.class', 'active');
        cy.get('div.abilities > div.tab-content > div > h3').contains('Gift of the Gods');
        cy.get('div.abilities > div.tab-content > div > p').contains('Achilles adapts to the tide of Battle.');
        cy.get('div.abilities > div.tab-content > div > div > div.attributes').eq(0).find('p').should('have.length', 1);
        cy.get('div.abilities > div.tab-content > div > div > div.attributes').eq(1).find('p').should('have.length', 4);
    });

    it('The god\'s first ability should be visible and correct', () => {
        cy.clickAchilles();
        cy.get('div.abilities > nav > a').eq(1).click();
        cy.get('div.abilities > nav > a').eq(1).should('be.visible');
        cy.get('div.abilities > nav > a > img').eq(1).should('have.attr', 'src').should('include', 'shield-of-achilles.jpg');
        cy.get('div.abilities > nav > a').eq(1).should('have.class', 'active');
        cy.get('div.abilities > div.tab-content > div > h3').eq(1).contains('Shield of Achilles');
        cy.get('div.abilities > div.tab-content > div > p').eq(1).contains('Achilles punches forward with the edge of his Shield,');
        cy.get('div.abilities > div.tab-content > div > div > div.attributes').eq(2).find('p').should('have.length', 6);
        cy.get('div.abilities > div.tab-content > div > div > div.attributes').eq(3).find('p').should('have.length', 2);
    });

    it('The god\'s ultimate ability should be visible and correct', () => {
        cy.clickAchilles();
        cy.get('div.abilities > nav > a').eq(4).click();
        cy.get('div.abilities > nav > a').eq(4).should('be.visible');
        cy.get('div.abilities > nav > a > img').eq(4).should('have.attr', 'src').should('include', 'fatal-strike.jpg');
        cy.get('div.abilities > nav > a').eq(4).should('have.class', 'active');
        cy.get('div.abilities > div.tab-content > div > h3').eq(4).contains('Fatal Strike');
        cy.get('div.abilities > div.tab-content > div > p').eq(4).contains('Achilles dashes forward and attacks. While dashing, Achilles will pass through minions,');
        cy.get('div.abilities > div.tab-content > div > div > div.attributes').eq(8).find('p').should('have.length', 6);
        cy.get('div.abilities > div.tab-content > div > div > div.attributes').eq(9).find('p').should('have.length', 3);
    });
})