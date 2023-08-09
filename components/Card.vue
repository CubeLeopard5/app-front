<template>
    <div class="card" :style="{ '--border': `solid 2px ${cardColor}` }">
        <slot name="header">
            <div class="card-title" :style="{ '--title-place': titlePlace, '--color': cardColor }">
                <span> {{ title }} </span>
            </div>
        </slot>
        <div class="card-divider">
            <a-divider style="margin: 12px;"/>
        </div>
        <slot name="content">
            <span> Put your content </span>
        </slot>
    </div>
</template>

<script>
import { useWindowSize } from '@vueuse/core';

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        titlePlace: {
            type: String,
            required: false,
            default: "center",
        },
        cardColor: {
            type: String,
            required: false,
            default: "#13850a",
        }
    },
    setup() {
        const { width } = useWindowSize();
        return {
            width,
        };
    },
});
</script>

<style scoped>
.card-title {
    display: flex;
    flex-direction: row;
    justify-content: var(--title-place);
    font-weight: bold;
    font-size: 24px;
    color: var(--color);
}

.card-divider {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.card {
	width: 75%;
    padding: 16px 16px 16px 16px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: var(--border);
	background: var(--bg);
}
</style>