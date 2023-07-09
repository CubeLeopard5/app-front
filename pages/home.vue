<template>
    <div style="color: white;">
        Hello world: {{ data.email }}
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMainStore } from '~/store/main';

const store = useMainStore();
let data = ref('');

onMounted(async () => {
    const response = await store.sendSafeRequestToServer({
        method: "POST",
        endpoint: "welcome/",
        accessToken: true,
    });
    data.value = response.results;
})
</script>