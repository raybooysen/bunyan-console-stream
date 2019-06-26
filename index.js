const format = require('string-template');

const createConsoleStream = (writeStructuredData) => {
    return {
        write: logData => {
            const {msg, ...rest} = logData;
            const templatedMessage = format(msg, rest);
            if (writeStructuredData) {
                console.log(templatedMessage, {...rest});
            } else {
                console.log(templatedMessage);
            }
        }
    }
}

module.exports = { createConsoleStream };
