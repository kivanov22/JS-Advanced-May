class ArtGallery {
    constructor(creator, possibleAritcles, listOfArticles, guests) {
        this.creator = creator
        this.possibleAritcles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = []
    }
    addArticle = function (articleModel, articleName, quantity) {
        if (!this.possibleAritcles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error(`This article model is not included in this gallery!`)
        } else {
            let isFound = false
            for (let line of this.listOfArticles) {
                if (line.articleName == articleName) {
                    line.quantity += quantity
                    isFound = true
                }
            }
            if (isFound == false) {
                let article = {
                    articleModel: articleModel.toLowerCase(),
                    articleName,
                    quantity
                }
                this.listOfArticles.push(article)
            }
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
    };
    inviteGuest = function (guestName, personality) {
        let isFound = false
        for (let line of this.guests) {
            if (line.guestName == guestName) {
                isFound = true
            }
        }
        if (isFound) {
            throw new Error(`${guestName} has already been invited.`)
        } else {
            let points = 0
            if (personality == `Vip`) {
                points = 500
            } else if (personality == `Middle`) {
                points = 250
            } else {
                points = 50
            }
            let guest = {
                guestName,
                points,
                purchaseArticle: 0
            }
            this.guests.push(guest)
            return `You have successfully invited ${guestName}!`
        }
    }
    buyArticle = function (articleModel, articleName, guestName) {
        let isFound = false
        for (let line of this.listOfArticles) {
            if (line.articleName == articleName && line.articleModel == articleModel) {
                isFound = true
                if (line.quantity == 0) {
                    return `The ${articleName} is not available.`
                }
                let guestIsFound = false
                for (let guest of this.guests) {
                    if (guest.guestName == guestName) {
                        guestIsFound = true
                        let neededPoints = this.possibleAritcles[articleModel]
                        if (guest.points < neededPoints) {
                            return `You need to more points to purchase the article.`
                        } else {
                            guest.points -= neededPoints
                            guest.purchaseArticle += 1
                            line.quantity -= 1
                            return `${guestName} successfully purchased the article worth ${neededPoints} points.`
                        }
                    }
                }
                if(!guestIsFound) {
                    return `This guest is not invited.`
                }
            }
        }
        if (!isFound) {
            throw new Error(`This article is not found.`)
        }
    }
   showGalleryInfo = function(criteria) {
       if (criteria == `article`) {
           let stringArr = [`Articles information:`]
           for (let line of this.listOfArticles) {
               let string = `${line.articleModel} - ${line.articleName} - ${line.quantity}`
               stringArr.push(string)
           }
           return stringArr.join(`\n`)
       } else if (criteria == `guest`) {
           let guestStringArr = [`Guests information:`]
           for (let line of this.guests) {
               let guestString = `${line.guestName} - ${line.purchaseArticle}`
               guestStringArr.push(guestString)
           }
           return guestStringArr.join(`\n`)
       }
   }
}