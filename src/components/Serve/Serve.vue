<template>
    <div>
        <ServeHead></ServeHead>
        <ServeList :serve_list_data='serve_list_data'></ServeList>
    </div>
</template>
<script>
import ServeHead from './ServeHead';
import ServeList from './ServeList';
export default {
    data() {
        return {
            serve_list_data:[]
        }
    },
    components:{
        ServeHead,ServeList
    },
    mounted() {
        axios({
            url:'http://localhost:4000/api/petServe'
        }).then(
            res=>{
                this.serve_list_data = res.data.data[0].serve;
            }
        )
    },
}
</script>