<template>
    <div id="login">
        <div id="form" >
            <h3>Welcome</h3>
            <span><img src="../assets/avatar-01.jpg" alt=""></span>
            <div id="contentinputtext" >
            <input class="input" placeholder="Username" type="text">
            </div>
            <div>
            <input id="contentinputpass" class="input" placeholder="Password" type="password">
            </div>
            <a @click.prevent="login" class="btnLogin">Login</a>
            <ul>
                <li><a>Forgot Username / Password?</a></li>
                <div>
                <li><a>Don’t have an account? Sign up</a></li>
                <router-link to="/" class="btn-home" >Back to home</router-link>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        login () {
            // trước khi vào manage phải đăng nhập ở login
        }

    }
}
</script>


<style scoped>


* {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
    font-family: 'Roboto', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');


#login {
    display: flex;
    justify-content: center;
}


#form {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    width: 400px;
    overflow: hidden;
    
}

#form h3 {
    padding-bottom: 75px;
    text-align: center;
    font-weight: 900;
    font-size: 40px;

}

#form img {
    border-radius: 50%;
    width: 100px;

}

#form span {
    text-align: center;

}

.input {
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    height: 52px;
    padding-left: 10px;
    
}

#contentinputtext {
    margin-top: 85px;
    margin-bottom: 35px;
}

#contentinputpass {
    margin-bottom: 50px;
}

.btnLogin {
    background-color: rgb(87, 184, 70);
    display: inline-block;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: white;
    font-size: 20px;
    font-weight: 900;
    border-radius: 44px;
    text-decoration: none;
    cursor: pointer;

}

input::placeholder {
    font-size: 20px;
    opacity: 0.8;
    font-weight: 900;
}

#form ul {
    padding-top: 90px;
}
#form ul li {
    
    font-size: 18px;
    opacity: 0.8;
    cursor: pointer;
}

#form ul li:nth-child(1) {
    padding-bottom: 15px;
}

.btn-home {
    border: none;
    background-color: rgb(87, 184, 70);
    color: white;
    width: 130px;
    height: 35px;
    display: inline-block;
    line-height: 35px;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 44px;
    font-weight: 900;
   
}

ul div {
    display: flex;
    justify-content: space-between;
}

</style>

