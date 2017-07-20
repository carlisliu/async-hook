const asyncHooks = require('async_hooks');
const fs = require('fs');

asyncHooks.createHook({
    init(asyncId, type, triggerId) {
        const cId = asyncHooks.currentId();
        fs.writeSync(1, `${type}(${asyncId}): trigger: ${triggerId} scope: ${cId}\n`);
    }
}).enable();


require('net').createServer((conn) => {}).listen(3000, ()=>{
    fs.writeSync(1, `listening`);
});
