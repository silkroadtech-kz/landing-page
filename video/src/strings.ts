export type Lang = "ru" | "en";

export type StepCopy = {
	num: string;
	title: string;
	desc: string;
	tag: string;
};

export type Copy = {
	eyebrow: string;
	title: string;
	subtitle: string;
	steps: StepCopy[];
	statValue: number;
	statSuffix: string;
	statLabel: string;
	cta: string;
	brand: string;
};

export const copy: Record<Lang, Copy> = {
	ru: {
		eyebrow: "SILK ROAD TECH",
		title: "От задачи к результату",
		subtitle: "Как мы работаем",
		steps: [
			{
				num: "01",
				title: "Технический аудит",
				desc: "Глубокое погружение в вашу IT-архитектуру. Подписываем NDA до начала работ.",
				tag: "NDA с первого дня",
			},
			{
				num: "02",
				title: "MVP / Рабочее ядро",
				desc: "Быстро запускаем рабочую версию продукта. Итерации каждые 2 недели с демо и обратной связью.",
				tag: "Демо каждые 2 недели",
			},
			{
				num: "03",
				title: "Масштабирование",
				desc: "Оптимизируем производительность, добавляем новые модули и масштабируем решение под рост бизнеса.",
				tag: "Растём вместе с вами",
			},
		],
		statValue: 40,
		statSuffix: "+",
		statLabel: "Завершённых проектов",
		cta: "Обсудить проект",
		brand: "Silk Road Tech",
	},
	en: {
		eyebrow: "SILK ROAD TECH",
		title: "From task to result",
		subtitle: "How we work",
		steps: [
			{
				num: "01",
				title: "Technical Audit",
				desc: "Deep dive into your IT architecture. We sign an NDA before starting work.",
				tag: "NDA from day one",
			},
			{
				num: "02",
				title: "MVP / Working Core",
				desc: "We rapidly launch a working product version. Iterations every 2 weeks with demos and feedback.",
				tag: "Demo every 2 weeks",
			},
			{
				num: "03",
				title: "Scaling",
				desc: "We optimize performance, add new modules, and scale the solution for business growth.",
				tag: "Growing with you",
			},
		],
		statValue: 40,
		statSuffix: "+",
		statLabel: "Completed projects",
		cta: "Discuss project",
		brand: "Silk Road Tech",
	},
};
