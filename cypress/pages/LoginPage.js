class LoginPage{
    elements={
        usernameField:()=>cy.get('input[name="ctl00$MainContent$loginForm$tbxLoginUsername"]'),
        passwordField:()=>cy.get('input[name="ctl00$MainContent$loginForm$tbxLoginPassword"]'),
        submitBtn:()=>cy.get('a#ctl00_MainContent_loginForm_btnSubmitLogin'),
        alertModal:()=>cy.get('div.alert--error>span.alert__content'),
        requiredFieldError:()=>cy.get('span[data-validation-type="required"]'),
    }
    enterUsername(username){
        this.elements.usernameField().clear().type(username);
        return this
    }
    enterPassword(password){
        this.elements.passwordField().clear().type(password);
        return this
    }
    clickSubmit(){
        this.elements.submitBtn().click();
        return this
    }
    login(username,password){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickSubmit();
        return this
    }
}

export let loginPage = new LoginPage()