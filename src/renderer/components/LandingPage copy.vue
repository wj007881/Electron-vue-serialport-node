<template>
  <div id="wrapper" style="width:500px">
    <div class="title">
    <h1 >LAAT Romote</h1>
    </div>
    <!-- <h2 :v-for="(name,ip) in device_list">{{name}}</h2> -->
    
    <div style="text-align:center;display:block">
    <md-tabs class="md-transparent" md-alignment="left">
      <md-tab id="tab-1" md-label="Device 1">
        <div v-for="i in device_list" style="display:inline-block"
        :key="index" > 
         <div v-show="i.name=='tab-1'">
          <a >{{i.name}}</a>
          <div class="img_area">
            <img v-image-preview :src=i.img>
          </div>
          <div class="btn_area">
            <md-button class='md-raised md-primary' @click="update_status(i)">更新机器状态</md-button>
            <md-button class='md-raised md-primary' @click="prepare_pc(i)">预约测试机器</md-button>
          </div>
         </div>
        </div>
      </md-tab>
      <md-tab id="tab-2" md-label="Device 2">
        <div v-for="i in device_list" style="display:inline-block"
        :key="index" > 
         <div v-show="i.name=='tab-2'">
          <a >{{i.name}}</a>
          <div class="img_area">
            <img v-image-preview :src=i.img>
          </div>
          <div class="btn_area">
            
            <md-button class='md-raised md-primary' @click="update_status(i)">更新机器状态</md-button>
            <md-button class='md-raised md-primary' @click="prepare_pc(i)">预约测试机器</md-button>
          </div>
         </div>
        </div>
      </md-tab>
      <md-tab id="tab-3" md-label="Device 3">
        <div v-for="i in device_list" style="display:inline-block"
        :key="index" > 
         <div v-show="i.name=='tab-3'">
          <a >{{i.name}}</a>
          <div class="img_area">
            <img v-image-preview :src=i.img>
          </div>
          <div class="btn_area">
            <md-button class='md-raised md-primary' @click="update_status(i)">更新机器状态</md-button>
            <md-button class='md-raised md-primary' @click="prepare_pc(i)">预约测试机器</md-button>
          </div>
         </div>
        </div>
      </md-tab>
      <md-tab id="tab-4" md-label="Device 4" md-disabled>44444
          <div class="btn_area">
            <md-button class='md-raised md-primary' @click="update_status(i)">更新机器状态</md-button>
            <md-button class='md-raised md-primary' @click="prepare_pc(i)">预约测试机器</md-button>
          </div>
      </md-tab>

    </md-tabs>
    </div>
    </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  export default {
    name: 'landing-page',
    data: function() {
    return {
      show_num:1,
      device_list:[{
        'name':'tab-1',
        'ip':'192.168.50.161',
        'img':'http://laat.asuscomm.com:801/'
      },
      {
        'name':'tab-2',
        'ip':'192.168.0.2',
        'img':'http://laat.asuscomm.com:802/'
      },
      {
        'name':'tab-3',
        'ip':'192.168.50.60',
        'img':'http://laat.asuscomm.com:803/'
      }]
    };
},

    components: { SystemInformation },
    methods: {
      update_status(num){
        location.reload();
      },
      prepare_pc(num){
        console.log(num)
      },
    },
    mounted:{
      
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
  .btn_area{
    display: block;
    margin-left: -15px;
    margin-top: 10px;
  }
  .img_area{
    width:200px;
    height:113px;
    background-color:black;
    box-shadow:2px 2px 2px #888888
  }
  .title{
    color:white;
    background-color:#4387FA;
    height:50px;
    box-shadow:5px 5px 5px #888888
  }
  .title h1{
     padding-top:15px;
     font-size:30px;
     text-shadow: 2px 2px 2px #888888;
  }
</style>
