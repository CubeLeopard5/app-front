<template>
    <div>
        <a-button type="primary" @click="showModal" style="background: #0f6a08; border-color: #0f6a08; border-radius: 6px;">
            {{ $t('header.login') }}
        </a-button>
        <a-modal v-model:visible="visible" :title="`${$t('header.login')} ${errMessage}`" @ok="handleOk" :style="{'--bg': (error == false) ? '#0f6a08' : '#FF4D4D'}" :class="(error) ? 'login-failure' : ''">
            <template #footer>
                <div style="display: flex; flex-direction: row; justify-content: end; gap: 24px;">
                    <a-button key="back" @click="handleCancel" style="background: #FF4D4D; border-color: #FF4D4D; border-radius: 6px; color: black">
                        <span> {{ $t('header.back') }} </span>
                    </a-button>
                    <a-button key="submit" type="primary" @click="handleOk" :disabled="checkInputs()" style="background: #0f6a08; border-color: #0f6a08; border-radius: 6px;">
                        <span> {{ $t('header.send') }} </span>
                    </a-button>
                </div>
            </template>
            <a-form
                :model="formState"
                name="normal_login"
                class="login-form"
            >
                <a-form-item
                    label="email"
                    name="email"
                    :rules="[
                        {
                            required: true,
                            message: 'Enter a email'
                        },
                        {
                            type: 'email',
                            message: 'Enter a valid email'
                        },
                    ]"
                >
                    <a-input v-model:value="formState.email">
                        <template #prefix>
                            <MailOutlined class="site-form-item-icon" />
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item
                    label="password"
                    name="password"
                    :rules="[{ required: true, message: 'Enter your password' }]"
                >
                    <a-input-password v-model:value="formState.password" v-on:keyup.enter="handleOk">
                        <template #prefix>
                            <LockOutlined class="site-form-item-icon" />
                        </template>
                    </a-input-password>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { MailOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useMainStore } from '~/store/main';

interface FormState {
    email: string;
    password: string;
}
export default defineComponent({
    components: {
        MailOutlined,
        LockOutlined,
    },
    setup() {
        const formState = reactive<FormState>({
            email: '',
            password: '',
        });
        const visible = ref<boolean>(false);
        let error = ref<boolean>(false);
        let errMessage = ref<string>('');

        const showModal = () => {
            visible.value = true;
        };

        const handleOk = async () => {
            const store = useMainStore();
            const response = await store.sendSafeRequestToServer({
                method: "POST",
                endpoint: "login/",
                accessToken: false,
                body: JSON.stringify({
                    email: formState.email,
                    password: formState.password
                })
            });
            if (response._id) {
                store.setAccessToken(response.token);
                visible.value = false;
                const router = useRouter();
                router.push({ path: "/home" });
            } else {
                error.value = true;
                console.log(response);
                errMessage.value = response.response;
            }
        };

        const checkInputs = () => {
            if (!formState.email || !formState.password) {
                return true;
            }
            return false;
        };

        const handleCancel = () => {
            visible.value = false;
            error.value = false;
            errMessage.value = '';
        };
        return {
            visible,
            error,
            errMessage,
            showModal,
            handleOk,
            handleCancel,
            formState,
            checkInputs,
        };
    },
});
</script>

<style>
.ant-form-item-label > label {
    width: 100px;
}

.ant-modal-header {
    background: var(--bg);
}

.ant-modal-title {
    color: white;
}

.login-failure {
	animation-name: shakeError;
	animation-fill-mode: forwards;
	animation-duration: 600ms;
	animation-timing-function: ease-in-out;
}

@keyframes shakeError {
	0% {
		transform: translateX(0); }
	15% {
		transform: translateX(0.375rem); }
	30% {
		transform: translateX(-0.375rem); }
	45% {
		transform: translateX(0.375rem); }
	60% {
		transform: translateX(-0.375rem); }
	75% {
		transform: translateX(0.375rem); }
	90% {
		transform: translateX(-0.375rem); }
	100% {
		transform: translateX(0);
	}
}
</style>
