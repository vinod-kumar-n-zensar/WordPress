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
                <v-select 
                  v-validate="'required'" 
                  data-vv-value-path="mutableValue" 
                  data-vv-name="Country" 
                  label="name" 
                  :options="countryData"
                  :has-error="errors.has('Country')"
                  :class="{'error':errors.has('Country')}"
                  placeholder="Choose Country"
                  :on-change="callme"
            ></v-select>
              </div>
          </div>
           <div class="form-group">
             <div class="field" :class="{error: errors.has('Company')}">
                <input class="form-control" v-validate="'required|alpha_spaces'" name="Company" type="text" placeholder="Company" v-model="Company">
              </div>
          </div>
          <div class="form-group">
             <div class="field country-select" :class="{error: errors.has('jobRole')}">
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
            <div class="custom-control custom-checkbox checkbox-circle my-1 mr-sm-2 wtc">
            <p>{{modalData.footerInfo}} <a v-bind:href="modalData.link.url" target="_blank"><span>{{modalData.link.text}}</span></a></p>
          </div>
          <div class="custom-control custom-checkbox checkbox-circle my-1 mr-sm-2 wc">
            <input type="checkbox" class="custom-control-input" id="customControlInline">
            <label class="custom-control-label" for="customControlInline"><p>{{modalData.footerInfo}} <a v-bind:href="modalData.link.url" target="_blank"><span>{{modalData.link.text}}</span></a></p></label>
          </div>
        </div> 
      </div>
      <div class="modal-footer justify-content-center">
        <button type="submit" :disabled="errors.any()" ref="btnSubmit" class="btn btn-primary  btn-lg"  data-bi-bhvr="submit modal form" data-bi-dlnm="subit data from signup modal"  data-bi-dltype="submit link">Get Started</button>
      </div>
      </form>
      <form id="mktoForm_14282"></form>
    </div>
  </div>
</div>
</template>
<script>
  import Vue from 'vue';
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
            countryData:'',
          }
        },
        methods:{
          onSubmit() {
            this.$validator.validateAll().then(
              result =>{
                 if (!this.errors.any()) {
                    jQuery('.mktoForm  #FirstName').val(this.FirstName);
                    jQuery('.mktoForm  #LastName').val(this.LastName);
                    jQuery('.mktoForm  #Email').val(this.Email);
                    jQuery('.mktoForm  #Company').val(this.Company);
                    jQuery('.mktoForm  #Country option[value="' + this.Country.name + '"]').attr("selected", "selected");
                    jQuery('.mktoForm  #Title option[value="' + this.jobRole.name + '"]').attr("selected", "selected");
                    if(jQuery('#customControlInline:checked').length > 0){
                      jQuery('.mktoCheckboxList input').prop('checked', true)
                    }else{
                      jQuery('.mktoCheckboxList input').prop('checked', false)
                    }
                    jQuery('.mktoButton').trigger('click');
                  } else{
                    document.cookie = "signedIn = false";
                    this.$emit('update:signed','false');
                  }
              }
            )
          },
          callMktoForms(){
            let that = this;
            MktoForms2.loadForm("http://app-sj18.marketo.com", "157-GQE-382", 14282,
                    function(form){
                      form.onSuccess(function(){
                        document.cookie = "signedIn = true";
                        jQuery('#SignInModal').modal('hide');
                        that.$emit('update:signed','true'); 
                        return false;
                      });
                    })
          },
          callme: selected =>{
            jQuery('.mktoForm  #Country option[value="' + $.trim(selected.name) + '"]').attr("selected", "selected");
            triggerChange();
            },
            
        },
        beforeMount(){
          this.callMktoForms();
          this.jobData = this.modalData.jobRole;
          this.countryData = this.modalData.coutryList;
        }
    }
</script>
