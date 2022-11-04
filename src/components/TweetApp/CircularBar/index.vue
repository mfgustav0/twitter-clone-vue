<template>
	<div class="w-full flex flex-row justify-center items-center">
		<div class="w-10 -rotate-90">
			<svg viewBox="0 0 15 15">
				<circle
					:r="diffCaracters <= 20 ? '5' : '3.5'"
					cx="50%"
					cy="50%"
					stroke="currentColor"
					stroke-width=".5"
					fill="none"
					class="text-gray-900"
				></circle>
				<circle
					:r="diffCaracters <= 20 ? '5' : '3.5'"
					cx="50%"
					cy="50%"
					stroke="currentColor"
					:stroke-width="diffCaracters <= 20 ? '1' : '.5'"
					fill="none"
					stroke-linecap="round"
					:stroke-dasharray="circumference"
					:stroke-dashoffset="circumference - percent / 100 * circumference" 
					:class="classes.line"
				></circle>
			</svg>
		</div>

		<div class="absolute" v-show="diffCaracters <= 20">
			<span class="font-bold text-md" :class="classes.text">{{ diffCaracters }}</span>
		</div>
	</div>
</template>

<script>
	import { ref, reactive, watch } from 'vue';

	export default {
		name: 'CircularBar',
		props: {
			caracters: Number,
			maxCaracters: Number
		},
		setup(props) {
			const circumference = ref(22);
			const diffCaracters = ref(props.maxCaracters);
			const percent = ref(0);
			const classes = reactive({
				line: 'text-blue-500',
				text: 'text-gray-700',
			});

			watch(() => props.caracters,
				(caracters) => {
					const totalPercent = (caracters * 100) / props.maxCaracters;
					percent.value = totalPercent > 100 ? 100 : totalPercent;
					diffCaracters.value = props.maxCaracters - caracters;

					if(diffCaracters.value <= 20) {
						circumference.value = (1.95 * 22 / 7 * 5);
						if(diffCaracters.value <= 0) {
							classes.line = 'text-red-900';
							classes.text = 'text-red-900';
							if(diffCaracters.value < -10) {
								classes.line = 'text-black';
							}
						} else {
							classes.line = 'text-yellow-500';
							classes.text = 'text-gray-700';
						}
					} else {
						circumference.value = 22;
						classes.line = 'text-blue-500';
						classes.text= 'text-gray-700';
					}
				}
			);

			return {
				classes,
				percent,
				diffCaracters,
				circumference
			};
		}
	}
</script>
