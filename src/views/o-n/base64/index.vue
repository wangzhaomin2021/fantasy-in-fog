<template>
    <div class="tool-base64">
        <el-card class="card-base64">
            <template #header>
                <div class="card-header">
                    <span class="title">Base64加解密</span>
                </div>
            </template>
            <div class="content">
                <div class="input io-part">
                    <div class="header">
                        <span class="desc">字符串</span>
                        <div class="operation-line">
                            <el-button class="opt" @click="encrypt" link>base64加密</el-button>
                            <el-button class="opt" @click="decrypt" link>base64解密</el-button>
                            <el-button class="opt" @click="_copy(input)" link>复制</el-button>
                            <el-button class="opt" @click="clear" link>清空</el-button>
                        </div>
                    </div>
                    <el-input type="textarea" v-model="input" placeholder="请输入内容" :rows="8"></el-input>
                </div>
                <div class="output io-part">
                    <div class="header">
                        <span class="desc">结果</span>
                        <div class="operation-line">
                            <el-button class="opt" @click="_copy(output)" link>复制</el-button>
                        </div>
                    </div>
                    <el-input type="textarea" v-model="output" :rows="8"></el-input>
                </div>
            </div>

        </el-card>

    </div>
</template>

<script setup lang="ts">

import { useClipboard } from '@vueuse/core';
import { ref } from 'vue';
import 'element-plus/es/components/message/style/css';
import { ElMessage } from 'element-plus';
import { encode, decode } from 'js-base64';

const { copy } = useClipboard();
const input = ref('');
const output = ref('');

// 清空
function clear() {
    input.value = '';
}

// 复制
function _copy(text: string) {
    copy(text).then(() => {
        ElMessage.success('复制成功');
    });
}

// 加密
function encrypt() {
    output.value = encode(input.value);
}

// 解密
function decrypt() {
    output.value = decode(input.value);
}


</script>

<style lang="scss" scoped>
.tool-base64 {
    padding-top: 60px;

    .card-base64 {
        width: 80%;
        min-width: 680px;
        margin: 0 auto;

        .title {
            font-size: 20px;
            color: #38c4b6;
            font-weight: bold;
        }

        .content {
            width: 100%;
            display: flex;
            flex-flow: row wrap;

            .io-part {
                flex: 1;
                min-width: 320px;
                margin-right: 20px;

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .desc {
                        font-size: 16px;
                        color: #38c4b6;
                        height: 30px;
                        line-height: 30px;

                    }

                    .operation-line {
                        border: 1px dashed #38c4b6;

                        .opt {
                            color: #38c4b6;
                        }
                    }

                }

            }
        }

    }

}
</style>