/**
 * Jangan Di Hapus!!
 * 
 * Buatan Zenss
 * Github: https://github.com/RaaaGH
 * 
 *
 *
 * Gatau Males Pengen Beli Truk
 *
 *
 */

const delay = time => new Promise(res => setTimeout(res, time))
let handler = m => m
handler.all = async function (m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	//console.log({ text: m.text })
	//if (mf && (m.text === 'Balas Pesan' || m.text === '') && m.quoted?.mtype == 'buttonsMessage') return m.reply("Silahkan kirim pesan balasan kamu.")
	    if ((m.mtype === 'buttonsMessage' || m.text.startsWith('Balas Pesan')) && !m.isBaileys && !m.isGroup) return m.reply("Silahkan kirim pesan balasan kamu.")
	let txt = `Hai kak @${mf.dari.split('@')[0]}, kamu menerima balasan nih.\n\nPesan yang kamu kirim sebelumnya:\n${mf.pesan}\n\nPesan balasannya:\n${m.text}\n`.trim();
	await this.reply(mf.dari, txt, null).then(() => {
		m.reply('Berhasil mengirim balasan.')
		delay(2000)
		delete this.menfess[mf.id]
		return !0
		})
	return !0
}

module.exports = handler