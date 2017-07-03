var Lang = Lang || {};
Lang.MorseCode = (function () {
    var space =  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var dot = "&#9679;";
    var bar = "&#9632;&#9632;&#9632;";

    var context = new (window.AudioContext || window.webkitAudioContext());
    var oscillator = context.createOscillator();
    oscillator.frequency.value = 440;
    oscillator.connect(context.destination);

    var morse_map = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",

        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "0": "-----"
    };

    var display_map = {
        '-': bar,
        '.': dot
    };

    function is_simple(letter) {
        return /[abcdefghijklmnopqrstuvwxyz0123456789]/.test(letter);
    }

    var morsecode = function() {
        var element = document.getElementById("morsecode");
        var form = document.getElementById("form");
        var text = form.elements[0].value;
        var words = text.split(" ");
        var code = [];
        for(var i=0; i<words.length; i++) {
            for(var j=0; j<words[i].length; j++) {
                if(!is_simple(words[i][j])) {
                    element.style.letterSpacing = '0px';
                    element.innerHTML = "Invalid sequence!";
                    return;
                }
                code.push(morse_map[words[i][j].toUpperCase()]);
            }
        }
        Lang.MorseCode.code = code;
        element.style.letterSpacing = '-3px';
        element.innerHTML = code.toString().replace(/-/g, bar+space).replace(/\./g, dot+space).replace(/,/g, "");
    };

    var play = function() {

        oscillator.start(0);
    };

    var stop = function() {
        oscillator.stop(0);
    };

    var playChar = function(t, c) {
        for(var i = 0; i < c.length; i++) {
            switch(c[i]) {
                case '.':
                    gain.gain.setValueAtTime(1.0, t);
                    t += dot_time;
                    gain.gain.setValueAtTime(0.0, t);
                    break;
                case '-':
                    gain.gain.setValueAtTime(1.0, t);
                    t += 3 * dot_time;
                    gain.gain.setValueAtTime(0.0, t);
                    break;
            }
            t += dot_time;
        }
        return t;
    };

    var playString = function(t, w) {
        w = w.toUpperCase();
        for(var i = 0; i < w.length; i++) {
            if(w[i] == ' ') {
                t += 3 * dot_time; // 3 dots from before, three here, and
                                    // 1 from the ending letter before.
            }
            else if(morse_map[w[i]] != undefined) {
                t = playChar(t, morse_map[w[i]]);
                t += 2 * dot_time;
            }
        }
        return t;
    };

    return {
        gen: morsecode,
        play: play,
        stop: stop
    };

}());
