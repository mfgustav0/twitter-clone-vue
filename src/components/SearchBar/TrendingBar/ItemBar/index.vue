<template>
    <div class="w-full py-3 px-4 hover:bg-very-dark-400 hover:cursor-pointer">
        <div class="flex flex-row">
            <div class="flex items-end flex-col" :class="classes">
                <div class="w-full flex flex-row justify-between items-center">
                    <span class="font-bold text-gray-600 text-xs text-left">{{ topic }}</span>
                </div>
                <div class="w-full text-left">
                    <span class="text-white font-bold text-sm">{{ title }}</span>
                </div>
                <div class="w-full text-left" v-if="total > 0">
                    <span class="font-bold text-gray-600 text-xs">{{ formatTotal(total) }} mil Tweets</span>
                </div>
            </div>
            <div v-if="!image" class="w-1/6">
                <button class="w-6 text-gray-600">
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                        <g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g>
                    </svg>
                </button>
            </div>
            <div v-else class="flex justify-end w-1/3">
                <img :src="image" class="w-30 rounded-xl m0" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ItemBar',
        props: {
            topic: String,
            title: String,
            total: Number,
            image: String
        },
        methods: {
            formatTotal: value => {
                return String(value).replace('.', ',');
            }
        },
        computed: {
            classes() {
                return !this.image ?
                    'w-5/6' :
                    'w-2/3'
            }
        }
    }
</script>
