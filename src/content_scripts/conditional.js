if (document.URL.includes("/xtrf")) {
    if (activeMode != "Browsing") {
        const optionsElement = document.querySelector(".rf-cp-ico")
        const editorOptionsElement = document.querySelectorAll(".x-checkbox")
        const editorWindow = document.getElementById("j_id2:ace-velocity-editor")
        switch (activeModule.name) {
            case "XTRF Macro":
                optionsElement.click()
                if (editorOptionsElement[6].checked) {
                    editorOptionsElement[6].click()
                }
                editorWindow.style.width = "870px"
                break
            case "Custom Column":
                optionsElement.click()
                if (editorOptionsElement[4].checked) {
                    editorOptionsElement[4].click()
                }
                editorWindow.style.width = "870px"
                break
        }
    } 
    if (activeModule.name === "Document Template" && activeMode === "Editing") {
        var currentFile, newFile
        checkUploadedFile()
    }
    function checkUploadedFile() {
        currentFile = document.querySelector("[id$=fileNameId]")
        newFile = document.querySelector("[id$=files]")
        if (!!currentFile && !!newFile.children.length) {
            if (!newFile.innerText.includes(currentFile.innerText)){
                newFile.setAttribute("style", "background-color: #FFF2CC; border: 2px solid #FFD24C; border-radius: 5px")
            } else {
                newFile.setAttribute("style", "background-color: #F3F8F0; border: 2px solid #8CA268; border-radius: 5px")
            }
        }
        setTimeout(checkUploadedFile, 750)
    }
}
