import fetch from 'node-fetch'
import axios from 'axios'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdlv2(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', 
`              *ã ð¹ á´ Éª á´ á´ á´ á´ ã*
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
ââââââââââ âã¤âã¤ ââã¤ â·ã¤â» ââââââââââ
*Nickname:* ${nickname}
*Description:* ${description}
_Â©WH-MODS-BOT-V1ð­_
`.trim(), m)
}
handler.help = ['ttkbocilteam2'].map(v => v + ' <url>')

handler.command = /^(ttkbocilteam2)$/i
export default handler
