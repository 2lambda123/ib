/**
 * This App will print the user info of the logged user.
 */

import { IBApiNextError } from "../api-next";
import { IBApiNextApp } from "./common/ib-api-next-app";

/////////////////////////////////////////////////////////////////////////////////
// The help text.                                                              //
/////////////////////////////////////////////////////////////////////////////////

const DESCRIPTION_TEXT = "Prints the user info of the logged user.";
const USAGE_TEXT = "Usage: user-info.js <options>";
const OPTION_ARGUMENTS: [string, string][] = [];
const EXAMPLE_TEXT = "user-info.js -port=4002";

//////////////////////////////////////////////////////////////////////////////
// The App code                                                             //
//////////////////////////////////////////////////////////////////////////////

class App extends IBApiNextApp {
  constructor() {
    super(DESCRIPTION_TEXT, USAGE_TEXT, OPTION_ARGUMENTS, EXAMPLE_TEXT);
  }

  /**
   * Start the app.
   */
  start(): void {
    super.start();

    this.api
      .getUserInfo()
      .then((whiteBrandingId) => {
        this.printText(`User Info. WhiteBrandingId: '${whiteBrandingId}'`);
        this.stop();
      })
      .catch((err: IBApiNextError) => {
        this.error(`getUserInfo failed with '${err.error.message}'`);
      });
  }

  /**
   * Stop the app with success code.
   */
  stop() {
    this.exit();
  }
}

// run the app

new App().start();
