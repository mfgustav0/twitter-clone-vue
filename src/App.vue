<template>
    <div class="min-w-screen min-h-screen px-8">
        <div class="flex justify-between w-full h-full px-8">
            <HeaderApp />
            <main class="w-3/4 flex justify-between h-full">
                <div class="w-full h-full">
                    <router-view/>
                </div>
                <SearchBar />
            </main>
        </div>
    </div>
</template>

<script>
    import HeaderApp from '@/components/HeaderApp';
    import SearchBar from '@/components/SearchBar';

    export default {
        name: 'App',
        components: {
            HeaderApp,
            SearchBar
        }
    }
</script>

<style lang="scss">
    body {
        background: rgb(0 0 0);

        #app {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
        }
    }
</style>
