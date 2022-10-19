const routes = [
	{
		label: 'Página Inicial',
		to: '/',
		icon: () => import('@/components/HeaderApp/NavBar/Icons/HomeIcon.vue')
	},
	{
		label: 'Explorar',
		to: '/about',
		icon: () => import('@/components/HeaderApp/NavBar/Icons/HashtagIcon.vue')
	},
	{
		label: 'Notificações',
		to: '/about',
		icon: () => import('@/components/HeaderApp/NavBar/Icons/NotifyIcon.vue')
	},
	{
		label: 'Mensagens',
		to: '/about',
		icon: () => import('@/components/HeaderApp/NavBar/Icons/MessageIcon.vue')
	},
	{
		label: 'Perfil',
		to: '/about',
		icon: () => import('@/components/HeaderApp/NavBar/Icons/UserIcon.vue')
	},
	{
		label: 'Mais',
		to: '/about',
		icon: () => import('@/components/HeaderApp/NavBar/Icons/MoreIcon.vue')
	}
];

export default routes;
