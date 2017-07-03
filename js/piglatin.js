var Lang = Lang || {};
Lang.PigLatin = (function () {

    function pigify(word) {
        var consonant_ctr = 0;
        var vowel_ctr = 0;
        if(word.length < 3)
            return word + "way";
        for(var i=0, len=word.length; i<len; i++) {
            var letter = word[i];
            if(is_vowel(letter)) {
                vowel_ctr++;
            }
            if(is_consonant(letter)) {
                consonant_ctr++;
            }
            if(is_consonant(letter) && vowel_ctr > 0) {
                return word + "way";
            }
            if(is_vowel(letter) && consonant_ctr > 0) {
                var consonants = word.substring(0, i);
                return word.substring(i, len) + consonants + "ay";
            }
        }
    }

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

    var piglatin = function() {
        var form = document.getElementById("form");
        var text = form.elements[0].value;
        var words = text.split(" ");
        for(var i=0; i<words.length; i++) {
            words[i] = pigify(words[i]);
            if(!is_simple(words[i])) {
                document.getElementById("piglatin").innerHTML = "Invalid sequence!";
                return;
            }
        }
        document.getElementById("piglatin").innerHTML = words.toString().replace(/,/g, " ");
    };

    return {
        gen: piglatin
    };

}());


