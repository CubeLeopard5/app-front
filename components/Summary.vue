<template>
    <a-affix :offset-top="top">
        <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px;" :style="{ color: store.themes[store.themes.selected].text }">
            <div class="menu-item" @click="goToSection('aboutme')">
                <UserOutlined />
                <span> {{ $t('summary.about') }} </span>
            </div>
            <a-divider style="margin: unset;"/>
            <div class="menu-item" @click="goToSection('skills')">
                <BulbOutlined />
                <span> {{ $t('summary.skills') }} </span>
            </div>
            <a-divider style="margin: unset;"/>
            <div class="menu-item" @click="goToSection('projects')">
                <ProjectOutlined />
                <span> {{ $t('summary.projects') }} </span>
            </div>
            <a-divider style="margin: unset;"/>
            <div class="menu-item" @click="goToSection('experiences')">
                <LaptopOutlined />
                <span> {{ $t('summary.experiences') }} </span>
            </div>
            <a-divider style="margin: unset;"/>
            <div class="menu-item" @click="goToSection('educations')">
                <BookOutlined />
                <span> {{ $t('summary.educations') }} </span>
            </div>
        </div>
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
        const top = ref(10);
        const router = useRouter();
        const store = useMainStore();
        const goToSection = (place) => {
            router.push({path: '/', hash: `#${place}`})
        }
        return {
            top,
            goToSection,
            store,
        }
    },
});
</script>

<style scoped>
.menu-item {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 6px;
    gap: 5px;
    font-weight: bold;
    font-size: 16px;
}

.menu-item:hover {
    border: solid 1px green;
    border-radius: 6px;
}
</style>