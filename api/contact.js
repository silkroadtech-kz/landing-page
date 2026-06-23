// Vercel serverless function: forwards contact-form submissions to Telegram.
// Requires env vars TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID (set in Vercel dashboard).

const LABELS = {
	first_name: "Имя",
	last_name: "Фамилия",
	company: "Компания / имя",
	about: "Чем занимаетесь",
	contact: "Телефон / Telegram",
	message: "Сообщение",
};

function escapeHtml(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

module.exports = async (req, res) => {
	if (req.method !== "POST") {
		res.status(405).json({ error: "method_not_allowed" });
		return;
	}

	const token = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;
	if (!token || !chatId) {
		res.status(500).json({ error: "not_configured" });
		return;
	}

	const body = req.body && typeof req.body === "object" ? req.body : {};
	const subject = body._subject || "Новая заявка с сайта";

	const lines = Object.keys(body)
		.filter((key) => !key.startsWith("_") && String(body[key]).trim() !== "")
		.map((key) => `<b>${escapeHtml(LABELS[key] || key)}:</b> ${escapeHtml(body[key])}`);

	if (lines.length === 0) {
		res.status(400).json({ error: "empty" });
		return;
	}

	const text = `🟢 <b>${escapeHtml(subject)}</b>\n\n${lines.join("\n")}`;

	try {
		const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				chat_id: chatId,
				text,
				parse_mode: "HTML",
				disable_web_page_preview: true,
			}),
		});

		if (!tg.ok) {
			const detail = await tg.text();
			res.status(502).json({ error: "telegram_failed", detail });
			return;
		}

		res.status(200).json({ ok: true });
	} catch (err) {
		res.status(502).json({ error: "telegram_unreachable" });
	}
};
