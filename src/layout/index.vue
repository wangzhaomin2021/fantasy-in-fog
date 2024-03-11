<template>
    <header>
        <HeaderBar :navs="navs" />
    </header>
    <main>
        <router-view />
    </main>
</template>


<script setup lang="ts">
import { shallowRef } from 'vue';
import HeaderBar from './HeaderBar.vue';
import BlogIcon from '@/components/icons/header-bar/BlogIcon.vue';
import AboutIcon from '@/components/icons/header-bar/AboutIcon.vue';
import MessageIcon from '../components/icons/header-bar/MessageIcon.vue';
import FriendIcon from '../components/icons/header-bar/FriendIcon.vue';
import LabIcon from '../components/icons/header-bar/LabIcon.vue';
import GithubIcon from '../components/icons/header-bar/GithubIcon.vue';
import CaseIcon from '../components/icons/header-bar/CaseIcon.vue';
import ToolsIcon from '../components/icons/header-bar/ToolsIcon.vue';

import type { NavOpt } from './types';

const navs = shallowRef<NavOpt[]>([
    {
        title: '博客',
        icon: BlogIcon,
        path: '/blog'
    },
    {
        title: '关于',
        icon: AboutIcon,
        path: '/about'
    },
    {
        title: '工具',
        icon: ToolsIcon,
        path: '/tools'
    },
    {
        title: '留言板',
        icon: MessageIcon,
        path: '/message'
    },
    {
        title: '友人帐',
        icon: FriendIcon,
        path: '/friends'
    },
    {
        title: '实验室',
        icon: LabIcon,
        path: '/lab'
    },
    {
        title: 'Github',
        icon: GithubIcon,
        path: 'https://github.com/'
    },
    {
        title: '案例',
        icon: CaseIcon,
        path: '/case'
    }
]);

</script>

<style lang="scss" scoped>
header {
    // background-color: #72dfb5;
    background: linear-gradient(to right, #72dfb5, #8378e6);
    height: 72px;
}

main {
    min-height: calc(100vh - 72px);
    background-color: #f0f2f5;
}
</style>