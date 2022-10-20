<template>
    <logout-app>
        <div class="bg-black w-1/4 h-1/2 py-4 px-4 rounded-2xl">
            <div class="w-full flex justify-center py-4">
                <LogoApp />
            </div>
            <div class="w-full flex flex-col justify-center py-2 px-4">
                <div class="w-full py-1">
                    <h2 class="text-lg text-white text-left font-bold">Sair do Twitter?</h2>
                </div>
                <div class="w-full py-2 text-left leading-3">
                    <span class="font-bold text-sm text-gray-500">Você poderá entrar novamente a qualquer momento. Se quiser trocar de conta, faça isso uma conta existente.</span>
                </div>
                <router-link :to="{ name: 'home' }" class="w-full bg-white px-4 py-3 my-2 font-bold text-sm rounded-full hover:bg-gray-200 duration-200">
                    Sair
                </router-link>

                <router-link :to="{ name: 'home' }" class="w-full bg-black px-4 py-3 my-2 font-bold text-white text-sm rounded-full border border-gray-500  hover:bg-very-dark-400 duration-200">
                    Cancelar
                </router-link>
            </div>
        </div>
    </logout-app>
</template>

<script>
    import LogoutApp from '@/Layouts/LogoutApp.vue'
    import LogoApp from '@/components/LogoApp';

    export default {
        name: 'HomeView',
        components: {
            LogoutApp,
            LogoApp
        }
    }
</script>
