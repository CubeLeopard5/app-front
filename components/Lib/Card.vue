<template>
    <div class="card" :style="{ '--border': `solid 1px ${cardColor}` }">
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
            default: "#0f6a08",
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
    animation-name: article-card-unselected;
  	animation-duration: 0.5s;
    transform: scale(1);
	background: var(--bg);
}

.card:hover {
    animation-name: article-card-selected;
  	animation-duration: 0.5s;
    transform: scale(1.05);
}

@keyframes article-card-selected {
  0%   {transform: scale(1);}
  100% {transform: scale(1.05);}
}

@keyframes article-card-unselected {
  0%   {transform: scale(1.05);}
  100% {transform: scale(1);}
}
</style>