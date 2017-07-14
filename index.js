const asyncHooks = require('async_hooks');
const fs = require('fs');

async_hooks.createHook({
    init(asyncId, type, triggerId) {
        const cId = async_hooks.currentId();
        fs.writeSync(1, `${type}(${asyncId}): trigger: ${triggerId} scope: ${cId}\n`);
    }
}).enable();

require('net').createServer((conn) => {}).listen(3000);