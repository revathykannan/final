import {AppPage} from '../../app.po';
import {HomePage} from '../../pageobjects/home/home.po';
import {browser, element, by, ExpectedConditions, protractor} from 'protractor';

describe('Home Page Test Suite.', () => {
    let page: AppPage;
    let HPage: HomePage;

    beforeEach(() => {
        page = new AppPage();
        HPage = new HomePage();
    });

    it('verify whether the user is able to add a new employee', () => {
        page.navigateTo();
        HPage.btnMenu.click();
        HPage.waitForElement(HPage.linkAddEmployee);
        HPage.linkAddEmployee.click();
        HPage.txtEmployeeFullName.click();
        HPage.txtEmployeeFullName.sendKeys('Test 1');
        HPage.txtJobPosition.click();
        HPage.txtJobPosition.sendKeys('Test Engineer');
        HPage.txtDeptName.click();
        HPage.txtDeptName.sendKeys('Automation');
        HPage.txtSalary.click();
        HPage.txtSalary.sendKeys('10000');
        HPage.btnSave.click();
    });

    it('verify whether the user is able to click the cancel button from the add employee form', () => {
        browser.navigate().refresh();
        HPage.btnMenu.click();
        HPage.waitForElement(HPage.linkAddEmployee);
        HPage.linkAddEmployee.click();
        HPage.btnCancel.click();
    });
});