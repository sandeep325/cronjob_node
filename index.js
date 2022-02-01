const cron = require("node-cron");
const  shell = require("shelljs");

cron.schedule('*/30 *  * * * *', ()=>{
    console.log("cron is runing every 30 secound's...");
    if(shell.exec("dir").code!==0) {
        console.log("Something went worng..");
     }
});