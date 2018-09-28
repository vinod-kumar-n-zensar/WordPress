<template>
<header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      <div class="container">
  <a class="navbar-brand col-lg-2 col-sm-4 col-xs-4 col-md-2" href="#"><img class="img-fluid"  v-bind:src="logo.logo" alt="MS Azure Cosmos DB"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item" v-for="(item,index) in data" @click="changeActive($event)">
        <a class="nav-link"  v-bind:href="'#'+item.link" data-bi-bhvr="page link" v-bind:data-bi-dlnm="'navigate to '+item.link"  data-bi-dltype="link" v-if="signed == 'true'" v-scroll-to="{el: '#'+item.link, offset: -66,duration: 500}">
          {{item.title}}
        </a>
        <a class="nav-link"  @click="changeActive" v-bind:href="[item.title != 'Reimagine' && item.title != 'Leap' ? '' : '#'+item.link]" v-scroll-to="{el: '#'+item.link, offset: -66,duration: 500}" v-bind:data-toggle="[item.title != 'Reimagine' && item.title != 'Leap' ? 'modal' : '']" v-bind:data-bi-bhvr="[item.title != 'Reimagine' && item.title != 'Leap' ? 'SignUp Modal' : 'page link']" v-bind:data-target="[item.title != 'Reimagine' && item.title != 'Leap' ? '#SignInModal' : item.title]" v-bind:data-bi-dlnm="[item.title != 'Reimagine' && item.title != 'Leap' ? 'navigate to SignUp Modal' : 'navigate to ' +item.title]"  v-bind:data-bi-dltype="[item.title != 'Reimagine' && item.title != 'Leap' ? 'modal' : 'link']" v-else>
          <span v-if="item.title != 'Reimagine' && item.title != 'Leap'" class="grey" >
           <font-awesome-icon size="xs" icon="lock" /> {{item.title}}<span class="sr-only">(current)</span>
          </span>
           <span v-else>
             {{item.title}}<span class="sr-only">(current)</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>
</nav>

</header>
</template>

<script>
import jq from 'jquery';
import AOS from 'aos';
export default {
    props:{
        data: Array,
        logo: Object,
        signed: String,
        windowHeight: Number
    },
    methods:{
      changeActive: (that)=>{
        jq(".navbar .nav-item").removeClass("active");
        let ele = that.currentTarget
        jq(ele).find('.navbar .nav-link,.navbar .nav-item').removeClass('active')                                            
        jq(ele).addClass('active')
      },
      handleScroll: ()=>{
        let scrollDistance = jq(window).scrollTop() + 100;
		    // Assign active class to nav links while scolling
		    jq('.page-section').each(function(i) {
				if (jq(this).position().top <= scrollDistance) {
						jq('.navbar .nav-item a.active,.navbar .nav-item').removeClass('active');
						jq('.navbar .nav-item a').eq(i).addClass('active');
        } else if(scrollDistance < jq('.banner').height()){
          jq('.navbar .nav-item a.active,.navbar .nav-item').removeClass('active');
        }
        })
         AOS.refresh();
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>