<template>
	<div style="display: flex; flex-direction: row;">
		<div style="display: flex; flex-direction: column; align-items: center; min-width: 13%;">
			<Sider/>
		</div>
		<div class="list-cards">
			<client-only>
			<Card id="about" :title="$t('about.title')" titlePlace="start" class="card">
				<template #content>
					<AboutSection/>
				</template>
			</Card>
			<Card id="skills" :title="$t('skills.title')" titlePlace="start" class="card">
				<template #content>
					<SkillsSection/>
				</template>
			</Card>
			<Card id="projects" :title="$t('projects.title')" titlePlace="start" class="card">
				<template #content>
					<ProjectsSection/>
				</template>
			</Card>
			<Card id="experiences" :title="$t('experiences.title')" titlePlace="start" class="card">
				<template #content>
					<ExperiencesSection/>
				</template>
			</Card>
			<Card id="educations" :title="$t('educations.title')" titlePlace="start" class="card">
				<template #content>
					<EducationsSection/>
				</template>
			</Card>
			<Card id="contacts" title="Contacts" titlePlace="start" class="card">
				<template #content>
					<ContactsSection/>
				</template>
			</Card>
			</client-only>
		</div>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(async() => {
  	window.addEventListener('scroll', handleScroll);
	await nextTick();
	const cards = document.querySelectorAll('.card');

	cards.forEach((card) => {
		const cardRect = card.getBoundingClientRect();
		if (cardRect.top < (window.innerHeight - 200)) {
			card.classList.add('slide-left');
		}
	});
});

const handleScroll = () => {
	const cards = document.querySelectorAll('.card');

	cards.forEach((card) => {
		const cardRect = card.getBoundingClientRect();
		if (cardRect.top < (window.innerHeight - 200)) {
			card.classList.add('slide-left');
		}
	});
};

useSeoMeta({
	title: 'Michaud Developpement Informatique',
	ogTitle: 'Michaud Developpement Informatique',
	description: "Ayant suivi la formation de l'école Epitech (actuellement en 5ième année), je suis animé des technologies web et possède de larges compétences en C, CPP, Javascript et VueJS.",
	ogDescription: "Ayant suivi la formation de l'école Epitech (actuellement en 5ième année), je suis animé des technologies web et possède de larges compétences en C, CPP, Javascript et VueJS.",
	ogImage: '@/assets/Logo_MIDI.png',
})
</script>

<style>
.list-cards {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 24px;
	padding-bottom: 24px;
	gap: 24px;
	background: var(--bg-secondary);
}

.card {
	opacity: 0;
}

@keyframes slide-left {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.slide-left {
	animation-name: slide-left;
  	animation-duration: 1.0s;
	opacity: 1;
}

body::-webkit-scrollbar {
	display: none;
}

html {
    scroll-behavior: smooth;
}
</style>