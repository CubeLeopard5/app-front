<template>
    <div :style="{ 'font-size': (width > 1400) ? '18px' : '16px'  }">
        <div style="margin-bottom: 12px;">
            <span style="font-weight: bold; font-size: 18px; color: #0f6a08; font-size: 24px;"> {{ $t('educations.title') }} </span>
        </div>
        <div v-for="el, i in data" :key="i">
            <EducationsItem :img="el" :index="i"/>
            <a-divider v-if="i < data.length - 1"/>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

export default defineComponent({
    setup() {
        const { width } = useWindowSize();
        const data = ref([
            "https://media.licdn.com/dms/image/C560BAQEogO0_6QTmdg/company-logo_100_100/0/1594123399589?e=1697673600&v=beta&t=wegXSqD_xefDQtUCFVKA5IDrGwxM1tuFf3FyR2l66nk",
            "https://upload.wikimedia.org/wikipedia/en/b/b2/Dublin_City_University_%28logo%29.png",
            "https://eduscol.education.fr/sti/system/files/images/concours-examens/14557/14557-13857-logo-si-2019.png",
        ])
        return {
            data,
            width,
        };
    },
});
</script>