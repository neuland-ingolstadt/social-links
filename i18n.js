(function () {
	var messages = {
		de: {
			"meta.title": "Neuland Ingolstadt — Links",
			"meta.description":
				"Offizielle Links von Neuland Ingolstadt e.V. — Website, Instagram, LinkedIn, GitHub und mehr.",
			"profile.title": "Alle Links",
			"link.join": "Mitglied werden",
			"link.email": "E-Mail",
			"footer.nav": "Rechtliches",
			"footer.imprint": "Impressum",
			"footer.privacy": "Datenschutz",
			"theme.system": "System-Design",
			"theme.light": "Helles Design",
			"theme.dark": "Dunkles Design",
			"website.href": "https://neuland-ingolstadt.de/de",
		},
		en: {
			"meta.title": "Neuland Ingolstadt — Links",
			"meta.description":
				"Official links from Neuland Ingolstadt e.V. — website, Instagram, LinkedIn, GitHub, and more.",
			"profile.title": "All Links",
			"link.join": "Become a member",
			"link.email": "Email",
			"footer.nav": "Legal",
			"footer.imprint": "Legal notice",
			"footer.privacy": "Privacy",
			"theme.system": "System theme",
			"theme.light": "Light theme",
			"theme.dark": "Dark theme",
			"website.href": "https://neuland-ingolstadt.de/en",
		},
	};

	function detectLocale() {
		var list =
			navigator.languages && navigator.languages.length
				? navigator.languages
				: [navigator.language || "de"];

		for (var i = 0; i < list.length; i++) {
			var code = String(list[i] || "").toLowerCase();
			if (code.indexOf("de") === 0) {
				return "de";
			}
			if (code.indexOf("en") === 0) {
				return "en";
			}
		}

		return "de";
	}

	var locale = detectLocale();
	var dict = messages[locale] || messages.de;

	document.documentElement.lang = locale;
	window.NEULAND_I18N = {
		locale: locale,
		t: function (key) {
			return dict[key] || messages.de[key] || key;
		},
	};

	document.title = dict["meta.title"];

	var description = document.querySelector('meta[name="description"]');
	if (description) {
		description.setAttribute("content", dict["meta.description"]);
	}

	document.querySelectorAll("[data-i18n]").forEach(function (el) {
		var key = el.getAttribute("data-i18n");
		if (key && dict[key]) {
			el.textContent = dict[key];
		}
	});

	document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
		var key = el.getAttribute("data-i18n-aria");
		if (key && dict[key]) {
			el.setAttribute("aria-label", dict[key]);
		}
	});

	document.querySelectorAll("[data-i18n-href]").forEach(function (el) {
		var key = el.getAttribute("data-i18n-href");
		if (key && dict[key]) {
			el.setAttribute("href", dict[key]);
		}
	});
})();
