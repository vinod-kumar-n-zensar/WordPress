<template>
    <div class="cosmos common-page-img-fix page-section" id="cosmos">
        <div class="container-fluid common-page-head">
           
            <div class="container">
                <div>
                    <h3>{{cosmosInfo.chapter}}</h3>
                </div>
                <div>
                    <h1>{{cosmosInfo.title}}</h1>
                </div>
                <div class="d-lg-none imageContainer d-xl-none d-md-none">
                    <img data-aos="fade-left"  data-aos-anchor-placement="top-center" v-bind:src="cosmosInfo.urlsm" alt="">
                </div>
            </div> 
        </div>
        <div class="container-fluid common-page-subhead">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h3>{{cosmosInfo.head}}</h3>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-sm-none d-none d-md-block d-lg-block d-xl-block">
                        <img data-aos="fade-left" data-aos-anchor-placement="top-center" v-bind:src="cosmosInfo.url" alt="">
                    </div>
                </div>
                
            </div> 
        </div>
        <div class="container-fluid common-div">
                <div class="container border-bottom-black commonGutSpaceBtm">
                    <div class="row commonGutSpaceBtm">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p>{{cosmosInfo.textPrimary}}</p>
                            <p v-html="cosmosInfo.textContent">{{cosmosInfo.textContent}}</p>
                            </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p v-html="cosmosInfo.textSecondary">{{cosmosInfo.textSecondary}}</p>
                            </div>
                    </div>
                </div>
                
                <div class="container">
                    <div class="border-bottom-black paddTop">
                        <div class="prefixTitle">
                            <h3 class="blue">{{cosmosInfo.appData.title}}</h3>
                            <p>{{cosmosInfo.appData.content}}</p>
                        </div>
                        <ul class="nav nav-pills nav-fill commonGutSpaceTop  d-lg-none d-xl-none d-sm-none  d-xs-block" id="pills-tab" role="tablist">
                        <li class="nav-item" v-for="(items,index) in cosmosInfo.appData.navData">
                            <a class="nav-link " :class="{ 'active': index === 0 }" v-bind:id="'pills-'+items.content.link+'-tab'" data-toggle="pill" v-bind:href="'#pills-'+items.content.link" role="tab" aria-controls="strong-home" aria-selected="true"
                            v-bind:data-bi-bhvr="items.content.title+ ' Tab'" v-bind:data-bi-dlnm="'toggle to ' +items.content.title" data-bi-dltype="link"
                            ><strong>{{items.content.title}} <font-awesome-icon   icon="chevron-right" size="xs" /> </strong></a>
                        </li>
                        
                    </ul>
                     <section>
                    <div class="d-none d-md-block  d-lg-block d-xl-block commonGutSpaceTop sliderBox">
                        <vue-slider class="cursor-pointer" ref="slider" v-bind="demo.demo1" v-model="demo.demo1.value" @callback="signalChange()"></vue-slider>
                    </div>
                </section>
                    <div class="tab-content commonGutSpaceTop" id="pills-tabContent">
                        <div v-for="(items,index) in cosmosInfo.appData.navData" class="tab-pane fade" v-bind:id="'pills-'+items.content.link" role="tabpanel" aria-labelledby="pills-strong-tab" :class="{ 'active show': index === 0 }">
                            <div class="row">
                                <div class="col-lg-3  col-xs-12 col-sm-12 text-center">
                                    <img v-bind:src="items.content.url" alt="">
                                </div>
                                <div  class="col-lg-9 col-lg-3 col-xs-12 col-sm-12">
                                    <h3 class="blue">{{items.content.head}}</h3>
                                    <p>{{items.content.content.infoPrimary}}</p>
                                    <ul class="">
                                        <li v-for="listData in items.content.content.listData" >
                                            <p><span  v-html="listData.title">{{listData.title}}</span> <span>{{listData.content}}</span></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="border-top-black common-div imageContainer commonGutSpaceTop ">
                                <img v-bind:src="items.content.content.url" alt="">
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="row paddTop commonGutSpaceTop">
                        <div class="col-lg-3 col-xs-12 col-sm-12 col-md-4">
                            <div class="row">
                                <div v-for="range in cosmosInfo.appData.footer.range" class="col-lg-6 col-xs-6 col-sm-6 rangeContainer">
                                    <p><span :class="range.info"></span> {{range.info}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                          <p>{{cosmosInfo.appData.footer.noteData}}</p>
                        </div>
                    </div>
                </div>
        </div>
    </div> 
</template>

<script>
import $ from 'jquery'
import Vue from 'vue';
import vueSlider from 'vue-slider-component'
Vue.component('vue-slider',vueSlider)
    export default{
        props:{
            cosmosInfo: Object,
        },
        data () {
            return {
                demo: {
                    demo1: {
                    width:"96%",
                    style:{
                        "padding":"0",
                        "margin": "auto",
                        "transform": "0"
                    },
                    startAnimation: false,
                    value: 0,
                    height: 5,
                    dotSize: 20,
                    dotWidth: 97,
                    dotHeight:14,
                    min: 0,
                    max: 20,
                    interval: 5,
                    disabled: false,
                    show: true,
                    speed: 0.3,
                    reverse: false,
                    lazy: false,
                    tooltip: false,
                    piecewise: false,
                    piecewiseLabel: true,
                    data: [
                        "Strong",
                        "Bounded-staleness",
                        "Session",
                        "Consistent prefix",
                        "Eventual "
                    ],
                    labelStyle:{
                        "width": "auto",
                        "text-align": "center"
                    }                                                                          
                    },
                    }
             }
            },
            methods: {
                swithFn: function(val){
                    switch (val) {
                        case "Strong":
                            $('#pills-Strong-tab').trigger('click');
                            break;
                        case "Bounded-staleness":
                            $('#pills-Bounded-tab').trigger('click');
                            break;
                        case "Session" :
                             $('#pills-Session-tab').trigger('click');
                             break;
                         case "Consistent prefix" :
                             $('#pills-Consistent-tab').trigger('click');
                             break;
                        case "Eventual" :
                             $('#pills-Eventual-tab').trigger('click');
                             break;
                        default:
                            $('#pills-Strong-tab').trigger('click');
                    }
                },
                signalChange: function(event){
                    let val = $.trim(this.demo.demo1.value);
                    $('.vue-slider-piecewise-item').removeClass('active');
                    $('.vue-slider-piecewise-item').each( function (index) {
                        $(this).find('.vue-slider-piecewise-label').text().trim() == val ?  $(this).addClass('active') : '';
                    })
                    this.swithFn(val);
                },
                callSetSliderVal: function(index){
                    let val = index * 5;
                    this.$refs.slider.setValue(val);
                },
            },
            mounted(){
                let iconel = '<svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-6"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>'
                $('.vue-slider-piecewise-label').append( iconel );
            }
}
</script>