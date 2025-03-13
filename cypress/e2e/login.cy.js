// Lets assume that Username: user and Password: 321@pass are valid credentials
// After successfull login, the user is redirected to the page with url that contains "/dashboard"
// Also, there is no account with Username: wrongUser and Password: 321@wrong

import { loginPage } from "../pages/LoginPage";

describe('Login Test', ()=>{
    let validUser, invalidUser;
    beforeEach(()=>{
        cy.visit("/");
        cy.fixture("loginData").then((data)=>{
            ({validUser, invalidUser} = data)
        })
    });
    it("Should successfully log in",()=>{
       loginPage.login(validUser.username, validUser.password)
       cy.url().should("contain","/dashboard");
    })
    it("Should not log in", ()=>{
        loginPage.login(invalidUser.username, invalidUser.password).elements.alertModal().should("contain.text","Sorry but the login information that you entered is incorrect")
    })
    it("Should display two errors stating that username and password fields are required",()=>{
        loginPage.clickSubmit().elements.requiredFieldError().filter(":visible").should("have.length", 2).each(item=>cy.wrap(item).should('contain', 'You must enter'))
    })
    it("Should lock the account after 5 unsuccessful attempts",()=>{
        for(let i=0; i<5; i++){
            loginPage.login(validUser.username, invalidUser.password)
        }
        loginPage.elements.alertModal().should('contain.text', 'Your account has been locked')
    })
})