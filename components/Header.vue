<template>
    <div style="display: flex; flex-direction: row; justify-content: space-between;">
        <div style="color: white;">
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
            <Login/>
            <Register/>
        </div>
    </div>
</template>