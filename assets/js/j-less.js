/* J-LESS */

//Selector
function $(_string){
    var string = new String(_string);
    var mode;

    string.search(".") == 0 ? mode = "class" : 0;
    string.search("#") == 0 ? mode = "id" : 0;

    switch(mode){
        case "id":
            var element = document.querySelector(string);

            return element;
        break;
        case "class":
            var elements = document.querySelectorAll(string);

            return elements;
        break;
        default: 
            var tag = string;
            var elements = document.querySelectorAll(tag);

            return elements;
    }    
}


// Event 
HTMLElement.prototype.on = function(event, callback){
    this.addEventListener(event, callback);
}