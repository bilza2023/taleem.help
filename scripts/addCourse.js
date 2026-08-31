// /home/bilal-tariq/00--TALEEM/taleem.studio/scripts/createCourse.js

import kernel from 'taleem-kernel';

async function main() {
	const course = await kernel.course.create({
		slug: 'fbise7math',
		title: 'Class 7th Math (FBISE)',
		description: 'Class 7th Math (FBISE)',
		access: 'MEMBERS',      // OPEN | MEMBERS | SUBSCRIPTION
		isActive: true,
		thumbnail: 'taleem.webp'
	});

	console.log('Created:', course.slug);
}

main()
	.catch(console.error)
	.finally(() => kernel.shutdown());