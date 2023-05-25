import checkboxesPage from "../pageobjects/checkboxes.page.js";

describe ('checkboxes application', () => {
    it('should check box 1', async () => {
        await checkboxesPage.open()
        
        await checkboxesPage.checkBox1()
        await expect(checkboxesPage.option1).toBeSelected()
    })
    it('should uncheck box 2', async () => {
        await checkboxesPage.uncheckBox2()
        await expect(checkboxesPage.option2).not.toBeSelected()
    })
    it('should uncheck both boxes', async () => {
        await checkboxesPage.uncheckBoxes()
        await expect(checkboxesPage.option1).not.toBeSelected()
        await expect(checkboxesPage.option2).not.toBeSelected()
    })
})