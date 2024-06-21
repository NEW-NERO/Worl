import colors from "colors";
import moment from "moment-timezone";
import { fileURLToPath } from 'url';
import { format } from "util";

// main configs
global.botNumber = "595972980943";
global.bot = {
  public: true,
  antiCall: true,
  owner: ["595972980943", "595972980943", "595972980943"],
  sessionName: "session",
  prefix: /^[.]/i
}
Object.defineProperty(global, 'clock', {
  get: function() {
    return moment(Date.now()).tz("Asia/Jakarta").format("DD-MM-YY HH:mm:ss");
  },
  enumerable: true,
  configurable: true
});

// beautify logs
colors.setTheme({
   main: ['brightBlue', 'bold'],
   plain: "brightGrey",
   info: "brightGreen",
   warn: "brightYellow",
   danger: "brightRed"
});

// sticker exif
global.exif = {
  packId: "",
  packName: `s.id/amirabot`,
  packPublish: "© SHIRO-MD",
  packEmail: "",
  packWebsite: "https://github.com/",
  androidApp: "https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro",
  iOSApp: "https://apps.apple.com/id/app/muslim-pro-al-quran-adzan/id388389451?|=id",
  emojis: [],
  isAvatar: 0,
}

// alert messages
global.alertMessage = {
  owner: "Solo el propietario puede acceder a las funciones",
  group: "Funciones solo accesibles en grupo!",
  private: "Funciones solo accesibles en chat privado!",
  admin: "El bot no es administrador, no puedes usar las funciones
  botAdmin: "El bot no es administrador, no puedes usar las funciones!",
  bot: "Funciones a las que solo puede acceder el bot",
  media: "Reply media...",
  query: "No Query?",
  error: "Parece haber encontrado un error inesperado.",
  quoted: "Reply message...",
  wait: "Espera un minuto HIHIHI...",
  urlInvalid: "Url Invalid!",
  premium: "¡Características exclusivas premium!"
}

global.logs = {
  error: (path, logs) => {
    if(!logs) return;
    console.log(global.clock.info, "[ERROR]".danger, `location: ${filename(path)}`.warn,
    "\n" + format(logs).danger);
  },
  warn: (path, logs) => {
    if(!logs) return;
    console.log(global.clock.info, "[WARN]".warn, `location: ${filename(path)}`.warn,
    "\n" + format(logs).warn);
  },
  commandError: (path, m = {}, logs) => {
    if(!logs) return;
    console.log(global.clock.info, "[COMMAND ERROR]".danger, `location: ${filename(path)}`.warn,
    "\n" + "Sender: ".info + m?.sender,
    "\n" + "Command: ".info + m?.command,
    "\n" + "Body: ".info + m?.body,
    "\n" + "Logs: ".info + format(logs).danger);
  },

}
