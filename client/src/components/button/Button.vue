<template>    
        <button
                v-if="type === 'button'"
                class="btn"
                :class="['btn', {
                        'btn--black': color === 'black',
                        'btn--white': color === 'white',
                }]"
        >

                <slot />
        </button>

        <a
                v-else
                class="btn"
                :class="['btn', {
                        'btn--black': color === 'black',
                        'btn--white': color === 'white',
                }]"
                :href="href"
                :style="{ backgroundColor: background }"
        >
                      
                <slot />
        </a>
</template> 

<script setup>
        const props = defineProps({
                type: {
                        type: String,
                        default: "button",
                },
                to: {
                        type: String,
                        required: false,
                },
                color: {
                        type: String,
                        required: false,
                },
                background: {
                        type: String,
                        required: false,
                },
        });
</script>

<style lang="scss" scoped>
        .btn {
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: none;
                cursor: pointer;
                padding: 0 32px;
                border-radius: 10px;
                color: var(--white);
                height: 50px;
                font-size: 1rem;
                transition: all 0.3s;

                &--black {
                        background: var(--dark);
                        color: var(--white);
                }

                &--white {
                        background: var(--white);
                        color: var(--dark);
                }
        }
</style>