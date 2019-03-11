<template>
  <div>
    <!--左边的导航栏-->
    <v-header title="商品分类"></v-header>
    <div class="shop-main">
      <div class="shopMenu">
        <ul>
          <li v-for="list in nav" :class="{active:isActive==list.type}" @click="addCLassFUc(list.type)">{{list.name}}
          </li>
        </ul>
      </div>
      <!--右边商品区-->
      <div class="shopGoods">
        <div class="shopGoods-Menu">
          <!--标题图片-->
          <img style="padding:8px 8px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551360999932&di=00c95a87b6850940982986135bf0d195&imgtype=0&src=http%3A%2F%2Fp4.ssl.cdn.btime.com%2Ft0179296d244cd01a3b.jpg%3Fsize%3D564x266" width="95% /">
          <!--商品分类-->
          <ul>
            <li v-for="items in navShop" v-if="type===items.type">
              <div class="shopGoods-Menu-one">
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
    margin-top: 20px;
    color: #333;
    flex: 1;
    text-align: center;
  }

  .active {
    color: #f44;
    font-size: 17px;
  }

  .shopGoods {
    flex: 4;
    border-left: 1px solid #999;
  }


  .shopGoods-Menu li {
    display: inline-block;
    padding: 30px;
    text-align: center;
    font-size: 14px;
  }
  .shopGoods-Menu-one img {
    width: 50px;
    height: 50px;
    display: block;
    /*border-radius: 50%;*/
    padding-bottom: 10px;
  }

</style>
