<template>
    <form @submit="saveUser">
        <div class="col-6">
            <div class="form-group">
                <input type="email" class="form-control" placeholder="email" v-model="email"/>
    </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="password" v-model="password"/>
    </div>
                    <button class="btn btn-primary">Login</button>
                </div>
    </form>
</template>

<script>
export default {
name: 'AuthForm',
data(){
  return {
      email: '',
      password: ''
  }
},
methods:{
    saveUser(e){
        e.preventDefault();
        const user = {email: this.email, password: this.password};
        console.log(user)
        //save the user to localStorage

    }
}
}
</script>

<style>
</style>
