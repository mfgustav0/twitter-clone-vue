<template>
	<article class="w-full h-full flex flex-row justify-start border-y border-gray-800 bg-black py-2">
		<div class="w-1/8 pl-2">
            <div class="w-full px-2">
                <img :src="tweet.user.image" class="rounded-full w-15" />
            </div>
		</div>
		<div class="w-full px-1">
			<div class="flex flex-row items-center justify-start pl-1 pr-3">
				<div class="flex flex-row items-center text-white cursor-pointer">
					<span class="text-base">{{ tweet.user.name }}</span>
					<span class="px-1 text-gray-400 text-sm">{{ tweet.user.username }}</span>
				</div>
			</div>
			<div class="flex flex-col justify-between pl-1 pr-3">
				<div class="text-white text-base text-left content-tweet pb-3" v-html="tweet.text"></div>
				<ListButtonAction
					:actions="{
						retweets: tweet.actions.retweets,
						comments: tweet.actions.comments,
						hearts: tweet.actions.hearts,
					}"
				/>
			</div>
		</div>
	</article>
</template>

<script>
	import ListButtonAction from './ListButtonAction';

	export default {
		name: 'TweetArticle',
		props: {
			tweet: Object
		},
		components: {
			ListButtonAction
		}
	}
</script>

<style lang="scss">
    .content-tweet {
        a {
            color: #1d9bf0 !important;
        }
    }
</style>
