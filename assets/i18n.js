(function () {
  var LANG_KEY = 'srt_lang';

  var translations = {
    /* ── Navigation ── */
    'nav.services': {
      ru: 'Услуги',
      en: 'Services'
    },
    'nav.process': {
      ru: 'Процесс',
      en: 'Process'
    },
    'nav.cases': {
      ru: 'Кейсы',
      en: 'Cases'
    },
    'nav.about': {
      ru: 'О нас',
      en: 'About'
    },
    'nav.partners': {
      ru: 'Партнёры',
      en: 'Partners'
    },
    'nav.contacts': {
      ru: 'Контакты',
      en: 'Contacts'
    },
    'nav.cta': {
      ru: 'Обсудить проект',
      en: 'Discuss project'
    },
    'nav.faq': {
      ru: 'FAQ',
      en: 'FAQ'
    },

    /* ── Hero ── */
    'hero.title': {
      ru: '<span class="text-gradient-green">Разработка ПО</span>,<br />Аналитика<br />&amp; Интеграция ИИ',
      en: '<span class="text-gradient-green">Software Development</span>,<br />Analytics<br />&amp; AI Integration'
    },
    'hero.desc': {
      ru: 'Мы создаём цифровые продукты и автоматизируем бизнес-процессы — от ERP-систем до ИИ-ассистентов для вашей команды.',
      en: 'We build digital products and automate business processes — from ERP systems to AI assistants for your team.'
    },
    'hero.cta': {
      ru: 'Обсудить проект',
      en: 'Discuss project'
    },
    'hero.cases': {
      ru: 'Смотреть кейсы',
      en: 'View case studies'
    },
    'hero.stat.label': {
      ru: 'Год на рынке',
      en: 'Years on the market'
    },
    'hero.tagline': {
      ru: 'Результаты говорят сами за себя',
      en: 'Results speak for themselves'
    },
    'hero.growth.title': {
      ru: 'Ваш бизнес растёт —<br /><span class="text-gradient-green-2">технологии не отстают</span>',
      en: 'Your business grows —<br /><span class="text-gradient-green-2">technology keeps up</span>'
    },

    /* ── How we work ── */
    'how.title': {
      ru: 'От задачи к результату',
      en: 'From task to result'
    },
    'how.desc': {
      ru: 'Мы реализуем полный цикл технологической трансформации бизнеса: от проектирования сложных программных систем и глубокой аналитики данных до бесшовной интеграции оборудования и умных ИИ-ассистентов для автоматизации процессов.',
      en: 'We implement a full cycle of technological transformation for your business: from designing complex software systems and deep data analytics to seamless hardware integration and smart AI assistants for process automation.'
    },
    'how.projects': {
      ru: 'Завершённых проектов',
      en: 'Completed projects'
    },
    'how.question': {
      ru: 'Как мы работаем?',
      en: 'How do we work?'
    },

    /* ── Services ── */
    'services.lead': {
      ru: '<span class="font-bold text-[#9ac763]">Четыре ключевых направления</span> — гибкий подход: выполняем комплексную цифровую трансформацию или решаем конкретные задачи вашего бизнеса.',
      en: '<span class="font-bold text-[#9ac763]">Four key service areas</span> — flexible approach: we deliver full-scale digital transformation or solve specific challenges for your business.'
    },
    's1.title': {
      ru: 'Разработка ПО',
      en: 'Software Development'
    },
    's1.desc': {
      ru: 'Веб и мобильные приложения на заказ, ERP-системы, API-интеграции. С нуля или в существующую инфраструктуру.',
      en: 'Custom web and mobile apps, ERP systems, API integrations. From scratch or into existing infrastructure.'
    },
    's2.title': {
      ru: 'ИИ-ассистенты',
      en: 'AI Assistants'
    },
    's2.desc': {
      ru: 'Внедряем LLM в реальные рабочие процессы: чат-боты, автоматизация документов, RAG-системы на внутренних данных.',
      en: 'We integrate LLMs into real workflows: chatbots, document automation, RAG systems on internal data.'
    },
    's3.title': {
      ru: 'Аналитика &amp; Данные',
      en: 'Analytics &amp; Data'
    },
    's3.desc': {
      ru: 'BI-дашборды и обработка данных → в бизнес-решения.',
      en: 'BI dashboards and data processing → into business decisions.'
    },
    's4.title': {
      ru: 'Железо &amp; ПО',
      en: 'Hardware &amp; Software'
    },
    's4.desc': {
      ru: 'Аппаратно-программная интеграция, IoT-платформы, мониторинг производства, умные склады.',
      en: 'Hardware-software integration, IoT platforms, production monitoring, smart warehouses.'
    },

    /* ── Process ── */
    'process.heading': {
      ru: 'Прозрачный процесс на каждом шаге: путь к результату по принципу SLC (Simple · Lovable · Complete) с быстрым запуском, итерациями и измеримыми результатами.',
      en: 'Transparent process at every step: the path to results following the SLC principle (Simple · Lovable · Complete) with fast launch, iterations, and measurable outcomes.'
    },
    'p1.title': {
      ru: 'Технический аудит',
      en: 'Technical Audit'
    },
    'p1.desc': {
      ru: 'Глубокое погружение в вашу IT-архитектуру. Подписываем NDA до начала работ.',
      en: 'Deep dive into your IT architecture. We sign an NDA before starting work.'
    },
    'p2.title': {
      ru: 'MVP / Рабочее ядро',
      en: 'MVP / Working Core'
    },
    'p2.desc': {
      ru: 'Быстро запускаем рабочую версию продукта. Итерации каждые 2 недели с демо и обратной связью.',
      en: 'We rapidly launch a working product version. Iterations every 2 weeks with demos and feedback.'
    },
    'p3.title': {
      ru: 'Масштабирование',
      en: 'Scaling'
    },
    'p3.desc': {
      ru: 'Оптимизируем производительность, добавляем новые модули и масштабируем решение под рост бизнеса.',
      en: 'We optimize performance, add new modules, and scale the solution for business growth.'
    },

    /* ── Review ── */
    'review.quote': {
      ru: '«Они тщательно изучают нашу отрасль и целевую аудиторию, что позволяет создавать точечные кампании, эффективно достигающие клиентов. Их творческие идеи и современные методы помогли нам оставаться впереди конкурентов»',
      en: '"They thoroughly analyze our industry and target audience, allowing them to develop tailored campaigns that effectively reach and engage our customers. Their creative ideas and advanced methods have helped us stay ahead of the competition"'
    },
    'review.name': {
      ru: 'Андрей',
      en: 'Andrey'
    },
    'review.role': {
      ru: 'Генеральный директор',
      en: 'CEO'
    },

    /* ── FAQ ── */
    'faq.title': {
      ru: 'Частые вопросы',
      en: 'FAQs'
    },
    'faq.subtitle': {
      ru: 'Ответы на вопросы, которые чаще всего задают перед первым звонком',
      en: 'Answers to the questions most often asked before the first call'
    },
    'faq.ask': {
      ru: 'Задать вопрос',
      en: 'Ask a question'
    },
    'faq.tg': {
      ru: 'Написать в Telegram',
      en: 'Message on Telegram'
    },
    'faq.q1': {
      ru: 'Как быстро вы начнёте работу?',
      en: 'How quickly will you start?'
    },
    'faq.a1': {
      ru: 'После подписания договора — в течение 1 недели. Первое рабочее демо покажем через 2 недели после старта.',
      en: 'After signing the contract — within 1 week. We show the first working demo 2 weeks after kickoff.'
    },
    'faq.q2': {
      ru: 'Сколько стоит разработка?',
      en: 'How much does development cost?'
    },
    'faq.a2': {
      ru: 'Стоимость зависит от объёма и сложности. Базовые проекты — от $5 000.',
      en: 'Cost depends on scope and complexity. Basic projects start from $5,000.'
    },
    'faq.q3': {
      ru: 'Вы работаете удалённо или только в Астане?',
      en: 'Do you work remotely or only in Astana?'
    },
    'faq.a3': {
      ru: 'Работаем удалённо по всему миру и очно в Астане.',
      en: 'We work remotely worldwide and in-person in Astana.'
    },
    'faq.q4': {
      ru: 'Вы оказываете поддержку после запуска?',
      en: 'Do you provide support after launch?'
    },
    'faq.a4': {
      ru: 'Да, предлагаем SLA-поддержку и дальнейшее развитие продукта.',
      en: 'Yes, we offer SLA support and ongoing product development.'
    },
    'faq.q5': {
      ru: 'Вы берёте небольшие проекты?',
      en: 'Do you take small projects?'
    },
    'faq.a5': {
      ru: 'Да, рассматриваем точечные задачи и MVP.',
      en: 'Yes, we consider focused tasks and MVPs.'
    },

    /* ── Contact form ── */
    'contact.title': {
      ru: 'Свяжитесь с нами и получите решение для вашего бизнеса',
      en: 'Contact us and get a solution for your business'
    },
    'contact.subtitle': {
      ru: 'Ответим в течение 1 рабочего дня. <span class="font-bold text-[#9ac763]">Первая консультация — бесплатно.</span>',
      en: 'We\'ll respond within 1 business day. <span class="font-bold text-[#9ac763]">First consultation — free.</span>'
    },
    'contact.fname': {
      ru: 'Имя',
      en: 'First name'
    },
    'contact.fname.ph': {
      ru: 'Ваше имя',
      en: 'Your name'
    },
    'contact.lname': {
      ru: 'Фамилия',
      en: 'Last name'
    },
    'contact.lname.ph': {
      ru: 'Ваша фамилия',
      en: 'Last name'
    },
    'contact.phone': {
      ru: 'Телефон или Telegram',
      en: 'Phone or Telegram'
    },
    'contact.msg': {
      ru: 'Сообщение',
      en: 'Message'
    },
    'contact.msg.ph': {
      ru: 'Напишите комментарий',
      en: 'Write a comment'
    },
    'contact.submit': {
      ru: 'Отправить заявку',
      en: 'Send request'
    },

    /* ── Footer ── */
    'footer.desc': {
      ru: 'Мы предлагаем комплексный IT-аутсорсинг, охватывающий все аспекты вашей цифровой разработки. От проектирования архитектуры и разработки ПО до облачных решений и кибербезопасности — наша команда обладает экспертизой для реализации проектов любой сложности.',
      en: 'We offer a comprehensive IT outsourcing package covering all aspects of your digital development. From architecture design and software development to cloud solutions and cybersecurity — our team has the expertise to handle projects of any complexity.'
    },
    'footer.nav.title': {
      ru: 'Навигация',
      en: 'Navigation'
    },
    'footer.lic.title': {
      ru: 'Документы',
      en: 'Legal'
    },
    'footer.contact.title': {
      ru: 'Контакты',
      en: 'Contacts'
    },
    'footer.privacy': {
      ru: 'Политика конфиденциальности',
      en: 'Privacy Policy'
    },
    'footer.copyright': {
      ru: 'Авторские права',
      en: 'Copyright'
    },
    'footer.email.label': {
      ru: 'Email',
      en: 'Email'
    },
    'footer.resident': {
      ru: 'Резидент',
      en: 'Resident'
    },
    'footer.discuss': {
      ru: 'Обсудить проект',
      en: 'Discuss project'
    },
    'footer.copy': {
      ru: '© 2026 Silk Road Tech. Все права защищены.',
      en: '© 2026 Silk Road Tech. All rights reserved.'
    },
    'footer.made': {
      ru: 'Сделано с заботой в Астане',
      en: 'Made with care in Astana'
    },

    /* ── About page ── */
    'about.hero.title': {
      ru: 'Кто мы?',
      en: 'Who are we?'
    },
    'about.tab.company': {
      ru: 'О компании',
      en: 'About the Company'
    },
    'about.tab.mission': {
      ru: 'Миссия',
      en: 'Mission'
    },
    'about.company.heading': {
      ru: 'SilkRoadTechnologies — команда инженеров, аналитиков и консультантов с опытом работы в международных IT-компаниях. Мы специализируемся на разработке ПО, интеграции ИИ, аналитике данных и автоматизации бизнес-процессов.',
      en: 'SilkRoadTechnologies is a team of engineers, analysts, and consultants with experience at international IT companies. We specialize in software development, AI integration, data analytics, and business process automation.'
    },
    'about.company.desc': {
      ru: 'В каждом проекте мы глубоко погружаемся в специфику бизнеса клиента, чтобы создавать решения, которые реально работают и дают результат.',
      en: 'In every project we dive deep into the client\'s business specifics to build solutions that genuinely work and deliver results.'
    },
    'about.mission.heading': {
      ru: 'Наша миссия — сделать технологии для бизнеса понятными, практичными и ценными на каждом этапе развития компании.',
      en: 'Our mission is to make technology for business clear, practical, and valuable at every stage of a company\'s growth.'
    },
    'about.mission.desc': {
      ru: 'Мы создаём решения, которые помогают командам быстрее запускать продукты, автоматизировать рутину, лучше работать с данными и внедрять ИИ там, где это даёт реальный эффект, а не просто красивое демо.',
      en: 'We build solutions that help teams launch products faster, automate routine tasks, work better with data, and adopt AI where it delivers real impact — not just a polished demo.'
    },
    'about.team.title': {
      ru: 'Команда',
      en: 'Team'
    },
    'about.team.desc': {
      ru: 'Наша команда обладает обширным опытом в разработке ПО, аналитике данных, интеграции ИИ и создании цифровых продуктов.',
      en: 'Our team brings extensive experience in software engineering, data analytics, AI integration, and digital product development.'
    },
    'about.board.title': {
      ru: 'Advisory Board',
      en: 'Advisory Board'
    },

    /* ── Team cards ── */
    'team.sayat.role': { ru: 'Генеральный директор', en: 'Chief Executive Officer' },
    'team.sayat.bio':  { ru: '5+ лет в продуктовом менеджменте и аналитике данных. Выстраивает продуктовые метрики и стратегии.', en: '5+ years in product management and data analytics. Building product metrics and strategies.' },
    'team.alnur.role': { ru: 'Инженер по продукту', en: 'Prod. Engineer' },
    'team.alnur.bio':  { ru: 'Разработка продукта и технологическая интеграция. Фокус на качестве и результате.', en: 'Product development and technology integration. Focus on quality and results.' },
    'team.bakhtiyar.role': { ru: 'Технический лид', en: 'Tech Lead' },
    'team.bakhtiyar.bio':  { ru: '6+ лет в full-stack разработке, микросервисной архитектуре и DevOps-практиках.', en: '6+ years in full-stack development, microservices architecture, and DevOps practices.' },
    'team.bekarys.role': { ru: 'Инженер по продукту', en: 'Prod. Engineer' },
    'team.bekarys.bio':  { ru: '4+ года в продуктовой инженерии. Техническая реализация продуктовых решений.', en: '4+ years in product engineering. Technical delivery of product solutions.' },

    /* ── Cases page ── */
    'cases.hero.title': {
      ru: 'Кейсы',
      en: 'Case Studies'
    },
    'cases.hero.desc': {
      ru: 'Мы помогли локальным и международным компаниям решить их сложнейшие технологические задачи — через кастомные ERP-внедрения и интеллектуальные системы управления.',
      en: 'We have helped local and international companies solve their most complex technological challenges through custom ERP implementations and intelligent management systems.'
    },

    /* ── Cases — Orkenlink ── */
    'cases.orkenlink.title': {
      ru: 'LinkedIn для студентов — платформа поиска карьерных возможностей',
      en: 'LinkedIn for students — a career opportunities platform'
    },
    'cases.orkenlink.desc': {
      ru: 'Система управления внешним кадровым пулом. Масштабируемая платформа для отслеживания ресурсов и подбора кандидатов.',
      en: 'External talent pool management system. Scalable platform for resource tracking and matching.'
    },

    /* ── Cases — AIVA ── */
    'cases.aiva.title': {
      ru: 'ИИ-автоматизация продаж для строительной компании',
      en: 'AI-powered sales automation for a construction company'
    },
    'cases.aiva.desc': {
      ru: 'Развернули ботов на всех этапах воронки, повысили конверсию посещаемости на 30% и снизили затраты на колл-центр. ИИ-мониторинг эффективности операторов и отчётность.',
      en: 'Deployed bots across all funnel stages, improved attendance conversion by 30%, and reduced call center costs. AI-based operator performance monitoring and reporting.'
    },

    /* ── Cases — PetroMindAI ── */
    'cases.petromind.title': {
      ru: 'ERP-модуль интеллектуального управления человеческим капиталом',
      en: 'ERP module for intelligent human capital management'
    },
    'cases.petromind.desc': {
      ru: 'ИИ-экспертная система для нефтегазового сектора, внедрённая во все подразделения компании.',
      en: 'AI expert system for the oil and gas sector, deployed across every department of the company.'
    },

    /* ── Cases — SmartLab ── */
    'cases.smartlab.title': {
      ru: 'Централизованное ядро управления документами',
      en: 'Centralized document management core'
    },
    'cases.smartlab.desc': {
      ru: 'Система электронного документооборота, адаптированная под бизнес-процессы крупных предприятий.',
      en: 'Electronic document management system tailored to the business processes of large enterprises.'
    },

    /* ── Cases — ContentFlow ── */
    'cases.contentflow.title': {
      ru: 'ИИ-платформа генерации контента для социальных сетей',
      en: 'AI content generation platform for social media'
    },
    'cases.contentflow.desc': {
      ru: 'Генерирует посты для Telegram, Instagram, LinkedIn и TikTok из текста или голоса. Обучение фирменному стилю, автопубликация и аналитика конкурентов.',
      en: 'Generates posts for Telegram, Instagram, LinkedIn, and TikTok from text or voice. Brand style training, auto-publishing, and competitor analytics.'
    },

    /* ── Cases — KZ-Provider ── */
    'cases.kzprovider.title': {
      ru: 'Корпоративный сайт поставщика промышленных гидравлических компонентов',
      en: 'Corporate website for an industrial hydraulic components supplier'
    },
    'cases.kzprovider.desc': {
      ru: 'Разработка веб-платформы для ТОО «KZ-PROVIDER» — поставщика гидравлических и пневматических компонентов для горнодобывающего и промышленного секторов Казахстана.',
      en: 'Web platform development for KZ-PROVIDER LLC — a supplier of hydraulic and pneumatic components for the mining and industrial sectors of Kazakhstan.'
    },

    /* ── Privacy page ── */
    'privacy.back': {
      ru: 'На главную',
      en: 'Back to home'
    },
    'privacy.title': {
      ru: 'Политика конфиденциальности',
      en: 'Privacy Policy'
    },
    'privacy.p1': {
      ru: 'Silk Road Tech уважает конфиденциальность посетителей сайта и обрабатывает только те данные, которые пользователь добровольно предоставляет через контактную форму или каналы связи компании.',
      en: 'Silk Road Tech respects the privacy of website visitors and only processes data that a user voluntarily submits through the contact form or the company\'s communication channels.'
    },
    'privacy.p2': {
      ru: 'Мы можем собирать ваше имя, фамилию, номер телефона, имя пользователя Telegram, адрес электронной почты и содержание сообщения. Эти данные используются исключительно для ответа на ваш запрос, оценки проекта и дальнейшей деловой коммуникации.',
      en: 'We may collect your first name, last name, phone number, Telegram username, email address, and message content. This data is used solely to respond to your inquiry, assess the project, and conduct further business communication.'
    },
    'privacy.p3': {
      ru: 'Мы не продаём и не передаём персональные данные третьим лицам, за исключением сервисов, используемых для обработки запросов и обеспечения связи, — например, Formspree или корпоративная почта.',
      en: 'We do not sell or share personal data with third parties, except for services used to process inquiries and support communication operations, such as Formspree or corporate email.'
    },
    'privacy.p4': {
      ru: 'Если вы хотите просмотреть, обновить или удалить ранее отправленные данные, напишите на',
      en: 'If you wish to review, update, or delete previously submitted data, please write to'
    },
    'privacy.p5': {
      ru: 'Продолжая использовать сайт и отправляя форму, вы соглашаетесь с настоящей политикой конфиденциальности.',
      en: 'By continuing to use the site and submitting the form, you agree to this privacy policy.'
    },
    'privacy.updated': {
      ru: 'Последнее обновление: 10 апреля 2026 г.',
      en: 'Last updated: April 10, 2026'
    },

    /* ── Copyright page ── */
    'copyright.back': {
      ru: 'На главную',
      en: 'Back to home'
    },
    'copyright.title': {
      ru: 'Авторские права',
      en: 'Copyright'
    },
    'copyright.p1': {
      ru: 'Все материалы на этом сайте, включая тексты, визуальные элементы, графику, макеты страниц и торговые марки Silk Road Tech, защищены применимым законодательством об авторском праве и интеллектуальной собственности.',
      en: 'All materials on this website, including texts, visual elements, graphics, page layouts, and Silk Road Tech brand marks, are protected by applicable copyright and intellectual property laws.'
    },
    'copyright.p2': {
      ru: 'Любое копирование, публикация, адаптация или коммерческое использование материалов сайта без письменного разрешения Silk Road Tech запрещены, если явно не указано иное.',
      en: 'Any copying, publishing, adaptation, or commercial use of website materials without written permission from Silk Road Tech is prohibited, unless explicitly stated otherwise.'
    },
    'copyright.p3': {
      ru: 'Если вы считаете, что материал на этом сайте нарушает ваши права, напишите на',
      en: 'If you believe that material on this site infringes your rights, please write to'
    },
    'copyright.p3b': {
      ru: 'с описанием вашей претензии.',
      en: 'with a description of your claim.'
    },
    'copyright.updated': {
      ru: 'Последнее обновление: 10 апреля 2026 г.',
      en: 'Last updated: April 10, 2026'
    }
  };

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        el.innerHTML = translations[key][lang];
      }
    });

    /* innerHTML keys (gradient spans, HTML markup) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (translations[key] && translations[key][lang]) {
        el.innerHTML = translations[key][lang];
      }
    });

    /* placeholder attributes */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (translations[key] && translations[key][lang]) {
        el.placeholder = translations[key][lang];
      }
    });

    /* update toggle button label */
    var btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'ru' ? 'En' : 'Ru';

    /* update html lang attribute */
    document.documentElement.lang = lang;

  }

  document.addEventListener('DOMContentLoaded', function () {
    var lang = localStorage.getItem(LANG_KEY) || 'ru';
    applyLang(lang);

    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem(LANG_KEY) || 'ru';
        var next = current === 'ru' ? 'en' : 'ru';
        localStorage.setItem(LANG_KEY, next);
        applyLang(next);
      });
    }
  });
})();
