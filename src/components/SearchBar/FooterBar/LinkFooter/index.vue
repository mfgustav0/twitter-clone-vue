<template>
	<a
		class="pr-2 leading-normal hover:underline hover:underline-offset-1"
		:href="url"
		target="_blank"
	>
		<span class="font-medium text-xs">{{ label }}</span>
	</a>
</template>

<script>
	export default {
		name: 'LinkFooter',
		props: {
			url: String,
			label: {
				type: String,
				required: true
			}
		}
	}
</script>