<template>
    <div class="w-full">
        <button class="w-full bg-vivid-blue" @click="submitForm">daassa</button>
        <div class="m-4 border border-gray-600 text-white text-left px-3 py-2">
            <EditorText v-model="text" />
        </div>
    </div>
</template>


<script>
    import EditorText from '@/components/EditorText';
    
    export default {
        components: {
            EditorText
        },
        data() {
            return {
                text: "<b><a href=\"http://localhost:8080/about\">twitter-app</a></div><img src=\"https://pbs.twimg.com/profile_banners/263884490/1638993901/1080x360\"><div><br></div>"
            }
        },
        methods: {
            submitForm() {
                console.log(this.text)
            }
        }
    }
</script>