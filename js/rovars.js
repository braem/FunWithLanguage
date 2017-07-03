var Lang = Lang || {};
Lang.Rovars = (function () {

    var rovars = function() {
        var form = document.getElementById("form");
        var text = form.elements[0].value;
        var words = text.split(" ");
        var new_words = [];
        for(var i=0; i<words.length; i++) {
            var word = words[i];
            if(!is_simple(word)) {
                document.getElementById("rovars").innerHTML = "Invalid sequence!";
                return;
            }
            var j=0;
            while(j<word.length) {
                if(is_consonant(word[j])) {
                    var consonant = word[j];
                    var start = word.substring(0,j);
                    var end = word.substring(j+1,word.length);
                    word = start + consonant + "o" + consonant + end;
                    j+=2;
                }
                j++;
            }
            words[i] = word;
        }
        document.getElementById("rovars").innerHTML = words.toString().replace(/,/g, " ");
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
        gen: rovars
    };

}());
