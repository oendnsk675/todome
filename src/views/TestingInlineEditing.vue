<template>
  <div>
      <span @click="toggleEdit(this, user[0].val)">{{user[0].val}}</span> <button @click="toggleEdit(this, user[0].val)" class="bg-red-500">teken</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            user :[{
                val : 'osi',
                edit : false
            }]
        }
    },
    methods:{
        toggleEdit(ev, data){
            console.log(ev, data);
        }
    }
}
</script>

<style>

</style>