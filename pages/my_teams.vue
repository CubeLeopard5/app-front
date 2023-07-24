<template>
    <div class="box" :style="{ '--dir': width > 1400 ? 'row' : 'column' }">
        <div class="col-text" :style="{ '--size': width > 1400 ? '50%' : '100%' }">
            <span class="title" style="margin-bottom: 12px; margin-top: 12px;"> my_teams </span>
            <div style="display: flex; flex-direction: row; align-items: center; width: 100%; justify-content: space-between;">
                <NuxtLink to="/" style="margin-left: 12px;"> {{ $t('projects.back') }} </NuxtLink>
                <a href="https://github.com/CubeLeopard5/my_teams" target="_blank" style="margin-right: 12px;"> {{ $t('projects.github') }} </a>
            </div>
            <div class="description" :style="(width > 1400) ? { 'height': '90vh', 'overflow-y': 'scroll' } : {}">
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> {{ $t('teams.description.title') }} </span>
                    <span style="padding-left: 24px; padding-right: 24px;"> {{ $t('teams.description.first') }} <code> select </code>, <code> send </code>, <code> read </code>, <code> bind </code> {{ $t('teams.description.and') }} <code> listen </code> {{ $t('teams.description.functions') }} </span>
                </div>
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> {{ $t('teams.requirements.title') }} </span>
                    <div style="padding-left: 24px; padding-right: 24px;">
                        <span> {{ $t('teams.requirements.need') }} </span>
                        <ul>
                            <li> {{ $t('teams.requirements.gcc') }} </li>
                            <li> {{ $t('teams.requirements.lib') }} </li>
                            <li> {{ $t('teams.requirements.criterion') }} </li>
                        </ul>
                    </div>
                </div>
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> {{ $t('teams.compilation.title') }} </span>
                    <div style="padding-left: 24px; padding-right: 24px;">
                        <span> {{ $t('teams.compilation.first') }} </span>
                        <ul>
                            <li> <code> myteams_server </code> </li>
                            <li> <code> myteams_cli </code> </li>
                            <li> <code> run_tests </code> </li>
                        </ul>
                        <span> {{ $t('teams.compilation.second') }} </span>
                        <ul>
                            <li> <code> make server </code> </li>
                            <li> <code> make client </code> </li>
                            <li> <code> make tests </code> </li>
                        </ul>
                        <span> {{ $t('teams.compilation.use') }} <code> make fclean </code> {{ $t('teams.compilation.three') }} </span>
                    </div>
                </div>
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> {{ $t('teams.usage.title') }} </span>
                    <div style="display: flex; flex-direction: column; padding-left: 24px; padding-right: 24px; gap: 12px;">
                        <span> {{ $t('teams.usage.first') }} </span>
                        <code class="code-text"> ./myteams_server </code>
                        <span> {{ $t('teams.usage.second') }} </span>
                        <span> {{ $t('teams.usage.three') }} </span>
                        <code class="code-text"> ./myteams_cli &lt;host&gt; &lt;port number&gt; </code>
                        <span> {{ $t('teams.usage.fourth') }} </span>
                        <span> {{ $t('teams.usage.fifth') }} </span>
                        <code class="code-text"> ./run_tests </code>
                    </div>
                </div>
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> {{ $t('teams.commands.title') }} </span>
                    <div style="display: flex; flex-direction: column; padding-left: 24px; padding-right: 24px; gap: 12px;">
                        <span> {{ $t('teams.commands.first') }} </span>
                        <code class="code-text"> /help </code>
                        <span> {{ $t('teams.commands.second') }} </span>
                        <code class="code-text"> /login &lt;username&gt; {{ $t('teams.commands.fourth') }} </code>
                        <span> {{ $t('teams.commands.fifth') }} </span>
                        <code class="code-text"> /send &lt;uuid&gt; &lt;message&gt; </code>
                        <span> {{ $t('teams.commands.sixth') }} </span>
                        <code class="code-text"> /users </code>
                        <span> {{ $t('teams.commands.seven') }} </span>
                        <code class="code-text"> /user &lt;uuid&gt; </code>
                        <span> {{ $t('teams.commands.eight') }} </span>
                        <code class="code-text"> /conv &lt;uuid&gt; </code>
                        <span> {{ $t('teams.commands.nine') }} </span>
                        <code class="code-text"> /logout </code>
                        <span> {{ $t('teams.commands.ten') }} </span>
                        <code class="code-text"> /quit </code>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-text" :style="{ '--size': width > 1400 ? '50%' : '100%' }">
            <span class="title" style="margin-bottom: 12px; margin-top: 12px;"> Illustrations </span>
            <div class="box-images">
                <img src="@/assets/my_teams_1.png" alt="" style="width: 100%;">
                <img src="@/assets/my_teams_2.png" alt="" style="width: 100%;">
                <img src="@/assets/my_teams_3.png" alt="" style="width: 100%;">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
</script>

<style scoped>
.box {
    display: flex;
    flex-direction: var(--dir);
    justify-content: space-around;
    text-align: justify;
    text-justify: inter-word;
}

.code-text {
    border: solid 1px #0f6a08;
    padding: 6px 6px 6px 6px;
}

.col-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--size);
    gap: 12px;
}

.description {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 18px;
}

.description::-webkit-scrollbar {
    display: none;
}

.descriptin-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.box-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    padding: 24px;
}

.title {
    font-weight: bold;
    font-size: 24px;
}
</style>