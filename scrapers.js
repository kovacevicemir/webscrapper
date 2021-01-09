const puppeteer = require('puppeteer');

const forum_pages = [];


async function main(){
    for (let i = 2; i < 27; i++) {
        let url = `https://forum.ragezone.com/f554/tutorial-server-setup-guide-using-209151/index${i}.html`
        await getPage(url);

        const timer =  setTimeout(() => {
            return
        }, 100);

        clearTimeout(timer)
    }

    console.log(forum_pages.length)
    console.log(forum_pages)
    
    const JSONforum_pages = JSON.stringify(forum_pages)

    var fs = require('fs');
    fs.writeFile("JSONforum_pages.txt", JSONforum_pages, function(err) {
        if (err) {
            console.log(err);
        }
    });
}


async function getPage(url) {
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    await page.goto(url, { waitUntil: 'networkidle0' });

    const data = await page.evaluate(
      () =>  Array.from(document.querySelectorAll('.postcontent'))
                  .map(elem => elem.textContent)
    );

    let new_page = [];

    let number_of_posts = data.length
    for (let x = 0; x < number_of_posts; x++) {
        let post = data[x].replace(/\s+/g, ' ').trim().replace(/\s\s+/g, ' ')
        new_page[x] = post
    }
 

    forum_pages.push(new_page);
    console.log('page added successfully...');

    await browser.close();
  } catch (err) {
    console.error(err);
  }
};

main();