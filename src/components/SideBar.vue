<template>
    <div class="nav">
        <ul class="sidebar" >
            <li style="">
                <a href='/' style="" class="hyper-design">Home</a>
            </li>
            <li style="" class="li-design">
                <a href='/' style="" class="hyper-design">About</a>
            </li>
            <li style="" class="li-design">
                <a href='/' style="" class="hyper-design">Contact</a>
            </li>
            <li style="" class="li-design">
                <a href='/' style="" class="hyper-design">Products</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'SideBar',
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    .nav{width:200px;background-color:lightgrey;height:650px;}
    .sidebar{list-style-type:none;margin-top:50px;}
    .li-design{margin-top:20px;}
    .hyper-design{text-decoration:none}
</style>