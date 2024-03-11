<template>
    <div class="vue404">
        <img src="/images/404.png" alt="Error Image" />
        <h1>页面未找到</h1>
        <p>您正在查找的页面不存在。它可能已经被移动、删除或从未存在。</p>
        <p>请尝试搜索或检查URL中的拼写错误。</p>
        <a href="/" class="link">返回首页</a>
    </div>
</template>

<style scoped>
.vue404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}

img {
    max-width: 164px;
    max-height: 164px;
    margin-bottom: 20px;
}

h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #6391e6;
}

p {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #ec5d5d;
}

.link {
    display: inline-block;
    padding: 0 10px;
    text-decoration: none;
    color: #1ceee3;
    font-size: 1.1rem;
}

.link:hover {
    color: #2145e7;
}
</style>