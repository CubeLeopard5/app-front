<template>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <img :src="data.img" alt="" class="skill-logo">
        <span> {{ data.title }} </span>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
.skill-logo {
    max-width: 64px;
    height: 64px;
    animation-name: rotate-in-2-cw;
  	animation-duration: 2.0s;
}

@keyframes rotate-in-2-cw {
    0% {
        transform: rotate(-180deg);
        opacity: 0;
    }
    100% {
        transform: rotate(0);
        opacity: 1;
    }
}
</style>