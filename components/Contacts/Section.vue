<template>
    <div class="contact">
        <div class="links-container">
            <div class="mail-tel">
                <div>
                    <span> Mail: </span>
                    <a href="mailto:michaudadrien78@gmail.com">
                        <span> michaudadrien78@gmail.com </span>
                    </a>
                </div>
                <div>
                    <span> {{ $t('summary.phone') }}: </span>
                    <span> 06 07 91 04 31 </span>
                </div>
            </div>
            <div class="links-accounts">
                <a href="https://www.malt.fr/profile/adrienmichaud" target="_blank"> Malt </a>
                <a href="https://www.linkedin.com/in/adrienmichaud/" target="_blank"> LinkedIn </a>
            </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 16px;">
            <span style="font-weight: bold; font-size: 21px;"> Envoyez moi un mail: </span>
            <form ref="form" @submit.prevent="sendEmail" class="form-container">
                <div class="name-input">
                    <span> Name: </span>
                    <input placeholder="Enter your name" type="text" required class="input-text" v-model="formState.name" name="user_name"/>
                </div>
                <div class="name-input">
                    <span> Email: </span>
                    <input placeholder="Enter your email" type="text" required class="input-text" v-model="formState.mail" name="user_email" />
                </div>
                <div class="name-input">
                    <span> Message: </span>
                    <textarea placeholder="Enter your message" required class="textarea" v-model="formState.message" name="message"/>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; gap: 24px;">
                    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                        <a-button @click="resetForm" style="background: #FF4D4D; border-color: #FF4D4D; border-radius: 6px; color: black">
                            <span> Annuler </span>
                        </a-button>
                    </a-form-item>
                    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                        <a-button style="background: #13850a; border: solid 1px #13850a;" type="primary" html-type="submit" :disabled="checkInputs()"> Envoyer </a-button>
                    </a-form-item>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';

interface FormState {
    name: string;
    mail: string;
    message: string;
}

export default defineComponent({
    setup() {
        const config = useRuntimeConfig();
        const formState = reactive<FormState>({
            name: '',
            mail: '',
            message: '',
        });
        const form = ref(null);

        const checkInputs = () => {
            if (!formState.name || !formState.mail || !formState.message) {
                return true;
            }
            return false;
        };
        const sendEmail = () => {
            emailjs.sendForm(config.public.emailServiceId, config.public.emailTemplateId, form.value, config.public.emailPublicKey)
            .then(() => {
                console.log('Message sent!');
                resetForm();
            }, (error) => {
                console.log('Message not sent', error);
            });
        };
        const resetForm = () => {
            formState.name = '';
            formState.mail = '';
            formState.message = '';
        };
        return {
            formState,
            sendEmail,
            form,
            resetForm,
            checkInputs,
        }
    },
});
</script>

<style scoped>
.form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.name-input {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.input-text {
    border: 1px solid var(--color-primary);
    width: 88%;
    color: black;
}

.input-text:focus {
    outline: none;
    border: 1px solid var(--color-primary);
}

.textarea {
    border: 1px solid var(--color-primary);
    width: 88%;
    height: 150px;
    color: black;
}

.textarea:focus {
    outline: none;
    border: 1px solid var(--color-primary);
}

.contact {
    display: flex;
    flex-direction: column;
    gap: 36px;
    font-size: 18px;
}

.links-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.mail-tel {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.links-accounts {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-end;
}

@media screen and (max-width: 850px) {
    .links-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .links-accounts {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: baseline;
    }

    .name-input {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
}
</style>