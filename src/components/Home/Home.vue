<template>
    <div>
        <HomeHead></HomeHead>
        <HomeSlider></HomeSlider>
        <HomeNav></HomeNav>
        <HomeList :home_list_1='home_list_1' :home_list_2='home_list_2' :home_list_3='home_list_3'></HomeList>
    </div>
</template>

<script>
    import HomeSlider from './HomeSlider';
    import HomeNav from './HomeNav';
    import HomeList from './HomeList';
    import HomeHead from './HomeHead';

    export default {
        data(){
            return {
                home_list_1:[],
                home_list_2:[],
                home_list_3:{}
            }
        },
        components:{
            HomeHead,HomeSlider,HomeNav,HomeList
        },
        mounted() {
            this.$http({
                url:'http://localhost:4000/api/petHome'
            }).then(
                res=>{
                    this.home_list_1 = res.data.data[0].home_list_1;
                    this.home_list_2 = res.data.data[0].home_list_2;
                    this.home_list_3 = res.data.data[0].home_list_3;
                    console.log(res.data.data)
                }
            )
        },
    }
</script>