<template>
  <div>
    <!--左边的导航栏-->
    <v-header title="商品分类"></v-header>
    <div class="shop-main">
      <div class="shopMenu">
        <ul>
          <li v-for="list in nav" :class="{active:isActive==list.type}" @click="addCLassFUc(list.type)">{{list.name}}</li>
        </ul>
      </div>
      <!--右边商品区-->
      <div class="shopGoods" style="border-left: 1px solid #999;">
        <div class="shopGoods-Menu">
          <ul>
            <li v-for="items in navShop" v-if="type===items.type">
              <div class="shopGoods-Menu-one" >
                <img :src="items.img"/>
                <span>{{items.brandName}}</span>
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
        type:0
      }
    },
    methods: {
      // 实现导航栏高亮
      addCLassFUc(o) {
        this.type = o;
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
    font-size: 13px;
    line-height: 35px;
    margin-top: 20px;
    color: #333;
    flex: 1;
    text-align: center;
  }

  .active {
    color: #f44;
    font-size: 19px;
  }

  .shopGoods {
    flex: 4;
  }


  .shopGoods-Menu li {
    display: inline-block;
    padding: 30px;
    text-align: center;
  }

  .shopGoods-Menu-one img {
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 50%;
    padding-bottom: 10px;
  }

</style>
