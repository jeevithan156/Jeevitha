const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromedriver");

 
async function example(){
 
       
       let driver = await new Builder().forBrowser("chrome").build();

       await driver.get("https://www.naukri.com/");

       await driver.manage().window().maximize();
       await driver.findElement(By.linkText("Login")).click();
    
        await driver.sleep(2000);
        await driver.findElement(By.xpath("//body/div[@id='root']/div[4]/div[2]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/input[1]")).sendKeys("test156@gmail.com");
        await driver.findElement(By.xpath("//body/div[@id='root']/div[4]/div[2]/div[1]/div[1]/div[2]/div[1]/form[1]/div[3]/input[1]")).sendKeys("test156");    
        await driver.findElement(By.xpath('//button[@type="submit"]')).click();
         
        await driver.sleep(5000);
        const link = await driver.findElement(By.xpath('//a[text()="About us"]'));
        await driver.executeScript("arguments[0].scrollIntoView()", link);
        await link.click();

        var windows = await driver.getAllWindowHandles();
        var current_window = await driver.getWindowHandle();

        for (var i = 0; i < windows.length; i++) { 
            
            if(current_window==windows[i])
            {

            }
            else
            {

                await driver.switchTo().window(windows[i]);
                var title1 =  await driver.getTitle();
                console.log('Title is:',title1);
            }
        }    

        await driver.close();

        await driver.switchTo().window(current_window);


        await driver.sleep(2000);
        await driver.findElement(By.xpath("//body/div[@id='ni-gnb-header-section']/div[3]/div[2]/div[3]/div[1]/div[1]")).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath("//a[text()='Logout']")).click();
        console.log("User has logged out")
        await driver.sleep(1000);
        await driver.quit();
 
}
example()