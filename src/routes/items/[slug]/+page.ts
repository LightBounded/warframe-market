/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: { slug: string } }) {
	console.log(params.slug);
	return {
		title: 'Hello world!',
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	};
}
