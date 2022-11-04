<template>
    <div class="min-w-screen min-h-screen px-8">
        <div class="flex justify-between w-full h-full px-8">
            <HeaderApp />
            <main class="w-3/4 flex justify-between h-full border-l border-gray-800">
                <div class="w-full h-full min-h-screen">
                    <slot></slot>
                </div>
                <SearchBar />
            </main>
        </div>
        <ChatUser />
    </div>
</template>

<script>
    import HeaderApp from '@/components/HeaderApp';
    import SearchBar from '@/components/SearchBar';
    import ChatUser from '@/components/ChatUser';

	export default {
		name: 'TwitterApp',
		components: {
			HeaderApp,
			SearchBar,
            ChatUser
		}
	}
</script>