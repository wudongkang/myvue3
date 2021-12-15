import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,  // history
    routes:[
      {
        path: '/home',
        name: 'home',
        component: import('../views/home.vue')
      },
    ]
});

router.beforeEach((to,from,next)=>{
    console.log(to);
    console.log(from);
    // console.log(to);
    next()
    
})

export default router;