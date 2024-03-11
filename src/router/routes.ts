import type { RouteRecordRaw } from 'vue-router';
import Home from '@/layout/index.vue';

export default [
    {
        path: '/', component: Home, children: [
            {
                path: '/blog',
                name: 'blog',
                component: () => import('@/views/blog/index.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/about/index.vue')
            },
            {
                path: '/tools',
                name: 'tools',
                component: () => import('@/views/tools/index.vue')
            },
            {
                path: '/message',
                name: 'message',
                component: () => import('@/views/message/index.vue')
            },
            {
                path: '/friends',
                name: 'friends',
                component: () => import('@/views/friends/index.vue')
            },
            {
                path: '/lab',
                name: 'lab',
                component: () => import('@/views/lab/index.vue')
            },
            {
                path: '/case',
                name: 'case',
                component: () => import('@/views/case/index.vue')
            },

        ]
    },
    {
        path: '/o-n/case',
        name: 'o-n-case',
        children: [
            {
                path: 'uuid',
                name: 'uuid',
                component: () => import('@/views/o-n/uuid/index.vue')
            }

        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/404/index.vue')
    }
] as RouteRecordRaw[];