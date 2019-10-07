<template>
    <div>
    <Tabs>
        <!-- <Icon type="arrow-up-a"></Icon> -->
          <Tab-pane label="数据结构" icon="arrow-up-a">
            <a href="#">1</a><br>
            <a href="#">2</a><br>
            <a href="#">3</a><br>
            <a href="#">4</a><br>
            <a href="#">5</a>         
          </Tab-pane>
          <Tab-pane label="信号系统" icon="social-windows">
            <a href="#">1</a><br>
            <a href="#">2</a><br>
            <a href="#">3</a><br>
            <a href="#">4</a><br>
            <a href="#">5</a>
          </Tab-pane>
          <Tab-pane label="C语言" icon="social-tux">
            <a href="#">1</a><br>
            <a href="#">2</a><br>
            <a href="#">3</a><br>
            <a href="#">4</a><br>
            <a href="#">5</a>
          </Tab-pane>
    </Tabs>
    <i-button type="info" class="more">More</i-button>  
    </div>
    
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
div{
  height: 400px;
}
a{
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px
}
.more{
  float: right;
}
</style>