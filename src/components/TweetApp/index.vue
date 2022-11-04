<template>
	<div class="w-full h-full flex flex-row justify-start">
		<!-- <WorldIcon /> -->

		<div class="w-1/12 px-1">
			<img :src="user.image" class="rounded-full" />
		</div>
		<div class="w-full flex flex-col px-1">
			<div v-show="active">
				<AudienceTweet
					:audience="audience"
					@update:audience="updateAudience"
				/>
			</div>
			<div class="w-full">
				<textarea
					class="w-full h-full placeholder:text-gray-600 bg-black text-white text-lg focus:outline-0"
					placeholder="O que está acontecendo?"
					@click="clickTweet"
					v-model="content"
					@keyup="keyupContent"
				></textarea>
			</div>
			<div class="w-full flex flex-row itens-center justify-between py-2">
				<div class="flex flex-row itens-center w-4/6 py-2">
					<button class="w-9 text-vivid-blue p-2 hover:bg-vivid-blue-light hover:text-vivid-blue hover:rounded-full">
						<ImageIcon />
					</button>
					<button class="w-9 text-vivid-blue p-2 hover:bg-vivid-blue-light hover:text-vivid-blue hover:rounded-full">
						<GifIcon />
					</button>
					<button class="w-9 text-vivid-blue p-2 hover:bg-vivid-blue-light hover:text-vivid-blue hover:rounded-full">
						<PollIcon />
					</button>
					<button class="w-9 text-vivid-blue p-2 hover:bg-vivid-blue-light hover:text-vivid-blue hover:rounded-full">
						<EmojiIcon />
					</button>
					<button class="w-9 text-vivid-blue p-2 hover:bg-vivid-blue-light hover:text-vivid-blue hover:rounded-full">
						<CalendarIcon />
					</button>
					<button class="w-9 text-vivid-blue/30 p-2 hover:bg-vivid-blue-light/10 hover:text-vivid-blue/30 hover:rounded-full">
						<LocationIcon />
					</button>
				</div>

				<div class="flex flex-row justify-end itens-center w-full py-2">
					<div v-show="active" class="flex flex-row justify-end itens-center w-full">
						<div class="flex flex-row justify-end itens-center px-4">
							<CircularBar :caracters="caracters" :maxCaracters="maxCaracters" />
						</div>

						<div class="flex flex-row justify-end itens-center py-1 px-4 border-l border-gray-600">
							<button class="w-8 text-vivid-blue p-2 border border-gray-600 rounded-full hover:bg-vivid-blue-light hover:text-vivid-blue" title="Adicionar">
								<PlusIcon />
							</button>
						</div>
					</div>
					<button class="text-white px-4 py-2 h-full bg-vivid-blue rounded-full hover:bg-vivid-blue/60" :disabled="caracters == 0 ? true : false">
						Tweetar
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref, toRefs, reactive } from 'vue';
	// import WorldIcon from './Icons/WorldIcon';
	import ImageIcon from './Icons/ImageIcon';
	import GifIcon from './Icons/GifIcon';
	import PollIcon from './Icons/PollIcon';
	import EmojiIcon from './Icons/EmojiIcon';
	import CalendarIcon from './Icons/CalendarIcon';
	import LocationIcon from './Icons/LocationIcon';
	import PlusIcon from './Icons/PlusIcon';
	import CircularBar from './CircularBar';
	import AudienceTweet from './AudienceTweet';
    import user from '@/store/user.js';

	export default {
		name: 'TweetApp',
		components: {
			// WorldIcon,
			ImageIcon,
			GifIcon,
			PollIcon,
			EmojiIcon,
			CalendarIcon,
			LocationIcon,
			CircularBar,
			PlusIcon,
			AudienceTweet,
		},
		setup() {
			const caracters = ref(0);
			const maxCaracters = ref(120);
			const content = ref('');
			const active = ref(true);
			const audience = ref('public');

			const methods = reactive({
				clickTweet() {
					// this.active = String(this.content).trim().length <= 0 ? !this.active : true
				},
				keyupContent() {
					caracters.value = String(content.value).length
				},
				updateAudience(value) {
					audience.value = value 
				}
			});

			return {
				caracters,
				maxCaracters,
				content,
				active,
				audience,
				user,
				...toRefs(methods)
			}
		}
	}
</script>
