import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { app, BrowserWindow } from "electron";
import electronServe from "electron-serve";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const loadURL = electronServe({ directory: "app" });
const isDev = process.env.NODE_ENV === "development";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    title: "Next Cross",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:4001");
    mainWindow.webContents.openDevTools();
  } else {
    loadURL(mainWindow);
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
