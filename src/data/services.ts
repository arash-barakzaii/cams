export type BulletItem = 
	| string  // Einfacher Text
	| {       // Mit Unterpunkten
			title: string;
			subItems?: string[];
};

export type Service = {
	slug: string;
	title: string;
	shortDescription: string;
	description?: string; // ← NEU: Längerer Beschreibungstext
	iconKey: 'tree' | 'building' | 'document' | 'measurement' | 'consulting';
	bullets: BulletItem[];
	audienceTags?: Array<'Kommunen' | 'Unternehmen' | 'Privat'>;
	processSteps?: string[];
	ctaLabel?: string;
};

export const services: Service[] = [
	{
		slug: 'Thermische Bauphysik',
		title: 'Thermische Bauphysik',
		iconKey: 'tree',
		shortDescription:
			'Sichere Wärme-, Feuchte- und Lüftungskonzepte auf Basis belastbarer Nachweise. Wir betrachten Gebäudehülle und Nutzung ganzheitlich – vom Detail bis zum Gesamtsystem.',
		description: 'Thermische Bauphysik ist die Basis für energieeffiziente und schadensfreie Gebäude. Wir betrachten die Gebäudehülle als technisches System und bewerten, wie Wärmefluss, Oberflächentemperaturen und Feuchteverhalten zusammenwirken.',
		audienceTags: ['Kommunen', 'Unternehmen', 'Privat'],
		bullets: [
			'Beratungen in allen Leistungsphasen der HOAI',
			'Wärmeschutznachweis nach GEG für Wohngebäude',
			{
				title: 'Sommerlicher Wärmeschutz nach DIN 4108-2',
				subItems: [
					'Vereinfachtes Verfahren ',
					'Thermische Simulation'
				]
			},
			{
				title: 'Wärmebrücken und Detailsoptimierung',
				subItems: [
					'Detaillierter Wärmebrückennachweis',
					'Gleichwertigkeitsnachweis'
				]
			},
			'Nachweise Feuchteschutz nach DIN 4108-3',
			'Lüftungskonzepte für Wohnungen nach DIN 1946-6',
			'Heizlastberechnung',
			'Hydraulischer Abgleich'
		],
		processSteps: ['Anfrage & Zielklärung', 'Vor-Ort Termin', 'Analyse & Gutachten', 'Übergabe & Besprechung'],
		ctaLabel: 'Angebot anfordern'
	},
	{
		slug: 'Schallschutz und Raumakustik',
		title: 'Schallschutz und Raumakustik',
		iconKey: 'consulting',
		shortDescription:
			'Schallschutz und Raumakustik für Komfort, Normsicherheit und Planungssicherheit.',
		description: 'Schallschutz ist ein wesentlicher Bestandteil von Wohn- und Aufenthaltsqualität. Wir unterstützen bei der schalltechnischen Bewertung von Konstruktionen und Nachweisen, insbesondere dort, wo im Detail die größten Risiken liegen.',
		audienceTags: ['Kommunen', 'Unternehmen'],
		bullets: [
			'Beratungen in allen Leistungsphasen der HOAI',
			'Schallschutznachweise nach DIN 4109 / VDI 4100',
			'Berechnungen der maßgeblichen Außenlärmpegel und Bestimmung der Lärmpegelbereiche'
		],
		processSteps: ['Briefing', 'Sichtung Unterlagen', 'Beratung / Vor-Ort', 'Dokumentation & Empfehlung'],
		ctaLabel: 'Beratung anfragen'
	},
	{
		slug: 'Energieberatung Wohngebäude (Neubau und Bestand)',
		title: 'Energieberatung Wohngebäude (Neubau und Bestand)',
		iconKey: 'document',
		shortDescription:
			'Transparente Energieberatung für Neubau und Bestand – von Energieausweis bis iSFP. Wir entwickeln sinnvolle Maßnahmen und begleiten Fördermittel und Umsetzung.',
		description: 'Wir erfassen den energetischen Zustand, entwickeln Varianten und zeigen transparent auf, welche Maßnahmen technisch und wirtschaftlich sinnvoll sind und welche Wirkung realistisch zu erwarten ist.',
		audienceTags: ['Kommunen', 'Unternehmen'],
		bullets: [
			{
				title: 'Erstellung von Energieausweisen für Neubau und Bestand',
				subItems: [
					'Bedarfsausweis ',
					'Verbrauchsausweis '
				]
			},
			'Individueller Sanierungsfahrplan (iSFP)',
			'Fördermittelberatung und Antragstellung ',
			'Energetische Baubegleitung und Qualitätssicherung'
		],
		ctaLabel: 'Kontakt aufnehmen'
	},
	{
		slug: 'Projektsteuerung und Objektüberwachung',
		title: 'Projektsteuerung und Objektüberwachung',
		iconKey: 'document',
		shortDescription:
			'Projektsteuerung und Bauüberwachung für technisch saubere Ausführung.',
		description: 'Wir steuern und überwachen Ihr Bauvorhaben mit klarem Fokus auf Termine, Kosten und Qualität, von der Planungsschnittstelle bis zur Ausführung auf der Baustelle. Dabei sorgen wir für saubere Koordination aller Beteiligten, prüfen die Umsetzung an den entscheidenden Stellen und halten Entscheidungen sowie Mängel konsequent nach.',
		audienceTags: ['Kommunen', 'Unternehmen'],
		bullets: ['Leistungen nach HOAI, Schwerpunkt in LPH8', 'Leistungen nach AHO für Projektleitung und -steuerung', 'Bauüberwachung', 'Nachtragsmanagement', 'Terminplanungen', 'Schnittstellenmanagement','Planprüfungen', 'Vergabemanagement'],
		ctaLabel: 'Kontakt aufnehmen'
	},
	{
		slug: 'Gutachten und weitere Nachweise',
		title: 'Gutachten und weitere Nachweise',
		iconKey: 'document',
		shortDescription:
			'Unabhängige Gutachten und technische Nachweise bei Bauschäden und Sonderfragen.',
		description: 'Wir erstellen Gutachten insbesondere bei Feuchte- und Schimmelthemen, Bauschäden, konstruktiven Fragestellungen im Bestand sowie bei technischen Bewertungen, die eine klare Entscheidungsgrundlage erfordern.',
		audienceTags: ['Kommunen', 'Unternehmen'],
		bullets: ['Bautechnische Beweissicherungen an baulichen Anlagen und Ingenieurbauten', 'Gutachten für allgemeine Bauschäden ', 'Gutachten für Bauwerksabdichtungen', 'Gutachten für Schimmel- und Feuchteschutz', 'Luftdichtheitsnachweis und Blower-Door-Messung', 'Thermografie'],
		ctaLabel: 'Kontakt aufnehmen'
	}
];




