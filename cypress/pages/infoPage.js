class InfoPage {
    selectorList(){
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active',
            dateField: '[placeholder="dd-mm-yyyy"]',
            dateCloseButton: '.--close',
            dateTodayButton: '.--today',
            saveButton: '[type="submit"]',
            genericDropdownField: '[clear="false"]'
        }
        return selectors
    }


    updatePersonalDetails(firstName, middleName, lastName){ 
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }
    updateEmployeeDetails(EmployeeID, OtherID, Driver){
        cy.get(this.selectorList().genericField).eq(3).clear().type(EmployeeID)
        cy.get(this.selectorList().genericField).eq(4).clear().type(OtherID)
        cy.get(this.selectorList().genericField).eq(5).clear().type(Driver)
        cy.get(this.selectorList().dateField).eq(0).click()
        cy.get(this.selectorList().dateTodayButton).eq(0).click()
    }
    updateOtherDetails(dateField){
        cy.get(this.selectorList().dateField).eq(1).clear().type(dateField)
        cy.get(this.selectorList().dateCloseButton).eq(0).click()
        cy.get(this.selectorList().genericDropdownField).eq(0).click()
        cy.get(':nth-child(27) > span').click()
        cy.get(this.selectorList().genericDropdownField).eq(1).click()
        cy.get(':nth-child(3) > span').click()
    }
    
    saveInfo(){
        cy.get(this.selectorList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default InfoPage