<template>
    <div class="r-tools">
        <div class="tool-list">
            <div class="card-wrapper" v-for="item in tools" :key="item.title">
                <ZmCard :title="item.title" :desc="item.desc" :icon="item.icon" :path="item.path" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import ZmCard from '@/components/zm-card/index.vue';
import tools from './tools';

</script>

<style lang="scss" scoped>
.r-tools {
    .tool-list {
        display: flex;
        flex-wrap: wrap;

        .card-wrapper {
            padding: 20px 40px;

        }
    }
}
</style>