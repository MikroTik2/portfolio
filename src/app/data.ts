type Project = {
	name: string
	description: string
	link: string
	video: string
	id: string
}

type WorkExperience = {
	company: string
	title: string
	start: string
	end: string
	link: string
	id: string
}

type BlogPost = {
	title: string
	description: string
	link: string
	uid: string
}

type SocialLink = {
	label: string
	link: string
}

export const PROJECTS: Project[] = [
	{
		name: 'NestJS Monobank',
		description:
			'Інтеграція з Monobank API для роботи з платежами.',
		link: 'https://nestjs-monobank.vercel.app',
		video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
		id: 'project1'
	},
	{
		name: 'Template Admin',
		description:
			'Адмінка на Next.js + shadcn/ui: таблиці, графи, теми.',
		link: 'https://nuxt-shadcn-dashboard-starter.vercel.app',
		video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
		id: 'project2'
	}
]

export const WORK_EXPERIENCE: WorkExperience[] = [
	{
		company: 'Фітнес-студія (фріланс)',
		title: 'Fullstack-розробник',
		start: '2024',
		end: 'дотепер',
		link: '/',
		id: 'work1'
	},
	{
		company: 'Open Source / Фріланс',
		title: 'Фронтенд-розробник',
		start: '2023',
		end: '2024',
		link: '/',
		id: 'work2'
	},
	{
		company: 'Фриланс',
		title: 'Фронтенд-розробник',
		start: '2021',
		end: '2023',
		link: '/',
		id: 'work3'
	}
]

export const BLOG_POSTS: BlogPost[] = [
	{
		title: 'Husky, Lint-Staged та Commitlint для Next.js',
		description:
			'Як налаштувати Husky, lint-staged і commitlint у Next.js-проєкті.',
		link: '/blog/husky-eslint-prettier-setup-guide',
		uid: 'blog-1'
	},
	{
		title: 'Відправка email через BullMQ: черги без стресу',
		description:
			'Як організувати фонову відправку email у Nest.js за допомогою BullMQ.',
		link: '/blog/email-sending-with-bullmq',
		uid: 'blog-6'
	}
]

export const SOCIAL_LINKS: SocialLink[] = [
	{
		label: 'Github',
		link: 'https://github.com/MikroTik2'
	},
	{
		label: 'LinkedIn',
		link: 'https://www.linkedin.com/in/artur-docenko-0a3a722a1'
	},
	{
		label: 'Instagram',
		link: 'https://www.instagram.com/artur.docenko'
	}
]

export const EMAIL = 'dotsenk20034@gmail.com'
