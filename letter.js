var Letter = function(character, wasGuessed){

    this.character = character;
    this.wasGuessed = wasGuessed;
    this.getPlaceholder = function(){
        if(this.wasGuessed){
            return character;
        }else{
            return "_";
        } 
    };
    this.processGuess = function(guess){
        if(guess === this.character){
            this.wasGuessed = true;
        }
    };     
}

module.exports = Letter;
