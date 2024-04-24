///<reference types="cypress" />

it('should open web site', ()=>{
    cy.visit('https://telranedu.web.app');
    cy.get('[href="/login"]').click();
    cy.get('[name="email"]').type('olesia@yahoo.com');
    cy.get('[name="password"]').type('Olesia$2024');
    cy.get('[name="login"]').click();
    cy.get('[href="/add"]').click();
    cy.get('[placeholder="Name"]').type('Anna');
    cy.get('[placeholder="Last Name"]').type('Müller');
    cy.get('[placeholder="Phone"]').type('1234567890');
    cy.get('[placeholder="email"]').type('anna.mueller@gmail.com');
    cy.get('[placeholder="Address"]').type('München');
    cy.get('[placeholder="description"]').type('Nachbarin');
    cy.get('.add_form__2rsm2 > button').click();
    cy.get('.contact-page_leftdiv__yhyke > :nth-child(1) > :nth-child(1)').click();
    cy.get(':nth-child(9)').click();
    cy.get('[placeholder="desc"]').type('Termin am Donnerstag 13 Uhr');
    cy.get('.form_form__FOqHs > button').click();
    cy.get('.contact-page_leftdiv__yhyke > :nth-child(1) > :nth-child(2)').click();
    cy.get(':nth-child(10)').click();
    cy.get('[href="/home"]').click();
    cy.get('button').click();
});