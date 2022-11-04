<template>
	<div class="flex justify-start flex-col w-full py-1">
		<div class="w-full flex flex-row itens-center justify-start">
			<button class="flex justify-center items-center px-2 rounded-full border" :class="classes" @click="active=true">
				<div class="w-full flex justify-center items-center">
					<span class="font-bold text-sm">{{ label }}</span>
				</div>
				<div class="w-7 p-2">
					<ArrowDownIcon />
				</div>
			</button>
		</div>
		<div v-show="active" class="absolute shadow-full shadow-gray-700 mt-7 py-2 left-[30%] rounded-xl bg-black w-1/6 z-50">
			<div class="w-full px-4 py-2 text-left">
				<h3 class="text-white text-lg font-bold">Selecione a audiência</h3>
			</div>

			<button-audience @click="clickButton('public')">
				<div class="w-10 text-white bg-vivid-blue rounded-full p-2">
					<WorldIcon />
				</div>

				<div class="w-full flex justify-between items-center">
					<div class="w-full px-2">
						<span>Qualquer pessoa</span>
					</div>
					<div v-if="isSelected('public')">
						<SelectedIcon class="w-5 text-vivid-blue" />
					</div>
				</div>
			</button-audience>
			<button-audience @click="clickButton('friends')">
				<div class="w-10 text-white bg-green-tweet-light rounded-full p-2">
					<ProfileIcon />
				</div>

				<div class="w-full flex justify-between items-center">
					<div class="w-full px-2 flex flex-col">
						<div class="w-full">
							<span>Roda do Twitter</span>
						</div>

						<div class="w-full flex flex-row">
							<span>
								<span class="text-white">0</span>
								Pessoa
							</span>
							<a class="mx-2 underline underline-offset-2 text-white hover:bg-very-dark-200 hover:rounded-full px-3">Editar</a>
						</div>
					</div>

					<div v-if="isSelected('friends')">
						<SelectedIcon class="w-5 text-vivid-blue" />
					</div>
				</div>
			</button-audience>
		</div>
	</div>
</template>

<script>
	import { ref, reactive, toRefs, computed } from 'vue';
	import ButtonAudience from './ButtonAudience';
	import WorldIcon from './Icons/WorldIcon';
	import ArrowDownIcon from './Icons/ArrowDownIcon';
	import SelectedIcon from './Icons/SelectedIcon';
	import ProfileIcon from './Icons/ProfileIcon';

	export default {
		name: 'AudienceTweet',
		components: {
			ButtonAudience,
			ArrowDownIcon,
			WorldIcon,
			SelectedIcon,
			ProfileIcon
		},
		props: {
			audience: String
		},
		emits: ['update:audience'],
		setup(props, { emit }) {
			const active = ref(false);
			const label = computed(() => props.audience == 'public' ? 'Qualquer pessoa' : 'Roda do Twitter');

			const classes = computed(() => {
				return props.audience == 'public' ?
						'text-vivid-blue border-vivid-blue hover:bg-vivid-blue-light' :
						'text-green-tweet-light border-green-tweet-light hover:bg-green-tweet-dark'
			});

			const methods = reactive({
				clickButton(audience) {
					active.value = false;
					emit('update:audience', audience);
				},
				isSelected(audience) {
					return props.audience === audience
				}
			});

			return {
				label,
				active,
				classes,
				...toRefs(methods)
			}
		}
	}
</script>