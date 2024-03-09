<template>
        <div class="extra-project">
                <div class="extra-project-item" v-for="(element, index) in extraItems" :key="index">
                        <div class="extra-project-item-content">
                                <span class="extra-project-item-content__title"> {{ element.name }} </span>
                        
                                <div class="extra-project-item-content__tools">
                                        <span v-for="(tool, i) in element.tools" :key="i">{{ tool }}</span>
                                </div>
                        </div>

                        <a class="extra-project-item__link" :href="element.linkGitHub" v-if="element.linkGitHub.length">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                        </a>

                        <a class="extra-project-item__link" :href="element.linkDemo" v-if="element.linkDemo.length">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                                </svg>
                        </a>
                </div>
        </div>
</template>

<script setup>
        import { ref } from 'vue';

        const extraItems = ref([
                { name: "JolyBell.clone", linkDemo: "https://jolybell-client.vercel.app", linkGitHub: "https://github.com/MikroTik2/jolybell", tools: [ "Vue", "Sass", "Express.js" ] },
                { name: "Shopr", linkDemo: "", linkGitHub: "https://github.com/MikroTik2/ecommerce-shopr", tools: [ "Vue", "Sass", "Express.js", "Node.js" ]   },
                { name: "Telegram Bot", linkDemo: "", linkGitHub: "https://github.com/MikroTik2/telegram-download", tools: [ "telegraf.js", "axios" ] },
        ]);
</script>

<style lang="scss" scoped>
        .extra-project {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin: 60px 0 20px;

                &-item {
                        display: flex;
                        margin: 20px 0;
                        border-bottom: 1px solid var(--dark-secondary);
                        align-items: center;
                        padding: 6px 0 6px 0;

                        &-content {
                                display: flex;
                                width: 100%;

                                @media only screen and (max-width: 450px) {
                                        display: grid;
                                        row-gap: 10px;
                                }

                                &__title {
                                        font-size: 1.2em;
                                        width: 20ch;
                                        flex-direction: column;
                                        display: flex;

                                        @media only screen and (max-width: 576px) {
                                                font-size: .9em;
                                        }
                                }

                                &__tools {
                                        flex-wrap: wrap;
                                        font-size: 12px;
                                        display: flex;
                                        align-items: center;
                                        gap: 12px;

                                        @media only screen and (max-width: 576px) {
                                                font-size: 10px;
                                        }

                                        span {
                                                color: rgba(8, 8, 9, .62);
                                                border-radius: 40px;
                                                white-space: nowrap;
                                        }
                                }
                        }

                        &__link {
                                text-align: right;
                                margin-right: 10px;

                                svg {
                                        width: 22px;
                                        height: 22px;
                                        fill: rgba(8, 8, 9, .85);
                                        color: rgba(8, 8, 9, .85);
                                }
                        }
                }
        }
</style>