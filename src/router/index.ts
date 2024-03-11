import { createRouter, type Router, createWebHashHistory } from 'vue-router';

import routes from './routes';

export const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            if (savedPosition) {
                return savedPosition;
            } else {
                if (from.meta.saveScrollTop) {
                    const top: number = document.documentElement.scrollTop || document.body.scrollTop;
                    resolve({ left: 0, top });
                }
            }
        })
    }
});