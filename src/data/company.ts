export const company = {
	name: 'CAMS Ingenieurgesellschaft',
	officeLabel: 'Ingenieurbüro für Bauingenieurwesen',
	address: {
		line1: 'Adresse folgt',
		postalCode: '00000',
		city: 'Ort',
		country: 'Deutschland'
	},
	contact: {
		phone: '+49 0000 000000',
		phoneHref: '+4900000000000',
		email: 'info@example.de',
		officeHours: 'Mo–Fr 08:00–17:00'
	},
	navigation: {
		main: [
			{ label: 'Startseite', href: '/' },
			{ label: 'Leistungen', href: '/leistungen' },
			{ label: 'Projekte', href: '/projekte' },
			{ label: 'Über uns', href: '/ueber-uns' }
		],
		cta: { label: 'Kontakt', href: '/kontakt' }
	},
	legal: {
		showLinks: true,
		items: [
			{ label: 'Impressum', href: '/impressum' },
			{ label: 'Datenschutz', href: '/datenschutz' }
		]
	},
	seo: {
		siteName: 'CAMS Ingenieurgesellschaft',
		defaultDescription: 'Baumgutachten und Bauberatung für Kommunen und Unternehmen.'
	}
} as const;


