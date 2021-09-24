import { Builder, Capabilities, By } from "selenium-webdriver"
import { textSpanContainsTextSpan } from "typescript"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Can X be put in the top left?', async () => {

    let x1 = await (await driver).findElement(By.id('cell-0'))
    await x1.click()
})

test('Can X be put in the top right?', async () => {

    let x2 = await (await driver).findElement(By.id('cell-2'))
    await x2.click()
})

test('Can X be put in the bottom right?', async () => {

    let x3 = await (await driver).findElement(By.id('cell-8'))
    await x3.click()
})