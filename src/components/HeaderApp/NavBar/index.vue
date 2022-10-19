<template>
    <nav class="h-full w-full py-2">
        <link-bar
            v-for="(route, index) in routes"
            :key="index"
            :to="route.to"
            :label="route.label"
            :icon="route.icon"
        />
    </nav>
</template>

<script>
    import LinkBar from './LinkBar';
    import routes from '@/routes.js';

    export default {
        name: 'NavBar',
        components: {
            LinkBar,
        },
        data() {
            return {
                routes
            }
        }
    }
</script>
