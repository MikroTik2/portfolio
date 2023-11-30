<template>
        <footer class="footerProject">
                <div class="footerProject-container">
                        <div class="footerProject-container-content">

                                <h2 class="footerProject-container-content-title">Let's Get In Touch</h2>
                        
                                <div class="footerProject-container-content-options">
                                        <div class="footerProject-container-content-options-item" v-for="(element, i) in optionsElement" :key="i">
                                                <div class="footerProject-container-content-options-item_btn">
                                                        <img class="footerProject-container-content-options-item_icon" :src="element.icon" :alt="element.text">
                                                </div>
        
                                                <span>{{ element.text }}</span>
                                        </div>
                                </div>
                        </div>
                </div>

                <div class="footerProject-closer">
                        2023 portfolio - developed by Artur Dosent
                </div>

                <div class="footerProject-btn" @click="prevPage">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"></path>
                        </svg>
                </div>
        </footer>
</template>

<script setup>
        import { ref, onMounted } from 'vue';

        const prevPage = () => {
                window.location.href = "/";
        }

        const optionsElement = ref([
                { icon: "/svg/meeting.svg", text: "Plan meeting" },
                { icon: "/svg/linkedin.svg", text: "Connect" },
                { icon: "/svg/gmail.svg", text: "gmail" },
        ]);
</script>

<style lang="scss" scoped>
        .footerProject {
                position: relative;
                overflow: hidden;
                background: #080809;
                color: #f2f7fb;
                padding: 40px 0 30px;

                &-container {
                        max-width: 1260px;
                        padding: 0 30px;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;

                        &-content {
                                text-align: center;
                                margin-bottom: 50px;

                                &-title {
                                        text-align: center;
                                        font-size: 3.5em;
                                        line-height: 1em;
                                        margin-bottom: 40px;
                                }
                
                                &-options {
                                        display: flex;
                                        justify-content: space-between;
                                        margin: 50px 0 40px;
                                        max-width: 300px;
                                        margin: auto;
                                        width: 100%;
                
                                        &-item {
                                                display: flex;
                                                flex-direction: column;
                                                font-size: 12px;
                                                flex: 1 0 33%;
                                                text-decoration: none;
                                                color: rgba(242, 247, 251, .65);
                
                                                &_btn {
                                                        padding: 14px;
                                                        border-radius: 12px;
                                                        display: flex;
                                                        justify-content: center;
                                                        background: rgba(242, 247, 251, 8%);
                                                        border: 1px solid rgba(242, 247, 251, .25);
                                                        margin: 0 auto;
                                                        z-index: 3;
                                                        position: relative;
                                                }
                
                                                &_icon {
                                                        fill: #fff;
                                                        width: 25px;
                                                        height: 25px;
                                                }
                
                                                span {
                                                        text-align: center;
                                                        margin-top: 16px;
                                                }
                                        }
                                }
                        }
                }

                &-btn {
                        position: absolute;
                        top: 40px;
                        left: 120px;
                        border-radius: 10px;
                        background: rgba(242,247,251,8%);
                        border: 1px solid rgba(242,247,251,.4);
                        display: flex;
                        padding: 10px;
                        align-items: center;
                        cursor: pointer;

                        @media only screen and (max-width: 924px) {
                                display: none;
                        }
                }

                &-closer {
                        font-size: 10px;
                        color: rgba(255, 255, 255, .4);
                        display: flex;
                        justify-content: center;
                        padding: 12px 0;
        
                        @media only screen and (max-width: 768px) {
                                margin-top: 40px;
                        }
                }
        }
</style>
