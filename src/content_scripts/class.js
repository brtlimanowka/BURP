const mainContainerId = "j_id2"

class XtrfModule {
    constructor(name, url, mainFrame, buttonsDisplayMode, buttonsCreateMode, buttonsEditMode) {
        this.name = name
        this.url = url
        this.mainFrame = mainFrame
        this.buttonsDisplayMode = buttonsDisplayMode
        this.buttonsCreateMode = buttonsCreateMode
        this.buttonsEditMode = buttonsEditMode
    }
}

function getDocumentTemplateTableId() {
    var tables = document.getElementsByTagName("table")
    if (tables.length) {
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].parentElement && tables[i].parentElement.id === mainContainerId) {
                return tables[i].id
            }
        }
    }
}

const xClient = new XtrfModule(
    "Client",
    "/faces/customer/",
    "customerForm",
    ["Edit", "Cancel", "Add Quote", "Add Project"],
    ["Continue", "Cancel"],
    ["Save", "Cancel", "Add Quote", "Add Project", "Erase Personal Data"]
)

const xClientInvoice = new XtrfModule(
    "Client Invoice",
    "/faces/customerInvoice/",
    `${mainContainerId}:customerInvoiceTabPanel`,
    ["Edit", "Back"],
    [""],
    ["Save", "Cancel", "Back"]
)

const xContact = new XtrfModule(
    "Contact",
    "/faces/providerPerson/",
    `${mainContainerId}:mainPartnerPersonTabPanel`,
    ["Edit", "Exit"],
    [""],
    ["Save", "Save and Exit", "Cancel", "Exit", "Erase Personal Data"]
)
    
const xCustomColumn = new XtrfModule(
    "Custom Column",
    "/faces/virtualCustomizableColumn/",
    `${mainContainerId}:mainPanel`,
    ["Edit", "Exit"],
    ["Save", "Cancel"],
    ["Save", "Save and Exit", "Cancel", "Exit"]
)

const xDocumentTemplate = new XtrfModule(
    "Document Template",
    "/faces/reportTemplates/",
    getDocumentTemplateTableId(),
    ["Edit", "Exit"],
    ["Save", "Cancel"],
    ["Save", "Save and Exit", "Cancel", "Exit"]
)

const xJob = new XtrfModule(
    "Job",
    "/faces/activity/",
    `${mainContainerId}:activityMain`,
    ["Edit", "Cancel", "Back to Task"],
    ["Save", "Cancel", "Back to Task"],
    ["Save", "Cancel", "Back to Task"]
)

const xNumberingScheme = new XtrfModule(
    "Numbering Scheme",
    "/faces/numberingSchema/",
    `${mainContainerId}`,
    ["Edit", "Exit", "Test"],
    ["Save", "Cancel"],
    ["Save", "Save and Exit", "Cancel", "Exit", "Test", "Show Values", "Restore Defaults"]
)

const xProject = new XtrfModule(
    "Project",
    "/faces/project/",
    `${mainContainerId}:mainTabPanel`,
    ["Edit", "Show Summary Page", "Cancel"],
    ["Save", "Cancel"],
    ["Save", "Show Summary Page", "Cancel"]
)

const xProvider = new XtrfModule(
    "Provider",
    "/faces/provider/",
    "providerForm",
    ["Edit", "Cancel"],
    ["Continue", "Cancel"],
    ["Save", "Cancel", "Erase Personal Data"]
)

const xProviderInvoice = new XtrfModule(
    "Provider Invoice",
    "/faces/providerInvoice/",
    `${mainContainerId}:providerInvoiceTabPanel`,
    ["Edit", "Back"],
    [""],
    ["Save", "Cancel", "Back"]
)

const xQuote = new XtrfModule(
    "Quote",
    "/faces/quote/",
    `${mainContainerId}:mainTabPanel`,
    ["Edit", "Cancel"],
    ["Save", "Cancel"],
    ["Save", "Cancel", "Convert into Project", "Mark as Rejected"]
)

const xSmartConnector = new XtrfModule(
    "Smart Connector",
    "/faces/smartConnector/",
    `${mainContainerId}:smartConnectorsTabPanel`,
    ["Edit", "Exit"],
    ["Save", "Cancel"],
    ["Save", "Save and Exit", "Cancel", "Exit", "Test Connector"]
)

const xTask = new XtrfModule(
    "Task",
    "/faces/task/",
    `${mainContainerId}:taskMainTabPanel`,
    ["Edit", "Cancel"],
    ["Save", "Cancel"],
    ["Save", "Cancel"]
)

const xXtrfMacro = new XtrfModule(
    "XTRF Macro",
    "/faces/macro/",
    `${mainContainerId}:mainPanel`,
    ["Edit", "Exit"],
    ["Save", "Cancel"],
    ["Save", "Save and Exit", "Cancel", "Exit"]
)

const xtrfModules = [
    xClient,
    xClientInvoice,
    xContact,
    xCustomColumn,
    xDocumentTemplate,
    xJob,
    xNumberingScheme,
    xProject,
    xProvider,
    xProviderInvoice,
    xQuote,
    xSmartConnector,
    xTask,
    xXtrfMacro
]
