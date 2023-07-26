<template>
	<div>
		<client-only>
		<a-row>
			<a-col :span="4" v-if="width > 1400">
				<Sider/>
			</a-col>
			<a-col :span="(width > 1400) ? 20: 24">
				<div style="display: flex; flex-direction: row; justify-content: space-around; font-size: 16px; margin: 12px;" v-if="width < 1400">
					<form style="display: flex; flex-direction: row; align-items: center; gap: 8px;">
						<label> {{ $t('language') }} </label>
						<select v-model="$i18n.locale" style="border: solid 2px #0f6a08; color: black;">
							<option value="en">en</option>
							<option value="fr">fr</option>
						</select>
					</form>
					<div style="display: flex; flex-direction: row; align-items: center; gap: 8px;">
						<span> {{ $t('color.title') }} </span>
						<select v-model="$colorMode.preference" style="border: solid 2px #0f6a08; color: black;">
							<option value="light">{{ $t('color.light') }}</option>
							<option value="dark">{{ $t('color.dark') }}</option>
						</select>
					</div>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; padding-top: 24px; padding-bottom: 24px; gap: 24px;" class="list-cards">
					<Card id="about" :title="$t('about.title')" titlePlace="start">
						<template #content>
							<AboutSection/>
						</template>
					</Card>
					<Card id="skills" :title="$t('skills.title')" titlePlace="start">
						<template #content>
							<SkillsSection/>
						</template>
					</Card>
					<Card id="projects" :title="$t('projects.title')" titlePlace="start">
						<template #content>
							<ProjectsSection/>
						</template>
					</Card>
					<Card id="experiences" :title="$t('experiences.title')" titlePlace="start">
						<template #content>
							<ExperiencesSection/>
						</template>
					</Card>
					<Card id="educations" :title="$t('educations.title')" titlePlace="start">
						<template #content>
							<EducationsSection/>
						</template>
					</Card>
					<Card id="contacts" title="Contacts" titlePlace="start">
						<template #content>
							<ContactsSection/>
						</template>
					</Card>
				</div>
			</a-col>
		</a-row>
		</client-only>
	</div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

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
	background: var(--bg-secondary);
}

body::-webkit-scrollbar {
	display: none;
}

html {
    scroll-behavior: smooth;
}
</style>