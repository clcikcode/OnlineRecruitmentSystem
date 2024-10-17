<template>
    <div class="form-content">
        <div class="form">
            <el-input v-model="textarea" style="width: 648px;" :rows="8" type="textarea" placeholder="Please input" />
        </div>
        <div class="dialog-footer">
            <el-button class="c-button" @click="AdvantagesSubmit">
                确认
            </el-button>
        </div>
    </div>
</template>
<script>
import { editPersonalAdvantage} from '../utils/apis';
export default {
    props: {
        Advantages: {
            type: Object,
        }
    },
    data() {
        return {
            textarea: "",
        };
    },
    created() {
        if (this.Advantages) {
            this.textarea = this.Advantages;
        }
    },
    methods: {
        AdvantagesSubmit() {
            this.$emit('AdvantagesSubmit', {
                show: false,
            });
            editPersonalAdvantage({
                personalStrengths: this.textarea,
            }).then((res) => {
                if (res.data.code === 200) {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                } else {
                    this.$message({
                        message: '修改失败',
                        type: 'error'
                    });
                }
            });
        },
    },
};
</script>
<style scoped>
.form-content {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 768px;
    border-radius: 10px;
    margin: 8px;
    padding: 20px 32px;
    background-color: #f8f8f8;
}

.form {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

.dialog-footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 20px;
}

.e-button {
    width: 88px;
    height: 35px;
    border-radius: 7px;
}

.e-button:hover {
    border-color: #00a6a7;
    color: #00a6a7;
}

.c-button {
    width: 88px;
    height: 35px;
    border-radius: 7px;
    background-color: #00a6a7;
    color: white;
}

.c-button:hover {
    background-color: #00a6a7;
    color: white;
}
</style>