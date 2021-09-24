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

test('Check for winner', async () => {
    
    let check = await (await driver).findElement(By.id('h1', === " lost"))
    await check.click()
})
// Changed it to won so that it would look better when deployed^

test('Check O', async () => {

    let O = await (await driver).findElement(By.id('cell-3', "o"))
    await O.click()
})
// Changed it to uppercase "O" for uniformity

test('Look for covers!', async () => {

    let xo = await (await driver).findElement(By.(''))
    await xo.click()
})
// Little stuck here not sure how to check for it