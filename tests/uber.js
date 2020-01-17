describe('Uber.com Test', function() {

    beforeEach(browser => browser.url('https://www.uber.com/'));
  
    test('Uber.com', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains("Uber – Augmentez vos revenus en conduisant ou commandez une course dès maintenant")
    });
  
    test('Test if login and register buttons exist', function (browser) {
      browser

        .waitForElementVisible('body', 5000)
        .useXpath() 
            .waitForElementPresent('//button[@id="/sign-in/"]')
            .waitForElementPresent('//button[@id="/signup/"]')
          .useCss()
    });
  
    test('Test if register page exit', function (browser) {
      browser
        .waitForElementVisible('body')
        .useXpath() 
            .waitForElementPresent('//a[@id="0"]')
            .waitForElementPresent('//a[@id="1"]')
          .useCss()
        .end()
    });

    test('Test if register page exit', function (browser) {
      browser
        .waitForElementVisible('body')
        .useXpath() 
            .click('//button[@id="/sign-in/"]')
            .pause(2000)
            .click('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[6]/div/div[1]/a')
          .useCss()
          .assert.urlEquals('https://auth.uber.com/login/?next_url=https%3A%2F%2Fdrivers.uber.com')
        .end()
    });

    test('Test if register page exit', function (browser) {
      browser
        .waitForElementVisible('body')
        .useXpath() 
            .click('//button[@id="/sign-in/"]')
            .pause(2000)
            .click('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[6]/div/div[2]/a')
          .useCss()
        .end()
    });
  
    test('Check Registration blocks in two sections', function (browser) {
      browser
        .waitForElementVisible('body')
        .useXpath() 
            .click('//*[@id="/signup/"]')
            .pause(1000)
            .waitForElementPresent('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[7]/div/div[1]/a')
            .waitForElementPresent('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[7]/div/div[2]/a')
          .useCss()
        .end()
    });

    test('Check Registration with devenir professionnal section', function (browser) {
      browser
        .waitForElementVisible('body')
        .useXpath() 
            .click('//*[@id="/signup/"]')
            .pause(1000)
            .click('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[7]/div/div[1]/a')
            .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[3]/div/input')
            .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[4]/div/input')
            .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[5]/div/input')
          .useCss()
        .end()
    });
  });