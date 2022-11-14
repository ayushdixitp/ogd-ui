(() => {
  console.log('hii');
  let bundleName = 'elements.bundle.js';
  let chatScript = document.createElement('script');
  chatScript.type = 'text/javascript';
  chatScript.src = bundleName;
  location.pathname;
  if (location.pathname.includes('chatbot-configurations')) {
    if (customElements.get('dash-mfe')) {
      console.log('its there');
    } else {
      let chatScript = document.createElement('script');
      chatScript.type = 'text/javascript';
      chatScript.async = true;
      chatScript.src = bundleName;
      document.body.appendChild(chatScript);
    }
    document.body.appendChild(chatScript);
  }
})();

// (() => {
//     let bundleName = "assets/elements.bundle.js";

//     let chatScript = document.createElement("script");
//     chatScript.type = "text/javascript";
//     chatScript.src = bundleName;
//     if(location.pathname.includes('mfe')){
//         if(customElements.get('dash-mfe')){
//             console.log('its there');
//         }else {
//             let chatScript = document.createElement("script");
//             chatScript.type = "text/javascript";
//             chatScript.async = true;
//             chatScript.src = bundleName;
//             document.body.appendChild(chatScript);
//         }
//         document.body.appendChild(chatScript);
//     }
// })();

// {
//     "locales": {
//         "version": 2
//     },
//     "configurations": {
//         "version": 4
//     },
//     "locales-configurations": {
//         "version": 5
//     }
// }

// 1 -> // mfe/versrionrc/mfe.json

// locales-v2.js
// configurations-v4.js
