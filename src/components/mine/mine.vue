<template>
    <div class="home">
        <home-header></home-header>
        <home-order></home-order>
        <home-wallet></home-wallet>
        <nav-bottom :index="4"></nav-bottom>
    </div>
</template>

<script>
import HomeHeader from './header/Header'
import HomeBanner from './banner/Banner'
import HomeOrder from './order/Order'
import HomeWallet from './wallet/Wallet'
import NavBottom from '../common/navbottom/NavBottom'
export default {
  name: 'Home',
  components:{
      HomeHeader,
      HomeBanner,
      HomeOrder,
      HomeWallet,
      NavBottom
  }
}
</script>

<style lang="stylus" scoped>

</style>
