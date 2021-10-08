<template>
    <div id="login">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <form class="form-group">
            <h3 class="title">WELLCOME</h3>
           
            <input @input="xoa" ref="email" @blur="email()" v-model="user.email" class="input-login " type="text" placeholder="Enter email">
           
            <input ref="pasword"  v-model="user.password" class="input-login" type="password" placeholder="Enter password">
            <div>
            <a @click.prevent="login"  class="submit-btn">login</a>
            <span class="errorMess"></span>
            </div>
            <div class="login-diff">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-skype"></a>
        </div>
        </form>
      
    </div>
</template>

<script>
export default {
    mounted () {
        this.loader(); // trả về thông tin manager
        // ý tưởng thực hiện validate (  )
        // quy ước quá att mang là : require="email"
        // bắc buộc nhập email

    },
    data () {
        return {
            user:{
                email:'',
                password:''
            },
            link:'http://localhost:3000/ower',
            ower:{}  
        }
    },
    methods : {
        xoa(){
            // xóa đi dòng trạng thái đỏ. 
            const err = document.querySelector('.errorMess'); // lấy ra tk nàu 
            err.style.display="none";
            err.innerText = '';
            this.$refs.email.classList.remove('errorred');

        },
        loader () {
            fetch (this.link)
                .then ( response => response.json() )
                .then ( data => this.ower = data )
        },
        login () {

            // khi người dùng nhấn vào nút đăng nhập
            this.email();
            // kiểm tra password có đúng hay không 
            if (this.user.email == this.ower.email && this.user.password == this.ower.password ) {
                this.$router.push('/manage'); // đi đến trang quản lý
            }
            else {
                // lấy ra thằng có claas đps 
            const err = document.querySelector('.errorMess'); // lấy ra tk nàu 
            err.style.display="block";
            err.innerText = 'Tài khoản hoặc mật khẩu không chính xác!';
            this.$refs.email.classList.add('errorred');
            this.$refs.pasword.classList.add('errorred');

            }
            
        },
        email() {
            // function check xem có phải email hay không
            // lấy ra dữ liệu.
        var re = /\S+@\S+\.\S+/;
        if (!re.test(this.user.email)) {
             this.$refs.email.classList.add('errorred');
            // thêm vào dòng chữ phía dưới.
            const err = document.querySelector('.errorMess'); // lấy ra tk nàu 
            err.style.display="block";
            err.innerText = 'trường này phải là email!';
        }
       
        
            
        }
      
            
        
    }

}
</script>

<style scoped>

.errorMess {
   display: none;
   color: red;
   font-size: 14px;
   margin-left: 50px;
 
}


#login {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/loginbackgroup.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

.form-group {
    position: relative;
    width: 500px;
    height: 400px;
    background-color: rgba(256, 256, 256, 1);
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}



.avatar {
    position:absolute;
    width: 80px;
    height: 80px;
    top: -50px;
    left: 210px;
    background-color: rebeccapurple;

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

.errorred {
    border: red 1px solid;
}

</style>