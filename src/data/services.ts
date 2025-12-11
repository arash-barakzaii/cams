export type Service = {
	slug: string;
	title: string;
	shortDescription: string;
	iconKey: 'tree' | 'building' | 'document' | 'measurement' | 'consulting';
	bullets: string[];
	audienceTags?: Array<'Kommunen' | 'Unternehmen' | 'Privat'>;
	processSteps?: string[];
	ctaLabel?: string;
};

export const services: Service[] = [
	{
		slug: 'baumgutachten',
		title: 'Baumgutachten',
		iconKey: 'tree',
		shortDescription:
			'Prüfung von Standsicherheit und Verkehrssicherheit inkl. Dokumentation nach aktuellen Richtlinien.',
		audienceTags: ['Kommunen', 'Unternehmen', 'Privat'],
		bullets: [
			'Regelmäßige Baumkontrollen',
			'Gutachten nach Sturm- oder Unwetterschäden',
			'Dokumentation für Versicherungen und Behörden'
		],
		processSteps: ['Anfrage & Zielklärung', 'Vor-Ort Termin', 'Analyse & Gutachten', 'Übergabe & Besprechung'],
		ctaLabel: 'Angebot anfordern'
	},
	{
		slug: 'bauberatung',
		title: 'Bauberatung',
		iconKey: 'consulting',
		shortDescription:
			'Technische Beratung für Planung, Ausschreibung und Ausführung – nachvollziehbar, unabhängig, lösungsorientiert.',
		audienceTags: ['Kommunen', 'Unternehmen'],
		bullets: [
			'Begleitung von Ausschreibung und Vergabe',
			'Qualitätssicherung während der Ausführung',
			'Klärung technischer Fragestellungen'
		],
		processSteps: ['Briefing', 'Sichtung Unterlagen', 'Beratung / Vor-Ort', 'Dokumentation & Empfehlung'],
		ctaLabel: 'Beratung anfragen'
	},
	{
		slug: 'dokumentation',
		title: 'Dokumentation',
		iconKey: 'document',
		shortDescription:
			'Saubere Dokumentation als Entscheidungsgrundlage – strukturiert, prüfbar und für Dritte verständlich.',
		audienceTags: ['Kommunen', 'Unternehmen'],
		bullets: ['Fotodokumentation', 'Mess- und Prüfergebnisse', 'Zusammenfassung & Maßnahmenempfehlung'],
		ctaLabel: 'Kontakt aufnehmen'
	}
];


