<template>
    <a-row style="font-size: 18px; text-align: justify; text-justify: inter-word;">
        <a-col :span="6" v-if="width > 1400">
            <div style="display: flex; flex-direction: column; align-items: center; padding: 0px 24px 0px 0px; gap: 6px;">
                <img :src="img" alt="logo" style="width: 50%; height: 50%;"/>
                <span> {{ $t(`experiences.items.${index}.compagny`) }} </span>
            </div>
        </a-col>
        <a-col :span="(width > 1400) ? 18 : 24">
            <div style="display: flex; flex-direction: row; justify-content: space-between; gap: 24px;">
                <span style="font-weight: bold; font-size: 20px;"> {{ $t(`experiences.items.${index}.title`) }} </span>
                <span v-if="(width > 1400)"> {{ $t(`experiences.items.${index}.time`) }} </span>
                <span v-else> {{ $t(`experiences.items.${index}.time_abreged`) }} </span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
                <span style="font-size: 16px; color: grey;"> {{ $t(`experiences.items.${index}.place`) }} </span>
                <ul style="margin-left: -21px;">
                    <li v-for="i in 2" :key="i">
                        {{ $t(`experiences.items.${index}.description.${i - 1}`) }}
                    </li>
                </ul>
            </div>
        </a-col>
    </a-row>
</template>

<script>
import { useWindowSize } from '@vueuse/core';

export default defineComponent({
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
    setup() {
        const { width } = useWindowSize();
        return {
            width,
        };
    },
});
</script>