<template>
	<div class="chat-item flex justify-between flex-row py-3 px-3 w-full hover:bg-very-dark-400 hover:cursor-pointer">
		<div class="w-3/4 flex justify-start flex-row items-center">
			<div class="w-1/4 px-1">
				<img :src="chat.image" class="rounded-full" />
			</div>
			<div class="w-3/4 flex flex-col px-2">
				<div class="w-full px-1 text-left font-bold text-sm text-white">
					{{ chat.name }} {{ chat.username }}
				</div>
				<div class="w-full px-1 text-left font-bold text-xs text-gray-500">
					{{ chat.last_massage }}
				</div>
			</div>
		</div>
		<div class=" chat-item-button text-white">
			<div class="w-9 p-2 text-gray-500 hover:bg-vivid-blue-light hover:text-vivid-blue hover:rounded-full">
				<ButtonIcon />
			</div>
		</div>
	</div>
</template>

<script>
	import ButtonIcon from './ButtonIcon';

	export default {
		name: 'ChatItem',
		props: {
			chat: Object
		},
		components: {
			ButtonIcon
		}
	}
</script>

<style lang="scss">
	.chat-item {
		.chat-item-button {
			display: block;
		}
	}
</style>