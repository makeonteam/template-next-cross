import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.makeon.mobile",
  appName: "makeon-mobile",
  webDir: "../out",
  plugins: {
    StatusBar: {
      overlaysWebView: true, // edge to edge under API 35
    },
  },
};

export default config;
