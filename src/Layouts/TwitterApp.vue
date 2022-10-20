<template>
    <div class="min-w-screen min-h-screen px-8">
        <div class="flex justify-between w-full h-full px-8">
            <HeaderApp />
            <main class="w-3/4 flex justify-between h-full">
                <div class="w-full h-full">
                    <slot></slot>
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
		name: 'TwitterApp',
		components: {
			HeaderApp,
			SearchBar
		}
	}
</script>