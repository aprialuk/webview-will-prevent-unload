
 
 * Electron version: 1.8.4
 * Operating system: Windows 10
  
 if a guest page loaded in webview has "beforeunload" event handler registered with a return value,
 then the registered "will-prevent-unload" event on webview's webContents does not work as expected.
 
 event.preventDefault() should ignore the "beforeunload" event and page should be unloaded, but that
 does not happen.
 
 Instead if "beforeunload" returns non void value the page will not get unloaded at all.
 
 
 