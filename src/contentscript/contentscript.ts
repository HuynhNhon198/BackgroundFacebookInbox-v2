import "./contentscript.scss";

console.log("testttt");
const rootEl = document.createElement("div");
rootEl.id = "root";
document.body.appendChild(rootEl);
setTimeout(() => {
  chrome.runtime.sendMessage(
    {
      func: "loadAngular",
      params: {},
    },
    (response) => {
      console.log(response);
    }
  );
}, 1000);
