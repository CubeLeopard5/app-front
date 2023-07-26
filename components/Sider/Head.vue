<template>
    <div class="head">
        <div class="head-logo-name">
            <img src="@/assets/Logo_MIDI.png" style="height: 200px; width: 200px;"/>
            <span> Adrien Michaud </span>
        </div>
        <div class="head-configs">
            <div class="head-configs-box">
                <span> {{ $t('language') }} </span>
                <select v-model="$i18n.locale" class="head-configs-box-select">
                    <option value="en">en</option>
                    <option value="fr">fr</option>
                </select>
            </div>
            <div class="head-configs-box">
                <span> {{ $t('color.title') }} </span>
                <select v-model="$colorMode.preference" class="head-configs-box-select">
                    <option value="light">{{ $t('color.light') }}</option>
                    <option value="dark">{{ $t('color.dark') }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const colorMode = useColorMode();
        return {
            colorMode,
        }
    },
});
</script>

<style scoped>
.head {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 18px;
}

.head-logo-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.head-configs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 16px;
}

.head-configs-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}

.head-configs-box-select {
    border: solid 2px var(--border-color);
    color: black;
}

.ant-switch-checked {
    background: var(--border-color);
}

.ant-switch-checked:focus {
    background: var(--border-color);;
    box-shadow: 0 0 0 2px var(--border-color);;
}
</style>