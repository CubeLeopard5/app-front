<template>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <img :src="data.img" alt="" class="skill-logo" height="64" width="64"/>
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