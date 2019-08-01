<template>
    <div class="wallet">
        <div class="wallet-content">
            <div class="wallet-header">
                <span class="my_wallet">我的钱包</span>
                <span class="wallet_details">更多</span>
            </div>
            <div class="wallet-item" v-for='item of list' :key='item.id'>
                <img src="./tv.png"  class="wallet-item-img">
                <div class="wallet-item-name-wrapper">
                    <div class="wallet-item-en-name">
                        {{item.coinName}}
                    </div>
                    <div class="wallet-item-cn-name">
                        {{item.coinCnName}}
                    </div>
                </div>
                <div class="wallet-item-money-wrapper">
                    <div class="wallet-item-money">
                        {{item.money}}
                    </div>
                    <div class="wallet-item-lock-money">
                        {{item.lockmoney}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeWallet',
  data(){
      return{
          list:[
              {
                  id: '001',
                  url: '../../../assets/imgs/tv.png',
                  coinName: 'TV',
                  coinCnName: '(钛值)',
                  money: '0.00',
                  lockmoney: '冻结 0.00'
              },
              {
                  id: '002',
                  url: '../../../assets/imgs/tv.png',
                  coinName: 'TXB',
                  coinCnName: '(钛小白)',
                  money: '0.00',
                  lockmoney: '冻结 0.00'
              },
              {
                  id: '003',
                  url: '../../../assets/imgs/tv.png',
                  coinName: 'BCW',
                  coinCnName: '(比特奇迹)',
                  money: '0.00',
                  lockmoney: '冻结 0.00'
              },
              {
                  id: '004',
                  url: '../../../assets/imgs/tv.png',
                  coinName: 'NBJ',
                  coinCnName: '(汾酒币)',
                  money: '0.00',
                  lockmoney: '冻结 0.00'
              }
          ]
      }
  }
}
</script>

<style lang="stylus" scoped>
    .wallet
        background: #f6f6f6
        width: 100%
        .wallet-content
            background: #fff
            margin: 0 0.2rem
            border-radius:0.1rem 
            .wallet-header
                height:0.9rem
                .my_wallet
                    line-height: 0.9rem
                    margin-left: 0.2rem
                    color: #333
                    font-size:.30rem
                    font-weight:bold
                .wallet_details
                    line-height: 0.9rem
                    margin-right : 0.2rem
                    float: right 
                    color: #999
            .wallet-item
                border-top:#eee 0.01rem solid
                padding: 0 0.2rem
                height: 1.2 rem
                display:flex
                .wallet-item-img
                    margin: auto 0
                    height: 0.8rem
                    width: 0.8rem
                .wallet-item-name-wrapper
                    flex: 1
                    margin: auto 0
                    padding-left: 0.2rem
                    .wallet-item-en-name
                        color: #2A2A2A
                        font-size: 0.35rem
                    .wallet-item-cn-name
                        margin-top: 0.1rem
                        color: #808080
                .wallet-item-money-wrapper
                    margin: auto 0
                    .wallet-item-money
                        text-align: right 
                        color: #F97200
                        font-size: 0.35rem
                    .wallet-item-lock-money
                        margin-top: 0.1rem
                        color: #808080
</style>

