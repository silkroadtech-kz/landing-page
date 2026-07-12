(function () {
	"use strict";

	const header = document.getElementById("siteHeader");
	const menuToggle = document.getElementById("menuToggle");
	const navLinks = document.getElementById("navLinks");

	function closeMenu() {
		if (!menuToggle || !navLinks) return;
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", "Открыть меню");
		navLinks.classList.remove("is-open");
		document.body.classList.remove("menu-open");
	}

	if (menuToggle && navLinks) {
		menuToggle.addEventListener("click", function () {
			const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
			menuToggle.setAttribute("aria-expanded", String(willOpen));
			menuToggle.setAttribute("aria-label", willOpen ? "Закрыть меню" : "Открыть меню");
			navLinks.classList.toggle("is-open", willOpen);
			document.body.classList.toggle("menu-open", willOpen);
		});

		navLinks.querySelectorAll("a").forEach(function (link) {
			link.addEventListener("click", closeMenu);
		});

		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape") {
				closeMenu();
				menuToggle.focus();
			}
		});

		window.addEventListener("resize", function () {
			if (window.innerWidth >= 800) closeMenu();
		});
	}

	if (header) {
		let ticking = false;
		function updateHeader() {
			header.classList.toggle("is-scrolled", window.scrollY > 24);
			ticking = false;
		}

		window.addEventListener(
			"scroll",
			function () {
				if (!ticking) {
					window.requestAnimationFrame(updateHeader);
					ticking = true;
				}
			},
			{ passive: true },
		);
		updateHeader();
	}

	const year = document.getElementById("currentYear");
	if (year) year.textContent = String(new Date().getFullYear());

	const form = document.getElementById("contactForm");
	const submit = document.getElementById("contactSubmit");
	const status = document.getElementById("formStatus");

	if (!form || !submit || !status) return;

	const fields = Array.from(form.querySelectorAll("input[required], textarea[required]"));

	function setFieldState(field) {
		const wrapper = field.closest(".field");
		if (!wrapper) return field.checkValidity();
		const valid = field.checkValidity();
		wrapper.classList.toggle("is-invalid", !valid);
		field.setAttribute("aria-invalid", String(!valid));
		const error = wrapper.querySelector(".field-error");
		if (error) {
			field.setAttribute("aria-describedby", error.id);
		}
		return valid;
	}

	fields.forEach(function (field) {
		field.addEventListener("blur", function () {
			setFieldState(field);
		});
		field.addEventListener("input", function () {
			if (field.closest(".field")?.classList.contains("is-invalid")) {
				setFieldState(field);
			}
		});
	});

	form.addEventListener("submit", async function (event) {
		event.preventDefault();

		const invalidField = fields.find(function (field) {
			return !setFieldState(field);
		});

		if (invalidField) {
			invalidField.focus();
			return;
		}

		const originalLabel = submit.querySelector("span")?.textContent || "Отправить задачу";
		submit.disabled = true;
		submit.setAttribute("aria-busy", "true");
		if (submit.querySelector("span")) submit.querySelector("span").textContent = "Отправляем...";
		status.className = "form-status";
		status.textContent = "";

		try {
			const payload = Object.fromEntries(new FormData(form).entries());
			const response = await fetch(form.action, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) throw new Error("submit_failed");

			form.reset();
			fields.forEach(function (field) {
				field.closest(".field")?.classList.remove("is-invalid");
				field.setAttribute("aria-invalid", "false");
			});
			status.textContent = "Заявка отправлена. Ответим в течение рабочего дня.";
			status.className = "form-status is-visible is-success";
		} catch (error) {
			status.textContent = "Не удалось отправить заявку. Напишите нам на sayat@silkroadtech.kz или в Telegram.";
			status.className = "form-status is-visible is-error";
		} finally {
			submit.disabled = false;
			submit.removeAttribute("aria-busy");
			if (submit.querySelector("span")) submit.querySelector("span").textContent = originalLabel;
		}
	});
})();
