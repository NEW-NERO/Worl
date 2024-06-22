export default [{
async function createStickerFromImage(imageBuffer) {
    try {
        // Redimensiona la imagen a un tamaño adecuado para stickers
        const resizedImageBuffer = await sharp(imageBuffer)
            .resize(512, 512) // Tamaño en píxeles
            .toBuffer();

        // Aplica otros efectos o ajustes según tus necesidades
        // ...

        // Devuelve el buffer del sticker resultante
        return resizedImageBuffer;
    } catch (error) {
        console.error('Error al crear el sticker:', error);
        throw new Error('No se pudo crear el sticker.');
    }
}

// Luego, en tu evento de mensaje (por ejemplo, cuando se recibe una imagen):
// const stickerBuffer = await createStickerFromImage(imageBuffer);
// await client.sendMessage(message.from, stickerBuffer, { asSticker: true });
