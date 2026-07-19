class MenuPage {
    selectorList(){
        const selectors = {
            myInfoButton: 'a[href="/web/index.php/pim/viewMyDetails"]',
        }
        return selectors
    }
    
    accessMyInfo(){
        cy.get(this.selectorList().myInfoButton).click()
        cy.location('pathname').should('contain', 'pim/viewPersonalDetails')
    }
} 

export default MenuPage