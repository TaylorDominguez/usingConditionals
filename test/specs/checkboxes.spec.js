import checkboxesPage from "../pageobjects/checkboxes.page.js";

describe ('checkboxes application', () => {
    it('should check box 1', async () => {
        await checkboxesPage.open()
        
        if (await checkboxesPage.option1.isSelected() != true){
            await checkboxesPage.option1.click()
        }
        await expect(checkboxesPage.option1).toBeSelected()
    })
    it('should uncheck box 2', async () => {
        if (await checkboxesPage.option2.isSelected()){
            await checkboxesPage.option2.click()
        }
        await expect(checkboxesPage.option2).not.toBeSelected()
    })
    it('should uncheck both boxes', async () => {
        if (await checkboxesPage.option1.isSelected()){
            await checkboxesPage.option1.click()
        }
        if (await checkboxesPage.option2.isSelected()){
            await checkboxesPage.option2.click()
        }
        await expect(checkboxesPage.option1).not.toBeSelected()
        await expect(checkboxesPage.option2).not.toBeSelected()
    })
})