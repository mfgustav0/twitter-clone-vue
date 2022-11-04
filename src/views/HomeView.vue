<template>
    <twitter-app>
        <section class="w-full h-full min-h-screen">
            <div class="sticky w-full top-[-0.5px] bg-black backdrop-opacity-10 bg-black/80 py-2 text-white">
                <div class="flex justify-between w-full px-3">
                    <div class="w-full">
                        <h2 class="text-left text-xl font-bold">Página Inicial</h2>
                    </div>
                    <div class="rounded-full px-2 py-2 hover:cursor-pointer hover:bg-gray-900" title="Tweets em destaque">
                        <HighlightsIcon />
                    </div>
                </div>
            </div>
            <div class="w-full px-4 py-2">
                <TweetApp />
            </div>
            <div class="w-full bg-white">
                <TweetArticle 
                    v-for="tweet of tweets"
                    :key="tweet.id"
                    :tweet="tweet"
                />
            </div>
        </section>
    </twitter-app>
</template>

<script>
    import TwitterApp from '@/Layouts/TwitterApp';
    import TweetArticle from '@/components/TweetArticle';
    import TweetApp from '@/components/TweetApp';
    import HighlightsIcon from '@/components/HomeApp/Icons/HighlightsIcon';
    import getTweets from '@/store/tweets.js';

    export default {
        name: 'HomeView',
        components: {
            TwitterApp,
            TweetArticle,
            TweetApp,
            HighlightsIcon
        },
        data() {
            return {
                auth: true,
                tweets: getTweets(2)
            }
        }
    }
</script>
