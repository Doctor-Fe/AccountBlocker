'use strict';

window.addEventListener('load', hideTopics);

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log("Message recieved.");
        if (request == "showAllTopics") {
            showTopics();
            sendResponse(true);
        } else if (request == "getHidedElementCount")
        {
            sendResponse(document.getElementsByClassName("hided").length);
        }
    }
);

function hideTopics() {
    console.log("hideTopics");
    var x = document.getElementsByClassName("iclosed");
    console.log(x.length);
    for (var i = 0; i < x.length; i++) {
        if (!x[i].classList.contains("isticky")) {
            hide(x[i].closest("tr"));
        }
    }
}

function hide(a) {
    a.style.setProperty("display", "none");
    a.classList.add("hided");
}

function show(a) {
    a.style.removeProperty("display");
    a.classList.remove("hided");
}

function showTopics() {
    var x = document.getElementsByClassName("hided");
    for (var i = 0; i < x.length; )
    {
        show(x[i]);
    }
}