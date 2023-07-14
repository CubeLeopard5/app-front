<template>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <img :src="data.img" alt="" style="max-width: 64px; height: 64px">
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