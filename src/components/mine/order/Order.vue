<template>
    <div class="order">
        <div class="order_content">
            <div class="order_header">
                <span class="my_order">我的订单</span>
                <span class="order_details">更多</span>
            </div>
            <div class="order-table">
                <div class="order-state">
                    <img src="./unpaid.png" class="order-state-img">
                    <span class="order-state-txt">待付款</span>
                </div>
                <div class="order-state">
                    <img src="./unpaid.png" class="order-state-img">
                    <span class="order-state-txt">待付款</span>
                </div>
                <div class="order-state">
                    <img src="./unpaid.png" class="order-state-img">
                    <span class="order-state-txt">待付款</span>
                </div>
                <div class="order-state">
                    <img src="./unpaid.png" class="order-state-img">
                    <span class="order-state-txt">待付款</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeOrder'
}
</script>

<style lang="stylus" scoped>
    .order
        background:#f6f6f6
        width:100%
        height: 3rem
        .order_content
            background:#fff 
            height:2.8rem
            margin: 0 0.2rem
            border-radius:0.1rem 
            .order_header
                height:0.9rem
                border-bottom:#eee 0.01rem solid
                .my_order
                    line-height: 0.9rem
                    margin-left: 0.2rem
                    color: #333
                    font-size:.30rem
                    font-weight:bold
                .order_details
                    line-height: 0.9rem
                    margin-right : 0.2rem
                    float: right 
                    color: #999
            .order-table
                height:2.1rem
                display:flex
                .order-state
                    margin: auto 0
                    height: 1.3rem
                    width: 25%
                    .order-state-img
                        display: block
                        width: 0.8rem
                        height: 0.8rem
                        margin: 0 auto
                    .order-state-txt
                        margin-top: 0.1rem
                        display: block
                        height: 0.4rem
                        line-height: 0.4rem
                        text-align:center
                        font-size:.15rem
                        color: #333

</style>