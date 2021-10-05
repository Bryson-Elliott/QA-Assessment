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

// beforeEach(async () => {

// })

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Can X be put in the top left?', async () => {
    await driver.sleep(200)
    let topLeft = await driver.findElement(By.id('cell-0'))
    await topLeft.click()
    let topLeftText = await topLeft.getText()
    expect(topLeftText).toEqual('X')
});

test('Can X be put in the top right?', async () => {
    await driver.sleep(200)
    let topRight = await driver.findElement(By.id('cell-2'))
    await topRight.click()
    let topRightText = await topRight.getText()
    expect(topRightText).toEqual('X')
});

test('Can X be put in the bottom right?', async () => {
    await driver.sleep(200)
    let bottomRight = await driver.findElement(By.id('cell-8'))
    await bottomRight.click()
    let bottomRightText = await bottomRight.getText()
    expect(bottomRightText).toEqual('X')
});

test('Check for winner', async () => {
    
    let check = await (await driver).findElement(By.id('h1'))
    await check.click()
    await driver.findElement(By.id('cell-0'))
    await driver.findElement(By.id('cell-3'))
    await driver.findElement(By.id('cell-6'))
    expect(check).toEqual('X Won')
})
// Changed it to won so that it would look better when deployed^

// test('Check O', async () => {

//     let O = await (await driver).findElement(By.id('cell-3'))
//     await O.click()

//     expect(O).toBe('O')
//})
// Changed it to uppercase "O" for uniformity

// test('Look for covers!', async () => {

//     const displayText = await (await driver).findElement(By.xpath('//h1')).getText()
    
//     expect(displayText).toBe('X Won')
// })
// Little stuck here


// Function from N8
// function resetGame(evt) {

    // $('#game-board td').load(location.href + ' game-board td')
    // $("h1").text("Tic Tac JS")
    // initializeBoard()
    // hideResetButton()
    // $('#game-board td').on('click', handleClick);

    // }