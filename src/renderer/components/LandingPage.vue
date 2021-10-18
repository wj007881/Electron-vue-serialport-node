<template>
  <div id="wrapper" style="width:500px">
    <div class="title">
    <h1 >LAAT Client</h1>
    </div>
    <div class="log_area">
      <el-input id="pullDta" v-model="pullData" :onChange="log_change" type="textarea" resize="none" placeholder="Log显示区" style="width:300px;margin-top:20px;" :rows="10" readonly></el-input>                 
      </div>
      <div class="ipAddr">
                    <ul class="ipAdress">
                        <li v-for="(item,index) in ipAddress" :key="index">
                            <input type="text" @input="checkIpVal(item,index)" @keyup="turnIpPOS(item,index,$event)"
                                v-model="item.value" ref="ipInput" @blur="setDefaultVal(item)" />
                            <div style="margin-top:7px">:</div>
                        </li>
                    </ul>
                    <div style="width:300px;text-align:center;margin-top:10px">
                        <el-button :size="buttonSize" type="primary"  @click="get_ip">获取IP</el-button>
                        <el-button :size="buttonSize" type="primary"  @click="comfirm_ip">确认IP</el-button>
                    </div>
                     <div style="width:300px;text-align:center;margin-top:20px">
                        <el-button v-show='START' :size="buttonSize" type="primary" style="width:200px;height:100px;font-size:30px;color:black;background-color:#01B1AD;border-color:#01B1AD" @click="start_fun">START</el-button>
                        <el-button v-show='!START' :size="buttonSize" type="primary" style="width:200px;height:100px;font-size:30px;color:black;background-color:#EFE0E3;border-color:#EFE0E3;margin-left:-5px" @click="stop_fun">STOP</el-button>
                    </div>
                    </div>
    </div>
    </div>
    
</template>

<script>
import Vue from 'vue'

  export default {
    name: 'landing-page',
    data: function() {
    return {
      START:true,
      show_num:1,
      pullData: '',
      buttonSize: 'big',
      ipAddress: [{
                    value: ''
                }, {
                    value: ''
                }, {
                    value: ''
                }, {
                    value: ''
                }],
    };
},

    components: {  },
    watch: {
          pullData: 'log_change' // 值可以为methods的方法名

        },
    methods: {
          genRenderer() {
                // let ipcRenderer = window.electron.ipcRenderer;
              const remote = window.require('electron').remote
              window.fs = remote.getGlobal('fs');
              
              console.log = remote.getGlobal('log');
              const ip = remote.getGlobal('ip');
              Vue.ip =Vue.prototype.$ip = ip;

              const sudo = remote.getGlobal('sudo');
              Vue.sudo =Vue.prototype.$sudoer = sudo;
              
              const path=remote.getGlobal('path');
              Vue.path =Vue.prototype.$path = path;
            },
          get_ip(){
              const IPAddress=Vue.ip.address();
              console.log(IPAddress);
              let ip_arr=IPAddress.split(".")
              
              for (let i=0;i<this.ipAddress.length;i++){
                this.ipAddress[i].value=ip_arr[i]
                console.log(ip_arr[i])
              }
              
          },
          async comfirm_ip(){
              let options = {name: 'electron sudo application'};
              let cmd='cd '+

              
              Vue.sudo.exec('start ./static/Monitor.exe /monitor', options,
              (error, stdout, stderr)=>{
                if (error) throw error;
                console.log('stdout: ' + stdout);
              })
          },
          log_change(curVal, oldVal){
              let result=curVal.substring(oldVal.length,curVal.length)
              if (result=="BLK"){
                  console.log("TypeC错误，请注意")
              }
              else{
                  console.log("TypeC成功")
              }
            },
          start_fun(){
              this.START=false
                },
          stop_fun(){
              this.START=true
          },
          checkIpVal(item, index) {
              let self = this;
              //确保每个值都处于0-255
              let val = item.value;
              //当输入的是空格时，值赋为空
              val = val.trim();
              val = parseInt(val, 10);
              let e = event || window.event;
              
              if (isNaN(val)) {
                  val = ''
              } else {
                  val = val < 0 ? 0 : val;
                  val = val > 255 ? 255 : val;
                  if(val<0){
                      val=''
                  }
                  else if (val.toString().length>2){
                      if (val<255){
                          self.$refs.ipInput[index + 1].focus();
                      }
                      else{
                          val=255 
                      }
                      if(index>2){
                              self.$refs.ipInput[3].focus();
                          }
                      else{
                              self.$refs.ipInput[index + 1].focus();
                          }

                  }
                  
              }
              item.value = val;
          },
          turnIpPOS(item, index, event) {
                let self = this;
                let e = event || window.event;
                // console.log(index);
                //删除键把当前数据删除完毕后会跳转到前一个input，左一不做任何处理
                if (e.keyCode == 8) {
                    let val = item.value;
                    console.log(val);
                    if (index == 0) { } else if(val==''){
                        self.$refs.ipInput[index - 1].focus();
                    }
                }
                //右箭头、回车键、空格键、冒号均向右跳转，右一不做任何措施
                if (e.keyCode == 39 || e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 190 || e.keyCode == 110) {
                    if (index == 3) { } else {
                        self.$refs.ipInput[index + 1].focus();
                    }
                }
            },
            setDefaultVal(item) {
                //当input失去焦点，而ip没有赋值时，会自动赋值为0
                let val = item.value;
                if (val == '') {
                    item.value = '';
                }
            },
        },
    mounted(){
      this.genRenderer();
    }
  }
</script>

<style>
.ipAdress {
            display: flex;
            align-items: center;
            border:1px solid  gainsboro;
            width: 300px;
            height: 80px;
            font-size: 50px;
            margin-top: 30px;
            padding: 10px;
            line-clamp: 80px;
        }

        .ipAdress li {
            position: relative;
            height: 23px;
            margin: 0;
            list-style: none;
            margin-top: -10px;
        }

        ul[class="ipAdress"] input[type="text"] {
            border: none;
            width: 100%;
            text-align: center;
            background: transparent;
            color: #000;
            
        }

        .ipAdress li div {
            position: absolute;
            top: -5px;
            right: 0; 
            padding: auto;
        }

        /*只需要3个div*/
        .ipAdress li:last-child div {
            display: none;
        }

        /*取消掉默认的input focus状态*/
        .ipAdress input:focus {
            outline: none;
        }

        /*取消掉默认的input focus状态*/
        .ipAdress input{
            font-size: 30px;
            margin-left: -10px;
            margin-top: -20px;
        }
.ipAddr{
    
    display: inline-block;
}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; text-align: center;}

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

  main > div { flex-basis: 50%; text-align: center;}

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
    text-align: center;
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
