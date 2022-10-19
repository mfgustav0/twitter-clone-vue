<template>
    <section class="min-h-screen px-4 py-2 w-2/4 border-l border-gray-800">
        <div class="flex justify-start flex-col h-full w-full">
            <div class="sticky top-[-0.5px] bg-black py-2">
                <InputSearch />
            </div>
            <div class="w-full h-full py-2">
                <TrendingBar />
            </div>
            <div class="w-full h-full py-2">
                <FooterBar />
            </div>
        </div>
    </section>
</template>

<script>
    import InputSearch from './InputSearch';
    import TrendingBar from './TrendingBar';
    import FooterBar from './FooterBar';

    export default {
        name: 'SearchBar',
        components: {
            InputSearch,
            FooterBar,
            TrendingBar
        }
    }
</script>
