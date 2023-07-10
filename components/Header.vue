<template>
    <div style="display: flex; flex-direction: row; justify-content: space-between;">
        <div :style="{ 'color': store.themes[store.themes.selected].text }">
            <span> Adrien Michaud </span>
        </div>
        <div style="display: flex; flex-direction: row; gap: 12px;">
            <form style="display: flex; flex-direction: row; align-items: center; gap: 8px;">
                <label> {{ $t('language') }} </label>
                <select v-model="$i18n.locale" style="border: solid 2px #0f6a08;">
                    <option value="en">en</option>
                    <option value="fr">fr</option>
                </select>
            </form>
            <div style="display: flex; flex-direction: row; align-items: center;">
                <a-switch v-model:checked="checked" checked-children="light" un-checked-children="dark" @change="changeTheme" style="background: #0f6a08;"/>
            </div>
            <Login/>
            <Register/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMainStore } from '~/store/main';
export default defineComponent({
    setup() {
        const store = useMainStore();
        const checked = ref<boolean>(false);
        const changeTheme = () => {
            if (store.themes.selected == 'light') {
                store.themes.selected = 'dark';
            } else {
                store.themes.selected = 'light';
            }
        }
        return {
            store,
            checked,
            changeTheme,
        };
    },
});
</script>

<style>
.ant-switch-checked {
    background: #0f6a08;
}

.ant-switch-checked:focus {
    background: #0f6a08;
    box-shadow: 0 0 0 2px #0f6a08;
}
</style>