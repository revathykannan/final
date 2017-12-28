import {browser, by, element, protractor} from 'protractor';

export class HomePage {
    txtName = element(by.css('[placeholder=\'name\']'));
    txtPosition = element(by.css('[placeholder=\'position\']'));
    btnSearch = element(by.xpath('/html/body/app-root/div/app-home/button[1]'));
    btnClear = element(by.xpath('/html/body/app-root/div/app-home/button[2]'));
    btnMenu = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div[1]/button'));
    linkAddEmployee = element(by.linkText('Add Employee'));
    txtEmployeeFullName = element(by.css('[name=\'name\']'));
    txtJobPosition = element(by.css('[name=\'position\']'));
    txtDeptName = element(by.css('[name=\'department\']'));
    txtSalary = element(by.css('[name=\'salary\']'));
    btnSave = element(by.css('.btn-success'));
    btnCancel = element(by.css('.btn-info'));

    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    waitForElement(elem) {
        const EC = protractor.ExpectedConditions;
        const button = elem;
        const isClickable = EC.elementToBeClickable(button);
        browser.wait(isClickable, 20000);
    };
}
