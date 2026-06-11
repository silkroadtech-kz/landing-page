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
			en: "We build products around your business processes",
		},
		"hero.desc": {
			ru: "Быстро. Качественно. Недорого.",
			en: "Fast. High-quality. Affordable.",
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
		"how.question": {
			ru: "Как мы работаем?",
			en: "How do we work?",
		},

		/* ── Services ── */
		"services.lead": {
			ru: '<span class="font-bold text-[#9ac763]">Четыре ключевых направления</span> — гибкий подход: выполняем комплексную цифровую трансформацию или решаем конкретные задачи вашего бизнеса.',
			en: '<span class="font-bold text-[#9ac763]">Four key service areas</span> — flexible approach: we deliver full-scale digital transformation or solve specific challenges for your business.',
		},
		"s1.title": {
			ru: "Разработка ПО",
			en: "Software Development",
		},
		"s1.desc": {
			ru: "Веб и мобильные приложения на заказ, ERP-системы, API-интеграции. С нуля или в существующую инфраструктуру.",
			en: "Custom web and mobile apps, ERP systems, API integrations. From scratch or into existing infrastructure.",
		},
		"s2.title": {
			ru: "ИИ-ассистенты",
			en: "AI Assistants",
		},
		"s2.desc": {
			ru: "Внедряем LLM в реальные рабочие процессы: чат-боты, автоматизация документов, RAG-системы на внутренних данных.",
			en: "We integrate LLMs into real workflows: chatbots, document automation, RAG systems on internal data.",
		},
		"s3.title": {
			ru: "Аналитика &amp; Данные",
			en: "Analytics &amp; Data",
		},
		"s3.desc": {
			ru: "BI-дашборды и обработка данных → в бизнес-решения.",
			en: "BI dashboards and data processing → into business decisions.",
		},
		"s4.title": {
			ru: "Железо &amp; ПО",
			en: "Hardware &amp; Software",
		},
		"s4.desc": {
			ru: "Аппаратно-программная интеграция, IoT-платформы, мониторинг производства, умные склады.",
			en: "Hardware-software integration, IoT platforms, production monitoring, smart warehouses.",
		},

		/* ── Process ── */
		"process.heading": {
			ru: "Прозрачный процесс на каждом шаге: путь к результату по принципу SLC (Simple · Lovable · Complete) с быстрым запуском, итерациями и измеримыми результатами.",
			en: "Transparent process at every step: the path to results following the SLC principle (Simple · Lovable · Complete) with fast launch, iterations, and measurable outcomes.",
		},
		"p1.title": {
			ru: "Технический аудит",
			en: "Technical Audit",
		},
		"p1.desc": {
			ru: "Глубокое погружение в вашу IT-архитектуру. Подписываем NDA до начала работ.",
			en: "Deep dive into your IT architecture. We sign an NDA before starting work.",
		},
		"p2.title": {
			ru: "MVP / Рабочее ядро",
			en: "MVP / Working Core",
		},
		"p2.desc": {
			ru: "Быстро запускаем рабочую версию продукта. Итерации каждые 2 недели с демо и обратной связью.",
			en: "We rapidly launch a working product version. Iterations every 2 weeks with demos and feedback.",
		},
		"p3.title": {
			ru: "Масштабирование",
			en: "Scaling",
		},
		"p3.desc": {
			ru: "Оптимизируем производительность, добавляем новые модули и масштабируем решение под рост бизнеса.",
			en: "We optimize performance, add new modules, and scale the solution for business growth.",
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
		"review.role": {
			ru: "CEO",
			en: "CEO",
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
		"contact.title": {
			ru: "Свяжитесь с нами и получите решение для вашего бизнеса",
			en: "Contact us and get a solution for your business",
		},
		"contact.subtitle": {
			ru: 'Ответим в течение 1 рабочего дня. <span class="font-bold text-[#9ac763]">Первая консультация — бесплатно.</span>',
			en: 'We\'ll respond within 1 business day. <span class="font-bold text-[#9ac763]">First consultation — free.</span>',
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
			ru: "Chief Executive Officer",
			en: "Chief Executive Officer",
		},
		"team.sayat.bio": {
			ru: "5+ лет в продуктовом менеджменте и аналитике данных. Выстраивает продуктовые метрики и стратегии.",
			en: "5+ years in product management and data analytics. Building product metrics and strategies.",
		},
		"team.alnur.role": { ru: "Prod. Engineer", en: "Prod. Engineer" },
		"team.alnur.bio": {
			ru: "Разработка продукта и технологическая интеграция. Фокус на качестве и результате.",
			en: "Product development and technology integration. Focus on quality and results.",
		},
		"team.bakhtiyar.role": { ru: "Tech Lead", en: "Tech Lead" },
		"team.bakhtiyar.bio": {
			ru: "6+ лет в full-stack разработке, микросервисной архитектуре и DevOps-практиках.",
			en: "6+ years in full-stack development, microservices architecture, and DevOps practices.",
		},
		"team.bekarys.role": { ru: "Prod. Engineer", en: "Prod. Engineer" },
		"team.bekarys.bio": {
			ru: "Продакт-инженер. Техническая реализация продуктовых решений.",
			en: "Product engineer. Technical delivery of product solutions.",
		},
		"team.rassul.role": { ru: "Prod. Engineer", en: "Prod. Engineer" },
		"team.rassul.bio": {
			ru: "Что то",
			en: "Что то",
		},

		/* ── Cases page ── */
		"cases.hero.title": {
			ru: "Кейсы",
			en: "Case Studies",
		},
		"cases.hero.desc": {
			ru: "Мы помогли локальным и международным компаниям решить их сложнейшие технологические задачи — через кастомные ERP-внедрения и интеллектуальные системы управления.",
			en: "We have helped local and international companies solve their most complex technological challenges through custom ERP implementations and intelligent management systems.",
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
		"cases.petromind.title": {
			ru: "ERP-модуль интеллектуального управления человеческим капиталом",
			en: "ERP module for intelligent human capital management",
		},
		"cases.petromind.desc": {
			ru: "ИИ-экспертная система для нефтегазового сектора, внедрённая во все подразделения компании.",
			en: "AI expert system for the oil and gas sector, deployed across every department of the company.",
		},
		"cases.petromind.b1": {
			ru: "Автоматизированный онбординг новых сотрудников",
			en: "Automated onboarding for new employees",
		},
		"cases.petromind.b2": {
			ru: "BI-аналитика и отчётность для C-level",
			en: "BI analytics and reporting for C-level",
		},

		/* ── Cases — SmartLab ── */
		"cases.smartlab.title": {
			ru: "Централизованное ядро управления документами",
			en: "Centralized document management core",
		},
		"cases.smartlab.desc": {
			ru: "Система электронного документооборота, адаптированная под бизнес-процессы крупных предприятий.",
			en: "Electronic document management system tailored to the business processes of large enterprises.",
		},
		"cases.smartlab.b1": {
			ru: "Интеграция уровня enterprise",
			en: "Enterprise-standard integration",
		},
		"cases.smartlab.b2": {
			ru: "Бизнес-процессы для крупных холдингов",
			en: "Business processes for large holding companies",
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

		/* ── Academy ── */
		"nav.academy": { ru: "Академия", en: "Academy" },
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

	document.addEventListener("DOMContentLoaded", function () {
		var lang = localStorage.getItem(LANG_KEY) || "ru";
		applyLang(lang);
		document.documentElement.style.visibility = "";

		var btn = document.getElementById("langToggle");
		if (btn) {
			btn.addEventListener("click", function () {
				var current = localStorage.getItem(LANG_KEY) || "ru";
				var next = current === "ru" ? "en" : "ru";
				localStorage.setItem(LANG_KEY, next);
				applyLang(next);
			});
		}
	});
})();
