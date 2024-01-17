<template>
        <section class="contact" id="contact">
                <div class="contact-container">
                        <h2 class="contact-title">Let's Get In Touch</h2>
                
                        <div class="contact-options">
                                <div class="contact-options-item" v-for="(element, i) in optionsElement" :key="i">
                                        <a :href="element.link" class="contact-options-item_btn">
                                                <img class="contact-options-item_icon" :src="element.icon" :alt="element.text">
                                        </a>

                                        <span>{{ element.text }}</span>
                                </div>
                                <div class="contact-options-item"></div>
                                <div class="contact-options-item"></div>
                        </div>
                </div>

                <div class="contact-gradient">
                        <div class="contact-gradient-1"></div>
                        <div class="contact-gradient-2"></div>
                        <div class="contact-gradient-3"></div>
                </div>
        </section> 
</template>

<script setup>
        import { ref } from 'vue';

        const optionsElement = ref([
                { icon: "/svg/telegram-icon.svg", text: "Telegram", link: "https://web.telegram.org/k/#@lklckld"},
                { icon: "/svg/linkedin.svg", text: "Connect", link: "https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D1%83%D1%80-%D0%B4%D0%BE%D1%86%D0%B5%D0%BD%D0%BA%D0%BE-0a3a722a1/" },
                { icon: "/svg/gmail.svg", text: "Mail", link: "mailto:dotsenk20034@gmail.com" },
        ]);
</script>

<style lang="scss" scoped>
        .contact {
                position: relative;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                z-index: 2;

                @media only screen and (max-width: 768px) {
                        display: none;
                }

                &-gradient {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        filter: blur(100px);

                        &-1 {
                                width: 700px;
                                height: 400px;
                                background: rgba(0, 102, 255, 5%);
                                transform: rotate(33deg);
                                position: absolute;
                        }

                        &-2 {
                                width: 900px;
                                height: 200px;
                                background: rgba(104,23,255,9%);
                                transform: rotate(111deg);
                                position: absolute;
                        }

                        &-3 {
                                width: 1300px;
                                height: 200px;
                                background: rgba(255,13,65,9%);
                                transform: rotate(131deg);
                                position: absolute;
                        }
                }

                &-container {
                        padding: 0 30px;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        max-width: 1000px;
                }

                &-title {
                        text-align: center;
                        font-size: 3.5em;
                        line-height: 1em;
                }

                &-options {
                        display: flex;
                        justify-content: space-between;
                        margin: 50px 0 40px;
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
</style>