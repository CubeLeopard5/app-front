<template>
    <div>
        <div style="margin-bottom: 12px;">
            <span style="font-weight: bold; font-size: 18px; color: #0f6a08; font-size: 24px;"> {{ $t('projects.title') }} </span>
        </div>
        <div :style="{ 'font-size': (width > 1400) ? '18px' : '16px' }" style="text-align: justify; text-justify: inter-word;">
            <a-row>
                <a-col :span="6" v-if="width > 1400">
                    <div style="display: flex; flex-direction: column; align-items: center; padding: 0px 24px 0px 0px; gap: 6px;">
                        <img src="../../assets/Erudia_Logo_Black.png" alt="logo" style="width: 50%; height: 50%;" v-if="$colorMode.preference == 'light'"/>
                        <img src="../../assets/Erudia_Logo.png" alt="logo" style="width: 50%; height: 50%;" v-else/>
                    </div>
                </a-col>
                <a-col :span="(width > 1400) ? 18 : 24">
                    <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold; font-size: 20px;"> {{ $t('projects.erudia.title') }} </span>
                        <a href="https://erudia.fr" target="_blank"> {{ $t('projects.link') }}</a>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px; padding: 0px 24px 0px 0px; margin-top: 12px;">
                        <span> {{ $t('projects.erudia.description') }} </span>
                        <NuxtLink to="/erudia"> {{ $t('projects.more') }} </NuxtLink>
                    </div>
                </a-col>
            </a-row>
            <a-divider/>
            <a-row>
                <a-col :span="6" v-if="width > 1400">
                    <div style="display: flex; flex-direction: column; align-items: center; padding: 0px 24px 0px 0px; gap: 6px;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="logo" style="width: 50%; height: 50%;"/>
                    </div>
                </a-col>
                <a-col :span="(width > 1400) ? 18 : 24">
                    <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold; font-size: 20px;"> {{ $t('projects.teams.title') }} </span>
                        <a href="https://github.com/CubeLeopard5/my_teams" target="_blank"> {{ $t('projects.github') }} </a>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px; padding: 0px 24px 0px 0px; margin-top: 12px;">
                        <span> {{ $t('projects.teams.description') }} </span>
                        <NuxtLink to="/my_teams"> {{ $t('projects.more') }} </NuxtLink>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useWindowSize } from '@vueuse/core';

export default defineComponent({
    setup() {
        const { width } = useWindowSize();
        const colorMode = useColorMode();
        return {
            width,
            colorMode
        };
    },
});
</script>