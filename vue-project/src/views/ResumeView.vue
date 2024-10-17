<template>
    <div class="resume">
        <div class="resume-catalogue">
            <div class="cattalogue-title">
                <h2>简历目录</h2>
            </div>
            <div class="catalogue-item">
                <div class="catalogue-item-li">
                    <span>个人信息</span>
                </div>
                <div class="catalogue-item-li">
                    <span>个人优势</span>
                </div>
                <div class="catalogue-item-li">
                    <span>期望职位</span>
                </div>
                <div class="catalogue-item-li">
                    <span>实习经历</span>
                </div>
                <div class="catalogue-item-li">
                    <span>项目经验</span>
                </div>
                <div class="catalogue-item-li">
                    <span>教育经历</span>
                </div>
            </div>
        </div>

        <div class="resume-content-box">
            <div class="resume-box-header">
                <span>我的在线简历</span>
            </div>

            <div class="item-primary">
                <div class="user-info">
                    <div class="user-name">
                        <span>{{ userInfo.username }}</span>
                        <div class="edit-button" @click="openDialog(1)">
                            <el-icon size="20" color="#00BEBD">
                                <Edit />
                            </el-icon>
                            <span>编辑</span>
                        </div>
                    </div>
                    <div class="info-labels">
                        <div class="p">
                            <el-icon size="20" color="#CCCCCC">
                                <Histogram />
                            </el-icon>
                            <span>{{ year }} 年应届生</span>

                            <el-icon size="20" color="#CCCCCC">
                                <Briefcase />
                            </el-icon>
                            <span> {{ userInfo.degree }} </span>

                            <el-icon size="20" color="#CCCCCC">
                                <Flag />
                            </el-icon>
                            <span>{{ userInfo.status }}</span>
                        </div>
                        <div class="p">
                            <el-icon size="20" color="#CCCCCC">
                                <PhoneFilled />
                            </el-icon>
                            <span>{{ userInfo.phoneNumber }}</span>
                        </div>

                    </div>
                </div>
                <div class="user-advantage">
                    <img :src="userInfo.imgUrl" />
                </div>
            </div>

            <div class="item-primary-advantage-show">
                <div class="title">
                    <span>个人优势</span>
                    <div class="edit-button" @click="openDialog(2)">
                        <el-icon size="15" color="#00BEBD">
                            <Edit />
                        </el-icon>
                        <span>编辑</span>
                    </div>
                </div>
                <div class="info-text">
                    <span>{{ personalAdvantage }}</span>
                </div>

            </div>

            <div class="item-primary-advantage-show">
                <div class="title">
                    <span>期望职位</span>
                    <div class="add-button" @click="openDialog(3)">
                        <el-icon size="15" color="#00BEBD">
                            <Edit />
                        </el-icon>
                        <span>编辑</span>
                    </div>
                </div>
                <div class="info-text" @mouseenter="handleMouseenter(1)" @mouseleave="handleMouseleave(1)">
                    <div class="info-text-item">
                        <span>{{ expectJobs.exceptionJobs }} | {{ expectJobs.exceptionSalary }} | {{
                            expectJobs.exceptionIndustry }} | {{ expectJobs.exceptionCity }}</span>
                        <!-- <div class="edit-del" v-if="JobwantedShow">
                            <el-icon size="17" color="#00BEBD" @click="deleteInfo(1)">
                                <Delete />
                            </el-icon>
                        </div> -->
                    </div>
                </div>

            </div>

            <div class="item-primary-advantage-show">
                <div class="title">
                    <span>工作/实习经历</span>
                    <div class="add-button" @click="openDialog(4)">
                        <el-icon size="15" color="#00BEBD">
                            <Plus />
                        </el-icon>
                        <span>添加</span>
                    </div>
                </div>
                <div class="info-text" @mouseenter="handleMouseenter(2)" @mouseleave="handleMouseleave(2)">
                    <div class="info-text-item" v-for="(item, index) in workExperience" :key="index">
                        <span>{{ item.companyName }} | {{ item.jobName }} | {{
                            item.department }} | {{ item.industry }} | {{ item.workTime }} - {{ item.endTime }} </span>
                        <div class="edit-del" v-if="exprienceShow" @click="deleteInfo(2, item.id)">
                            <el-icon size="17" color="#00BEBD">
                                <Delete />
                            </el-icon>
                        </div>
                    </div>
                </div>
            </div>

            <div class="item-primary-advantage-show">
                <div class="title">
                    <span>项目经验</span>
                    <div class="add-button" @click="openDialog(5)">
                        <el-icon size="15" color="#00BEBD">
                            <Plus />
                        </el-icon>
                        <span>添加</span>
                    </div>
                </div>
                <div class="info-text" @mouseenter="handleMouseenter(3)" @mouseleave="handleMouseleave(3)">
                    <div class="info-text-item" v-for="(item, index) in projectExperience" :key="index">
                        <span>{{ item.projectName }} | {{ item.projectRole }} | {{ item.projectTime }}</span>
                        <div class="edit-del" v-if="projectExpShow">
                            <el-icon size="17" color="#00BEBD" @click="deleteInfo(3, item.id)">
                                <Delete />
                            </el-icon>
                        </div>
                    </div>
                </div>
            </div>

            <div class="item-primary-advantage-show">
                <div class="title">
                    <span>教育经历</span>
                    <div class="add-button" @click="openDialog(6)">
                        <el-icon size="15" color="#00BEBD">
                            <Edit />
                        </el-icon>
                        <span>编辑</span>
                    </div>
                </div>
                <div class="info-text" @mouseenter="handleMouseenter(4)" @mouseleave="handleMouseleave(4)">
                    <div class="info-text-item">
                        <div class="school-badge">
                            <span>{{ educationExperience.school }} | {{ enterTime }} - {{ leaveTime }}</span>
                            <span>{{ educationExperience.profession }} | {{ educationExperience.degree }}</span>
                            <span>经历:{{ educationExperience.schoolExp }}</span>
                        </div>
                        <!-- <div class="edit-del" v-if="educationShow">
                            <el-icon size="17" color="#00BEBD" @click="deleteInfo(4)">
                                <Delete />
                            </el-icon>
                        </div> -->
                    </div>

                </div>
            </div>

        </div>
        <el-dialog v-model="centerDialogVisible" :title="title" width="800" align-center @close="dialogClose">
            <editUserInfoCard v-if="centerDialogPersonaInfo" :userInfo="userInfo" @UserinfoSubmit="handleUserInfo" />
            <editAdvantageCard v-if="centerDialogAdvantage" :Advantages="personalAdvantage"
                @AdvantagesSubmit="handleAdvantages" />
            <editExceptJobsCard v-if="centerDialogExceptJobs" :ExceptJobs="expectJobs" @confirm="handleExceptJobs" />
            <workExpCard v-if="centerDialogWorkExp" :workExp="workExperience" :classifications="expectJobs.classifications"
                @confirmWorkexp="handleWorkExp" />
            <projectExpCard v-if="centerDialogProjectExp" :projectExp="projectExperience"
                @confirmProjectExp="handleProjedctExp" />
            <educationCard v-if="centerDialogEducation" :education="educationExperience"
                @confirmEducation="handleEducation" />
        </el-dialog>

    </div>
</template>
<script>
import editUserInfoCard from '@/components/editUserInfoCard.vue';
import editAdvantageCard from '@/components/editAdvantageCard.vue';
import editExceptJobsCard from '@/components/editExceptJobsCard.vue';
import workExpCard from '@/components/workExpCard.vue';
import projectExpCard from '@/components/projectExpCard.vue';
import educationCard from '@/components/educationCard.vue';
import { getUserInfo, getPersonalAdvantage, getExpectJobs, getWorkExperience, getProjectExperience, getEducationExperience } from '../utils/apis';
import { deleteExpectJobs, deleteProjectExperience, deleteEducationExperience, deleteWorkExperience } from '../utils/apis';
export default {
    components: {
        editUserInfoCard,
        editAdvantageCard,
        editExceptJobsCard,
        workExpCard,
        projectExpCard,
        educationCard
    },
    data() {
        return {
            exprienceShow: false,
            JobwantedShow: false,
            projectExpShow: false,
            educationShow: false,
            centerDialogVisible: false,
            centerDialogPersonaInfo: false,
            centerDialogAdvantage: false,
            centerDialogExceptJobs: false,
            centerDialogWorkExp: false,
            centerDialogProjectExp: false,
            centerDialogEducation: false,
            title: "",
            userInfo: {},
            personalAdvantage: {},
            expectJobs: {},
            workExperience: {},
            projectExperience: {},
            educationExperience: {},
            year: "",
            enterTime: 0,
            leaveTime: 0
        }
    },
    created() {
        console.log("created");
        this.getUserInfo();
    },
    methods: {
        edit() {
            console.log("编辑");
        },
        handleMouseenter(type) {
            if (type === 1) {
                this.JobwantedShow = true;
            } else if (type === 2) {
                this.exprienceShow = true;
            } else if (type === 3) {
                this.projectExpShow = true;
            } else if (type === 4) {
                this.educationShow = true;
            }
        },
        handleMouseleave(type) {
            if (type === 1) {
                this.JobwantedShow = false;
            } else if (type === 2) {
                this.exprienceShow = false;
            } else if (type === 3) {
                this.projectExpShow = false;
            } else if (type === 4) {
                this.educationShow = false;
            }
        },
        openDialog(type) {
            if (type === 1) {
                this.centerDialogPersonaInfo = true;
                this.title = "编辑个人信息";
            }
            if (type === 2) {
                this.centerDialogAdvantage = true;
                this.title = "编辑个人优势";
            }
            if (type === 3) {
                this.centerDialogExceptJobs = true;
                this.title = "编辑期望职位";
            }
            if (type === 4) {
                this.centerDialogWorkExp = true;
                this.title = "编辑工作/实习经历";
            }
            if (type === 5) {
                this.centerDialogProjectExp = true;
                this.title = "编辑项目经验";
            }
            if (type === 6) {
                this.centerDialogEducation = true;
                this.title = "编辑教育经历";
            }
            this.centerDialogVisible = true;

        },
        dialogClose() {
            this.centerDialogPersonaInfo = false;
            this.centerDialogAdvantage = false;
            this.centerDialogVisible = false;
            this.centerDialogExceptJobs = false;
            this.centerDialogWorkExp = false;
            this.centerDialogProjectExp = false;
            this.centerDialogEducation = false;
        },
        getUserInfo() {
            getUserInfo().then(res => {
                this.userInfo = res.data.data;
                console.log(this.userInfo);
            }).catch(err => {
                console.log(err);
            });
            getPersonalAdvantage().then(res => {
                this.personalAdvantage = res.data.data;
                console.log(this.personalAdvantage);
            }).catch(err => {
                console.log(err);
            });
            getExpectJobs().then(res => {
                this.expectJobs = res.data.data;
                console.log(this.expectJobs);
            }).catch(err => {
                console.log(err);
            });
            getWorkExperience().then(res => {
                this.workExperience = res.data.data;
                this.workExperience.forEach(element => {
                    element.workTime = element.workTime.split("T")[0];
                    element.endTime = element.endTime.split("T")[0];
                    element.workTime = element.workTime.replace(/-/g, ".");
                    element.endTime = element.endTime.replace(/-/g, ".");
                });
                console.log(this.workExperience);
            }).catch(err => {
                console.log(err);
            });
            getProjectExperience().then(res => {
                this.projectExperience = res.data.data;
                this.projectExperience.forEach(element => {
                    element.projectTime = element.projectTime.split("T")[0];
                    element.projectTime = element.projectTime.replace(/-/g, ".");
                });
                console.log(this.projectExperience);
            }).catch(err => {
                console.log(err);
            });
            getEducationExperience().then(res => {
                this.educationExperience = res.data.data;
                this.year = this.educationExperience.graduationTime.split("-")[0];
                this.enterTime = Number(this.educationExperience.graduationTime.split("-")[0]) - 4;
                this.leaveTime = Number(this.educationExperience.graduationTime.split("-")[0]);
                console.log(this.educationExperience);
            }).catch(err => {
                console.log(err);
            });
        },
        handleUserInfo(data) {
            this.centerDialogVisible = data.show;
            setTimeout(() => {
                getUserInfo().then(res => {
                    this.userInfo = res.data.data;
                    console.log(this.userInfo);
                }).catch(err => {
                    console.log(err);
                });
            }, 1000);

        },
        handleAdvantages(data) {
            this.centerDialogVisible = data.show;
            setTimeout(() => {
                getPersonalAdvantage().then(res => {
                    this.personalAdvantage = res.data.data;
                    console.log(this.personalAdvantage);
                }).catch(err => {
                    console.log(err);
                });
            }, 1000);
        },
        handleExceptJobs(data) {
            this.centerDialogVisible = data.show;
            setTimeout(() => {
                getExpectJobs().then(res => {
                    this.expectJobs = res.data.data;
                    console.log(this.expectJobs);
                }).catch(err => {
                    console.log(err);
                });
            }, 1000);
        },
        handleWorkExp(data) {
            this.centerDialogVisible = data.show;
            setTimeout(() => {
                getWorkExperience().then(res => {
                    this.workExperience = res.data.data;
                    this.workExperience.forEach(element => {
                        element.workTime = element.workTime.split("T")[0];
                        element.endTime = element.endTime.split("T")[0];
                        element.workTime = element.workTime.replace(/-/g, ".");
                        element.endTime = element.endTime.replace(/-/g, ".");
                    });
                    console.log(this.workExperience);
                }).catch(err => {
                    console.log(err);
                });
            }, 1000);
        },
        handleProjedctExp(data) {
            this.centerDialogVisible = data.show;
            setTimeout(() => {
                getProjectExperience().then(res => {
                    this.projectExperience = res.data.data;
                    this.projectExperience.forEach(element => {
                        element.projectTime = element.projectTime.split("T")[0];
                        element.projectTime = element.projectTime.replace(/-/g, ".");
                    });
                    console.log(this.projectExperience);
                }).catch(err => {
                    console.log(err);
                });
            }, 1000);
        },
        handleEducation(data) {
            this.centerDialogVisible = data.show;
            setTimeout(() => {
                getEducationExperience().then(res => {
                    this.educationExperience = res.data.data;
                    this.year = this.educationExperience.graduationTime.split("-")[0];
                    this.enterTime = Number(this.educationExperience.graduationTime.split("-")[0]) - 4;
                    this.leaveTime = Number(this.educationExperience.graduationTime.split("-")[0]);
                    console.log(this.educationExperience);
                }).catch(err => {
                    console.log(err);
                });
            }, 1000);
        },
        deleteInfo(type, id) {
            if (type === 1) {
                deleteExpectJobs().then(res => {
                    if (res.data.code === 200) {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        getExpectJobs().then(res => {
                            this.expectJobs = res.data.data;
                            console.log(this.expectJobs);
                        }).catch(err => {
                            console.log(err);
                        });
                    } else {
                        this.$message({
                            message: '删除失败',
                            type: 'error'
                        });
                    }
                }).catch(err => {
                    console.log(err);
                });
            } else if (type === 2) {
                deleteWorkExperience(id).then(res => {
                    if (res.data.code === 200) {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        getWorkExperience().then(res => {
                            this.workExperience = res.data.data;
                            this.workExperience.forEach(element => {
                                element.workTime = element.workTime.split("T")[0];
                                element.endTime = element.endTime.split("T")[0];
                                element.workTime = element.workTime.replace(/-/g, ".");
                                element.endTime = element.endTime.replace(/-/g, ".");
                            });
                            console.log(this.workExperience);
                        }).catch(err => {
                            console.log(err);
                        });
                    } else {
                        this.$message({
                            message: '删除失败',
                            type: 'error'
                        });
                    }
                }).catch(err => {
                    console.log(err);
                });
            } else if (type === 3) {
                deleteProjectExperience(id).then(res => {
                    if (res.data.code === 200) {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        getProjectExperience().then(res => {
                            this.projectExperience = res.data.data;
                            this.projectExperience.forEach(element => {
                                element.projectTime = element.projectTime.split("T")[0];
                                element.projectTime = element.projectTime.replace(/-/g, ".");
                            });
                            console.log(this.projectExperience);
                        }).catch(err => {
                            console.log(err);
                        });
                    } else {
                        this.$message({
                            message: '删除失败',
                            type: 'error'
                        });
                    }
                }).catch(err => {
                    console.log(err);
                });
            } else if (type === 4) {
                deleteEducationExperience().then(res => {
                    if (res.data.code === 200) {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        getEducationExperience().then(res => {
                            this.educationExperience = res.data.data;
                            this.year = this.educationExperience.graduationTime.split("-")[0];
                            this.enterTime = Number(this.educationExperience.graduationTime.split("-")[0]) - 4;
                            this.leaveTime = Number(this.educationExperience.graduationTime.split("-")[0]);
                            console.log(this.educationExperience);
                        }).catch(err => {
                            console.log(err);
                        });
                    } else {
                        this.$message({
                            message: '删除失败',
                            type: 'error'
                        });
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        }


    }
}
</script>
<style scoped>
.resume {
    width: 1700px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background: linear-gradient(to bottom, #DFF1F4, #F2F4F7);
    gap: 4px;
    justify-content: center;

}

.resume-catalogue {
    width: 160px;
    height: 292px;
    border-radius: 10px;
    background: #fff;
    margin-top: 16px;
}

.cattalogue-title {
    width: 160px;
    height: 44px;
    background: linear-gradient(to right, #F5FCFC, #FBFBFA);
    border-radius: 10px 10px 0 0;
    font-family: Arial, Helvetica, sans-serif;
}

.cattalogue-title h2 {
    font-size: 14px;
    padding: 12px 20px;
    font-weight: bold;
}

.catalogue-item {
    width: 160px;
    height: 248px;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #666666;
}

.catalogue-item-li {
    width: 152px;
    height: 40px;
    padding: 10px 16px;
    cursor: pointer;
    border-radius: 10px;
}

.catalogue-item-li:hover {
    background: #F8F8F8;
    color: #60B9B9;
    font-weight: bold;
}

.resume-content-box {
    width: 728px;
    height: 820px;
    border-radius: 10px;
    background: #fff;
    margin-top: 16px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
}

.resume-box-header {
    width: 728px;
    height: 44px;
    background: linear-gradient(to right, #F5FCFC, #FBFBFA);
    border-radius: 10px 10px 0 0;
}

.resume-box-header span {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: #999999;
    padding: 0 40px;
}

.item-primary {
    padding: 8px 24px 12px;
    display: flex;
    flex-direction: row;
}

.user-info {
    width: 564px;
    height: 124px;
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
}

.user-info:hover {
    background: #F8F8F8;
    border-radius: 10px;
}

.user-advantage {
    width: 80px;
    height: 80px;
    margin-left: 16px;
    margin-top: 16px;
}

.user-advantage img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
}

.user-name {
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.info-labels {
    display: flex;
    flex-direction: column;
    height: 75px;
    gap: 12px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: #333333;
    margin: 16px 0 0 0;
}

.p {
    display: flex;
    flex-direction: row;
    /* gap: 30px; */
}

.p span {
    margin-right: 20px;
    margin-left: 10px;
}

.item-primary-advantage-show {
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
}

.title {
    font-size: 20px;
    height: 27px;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    font-weight: bold;
    border-left: #00BEBD 3px solid;
    margin: 0 0 12px 16px;
    padding: 0 0 0 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.info-text {
    font-size: 14px;
    /* font-family: Arial, Helvetica, sans-serif; */
    color: #333333;
    padding: 8px 16px;
    line-height: 24px;
    gap: 8px;
    word-break: break-word;
    max-width: 100%;
    /* 控制最大宽度以允许换行 */
}

.info-text:hover {
    background: #F8F8F8;
    border-radius: 10px;
    cursor: pointer;
}

.info-text span {
    font-size: 14px;
    white-space: pre-wrap;
}

.school-badge {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: #333333;
    padding: 8px 0;
    line-height: 24px;
    padding: 8px 16px;
    border-radius: 10px;
}

.edit-button {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    color: #00BEBD;
}

.edit-button:hover {
    color: #60B9B9;
}

.add-button {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    color: #00BEBD;
}

.add-button:hover {
    color: #60B9B9;
}

.info-text-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.edit-del {
    display: flex;
    flex-direction: row;
    gap: 14px;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    color: #00BEBD;
}</style>