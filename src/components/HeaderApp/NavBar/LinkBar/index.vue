<template>
    <router-link
        class="
            flex flex-row
            justify-start itens-center
            w-full my-2
            px-4 py-3
            text-left text-lg
            font-bold text-gray-400
            hover:bg-very-dark-400
            hover:rounded-full
        "
        :to="to"
    >
        <component :is="iconComponent" :component="iconComponent" />
        <div class="w-3/4 px-3">
            {{ label }}
        </div>
    </router-link>
</template>

<script>
    import { markRaw, defineAsyncComponent } from "vue";

    export default {
        name: 'LinkBar',
        props: {
            label: String,
            to: String,
            icon: Function
        },
        computed: {
            iconComponent() {
                return markRaw(defineAsyncComponent(this.icon));
            }
        }
    }
</script>

<style scoped lang="scss">
    a {
        &.router-link-exact-active {
            --tw-text-opacity: 1;
            color: rgb(255 255 255 / var(--tw-text-opacity));

            & svg {
                color: white;
            }
        }
    }
</style>
