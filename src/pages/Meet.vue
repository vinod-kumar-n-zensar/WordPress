<template>
    <div class="meet common-page-img-fix page-section" id="meet">
        <div class="container-fluid common-page-head">
            <div class="container">
                <div>
                    <h3>{{meetInfo.chapter}}</h3>
                </div>
                <div>
                    <h1>{{meetInfo.title}}</h1>
                </div>
                <div class="d-lg-none imageContainer d-xl-none d-md-none">
                    <img data-aos="fade-left" v-bind:src="meetInfo.urlsm" alt="">
                </div>
            </div> 
        </div>
        <div class="container-fluid common-page-subhead">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h3>{{meetInfo.head}}</h3>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageContainer d-sm-none d-none d-md-block d-lg-block d-xl-block">
                        <img data-aos="fade-left" v-bind:src="meetInfo.url" alt="">
                    </div>
                </div>
                
            </div> 
        </div>
        <div class="container-fluid common-div common-card-padd">
                <div class="container border-bottom-black">
                    <div class="row commonGutSpaceBtm">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><p>{{meetInfo.textPrimary}}</p></div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p>{{meetInfo.textSecondary}}</p>
                            <p>{{meetInfo.extraInfo}}</p>
                            </div>
                    </div>
                </div>
                <div class="container">
                        <div class="common-div">
                            <h3 class="blue">{{meetInfo.dataReplicate.title}}</h3>
                            <p>{{meetInfo.dataReplicate.content}}</p>
                        </div>
                        <div class="imageContainer">
                            <img data-aos="zoom-in" v-bind:src="meetInfo.dataReplicate.url" />
                        </div>
                </div>
        </div>
    </div> 
</template>

<script>
    export default{
        props:{
            meetInfo: Object
        }
    }
</script>