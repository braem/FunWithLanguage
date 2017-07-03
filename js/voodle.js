var Lang = Lang || {};
Lang.Voodle = (function () {

    var voodle = function() {
        var form = document.getElementById("form");
        var text = form.elements[0].value;
        var words = text.split(" ");
        var new_words = [];
        for(var i=0; i<words.length; i++) {
            var word = words[i];
            if(!is_simple(word)) {
                document.getElementById("voodle").innerHTML = "Invalid sequence!";
                return;
            }
            words[i] = word.replace(/a|e|i|o|u/ig, 'oodle');
        }
        document.getElementById("voodle").innerHTML = words.toString().replace(/,/g, " ");
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
        gen: voodle
    };

}());
