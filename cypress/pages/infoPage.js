class InfoPage {
    selectorList(){
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            expiryDateField: '.oxd-input-group:contains("License Expiry Date") input',
            birthDateField: '.oxd-input-group:contains("Date of Birth") input',
            dateCloseButton: '.oxd-calendar-wrapper .--close',
            dateTodayButton: '.oxd-date-input-links .--today',
            savePersonalButton: '.orangehrm-horizontal-padding [type="submit"]',
            nationalityDropdownField: '.oxd-input-group:contains("Nationality") .oxd-select-text-input',
            maritalStatusDropdownField: '.oxd-input-group:contains("Marital Status") .oxd-select-text-input',
            employeeIdField: '.oxd-input-group:contains("Employee Id") input',
            otherIdField: '.oxd-input-group:contains("Other Id") input',
            driverLicenseField: '.oxd-input-group:contains("License Number") input',
            nationalityOption: '.oxd-select-option:contains("Brazilian")',
            maritalStatusOption: '.oxd-select-option:contains("Other")',
            
        }
        return selectors
    }


    updatePersonalDetails(firstName, middleName, lastName){ 
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }
    updateEmployeeDetails(EmployeeID, OtherID, Driver){
        cy.get(this.selectorList().employeeIdField).clear().type(EmployeeID)
        cy.get(this.selectorList().otherIdField).clear().type(OtherID)
        cy.get(this.selectorList().driverLicenseField).clear().type(Driver)
        cy.get(this.selectorList().expiryDateField).click()
        cy.get(this.selectorList().dateTodayButton).click()
    }
    updateOtherDetails(dateField){
        cy.get(this.selectorList().birthDateField).clear().type(dateField)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().nationalityDropdownField).click()
        cy.get(this.selectorList().nationalityOption).click()
        cy.get(this.selectorList().maritalStatusDropdownField).click()
        cy.get(this.selectorList().maritalStatusOption).click()
    }
    
    saveInfo(){
        cy.get(this.selectorList().savePersonalButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default InfoPage