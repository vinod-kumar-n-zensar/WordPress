<template>
    <div class="reimagine page-section"  id="reimagine">
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
        <div class="container-fluid common-div">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><p>{{info.textPrimary}}</p></div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><p>{{info.textSecondary}}</p></div>
                    </div>
                </div>
        </div>
    </div> 
</template>

<script>
    export default{
        props:{
            info: Object
        }
    }
</script>