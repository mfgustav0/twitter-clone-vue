<template>
	<section class="bg-very-dark-800 rounded-xl w-full">
		<div class="w-full py-3 px-4">
			<h2 class="text-xl font-bold text-white text-left">O que está acontecendo</h2>
		</div>

		<item-bar
			v-for="(trend, index) in trendinds"
			:key="index"
			:topic="trend.topic"
			:title="trend.title"
			:total="trend.total"
			:image="trend?.image"
		/>

		<div class="w-full py-3 px-4 hover:bg-very-dark-400 rounded-b-xl">
			<a href="" class="w-full">
				<div class="text-vivid-blue text-md text-left font-normal">
					Mostrar Mais
				</div>
			</a>
		</div>
	</section>
</template>

<script>
	import ItemBar from './ItemBar';

	export default {
		name: 'TrendingBar',
		components: {
			ItemBar
		},
		data() {
			return {
				trendinds: [
					{ topic: 'Candidatura Picanha . há 3 Horas', title: 'Batata empata com Picanha em `49%`', image: 'https://via.placeholder.com/70', },
					{ topic: 'Assuntos do Momento em Brasil', title: 'Novos casos de Coronavírus', total: 90.6 },
					{ topic: 'Assuntos do Momento em Brasil', title: 'Trendings', total: 25 },
					{ topic: 'Assuntos do Momento em Brasil', title: 'Trap Nacional', total: 50 },
					{ topic: 'Copa Cirrose . AO VIVO', title: 'Final: Os Tweets sobre a Final', image: 'https://via.placeholder.com/70', },
				]
			}
		}
	}
</script>