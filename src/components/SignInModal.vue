<template>
<div class="modal" id="SignInModal" tabindex="-1" role="dialog" refs="SignInModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title text-center">{{modalData.headerInfo}}</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" data-bi-bhvr="close modal" data-bi-dlnm="close the signup modal"  data-bi-dltype="close link">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="onSubmit">
      <div class="modal-body">
          <div class="form-group">
             <div class="field" :class="{error: errors.has('FirstName')}">
                <input class="form-control" v-validate="'required|alpha_spaces'" name="FirstName" type="text" placeholder="First Name" v-model="FirstName">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('LastName')}">
                <input class="form-control" v-validate="'required|alpha_spaces'" name="LastName" type="text" placeholder="Last Name" v-model="LastName">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('Email')}">
                <input class="form-control" type="Email" name="Email" placeholder="Work Email" v-validate="'required|email'" v-model="Email">
              </div>
          </div>
           <div class="form-group">
             <div class="field" :class="{error: errors.has('phone')}">
                <input class="form-control" v-validate="'required|max:40'" name="phone" type="number" placeholder="Work Phone" v-model="phone">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('Country')}">
                <v-select  v-model="Country"
                  v-validate="'required'" 
                  data-vv-value-path="mutableValue" 
                  data-vv-name="Country" 
                  label="name" 
                  :options="countryData"
                  :has-error="errors.has('Country')"
                  :class="{'error':errors.has('Country')}"
                  placeholder="Choose Country"
            ></v-select>
              </div>
          </div>
           <div class="form-group">
             <div class="field" :class="{error: errors.has('Company')}">
                <input class="form-control" v-validate="'required|alpha_spaces'" name="Company" type="text" placeholder="Company" v-model="Company">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('jobRole')}">
                <v-select v-model="jobRole"
                  v-validate="'required'" 
                  data-vv-value-path="mutableValue" 
                  data-vv-name="jobRole" 
                  label="name" 
                  :options="jobData"
                  :has-error="errors.has('jobRole')"
                  :class="{'error':errors.has('jobRole')}"
                  placeholder="Choose Job Role"
            ></v-select>
              </div>
          </div>
          <div class="">
          <div class="custom-control custom-checkbox checkbox-circle my-1 mr-sm-2">
            <input type="checkbox" class="custom-control-input" id="customControlInline">
            <label class="custom-control-label" for="customControlInline"><p>{{modalData.footerInfo}} <a v-bind:href="modalData.link.url" target="_blank"><span>{{modalData.link.text}}</span></a></p></label>
          </div>
        </div> 
      </div>
      <div class="modal-footer">
        <button type="submit" :disabled="errors.any()" ref="btnSubmit" class="btn btn-primary mx-auto btn-lg"  data-bi-bhvr="submit modal form" data-bi-dlnm="subit data from signup modal"  data-bi-dltype="submit link">Get Started</button>
      </div>
      </form>
      <form id="mktoForm_14282"></form>
    </div>
  </div>
</div>
</template>
<script>MktoForms2.loadForm("//app-sj18.marketo.com", "157-GQE-382", 14282);</script>

<script>
  import Vue from 'vue';
  import jq from 'jquery';
    export default{
        props:{
            modalData: Object,
        },
        data() {
          return {
            FirstName:'',
            LastName:'',
            Email: '',
            phone:'',
            Company:'',
            Country:'',
            jobRole:'',
            signed:'',
            jobData:'',
            countryData:''
          }
        },
        methods:{
          onSubmit() {
            this.$validator.validateAll().then(
              result =>{
                 if (!this.errors.any()) {
                    jq('.mktoForm  #FirstName').val(this.FirstName);
                    jq('.mktoForm  #LastName').val(this.LastName);
                    jq('.mktoForm  #Email').val(this.Email);
                    jq('.mktoForm  #Company').val(this.Company);
                    jq('.mktoForm  #Country option[value="' + this.Country.name + '"]').attr("selected", "selected");
                    jq('.mktoForm  #Title option[value="' + this.jobRole.name + '"]').attr("selected", "selected");
                    if(jq('#customControlInline:checked').length > 0){
                      jq('.mktoCheckboxList input').prop('checked', true)
                    }else{
                      jq('.mktoCheckboxList input').prop('checked', false)
                    }
                    jq('.mktoButton').trigger('click');
                  } else{
                    document.cookie = "signedIn = false";
                    this.$emit('update:signed','false');
                  }
              }
            )
          },
          callMktoForms(){
            let that = this;
            MktoForms2.loadForm("//app-sj18.marketo.com", "157-GQE-382", 14282,
                    function(form){
                      form.onSuccess(function(){
                        document.cookie = "signedIn = true";
                        jq('#SignInModal').modal('hide');
                        that.$emit('update:signed','true'); 
                        return false;
                      });
                    })
          },
        },
        beforeMount(){
          this.callMktoForms();
          this.jobData = this.modalData.jobRole;
          this.countryData = this.modalData.coutryList;
        }
    }
</script>
