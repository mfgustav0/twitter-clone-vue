<template>
    <div class="
        flex justify-between
        flex-row items-center
        py-3 px-3
        hover:bg-very-dark-400
        hover:rounded-full
        w-full
    ">
        <div class="w-3/4 flex justify-start flex-row items-center hover:cursor-pointer">
            <router-link to="" class="w-1/4 px-1">
                <img :src="user.image" class="rounded-full" />
            </router-link>
            <div class="w-3/4 flex flex-col px-2">
                <div class="w-full px-1 text-left font-bold text-sm text-white">
                    {{ user.name }}
                </div>
                <div class="w-full px-1 text-left font-bold text-sm text-gray-500">
                    {{ user.username }}
                </div>
            </div>
        </div>

        <button class="w-10 px-2">
            <ButtonIcon />
        </button>
    </div>
</template>

<script>
    import ButtonIcon from './ButtonIcon';

    export default {
        name: 'UserApp',
        data() {
            return {
                user: {
                    name: 'User',
                    username: '@User',
                    image: 'https://via.placeholder.com/70'
                }
            }
        },
        components: {
            ButtonIcon
        }
    }
</script>
