<template>
    <a-row style="font-size: 18px; text-align: justify; text-justify: inter-word;">
        <a-col :span="6">
            <div style="display: flex; flex-direction: column; align-items: center; padding: 0px 24px 0px 0px; gap: 6px;">
                <img :src="img" alt="logo" style="width: 50%; height: 50%;"/>
                <span> {{ $t(`educations.items.${index}.compagny`) }} </span>
            </div>
        </a-col>
        <a-col :span="18">
            <div style="display: flex; flex-direction: row; justify-content: space-between;">
                <span style="font-weight: bold; font-size: 20px;"> {{ $t(`educations.items.${index}.title`) }} </span>
                <span> {{ $t(`educations.items.${index}.time`) }} </span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; padding: 0px 24px 0px 0px; margin-top: 12px;">
                <span style="font-size: 16px; color: grey;"> {{ $t(`educations.items.${index}.place`) }} </span>
                <span> {{ $t(`educations.items.${index}.description`) }} </span>
            </div>
        </a-col>
    </a-row>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        }
    },
}
</script>