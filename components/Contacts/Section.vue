<template>
    <div class="contact">
        <div>
            <span> Mail: </span>
            <a href="mailto:michaudadrien78@gmail.com">
                <span> michaudadrien78@gmail.com </span>
            </a>
        </div>
        <div>
            <span> {{ $t('summary.phone') }}: </span>
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
    font-size: 18px;
}
</style>