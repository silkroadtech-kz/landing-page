(function () {
	var LANG_KEY = "srt_lang";

	var translations = {
		/* ── Navigation ── */
		"nav.services": {
			ru: "Услуги",
			en: "Services",
		},
		"nav.process": {
			ru: "Процесс",
			en: "Process",
		},
		"nav.cases": {
			ru: "Кейсы",
			en: "Cases",
		},
		"nav.products": {
			ru: "Продукты",
			en: "Products",
		},
		"nav.about": {
			ru: "О нас",
			en: "About",
		},
		"nav.partners": {
			ru: "Партнёры",
			en: "Partners",
		},
		"nav.contacts": {
			ru: "Контакты",
			en: "Contacts",
		},
		"nav.cta": {
			ru: "Обсудить проект",
			en: "Discuss project",
		},
		"nav.faq": {
			ru: "FAQ",
			en: "FAQ",
		},
		/* ── Hero ── */
		"hero.title": {
			ru: '<span class="text-[#9ac763]">Делаем продукты</span> под ваши бизнес процессы',
			en: '<span class="text-[#9ac763]">We build products</span> around your business processes',
		},
		"hero.desc": {
			ru: "От идеи и архитектуры до запуска и роста продукта.",
			en: "From idea and architecture to launch and product growth.",
		},
		"hero.cta": {
			ru: "Обсудить проект",
			en: "Discuss project",
		},
		"hero.cases": {
			ru: "Смотреть кейсы",
			en: "View case studies",
		},
		"hero.partners": {
			ru: "Наши партнёры",
			en: "Our partners",
		},
		"hero.stat.value": {
			ru: "15+",
			en: "15+",
		},
		"hero.stat.label": {
			ru: "инженеров, продуктологов, дизайнеров с опытом в международных компаниях",
			en: "engineers, product managers, and designers with experience at international companies",
		},

		/* ── Own products ── */
		"products.title": {
			ru: "Продукт, который мы создали для себя — и продолжаем развивать с любовью.",
			en: "A product we built for ourselves — and continue to grow with care.",
		},
		"products.description": {
			ru: "ContentFlow: планируйте публикации, следите за ростом и создавайте изображения и видео — всё в одном окне. Для нас это не завершённый кейс, а живая платформа: мы ежедневно пользуемся ею, разговариваем с пользователями и улучшаем каждую деталь.",
			en: "ContentFlow turns ideas and voice notes into a consistent content system. To us, it is not a finished case study but a living platform: we use it daily, talk to users, and improve every detail.",
		},
		"products.link": { ru: "Открыть ContentFlow", en: "Open ContentFlow" },
		"hero.stat.meta": {
			ru: "Средний опыт: 6+ лет",
			en: "Average experience: 6+ years",
		},
		"hero.tagline": {
			ru: "Результаты говорят сами за себя",
			en: "Results speak for themselves",
		},
		"hero.growth.title": {
			ru: 'Ваш бизнес растёт —<br /><span class="text-gradient-green-2">технологии не отстают</span>',
			en: 'Your business grows —<br /><span class="text-gradient-green-2">technology keeps up</span>',
		},

		/* ── How we work ── */
		"how.title": {
			ru: "От задачи к результату",
			en: "From task to result",
		},
		"how.desc": {
			ru: "Мы реализуем полный цикл технологической трансформации бизнеса: от проектирования сложных программных систем и глубокой аналитики данных до бесшовной интеграции оборудования и умных ИИ-ассистентов для автоматизации процессов.",
			en: "We implement a full cycle of technological transformation for your business: from designing complex software systems and deep data analytics to seamless hardware integration and smart AI assistants for process automation.",
		},
		"how.projects": {
			ru: "Завершённых проектов",
			en: "Completed projects",
		},
		"how.s1.title": { ru: "Обсуждаем задачу", en: "We discuss the task" },
		"how.s1.desc": {
			ru: "Разбираем цели, процессы и ограничения. Подписываем NDA до начала работ.",
			en: "We dig into your goals, processes, and constraints. The NDA is signed before any work begins.",
		},
		"how.s2.title": { ru: "Оценка и план", en: "Estimate and plan" },
		"how.s2.desc": {
			ru: "Фиксируем объём работ, сроки и бюджет. Стартуем в течение недели после договора.",
			en: "We agree on scope, timeline, and budget. Work starts within a week of signing.",
		},
		"how.s3.title": { ru: "Разработка", en: "Development" },
		"how.s3.desc": {
			ru: "Показываем рабочее демо каждые две недели — вы видите прогресс и влияете на результат.",
			en: "A working demo every two weeks, so you see progress and can steer the result.",
		},
		"how.s4.title": { ru: "Запуск и поддержка", en: "Launch and support" },
		"how.s4.desc": {
			ru: "Выводим продукт в работу, сопровождаем по SLA и развиваем дальше.",
			en: "We launch the product, support it under an SLA, and keep developing it.",
		},

		/* ── Services ── */
		"services.title": {
			ru: "Что мы предлагаем",
			en: "What we offer",
		},
		"services.lead": {
			ru: '<span class="font-bold text-[#9ac763]">Четыре ключевых направления</span> — гибкий подход: выполняем комплексную цифровую трансформацию или решаем конкретные задачи вашего бизнеса.',
			en: '<span class="font-bold text-[#9ac763]">Four key service areas</span> — flexible approach: we deliver full-scale digital transformation or solve specific challenges for your business.',
		},
		"s1.title": {
			ru: "Сайты и приложения",
			en: "Websites and applications",
		},
		"s1.desc": {
			ru: "Проектируем и разрабатываем цифровые продукты под бизнес-задачу — от первого экрана до стабильного запуска.",
			en: "We design and build digital products around a business goal — from the first screen to a stable launch.",
		},
		"s1.i1": { ru: "Корпоративные сайты и лендинги", en: "Corporate websites and landing pages" },
		"s1.i2": { ru: "Веб-сервисы и личные кабинеты", en: "Web services and customer portals" },
		"s1.i3": { ru: "Мобильные приложения iOS и Android", en: "iOS and Android applications" },
		"s1.i4": { ru: "ERP, CRM и внутренние системы", en: "ERP, CRM, and internal systems" },
		"s1.i5": { ru: "API-интеграции и развитие legacy", en: "API integrations and legacy modernization" },
		"s1.trust": { ru: "Начинаем с архитектуры и прототипа, показываем демо каждые две недели, тестируем и остаёмся с продуктом после запуска.", en: "We start with architecture and a prototype, demo every two weeks, test thoroughly, and stay with the product after launch." },
		"s2.title": {
			ru: "AI и автоматизация",
			en: "AI and automation",
		},
		"s2.desc": {
			ru: "Встраиваем AI в процессы, где он экономит время команды, ускоряет ответы и снижает объём ручной работы.",
			en: "We bring AI into workflows where it saves team time, speeds up responses, and reduces manual work.",
		},
		"s2.i1": { ru: "AI-ассистенты для продаж и поддержки", en: "AI assistants for sales and support" },
		"s2.i2": { ru: "Поиск по внутренней базе знаний (RAG)", en: "Internal knowledge search (RAG)" },
		"s2.i3": { ru: "Обработка документов и обращений", en: "Document and request processing" },
		"s2.i4": { ru: "Генерация контента и отчётов", en: "Content and report generation" },
		"s2.i5": { ru: "Интеграции с CRM, ERP и мессенджерами", en: "CRM, ERP, and messenger integrations" },
		"s2.trust": { ru: "Сначала проверяем ценность на небольшом пилоте. Настраиваем права доступа, журнал действий и контроль человека над критичными решениями.", en: "We validate value with a focused pilot first, then configure access controls, audit logs, and human oversight for critical decisions." },
		"s3.title": {
			ru: "Аналитика и дашборды",
			en: "Analytics and dashboards",
		},
		"s3.desc": {
			ru: "Собираем разрозненные данные в понятную систему, чтобы руководители видели бизнес целиком и принимали решения быстрее.",
			en: "We turn fragmented data into a clear system so leaders can see the whole business and make decisions faster.",
		},
		"s3.i1": { ru: "Дашборды для руководителей", en: "Executive dashboards" },
		"s3.i2": { ru: "Продажи, маркетинг и продуктовые метрики", en: "Sales, marketing, and product metrics" },
		"s3.i3": { ru: "ETL-процессы и хранилища данных", en: "ETL pipelines and data warehouses" },
		"s3.i4": { ru: "Автоматические отчёты и алерты", en: "Automated reports and alerts" },
		"s3.i5": { ru: "Интеграции Power BI, Metabase и Looker", en: "Power BI, Metabase, and Looker integrations" },
		"s3.trust": { ru: "Сверяем цифры с первоисточниками, фиксируем единые определения метрик и разграничиваем доступ. Дашборд показывает правду, а не просто красивый график.", en: "We reconcile numbers with source systems, define metrics consistently, and control access. The dashboard shows the truth, not just attractive charts." },
		"s4.title": {
			ru: "SEO и GEO",
			en: "SEO and GEO",
		},
		"s4.desc": {
			ru: "Помогаем продукту быть понятным поисковым системам, AI-ассистентам и людям — технически, структурно и содержательно.",
			en: "We make products understandable to search engines, AI assistants, and people — technically, structurally, and through content.",
		},
		"s4.i1": { ru: "Технический SEO-аудит", en: "Technical SEO audit" },
		"s4.i2": { ru: "Семантика и структура страниц", en: "Search semantics and page structure" },
		"s4.i3": { ru: "Контент под поисковый спрос", en: "Content aligned with search demand" },
		"s4.i4": { ru: "GEO для ответов ChatGPT и других AI-систем", en: "GEO for ChatGPT and other AI answer engines" },
		"s4.i5": { ru: "Аналитика позиций, трафика и конверсий", en: "Rankings, traffic, and conversion analytics" },
		"s4.trust": { ru: "Начинаем с аудита и приоритетного плана. Показываем исходные показатели, внесённые изменения и измеримый результат — без обещаний «первого места за неделю».", en: "We begin with an audit and prioritized roadmap, then show the baseline, every change, and measurable outcomes — without promising first place in a week." },
		"services.trust": { ru: "Почему нам доверяют", en: "Why clients trust us" },

		/* ── Landing page (/landing) ── */
		"lpg.eyebrow": {
			ru: "Лендинги · сайты · под ключ",
			en: "Landing pages · websites · turnkey",
		},
		"lpg.h1": {
			ru: "Сайт, который находят первым",
			en: "A site found first in search",
		},
		"lpg.sub": {
			ru: "Проектируем и запускаем продающие лендинги и корпоративные сайты под ваши задачи: дизайн, тексты, аналитика и SEO. Под ключ, запуск за 7 дней.",
			en: "We design and launch high-converting landing pages and corporate websites for your goals: design, copy, analytics, and SEO. Turnkey, live in 7 days.",
		},
		"lpg.cta.audit": {
			ru: "Получить бесплатный аудит",
			en: "Get a free audit",
		},
		"lpg.cta.wa": { ru: "WhatsApp", en: "WhatsApp" },
		"lpg.badge": {
			ru: "Под ключ · 7 дней — от 250 000 ₸",
			en: "Turnkey · 7 days — from 250,000 ₸",
		},
		"lpg.inc.title": { ru: "Что входит", en: "What's included" },
		"lpg.inc.1": {
			ru: "Структура и тексты под конверсию",
			en: "Conversion-focused structure and copy",
		},
		"lpg.inc.2": {
			ru: "Адаптивный дизайн под все устройства",
			en: "Responsive design for every device",
		},
		"lpg.inc.3": {
			ru: "Форма заявки → Telegram и почта",
			en: "Lead form → Telegram and email",
		},
		"lpg.inc.4": {
			ru: "Домен и корпоративная почта",
			en: "Domain and corporate email",
		},
		"lpg.inc.5": {
			ru: "Аналитика: Метрика и Google Analytics",
			en: "Analytics: Metrica and Google Analytics",
		},
		"lpg.inc.6": {
			ru: "SEO + GEO — Google, Яндекс, AI-поиск",
			en: "SEO + GEO — Google, Yandex, AI search",
		},
		"lpg.proc.eyebrow": { ru: "Как всё пройдёт", en: "How it goes" },
		"lpg.proc.title": {
			ru: "От заявки до запуска — 7 дней",
			en: "From request to launch — 7 days",
		},
		"lpg.proc.1.t": { ru: "Бриф", en: "Brief" },
		"lpg.proc.1.d": {
			ru: "Звонок 30 минут: что вы делаете, кто покупает, какие цели.",
			en: "A 30-minute call: what you do, who buys, what the goals are.",
		},
		"lpg.proc.1.day": { ru: "День 1", en: "Day 1" },
		"lpg.proc.2.t": { ru: "Макет", en: "Mockup" },
		"lpg.proc.2.d": {
			ru: "Показываем дизайн и структуру. Согласуем тексты и блоки.",
			en: "We show design and structure. We agree on copy and blocks.",
		},
		"lpg.proc.2.day": { ru: "Дни 2–4", en: "Days 2–4" },
		"lpg.proc.3.t": { ru: "Запуск", en: "Launch" },
		"lpg.proc.3.d": {
			ru: "Подключаем домен, почту, формы и аналитику. Сайт в сети — дальше поддержка.",
			en: "We connect domain, email, forms, and analytics. Site is live — then support.",
		},
		"lpg.proc.3.day": { ru: "Дни 5–7", en: "Days 5–7" },
		"lpg.port.eyebrow": { ru: "Нам доверяют", en: "Trusted by" },
		"lpg.port.title": {
			ru: "Мы уже сделали это",
			en: "We've already done this",
		},
		"lpg.port.link": { ru: "Открыть сайт →", en: "Open the site →" },
		"lpg.stat.1": { ru: "проектов запущено", en: "projects launched" },
		"lpg.stat.2": { ru: "до запуска", en: "to launch" },
		"lpg.stat.3": { ru: "резидент технопарка", en: "tech-park resident" },
		"lpg.faq.title": { ru: "Частые вопросы", en: "FAQ" },
		"lpg.faq.q1": {
			ru: "Сколько стоит разработка лендинга или сайта?",
			en: "How much does a landing page or site cost?",
		},
		"lpg.faq.a1": {
			ru: "Сайт под ключ — от 250 000 ₸. Точную цену назовём после короткого бесплатного аудита.",
			en: "A turnkey site starts from 250,000 ₸. We'll give an exact quote after a short free audit.",
		},
		"lpg.faq.q2": {
			ru: "А если у меня уже есть сайт?",
			en: "What if I already have a site?",
		},
		"lpg.faq.a2": {
			ru: "Посмотрим текущий и честно скажем: обновить или сделать заново. Часто новый сайт быстрее и дешевле.",
			en: "We'll review the current one and tell you honestly: update or rebuild. Often a new site is faster and cheaper.",
		},
		"lpg.faq.q3": {
			ru: "Как быстро вы запустите?",
			en: "How fast can you launch?",
		},
		"lpg.faq.a3": {
			ru: "Обычно 7 дней после согласования макета. Срочные проекты обсуждаемы.",
			en: "Usually 7 days after the mockup is approved. Rush projects are negotiable.",
		},
		"lpg.req.eyebrow": { ru: "Бесплатный аудит", en: "Free audit" },
		"lpg.req.title": {
			ru: "Получите бесплатный аудит сайта",
			en: "Get a free audit of your site",
		},
		"lpg.req.sub": {
			ru: "Оставьте ссылку на сайт или коротко опишите задачу — пришлём аудит и план.",
			en: "Leave a site link or briefly describe the task — we'll send an audit and a plan to get more leads.",
		},

		"lpg.req.submit": { ru: "Получить аудит", en: "Get the audit" },
		"lpg.req.ph.company": {
			ru: "Ваше имя или компания",
			en: "Your name or company",
		},
		"lpg.req.ph.about": {
			ru: "Ссылка на сайт или задача",
			en: "Site link or task",
		},
		"lpg.req.ph.contact": { ru: "Как с вами связаться", en: "Best contact" },

		/* ── SLC principle ── */
		"slc.title": {
			ru: "Работаем по принципу SLC",
			en: "We build by the SLC principle",
		},
		"slc.lead": {
			ru: "Без «сырого» MVP. Первая версия продукта простая, удобная и законченная: ею можно пользоваться с первого дня.",
			en: "No half-baked MVP. The first version of your product is simple, lovable, and complete, so people can use it from day one.",
		},
		"slc.s.title": { ru: "Простой", en: "Only what matters" },
		"slc.s.desc": {
			ru: "Запускаем самую маленькую версию, которая решает вашу задачу. Без функций, которые только откладывают релиз.",
			en: "We launch the smallest version that solves your problem, without features that only delay the release.",
		},
		"slc.l.title": { ru: "Удобный", en: "Built with care" },
		"slc.l.desc": {
			ru: "Продуктом приятно пользоваться с первого релиза: понятный интерфейс, быстрая работа, внимание к деталям.",
			en: "The product is pleasant to use from the first release: a clear interface, fast performance, attention to detail.",
		},
		"slc.c.title": { ru: "Законченный", en: "Ready to use" },
		"slc.c.desc": {
			ru: "Каждая версия — готовый инструмент, а не заготовка с пометкой «появится позже». Дальше развиваем его по реальным данным.",
			en: "Every version is a finished tool, not a placeholder marked “coming later”. From there we grow it based on real usage.",
		},

		/* ── Review ── */
		"review.quote": {
			ru: "«Они тщательно изучают нашу отрасль и целевую аудиторию, что позволяет создавать точечные кампании, эффективно достигающие клиентов. Их творческие идеи и современные методы помогли нам оставаться впереди конкурентов»",
			en: '"They thoroughly analyze our industry and target audience, allowing them to develop tailored campaigns that effectively reach and engage our customers. Their creative ideas and advanced methods have helped us stay ahead of the competition"',
		},
		"review.name": {
			ru: "Андрей",
			en: "Andrey",
		},
		/* ── FAQ ── */
		"faq.title": {
			ru: "Частые вопросы",
			en: "FAQs",
		},
		"faq.subtitle": {
			ru: "Ответы на вопросы, которые чаще всего задают перед первым звонком",
			en: "Answers to the questions most often asked before the first call",
		},
		"faq.ask": {
			ru: "Задать вопрос",
			en: "Ask a question",
		},
		"faq.tg": {
			ru: "Написать в Telegram",
			en: "Message on Telegram",
		},
		"faq.q1": {
			ru: "Как быстро вы начнёте работу?",
			en: "How quickly will you start?",
		},
		"faq.a1": {
			ru: "После подписания договора — в течение 1 недели. Первое рабочее демо покажем через 2 недели после старта.",
			en: "After signing the contract — within 1 week. We show the first working demo 2 weeks after kickoff.",
		},
		"faq.q2": {
			ru: "Сколько стоит разработка?",
			en: "How much does development cost?",
		},
		"faq.a2": {
			ru: "Стоимость зависит от объёма и сложности. Базовые проекты — от $5 000.",
			en: "Cost depends on scope and complexity. Basic projects start from $5,000.",
		},
		"faq.q3": {
			ru: "Вы работаете удалённо или только в Астане?",
			en: "Do you work remotely or only in Astana?",
		},
		"faq.a3": {
			ru: "Работаем удалённо по всему миру и очно в Астане.",
			en: "We work remotely worldwide and in-person in Astana.",
		},
		"faq.q4": {
			ru: "Вы оказываете поддержку после запуска?",
			en: "Do you provide support after launch?",
		},
		"faq.a4": {
			ru: "Да, предлагаем SLA-поддержку и дальнейшее развитие продукта.",
			en: "Yes, we offer SLA support and ongoing product development.",
		},
		"faq.q5": {
			ru: "Вы берёте небольшие проекты?",
			en: "Do you take small projects?",
		},
		"faq.a5": {
			ru: "Да, рассматриваем точечные задачи и MVP.",
			en: "Yes, we consider focused tasks and MVPs.",
		},

		/* ── Contact form ── */
		"contact.eyebrow": {
			ru: "Напишите нам",
			en: "Write to us",
		},
		"contact.title": {
			ru: "Хорошая работа начинается с хорошего отношения к клиенту.",
			en: "Good work begins with treating the client well.",
		},
		"contact.subtitle": {
			ru: "Наша главная задача — внимательно понять вас, честно предложить решение и ответить максимально быстро. Я лично читаю каждое обращение.",
			en: "Our main job is to understand you, offer an honest solution, and respond as quickly as possible. I personally read every message.",
		},
		"contact.promise": {
			ru: "«Для нас клиент — не заявка в CRM. Это человек, которому мы должны помочь и которому важно быстро ответить».",
			en: "“To us, a client is not a lead in a CRM. It is a person we are here to help — and respond to quickly.”",
		},
		"contact.direct": {
			ru: "Или напишите напрямую:",
			en: "Or message us directly:",
		},
		"contact.fname": {
			ru: "Имя",
			en: "First name",
		},
		"contact.fname.ph": {
			ru: "Ваше имя",
			en: "Your name",
		},
		"contact.lname": {
			ru: "Фамилия",
			en: "Last name",
		},
		"contact.lname.ph": {
			ru: "Ваша фамилия",
			en: "Last name",
		},
		"contact.phone": {
			ru: "Телефон или Telegram",
			en: "Phone or Telegram",
		},
		"contact.msg": {
			ru: "Сообщение",
			en: "Message",
		},
		"contact.msg.ph": {
			ru: "Напишите комментарий",
			en: "Write a comment",
		},
		"contact.submit": {
			ru: "Отправить заявку",
			en: "Send request",
		},

		/* ── Footer ── */
		"footer.desc": {
			ru: "Мы предлагаем комплексный IT-аутсорсинг, охватывающий все аспекты вашей цифровой разработки. От проектирования архитектуры и разработки ПО до облачных решений и кибербезопасности — наша команда обладает экспертизой для реализации проектов любой сложности.",
			en: "We offer a comprehensive IT outsourcing package covering all aspects of your digital development. From architecture design and software development to cloud solutions and cybersecurity — our team has the expertise to handle projects of any complexity.",
		},
		"footer.nav.title": {
			ru: "Навигация",
			en: "Navigation",
		},
		"footer.lic.title": {
			ru: "Документы",
			en: "Legal",
		},
		"footer.contact.title": {
			ru: "Контакты",
			en: "Contacts",
		},
		"footer.privacy": {
			ru: "Политика конфиденциальности",
			en: "Privacy Policy",
		},
		"footer.copyright": {
			ru: "Авторские права",
			en: "Copyright",
		},
		"footer.contacts_certificates": {
			ru: "Контакты и сертификаты",
			en: "Contacts & certificates",
		},
		"footer.email.label": {
			ru: "Email",
			en: "Email",
		},
		"footer.resident": {
			ru: "Резидент",
			en: "Resident",
		},
		"footer.discuss": {
			ru: "Обсудить проект",
			en: "Discuss project",
		},
		"footer.copy": {
			ru: "© 2026 Silk Road Tech. Все права защищены.",
			en: "© 2026 Silk Road Tech. All rights reserved.",
		},
		"footer.made": {
			ru: "Made with care in Astana",
			en: "Made with care in Astana",
		},

		/* ── About page ── */
		"about.hero.title": {
			ru: "Кто мы?",
			en: "Who are we?",
		},
		"about.tab.company": {
			ru: "О компании",
			en: "About the Company",
		},
		"about.tab.mission": {
			ru: "Миссия",
			en: "Mission",
		},
		"about.company.heading": {
			ru: "SilkRoadTechnologies — команда инженеров, аналитиков и консультантов с опытом работы в международных IT-компаниях. Мы специализируемся на разработке ПО, интеграции ИИ, аналитике данных и автоматизации бизнес-процессов.",
			en: "SilkRoadTechnologies is a team of engineers, analysts, and consultants with experience at international IT companies. We specialize in software development, AI integration, data analytics, and business process automation.",
		},
		"about.company.desc": {
			ru: "В каждом проекте мы глубоко погружаемся в специфику бизнеса клиента, чтобы создавать решения, которые реально работают и дают результат.",
			en: "In every project we dive deep into the client's business specifics to build solutions that genuinely work and deliver results.",
		},
		"about.mission.heading": {
			ru: "Наша миссия — сделать технологии для бизнеса понятными, практичными и ценными на каждом этапе развития компании.",
			en: "Our mission is to make technology for business clear, practical, and valuable at every stage of a company's growth.",
		},
		"about.mission.desc": {
			ru: "Мы создаём решения, которые помогают командам быстрее запускать продукты, автоматизировать рутину, лучше работать с данными и внедрять ИИ там, где это даёт реальный эффект, а не просто красивое демо.",
			en: "We build solutions that help teams launch products faster, automate routine tasks, work better with data, and adopt AI where it delivers real impact — not just a polished demo.",
		},
		"about.team.title": {
			ru: "Команда",
			en: "Team",
		},
		"about.team.desc": {
			ru: "Наша команда обладает обширным опытом в разработке ПО, аналитике данных, интеграции ИИ и создании цифровых продуктов.",
			en: "Our team brings extensive experience in software engineering, data analytics, AI integration, and digital product development.",
		},
		"about.board.title": {
			ru: "Advisory Board",
			en: "Advisory Board",
		},

		/* ── Team cards ── */
		"team.sayat.role": {
			ru: "Founder, Silk Road Tech · Co-founder, ContentFlow",
			en: "Founder, Silk Road Tech · Co-founder, ContentFlow",
		},
		"team.sayat.bio": {
			ru: "5+ лет в продуктовом менеджменте и аналитике данных. Выстраивает продуктовые метрики и стратегии.",
			en: "5+ years in product management and data analytics. Building product metrics and strategies.",
		},
		"team.alnur.role": { ru: "Product Engineer · Co-founder, ContentFlow", en: "Product Engineer · Co-founder, ContentFlow" },
		"team.alnur.bio": {
			ru: "Разработка продукта и технологическая интеграция. Фокус на качестве и результате.",
			en: "Product development and technology integration. Focus on quality and results.",
		},
		"team.bakhtiyar.role": { ru: "Tech Lead · Co-founder, ContentFlow", en: "Tech Lead · Co-founder, ContentFlow" },
		"team.bakhtiyar.bio": {
			ru: "6+ лет в full-stack разработке, микросервисной архитектуре и DevOps-практиках.",
			en: "6+ years in full-stack development, microservices architecture, and DevOps practices.",
		},
		"team.rassul.role": { ru: "Product Engineer · Co-founder, ContentFlow", en: "Product Engineer · Co-founder, ContentFlow" },
		"team.rassul.bio": {
			ru: "Продакт-инженер. Разрабатывает продуктовые функции и технические интеграции.",
			en: "Product engineer building product features and technical integrations.",
		},

		/* ── Cases page ── */
		"cases.hero.title": {
			ru: "Кейсы",
			en: "Case Studies",
		},
		"cases.hero.desc": {
			ru: "Продукты, платформы и цифровые системы, которые мы спроектировали, разработали или помогли улучшить.",
			en: "Products, platforms, and digital systems we designed, built, or helped improve.",
		},

		/* ── Cases — Orkenlink ── */
		"cases.orkenlink.title": {
			ru: "LinkedIn для студентов — платформа поиска карьерных возможностей",
			en: "LinkedIn for students — a career opportunities platform",
		},
		"cases.orkenlink.desc": {
			ru: "Система управления внешним кадровым пулом. Масштабируемая платформа для отслеживания ресурсов и подбора кандидатов.",
			en: "External talent pool management system. Scalable platform for resource tracking and matching.",
		},
		"cases.orkenlink.b1": {
			ru: "Поиск карьерных возможностей",
			en: "Career opportunities search",
		},
		"cases.orkenlink.b2": {
			ru: "Сопоставление студентов и работодателей",
			en: "Student-employer matching",
		},

		/* ── Cases — AIVA ── */
		"cases.aiva.title": {
			ru: "ИИ-автоматизация продаж для строительной компании",
			en: "AI-powered sales automation for a construction company",
		},
		"cases.aiva.desc": {
			ru: "Развернули ботов на всех этапах воронки, повысили конверсию посещаемости на 30% и снизили затраты на колл-центр. ИИ-мониторинг эффективности операторов и отчётность.",
			en: "Deployed bots across all funnel stages, improved attendance conversion by 30%, and reduced call center costs. AI-based operator performance monitoring and reporting.",
		},
		"cases.aiva.b1": {
			ru: "Рост конверсии посещаемости на 30%",
			en: "30% improvement in attendance conversion",
		},
		"cases.aiva.b2": {
			ru: "В партнёрстве с AIVA",
			en: "In partnership with AIVA",
		},
		"cases.aiva.b3": {
			ru: "Снижение затрат на колл-центр",
			en: "Reduced call center headcount costs",
		},

		/* ── Cases — PetroMindAI ── */
		"cases.teplo.title": {
			ru: "Платформа автоподбора оборудования и генерации инженерной документации",
			en: "Equipment selection platform with automated engineering documentation",
		},
		"cases.teplo.desc": {
			ru: "Инженер задаёт параметры объекта — платформа мгновенно подбирает оптимальные насосы и теплообменники и автоматически формирует полный пакет проектной документации.",
			en: "The engineer enters project parameters — the platform instantly selects the optimal pumps and heat exchangers and automatically generates a complete set of engineering documentation.",
		},
		"cases.teplo.b1": {
			ru: "Интеллектуальный подбор насосов и теплообменников по параметрам",
			en: "Intelligent pump and heat exchanger selection by technical parameters",
		},
		"cases.teplo.b2": {
			ru: "Автогенерация готового пакета проектной документации",
			en: "Auto-generation of a complete engineering documentation package",
		},

		/* ── Cases — AST ── */
		"cases.ast.title": {
			ru: "Платформа для производителя трансформаторного и электрораспределительного оборудования",
			en: "Platform for a transformer and electrical distribution equipment manufacturer",
		},
		"cases.ast.desc": {
			ru: "Казахстанский производитель полного цикла: трансформаторные подстанции и распределительные устройства на 0,4–500 кВ, ISO 9001, 1000+ клиентов по Казахстану и СНГ.",
			en: "Full-cycle Kazakhstani manufacturer: transformer substations and switchgear from 0.4–500 kV, ISO 9001 certified, 1000+ clients across Kazakhstan and CIS.",
		},
		"cases.ast.b1": {
			ru: "Полный цикл производства подстанций (0,4–500 кВ)",
			en: "Full-cycle substation production (0.4–500 kV)",
		},
		"cases.ast.b2": {
			ru: "1000+ клиентов по Казахстану и странам СНГ",
			en: "1000+ clients across Kazakhstan and CIS countries",
		},

		/* ── Cases — ContentFlow ── */
		"cases.contentflow.title": {
			ru: "ИИ-платформа генерации контента для социальных сетей",
			en: "AI content generation platform for social media",
		},
		"cases.contentflow.desc": {
			ru: "Генерирует посты для Telegram, Instagram, LinkedIn и TikTok из текста или голоса. Обучение фирменному стилю, автопубликация и аналитика конкурентов.",
			en: "Generates posts for Telegram, Instagram, LinkedIn, and TikTok from text or voice. Brand style training, auto-publishing, and competitor analytics.",
		},
		"cases.contentflow.b1": {
			ru: "Генерация постов под каждую платформу",
			en: "AI post generation tailored to each platform",
		},
		"cases.contentflow.b2": {
			ru: "Автопубликация и MCP-интеграция",
			en: "Auto-publishing and MCP integration",
		},
		"cases.contentflow.own": { ru: "Наш продукт", en: "Our product" },

		/* ── Cases — KZ-Provider ── */
		"cases.kzprovider.title": {
			ru: "Корпоративный сайт поставщика промышленных гидравлических компонентов",
			en: "Corporate website for an industrial hydraulic components supplier",
		},
		"cases.kzprovider.desc": {
			ru: "Разработка веб-платформы для ТОО «KZ-PROVIDER» — поставщика гидравлических и пневматических компонентов для горнодобывающего и промышленного секторов Казахстана.",
			en: "Web platform development for KZ-PROVIDER LLC — a supplier of hydraulic and pneumatic components for the mining and industrial sectors of Kazakhstan.",
		},
		"cases.kzprovider.b1": {
			ru: "Каталог продукции по международным стандартам",
			en: "Product catalog meeting international standards",
		},

		/* ── Cases — AGTS ── */
		"cases.agts.title": {
			ru: "Корпоративный сайт поставщика технической и газовой серы",
			en: "Corporate website for a technical and gas sulfur supplier",
		},
		"cases.agts.desc": {
			ru: "Разработали многоязычный сайт-каталог для промышленного поставщика: продукция, сертификаты, информация о компании и быстрый запрос коммерческого предложения.",
			en: "Built a multilingual catalog website for an industrial supplier, featuring products, certificates, company information, and a quick quote request.",
		},
		"cases.agts.b1": {
			ru: "Каталог продукции и сертификатов",
			en: "Product and certificate catalog",
		},
		"cases.agts.b2": {
			ru: "Три языковые версии",
			en: "Three language versions",
		},

		/* ── Cases — ESUTD ── */
		"cases.esutd.title": {
			ru: "Дизайн и продуктовое управление государственной транспортной платформой",
			en: "Design and product management for a government transport platform",
		},
		"cases.esutd.desc": {
			ru: "Спроектировали пользовательские интерфейсы и сопровождали развитие Единой системы управления транспортными документами: требования, приоритеты и взаимодействие команд.",
			en: "Designed the user interfaces and supported the development of the Unified Transport Document Management System, covering requirements, priorities, and cross-team coordination.",
		},
		"cases.esutd.b1": { ru: "UX/UI-дизайн сложной платформы", en: "UX/UI design for a complex platform" },
		"cases.esutd.b2": { ru: "Управление требованиями и приоритетами", en: "Requirements and priority management" },

		/* ── Cases — DIA Holding ── */
		"cases.dia.title": {
			ru: "Технический аудит международного холдинга за 10 дней",
			en: "Technical audit of an international holding in 10 days",
		},
		"cases.dia.desc": {
			ru: "Провели аудит цифровых систем и архитектуры DIA Holding, выявили технические риски и подготовили приоритизированный план улучшений.",
			en: "Audited DIA Holding's digital systems and architecture, identified technical risks, and prepared a prioritized improvement plan.",
		},
		"cases.dia.b1": { ru: "10 дней от старта до итогового отчёта", en: "10 days from kickoff to final report" },
		"cases.dia.b2": { ru: "Карта рисков и план улучшений", en: "Risk map and improvement plan" },

		/* ── Privacy page ── */
		"privacy.back": {
			ru: "На главную",
			en: "Back to home",
		},
		"privacy.title": {
			ru: "Политика конфиденциальности",
			en: "Privacy Policy",
		},
		"privacy.p1": {
			ru: "Silk Road Tech уважает конфиденциальность посетителей сайта и обрабатывает только те данные, которые пользователь добровольно предоставляет через контактную форму или каналы связи компании.",
			en: "Silk Road Tech respects the privacy of website visitors and only processes data that a user voluntarily submits through the contact form or the company's communication channels.",
		},
		"privacy.p2": {
			ru: "Мы можем собирать ваше имя, фамилию, номер телефона, имя пользователя Telegram, адрес электронной почты и содержание сообщения. Эти данные используются исключительно для ответа на ваш запрос, оценки проекта и дальнейшей деловой коммуникации.",
			en: "We may collect your first name, last name, phone number, Telegram username, email address, and message content. This data is used solely to respond to your inquiry, assess the project, and conduct further business communication.",
		},
		"privacy.p3": {
			ru: "Мы не продаём и не передаём персональные данные третьим лицам, за исключением сервисов, используемых для обработки запросов и обеспечения связи, — например, Formspree или корпоративная почта.",
			en: "We do not sell or share personal data with third parties, except for services used to process inquiries and support communication operations, such as Formspree or corporate email.",
		},
		"privacy.p4": {
			ru: "Если вы хотите просмотреть, обновить или удалить ранее отправленные данные, напишите на",
			en: "If you wish to review, update, or delete previously submitted data, please write to",
		},
		"privacy.p5": {
			ru: "Продолжая использовать сайт и отправляя форму, вы соглашаетесь с настоящей политикой конфиденциальности.",
			en: "By continuing to use the site and submitting the form, you agree to this privacy policy.",
		},
		"privacy.updated": {
			ru: "Последнее обновление: 10 апреля 2026 г.",
			en: "Last updated: April 10, 2026",
		},

		/* ── Copyright page ── */
		"copyright.back": {
			ru: "На главную",
			en: "Back to home",
		},
		"copyright.title": {
			ru: "Авторские права",
			en: "Copyright",
		},
		"copyright.p1": {
			ru: "Все материалы на этом сайте, включая тексты, визуальные элементы, графику, макеты страниц и торговые марки Silk Road Tech, защищены применимым законодательством об авторском праве и интеллектуальной собственности.",
			en: "All materials on this website, including texts, visual elements, graphics, page layouts, and Silk Road Tech brand marks, are protected by applicable copyright and intellectual property laws.",
		},
		"copyright.p2": {
			ru: "Любое копирование, публикация, адаптация или коммерческое использование материалов сайта без письменного разрешения Silk Road Tech запрещены, если явно не указано иное.",
			en: "Any copying, publishing, adaptation, or commercial use of website materials without written permission from Silk Road Tech is prohibited, unless explicitly stated otherwise.",
		},
		"copyright.p3": {
			ru: "Если вы считаете, что материал на этом сайте нарушает ваши права, напишите на",
			en: "If you believe that material on this site infringes your rights, please write to",
		},
		"copyright.p3b": {
			ru: "с описанием вашей претензии.",
			en: "with a description of your claim.",
		},
		"copyright.updated": {
			ru: "Последнее обновление: 10 апреля 2026 г.",
			en: "Last updated: April 10, 2026",
		},

		/* ── Blog ── */
		"nav.blog": { ru: "Блог", en: "Blog" },
		"blog.hero.eyebrow": { ru: "Блог Silk Road Tech", en: "Silk Road Tech Blog" },
		"blog.hero.title": {
			ru: "Технологии, продукты и бизнес без лишнего шума",
			en: "Technology, products, and business without the noise",
		},
		"blog.hero.desc": {
			ru: "Делимся опытом разработки, внедрения ИИ и запуска цифровых продуктов.",
			en: "Lessons from building software, implementing AI, and launching digital products.",
		},
		"blog.back": { ru: "Все публикации", en: "All posts" },
		"blog.more": { ru: "Читайте также", en: "Read next" },
		"blog.date.20260819": { ru: "19 августа 2026", en: "August 19, 2026" },
		"blog.min7": { ru: "7 минут", en: "7 min read" },
		"blog.min8": { ru: "8 минут", en: "8 min read" },
		"blog.empty.label": { ru: "Скоро", en: "Coming soon" },
		"blog.empty.title": { ru: "Готовим первые материалы", en: "Our first stories are on the way" },
		"blog.empty.desc": {
			ru: "Здесь появятся разборы кейсов, практические гайды и новости Silk Road Tech.",
			en: "This is where we'll publish case studies, practical guides, and Silk Road Tech news.",
		},
		"blog.empty.cta": { ru: "Обсудить проект", en: "Discuss a project" },

		/* ── Referral ── */
		"nav.referral": { ru: "Партнёрам", en: "Referrals" },
		"ref.hero.title": {
			ru: "Рекомендуйте нас — получайте 10% от договора",
			en: "Recommend us and earn 10% of the contract",
		},
		"ref.hero.desc": {
			ru: "Знаете компанию, которой нужен сайт, система или ИИ? Передайте контакт — встречи, договор и разработку мы берём на себя.",
			en: "Know a company that needs a website, a system, or AI? Share the contact — we handle the meetings, the contract, and the build.",
		},
		"ref.hero.cta": {
			ru: "Передать клиента",
			en: "Refer a client",
		},
		"ref.hero.terms": {
			ru: "Условия",
			en: "Terms",
		},
		"ref.how.title": {
			ru: "Как это работает",
			en: "How it works",
		},
		"ref.stat.label": {
			ru: "от суммы подписанного договора",
			en: "of the signed contract value",
		},
		"ref.stat.deal": {
			ru: "Договор клиента",
			en: "Client contract",
		},
		"ref.stat.yours": {
			ru: "Ваше вознаграждение",
			en: "Your reward",
		},
		"ref.s1.title": {
			ru: "Передайте контакт",
			en: "Share the contact",
		},
		"ref.s1.desc": {
			ru: "Заполните форму: кто клиент и что ему нужно. В течение рабочего дня подтвердим, что клиент закреплён за вами.",
			en: "Fill in the form: who the client is and what they need. Within one business day we confirm the client is registered to you.",
		},
		"ref.s2.title": {
			ru: "Мы ведём клиента",
			en: "We take it from there",
		},
		"ref.s2.desc": {
			ru: "Созваниваемся, разбираем задачу, готовим предложение и смету. От вас ничего не требуется.",
			en: "We call the client, work through the task, and prepare a proposal and estimate. Nothing is needed from you.",
		},
		"ref.s3.title": {
			ru: "Клиент подписывает договор",
			en: "The client signs",
		},
		"ref.s3.desc": {
			ru: "С этого момента вам положено 10% от суммы договора.",
			en: "From that moment you are owed 10% of the contract value.",
		},
		"ref.s4.title": {
			ru: "Получаете выплату",
			en: "You get paid",
		},
		"ref.s4.desc": {
			ru: "Клиент платит нам — мы переводим вашу долю на Kaspi, Halyk или счёт в любом банке Казахстана.",
			en: "The client pays us, and we transfer your share to Kaspi, Halyk, or an account at any bank in Kazakhstan.",
		},
		"ref.fit.title": {
			ru: "Кого к нам привести",
			en: "Who to bring us",
		},
		"ref.fit.clients.title": {
			ru: "Компании, которым нужно",
			en: "Companies that need",
		},
		"ref.fit.clients.1": {
			ru: "Сайт, веб-сервис или мобильное приложение",
			en: "A website, web service, or mobile app",
		},
		"ref.fit.clients.2": {
			ru: "CRM, ERP или интеграция с 1С, банками и другими системами",
			en: "CRM, ERP, or integration with 1C, banks, and other systems",
		},
		"ref.fit.clients.3": {
			ru: "ИИ-ассистент, обработка документов, автоматизация рутины",
			en: "An AI assistant, document processing, or automation of routine work",
		},
		"ref.fit.clients.4": {
			ru: "Дашборды и управленческая отчётность",
			en: "Dashboards and management reporting",
		},
		"ref.fit.clients.5": {
			ru: "Мониторинг производства и IoT",
			en: "Production monitoring and IoT",
		},
		"ref.fit.cases": {
			ru: "Посмотреть наши кейсы",
			en: "See our case studies",
		},
		"ref.fit.partners.title": {
			ru: "Кому подходит программа",
			en: "Who the program suits",
		},
		"ref.fit.partners.1": {
			ru: "Бухгалтеры и специалисты по 1С — видят, где у бизнеса ручная работа",
			en: "Accountants and 1C specialists — they see where a business still works by hand",
		},
		"ref.fit.partners.2": {
			ru: "Маркетологи, дизайнеры и агентства — когда клиенту нужна разработка",
			en: "Marketers, designers, and agencies — when a client needs development",
		},
		"ref.fit.partners.3": {
			ru: "Бизнес-консультанты и предприниматели",
			en: "Business consultants and entrepreneurs",
		},
		"ref.fit.partners.4": {
			ru: "Наши клиенты, которые знают, как мы работаем",
			en: "Our clients, who know how we work",
		},
		"ref.terms.title": {
			ru: "Условия",
			en: "Terms",
		},
		"ref.terms.1.title": {
			ru: "Вознаграждение",
			en: "Reward",
		},
		"ref.terms.1.desc": {
			ru: "10% от суммы подписанного договора. Сколько клиентов — столько выплат, без ограничений.",
			en: "10% of the signed contract value. One payout per client, as many clients as you like.",
		},
		"ref.terms.2.title": {
			ru: "Когда платим",
			en: "When we pay",
		},
		"ref.terms.2.desc": {
			ru: "По мере оплаты: клиент перевёл нам деньги — в течение 5 рабочих дней мы переводим вам 10% от этой суммы. Договор оплачивается частями — выплаты тоже приходят частями.",
			en: "As the client pays: once a payment reaches us, we transfer you 10% of it within 5 business days. If the contract is paid in parts, your payouts come in parts too.",
		},
		"ref.terms.3.title": {
			ru: "Куда платим",
			en: "How we pay",
		},
		"ref.terms.3.desc": {
			ru: "Kaspi, Halyk или счёт в любом банке Казахстана.",
			en: "Kaspi, Halyk, or an account at any bank in Kazakhstan.",
		},
		"ref.terms.4.title": {
			ru: "Закрепление",
			en: "Registration",
		},
		"ref.terms.4.desc": {
			ru: "Клиент закрепляется за тем, кто первым передал его контакт, на 90 дней. Договор подписан в этот срок — вознаграждение ваше.",
			en: "The client is registered to whoever shared their contact first, for 90 days. If the contract is signed within that period, the reward is yours.",
		},
		"ref.terms.5.title": {
			ru: "Что не засчитывается",
			en: "What doesn't count",
		},
		"ref.terms.5.desc": {
			ru: "Наши действующие клиенты и компании, с которыми мы уже ведём переговоры. Если так вышло, скажем об этом сразу.",
			en: "Our current clients and companies we are already talking to. If that happens, we'll tell you right away.",
		},
		"ref.terms.6.title": {
			ru: "С клиентом",
			en: "With the client",
		},
		"ref.terms.6.desc": {
			ru: "Предупредите клиента, что мы свяжемся с ним. Цены и сроки не обещайте — мы назовём их после разбора задачи.",
			en: "Let the client know we will get in touch. Don't promise prices or timelines — we give those after we've looked at the task.",
		},
		"ref.form.eyebrow": {
			ru: "Передать клиента",
			en: "Refer a client",
		},
		"ref.form.title": {
			ru: "Расскажите, кого рекомендуете",
			en: "Tell us who you're recommending",
		},
		"ref.form.lead": {
			ru: "Форма соберёт сообщение и откроет WhatsApp или Telegram — останется нажать «Отправить». Переписка останется у вас: по ней видно, когда вы передали клиента.",
			en: "The form composes a message and opens WhatsApp or Telegram — all that's left is to press Send. You keep the chat, which shows when you referred the client.",
		},
		"ref.form.you": {
			ru: "Вы",
			en: "You",
		},
		"ref.form.name": {
			ru: "Имя",
			en: "Name",
		},
		"ref.form.contact": {
			ru: "Телефон или Telegram",
			en: "Phone or Telegram",
		},
		"ref.form.client": {
			ru: "Клиент",
			en: "Client",
		},
		"ref.form.company": {
			ru: "Компания",
			en: "Company",
		},
		"ref.form.client_contact": {
			ru: "Контактное лицо и телефон",
			en: "Contact person and phone",
		},
		"ref.form.task": {
			ru: "Что нужно клиенту",
			en: "What the client needs",
		},
		"ref.form.agree": {
			ru: "Клиент знает, что я передаю его контакт",
			en: "The client knows I'm sharing their contact",
		},
		"ref.form.wa": {
			ru: "Отправить в WhatsApp",
			en: "Send via WhatsApp",
		},
		"ref.form.tg": {
			ru: "Отправить в Telegram",
			en: "Send via Telegram",
		},
		"ref.faq.lead": {
			ru: "Не нашли ответ — напишите Саяту, он лично ведёт партнёров.",
			en: "Didn't find an answer? Message Sayat — he works with partners personally.",
		},
		"ref.faq.q1": {
			ru: "Нужно ли самому продавать?",
			en: "Do I have to sell?",
		},
		"ref.faq.a1": {
			ru: "Нет. Достаточно познакомить нас с клиентом. Встречи, смету, договор и разработку ведём мы.",
			en: "No. An introduction is enough. We run the meetings, the estimate, the contract, and the development.",
		},
		"ref.faq.q2": {
			ru: "Как я узнаю, что клиент закреплён за мной?",
			en: "How will I know the client is registered to me?",
		},
		"ref.faq.a2": {
			ru: "Ответим в том же чате в течение рабочего дня. Дальше будем сообщать, как идут переговоры и когда клиент подпишет договор.",
			en: "We reply in the same chat within one business day, then keep you posted on the talks and on when the client signs.",
		},
		"ref.faq.q3": {
			ru: "Что если клиент подпишет договор не сразу?",
			en: "What if the client doesn't sign right away?",
		},
		"ref.faq.a3": {
			ru: "Клиент закреплён за вами 90 дней с момента, как вы передали контакт. Подписал договор в этот срок — 10% ваши.",
			en: "The client stays registered to you for 90 days from when you shared the contact. If they sign within that period, the 10% is yours.",
		},
		"ref.faq.q4": {
			ru: "Договор оплачивают частями. Когда я получу деньги?",
			en: "The contract is paid in parts. When do I get paid?",
		},
		"ref.faq.a4": {
			ru: "С каждой оплаты. Например, клиент внёс предоплату 50% по договору на 3 000 000 ₸ — вы получаете 150 000 ₸, остальные 150 000 ₸ — после второй оплаты.",
			en: "From every payment. For example, a client pays a 50% advance on a 3,000,000 ₸ contract — you get 150,000 ₸, and the other 150,000 ₸ after the second payment.",
		},
		"ref.faq.q5": {
			ru: "Сколько клиентов можно привести?",
			en: "How many clients can I refer?",
		},
		"ref.faq.a5": {
			ru: "Сколько угодно. За каждый подписанный договор — 10%.",
			en: "As many as you like. 10% for every signed contract.",
		},
		"ref.form.contact.ph": {
			ru: "+7 … или @username",
			en: "+7 … or @username",
		},
		"ref.form.client_contact.ph": {
			ru: "Айгерим, +7 …",
			en: "Aigerim, +7 …",
		},
		"ref.form.task.ph": {
			ru: "Например: CRM для отдела продаж, сейчас всё в Excel",
			en: "For example: a CRM for the sales team, everything is in Excel now",
		},

		/* ── Legacy Academy ── */
		"academy.hero.badge": { ru: "SRT Academy", en: "SRT Academy" },
		"academy.hero.title": {
			ru: 'Научись создавать <span class="text-gradient-green">AI&#8209;продукты</span> за 8 недель',
			en: 'Learn to build <span class="text-gradient-green">AI&nbsp;products</span> in 8 weeks',
		},
		"academy.hero.desc": {
			ru: "Практический курс для предпринимателей, маркетологов и менеджеров без опыта в разработке. Три реальных проекта в портфолио за 8 недель.",
			en: "Hands-on program for entrepreneurs, marketers, and managers with no coding background. Three real portfolio projects over 8 weeks.",
		},
		"academy.stat.weeks": { ru: "8 недель", en: "8 weeks" },
		"academy.stat.sessions": { ru: "16 живых занятий", en: "16 live sessions" },
		"academy.stat.projects": { ru: "3 проекта", en: "3 projects" },
		"academy.stat.cohort": { ru: "до 12 студентов", en: "up to 12 students" },
		"academy.build.eyebrow": { ru: "Программа", en: "Curriculum" },
		"academy.build.title": {
			ru: "Что ты создашь за курс",
			en: "What you'll build",
		},
		"academy.build.1.title": {
			ru: "Сайт / Лендинг",
			en: "Website / Landing page",
		},
		"academy.build.1.desc": {
			ru: "Опубликованный сайт или лендинг-страница для бизнеса. Реальный хостинг, реальный домен.",
			en: "A published website or landing page for a business. Real hosting, real domain.",
		},
		"academy.build.2.title": { ru: "Telegram-бот", en: "Telegram bot" },
		"academy.build.2.desc": {
			ru: "Бот или автоматизация бизнес-процессов. Подходит для реальных задач: запись, рассылки, FAQ.",
			en: "A bot or business process automation — bookings, newsletters, FAQ.",
		},
		"academy.build.3.title": { ru: "Mini MVP", en: "Mini MVP" },
		"academy.build.3.desc": {
			ru: "Мини-приложение с базой данных и интеграцией оплаты. Полноценный продукт, готовый к запуску.",
			en: "A mini app with a database and payment integration. A complete product ready to launch.",
		},
		"academy.pricing.eyebrow": { ru: "Тарифы", en: "Pricing" },
		"academy.pricing.title": {
			ru: "Выбери свой формат",
			en: "Choose your format",
		},
		"academy.pricing.compare": { ru: "Сравнить тарифы", en: "Compare plans" },
		"academy.pricing.badge.recommended": {
			ru: "Рекомендуем",
			en: "Recommended",
		},
		"academy.pricing.pilot.tag": { ru: "Ранний доступ", en: "Early Access" },
		"academy.pricing.pilot.name": { ru: "Pilot", en: "Pilot" },
		"academy.pricing.pilot.f1": {
			ru: "Групповая поддержка ментора",
			en: "Group mentor support",
		},
		"academy.pricing.pilot.f2": {
			ru: "3 проекта в портфолио",
			en: "3 portfolio projects",
		},
		"academy.pricing.pilot.f3": {
			ru: "Хостинг включён",
			en: "Hosting included",
		},
		"academy.pricing.pilot.f4": {
			ru: "16 живых занятий",
			en: "16 live sessions",
		},
		"academy.pricing.standard.tag": { ru: "Основной", en: "Core" },
		"academy.pricing.standard.name": { ru: "Standard", en: "Standard" },
		"academy.pricing.standard.f1": {
			ru: "Всё из Pilot",
			en: "Everything from Pilot",
		},
		"academy.pricing.standard.f2": {
			ru: "Ревью ментора по проектам",
			en: "Project mentor reviews",
		},
		"academy.pricing.standard.f3": {
			ru: "Разбор кода на занятиях",
			en: "Code review sessions",
		},
		"academy.pricing.standard.f4": {
			ru: "Доступ к закрытому чату",
			en: "Private community access",
		},
		"academy.pricing.pro.tag": { ru: "Для бизнеса", en: "Business" },
		"academy.pricing.pro.name": { ru: "Pro", en: "Pro" },
		"academy.pricing.pro.f1": {
			ru: "Всё из Standard",
			en: "Everything from Standard",
		},
		"academy.pricing.pro.f2": {
			ru: "Личные сессии 1:1",
			en: "1-on-1 sessions",
		},
		"academy.pricing.pro.f3": {
			ru: "Помощь с монетизацией",
			en: "Monetization guidance",
		},
		"academy.pricing.pro.f4": {
			ru: "Стажировка для лучших",
			en: "Internship for top graduates",
		},
		"academy.for.eyebrow": { ru: "Для кого", en: "Who it's for" },
		"academy.for.title": { ru: "Подойдёт, если ты…", en: "Made for you if…" },
		"academy.for.1": {
			ru: "Предприниматель, который хочет автоматизировать бизнес",
			en: "An entrepreneur who wants to automate their business",
		},
		"academy.for.2": {
			ru: "Маркетолог или менеджер без опыта в разработке",
			en: "A marketer or manager with no coding background",
		},
		"academy.for.3": {
			ru: "Студент или фрилансер, ищущий новую специальность",
			en: "A student or freelancer looking for a new skill set",
		},
		"academy.for.4": {
			ru: "Любой, у кого есть идея продукта и желание её реализовать",
			en: "Anyone with a product idea and the drive to build it",
		},
		"academy.cta.btn": { ru: "Записаться", en: "Enroll now" },
		"academy.cta.btn.full": { ru: "Открыть платформу", en: "Open platform" },
		"academy.cta.ask": { ru: "Задать вопрос", en: "Ask a question" },
		"academy.cta.title": { ru: "Готов начать?", en: "Ready to start?" },
		"academy.cta.desc": {
			ru: "Присоединись к следующей группе и выйди с портфолио реальных AI-продуктов уже через 8 недель.",
			en: "Join the next cohort and graduate with a real AI product portfolio in just 8 weeks.",
		},
		"privacy.lead": {
			ru: "Мы собираем минимум данных: только то, что вы сами присылаете нам в письме или мессенджере. Счётчиков аналитики и рекламных трекеров на сайте нет, сайт размещён на сервере в Казахстане. Ниже — подробно: какие данные, зачем, кому передаём и как их удалить.",
			en: "We collect the bare minimum: only what you send us yourself by email or messenger. The site has no analytics counters or advertising trackers, and it is hosted on a server in Kazakhstan. Below, in detail: what data, why, who we share it with and how to have it deleted.",
		},
		"privacy.h.what": {
			ru: "Какие данные мы собираем",
			en: "What data we collect",
		},
		"privacy.what1": {
			ru: "Когда вы пишете нам на почту или в Telegram, мы получаем то, что вы указали сами: имя, контакт для связи, название компании и описание задачи. Ничего сверх этого сайт не запрашивает и не собирает автоматически.",
			en: "When you write to us by email or on Telegram, we receive what you provide yourself: your name, a contact for getting back to you, your company name and a description of the task. The site neither asks for nor collects anything beyond that automatically.",
		},
		"privacy.what2": {
			ru: "Форма партнёрской программы данные на наш сервер не отправляет. Она собирает из заполненных полей текст сообщения и открывает WhatsApp или Telegram — заявку отправляете вы сами, из своего аккаунта. До этого момента введённое остаётся в вашем браузере.",
			en: "The partner programme form does not send anything to our server. It composes a message from the fields you filled in and opens WhatsApp or Telegram — you send the referral yourself, from your own account. Until then, what you typed stays in your browser.",
		},
		"privacy.what3": {
			ru: "Хостинг ведёт технические журналы обращений к сайту: IP-адрес, время запроса, адрес страницы и тип браузера. Эти записи нужны для работы и безопасности сервера, мы их не анализируем и не связываем с конкретными людьми.",
			en: "The hosting provider keeps technical access logs: IP address, request time, page address and browser type. Those records exist for server operation and security; we do not analyse them or link them to particular people.",
		},
		"privacy.h.why": {
			ru: "Зачем нам эти данные",
			en: "Why we need this data",
		},
		"privacy.why1": {
			ru: "Чтобы ответить на ваш вопрос, оценить задачу, подготовить коммерческое предложение и вести дальнейшую переписку по проекту. Для партнёрской программы — чтобы закрепить клиента за вами и рассчитать вознаграждение. Ни для чего другого эти данные не используются: рассылок мы не ведём, профилей не строим.",
			en: "To answer your question, estimate the task, prepare a proposal and continue project correspondence. For the partner programme — to register the client to you and calculate your reward. The data is used for nothing else: we run no mailing lists and build no profiles.",
		},
		"privacy.h.share": {
			ru: "Кому мы передаём данные",
			en: "Who we share data with",
		},
		"privacy.share1": {
			ru: "Мы не продаём персональные данные и не передаём их третьим лицам для маркетинга. Ваше сообщение неизбежно проходит через сервисы, которыми мы пользуемся для связи: Telegram, WhatsApp и почтовый сервис нашего хостинг-провайдера. На эти сервисы распространяются их собственные политики конфиденциальности.",
			en: "We do not sell personal data and do not pass it to third parties for marketing. Your message inevitably passes through the services we use for communication: Telegram, WhatsApp and the mail service of our hosting provider. Those services are governed by their own privacy policies.",
		},
		"privacy.share2": {
			ru: "Данные могут быть раскрыты по законному требованию государственных органов Республики Казахстан — в объёме, который прямо предусмотрен законом.",
			en: "Data may be disclosed at the lawful request of the state authorities of the Republic of Kazakhstan, to the extent expressly provided for by law.",
		},
		"privacy.h.keep": {
			ru: "Сколько мы храним данные",
			en: "How long we keep data",
		},
		"privacy.keep1": {
			ru: "Переписку по незаключённым проектам храним, пока обсуждение остаётся актуальным, — обычно не дольше года. Документы и переписку по заключённым договорам храним в течение срока, установленного законодательством для бухгалтерских и налоговых документов. По вашему запросу удалим раньше, если этому не мешают требования закона.",
			en: "Correspondence about projects that did not proceed is kept while the discussion stays relevant — usually no longer than a year. Documents and correspondence relating to signed contracts are kept for the period required by law for accounting and tax records. At your request we will delete data sooner, unless the law requires otherwise.",
		},
		"privacy.h.rights": {
			ru: "Ваши права",
			en: "Your rights",
		},
		"privacy.rights1": {
			ru: "Вы вправе узнать, какие ваши данные у нас есть, потребовать их исправления или удаления, а также отозвать согласие на обработку. Для этого напишите на почту, указанную ниже, с того адреса или аккаунта, с которого вы с нами связывались, — так мы сможем убедиться, что запрос исходит от вас. Ответим в течение рабочей недели.",
			en: "You have the right to find out what data of yours we hold, to request its correction or deletion, and to withdraw your consent to processing. To do so, write to the address below from the same address or account you used to contact us, so that we can confirm the request comes from you. We reply within one working week.",
		},
		"privacy.h.storage": {
			ru: "Cookie и данные в браузере",
			en: "Cookies and browser storage",
		},
		"privacy.storage1": {
			ru: "Рекламных и аналитических cookie сайт не использует. В локальном хранилище браузера сохраняются две вещи: выбранный язык интерфейса и — если вы заполняли форму партнёрской программы — ваши имя и контакт, чтобы не вводить их повторно. Эти записи остаются на вашем устройстве, нам они не передаются. Их можно стереть, очистив данные сайта в настройках браузера.",
			en: "The site uses no advertising or analytics cookies. Two things are saved in your browser's local storage: your chosen interface language and — if you have filled in the partner programme form — your name and contact, so you don't have to type them again. These records stay on your device and are never sent to us. You can remove them by clearing the site's data in your browser settings.",
		},
		"privacy.h.changes": {
			ru: "Изменения политики",
			en: "Changes to this policy",
		},
		"privacy.changes1": {
			ru: "Мы можем обновлять эту политику — например, если изменится состав сервисов, которыми мы пользуемся. Дата последнего обновления указана в конце страницы. Существенные изменения мы отметим отдельно на этой же странице.",
			en: "We may update this policy — for example, if the set of services we use changes. The date of the last update is shown at the end of the page. Significant changes will be noted separately on this page.",
		},
		"privacy.h.contact": {
			ru: "Как с нами связаться",
			en: "How to contact us",
		},
		"privacy.contact1": {
			ru: "По любым вопросам об обработке персональных данных пишите на",
			en: "For any question about the processing of personal data, write to",
		},
		"copy.lead": {
			ru: "Тексты, изображения, вёрстка и код этого сайта принадлежат ТОО «СилкРоудТех». Процитировать фрагмент с ссылкой на источник можно свободно, скопировать страницу или использовать материалы в коммерческих целях — только с нашего письменного разрешения. Ниже — подробности и порядок обращения, если вы считаете, что нарушены ваши права.",
			en: "The texts, images, layout and code of this site belong to SilkRoadTech LLP. You are free to quote a fragment with a link to the source; copying a page or using the materials commercially requires our written permission. Below are the details and the procedure to follow if you believe your rights have been infringed.",
		},
		"copy.h.what": {
			ru: "Что защищено",
			en: "What is protected",
		},
		"copy.what1": {
			ru: "Авторским правом защищены тексты страниц и статей блога, фотографии и иллюстрации, схемы и графика, дизайн и вёрстка страниц, а также исходный код сайта. Права принадлежат ТОО «СилкРоудТех», если рядом с материалом не указан другой правообладатель.",
			en: "Copyright covers the page and blog texts, photographs and illustrations, diagrams and graphics, the design and layout of the pages, and the site's source code. The rights belong to SilkRoadTech LLP unless another rights holder is named next to the material.",
		},
		"copy.h.allowed": {
			ru: "Что можно без отдельного разрешения",
			en: "What is allowed without separate permission",
		},
		"copy.allowed1": {
			ru: "Цитировать фрагменты статей и страниц в обзорах, публикациях и учебных материалах — при условии, что указан автор и стоит активная ссылка на страницу-источник. Делиться ссылками на материалы сайта в любых каналах. Сохранять страницы для личного некоммерческого использования.",
			en: "Quoting fragments of articles and pages in reviews, publications and educational materials — provided the author is credited and an active link to the source page is included. Sharing links to the site's materials through any channel. Saving pages for personal, non-commercial use.",
		},
		"copy.h.forbidden": {
			ru: "Что требует нашего разрешения",
			en: "What requires our permission",
		},
		"copy.forbidden1": {
			ru: "Полная или частичная перепечатка материалов, их перевод, переработка и адаптация, использование текстов и изображений в коммерческих проектах и рекламе, а также использование кода и элементов дизайна сайта в других продуктах. Отдельно отметим: автоматическое копирование материалов для обучения моделей или наполнения других сайтов разрешением не считается.",
			en: "Reprinting materials in whole or in part, translating, reworking or adapting them, using texts and images in commercial projects and advertising, and reusing the site's code or design elements in other products. To be explicit: automated copying of materials to train models or to populate other sites is not covered by any permission.",
		},
		"copy.h.marks": {
			ru: "Товарные знаки и материалы клиентов",
			en: "Trademarks and client materials",
		},
		"copy.marks1": {
			ru: "Название и логотип Silk Road Tech — наши средства индивидуализации. Логотипы, названия и товарные знаки клиентов, упомянутых в разделе кейсов, принадлежат их владельцам и используются исключительно для обозначения того, с кем мы работали. Их присутствие на сайте не означает, что владельцы одобряют или рекламируют наши услуги.",
			en: "The Silk Road Tech name and logo are our means of identification. The logos, names and trademarks of the clients mentioned in the case studies belong to their owners and are used solely to indicate who we have worked with. Their presence on the site does not imply that those owners endorse or advertise our services.",
		},
		"copy.h.claims": {
			ru: "Если нарушены ваши права",
			en: "If your rights have been infringed",
		},
		"copy.claims1": {
			ru: "Напишите нам на почту, указанную ниже, и укажите: какой именно материал вызывает претензию и по какому адресу он размещён, чем подтверждаются ваши права на него, и чего вы хотите — удаления, указания авторства или иного. Мы рассмотрим обращение в течение рабочей недели и, если претензия обоснована, снимем или исправим материал.",
			en: "Write to the address below and tell us: which material your claim concerns and at which address it is published, what evidence supports your rights to it, and what you would like us to do — remove it, credit you, or something else. We review such requests within one working week and, if the claim is justified, take the material down or correct it.",
		},
		"copy.h.contact": {
			ru: "Связаться с нами",
			en: "Contact us",
		},
		"copy.contact1": {
			ru: "Вопросы об использовании материалов сайта направляйте на",
			en: "Send questions about using the site's materials to",
		},
		"copy.updated": {
			ru: "Последнее обновление: 29 сентября 2026 г.",
			en: "Last updated: 29 September 2026",
		},
		"copy.h.blog": {
			ru: "Статьи блога",
			en: "Blog articles",
		},
		"copy.blog1": {
			ru: "Статьи блога — авторские материалы нашей команды. Перепечатать статью целиком можно с нашего письменного согласия, при указании автора и активной ссылке на исходную публикацию. Пересказ своими словами со ссылкой на источник согласования не требует.",
			en: "Blog articles are original work by our team. Republishing a whole article requires our written consent, with the author credited and an active link to the original publication. Retelling an article in your own words with a link to the source needs no approval.",
		},
		"copy.h.links": {
			ru: "Ссылки на сторонние сайты",
			en: "Links to third-party sites",
		},
		"copy.links1": {
			ru: "На сайте есть ссылки на сторонние ресурсы: сайты клиентов, профили в социальных сетях, публикации, на которые мы ссылаемся в статьях. Мы не контролируем их содержимое и не отвечаем за него, а также за доступность этих ресурсов. Права на размещённые там материалы принадлежат их владельцам.",
			en: "The site contains links to third-party resources: client websites, social media profiles and publications we reference in articles. We neither control nor are responsible for their content or availability. The rights to materials published there belong to their owners.",
		},
		"contacts.lead": {
			ru: "Пишите на почту или в Telegram — отвечаем в течение рабочего дня. Работаем удалённо с клиентами из любой страны и встречаемся лично в Астане. Ниже — контакты, банковские реквизиты для договоров и свидетельство участника Astana Hub.",
			en: "Write to us by email or on Telegram — we reply within one business day. We work remotely with clients from any country and meet in person in Astana. Below are our contacts, the bank details used for contracts and our Astana Hub certificate.",
		},
		"contacts.h.start": {
			ru: "Как начать работу",
			en: "How to get started",
		},
		"contacts.start1": {
			ru: "Опишите задачу в свободной форме: что за продукт, какая проблема, есть ли сроки и бюджет. Готовое техническое задание не нужно — если оно есть, мы всё равно начинаем с разбора. На первом созвоне уточняем детали, дальше присылаем оценку этапов и сроков.",
			en: "Describe the task in your own words: what the product is, what problem you have, whether there are deadlines and a budget. A finished specification isn't required — and if you have one, we still start by reviewing it. On the first call we clarify the details, then send an estimate of stages and timelines.",
		},
		"contacts.start2": {
			ru: "Для крупных систем первым этапом идёт платный аудит: разбираем архитектуру, отделяем реальные потребности от требований, попавших в документ по инерции, и составляем план работ. Почему мы так делаем — подробно в статье блога.",
			en: "For large systems the first stage is a paid audit: we review the architecture, separate real needs from requirements that ended up in the document out of inertia, and put together a work plan. Our blog explains in detail why we work this way.",
		},
		"contacts.h.hours": {
			ru: "Часы работы",
			en: "Working hours",
		},
		"contacts.hours1": {
			ru: "Понедельник — пятница, с 9:00 до 18:00 по времени Астаны (UTC+5). Письма, пришедшие в выходные, читаем в ближайший рабочий день. Ведём проекты на русском и английском языках.",
			en: "Monday to Friday, 9:00–18:00 Astana time (UTC+5). Messages that arrive at the weekend are read on the next business day. We run projects in Russian and English.",
		},
		"contacts.h.company": {
			ru: "О компании",
			en: "About the company",
		},
		"contacts.company1": {
			ru: "ТОО «СилкРоудТех» — инженерная компания из Астаны. Мы разрабатываем сайты и программное обеспечение, внедряем ИИ и аналитику, автоматизируем бизнес-процессы. Команда — инженеры, аналитики и продуктологи; часть команды одновременно развивает собственный продукт ContentFlow, поэтому мы знаем цену не только коду, но и решениям о том, что именно стоит делать.",
			en: "SilkRoadTech LLP is an engineering company based in Astana. We build websites and software, integrate AI and analytics, and automate business processes. The team consists of engineers, analysts and product people; part of the team also develops our own product, ContentFlow, so we understand the cost not only of code but of deciding what is worth building in the first place.",
		},
		"contacts.company2": {
			ru: "Работаем с бизнесом и государственным сектором Казахстана: от платформ подбора оборудования и систем управления кадровым резервом до ИИ-ассистентов и BI-дашбордов. Примеры проектов собраны в разделе кейсов.",
			en: "We work with business and the public sector in Kazakhstan: from equipment selection platforms and talent pool management systems to AI assistants and BI dashboards. Examples of our projects are collected in the case studies section.",
		},
		"contacts.company3": {
			ru: "Компания — участник Astana Hub, международного технопарка IT-стартапов. Свидетельство участника опубликовано ниже: по нему можно проверить статус компании перед заключением договора.",
			en: "The company is a resident of Astana Hub, the international technology park for IT startups. The certificate is published below, so you can verify the company's status before signing a contract.",
		},
	};

	function applyLang(lang) {
		document.querySelectorAll("[data-i18n]").forEach(function (el) {
			var key = el.getAttribute("data-i18n");
			if (translations[key] && translations[key][lang]) {
				el.innerHTML = translations[key][lang];
			}
		});

		/* innerHTML keys (gradient spans, HTML markup) */
		document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
			var key = el.getAttribute("data-i18n-html");
			if (translations[key] && translations[key][lang]) {
				el.innerHTML = translations[key][lang];
			}
		});

		/* placeholder attributes */
		document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
			var key = el.getAttribute("data-i18n-placeholder");
			if (translations[key] && translations[key][lang]) {
				el.placeholder = translations[key][lang];
			}
		});

		/* update toggle button label */
		var btn = document.getElementById("langToggle");
		if (btn) btn.textContent = lang === "ru" ? "En" : "Ru";

		/* update html lang attribute */
		document.documentElement.lang = lang;
		document.dispatchEvent(
			new CustomEvent("srt:language-changed", {
				detail: { lang: lang },
			}),
		);
	}

	/* Адрес этой же страницы на другом языке, если он существует.
	   Такие страницы собираются заранее (scripts/build-en.mjs) и связаны
	   между собой через <link rel="alternate" hreflang>. */
	function counterpart(lang) {
		var link = document.querySelector('link[rel="alternate"][hreflang="' + lang + '"]');
		return link ? link.getAttribute("href") : null;
	}

	document.addEventListener("DOMContentLoaded", function () {
		var pageLang = document.documentElement.lang === "en" ? "en" : "ru";
		var other = pageLang === "ru" ? "en" : "ru";
		var otherUrl = counterpart(other);

		/* Страница существует на двух языках: её текст уже отрисован на нужном
		   языке сервером, подменять его в браузере нельзя — иначе английская
		   страница мгновенно станет русской из-за сохранённого выбора. */
		if (otherUrl) {
			localStorage.setItem(LANG_KEY, pageLang);
			applyLang(pageLang);
		} else {
			applyLang(localStorage.getItem(LANG_KEY) || "ru");
		}
		document.documentElement.style.visibility = "";

		var btn = document.getElementById("langToggle");
		if (!btn) return;

		if (otherUrl) {
			/* Переключение языка — это переход по адресу, а не подмена текста:
			   так выбранный язык виден в ссылке и доступен поисковым системам. */
			btn.addEventListener("click", function () {
				localStorage.setItem(LANG_KEY, other);
				window.location.href = otherUrl;
			});
			return;
		}

		/* Страницы без английской версии (блог, юридические документы)
		   переключаются по-старому, в браузере. */
		btn.addEventListener("click", function () {
			var current = localStorage.getItem(LANG_KEY) || "ru";
			var next = current === "ru" ? "en" : "ru";
			localStorage.setItem(LANG_KEY, next);
			applyLang(next);
		});
	});
})();
