<template>
    <div class="zm-card">
        <img class="icon" :src="icon" />
        <div class="content">
            <div class="title">{{ title }}</div>
            <div class="desc">{{ desc }}</div>
        </div>
        <svg @click="to(path)" t="1710148468829" class="icon icon-enter" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="38394" width="32" height="32">
            <path
                d="M922.523841 496.178663c0.11154 0.273223 0.151449 0.550539 0.25685 0.824785 1.806135 4.627391 2.883677 9.622148 2.895957 14.889105 0 0.024559 0.008186 0.050142 0.008186 0.074701 0 0.01228 0.004093 0.022513 0.004093 0.032746 0 5.369288-1.100054 10.464329-2.962471 15.169491-0.060375 0.153496-0.080841 0.308015-0.14224 0.459464-4.202719 10.278087-12.400425 18.460444-22.684652 22.651906-0.016373 0.00614-0.032746 0.008186-0.047072 0.014326-4.803399 1.950422-10.031471 3.074012-15.533788 3.074012L139.680273 553.3692c-22.848381 0-41.3692-18.520819-41.3692-41.3692 0-22.846334 18.520819-41.3692 41.3692-41.3692l644.817981 0L503.31827 189.452863c-16.156982-16.156982-16.156982-42.349527 0-58.505485 16.154935-16.154935 42.349527-16.154935 58.503439 0L913.570935 482.696604c0.080841 0.080841 0.101307 0.190335 0.180102 0.271176C917.470755 486.73764 920.462902 491.209488 922.523841 496.178663zM710.276832 627.590622c16.154935-16.156982 42.349527-16.156982 58.505485 0 16.152888 16.154935 16.152888 42.349527 0 58.503439L561.822732 893.052622c-16.154935 16.154935-42.349527 16.154935-58.503439 0-16.156982-16.154935-16.156982-42.349527 0-58.503439L710.276832 627.590622z"
                fill="#1296db" p-id="38395"></path>
        </svg>
    </div>
</template>

<script setup lang="ts">
// import { to } from '@/tools';
// import { useRouter } from "vue-router";
// const router = useRouter();

defineProps<{
    icon: string;
    title: string;
    desc: string;
    path: string;
}>();

const to = (path: string) => {
    // router.push(path);
    window.open(`${path}`);
}

</script>

<style lang="scss" scoped>
.zm-card {
    width: 304px;
    height: 66px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 12px;

    .icon {
        width: 36px;
        height: 36px;
    }

    .content {
        flex: 1;
        margin: 0 16px;
        overflow: hidden;

        .title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 4px;
            color: #7f95d9;
        }

        .desc {
            font-size: 12px;
            color: #999;
        }
    }

    .icon-enter {
        transform: scale(.8);
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:hover {
            fill: #7f95d9;
            transform: scale(1);

        }
    }
}
</style>