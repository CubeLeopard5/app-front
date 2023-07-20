<template>
    <div class="contact">
        <span style="font-weight: bold; font-size: 20px;"> Contact </span>
        <a-divider style="margin: 0px;"/>
        <div>
            <span> Mail: </span>
            <span> michaudadrien78@gmail.com </span>
        </div>
        <div>
            <span> Téléphone: </span>
            <span> 06 07 91 04 31 </span>
        </div>
        <div class="malt-linked">
            <a href="https://www.malt.fr/profile/adrienmichaud" target="_blank"> Malt </a>
            <a-divider type="vertical"/>
            <a href="https://www.linkedin.com/in/adrienmichaud/" target="_blank"> LinkedIn </a>
        </div>
    </div>
</template>

<style scoped>
.malt-linked {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.contact {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    margin-top: 12px;
    font-size: 18px;
}
</style>