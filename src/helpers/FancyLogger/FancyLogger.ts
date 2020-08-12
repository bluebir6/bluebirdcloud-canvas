// BluebirdTechnology FancyLogger
import VueType from "Vue";

declare global {
  interface Window {
    logger: any;
  }
}

window.logger = {
  logOut: {
    appInfo: null,
    startLogTime: Date.now(),
    log: []
  },
  log: function(
    logType: string,
    logText: string,
    logAdditionalInfo: Array<object>,
    code: string,
    fileID: string
  ) {
    window.logger.logOut.log.push({
      type: logType,
      info: logText,
      msg: logAdditionalInfo,
      code: code,
      file: fileID,
      time: Date.now()
    });
  }
};
export default {
  install: function(Vue: typeof VueType, options?: any) {
    console.log(
      "%cStop!\n%cThis is a browser feature intended for developers. Using this console, attackers may be able to access your account or steal your data.\n%cDo not enter or paste code that you don't understand.",
      `font-family: helvetica; font-size: 50px; font-weight: bold; color: red; -webkit-text-stroke: 1px black;`,
      `font-family: helvetica; font-size: 20px;`,
      `font-family: helvetica; font-size: 20px; font-weight: bold; color: red;`
    );
    const appInfo = {
      displayName: process.env.APPLICATION_DISPLAY_NAME,
      packageName: process.env.APPLICATION_NAME,
      version: process.env.APPLICATION_VERSION,
      runAs: process.env.NODE_ENV
    };
    Vue.prototype.$appInfo = appInfo;
    console.groupCollapsed(
      `◀ Click to expand\n%cBluebirdTechnology LLC - ${appInfo.displayName} (${appInfo.packageName})\n%cv${appInfo.version} as ${appInfo.runAs}`,
      "font-size: 20px; color: #007BFC;",
      "font-size: 15px;"
    );
    console.log(
      "Warning: these are advanced options intended only for developers. Proceed only if you understand what you're doing."
    );
    console.log("All code below is available to window scope.");
    console.groupCollapsed(
      "Logging Options %c BETA %c",
      "background:#F77D05 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      ""
    );
    console.groupCollapsed(
      "window.logger                         Logger Object"
    );
    console.log("The main logger object.");
    console.groupEnd();
    console.groupCollapsed(
      "window.logger.logToConsole(scope)     Log scope to console."
    );
    console.log("Scope can be any of the following:");
    console.log("1: Everything - Warnings, errors, debug logs - SLOW");
    console.log("2: Warnings and errors - Warnings, errors    - FAST");
    console.log("3: Errors - Errors                           - FAST");
    console.log("4: Nothing - THIS IS THE DEFAULT             - FAST");
    console.groupEnd();
    console.groupCollapsed(
      "window.logger.showLog()               Outputs entire log to console once."
    );
    console.log("Outputs formatted log to console.");
    console.groupEnd();
    console.groupCollapsed(
      "window.logger.logOut                     The Log object"
    );
    console.log("The log object");
    console.groupEnd();
    console.groupEnd();
    console.groupEnd();
    window.logger.appInfo = appInfo;
  }
};
