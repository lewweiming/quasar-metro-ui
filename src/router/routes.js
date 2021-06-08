
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'grid', component: () => import('pages/Grid.vue') },
      { path: 'typography', component: () => import('pages/Typography.vue') },
      { path: 'animation', component: () => import('pages/Animation.vue') },
      { path: 'videos', component: () => import('pages/Videos.vue') },
      { path: 'images', component: () => import('pages/Images.vue') },
      { path: 'article', component: () => import('pages/Article.vue') },
      { path: 'notification', component: () => import('pages/Notification.vue') },
      { path: 'icon', component: () => import('pages/Icon.vue') },
      { path: 'graphs', component: () => import('pages/Graphs.vue') },
      { path: 'indicators', component: () => import('pages/Indicators.vue') },
      { path: 'windows', component: () => import('pages/Windows.vue') },
      { path: 'flip-cards', component: () => import('pages/FlipCards.vue') },
      { path: 'live-tiles', component: () => import('pages/LiveTiles.vue') },
      { path: 'interactive-tiles', component: () => import('pages/InteractiveTiles.vue') },
      { path: 'scroll', component: () => import('pages/Scroll.vue') },
      { path: 'effects', component: () => import('pages/Effects.vue') },
      /* Themes */
      { path: 'e-commerce', component: () => import('pages/Ecommerce.vue') },
      { path: 'gaming', component: () => import('pages/Gaming.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
