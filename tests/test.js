const {By,Key,Builder} = require("selenium-webdriver");
require("geckodriver");
async function example(){
 
    var searchString = "Automation testing with Selenium and JavaScript";

    
    let driver = await new Builder().forBrowser("firefox").build();

     //get is used to call google through url
     await driver.get("http://google.com");
     
     

}
example()