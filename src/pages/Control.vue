<template>
    <div class="control common-page-img-fix page-section" id="control" >
        <div class="container-fluid common-page-head">
           
            <div class="container">
                <div>
                    <h3>{{controlInfo.chapter}}</h3>
                </div>
                <div>
                    <h1>{{controlInfo.title}}</h1>
                </div>
                <div class="d-lg-none imageContainer d-xl-none d-md-none">
                    <img data-aos="fade-left"  data-aos-anchor-placement="top-center" v-bind:src="controlInfo.urlsm" alt="">
                </div>
            </div> 
        </div>
        <div class="container-fluid common-page-subhead">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h3>{{controlInfo.head}}</h3>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-sm-none d-none d-md-block d-lg-block d-xl-block">
                        <img data-aos="fade-left" data-aos-anchor-placement="top-center"  v-bind:src="controlInfo.url" alt="">
                    </div>
                </div>
                
            </div> 
        </div>
        <div class="container-fluid common-div">
                <div class="container">
                    <div class="row commonGutSpaceBtm">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p>{{controlInfo.textPrimary}}</p>
                            <p v-html="controlInfo.textContent">{{controlInfo.textContent}}</p>
                            </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p v-html="controlInfo.textSecondary">{{controlInfo.textSecondary}}</p>
                            <p>{{controlInfo.textSecondarySub}}</p>
                            </div>
                    </div>

                    <div class="tabView">
                        <ul class="nav nav-tabs" id="controlTab" role="tablist">
                            <li class="nav-item col-lg-4 text-center">
                                <a class="nav-link active" id="sdc-tab" data-toggle="tab" href="#sdc" role="tab" aria-controls="sdc" aria-selected="true" data-bi-bhvr="sdc Tab" data-bi-dlnm="toggle Strong Data Consistency"  data-bi-dltype="btn">{{controlInfo.tabData.tabOne.head}}</a>
                            </li>
                            <li class="nav-item col-lg-4 text-center">
                                <a class="nav-link" id="edc-tab" data-toggle="tab" href="#edc" role="tab" aria-controls="edc" aria-selected="false" data-bi-bhvr="edc Tab" data-bi-dlnm="toggle Eventual Data Consistency"  data-bi-dltype="btn">{{controlInfo.tabData.tabTwo.head}}</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="controlTabContent">
                            <div class="tab-pane fade show active" id="sdc" role="tabpanel" aria-labelledby="sdc-tab">
                                <img v-bind:src="controlInfo.tabData.tabOne.url" alt="">
                            </div>
                            <div class="tab-pane fade imageContainer" id="edc" role="tabpanel" aria-labelledby="edc-tab">
                                <img v-bind:src="controlInfo.tabData.tabTwo.url" alt="">
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div> 
</template>

<script>
    export default{
        props:{
            controlInfo: Object
        }
    }
</script>