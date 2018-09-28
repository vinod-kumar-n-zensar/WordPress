
<template>
<div class="banner" :style="{height: windowHeight + 'px'}" ref="banner-box">
    <div class="header-row common-banner-fix" id="header-row" :style=style>
        <div id="color-overlay" :style="{height: windowHeight + 24 + 'px'}" class="d-sm-block d-md-block d-lg-none d-xl-none"></div>
   <div class="container d-flex h-100 ">
   <div class="d-sm-block d-md-block d-lg-none d-xl-none align-self-center">
        <div class="row  justify-content-center">     
                <div class="col-12">
                    <h1 class="common-banner-head">{{banner.data.heading}}</h1>
                    <h3>{{banner.data.body}}</h3>
                </div>
        </div>
   </div>
   <div class="d-none d-lg-block d-xl-block align-self-center">
      <div class="row  justify-content-end">     
            <div class="col-6">
                <h1 class="common-banner-head">{{banner.data.heading}}</h1>
                <h3>{{banner.data.body}}</h3>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
</template>

<script>
export default {
    props:{
        banner:{
            type: Object,
            required: true
        },
        windowHeight: Number,
    },
    computed: {
      style () {
        return 'backgroundImage: url( "' + this.banner.url + '")';
      },
    }
}
</script>

