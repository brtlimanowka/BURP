// console.log(`[BURP]: Content Script class.js loaded`);

class XtrfModule {
    constructor(name, url, mainFrame, buttonsDisplayMode, buttonsCreateMode, buttonsEditMode) {
        this.name = name;
        this.url = url;
        this.mainFrame = mainFrame;
        this.buttonsDisplayMode = buttonsDisplayMode;
        this.buttonsCreateMode = buttonsCreateMode;
        this.buttonsEditMode = buttonsEditMode;
    }
}

const xClient = new XtrfModule(
    "Client",
    "/faces/customer/",
    "customerForm",
    ["Edit", "Cancel", "Add Quote", "Add Project"],
    ["Continue", "Cancel"],
    ["Save", "Cancel", "Add Quote", "Add Project", "Erase Personal Data"]
);

const xClientInvoice = new XtrfModule(
    "Client Invoice",
    "/faces/customerInvoice/",
    "j_id2:customerInvoiceTabPanel",
    ["Edit", "Back"],
    [""],
    ["Save", "Cancel", "Back"]
);

const xContact = new XtrfModule(
    "Contact",
    "/faces/providerPerson/",
    "j_id2:mainPartnerPersonTabPanel",
    ["Edit", "Exit"],
    [""],
    ["Save", "Save and Exit", "Cancel", "Exit", "Erase Personal Data"]
);
    
const xCustomColumn = new XtrfModule(
    "Custom Column",
    "/faces/virtualCustomizableColumn/",
    "j_id2:mainPanel",
    ["Edit", "Exit"],
    ["Save", "Cancel"],
    ["Save", "Save and Exit", "Cancel", "Exit"]
);

const xDocumentTemplate = new XtrfModule(
    "Document Template",
    "/faces/reportTemplates/",
    "j_id2:j_idt49",
    ["Edit", "Exit"],
    ["Save", "Cancel"],
    ["Save", "Save and Exit", "Cancel", "Exit"]
);

const xJob = new XtrfModule(
    "Job",
    "/faces/activity/",
    "j_id2:activityMain",
    ["Edit", "Cancel", "Back to Task"],
    ["Save", "Cancel", "Back to Task"],
    ["Save", "Cancel", "Back to Task"]
);

const xNumberingScheme = new XtrfModule(
    "Numbering Scheme",
    "/faces/numberingSchema/",
    "j_id2:mainPanel",
    ["Edit", "Exit", "Test"],
    ["Save", "Cancel"],
    ["Save", "Save and Exit", "Cancel", "Exit", "Test", "Show Values", "Restore Defaults"]
);

const xProject = new XtrfModule(
    "Project",
    "/faces/project/",
    "j_id2:mainTabPanel",
    ["Edit", "Show Summary Page", "Cancel"],
    ["Save", "Cancel"],
    ["Save", "Show Summary Page", "Cancel"]
);

const xProvider = new XtrfModule(
    "Provider",
    "/faces/provider/",
    "providerForm",
    ["Edit", "Cancel"],
    ["Continue", "Cancel"],
    ["Save", "Cancel", "Erase Personal Data"]
);

const xProviderInvoice = new XtrfModule(
    "Provider Invoice",
    "/faces/providerInvoice/",
    "j_id2:providerInvoiceTabPanel",
    ["Edit", "Back"],
    [""],
    ["Save", "Cancel", "Back"]
);

const xQuote = new XtrfModule(
    "Quote",
    "/faces/quote/",
    "j_id2:mainTabPanel",
    ["Edit", "Cancel"],
    ["Save", "Cancel"],
    ["Save", "Cancel", "Convert into Project", "Mark as Rejected"]
);

const xSmartConnector = new XtrfModule(
    "Smart Connector",
    "/faces/smartConnector/",
    "j_id2:smartConnectorsTabPanel",
    ["Edit", "Exit"],
    ["Save", "Cancel"],
    ["Save", "Save and Exit", "Cancel", "Exit", "Test Connector"]
);

const xTask = new XtrfModule(
    "Task",
    "/faces/task/",
    "j_id2:taskMainTabPanel",
    ["Edit", "Cancel"],
    ["Save", "Cancel"],
    ["Save", "Cancel"]
);

const xXtrfMacro = new XtrfModule(
    "XTRF Macro",
    "/faces/macro/",
    "j_id2:mainPanel",
    ["Edit", "Exit"],
    ["Save", "Cancel"],
    ["Save", "Save and Exit", "Cancel", "Exit"]
);


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
];
