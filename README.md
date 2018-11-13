# Intro
If you're using bunyan, there is a good chance you're passing in fields that you'll either log to some other store like seq,elk or something like that.  However, it's also useful to see this in the console.  This stream is built when expecting to use tokens when logging, see Usage for more details

# Usage 
Common log lines may look like this with bunyan.
```
const user = {username: 'Ray', age: 36 };
logger.debug({...user}, 'User {username}, is {age} years old');
```
Normally with back-end logging stores like Seq, the interpolation in this token format will occur on the server and not the client side.  To enable us to have the interpoloation on the client, use this stream in your bunyan configuration.

# Usage with Bunyan

```
import { createConsoleStream } from './index';

const options = {
    name: 'LoggerName',
    streams: [
        {
            type: 'raw', 
            stream: createConsoleStream(true),
            level: "debug"
        }
    ]
}
```