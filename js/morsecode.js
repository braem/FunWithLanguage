var Lang = Lang || {};
Lang.MorseCode = (function () {
    var space =  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var dot = "&#9679;";
    var bar = "&#9632;&#9632;&#9632;";

    var context = new (window.AudioContext || window.webkitAudioContext());
    var oscillator = context.createOscillator();
    oscillator.frequency.value = 440;

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
        return /[abcdefghijklmnopqrstuvwxyz0123456789]/i.test(letter);
    }

    var morsecode = function() {
        var element = document.getElementById("morsecode");
        var form = document.getElementById("form");
        var text = form.elements[0].value;
        var words = text.split(" ");
        var code = "";
        for(var i=0; i<words.length; i++) {
            for(var j=0; j<words[i].length; j++) {
                if(!is_simple(words[i][j])) {
                    element.style.letterSpacing = '0px';
                    element.innerHTML = "Invalid sequence!";
                    return;
                }
                code += morse_map[words[i][j].toUpperCase()];
            }
        }
        Lang.MorseCode.code = code;
        console.log(code);
        element.style.letterSpacing = '-3px';
        element.innerHTML = code.toString().replace(/-/g, bar+space).replace(/\./g, dot+space).replace(/,/g, "");
    };

    var timeoutID = null;
    var current = null;
    var index = 0;
    var play = function() {
        $('#morse_play').prop("disabled", true);
        $('#morse_pause').prop("disabled", false);
        $('#morse_stop').prop("disabled", false);
        if(index >= Lang.MorseCode.code.length) { reset(); return; }
        current = Lang.MorseCode.code[index];
        index++;
        start_oscillator();
        if(current == "-") {
            timeoutID = setTimeout(stop_oscillator, 300);
        }
        else if(current == ".") {
            timeoutID = setTimeout(stop_oscillator, 100);
        }
    };

    var stop = function() {
        oscillator.stop(0);
        reset();
    };

    var pause = function() {
        clearTimeout(timeoutID);
        oscillator.stop(0);
        $('#morse_play').prop("disabled", false);
        $('#morse_pause').prop("disabled", true);
        $('#morse_stop').prop("disabled", false);
    };

    function reset() {
        clearTimeout(timeoutID);
        timeoutID = null;
        current = null;
        index = 0;
        $('#morse_play').prop("disabled", false);
        $('#morse_pause').prop("disabled", true);
        $('#morse_stop').prop("disabled", true);
    }

    function start_oscillator() {
        oscillator = context.createOscillator();
        oscillator.frequency.value = 440;
        oscillator.connect(context.destination);
        oscillator.start(0);
    }
    function stop_oscillator() {
        console.log('boop');
        oscillator.stop(0);
        oscillator.disconnect(context.destination);
        timeoutID = setTimeout(play, 100);
        //play();
    }

    return {
        gen: morsecode,
        play: play,
        pause: pause,
        stop: stop
    };

}());
