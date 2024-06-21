export default [{
  tag: "example",
  name: "News Letter Message",
  command: ["news","nl","saluran","channel","newsletter"],
  code: async({ client, m, quoted, remote, dirname, path, fs, MessageBuilder }) => {
    const __dirname = dirname(import.meta.url);
    try {
      const temp = new MessageBuilder()
        .setText("Hello world!")
        .setThumbnailMediaUrl("https://github.com/")
        .setThumbnailTitle("Shizu Bot Base | WhatsApp Bot")
        .setThumbnailBody("Copyright © Shizu 2024 - All Right Reserved")
        .setThumbnailLarge()
        .setThumbnailImage("https://telegra.ph/file/54cbfb6c7f6b2d69f85cd.jpg")
        .setThumbnailUrl("https://github.com/")
        .setForwardingScore(9999)
        .setForwarded(true)
        .setNewsletterJid("120363183632297680@newsletter")
        .setNewsletterName("Shizu Group™")
        .setNewsletterServerMessageId(125)
        .build()
      let data = await client.generateMessage(remote, temp, m.key);
      console.log(JSON.stringify(data, null, 2))
      client.relayMessage(remote, data.message, { messageId: data.key.id });
      client.relayMessage(remote, data.message, { messageId: data.key.id });
    } catch (e) {
      throw new Error(e)
    }
  }
}]
