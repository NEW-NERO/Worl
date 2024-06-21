export default [{
  name: "listen",
  command: ["listen"],
  code: async({ client, m, MessageCollector }) => {
    m.reply("Responder con cualquier mensaje!");
    
    // init MessageCollector
    const col = new MessageCollector(m, {
      timeout: 60000
    });
    
    // call MessageCollector
    col.on("collect", async(data) => {
      m.reply(`${JSON.stringify(data, null, 2)}`);
      col.collected();
    })
    
    col.on("end", ({ status }) => {
      if(status === "collected") return;
      m.reply("Recopilador de mensajes finalizado!")
    })
  }
}]
