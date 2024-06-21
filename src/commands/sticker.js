export default [{
  name: "sticker",
  command: ["sticker","stiker","s","wm","stickerwm","stikerwm","swm"],
  code: async({ client, m, quoted, mimetype, text }) => {
    try {
      if(!/image|video|webp/i.test(mimetype)) return m.reply("Responde a la imagen o vídeo que quieres hacer un stickers");
      const buffer = await quoted.download();
      let exif;
      if(text) {
        const [name, author] = text.split("|");
        exif = { packName: name ? name : "", packPublish: author ? author : "" };
      } else {
        exif = { packName: "Created by", packPublish: "@ Shizu-MD" };
      }
      m.reply(buffer, { asSticker: true, ...exif });
    } catch (e) {
      m.reply("Se produjo un error en el comando.!");
      console.log(e)
    }
  }
}]
