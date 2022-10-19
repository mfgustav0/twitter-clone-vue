<template>
	<div class="w-full flex h-10">
        <button class="
            w-full rounded-l-full
            h-10 w-10
            pl-3 pr-3
            bg-very-dark text-gray-600
        ">
            <ButtonIcon />
        </button>
        <input
            type="text" 
            class="
                w-full rounded-r-full
                px-2 h-10 
                bg-very-dark text-white
                placeholder:text-gray-600
                focus:outline-none focus:ring
                focus:ring-vivid-blue focus:bg-black
            "
            placeholder="Buscar no Twitter"
        >
    </div>
</template>

<script>
	import ButtonIcon from './ButtonIcon';

	export default {
		name: 'InputSearch',
		components: {
			ButtonIcon
		}
	}
</script>