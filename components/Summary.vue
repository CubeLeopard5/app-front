<template>
    <a-affix :offset-top="top">
        <div class="menu" :style="{ border: `solid 1px ${store.themes[store.themes.selected].tertiary}`, background: store.themes[store.themes.selected].primary, color: store.themes[store.themes.selected].text }">
            <div class="menu-item" @click="goToSection('about')">
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
.menu {
    width: 200px;
    height: 320px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    margin-top: 12px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.menu-item {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 6px;
    gap: 5px;
    font-weight: bold;
    font-size: 20px;
}

.menu-item:hover {
    border: solid 1px green;
    border-radius: 6px;
}
</style>