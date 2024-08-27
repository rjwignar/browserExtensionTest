// when we click our extension in jigsaw tab, this event listener will be fired and will pass instance of tab (tab we have opened)
chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () =>{
            alert("Hello from my extension!");
        }
    });
});