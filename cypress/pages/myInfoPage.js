class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            genericComboBoxButton: ".oxd-select-text--active",
            firstItemComboBox: '.oxd-select-dropdown > :nth-child(27)',
            secondItemComboBox: '.oxd-select-dropdown > :nth-child(2)',
            thirdItemComboBox: '.oxd-select-dropdown > :nth-child(4)',
            genderField: ".oxd-radio-wrapper",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails (employeeId, otherId, driversLicenseNumber, driversLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(dateBirth) {
        cy.get(this.selectorsList().genericComboBoxButton).eq(0).click()
        cy.get(this.selectorsList().firstItemComboBox).click()
        cy.get(this.selectorsList().genericComboBoxButton).eq(1).click()
        cy.get(this.selectorsList().secondItemComboBox).click()
        
        cy.get(this.selectorsList().genderField).eq(1).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(dateBirth)
        cy.get(this.selectorsList().dateCloseButton).click({force: true})   
       
    }

    fillCustom(testField){
        cy.get(this.selectorsList().genericComboBoxButton).eq(2).click()
        cy.get(this.selectorsList().thirdItemComboBox).click()
        cy.get(this.selectorsList().genericField).eq(9).clear().type(testField) 
    }

    saveFormCustom() {
        cy.get(this.selectorsList().submitButton).eq(1).click({force: true})
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage