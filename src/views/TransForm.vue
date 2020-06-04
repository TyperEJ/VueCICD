<template>
    <div class="trans-form">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                    <el-input
                            type="textarea"
                            :rows="10"
                            placeholder="Pleas Input Something"
                            v-model="currentInput"
                    >
                    </el-input>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
        <div style="margin: 20px 0;"></div>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <el-button @click="trans">Trans</el-button>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <el-button @click="transToDefaultEmpty">TransToDefaultEmpty</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'trans-form',
        data() {
            return {
                currentInput: this.input
            }
        },
        methods: {
            trans() {
                if(!this.currentInput.indexOf("[") &&
                    !this.currentInput.indexOf("]")){
                    return false
                }

                let list = this.currentInput.split('\n');
                let result = '[\n';
                list.forEach(function(item){
                    result += '\''+item+'\',\n';
                });
                result += '];';
                this.currentInput = result;
            },
            transToDefaultEmpty() {
                if(!this.currentInput.indexOf("[") &&
                    !this.currentInput.indexOf("]")){
                    return false
                }

                let list = this.currentInput.split('\n');
                let result = '[\n';
                list.forEach(function(item){
                    if(typeof item === 'number'){
                        result += '\''+item+'\' => 0,\n';
                    }else{
                        result += '\''+item+'\' => \'\',\n';
                    }
                });
                result += '];';
                this.currentInput = result;
            },
        }
    }
</script>