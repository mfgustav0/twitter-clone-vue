<template>
    <div class="
        absolute w-11/12
        shadow-full shadow-gray-700
        top-[75%] ml-6
        rounded-xl bg-black
        after:content-[' ']  after:absolute
        after:border-[7px]   after:border-transparent
        after:border-t-black
        before:content-[' '] before:absolute
        before:top-full      before:border-8
        before:border-transparent before:border-t-gray-700
    ">
        <div class="flex flex-col w-full mt-4 border-t border-gray-700">
            <router-link to="" class="w-full px-4 py-3 text-left font-bold text-sm text-gray-300 hover:bg-very-dark-400">
                Adicionar uma conta existente
            </router-link>
            <router-link
                :to="{ name: 'logout' }"
                class="w-full px-4 py-3 text-left font-bold text-sm text-gray-300 hover:bg-very-dark-400 rounded-b-lg"
            >
                Sair de {{ user.username }}
            </router-link>
        </div>
    </div>
</template>

<script>
    import user from '@/store/user.js';

    export default {
        name: 'UserChange',
        data() {
            return {
                user
            }
        }
    }
</script>
