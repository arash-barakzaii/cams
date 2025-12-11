import type { APIRoute } from 'astro';
import { services } from '../data/services';

const staticRoutes = ['/', '/leistungen', '/projekte', '/ueber-uns', '/kontakt'];

export const GET: APIRoute = ({ site }) => {
	const base = site ?? new URL('http://localhost:4321');

	const urls = [
		...staticRoutes,
		...services.map((s) => `/leistungen/${s.slug}`),
	].map((path) => new URL(path, base).toString());

	const body =
		`<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
		urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n') +
		`\n</urlset>\n`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};


