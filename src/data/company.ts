export const company = {
	name: 'CAMS Ingenieure GmbH',
	officeLabel: 'Bauphysik | Energieberatung | Projektsteuerung',
	address: {
		line1: 'Klabundeweg 14',
		postalCode: '22359',
		city: 'Hamburg',
		country: 'Deutschland'
	},
	contact: {
		phonec: '0173 49 47 420',
		phonea: '0157 79 17 4040',
		phoneHref: '+4900000000000',
		email: 'info@cams-ingenieure.de',
		officeHours: 'Mo–Fr 08:30–17:00'
	},
	navigation: {
		main: [
			{ label: 'Startseite', href: '/' },
			{ label: 'Leistungen', href: '/leistungen' },
			{ label: 'Über uns', href: '/ueber-uns' },
			{ label: 'Karriere', href: '/karriere' }
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
		siteName: 'CAMS Ingenieure GmbH',
		defaultDescription: 'Baumgutachten und Bauberatung für Kommunen und Unternehmen.'
	}
} as const;


