async function sayHello() {
    //chrome.tabs
    // queries active tab
    let [tab] = await chrome.tabs.query({ active: true });

    //
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            // would point to the body of the tab itself, not the extension window
            // we can use this to inject content into the tab
            alert("Hello from my extension!");
        }
    });
}

// document inside popup is the DOM of index.html (add click even to the button)
document.getElementById("myButton").addEventListener("click", sayHello);