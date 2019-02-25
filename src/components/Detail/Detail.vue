<template>
    <div class="wrap">
        <DetailHead></DetailHead>
        <DetailCon :detail_data='detail_data'></DetailCon>
        <DetailBottom></DetailBottom>
    </div>
</template>
<script>
import DetailHead from './DetailHead'
import DetailCon from './DetailCon'
import DetailBottom from './DetailBottom'
export default {
    data(){
        return {
            detail_data:{}
        }
    },
    components:{
        DetailHead,DetailCon,DetailBottom
    },
    mounted() {
        axios({
            url:'http://localhost:4000/api/petDetail'
        }).then(
            res=>{
                let id = this.$route.params.id;          
                this.detail_data = res.data.data[0][id];  
            }
        )
        
    },
}
</script>