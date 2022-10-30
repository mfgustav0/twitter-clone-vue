<template>
	<div class="fixed bottom-0 right-4 w-1/4">
		<div class="w-full shadow-full shadow-gray-700 rounded-t-xl bg-black overflow-y-auto overflow-x-hidden scrollbar">
            <div class="sticky top-0 bg-black py-2 backdrop-opacity-10 bg-black/90">
				<div class="flex flex-row justify-between items-center py-1 px-4 hover:cursor-pointer" @click.prevent="clickChat">
					<div class="w-4/5">
						<h2 class="text-xl font-bold text-white text-left">Mensagens</h2>
					</div>
					<div class="w-1/5 text-white flex flex-row justify-between items-center">
						<div class="hover:bg-gray-900 rounded-full px-2 py-2" title="Nova Mensagem">
							<MessageIcon />
						</div>
						<div class="hover:bg-gray-900 rounded-full px-2 py-2" :title="!active ? 'Expandir' : 'Fechar'">
							<ArrowUpIcon v-if="!active"  />
							<ArrowDownIcon v-else />
						</div>
					</div>
				</div>
			</div>
			<div v-show="active" class="flex flex-col min-h-[30rem] max-h-[30rem]">
				<ChatItem 
					v-for="chat of chats"
					:key="chat.id"
					:chat="chat"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import MessageIcon from './Icons/MessageIcon';
	import ArrowDownIcon from './Icons/ArrowDownIcon';
	import ArrowUpIcon from './Icons/ArrowUpIcon';
	import ChatItem from './ChatItem';
	import chats from './chats.js';

	export default {
		name: 'ChatUser',
		components: {
			MessageIcon,
			ArrowDownIcon,
			ArrowUpIcon,
			ChatItem
		},
		data() {
			return {
				active: false,
				chats
			}
		},
		methods: {
			clickChat() {
				this.active = !this.active;
			}
		}
	}
</script>
