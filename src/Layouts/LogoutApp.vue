<template>
    <div class="w-screen h-screen bg-logout flex flex-col items-center justify-center px-8">
        <main class="flex flex-col items-center justify-center w-full h-full px-8">
            <slot></slot>
        </main>
    </div>
</template>

<script>
	export default {
		name: 'LogoutApp'
	}
</script>