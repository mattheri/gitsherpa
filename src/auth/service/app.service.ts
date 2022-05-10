import { Config } from "auth/auth";

import { getApps, getApp, initializeApp, FirebaseApp } from "firebase/app";

class App {
  app: FirebaseApp = this.init();

  private init() {
    const configs = new Config();

    return getApps().length ? getApp() : initializeApp(configs);
  }
}

export default new App().app;
