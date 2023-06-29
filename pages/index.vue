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
				"x-access-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ5ZDgyYjM4MmQ5MjhiYTNiZTY4Nzc0IiwiZW1haWwiOiJsampoZyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTY4ODA1NDIxMSwiZXhwIjoxNjg4MDYxNDExfQ.rgWRgJYULR7tAex60wF1rYuDi1YPBw2bnQ0IvBexq4Q`,
			};
			headers['Accept'] = 'application/json';
			headers['Content-Type'] = 'application/json';
			const url = 'http://localhost:8000';
            const endpoint = 'birds';
            let obj = {};
            obj['username'] = username.value;
            obj['email'] = email.value;
            obj['password'] = password.value;
			return fetch(`${url}/${endpoint}`, {
				method: 'GET',
				headers: headers,
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