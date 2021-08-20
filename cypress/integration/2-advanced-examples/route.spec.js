describe('Start testing',()=>{
    it('Testing cypress',()=>{
        expect(true).to.equal(true);
    })
})

describe('Testing home page', () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:3000/");
    })
    it('has anchor tag',()=>{
        cy.contains("a","Registration")
        cy.contains("a","Login")
    })
})

describe('Testing Registration Page',() =>{
    it("should enter username ,emailid,password,confirmpassword",()=>{
        cy.visit('http://localhost:3000/register');
        cy.get('#username').type('divya127');
        cy.get('#emailid').type('divya5@gmail.com');
        cy.get('#password').type('password5');
        cy.get('#confirmpassword').type('password5');
        cy.wait(2000);
        cy.get('.login_btn').click();
        
        cy.location().should((location)=> expect(location.href).to.eq('http://localhost:3000/login'));
    })
})

describe('Testing Login Page',() =>{
    it("should enter username ,emailid and password",()=>{
        cy.visit('http://localhost:3000/login')
        cy.get('#username').type('divya127');
        cy.get('#emailid').type('divya1@gmail.com');
        cy.get('#password').type('password1');
        cy.wait(2000);
        cy.get('.login_btn').click();
        cy.location().should((location)=> expect(location.href).to.eq('http://localhost:3000/dashboard'));
        
    })
})

describe('Testing dashboard Page',() =>{
    it("country should be display" ,()=>
    {
        cy.visit("http://localhost:3000/dashboard")
        cy.wait(2000);
        
    })
})

describe('Testing Favourite Page',() =>{
    it("should display favourite city",() =>{
        cy.visit('http://localhost:3000/');
        cy.wait(2000);
        cy.get('.favNav').click();
        cy.location().should((location)=> expect(location.href).to.eq('http://localhost:3000/favouriteCity'));

    }
    )
})

// describe('Testing CityDetails page',()=>
//     it("should display the city details",() =>
//     {
//         cy.get('.showdata').children().click();
//         cy.location().should((location)=> expect(location.href).to.eq('http://localhost:3000/citydetails'));
//     })
// )


describe('Testing logout',() =>{
    it("User should logout and redirected to home page",()=>{
        cy.get('.logout_btn').click();
        cy.location().should((location)=> expect(location.href).to.eq('http://localhost:3000/'));
    })
})


