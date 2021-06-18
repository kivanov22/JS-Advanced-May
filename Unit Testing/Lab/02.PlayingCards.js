// function createCard(par1, par2) {

//         class Card{
//             constructor(face,suit){
//             this.face=face;
//             this.suit=suit;
//             }
//         }
//         let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//         let suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' };

//         //face = face.toUpperCase();
//         //suit = suit.toUpperCase();

//         if (faces.includes(face) == false || suits.hasOwnProperty(suit) == false) {
//             console.log(`Invalid card: ${face}${suit}`);
//         }
//         return {
//             face,
//             suit,
//             toString: () => {
                
//                 return face +suit;
//             }
//         };
//     }

function CreateCards(currFace, suit) {
    const type = {
        face: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        suits: { S: '\u2660', H: '\u2665', D: '\u2666 ', C: '\u2663' },
        toString() {
            return `${currFace}${type.suits[suit]}`;
        }
    }

    if (type.suits[suit] && type.face.includes(currFace)) {
        return type.toString();

    } else {
        throw new Error('Error');
    }
}

console.log(CreateCards('10', 'H'));
console.log(CreateCards('A', 'S'));
console.log(CreateCards('1', 'C'));

