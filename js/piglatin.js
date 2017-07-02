function piglatin() {
    var form = document.getElementById("form");
    var text = form.elements[0].value;
    var words = text.split(" ");
    for(var i=0; i<words.length; i++) {
        words[i] = pigify(words[i]);
    }
    document.getElementById("txtfield").innerHTML = words.toString().replace(/,/g, " ");
}

function pigify(word) {
    var consonant_ctr = 0;
    var vowel_ctr = 0;
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

function is_vowel(letter) {
    return /[aeiou]/.test(letter);
}
function is_consonant(letter) {
    return !is_vowel(letter);
}
