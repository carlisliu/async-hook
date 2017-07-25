# async-hook
async-hook of node

    asyncHooks.createHook({
      init(asyncId, type, triggerId) {
          const cId = asyncHooks.currentId();
          fs.writeSync(1, `${type}(${asyncId}): trigger: ${triggerId} scope: ${cId}\n`);
      }
    }).enable();
