describe('Login', () => {
    it('Sign in', () => {
        cy.visit('www.site.com.br');
        cy.get('input[type="email"]').type('endereco@email.com');
        cy.get('input[type="password"]').type('senha');
        cy.get('btn').contains('Entrar').click();
    })  
})