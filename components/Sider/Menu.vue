<template>
    <div class="menu">
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
        <a-divider style="margin: unset;"/>
        <div class="menu-item" @click="goToSection('contacts')">
            <span> Contacts </span>
            <ContactsOutlined />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { UserOutlined, BulbOutlined, ProjectOutlined, LaptopOutlined, BookOutlined, ContactsOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        UserOutlined,
        BulbOutlined,
        ProjectOutlined,
        LaptopOutlined,
        BookOutlined,
        ContactsOutlined,
    },
    setup() {
        const router = useRouter();
        const goToSection = (place) => {
            router.push({path: '/', hash: `#${place}`})
        }
        return {
            goToSection,
        }
    },
});
</script>

<style scoped>
.menu {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.menu-item {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 20px;
}

.menu-item:hover {
    color: var(--color-primary);
}
</style>