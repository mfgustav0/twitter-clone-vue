<template>
    <div class="flex justify-between flex-col items-center py-3 px-4 w-full">
        <UserChange v-show="userClick" />

        <div class="flex justify-between flex-row items-center py-3 px-3 w-full hover:bg-very-dark-400 hover:rounded-full hover:cursor-pointer" @click.prevent="clickUser">
            <div class="w-3/4 flex justify-start flex-row items-center">
                <div class="w-1/4 px-1">
                    <img :src="user.image" class="rounded-full" />
                </div>
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
    </div>
</template>

<script>
    import user from '@/store/user.js';
    import ButtonIcon from './ButtonIcon';
    import UserChange from './UserChange';

    export default {
        name: 'UserApp',
        data() {
            return {
                userClick: false,
                user
            }
        },
        methods: {
            clickUser() {
                this.userClick = !this.userClick;
            }
        },
        components: {
            ButtonIcon,
            UserChange
        }
    }
</script>
