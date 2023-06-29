<template>
    <div>
        KAKA + {{ string }}
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMainStore } from '~/store/main';

const store = useMainStore();
let string = ref('');

onMounted(async () => {
    const response = await store.sendSafeRequestToServer({
        method: "POST",
        endpoint: "welcome/",
        accessToken: true,
    });
    string.value = response.response;
})
</script>