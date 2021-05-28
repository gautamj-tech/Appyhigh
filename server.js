  
require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const puppeteer=require('puppeteer');


const usersController = require('./controllers/usersController');

var app = express();
(async () =>{
    try{
    const browser=await puppeteer.launch({headless:false});
    const page=await browser.newPage();
    await page.goto('https://www.instagram.com/accounts/login', { waitUntil: "networkidle2" });
    await page.type('input[name=username]', 'username', { delay: 20 }); // in username add any instagram username
    await page.type('input[name=password]', 'password', { delay: 20 }); // in password add instagram password of the username entered
    await page.click('button[type=submit]', { delay: 20 });
    await page.waitFor(5000);
    await page.goto(`https://www.instagram.com/username`, { waitUntil: "networkidle2" });
    
    await page.waitFor(2000);
    
    const imageURL=await page.$$(".Ckrof");
    for(let i=0;i<imageURL.length;i++){
    
        const button=await page.$('.aoVrC');
      
       button.click();
       await page.waitFor(2000);
       const totalclicks=await page.$$('._7zQEa');
      console.log('tl',totalclicks.length);
       for(let j=0;j<totalclicks.length;j++){
        let imagesrc=await page.$eval(".qbCDp img",img=>img.src);
         usercontroller.insertrecord(username,imagesrc);
         
        const button1=await page.$('.FhutL');
        
       button1.click();}
       
       

       

     

    }
    }
    catch(e){
        console.log('our error',e);
    }
})();


app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeController);
