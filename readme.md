# 💩Scrapy💩

A small page scraper , still a WiP .
No dynamic scraping ...
 

## How to use

- **Change the website and add yours**

```javascript
axios.get('https://chouftv.ma/press')
```

- **Change the elements by the ones you desire**

```javascript
$('.description').each((index,element)=>{
    const title = $(element).children().first().text()
    const links=$(element).children('a').attr('href')
 
    articles [index]={title,links};
  
})
```

![Screenshot](src/res.png)

```
It looks weird because i used it on a local news website.
```

- **Limitations**
<details>
  
  <p>This is a shitty scrapper , i'm still learning.</p>
  <p>It doesn't scrap unloaded links. </p>

   ![Screenshot](src/lm.png) 

<p>In the screenshot above , the button litteraly translates to : LOAD MORE</p>
<p>Since i suck at this, i can't make it load more so i can grab the links</p>
<p>So it only grabs the latest news articles .</p>
<p>That's a blessing and a curse , beacause if clicked , it will load EVERY ARTICLE WRITTEN </p>
<p>since the deployement of the website... </p>
</details>

