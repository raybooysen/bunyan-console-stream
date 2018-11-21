const format = require('string-template');

const createConsoleStream = (writeStructuredDate) => {
    return {
        write: logData => {
            const {msg, ...rest} = logData;
            const templatedMessage = format(msg, rest);
            if (writeStructuredDate) {
                console.log(templatedMessage, ...rest);
            } else {
                console.log(templatedMessage);
            }
        }
    }
}

export {createConsoleStream};
