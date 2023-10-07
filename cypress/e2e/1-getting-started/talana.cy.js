// cypress/integration/visit_page_spec.js

describe('Talana ecommerce', function() {

    it('Visitar la página', function() { 
        //https://www.demoblaze.com/index.html
        cy.visit('https://www.demoblaze.com/index.html')
    }
    )

    it.only('Agregar categorias', function() {
        // Visita la página de Example
        cy.visit('https://www.demoblaze.com/index.html')
        // Click en la categoría [onclick="byCat('phone')"]
        cy.get('[onclick="byCat(\'phone\')"]').click() //categoría celular
       
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click() //producto
    
        cy.get('.col-sm-12 > .btn').click() //agregar al carrito 
        
        cy.get('#cartur').click() //carrito 
        //.active > .nav-link
        cy.get('.active > .nav-link').click() //ir al home 
        
    })
})
