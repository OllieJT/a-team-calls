/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event);
	response.headers.set('X-Frame-Options', 'ALLOWALL');
	response.headers.set('Content-Security-Policy', 'frame-ancestors *;');

	return response;
}
