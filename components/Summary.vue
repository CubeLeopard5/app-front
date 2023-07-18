<template>
    <a-affix :offset-top="top">
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
.menu {
    height: 320px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    margin-top: 12px;
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
}

.menu-item:hover {
    border: solid 1px green;
    border-radius: 6px;
}
</style>