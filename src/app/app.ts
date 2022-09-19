// Registering Syncfusion license key
//import { registerLicense } from '@syncfusion/ej2-base';
//base.registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1hUH5ccXZUQ2lVV0I=');

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
//import { TitleBar } from './title-bar';
//import { data } from '@syncfusion/ej2';

/*import * as EJ2_LOCALE                      from "../../node_modules/@syncfusion/ej2-locale/src/es.json";
import { setCulture }                       from '@syncfusion/ej2/base';
import { L10n }                             from '@syncfusion/ej2/base';
//import { base } from '@syncfusion/ej2';


L10n.load({ es: EJ2_LOCALE.es });
setCulture("es");
*/
/*
L10n.load({
    
});*/

let hostUrl: string = 'https://localhost:7282/';

DocumentEditorContainer.Inject(Toolbar);
let documenteditor: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: 'vertical', serviceUrl: 'https://localhost:7282/' });
documenteditor.appendTo('#DocumentEditor');
/*
let titleBar: TitleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), documenteditor.documentEditor, true);
documenteditor.documentEditor.open(JSON.stringify((<any>data)));
documenteditor.documentEditor.documentName = 'Primer documento';
titleBar.updateDocumentTitle();

documenteditor.documentChange = (): void => {
    titleBar.updateDocumentTitle();
    documenteditor.documentEditor.focusIn();
};

/*let titleBar: TitleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), container.documentEditor, true);
container.documentEditor.open(JSON.stringify((<any>data)));
container.documentEditor.documentName = 'Getting Started';
titleBar.updateDocumentTitle();

documenteditor.documentChange = (): void => {
    titleBar.updateDocumentTitle();
    documenteditor.documentEditor.focusIn();*/

/*
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

// Initialize Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, height: '370px', serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' });

//Enable all built in modules.
documenteditor.enableAllModules();

// Render the Document Editor component.
documenteditor.appendTo('#DocumentEditor');*/