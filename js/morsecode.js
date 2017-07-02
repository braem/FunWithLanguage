var Lang = Lang || {};
Lang.MorseCode = (function () {
    var space =  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var dot = "&#9679;";
    var bar = "&#9632;&#9632;&#9632;";

    var morse_map = {
        'A': [dot, bar],
        'B': [bar, dot, dot, dot],
        'C': [bar, dot, bar, dot],
        'D': [bar, dot, dot],
        'E': [dot],
        'F': [dot, dot, bar ,dot],
        'G': [bar, bar, dot],
        'H': [dot, dot, dot, dot],
        'I': [dot, dot],
        'J': [dot, bar, bar, bar],
        'K': [bar, dot, bar],
        'L': [dot, bar, dot, dot],
        'M': [bar, bar],
        'N': [bar, dot],
        'O': [bar, bar, bar],
        'P': [dot, bar, bar, dot],
        'Q': [bar, bar, dot, bar],
        'R': [dot, bar, dot],
        'S': [dot, dot, dot],
        'T': [bar],
        'U': [dot, dot, bar],
        'V': [dot, dot, dot, bar],
        'W': [dot, bar, bar],
        'X': [bar, dot, dot, bar],
        'Y': [bar, dot, bar, bar],
        'Z': [bar, bar, dot, dot],
        '1': [dot, bar, bar, bar, bar],
        '2': [dot, dot, bar, bar, bar],
        '3': [dot, dot, dot, bar, bar],
        '4': [dot, dot, dot, dot, bar],
        '5': [dot, dot, dot, dot, dot],
        '6': [bar, dot, dot, dot, dot],
        '7': [bar, bar, dot, dot, dot],
        '8': [bar, bar, bar, dot, dot],
        '9': [bar, bar, bar, bar, dot],
        '10':[bar, bar, bar, bar, bar]
    };

    function is_simple(letter) {
        return /[abcdefghijklmnopqrstuvwxyz0123456789]/.test(letter);
    }

    var morsecode = function() {
        var element = document.getElementById("morsecode");
        var form = document.getElementById("form");
        var text = form.elements[0].value;
        var words = text.split(" ");
        var display_txt = [];
        for(var i=0; i<words.length; i++) {
            for(var j=0; j<words[i].length; j++) {
                if(!is_simple(words[i][j])) {
                    element.style.letterSpacing = '0px';
                    element.innerHTML = "Invalid sequence!";
                    return;
                }
                var morse = morse_map[words[i][j].toUpperCase()];
                display_txt.push(morse);
            }
        }
        element.style.letterSpacing = '-3px';
        element.innerHTML = display_txt.toString().replace(/,/g, space);
    };

    return {
        gen: morsecode
    };

}());
