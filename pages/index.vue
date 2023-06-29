<template>
<div>
    <a-input v-model:value="username" placeholder="Basic usage"/>
    <a-input v-model:value="email" placeholder="Basic usage" />
    <a-input v-model:value="password" placeholder="Basic usage" />
    <a-button type="primary" @click="handleOk">
        send
    </a-button>
    gfdd + ljjhg
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const username = ref<string>('');
        const email = ref<string>('');
        const password = ref<string>('');
        const handleOk = () => {
            let headers = {
				//"Authorization": (obj.accessToken) ? `Bearer ${this.accessToken}` : '',
			};
			headers['Accept'] = 'application/json';
			headers['Content-Type'] = 'application/json';
			const url = 'http://localhost:8000';
            const endpoint = 'login';
            let obj = {};
            obj['username'] = username.value;
            obj['email'] = email.value;
            obj['password'] = password.value;
			return fetch(`${url}/${endpoint}`, {
				method: 'POST',
				headers: headers,
                body: JSON.stringify(obj),
			}).then(response => response.json());
        };
        return {
            username,
            email,
            password,
            handleOk,
        };
    },
});
</script>