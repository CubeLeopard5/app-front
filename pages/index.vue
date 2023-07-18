<template>
	<div>
		<a-row>
			<a-col :span="4" v-if="width > 1400" :style="{ 'background': store.themes[store.themes.selected].primary }" style="display: flex; flex-direction: column; align-items: center;">
				<Sider/>
			</a-col>
			<a-col :span="(width > 1400) ? 20: 24">
				{{ width }}, {{ height }}
				<div style="display: flex; flex-direction: column; align-items: center; padding-top: 24px; padding-bottom: 24px; gap: 24px;" class="list-cards">
					<AboutMe id="about" :style="{ 'background': store.themes[store.themes.selected].primary }" class="card"/>
					<SkillsSection id="skills" :style="{ 'background': store.themes[store.themes.selected].primary }" class="card"/>
					<ProjectsSection id="projects" :style="{ 'background': store.themes[store.themes.selected].primary }" class="card"/>
					<ExperiencesSection id="experiences" :style="{ 'background': store.themes[store.themes.selected].primary }" class="card"/>
					<EducationsSection id="educations" :style="{ 'background': store.themes[store.themes.selected].primary }" class="card"/>
				</div>
			</a-col>
		</a-row>
	</div>
</template>

<script setup>
import { useMainStore } from '~/store/main';
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize();
const store = useMainStore();
</script>

<style>
.image {
	background-image: url("../assets/Logo_MIDI.png");
	background-size: contain;
}
.card {
	width: 75%;
    padding: 16px 16px 16px 16px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: solid 1px #0f6a08;
    animation-name: article-card-unselected;
  	animation-duration: 0.5s;
    transform: scale(1);
}

@keyframes article-card-selected {
  0%   {transform: scale(1);}
  100% {transform: scale(1.05);}
}

@keyframes article-card-unselected {
  0%   {transform: scale(1.05);}
  100% {transform: scale(1);}
}

.card:hover {
    animation-name: article-card-selected;
  	animation-duration: 0.5s;
    transform: scale(1.05);
}

.list-cards {
	margin-bottom: 24px;
}

body::-webkit-scrollbar {
	display: none;
}

html {
    scroll-behavior: smooth;
}
</style>