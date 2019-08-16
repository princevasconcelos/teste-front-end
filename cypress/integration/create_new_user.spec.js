describe('Create a new user', function() {
    const mockData = {
        name: 'Faker Test',
        email: 'fake@email.com',
        cpf: '12345678901',
        phone: '01234567890'
    };

    beforeEach(() => {
        cy.visit('http://localhost:8081/cadastro.html');
    });

    it('should fill inputs with fake data and submit the form', function() {
        cy.get('[data-cy="name"]')
            .click({ force: true })
            .type(mockData.name)
            .should('have.value', mockData.name);

        cy.get('[data-cy="email"]')
            .click({ force: true })
            .type(mockData.email)
            .should('have.value', mockData.email);

        cy.get('[data-cy="cpf"]')
            .click({ force: true })
            .type(mockData.cpf)
            .should('have.value', '123.456.789-01');

        cy.get('[data-cy="phone"]')
            .click({ force: true })
            .type(mockData.phone)
            .should('have.value', '(01) 23456-7890');

        cy.wait(1000);

        cy.get('[data-cy="btn-send"]').click();

        cy.wait(4000);

        cy.get('[data-cy="row-name"]').should('contain', mockData.name);

        cy.get('[data-cy="row-email"]').should('contain', mockData.email);

        cy.get('[data-cy="row-cpf"]').should('contain', '123.456.789-01');

        cy.get('[data-cy="row-phone"]').should('contain', '(01) 23456-7890');
    });
});
