var Lang = Lang || {};
Lang.Chem = (function () {

    var chem = function() {
        var form = document.getElementById("form");
        var text = form.elements[0].value;
        var words = text.split(" ");
        var new_words = [];
        for(var i=0; i<words.length; i++) {
            var word = words[i];
            if(!is_simple(word)) {
                document.getElementById("chem").innerHTML = "Invalid sequence!";
                return;
            }
            for(var j=0; j<word.length; j++) {

            }
            words[i] = word;
        }
        document.getElementById("chem").innerHTML = words.toString().replace(/,/g, " ");
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

    periodic_table = [
        {
            code: 'H',
            name: 'Hydrogen'
        },
        {
            code: 'Li',
            name: 'Lithium'
        },
        {
            code: 'Na',
            name: 'Sodium'
        },
        {
            code: 'K',
            name: 'Potassium'
        },
        {
            code: 'Rb',
            name: 'Rubidium'
        },
        {
            code: 'Cs',
            name: 'Cesium'
        },
        {
            code: 'Fr',
            name: 'Francium'
        },
        {
            code: 'Be',
            name: 'Beryllium'
        },
        {
            code: 'Mg',
            name: 'Magnesium'
        },
        {
            code: 'Ca',
            name: 'Calcium'
        },
        {
            code: 'Sr',
            name: 'Strontium'
        },
        {
            code: 'Ba',
            name: 'Barium'
        },
        {
            code: 'Ra',
            name: 'Radium'
        },
        {
            code: 'Sc',
            name: 'Scandium'
        },
        {
            code: 'Y',
            name: 'Yttrium'
        },
        {
            code: 'La',
            name: 'Lanthanum'
        },
        {
            code: 'Ce',
            name: 'Cerium'
        },
        {
            code: 'Pr',
            name: 'Praseodymium'
        },
        {
            code: 'Nd',
            name: 'Neodymium'
        },
        {
            code: 'Pm',
            name: 'Promethium'
        },
        {
            code: 'Sm',
            name: 'Samarium'
        },
        {
            code: 'Eu',
            name: 'Europium'
        },
        {
            code: 'Gd',
            name: 'Gadolinium'
        },
        {
            code: 'Tb',
            name: 'Terbium'
        },
        {
            code: 'Dy',
            name: 'Dysprosium'
        },
        {
            code: 'Ho',
            name: 'Holmium'
        },
        {
            code: 'Er',
            name: 'Erbium'
        },
        {
            code: 'Tm',
            name: 'Thulium'
        },
        {
            code: 'Yb',
            name: 'Ytterbium'
        },
        {
            code: 'Lu',
            name: 'Lutemtium'
        },
        {
            code: 'Ac',
            name: 'Actinium'
        },
        {
            code: 'Th',
            name: 'Thorium'
        },
        {
            code: 'Pa',
            name: 'Protactinium'
        },
        {
            code: 'U',
            name: 'Uranium'
        },
        {
            code: 'Np',
            name: 'Neptunium'
        },
        {
            code: 'Pu',
            name: 'Plutonium'
        },
        {
            code: 'Am',
            name: 'Americium'
        },
        {
            code: 'Cm',
            name: 'Curium'
        },
        {
            code: 'Bk',
            name: 'Berkelium'
        },
        {
            code: 'Cf',
            name: 'Californium'
        },
        {
            code: 'Es',
            name: 'Einsteinium'
        },
        {
            code: 'Fm',
            name: 'Fermium'
        },
        {
            code: 'Md',
            name: 'Mendelevium'
        },
        {
            code: 'No',
            name: 'Nobelium'
        },
        {
            code: 'Lr',
            name: 'Lawrencium'
        },
        {
            code: 'Ti',
            name: 'Titanium'
        },
        {
            code: 'Zr',
            name: 'Zirconium'
        },
        {
            code: 'Hf',
            name: 'Hafnium'
        },
        {
            code: 'Rf',
            name: 'Rutherfordium'
        },
        {
            code: 'V',
            name: 'Vanadium'
        },
        {
            code: 'Nb',
            name: 'Niobium'
        },
        {
            code: 'Ta',
            name: 'Tantalum'
        },
        {
            code: 'Db',
            name: 'Dubnium'
        },
        {
            code: 'Cr',
            name: 'Chromium'
        },
        {
            code: 'Mo',
            name: 'Molybdenum'
        },
        {
            code: 'W',
            name: 'Tungsten'
        },
        {
            code: 'Sg',
            name: 'Seaborgium'
        },
        {
            code: 'Mn',
            name: 'Manganese'
        },
        {
            code: 'Tc',
            name: 'Technetium'
        },
        {
            code: 'Re',
            name: 'Rhenium'
        },
        {
            code: 'Bh',
            name: 'Bohrium'
        },
        {
            code: 'Fe',
            name: 'Iron'
        },
        {
            code: 'Ru',
            name: 'Ruthenium'
        },
        {
            code: 'Os',
            name: 'Osmium'
        },
        {
            code: 'Hs',
            name: 'Hassium'
        },
        {
            code: 'Co',
            name: 'Cobalt'
        },
        {
            code: 'Rh',
            name: 'Rhodium'
        },
        {
            code: 'Ir',
            name: 'Iridium'
        },
        {
            code: 'Mt',
            name: 'Meitnerium'
        },
        {
            code: 'Ni',
            name: 'Nickel'
        },
        {
            code: 'Pd',
            name: 'Palladium'
        },
        {
            code: 'Pt',
            name: 'Platinum'
        },
        {
            code: 'Ds',
            name: 'Darmstadtium'
        },
        {
            code: 'Cu',
            name: 'Copper'
        },
        {
            code: 'Ag',
            name: 'Silver'
        },
        {
            code: 'Au',
            name: 'Gold'
        },
        {
            code: 'Rg',
            name: 'Roentgenium'
        },
        {
            code: 'Zn',
            name: 'Zinc'
        },
        {
            code: 'Cd',
            name: 'Cadmium'
        },
        {
            code: 'Hg',
            name: 'Mercury'
        },
        {
            code: 'Cn',
            name: 'Copernicium'
        },
        {
            code: 'B',
            name: 'Boron'
        },
        {
            code: 'Al',
            name: 'Aluminum'
        },
        {
            code: 'Ga',
            name: 'Gallium'
        },
        {
            code: 'In',
            name: 'Indium'
        },
        {
            code: 'Tl',
            name: 'Thallium'
        },
        {
            code: 'Nh',
            name: 'Nihonium'
        },
        {
            code: 'C',
            name: 'Carbon'
        },
        {
            code: 'Si',
            name: 'Silicon'
        },
        {
            code: 'Ge',
            name: 'Germanium'
        },
        {
            code: 'Sn',
            name: 'Tin'
        },
        {
            code: 'Pb',
            name: 'Lead'
        },
        {
            code: 'Fl',
            name: 'Flerovium'
        },
        {
            code: 'N',
            name: 'Nitrogen'
        },
        {
            code: 'P',
            name: 'Phosphorus'
        },
        {
            code: 'As',
            name: 'Arsenic'
        },
        {
            code: 'Sb',
            name: 'Antimony'
        },
        {
            code: 'Bi',
            name: 'Bismuth'
        },
        {
            code: 'Mc',
            name: 'Moscovium'
        },
        {
            code: 'O',
            name: 'Oxygen'
        },
        {
            code: 'S',
            name: 'Sulfur'
        },
        {
            code: 'Se',
            name: 'Selenium'
        },
        {
            code: 'Te',
            name: 'Tellurium'
        },
        {
            code: 'Po',
            name: 'Polonium'
        },
        {
            code: 'Lv',
            name: 'Livermorium'
        },
        {
            code: 'F',
            name: 'Fluorine'
        },
        {
            code: 'Cl',
            name: 'Chlorine'
        },
        {
            code: 'Br',
            name: 'Bromine'
        },
        {
            code: 'I',
            name: 'Iodine'
        },
        {
            code: 'At',
            name: 'Astatine'
        },
        {
            code: 'Ts',
            name: 'Tennessine'
        },
        {
            code: 'He',
            name: 'Helium'
        },
        {
            code: 'Ne',
            name: 'Neon'
        },
        {
            code: 'Ar',
            name: 'Argon'
        },
        {
            code: 'Kr',
            name: 'Krypton'
        },
        {
            code: 'Xe',
            name: 'Xenon'
        },
        {
            code: 'Rn',
            name: 'Radon'
        },
        {
            code: 'Og',
            name: 'Oganesson'
        }

    ];

    return {
        gen: chem
    };

}());
