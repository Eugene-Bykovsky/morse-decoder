const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let message = expr;
    message = message.split('');

    let text = [];
    let letter = [];
    let x = 0;
    let y = 0;

    message.forEach(function (item) {
    x += 1;
    letter.push(item);
        if (x == 10) {
            letter = letter.join('');
            text[y] = letter;
            y += 1;
            x = 0;
            letter = [];
        }
    });

    text.forEach(function (item, i) {
    text[i] = item.replace(/10/gi, '.').replace(/11/gi, '-').replace(/0/gi, '').replace('**********', ' ');
    });

    text.forEach(function (item, i) {
    if (item in MORSE_TABLE) {
        text[i] = MORSE_TABLE[item];
    }
    });

    let result = text.join('');

    return result;
}

module.exports = {
    decode
}