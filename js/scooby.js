var Lang = Lang || {};
Lang.ScoobyDoo = (function () {

    var scooby = function() {
        var form = document.getElementById("form");
        var text = form.elements[0].value;
        var words = text.split(" ");
        var new_words = [];
        for(var i=0; i<words.length; i++) {
            var word = words[i];
            if(!is_simple(word)) {
                document.getElementById("scooby").innerHTML = "Invalid sequence!";
                return;
            }
            for(var j=0; j<word.length; j++) {
                if(is_vowel(word[j])) {
                    word = "r" + word.substring(j, word.length);
                    break;
                }
            }
            words[i] = word;
        }
        document.getElementById("scooby").innerHTML = words.toString().replace(/,/g, " ");
    };

    function is_simple(word) {
        for(var i=0; i<word.length; i++) {
            if(!/[abcdefghijklmnopqrstuvwxyz]/i.test(word[i]))
                return false;
        }
        return true;
    }
    function is_vowel(letter) {
        return /[aeiouy]/i.test(letter);
    }
    function is_consonant(letter) {
        return !is_vowel(letter);
    }

    return {
        gen: scooby
    };

}());
