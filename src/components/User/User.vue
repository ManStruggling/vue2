<template>
    <div>
        <UserHead></UserHead>
        <div class="container pd">
            <UserShow></UserShow>
            <UserList></UserList>
        </div>
    </div>
</template>
<script>
import UserHead from './UserHead'
import UserShow from './UserShow'
import UserList from './UserList'
export default {
    components:{
        UserHead,UserShow,UserList
    }
}
</script>