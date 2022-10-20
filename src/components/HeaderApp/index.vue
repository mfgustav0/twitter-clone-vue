<template>
    <header class="w-1/4 h-full">
        <div class="fixed h-full w-[22.5%] px-4">
            <div class="h-full w-full px-4 py-2 border-r border-gray-800">
                <div class="flex flex-col justify-between h-full w-full">
                    <div class="w-full py-2 px-3">
                        <LogoApp />
                    </div>
                    <NavBar />
                    <UserApp />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import NavBar from './NavBar';
    import UserApp from './UserApp';
    import LogoApp from '@/components/LogoApp';

    export default {
        name: 'HeaderApp',
        components: {
            LogoApp,
            NavBar,
            UserApp
        }
    }
</script>
