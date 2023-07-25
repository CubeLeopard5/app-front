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
					<LibCard id="about" :title="$t('about.title')" titlePlace="start">
						<template #content>
							<AboutMe/>
						</template>
					</LibCard>
					<LibCard id="skills" :title="$t('skills.title')" titlePlace="start">
						<template #content>
							<SkillsSection/>
						</template>
					</LibCard>
					<LibCard id="projects" :title="$t('projects.title')" titlePlace="start">
						<template #content>
							<ProjectsSection/>
						</template>
					</LibCard>
					<LibCard id="experiences" :title="$t('experiences.title')" titlePlace="start">
						<template #content>
							<ExperiencesSection/>
						</template>
					</LibCard>
					<LibCard id="educations" :title="$t('educations.title')" titlePlace="start">
						<template #content>
							<EducationsSection/>
						</template>
					</LibCard>
				</div>
			</a-col>
		</a-row>
		</client-only>
	</div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
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