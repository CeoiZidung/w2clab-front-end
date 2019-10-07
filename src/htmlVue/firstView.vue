<style scoped>
    /* Links */
a,
a:focus,
a:hover {
  color: #fff;
}

/* Custom default button */
.btn-default,
.btn-default:hover,
.btn-default:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
  background-color: #fff;
  border: 1px solid #fff;
}

/* Extra markup and styles for table-esque vertical and horizontal centering */
.site-wrapper {
  display: table;
  width: 100%;
  height: 350px; /* For at least Firefox */
  min-height: 100%;
  -webkit-box-shadow: inset 0 0 100px rgba(0,0,0,.5);
          box-shadow: inset 0 0 100px rgba(0,0,0,.5);
  background-color: #333;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0,0,0,.5);
}
.site-wrapper-inner {
  display: table-cell;
  vertical-align: top;
}
.cover-container {
  margin-right: auto;
  margin-left: auto;
}

/* Padding for spacing */
.inner {
  padding: 30px;
}


/*
 * Header
 */
.masthead-brand {
  margin-top: 10px;
  margin-bottom: 10px;
}

.masthead-nav > li {
  display: inline-block;
}
.masthead-nav > li + li {
  margin-left: 20px;
}
.masthead-nav > li > a {
  padding-right: 0;
  padding-left: 0;
  font-size: 16px;
  font-weight: bold;
  color: #fff; /* IE8 proofing */
  color: rgba(255,255,255,.75);
  border-bottom: 2px solid transparent;
}
.masthead-nav > li > a:hover,
.masthead-nav > li > a:focus {
  background-color: transparent;
  border-bottom-color: #a9a9a9;
  border-bottom-color: rgba(255,255,255,.25);
}
.masthead-nav > .active > a,
.masthead-nav > .active > a:hover,
.masthead-nav > .active > a:focus {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 768px) {
  .masthead-brand {
    float: left;
  }
  .masthead-nav {
    float: right;
  }
}


/*
 * Cover
 */

.cover {
  padding: 0 20px;
}
.cover .btn-lg {
  padding: 10px 20px;
  font-weight: bold;
}

/*
 * Affix and center
 */

@media (min-width: 768px) {
  /* Pull out the header and footer */
  .masthead {
    position: fixed;
    top: 0;
  }
  .mastfoot {
    position: fixed;
    bottom: 0;
  }
  /* Start the vertical centering */
  .site-wrapper-inner {
    vertical-align: middle;
  }
  /* Handle the widths */
  .masthead,
  .mastfoot,
  .cover-container {
    width: 100%; /* Must be percentage or pixels for horizontal alignment */
  }
}

@media (min-width: 992px) {
  .masthead,
  .mastfoot,
  .cover-container {
    width: 700px;
  }
}



    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        
    }
    .layout-footer{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-header{        
        
        height: 50px;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-contend{
        background-color: #eee ;
        margin: 10px
    }
    .img-full{
        margin-bottom:10px;
    }
    .imagcontainer{
      height:450px;
      overflow: hidden;
      margin-top: 10px;
      margin-bottom: 5px
    }
    
    .imagcontainer img{
      cursor: pointer;
      transition: all 1.2s;
    }
    .imagcontainer img:hover{
      transform: scale(1.4);
      
    }
    
 
</style>
<template>
    <div class="layout">
        <div class="layout-header">
          <router-view></router-view>
        </div>
        <div class="layout-contend">
            <Row>
                <i-col span="24">
                    <div class="site-wrapper">
                        <div class="site-wrapper-inner">
                        <div class="cover-container">
                        <div class="inner cover">
                            <h1 class="cover-heading">Welcome to T2C laboratary.</h1>
                            <p class="lead">This is our first pages of T2C laboratary.</p>
                            <p class="lead">If you are interested in our laboratary,please get in</p>
                            <p class="lead">
                            <router-link to="./mainland/homepage" class="btn btn-lg btn-default">Learn more</router-link>
                            <!-- <a href="#" class="btn btn-lg btn-default" >Learn more</a> -->
                            </p>
                        </div>
                        </div>
                        </div>
                    </div>
                </i-col>
            </Row>
            <Row :gutter="16">
                <i-col span="12">
                    <div class="imagcontainer">
                      <img src="../assets/img/cover_01.jpg" alt="">
                    </div>
                </i-col>
                <i-col span="12">
                    <div class="imagcontainer">
                      <img src="../assets/img/cover_02.jpg" alt="">
                    </div>
                </i-col>
            </Row>
           
            <Row :gutter="16">
                <i-col span="12">
                    <div class="imagcontainer">
                      <img src="../assets/img/cover_03.jpg" alt="">
                    </div>
                </i-col>
                <i-col span="12">
                    <div class="imagcontainer">
                      <img src="../assets/img/cover_04.jpg" alt="">
                    </div>
                </i-col>
            </Row>

        </div>
        <div class="layout-footer">
              <p>版权所有&copy;SECE_T2C实验</p>
        </div>
    </div>
  
</template>
<script>
    export default {
        
    }
</script>