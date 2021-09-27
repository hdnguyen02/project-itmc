<template>
    <div id="container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <form class="form-group"> 
            <img class="avatar" src="../../assets/image/avatar.png" alt="">
            <h3 class="title">WELLCOME</h3>
            <input ref="inputmail" v-model="login.mail" class="input-login" type="text" placeholder="Enter email">
            <span class="errorMess"></span>
            <input ref="inputpassword" v-model="login.password" class="input-login" type="password" placeholder="Enter password">
            <span class="errorMess"></span>
            <a @click.prevent="functionlogin()" class="submit-btn" >login</a>
            <div class="login-diff">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-skype"></a>
            </div>
              <div>
        </div>
        </form>
      
    </div>
</template>

<script>
export default {

    data () {
        return {
            login:{
                mail:"",
                password:""
            }, 
        }
    },
    methods:{

 
    }
    
}
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}

.errorMess {
    display: none;
}


#container {
    background-color: rgb(93, 143, 201);
    width: auto;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    

}

.form-group {
    position: relative;
    width: 500px;
    height: 400px;
    background-color: white;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    

}

.form-group .title {
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    
}

.avatar {
    position:absolute;
    width: 80px;
    height: 80px;
    top: -50px;
    left: 210px;

}

.input-login {
    width: 300px;
    height: 40px;
    border: none;
    background-color: rgba(93, 143, 201, 0.2);
    border-radius: 35px;
    padding: 0px 30px;
     outline:none;

}
.submit-btn {
    background-color: rgba(5, 152, 98,1);
    display: inline-block;
    height: 40px;
    width: 360px;
    border: none;
    border-radius: 35px;
    font-size: 20px;
    color: white;
    font-weight: 900px;
    text-decoration: none;
    text-align: center;
    line-height: 40px;



    
    

}

.submit-btn:hover {
    background-color: rgba(5, 152, 98,0.6);
}

.fa {
  
  font-size: 30px;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
}



.fa-facebook {
  background: #3B5998;
  color: white;
  border-radius: 50%;
}

.fa-google {
  background: #dd4b39;
  color: white;
   border-radius: 50%;
}

.fa-skype {
  background: #00aff0;
  color: white;
   border-radius: 50%;
}

.login-diff {
   
    position:absolute;
    bottom: -28px;

    
    
}
.login-diff a {
    margin: 0px 20px;
}

</style>