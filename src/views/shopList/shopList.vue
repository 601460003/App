<template>
  <div>
    <!--左边的导航栏-->
    <v-header title="商品分类"></v-header>
    <div class="shop-main">
      <div class="shopMenu">
        <ul>
          <li v-for="list in nav"
              :class="`classification-text ${isActive==list.type && 'active'}`"
              @click="addCLassFUc(list.type)">{{list.name}}
          </li>
        </ul>
      </div>
      <!--右边商品区-->
      <div class="shopGoods">
        <div class="shopGoods-Menu">
          <!--标题图片-->
          <img  src="https://ww1.sinaimg.cn/large/007i4MEmgy1g1f1uj1ewpj30c00520t4.jpg" width="100% /">
          <!--商品分类-->
          <ul class="brand-list">
            <li v-for="items in navShop" v-if="type===items.type">
              <div class="shopGoods-Menu-one">
                <img :src="items.img" class="brand"/>
                <div class="brand-text">{{items.brandName}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header'

  export default {
    components: {
      'v-header': header,
    },
    created() {
      //class/getSpecies
      this.$axios.get('class/getSpecies')
        .then(res => {
          this.nav=res.data.data.kind;
          this.navShop=res.data.data.brand
          if(this.nav.length >0){
            this.type = this.nav[0].type
          }
        })
    },
    data() {
      return {
        isActive: 1,
        nav: [],
        navShop: [],
        type:1
      }
    },
    methods: {
      // 实现导航栏高亮
      addCLassFUc(o) {
        // this.type = o;
        if(this.type = o){
          this.isActive=o
        }
      },
    },
  }
</script>

<style scoped>
  .shop-main {
    display: flex;
  }

  .shopMenu {
    height: 600px;
    font-size: 15px;
    line-height: 35px;
    padding-top: 60px;
    color: #333;
    flex: 1;
    text-align: center;
    background-color: #f5f5f5;
  }
  .classification-text{
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .active {
    background-color: #fff;
  }

  .shopGoods {
    flex: 4;
  }


  /*.shopGoods-Menu li {*/
    /*display: inline-block;*/
    /*padding: 30px;*/
    /*text-align: center;*/
    /*font-size: 14px;*/
  /*}*/
  .shopGoods-Menu-one{
    margin-left: 30px;
    margin-bottom: 30px;
  }
  .brand-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 20px;
  }
  .brand{
    width: 60px;
    height: 20px;
  }
  .brand-text{
    padding-top: 5px;
    font-size: 16px;
  }

</style>
