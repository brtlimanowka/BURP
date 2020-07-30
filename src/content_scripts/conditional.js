// console.log(`[BURP]: Content Script macros.js loaded`)

if (document.URL.includes("/xtrf")) {
    if (activeMode != "Browsing") {
        switch (activeModule.name) {
            case "XTRF Macro":
                document.getElementsByClassName("rf-cp-ico")[0].click();
                document.getElementsByClassName("x-checkbox")[6].click();  
                break;
            case "Custom Column":
                document.getElementsByClassName("rf-cp-ico")[0].click();
                document.getElementsByClassName("x-checkbox")[4].click();
                break;
        }  
    } 
    if (activeModule.name == "Document Template" && activeMode == "Editing") {
        var currentFile, newFile;
        checkUploadedFile();
    }
    function checkUploadedFile() {
        currentFile = document.getElementById("j_id2:fileNameId");
        newFile = document.getElementById("j_id2:files");
        if (currentFile && newFile.children.length) {
            if (!newFile.innerText.includes(currentFile.innerText)){
                newFile.setAttribute("style", "background-color: #FFF2CC; border: 2px solid #FFD24C; border-radius: 5px");
            } else {
                newFile.setAttribute("style", "background-color: #F3F8F0; border: 2px solid #8CA268; border-radius: 5px");
            }
        }
        setTimeout(checkUploadedFile, 750);
    }
}



