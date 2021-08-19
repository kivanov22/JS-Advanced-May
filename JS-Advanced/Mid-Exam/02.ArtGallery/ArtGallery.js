class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        let lowerCaseArctile = articleModel.toLowerCase();

        if (!this.possibleArticles[lowerCaseArctile]) {
            throw new Error("This article model is not included in this gallery!");
        }

        if (this.possibleArticles[lowerCaseArctile]) {
            this.possibleArticles[lowerCaseArctile] += quantity;
        }

        this.listOfArticles.push({ lowerCaseArctile, articleName, quantity });

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        //.find(g=>g.guestName===guestName)
        if (!this.guests.includes(guestName)) {
            if (personality === 'Vip') {
                //500
                //this.guests[guestName].points = 500;
                this.guests.push({ guestName, points: 250, purchaseArticle: 0 });
                return `You have successfully invited ${guestName}!`;
            }
            if (personality === 'Middle') {
                //250
                // this.guests[guestName].points = 250;
                this.guests.push({ guestName, points: 250, purchaseArticle: 0 });
                return `You have successfully invited ${guestName}!`;
            } else {
                //50
                // this.guests[guestName].points = 50;
                this.guests.push({ guestName, points: 50, purchaseArticle: 0 });
                return `You have successfully invited ${guestName}!`;
            }


        } else if (this.guests.includes(guestName)) {//
            throw new Error(`${guestName} has already been invited.`);
        }


    }
    buyArticle ( articleModel, articleName, guestName){

        if(!this.listOfArticles.includes(articleName) || this.listOfArticles[articleModel] !==articleModel){
            throw new Error("This article is not found.");
        }

        
        // if(this.listOfArticles[articleName].quantity)
    }

}





// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// Output 1
//   Successfully added article Mona Liza with a new quantity- 3.
//   Successfully added article Ancient vase with a new quantity- 2.
//   Successfully added article Mona Liza with a new quantity- 1.

// Input 2
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));

// Output 2
//  You have successfully invited John!
//  You have successfully invited Peter!
//  John has already been invited.


// Input 3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// Output 3
//  John successfully purchased the article worth 200 points.
//  Peter successfully purchased the article worth 250 points. 
//  This article is not found.


// Input 4
// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));

// Output 4
//  Articles information:
//  picture - Mona Liza - 3
//  item - Ancient vase - 1
//  Guests information:
//  John - 1
//  Peter - 1
