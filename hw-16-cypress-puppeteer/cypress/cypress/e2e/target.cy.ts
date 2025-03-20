describe('TC-1: Verify if the type pets in the search bar', () => {
    beforeEach(() => {
        cy.visit('https://www.target.com/');
    });

    it('Should find pets list', () => {
        cy.get('#search').type('pets');
        cy.get('button[aria-label=\'search\']').click();

        const resultSelector = ' ul.h-flex-direction-row > li.sc-c5abeb58-1';

        cy.get(resultSelector, { timeout: 15000 } )
            .find('span')
            .filter((index, el) => {
                const text = Cypress.$(el).text().trim();
                return /pets|pet|dog|kindfull|cat/i.test(text);
            })
            .should('have.length.greaterThan', 0)
            .each(($el) => {
                cy.wrap($el).invoke('text').should('match', /pets|pet|dog|kindfull|cat/i);
            });
    });
});

describe('TC-2: Verify if the home page link is working', () => {
    beforeEach(() => {
        cy.visit('https://www.target.com/c/bullseye-s-playground/-/N-tr36l');
    });

    it('Should redirect to home page when clicking the Target logo', () => {
        cy.get('a[aria-label="Target home"]:first-of-type').click();

        cy.url().should('eq', 'https://www.target.com/');
    });
});
