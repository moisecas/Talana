// cypress/integration/visit_page_spec.js

describe('Talana ecommerce', function() {

    it.only('Visitar la página', function() { 
        //https://www.demoblaze.com/index.html
        cy.visit('https://www.demoblaze.com/index.html')
    }
    )

    it('Agregar categorias', function() {
        // Visita la página de Example
        cy.visit('https://www.demoblaze.com/index.html')
        // Click en la categoría [onclick="byCat('phone')"]
        cy.get('[onclick="byCat(\'phone\')"]').click() //categoría celular
       
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click() //producto
    
        cy.get('.col-sm-12 > .btn').click() //agregar al carrito 
        
        cy.get('#cartur').click() //carrito 
        //.active > .nav-link
        cy.get('.active > .nav-link').click() //ir al home 
        
        cy.get('[onclick="byCat(\'notebook\')"]').click() //categoría notebook 
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click() //escoge pc
        cy.get('.col-sm-12 > .btn').click() //agrega al carrito 
        cy.get('.active > .nav-link').click() //regresa al home 

        //espera de 10 segundos 
        cy.wait(10000)

        //[onclick="byCat('monitor')"]
        cy.get('[onclick="byCat(\'monitor\')"]').click() //categoría monitor
         
        cy.contains('Apple monitor 24').click(); //escoge monitor que contenga Apple monitor 24

        cy.get('.col-sm-12 > .btn').click() //agrega al carrito 
        cy.get('.active > .nav-link').click() //home 

        cy.get('#cartur').click() //verificar carrito         
        
    })
    it.only('carrito de compras', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.contains('Samsung galaxy s6').click();
        cy.get('.col-sm-12 > .btn').click() //agrega al carrito 
        cy.get('.active > .nav-link').click() //home 
        cy.contains('Nokia lumia 1520').click()
        cy.get('.col-sm-12 > .btn').click() //agrega al carrito 
        cy.get('.active > .nav-link').click() //home 
        cy.contains('Nexus 6').click()
        cy.get('.col-sm-12 > .btn').click() //agrega al carrito 
        cy.get('#cartur').click() //ver carrito 
        cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click() //delete item



            
    })
    

    
    
})
