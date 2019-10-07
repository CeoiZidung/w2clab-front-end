<style scoped>
.bgimg{
  height: 110px;
  text-align:center;
  background: url('../assets/img/logo.png');
}

.nar{
  width: 100% ;
  /* height: 20px; */
  background-color: #F8F8F8 !important;

}
</style>
<template>
    <div>
        <div class="bgimg"></div>
        <div class="nar">
            <Menu mode="horizontal" active-key="1">
            <Menu-item key="1"></Menu-item>
            <Menu-item key="2"></Menu-item>
            <Menu-item key="3"></Menu-item>
            <Menu-item key="4"></Menu-item>
            <Menu-item key="5"></Menu-item>

            <Menu-item key="6">
            <Icon type="ios-paper"></Icon>
            <router-link to="/mainland/homepage">首页</router-link>
            </Menu-item>

            <Menu-item key="7">
            <Icon type="ios-people"></Icon>
            <router-link to="/mainland/news">新闻</router-link>
            </Menu-item>

            <Menu-item key="8">
            <Icon type="ios-people"></Icon>
            <router-link to="/mainland/labs">实验室</router-link>
            </Menu-item>

            <Menu-item key="9">
            <Icon type="ios-paper"></Icon>
            <router-link to="/mainland/teacher">指导老师</router-link>
            </Menu-item>

            <Menu-item key="10">
            <Icon type="link"></Icon>
            <router-link to="/mainland/teach">教学</router-link>
            </Menu-item>
            </Menu>
        </div>
    <router-view></router-view>
    
    </div>
</template>
<script>
    export default {
        
    }
</script>

