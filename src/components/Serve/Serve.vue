<template>
    <div>
        <ServeHead :search_key='search_key'></ServeHead>
        <ServeList :serve_list_data='serve_list_data' :str='str'></ServeList>
    </div>
</template>
<script>
import ServeHead from './ServeHead';
import ServeList from './ServeList';
export default {
    data() {
        return {
            serve_list_data:[],
            str:'洗澡'
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
    methods: {
        search_key(str){
            this.str = str;
        }
    },
}
</script>