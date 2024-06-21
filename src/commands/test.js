export default [{
  tag: "example",
  name: "test",
  command: ["test","tes"],
  code: async({ client, m, MessageCollector }) => {
    m.reply("Responder con cualquier mensaje!");
    
    // init MessageCollector
    const col = new MessageCollector(m, {
      timeout: 60000
    });
    
    // call MessageCollector
    col.on("collect", async(data) => {
      m.reply(`${JSON.stringify(data, null, 2)}`);
      col.exit();
    })
    
    col.on("end", () => {
      m.reply("Recopilador de mensajes finalizado!")
    })
  }
}]
