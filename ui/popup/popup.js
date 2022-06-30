'use strict';

document.addEventListener('DOMContentLoaded', setUp);

// ---- 関数定義 ----

// すべてのトピックを表示する関数。
function requestVisible()
{
    console.log("Sending messages ...");
    chrome.tabs.query({active:true, currentWindow:true}, // 現在アクティブなタブに対して
        (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, 'showAllTopics', (response) => {console.log(response ? "Success" : "Error");});
        }
    );
}

function openSetting()
{
    //window.open("../config/config.html");
}

// サイトを開いた時の処理を指定。
function setUp()
{
    console.log("setUp was called.");
    document.getElementById("setting").addEventListener('click', openSetting);
    document.getElementById("viewAll").addEventListener('click', requestVisible);

    chrome.tabs.query({active: true, currentWindow: true},
        (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, 'getHidedElementCount', (response) => {
                document.getElementById("num").innerText = response ?? 0;
            })
        }
    );
}