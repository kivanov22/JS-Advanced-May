const { chromium } = require('playwright-chromium');
const { expect, assert } = require('chai');

const host = 'http://127.0.0.1:5500/02.Book-Library/';


let browser;
let context;
let page;

function fakeResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
}

let testMessages = {
    1: {
        title: 'C# Fundamentals',
        author: 'Svetlin Nakov'
    },
    2: {
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J.K.Rowling'
    }
}

let testCreateTopic = {
    3: {
        title: 'Python',
        author: 'Kristian',
        _id: 3
    }
}

describe('E2E tests', function () {
    this.timeout(600000);

    before(async () => {
        // browser = await chromium.launch({ headless: false, slowMo: 500 });
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto(host);
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });


    describe('Testing functionality', () => {
        if ('Should load all books correctly', async () => {

            
            await page.route('**/jsonstore/collections/books', route => {
                route.fulfill(fakeResponse(testMessages))
            });

            await page.goto(host);

                           
            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#loadBooks')
            ]);
            let result = await response.json();
            expect(result).to.eql(testMessages);

        });

        it('Should add a new book', async () => {
            let requestData = undefined;
            let expected = {
                title: 'Python',
                author: 'Kristian'
            };
            await page.route('**/jsonstore/collections/books', (route, request) => {
                if (request.method().toLowerCase() === 'post') {
                    requestData = request.postData();
                    route.fulfill(fakeResponse(testCreateTopic))
                }
            });

            await page.goto(host);

            await page.fill('#title', expected.title);
            await page.fill('#author', expected.author);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#submit')
            ]);

            let result = JSON.parse(requestData);
            expect(result).to.eql(expected);
        });

        it('Should edit a book', async () => {
            await page.goto(host);
            await page.click('#loadBooks');
            await page.click('.editBtn');

            await page.click('text=Edit FORM TITLE AUTHOR Save >> [placeholder="Title..."]');
           
            await page.click('text=Edit FORM TITLE AUTHOR Save >> [placeholder="Author..."]');
            
            await page.fill('text=Edit FORM TITLE AUTHOR Save >> [placeholder="Author..."]', 'K.K Denzel');
          
            await page.click('#save');
          
            await page.click('#loadBooks');
            
            await page.click('text=K.K Denzel');
            await page.waitForSelector('tbody tr td');

            const firstBook = await page.$eval('tbody tr:first-child :first-child', (el) => el.textContent.trim());
            const firstAuthor = await page.$eval('tbody tr:first-child :nth-child(2)', (el) => el.textContent.trim());

            expect(firstBook).to.eql('Harry Potter and the Philosopher\'s Stone');
            expect(firstAuthor).to.eql('K.K Denzel');

        });


        it('Should delete a book', async () => {
            await page.goto(host);
            await page.click('#loadBooks');

            await page.click('tbody tr:last-child .deleteBtn');
            await page.click('#loadBooks');

            await page.waitForSelector('tbody tr td');


            const secondBook = await page.$eval('tbody tr:nth-child(2) :first-child', (el) => el.textContent.trim());
            const secondAuthor = await page.$eval('tbody tr:nth-child(2) :nth-child(2)', (el) => el.textContent.trim());

            expect(secondBook).to.eql('C# Fundamentals');
            expect(secondAuthor).to.eql('Svetlin Nakov');
            // await page.click('')
            // const btn = await page.$$('text=Delete');
            // await page.route('**/jsonstore/collections/books', (route, request) => {
            //     if (request.method().toLowerCase() === 'delete') {
            //         requestData = request.deleteData();
            //         route.fulfill(fakeResponse(testCreateTopic))
            //     }
            // });


            // const [response] = await Promise.all([
            //     page.waitForResponse('**/jsonstore/collections/books'),
            //     page.click('#deleteBtn')
            // ]);

            // expect(response.method()).to.equal('DELETE');

        });
    });
});
