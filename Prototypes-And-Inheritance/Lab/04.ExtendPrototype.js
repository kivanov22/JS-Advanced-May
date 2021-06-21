function extendProrotype(classToExtend) {
    
    classToExtend.prototype.species='Human';//Prototype class which has property species and a value Human
    classToExtend.prototype.toSpeciesString=function(){//Prototype class which has function that returns given string
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
