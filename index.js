const express=require('express')
const cheerio=require('cheerio')
const download=require('node-image-downloader')
const request=require('request')

const app=express()
app.get('/',(_req,_res)=>{
    var url="https://www.instagram.com/gautaamm/"
    request(url, (error, _response ,html) => {
        if(!error){
            var $=cheerio.load(html);
            var imagessrc=$(".tUtVM").attr('src')
            download({
                imgs: {
                    uri:imagessrc
                },
                dest:'./download'
            })
            //.then((_info) => {
             //   console.log("download completed")
            //    process.exit()
            //})
            process.exit()
        }
    })
})
app.listen(5000)