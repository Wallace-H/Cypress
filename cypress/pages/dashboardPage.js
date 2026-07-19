class DashboardPage {
    selectorList(){
        const selectors = {
            dashboardValidation: 'div.orangehrm-dashboard-grid',
        }
        return selectors
    }

    validateLogin(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardValidation)
    }

}

export default DashboardPage