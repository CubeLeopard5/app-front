<template>
	<div class="index-page">
		<client-only>
		<div class="sider-container" v-if="width > 850">
			<Sider/>
		</div>
		<div class="header-container" v-if="width < 850">
			<HeaderMenu/>
		</div>
		</client-only>
		<div class="list-cards">
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
		</div>
	</div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

onMounted(async() => {
	let timer = 0;
    let reject = null;

  	window.addEventListener('scroll', handleScroll);
	await nextTick();
	const cards = document.querySelectorAll('.card');

	for (let i = 0; i < cards.length; i++) {
		const cardRect = cards[i].getBoundingClientRect();
		if (cardRect.top < (window.innerHeight - 200)) {
			cards[i].classList.add('slide-left');
			await new Promise((resolve, _reject) => {
				reject = _reject;
				timer = setTimeout(resolve, 300);
			});
			if (timer) {
                clearTimeout(timer);
                timer = 0;
                reject();
                reject = null;
            }
		}
	}
});

onBeforeUnmount(() => {

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
.index-page {
	display: flex;
	flex-direction: row;
}

.sider-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 280px;
}

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
	transform: translateX(-15%);
}

.slide-left {
	animation-name: slide-left;
  	animation-duration: 1.0s;
	opacity: 1;
	transform: translateX(0);
}

@keyframes slide-left {
	0% {
		opacity: 0;
		transform: translateX(-15%);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

.header-container {
	height: 64px;
	background: var(--bg);
	position: sticky;
	top: 0;
	z-index: 1;
	width: 100%;
}

@media screen and (max-width: 850px) {
	.index-page {
		display: flex;
		flex-direction: column;
	}
}

body::-webkit-scrollbar {
	display: none;
}

html {
    scroll-behavior: smooth;
}
</style>