const chalk = require('chalk');

const fontColors = [
    'red', 'green', 'yellow', 'blue', 'magenta', 'cyan',
];

module.exports.colorfulLog = (string, splitBy = ' ') => {
    const colorString = string.split(splitBy)
        .map(word => {
            const randomColorIndex = Math.floor(Math.random() * fontColors.length);
            const randomColor = fontColors[randomColorIndex];
            return chalk[randomColor](word);
        })
        .join(splitBy);

    console.log(colorString);
}