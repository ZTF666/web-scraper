const axios = require('axios')
const cheerio = require('cheerio')


axios.get('https://chouftv.ma/press').then(res=>{
    const articles=[]
   const $= cheerio.load(res.data)
//    console.log($('.description').children('a').attr('href'))
$('.description').each((index,element)=>{
    const title = $(element).children().first().text()
    const links=$(element).children('a').attr('href')
 
    articles [index]={title,links};
  
})
console.log(articles)
})