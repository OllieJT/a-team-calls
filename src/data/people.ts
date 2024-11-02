import ben from '$images/ben-burns.jpeg?enhanced';
import jenny from '$images/jenny-famularcano.webp?enhanced';
import lisa from '$images/lisa-town.jpeg?enhanced';
import monte from '$images/monte-atherton.jpeg?enhanced';
import ollie from '$images/oliver-taylor.webp?enhanced';
import stephanie from '$images/stephanie-owens.jpeg?enhanced';
import stephen from '$images/stephen-vosloo.jpeg?enhanced';
import tony from '$images/tony-kimble.jpeg?enhanced';
import xavier from '$images/xavier-ah-hot.jpeg?enhanced';
import zach from '$images/zach-ebert.webp?enhanced';
import { createPerson, type Person } from '$lib/data.create';

/* /?utm_source=accelerator&utm_medium=profile&utm_campaign=share */

export const PERSON = {
	ben: createPerson({
		name: 'Ben Burns',
		image: ben,
		url: 'https://mrbenburns.com',
	}),
	stephanie: createPerson({
		name: 'Stephanie Owens',
		image: stephanie,
		url: 'https://goldsheepdesign.com',
	}),
	lisa: createPerson({
		name: 'Lisa Town',
		image: lisa,
		url: 'https://lisastown.com/',
	}),
	xavier: createPerson({
		name: 'Xavier Ah-Hot',
		image: xavier,
		url: 'https://www.ahhotman.com',
	}),
	stephen: createPerson({
		name: 'Stephen Vosloo',
		image: stephen,
		url: 'https://www.stephenvosloo.com/',
	}),
	tony: createPerson({
		name: 'Tony Kimble',
		image: tony,
		url: 'https://frame83.com/',
	}),
	zach: createPerson({
		name: 'Zach Ebert',
		image: zach,
		url: 'http://ebertdesign.co/',
	}),
	jenny: createPerson({
		name: 'Jenny Famularcano',
		image: jenny,
		url: 'http://skybluejenny.com/',
	}),
	monte: createPerson({
		name: 'Monte Atherton',
		image: monte,
		url: 'https://astonishingwork.com/',
	}),
	ollie: createPerson({
		name: 'Ollie Taylor',
		image: ollie,
		url: 'https://www.designthen.dev',
	}),
} satisfies Record<string, Person>;
