<template>
    <div class="box">
        <div class="col-text">
            <span class="title" style="margin-bottom: 12px; margin-top: 12px;"> Erudia </span>
            <div style="display: flex; flex-direction: row; align-items: center; width: 100%; justify-content: space-between;">
                <NuxtLink to="/" style="margin-left: 12px;"> Retour </NuxtLink>
                <a href="https://erudia.fr" target="_blank" style="margin-right: 12px;"> Lien </a>
            </div>
            <div>
                <span> Description </span>
                <span> Projet de fin d'études à Epitech, mené par moi-même et 9 autres étudiants. Erudia est une plateforme permettant aux chercheurs de publier et reviewer des articles scientifiques. Elle permet également de rechercher des articles et de s'assurer de leur fiabilité. </span>
            </div>
        </div>
        <div class="col-text">
            <span class="title" style="margin-bottom: 12px; margin-top: 12px;"> Illustrations </span>
            <div class="box-images">
                <img src="@/assets/erudia_1.png" alt="" style="width: 90%; height: 90%;">
                <img src="@/assets/erudia_2.png" alt="" style="width: 90%; height: 90%;">
                <img src="@/assets/erudia_3.png" alt="" style="width: 90%; height: 90%;">
            </div>
        </div>
    </div>
</template>

<style scoped>
.box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.col-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
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