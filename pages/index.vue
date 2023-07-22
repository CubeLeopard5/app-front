<template>
	<div>
		<client-only>
		<a-row>
			<a-col :span="4" v-if="width > 1400" style="display: flex; flex-direction: column; align-items: center;">
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
						<span>Color mode:</span>
						<select v-model="$colorMode.preference" style="border: solid 2px #0f6a08; color: black;">
							<option value="light">Light</option>
							<option value="dark">Dark</option>
						</select>
					</div>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; padding-top: 24px; padding-bottom: 24px; gap: 24px;" class="list-cards">
					<AboutMe id="about" class="card"/>
					<SkillsSection id="skills" class="card"/>
					<ProjectsSection id="projects" class="card"/>
					<ExperiencesSection id="experiences"  class="card"/>
					<EducationsSection id="educations" class="card"/>
				</div>
			</a-col>
		</a-row>
		</client-only>
	</div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize();
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
	background: var(--bg);
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
	background: var(--bg-secondary);
}

body::-webkit-scrollbar {
	display: none;
}

html {
    scroll-behavior: smooth;
}
</style>