export type ProjectCategory = 'Kommunal' | 'Unternehmen' | 'Privat';

export type Project = {
	slug: string;
	title: string;
	location: string;
	year: string;
	summary: string;
	category?: ProjectCategory;
	problem?: string;
	solution?: string;
};

export const projects: Project[] = [
	{
		slug: 'baumkontrollen-stadtpark',
		title: 'Baumkontrollen Stadtpark',
		location: 'Musterstadt',
		year: '2025',
		category: 'Kommunal',
		summary:
			'Umfassende Sichtkontrollen und Dokumentation für einen stark frequentierten Parkbereich als Grundlage für Maßnahmen.',
		problem:
			'Hohe Besucherfrequenz, heterogener Baumbestand und wiederkehrende Witterungsereignisse erfordern klare Priorisierung.',
		solution:
			'Strukturierte Kontrollen, nachvollziehbare Einstufung und Maßnahmenempfehlungen inkl. Fotodokumentation.'
	},
	{
		slug: 'baubegleitung-gewerbehalle',
		title: 'Baubegleitung Gewerbehalle',
		location: 'Beispielort',
		year: '2024',
		category: 'Unternehmen',
		summary:
			'Technische Begleitung während der Ausführung zur Qualitätssicherung und zur Minimierung von Risiken im Ablauf.',
		problem: 'Koordination mehrerer Gewerke bei engem Zeitplan.',
		solution: 'Regelmäßige Begehungen, Protokolle, Klärung technischer Details und abgestimmte Handlungsempfehlungen.'
	},
	{
		slug: 'sturmereignis-gutachten',
		title: 'Gutachten nach Sturmereignis',
		location: 'Region Beispiel',
		year: '2023',
		category: 'Privat',
		summary:
			'Kurzfristige Bewertung von Schäden und Verkehrssicherheit mit Dokumentation für Versicherung und weitere Schritte.'
	}
];




