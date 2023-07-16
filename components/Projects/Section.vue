<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }">
        <div style="margin-bottom: 12px;">
            <span style="font-weight: bold; font-size: 18px; color: #0f6a08;"> Projects </span>
        </div>
        <a-row>
            <a-col :span="6">
                <div style="display: flex; flex-direction: column; align-items: center; padding: 0px 24px 0px 0px; gap: 6px;">
                    <img src="../../assets/Erudia_Logo_Black.png" alt="logo" style="width: 50%; height: 50%;" v-if="store.themes.selected == 'light'"/>
                    <img src="../../assets/Erudia_Logo.png" alt="logo" style="width: 50%; height: 50%;" v-else/>
                </div>
            </a-col>
            <a-col :span="18">
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                    <span style="font-weight: bold; font-size: 18px;"> Erudia </span>
                    <a href="https://eip.epitech.eu/2024/erudia/" target="_blank"> Lien vers le site</a>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding: 0px 24px 0px 0px; margin-top: 12px;">
                    <span> Projet de fin d'étude à Epitech. Erudia est une plateforme permettant aux chercheurs de publier et reviewer des articles scientifiques. Elle permet également de rechercher des articles et de s'assurer de leur fiabilité. </span>
                    <NuxtLink to="/erudia">See Images</NuxtLink>
                </div>
            </a-col>
        </a-row>
        <a-divider/>
        <a-row>
            <a-col :span="6">
                <div style="display: flex; flex-direction: column; align-items: center; padding: 0px 24px 0px 0px; gap: 6px;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="logo" style="width: 50%; height: 50%;"/>
                </div>
            </a-col>
            <a-col :span="18">
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                    <span style="font-weight: bold; font-size: 18px;"> my_teams </span>
                    <a href="https://github.com/CubeLeopard5/my_teams" target="_blank"> Lien Github</a>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding: 0px 24px 0px 0px; margin-top: 12px;">
                    <span> This project his to make a server running on your local machine and a client that can connect to this server. The client can then login and send messages to other clients. It demonstrates the use of select, send, read, bind and listen functions. </span>
                    <NuxtLink to="/my_teams">See Images</NuxtLink>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useMainStore } from '~/store/main';

export default defineComponent({
    setup() {
        const store = useMainStore();
        return {
            store,
        };
    },
});
</script>