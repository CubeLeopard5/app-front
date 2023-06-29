<template>
    <a-input v-model:value="value" placeholder="Basic usage" v-on:keyup.enter="handleOk"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const value = ref<string>('');
        const handleOk = () => {
            let headers = {
				//"Authorization": (obj.accessToken) ? `Bearer ${this.accessToken}` : '',
			};
			headers['Accept'] = 'application/json';
			headers['Content-Type'] = 'application/json';
			const url = 'http://localhost:8000/';
			return fetch(`${url}`, {
				method: 'GET',
				headers: headers,
			}).then(response => response.json());
        };
        return {
            value,
            handleOk,
        };
    },
});
</script>