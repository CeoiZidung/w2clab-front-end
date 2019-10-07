<style scoped>
.dash{
    margin: 2px;
    border: 1px ;
    height: 40px;
    color: #333;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
    
}
</style>
<template>
    <div>
        <Row>
        <i-col span="3" offset="1">
        <Row>
            <i-col>
                <div class="dash">
                    <router-link to="/mainland/labs/weblab">Web</router-link>
                </div>
            </i-col>
        </Row>
        <Row>
            <i-col>
                <div class="dash">
                    <router-link to="/mainland/labs/ailab">AI</router-link>
                </div>
            </i-col>
        </Row>
        <Row>
            <i-col>
                <div class="dash">
                    <router-link to="/mainland/labs/bdatalab">BigData</router-link>
                </div>
            </i-col>
        </Row>
        
        </i-col>
        <i-col span="18" offset="2">
            <router-view></router-view>
        </i-col>
    </Row>
    <br>
    </div>
</template>
<script>
export default {
    
}
</script>