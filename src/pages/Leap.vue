<template>
    <div class="leap page-section" id="leap">
        <div class="container-fluid common-page-head">
            <div class="container">
                <div>
                    <h3>{{info.chapter}}</h3>
                </div>
                <div>
                    <h1>{{info.title}}</h1>
                </div>
            </div> 
        </div>
        <div class="container-fluid common-page-subhead">
            <div class="container">
                <div>
                    <h2>{{info.head}}</h2>
                </div>
            </div> 
        </div>
        <div class="container-fluid">
                <div v-if="signed == 'true'">
                <div class="container">
                    <div class="row common-mob-padd-fix cat-keep-container common-div">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p>{{info.bodyText.basicInfo}}</p>
                            <h3>{{info.bodyText.headerInfo}}</h3>
                            <p>{{info.bodyText.workInfo}}</p>
                            <p class="blue">{{info.bodyText.petCompare}}</p>
                            <p>{{info.bodyText.cageFit}}</p>
                            <p class="blue">{{info.bodyText.cageSchema}}</p>
                            <p>{{info.bodyText.ownerInfo}}</p>
                            <p class="blue">{{info.bodyText.petRoom}}</p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer h-100" :style=style>
                            <img  data-aos="fade-in" v-bind:src="info.urlDual"  data-aos-anchor-placement="top-center"/>
                        </div>
                    </div>
                    <div class="common-padd-btm">
                    <h2 class="">{{info.toggleVolume.headerInfo}}</h2>
                    <div class="row common-card toggleVolume">
                        
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12" v-match-heights="{el: ['.common-card-info'],}">
                            
                            <div class="common-card-info card cursor-pointer" v-on:click="toggle = !toggle"  v-bind:class="{ active: toggle }">
                                <div v-show="toggle">
                                <h3 class="blue">{{info.toggleVolume.toggleInfoSecondary.headerInfo}}</h3>
                                    <p><strong>{{info.toggleVolume.toggleInfoSecondary.title}}</strong></p>
                                    <p>{{info.toggleVolume.toggleInfoSecondary.bodyText}}</p>
                                </div>
                                <div v-show="!toggle">
                                    <h3 class="blue">{{info.toggleVolume.toggleInfoPrimary.headerInfo}}</h3>
                                    <p><strong>{{info.toggleVolume.toggleInfoPrimary.title}}</strong></p>
                                    <p>{{info.toggleVolume.toggleInfoPrimary.bodyText}}</p>
                                    <p>{{info.toggleVolume.toggleInfoPrimary.extraInfo}}</p>
                                </div>
                            <button class="btn btn-primary btn-lg mt-auto    mx-auto" data-bi-bhvr="Volume Tab" data-bi-dlnm="toggle Volume"  data-bi-dltype="Volume" v-on:click.stop="toggle = !toggle"><span v-show="toggle"><font-awesome-icon   icon="chevron-left" /> {{info.toggleVolume.toggleInfoSecondary.btnText}}</span><span v-show="!toggle">{{info.toggleVolume.toggleInfoPrimary.btnText}} <font-awesome-icon   icon="chevron-right" /></span></button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-none d-md-none d-lg-block" >
                             <img v-bind:src="info.toggleVolume.url" />
                        </div>
                    </div>
                    <div class="row common-card toggleVelocity common-mob-padd-fix">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-none d-md-none d-lg-block" >
                             <img v-bind:src="info.toggleVelocity.url" />
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="common-card-info card cursor-pointer" v-on:click="velocity = !velocity" v-bind:class="{ active: velocity }">
                                <div v-show="velocity">
                                <h3 class="blue">{{info.toggleVelocity.toggleInfoSecondary.headerInfo}}</h3>
                                    <p><strong>{{info.toggleVelocity.toggleInfoSecondary.title}}</strong></p>
                                    <p>{{info.toggleVelocity.toggleInfoSecondary.bodyText}}</p>
                                </div>
                                <div v-show="!velocity" >
                                    <h3 class="blue">{{info.toggleVelocity.toggleInfoPrimary.headerInfo}}</h3>
                                    <p><strong>{{info.toggleVelocity.toggleInfoPrimary.title}}</strong></p>
                                    <p>{{info.toggleVelocity.toggleInfoPrimary.bodyText}}</p>
                                    <p>{{info.toggleVelocity.toggleInfoPrimary.extraInfo}}</p>
                                </div>
                            <button class="btn btn-primary btn-lg mt-auto    mx-auto" data-bi-bhvr="Velocity Tab" data-bi-dlnm="toggle Velocity"  data-bi-dltype="Velocity" v-on:click.stop="velocity = !velocity"><span v-show="velocity"><font-awesome-icon   icon="chevron-left" /> {{info.toggleVelocity.toggleInfoSecondary.btnText}}</span><span v-show="!velocity">{{info.toggleVelocity.toggleInfoPrimary.btnText}} <font-awesome-icon   icon="chevron-right" /></span></button>
                            </div>
                        </div>
                    </div>
                    <div class="row common-card toggleVariety common-mob-padd-fix">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="common-card-info card cursor-pointer" v-on:click="variety = !variety" v-bind:class="{ active: variety }">
                                <div v-show="variety">
                                <h3 class="blue">{{info.toggleVariety.toggleInfoSecondary.headerInfo}}</h3>
                                    <p><strong>{{info.toggleVariety.toggleInfoSecondary.title}}</strong></p>
                                    <p>{{info.toggleVariety.toggleInfoSecondary.bodyText}}</p>
                                </div>
                                <div v-show="!variety" >
                                    <h3 class="blue">{{info.toggleVariety.toggleInfoPrimary.headerInfo}} </h3>
                                    <p><strong>{{info.toggleVariety.toggleInfoPrimary.title}}</strong></p>
                                    <p>{{info.toggleVariety.toggleInfoPrimary.bodyText}}</p>
                                    <p>{{info.toggleVariety.toggleInfoPrimary.extraInfo}}</p>
                                </div>
                            <button class="btn btn-primary btn-lg mt-auto    mx-auto"  data-bi-bhvr="Variety Tab" data-bi-dlnm="toggle Variety"  data-bi-dltype="Variety" v-on:click.stop="variety = !variety"><span v-show="variety"><font-awesome-icon   icon="chevron-left" /> {{info.toggleVariety.toggleInfoSecondary.btnText}}</span><span v-show="!variety">{{info.toggleVariety.toggleInfoPrimary.btnText}} <font-awesome-icon   icon="chevron-right" /></span></button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-none d-md-none d-lg-block" >
                             <img v-bind:src="info.toggleVariety.url" />
                        </div>
                </div>
                <div class="row common-card toggleDynamic common-mob-padd-fix">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-none d-md-none d-lg-block" >
                             <img v-bind:src="info.toggleDynamic.url" />
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="common-card-info card cursor-pointer" v-on:click="dynamic = !dynamic" v-bind:class="{ active: dynamic }">
                                <div v-show="dynamic">
                                <h3 class="blue">{{info.toggleDynamic.toggleInfoSecondary.headerInfo}}</h3>
                                    <p><strong>{{info.toggleDynamic.toggleInfoSecondary.title}}</strong></p>
                                    <p>{{info.toggleDynamic.toggleInfoSecondary.bodyText}}</p>
                                </div>
                                <div v-show="!dynamic" >
                                    <h3 class="blue">{{info.toggleDynamic.toggleInfoPrimary.headerInfo}} </h3>
                                    <p><strong>{{info.toggleDynamic.toggleInfoPrimary.title}}</strong></p>
                                    <p>{{info.toggleDynamic.toggleInfoPrimary.bodyText}}</p>
                                    <p>{{info.toggleDynamic.toggleInfoPrimary.extraInfo}}</p>
                                </div>
                            <button class="btn btn-primary btn-lg mt-auto    mx-auto" data-bi-bhvr="Dynamic Tab" data-bi-dlnm="toggle Dynamic"  data-bi-dltype="Dynamic" v-on:click.stop="dynamic = !dynamic"><span v-show="dynamic"><font-awesome-icon   icon="chevron-left" /> {{info.toggleDynamic.toggleInfoSecondary.btnText}}</span><span v-show="!dynamic">{{info.toggleDynamic.toggleInfoPrimary.btnText}} <font-awesome-icon   icon="chevron-right" /></span></button>
                            </div>
                        </div>
                </div>
                <div id="slider"></div>
                <div class="row common-card toggleGlobal common-mob-padd-fix">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="common-card-info card cursor-pointer" v-on:click="global = !global" v-bind:class="{ active: global }">
                                <div v-show="global">
                                <h3 class="blue">{{info.toggleGlobal.toggleInfoSecondary.headerInfo}}</h3>
                                    <p><strong>{{info.toggleGlobal.toggleInfoSecondary.title}}</strong></p>
                                    <p>{{info.toggleGlobal.toggleInfoSecondary.bodyText}}</p>
                                </div>
                                <div v-show="!global" >
                                    <h3 class="blue">{{info.toggleGlobal.toggleInfoPrimary.headerInfo}}</h3>
                                    <p><strong>{{info.toggleGlobal.toggleInfoPrimary.title}}</strong></p>
                                    <p>{{info.toggleGlobal.toggleInfoPrimary.bodyText}}</p>
                                    <p>{{info.toggleGlobal.toggleInfoPrimary.extraInfo}}</p>
                                </div>
                            <button class="btn btn-primary btn-lg mt-auto    mx-auto"  data-bi-bhvr="global Tab" data-bi-dlnm="toggle global"  data-bi-dltype="global" v-on:click.stop="global = !global"><span v-show="global"><font-awesome-icon   icon="chevron-left" /> {{info.toggleGlobal.toggleInfoSecondary.btnText}}</span><span v-show="!global">{{info.toggleGlobal.toggleInfoPrimary.btnText}} <font-awesome-icon   icon="chevron-right" /></span></button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-none d-md-none d-lg-block" >
                             <img v-bind:src="info.toggleGlobal.url" />
                        </div>
                </div>
            </div>
            </div>
        </div>
    </div> 
    <div class="common-page-head leapFooter common-border-bottom" v-if="signed == 'true'">
                    <div class="container common-abs-container">
                    <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <p>{{info.footerContent.content}}</p>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer absContainer" >
                                <img data-aos="zoom-in"  data-aos-anchor-placement="top-center" v-bind:src="info.footerContent.url" />
                            </div>
                    </div>
                    </div>
    </div>
</div>
</template>

<script>
    import $ from 'jquery';
    export default{
        props:{
            info: Object,
            signed: String,
        },
        data(){
        return {
            toggle: this.toggle,
            velocity: this.velocity,
            variety: this.variety,
            dynamic: this.dynamic,
            global: this.global
            }
        },
        computed: {
            style () {
            return 'backgroundImage: url( "' + this.info.url + '")';
            }
        },
    }
</script>