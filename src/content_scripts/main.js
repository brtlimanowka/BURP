(function main() {
    if (document.URL.includes("jira.dev.xtrf.eu/browse")) {
        mainJira()
    } else if (document.URL.includes("/xtrf")) {
        mainXtrf()
    }
})()

function mainJira() {
    var toolbar = document.querySelector(".toolbar-split-left")

    if (!document.querySelector(".has-burp-panel") && toolbar) {
        var specificationTicketNumber = document.querySelector("#key-val").innerText
        var specificationAccount = document.querySelector("#customfield_12010-val > a").innerText.replace("&", "%26")
        var specificationVersion = document.querySelector("#customfield_15510-val") ? document.querySelector("#customfield_15510-val").innerText.substring(0,3) : ""
        var specificationTemplateURL = "https://docs.google.com/document/d/1FmwVEEDnw7wNTJ8b4WI5SQe9E18fA5mUC2l3nf7qbns/copy"
        var specificationHrefBuilder = `${specificationTemplateURL}?title=${specificationTicketNumber}[[${specificationAccount}]]${specificationVersion} - Customization specification`
        var epicNameFieldSelector = document.querySelector("#customfield_11314-val")
        var epicLinkFieldSelector = document.querySelector("#customfield_11310-val")
        var epicTicketNumber = document.querySelector("#key-val").innerText
        var epicParentTicketNumber = epicLinkFieldSelector ? epicLinkFieldSelector.children[0].attributes.href.value.replace("/browse/", "") : null
        var epicNumber = epicNameFieldSelector ? epicTicketNumber : (epicLinkFieldSelector ? epicParentTicketNumber : null)
        var redirectorURL = "https://storage.googleapis.com/burp-redirector/index.html"
        var encodeStoryParameters = btoa(`epic_key=${epicNumber}&type=design`)
        var encodeTaskParameters = btoa(`epic_key=${epicNumber}&type=production`)
        var storyHrefBuilder = `${redirectorURL}?${encodeStoryParameters}`
        var taskHrefBuilder = `${redirectorURL}?${encodeTaskParameters}`

        if (!epicNumber) {
            newUl = document.querySelector("#opsbar-comment-issue_container").cloneNode(true)
            newUl.innerHTML = `<a id=\"burp-create-specification\" title=\"Create Specification Document\" class=\"toolbar-trigger inline-comment\" href=\"${specificationHrefBuilder}\" target=\"_blank\" style=\"border-radius: 3px;\"><span class=\"icon aui-icon aui-icon-small aui-iconfont-doc\"></span> <span class=\"trigger-label\">Specification</span></a>`
        } else {
            newUl = document.createElement("ul")
            newUl.classList.add("toolbar-group")
            newUl.classList.add("pluggable-ops")
            newUl.id = "burp-toolbar"
            var specificationLi = `<a id=\"burp-create-specification\" title=\"Create Specification Document\" class=\"toolbar-trigger inline-comment\" href=\"${specificationHrefBuilder}\" target=\"_blank\"><span class=\"icon aui-icon aui-icon-small aui-iconfont-doc\"></span> <span class=\"trigger-label\">Specification</span></a>`
            var addStoryLi = `<a id=\"burp-add-story\" title=\"Add Story to Epic\" class=\"toolbar-trigger inline-comment\" href=\"${storyHrefBuilder}\" target=\"_blank\"><span class=\"icon aui-icon aui-icon-small aui-iconfont-add\"></span> <span class=\"trigger-label\">Add Story to Epic</span></a>`
            var addTaskLi = `<a id=\"burp-add-task\" title=\"Add Task to Epic\" class=\"toolbar-trigger inline-comment\" href=\"${taskHrefBuilder}\" target=\"_blank\"><span class=\"icon aui-icon aui-icon-small aui-iconfont-add\"></span> <span class=\"trigger-label\">Add Task to Epic</span></a>`
            newUl.innerHTML = `<li class=\"toolbar-item\">${specificationLi}</li><li class=\"toolbar-item\">${addStoryLi}</li><li class=\"toolbar-item\">${addTaskLi}</li>`
        }

        toolbar.insertBefore(newUl, toolbar.childNodes[4])
        toolbar.classList.add("has-burp-panel")
    }

    setTimeout(mainJira, 500)
}

function mainXtrf() {
    var buttonsToClone = new Array
    var buttonsCloned = new Array

    getActiveModule()
    getActiveMode()
    getActiveButtonNames(buttonsToClone)
    cloneActiveButtons(buttonsToClone, buttonsCloned)
    insertClonedButtons(buttonsCloned)
}
