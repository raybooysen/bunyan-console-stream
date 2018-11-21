const format = require('string-template');

const createConsoleStream = (writeStructuredDate) => {
    return {
        write: logData => {
            const templatedMessage = format(logData.msg, logData);
            if (writeStructuredDate) {
                const {msg, ...rest} = logData;
                console.log(templatedMessage, ...rest);
            } else {
                console.log(templatedMessage);
            }
        }
    }
}

export {createConsoleStream};
