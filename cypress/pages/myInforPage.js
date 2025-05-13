class MyInfoPage {

    selectorsListInfo() {
       const selectorsInfo = {
            //myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            middleNameFied: "[name='middleName']",
            lastNameField: "[name='lastName']",
            submitButton: "[type='submit']",
            comboboxnationalityselection: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
            comboboxmaritalselection: ":nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input",
            nationalityselection: ":nth-child(4) > span",
            maritalselection: ".oxd-select-dropdown > :nth-child(2) > span"

            
        }
        
        return selectorsInfo
    }
    
    accessInfoPage() {
      cy.get("[href='/web/index.php/pim/viewMyDetails']").click()
    }


    infoPageUser() {
   
      cy.get(this.selectorsListInfo().firstNameField).clear().type("pedro")
      cy.get(this.selectorsListInfo().middleNameFied).clear().type("silva")
      cy.get(this.selectorsListInfo().lastNameField).clear().type("bezerra")
      cy.get(this.selectorsListInfo().comboboxnationalityselection).click()
      //cy.get(this.selectorsListInfo().nationalityselection).eq(1).click(this.selectorsListInfo.nationalityselection)
      cy.get(this.selectorsListInfo().comboboxmaritalselection).click()
      cy.get(this.selectorsListInfo().maritalselection).click(this.selectorsListInfo.maritalselection)
      cy.get(this.selectorsListInfo().submitButton).eq(0).click()
      

       
    }   
  }

export default MyInfoPage