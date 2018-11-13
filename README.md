**Usage

```
import { createConsoleStream } from './index';

const options = {
    name: 'LoggerName',
    streams: [
        {
            type: "raw", 
            stream: createConsoleStream(true),
            level: "debug"
        }
    ]
}
```