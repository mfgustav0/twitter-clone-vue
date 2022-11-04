<template>
	<button
		class="flex justify-start items-center text-gray-500"
		:class="classes.text"
		@mouseover="active=true"
		@mouseleave="active=false"
	>
		<div class="flex items-center w-6 pr-2">
			<div class="absolute h-[1.5rem] w-[1.5rem] m-[-0.5rem] rounded-full p-4" :class="background"></div>
			<slot name="icon"></slot>
		</div>
		<span v-show="count" class="text-sm">{{ count }}</span>
	</button>
</template>

<script>
	export default {
		name: 'ButtonAction',
		props: {
			count: Number,
			classes: Object
		},
		data() {
			return {
				active: false
			}
		},
		computed: {
			background() {
				return this.active ? this.classes.bg : '';
			}
		}
	}
</script>
