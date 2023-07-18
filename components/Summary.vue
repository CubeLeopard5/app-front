<template>
    <a-affix :offset-top="top" :style="{ 'color': store.themes[store.themes.selected].text }">
        <div style="display: flex; flex-direction: column; gap: 24px; font-size: 18px;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                <img src="@/assets/Logo_MIDI.png" style="height: 200px; width: 200px;"/>
                <span> Adrien Michaud </span>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: space-around;">
                <form style="display: flex; flex-direction: row; align-items: center; gap: 8px;">
                    <label> {{ $t('language') }} </label>
                    <select v-model="$i18n.locale" style="border: solid 2px #0f6a08;">
                        <option value="en">en</option>
                        <option value="fr">fr</option>
                    </select>
                </form>
                <div style="display: flex; flex-direction: row; align-items: center;">
                    <a-switch v-model:checked="checked" checked-children="light" un-checked-children="dark" @change="changeTheme" style="background: #0f6a08;"/>
                </div>
            </div>
        </div>
        <a-divider/>
        <div class="menu" :style="{ color: store.themes[store.themes.selected].text }">
            <div class="menu-item" @click="goToSection('about')">
                <span> {{ $t('summary.about') }} </span>
                <UserOutlined />
            </div>
            <a-divider style="margin: unset;"/>
            <div class="menu-item" @click="goToSection('skills')">
                <span> {{ $t('summary.skills') }} </span>
                <BulbOutlined />
            </div>
            <a-divider style="margin: unset;"/>
            <div class="menu-item" @click="goToSection('projects')">
                <span> {{ $t('summary.projects') }} </span>
                <ProjectOutlined />
            </div>
            <a-divider style="margin: unset;"/>
            <div class="menu-item" @click="goToSection('experiences')">
                <span> {{ $t('summary.experiences') }} </span>
                <LaptopOutlined />
            </div>
            <a-divider style="margin: unset;"/>
            <div class="menu-item" @click="goToSection('educations')">
                <span> {{ $t('summary.educations') }} </span>
                <BookOutlined />
            </div>
        </div>
        <a-divider style="margin: unset;"/>
        <Contact/>
    </a-affix>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { UserOutlined, BulbOutlined, ProjectOutlined, LaptopOutlined, BookOutlined } from '@ant-design/icons-vue';
import { useMainStore } from '~/store/main';

export default defineComponent({
    components: {
        UserOutlined,
        BulbOutlined,
        ProjectOutlined,
        LaptopOutlined,
        BookOutlined,
    },
    setup() {
        const top = ref(24);
        const router = useRouter();
        const store = useMainStore();
        const goToSection = (place) => {
            router.push({path: '/', hash: `#${place}`})
        }
        const checked = ref(false);
        const changeTheme = () => {
            if (store.themes.selected == 'light') {
                store.themes.selected = 'dark';
            } else {
                store.themes.selected = 'light';
            }
        }
        return {
            top,
            goToSection,
            store,
            checked,
            changeTheme,
        }
    },
});
</script>

<style>
.menu {
    height: 320px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 16px;
    padding-right: 16px;
}

.menu-item {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 6px;
    padding-right: 6px;
    gap: 5px;
    font-weight: bold;
    font-size: 20px;
    border: solid 1px transparent;
}

.menu-item:hover {
    border: solid 1px green;
    border-radius: 6px;
}

.ant-switch-checked {
    background: #0f6a08;
}

.ant-switch-checked:focus {
    background: #0f6a08;
    box-shadow: 0 0 0 2px #0f6a08;
}
</style>