chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  eval(request.func)(request.params, sender, sendResponse);
  return true;
});

const loadAngular = (params, sender, sendResponse) => {
  let scripts: string[];
  // if (process.env.IS_PRODUCTION === '0') {
  //   scripts = [
  //     'c-app/runtime.js',
  //     'c-app/polyfills.js',
  //     'c-app/styles.js',
  //     'c-app/vendor.js',
  //     'c-app/main.js',
  //   ];
  // }
  // if (process.env.IS_PRODUCTION === '1') {
  scripts = [
    "c-app/js/bundle.js",
    "c-app/js/0.chunk.js",
    "c-app/js/1.chunk.js",
    "c-app/js/main.chunk.js",
  ];
  // }

  scripts.forEach((script) => {
    chrome.tabs.executeScript(sender.tab.id, { file: script }, (resp) => {});
  });

  sendResponse("message from bg: frontend loaded");
};
