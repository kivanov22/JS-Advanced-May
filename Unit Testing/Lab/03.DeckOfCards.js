function solve(cardArr) {
    let result = [];

    function createCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' };

        face = face.toUpperCase();
        suit = suit.toUpperCase();

        if (faces.includes(face) == false || suits.hasOwnProperty(suit) == false) {
            console.log(`Invalid card: ${face}${suit}`);
        }
        return {
            face,
            suit,
            toString: () => {
                return face + suits[suit];
            }
        }
    }

    for (const card of cardArr) {
        let face = card.substring(0, card.length - 1);
        let suit = card.substring(card.length - 1);
        let newCard = createCard(face, suit);

        result.push(newCard);
    };
        

    return result.join(' ');
}
console.log(solve(['AS', '10D', 'KH', '2C']));