<template>
    <footer  class="page-section">
            <div v-if="signed != 'true'">
                <div class="container-fluid common-footer-color">
                    <div class="container" >
                        <div class="text-center">
                            <h1>{{info.NoSign.head}}</h1>
                            <p class="col-lg-9 col-md-12 col-xs-12 col-sm-12 mx-auto">{{info.NoSign.info}}</p>
                            <button type="button" id="SignUpLink" data-toggle="modal" data-bi-bhvr="SignUp Modal" data-bi-dlnm="navigate to SignUp Modal" data-bi-dltype="modal" data-target="#SignInModal"  class="btn btnNosign btn-lg"><font-awesome-icon size="xs" icon="lock" /> {{info.NoSign.ButtonText}}</button>
                        </div>
                    </div> 
                </div>
                <ms-sign-in-modal
                :modalData="modalInfo"
                :signed.sync="signed"></ms-sign-in-modal>
            </div>
            <div v-else  :style="{height: windowHeight + 'px'}">
                <div class="container-fluid common-page-head">
                    <div class="container">
                        <div class="col-lg-10 mx-auto">
                            <div>
                                <h2>{{info.signed.head}}</h2>
                            </div>
                            <div>
                                <h4>{{info.signed.author}}</h4>
                            </div>
                        </div>
                    </div> 
                </div>
                <div id="dbcosmos" class="common-banner-fix" :style="style">
                    <div class="container h-100">
                        <div class="row align-items-center h-100">
                            <div class="col db-link-box">
                                <div class="text-center">
                                    <div id="AzureCosmosDBLink" class="link-box col-lg-5 col-md-6 text-left cursor-pointer" @click="redirectPage(info.signed.BtnText.url)" data-bi-bhvr="AzureCosmosDB" data-bi-dlnm="navigate to cosmos DB Page" data-bi-dltype="cosmos db">
                                        <h1 class="blue">{{info.signed.BtnText.head}}</h1>
                                        <h3 class="blue">{{info.signed.BtnText.footer}}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="container copyriteText-container">
                                <div class="row align-items-end">
                                    <div class="col-lg-7">
                                        <p class="font-secondary-color">{{info.signed.coprriteText}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    </footer>
</template>

<script>
    import MsSignInModal from './SignInModal.vue';
    export default{
        components:{
            MsSignInModal
        },
        props:{
            info: Object,
            modalInfo: Object,
            signed: String,
            windowHeight: Number,
        },
        computed: {
            style () {
                return 'backgroundImage: url( "' + this.info.signed.url + '")';
            },
        },
        watch:{
            signed: function(newVal, oldVal) { // watch it
            this.$emit('update:signed',newVal);
            }
        },
        methods:{
            redirectPage: (link)=>{
                window.location.href = link
            }
        }
    }
</script>