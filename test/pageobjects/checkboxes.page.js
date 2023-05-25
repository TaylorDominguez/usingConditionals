import page from './page.js'

class checkboxesPage extends page {

    // selectors
    get option1() {
        return $('//*[@id="checkboxes"]/input[1]')
    }

    get option2() {
        return $('//*[@id="checkboxes"]/input[2]')
    }

    //methods
    async checkBox1(){
        if (await this.option1.isSelected() != true){
            await this.option1.click()
        }
    }

    async uncheckBox2(){
        if (await this.option2.isSelected()){
            await this.option2.click()
        }
    }

    async uncheckBoxes(){
        if (await this.option1.isSelected()){
            await this.option1.click()
        }
        if (await this.option2.isSelected()){
            await this.option2.click()
        }
    }

    open () {
        return super.open('checkboxes')
    }
}

export default new checkboxesPage()