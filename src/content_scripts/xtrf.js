function getActiveModule() {
    var urlRegex = /\/faces\/\w+\//
    var urlModule = document.URL.match(urlRegex).toString()
    xtrfModules.forEach(xtrfModule => {
        if(xtrfModule.url == urlModule) {
            activeModule = xtrfModule
        }
    })
}

function getActiveMode() {
    if (document.URL.includes("browse.seam")) {
        activeMode = "Browsing"
    } else if (document.URL.includes("action=display")) {
        activeMode = "Displaying"
    } else if (document.URL.includes("action=edit")) {
        activeMode = "Editing"
    } else if (document.URL.includes("action=create")) {
        activeMode = "Creating"
    }
}

function getActiveButtonNames(array) {
    if (activeModule) {
        switch (activeMode) {
            case "Displaying":
                activeModule.buttonsDisplayMode.forEach(value => array.push(value))
                break
            case "Editing":
                activeModule.buttonsEditMode.forEach(value => array.push(value))
                break
            case "Creating":
                activeModule.buttonsCreateMode.forEach(value => array.push(value))
                break
        }
    } 
}

function cloneActiveButtons(inputArray, outputArray) {
    var buttonTransport = new Array
    if (activeMode == "Editing"
        && (activeModule.name == "Client"
            || activeModule.name == "Provider"
            || activeModule.name == "Numbering Scheme")){
        inputArray.forEach(element => {
            switch (element) {
                case "Save":
                    buttonTransport.push(document.getElementsByClassName("eutecert-save-button")[0])
                    break
                case "Cancel":
                    buttonTransport.push(document.getElementsByClassName("eutecert-cancel-button")[0])
                    break
                default:
                    buttonTransport.push(document.querySelectorAll(`input[value='${element}']`)[0])
                    break
            }
        })
    } else {
        inputArray.forEach(element => {
            buttonTransport.push(document.querySelectorAll(`input[value='${element}']`)[0])
        })
    }
    buttonTransport.forEach(element => {
        outputArray.unshift(element.cloneNode(true))
    })
}

function insertClonedButtons(array) {
    var mainFrame
    if (document.URL.includes("/faces/project/create.seam?action=create")) {
        mainFrame = document.getElementById("projectCreateForm")
    } else {
        mainFrame = document.getElementById(activeModule.mainFrame)
    }
    array.forEach(element => {
        mainFrame.insertBefore(element, mainFrame.childNodes[0])
    })
}

(function addMenuMain() {
    var menuAdd, menuGoto, menuSystem
    function addMenu() {
        if (!(menuAdd && menuGoto && menuSystem)) {
            menuAdd = document.getElementsByClassName("menu-item create")[0]
            menuGoto = menuAdd.cloneNode(true)
            menuGotoList = menuGoto.childNodes[7].childNodes[1]
            menuSystem = document.getElementsByClassName("system-menu")[0]

            menuGoto.childNodes[1].classList.replace("--create", "--bookmark")
            menuGoto.childNodes[3].innerText = "Go To"
            menuGotoList.childNodes[1].childNodes[1].setAttribute("href", "/xtrf/faces/virtualCustomizableColumn/browse.seam")
            menuGotoList.childNodes[1].childNodes[1].innerText = "Custom Columns"
            menuGotoList.childNodes[3].childNodes[1].setAttribute("href", "/xtrf/faces/customFieldConfiguration/browse.seam")
            menuGotoList.childNodes[3].childNodes[1].innerText = "Custom Fields"
            menuGotoList.childNodes[5].childNodes[1].setAttribute("href", "/xtrf/faces/reportTemplates/browse.seam")
            menuGotoList.childNodes[5].childNodes[1].innerText = "Document Templates"
            menuGotoList.childNodes[7].childNodes[1].setAttribute("href", "/xtrf/faces/activity/browse.seam")
            menuGotoList.childNodes[7].childNodes[1].innerText = "Jobs"
            menuGotoList.childNodes[9].childNodes[1].setAttribute("href", "/xtrf/faces/providerInvoices/browse.seam")
            menuGotoList.childNodes[9].childNodes[1].innerText = "Provider Invoices"
            menuGotoList.childNodes[11].childNodes[1].setAttribute("href", "/xtrf/faces/task/browse.seam?filters=hasProjectPhase:yes")
            menuGotoList.childNodes[11].childNodes[1].innerText = "Tasks"
            menuGotoList.childNodes[13].childNodes[1].setAttribute("href", "/xtrf/faces/macro/browse.seam")
            menuGotoList.childNodes[13].childNodes[1].innerText = "XTRF Macros"

            menuSystem.insertBefore(menuGoto, menuAdd)
        }
    }
    setTimeout(addMenu, 1000)
})()
