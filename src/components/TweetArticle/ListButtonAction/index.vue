<template>
	<div class="flex flex-row justify-between items-center w-full">
		<div class="w-1/4 flex justify-start items-center">
			<button-action :classes="{ text: 'hover:text-vivid-blue', bg: 'bg-vivid-blue-light' }" :count="actions.comments" title="Responder">
				<template #icon>
					<CommentIcon />
				</template>
			</button-action>
		</div>
		<div class="w-1/4 flex justify-start items-center">
			<button-action :classes="{ text: 'hover:text-green-tweet-light', bg: 'bg-green-tweet-dark' }" :count="actions.retweets" title="Retweetar">
				<template #icon>
					<RetweetIcon />
				</template>
			</button-action>
		</div>
		<div class="w-1/4 flex justify-start items-center">
			<button-action :classes="{ text: 'hover:text-heart-tweet-light', bg: 'bg-heart-tweet-dark' }" :count="actions.hearts" title="Curtir">
				<template #icon>
					<HeartIcon />
				</template>
			</button-action>
		</div>
		<div class="w-1/4 flex justify-start items-center">
			<button-action :classes="{ text: 'hover:text-vivid-blue', bg: 'bg-vivid-blue-light' }" title="Compartilhar">
				<template #icon>
					<ShareIcon />
				</template>
			</button-action>
		</div>
	</div>
</template>

<script>
	import RetweetIcon from './Icons/RetweetIcon';
	import CommentIcon from './Icons/CommentIcon';
	import HeartIcon from './Icons/HeartIcon';
	import ShareIcon from './Icons/ShareIcon';
	import ButtonAction from './ButtonAction';

	export default {
		name: 'ListButtonAction',
		props: {
			actions: Object
		},
		components: {
			RetweetIcon,
			CommentIcon,
			HeartIcon,
			ShareIcon,
			ButtonAction
		}
	}
</script>
