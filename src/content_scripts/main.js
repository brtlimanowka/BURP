(function main() {
    if (document.URL.includes("jira.dev.xtrf.eu/browse")) {
        mainJira();
    } else if (document.URL.includes("/xtrf")) {
        mainXtrf();
    }
})()

function mainJira() {
    if (!document.querySelector(".has-confirmation-button")) {
        var toolbar = document.querySelector(".toolbar-split-left");
        var originalUl = document.querySelector("#opsbar-comment-issue_container");
        if (toolbar && originalUl) {
            var cloneUl = originalUl.cloneNode(true);
            var specificationTicketNumber = document.querySelector("#key-val").innerText;
            var specificationAccount = document.querySelector("#customfield_12010-val > a").innerText.replace("&", "%26");
            var specificationVersion = document.querySelector("#customfield_15510-val") ? document.querySelector("#customfield_15510-val").innerText.substring(0,3) : "";

            cloneUl.innerHTML = `<li class=\"toolbar-item\"><a id=\"comment-issue\" title=\"Comment on this issue\" class=\"toolbar-trigger issueaction-comment-issue add-issue-comment inline-comment\" href=\"https://docs.google.com/document/d/1FmwVEEDnw7wNTJ8b4WI5SQe9E18fA5mUC2l3nf7qbns/copy?title=${specificationTicketNumber}[[${specificationAccount}]]${specificationVersion} - Customization specification\" target=\"_blank\"><span class=\"icon aui-icon aui-icon-small aui-iconfont-comment icon-comment\"></span> <span class=\"trigger-label\">Specification</span></a></li>`;
            cloneUl.firstChild.firstChild.title = "Create Specification Document";
            cloneUl.firstChild.firstChild.id = "create-specification";
            cloneUl.firstChild.firstChild.firstChild.classList.remove("aui-iconfont-comment");
            cloneUl.firstChild.firstChild.firstChild.classList.remove("icon-comment");
            cloneUl.firstChild.firstChild.firstChild.classList.add("aui-iconfont-doc");
            cloneUl.firstChild.firstChild.firstChild.classList.add("icon-doc");
            toolbar.insertBefore(cloneUl, toolbar.childNodes[4]);
            toolbar.classList.add("has-confirmation-button");
        }
    }
    setTimeout(mainJira, 1000);
}

function mainXtrf() {  
    // console.log(`[BURP]: Content Script burp.js loaded`);
    var buttonsToClone = new Array;
    var buttonsCloned = new Array;

    getActiveModule();
    getActiveMode();
    getActiveButtonNames(buttonsToClone);
    cloneActiveButtons(buttonsToClone, buttonsCloned);
    insertClonedButtons(buttonsCloned);
    // console.log(`[BURP]: Currently ${activeMode} ${activeModule.name}`);   
}
