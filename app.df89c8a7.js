(function(){"use strict";var t={6242:function(t,e,s){var o=s(9242),i=s(3396);function a(t,e,s,o,a,l){const n=(0,i.up)("AHHeader"),r=(0,i.up)("LoadingSpinner"),c=(0,i.up)("AHBody"),u=(0,i.up)("AHFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(n),this.$store.state.isLoading?((0,i.wg)(),(0,i.j4)(r,{key:0})):((0,i.wg)(),(0,i.j4)(c,{key:1,customers:this.customers},null,8,["customers"])),(0,i.Wm)(u)],64)}var l=s(4311);const n=t=>((0,i.dD)("data-v-95e97c82"),t=t(),(0,i.Cn)(),t),r={class:"pt-4 px-3 px-lg-4"},c={class:"container-fluid"},u={class:"row"},m={class:"col-sm-6 col-md-4 col-lg-3 col-xl-2"},d=n((()=>(0,i._)("img",{class:"brand",src:"https://aham.com.my/clients/Affin_Hwang_Capital_C0C09289-21F6-4E4F-BA45-A8A98943FE33/contentms/img/Logo/logo-aham-color.svg",alt:"Your Company Logo"},null,-1))),g=n((()=>(0,i._)("hr",null,null,-1)));function p(t,e){return(0,i.wg)(),(0,i.iD)("header",r,[(0,i._)("div",c,[(0,i._)("div",u,[(0,i._)("div",m,[(0,i.Wm)(o.uT,{mode:"out-in",name:"slide-fade",appear:""},{default:(0,i.w5)((()=>[d])),_:1})])])]),g])}var f=s(89);const b={},_=(0,f.Z)(b,[["render",p],["__scopeId","data-v-95e97c82"]]);var h=_;function w(t,e,s,o,a,l){const n=(0,i.up)("AHCustomers");return(0,i.wg)(),(0,i.j4)(n,{customers:this.customers},null,8,["customers"])}const v={class:"container"},N={class:"row"};function y(t,e,s,o,a,l){const n=(0,i.up)("CreateCustomer"),r=(0,i.up)("AHCustomersList");return(0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",N,[(0,i.Wm)(n,{class:"mb-3"}),(0,i.Wm)(r,{customers:this.customers},null,8,["customers"])])])}var C=s(7139);const k=t=>((0,i.dD)("data-v-3d8c0448"),t=t(),(0,i.Cn)(),t),D={key:0,class:"col-12"},U={key:0},A=["onClick"],E=k((()=>(0,i._)("i",{class:"bi bi-info-circle"},null,-1))),L=["id"],x=k((()=>(0,i._)("i",{class:"bi bi-trash"},null,-1))),j=k((()=>(0,i._)("br",null,null,-1))),V=k((()=>(0,i._)("i",{class:"bi bi-pencil-square"},null,-1))),F=k((()=>(0,i._)("br",null,null,-1))),H=k((()=>(0,i._)("i",{class:"bi bi-arrow-left"},null,-1))),Z={key:1,class:"col-12"},O=k((()=>(0,i._)("p",{class:"text-center text-secondary no-clients-alert mb-0"},"No clients registered for now. Register a new one?",-1))),R=[O];function $(t,e,s,a,l,n){const r=(0,i.up)("center"),c=(0,i.up)("CardComponent"),u=(0,i.up)("UpdateCustomer");return s.customers.length>0?((0,i.wg)(),(0,i.iD)("div",D,[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[l.isViewDetails?((0,i.wg)(),(0,i.j4)(o.uT,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[l.isEditDetail?((0,i.wg)(),(0,i.j4)(u,{key:1,customer:t.customer,onToggleEdit:e[3]||(e[3]=t=>l.isEditDetail=t),isEditDetail:l.isEditDetail},null,8,["customer","isEditDetail"])):((0,i.wg)(),(0,i.iD)("div",{key:0,id:t.customer.id},[(0,i._)("p",null,[(0,i.Uk)("Customer ID: "),(0,i._)("strong",null,(0,C.zw)(t.customer.id),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Name: "),(0,i._)("strong",null,(0,C.zw)(t.customer.firstName+" "+t.customer.lastName),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Mobile No: "),(0,i._)("strong",null,(0,C.zw)(t.customer.moBileNo),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Age: "),(0,i._)("strong",null,(0,C.zw)(t.customer.age),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Email: "),(0,i._)("strong",null,(0,C.zw)(t.customer.email),1)]),(0,i._)("button",{class:"btn btn-outline-primary mb-2",onClick:e[0]||(e[0]=e=>n.deleteCustomer(t.customer.id))},[x,(0,i.Uk)(" Delete")]),j,(0,i._)("button",{class:"btn btn-outline-success mb-2",onClick:e[1]||(e[1]=e=>n.editDetails(t.customer))},[V,(0,i.Uk)(" Edit")]),F,(0,i._)("button",{class:"btn btn-outline-danger mb-2",onClick:e[2]||(e[2]=t=>this.isViewDetails=!1)},[H,(0,i.Uk)(" Back")])],8,L))])),_:1})])),_:1})])),_:1})):((0,i.wg)(),(0,i.iD)("div",U,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.customers,((t,e)=>((0,i.wg)(),(0,i.j4)(o.uT,{key:e,appear:"",name:"fade",mode:"out-in"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(c,{key:t.id,id:t.id},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{style:(0,C.j5)({"--i":e})},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i._)("p",null,[(0,i.Uk)("Customer ID: "),(0,i._)("strong",null,(0,C.zw)(t.id),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Name: "),(0,i._)("strong",null,(0,C.zw)(t.firstName+" "+t.lastName),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Age: "),(0,i._)("strong",null,(0,C.zw)(t.age),1)]),(0,i._)("button",{class:"d-block btn btn-outline-success",onClick:e=>n.viewDetails(t)},[E,(0,i.Uk)(" View Details")],8,A)])])),_:2},1032,["style"])])),_:2},1032,["id"]))])),_:2},1024)))),128))]))])),_:1})])):((0,i.wg)(),(0,i.iD)("div",Z,R))}const z={class:"card d-inline-block mb-3 me-3"};function W(t,e){return(0,i.wg)(),(0,i.iD)("div",z,[(0,i.WI)(t.$slots,"default",{},void 0,!0)])}const I={},B=(0,f.Z)(I,[["render",W],["__scopeId","data-v-a872a664"]]);var P=B;const T=t=>((0,i.dD)("data-v-15c191f3"),t=t(),(0,i.Cn)(),t),M={class:"col-12"},S={class:"row"},q={class:"col-12"},Y=T((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"firstName"},"Customer First Name",-1))),K={class:"row"},G={class:"col-12"},J=T((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"lastName"},"Customer Last Name",-1))),Q={class:"row"},X={class:"col-12"},tt=T((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"age"},"Customer Age",-1))),et={class:"row"},st={class:"col-12"},ot=T((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"mobileNo"},"Mobile Number",-1))),it={class:"row"},at={class:"col-12"},lt=T((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"email"},"Email Address",-1))),nt={class:"row"},rt=T((()=>(0,i._)("div",{class:"col-12"},[(0,i._)("button",{class:"btn btn-outline-success w-100 mb-2",type:"submit"},[(0,i._)("i",{class:"bi bi-pencil-square"}),(0,i.Uk)(" Update Details")])],-1))),ct={class:"col-12"},ut=T((()=>(0,i._)("i",{class:"bi bi-arrow-left"},null,-1)));function mt(t,e,s,a,l,n){return(0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("h5",null,[(0,i._)("strong",null,"Update "+(0,C.zw)(l.firstName)+" "+(0,C.zw)(l.lastName)+"'s Details",1)]),(0,i._)("form",{method:"POST",onSubmit:e[6]||(e[6]=(0,o.iM)(((...t)=>n.updateCustomerDetail&&n.updateCustomerDetail(...t)),["prevent"]))},[(0,i._)("div",S,[(0,i._)("div",q,[Y,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":e[0]||(e[0]=t=>l.firstName=t)},null,512),[[o.nr,l.firstName]])])]),(0,i._)("div",K,[(0,i._)("div",G,[J,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":e[1]||(e[1]=t=>l.lastName=t)},null,512),[[o.nr,l.lastName]])])]),(0,i._)("div",Q,[(0,i._)("div",X,[tt,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":e[2]||(e[2]=t=>l.age=t)},null,512),[[o.nr,l.age]])])]),(0,i._)("div",et,[(0,i._)("div",st,[ot,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":e[3]||(e[3]=t=>l.mobileNo=t)},null,512),[[o.nr,l.mobileNo]])])]),(0,i._)("div",it,[(0,i._)("div",at,[lt,(0,i.wy)((0,i._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":e[4]||(e[4]=t=>l.email=t)},null,512),[[o.nr,l.email]])])]),(0,i._)("div",nt,[rt,(0,i._)("div",ct,[(0,i._)("button",{class:"btn btn-outline-danger w-100",onClick:e[5]||(e[5]=t=>n.closeEdit(!1))},[ut,(0,i.Uk)(" Back")])])])],32)])}var dt={props:["customer","toggleEdit"],emits:["toggle-edit"],data(){return{updateEndPoint:"https://test-customers-backend.herokuapp.com/customers/edit/",id:this.customer.id,firstName:this.customer.firstName,lastName:this.customer.lastName,age:this.customer.age,mobileNo:this.customer.mobileNo,email:this.customer.email}},computed:{isLoading(){return this.$store.state.isLoading}},methods:{async updateCustomerDetail(){await this.$store.dispatch("isLoading",!0),await l.Z.post(this.updateEndPoint+this.id,{id:this.id,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.closeEdit(),await this.$store.dispatch("isLoading",!1)},closeEdit(t){return this.$emit("toggle-edit",t)}}};const gt=(0,f.Z)(dt,[["render",mt],["__scopeId","data-v-15c191f3"]]);var pt=gt,ft={props:["customers"],data(){return{isViewDetails:!1,isEditDetail:!1,deleteEndpoint:"https://test-customers-backend.herokuapp.com/deleteUser"}},components:{CardComponent:P,UpdateCustomer:pt},computed:{isLoading(){return this.$store.state.isLoading}},methods:{viewDetails(t){this.customer=t,this.isViewDetails=!0},editDetails(t){this.customer=t,this.isEditDetail=!0},async deleteCustomer(t){await this.$store.dispatch("isLoading",!0),console.log(this.deleteEndpoint,{id:t}),await l.Z.post(this.deleteEndpoint,t).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.isViewDetails=!1,await this.$store.dispatch("isLoading",!1)}}};const bt=(0,f.Z)(ft,[["render",$],["__scopeId","data-v-3d8c0448"]]);var _t=bt;const ht=t=>((0,i.dD)("data-v-471845c3"),t=t(),(0,i.Cn)(),t),wt={key:0,class:"col-12"},vt=ht((()=>(0,i._)("a",{class:"toggle-btn-registration btn btn-outline-secondary mb-3 me-2",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Backend-Node"},[(0,i._)("i",{class:"bi bi-code-slash"}),(0,i.Uk)(" Source Code Backend")],-1))),Nt=ht((()=>(0,i._)("a",{class:"toggle-btn-registration btn btn-outline-secondary mb-3 me-2",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Frontend-Vue"},[(0,i._)("i",{class:"bi bi-code-slash"}),(0,i.Uk)(" Source Code Frontend")],-1))),yt=ht((()=>(0,i._)("i",{class:"bi bi-plus-lg"},null,-1))),Ct={key:1,class:"col-12 col-md-6 col-xl-4"},kt=ht((()=>(0,i._)("h5",null,[(0,i._)("strong",null,"New Customer Registration")],-1))),Dt={class:"row"},Ut={class:"col-12"},At=ht((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"firstName"},"Customer First Name",-1))),Et={class:"row"},Lt={class:"col-12"},xt=ht((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"lastName"},"Customer Last Name",-1))),jt={class:"row"},Vt={class:"col-12"},Ft=ht((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"age"},"Customer Age",-1))),Ht={class:"row"},Zt={class:"col-12"},Ot=ht((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"mobileNo"},"Mobile Number",-1))),Rt={class:"row"},$t={class:"col-12"},zt=ht((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"email"},"Email Address",-1))),Wt={class:"row"},It=ht((()=>(0,i._)("div",{class:"col-12"},[(0,i._)("button",{class:"btn btn-outline-success w-100 mb-2",type:"submit"},[(0,i._)("i",{class:"bi bi-plus-lg"}),(0,i.Uk)(" Create New Customer")])],-1))),Bt={class:"col-12"},Pt=ht((()=>(0,i._)("i",{class:"bi bi-arrow-left"},null,-1))),Tt={key:0,class:"row"},Mt=ht((()=>(0,i._)("div",{class:"col-12"},[(0,i._)("p",{class:"mb-0 text-danger"},"Please fill up the required fields!")],-1))),St=[Mt],qt=ht((()=>(0,i._)("hr",null,null,-1)));function Yt(t,e,s,a,l,n){const r=(0,i.up)("CardComponent"),c=(0,i.up)("center");return(0,i.wg)(),(0,i.j4)(c,null,{default:(0,i.w5)((()=>[l.showRegistrationForm?((0,i.wg)(),(0,i.iD)("div",Ct,[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[kt,(0,i._)("form",{method:"POST",onSubmit:e[7]||(e[7]=(0,o.iM)(((...t)=>n.registerNewCustomer&&n.registerNewCustomer(...t)),["prevent"]))},[(0,i._)("div",Dt,[(0,i._)("div",Ut,[At,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":e[1]||(e[1]=t=>l.firstName=t)},null,512),[[o.nr,l.firstName,void 0,{trim:!0}]])])]),(0,i._)("div",Et,[(0,i._)("div",Lt,[xt,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":e[2]||(e[2]=t=>l.lastName=t)},null,512),[[o.nr,l.lastName,void 0,{trim:!0}]])])]),(0,i._)("div",jt,[(0,i._)("div",Vt,[Ft,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":e[3]||(e[3]=t=>l.age=t)},null,512),[[o.nr,l.age,void 0,{trim:!0}]])])]),(0,i._)("div",Ht,[(0,i._)("div",Zt,[Ot,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":e[4]||(e[4]=t=>l.mobileNo=t)},null,512),[[o.nr,l.mobileNo,void 0,{trim:!0}]])])]),(0,i._)("div",Rt,[(0,i._)("div",$t,[zt,(0,i.wy)((0,i._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":e[5]||(e[5]=t=>l.email=t)},null,512),[[o.nr,l.email,void 0,{trim:!0}]])])]),(0,i._)("div",Wt,[It,(0,i._)("div",Bt,[(0,i._)("button",{class:(0,C.C_)([{"mb-2":l.formValidationAlert,"":!l.formValidationAlert},"btn btn-outline-danger w-100"]),type:"submit",onClick:e[6]||(e[6]=(...t)=>n.toggleRegistrationForm&&n.toggleRegistrationForm(...t))},[Pt,(0,i.Uk)(" Back")],2)])]),l.formValidationAlert?((0,i.wg)(),(0,i.iD)("div",Tt,St)):(0,i.kq)("",!0)],32)])),_:1}),qt])):((0,i.wg)(),(0,i.iD)("div",wt,[vt,Nt,(0,i._)("button",{class:"toggle-btn-registration btn btn-outline-primary mb-3",onClick:e[0]||(e[0]=(...t)=>n.toggleRegistrationForm&&n.toggleRegistrationForm(...t))},[yt,(0,i.Uk)(" Add New Customer")])]))])),_:1})}var Kt={components:{CardComponent:P},data(){return{registrationEndPoint:"https://test-customers-backend.herokuapp.com/customers",firstName:"",lastName:"",age:"",mobileNo:"",email:"",showRegistrationForm:!1,formValidationAlert:!1}},computed:{isLoading(){return this.$store.state.isLoading}},methods:{async registerNewCustomer(){if(await this.$store.dispatch("isLoading",!0),""===this.firstName||""===this.lastName||""===this.age||""===this.mobileNo||""===this.email)return this.formValidationAlert=!0;this.formValidationAlert=!1,await l.Z.post(this.registrationEndPoint,{id:`cid${Date.now()}`,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.firstName=null,this.lastName=null,this.age=null,this.mobileNo=null,this.email=null,await this.$store.dispatch("isLoading",!1)},toggleRegistrationForm(){return this.showRegistrationForm=!this.showRegistrationForm}}};const Gt=(0,f.Z)(Kt,[["render",Yt],["__scopeId","data-v-471845c3"]]);var Jt=Gt,Qt={props:["customers"],components:{AHCustomersList:_t,CreateCustomer:Jt},data(){return{isViewAllCustomers:!0}}};const Xt=(0,f.Z)(Qt,[["render",y]]);var te=Xt,ee={props:["customers"],components:{AHCustomers:te}};const se=(0,f.Z)(ee,[["render",w]]);var oe=se;const ie={class:"text-center text-sm-start px-4 py-2"},ae=(0,i._)("hr",null,null,-1),le={class:"container-fluid"},ne={class:"row"},re={class:"col-12"};function ce(t,e,s,o,a,l){return(0,i.wg)(),(0,i.iD)("footer",ie,[ae,(0,i._)("div",le,[(0,i._)("div",ne,[(0,i._)("div",re,[(0,i._)("p",null,(0,C.zw)(l.updateDate())+" © Aham Capital Asset Management",1)])])])])}var ue={methods:{updateDate(){return(new Date).getFullYear()}}};const me=(0,f.Z)(ue,[["render",ce]]);var de=me;const ge=t=>((0,i.dD)("data-v-62113ae6"),t=t(),(0,i.Cn)(),t),pe={class:"centered overlay"},fe=ge((()=>(0,i._)("div",{class:"d-flex spinner"},[(0,i._)("div",{style:{"--j":1},class:"mx-1 spinner-grow one",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")]),(0,i._)("div",{style:{"--j":2},class:"mx-1 spinner-grow two",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")]),(0,i._)("div",{style:{"--j":3},class:"mx-1 spinner-grow three",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")])],-1))),be=[fe];function _e(t,e){return(0,i.wg)(),(0,i.iD)("div",pe,be)}const he={},we=(0,f.Z)(he,[["render",_e],["__scopeId","data-v-62113ae6"]]);var ve=we,Ne={name:"Customers-Frontend",components:{AHHeader:h,AHBody:oe,AHFooter:de,LoadingSpinner:ve},data(){return{getAllCustomersUrl:"https://test-customers-backend.herokuapp.com/customers",customers:[],isLoading:!1}},mounted(){this.getAllCustomers()},updated(){setInterval((()=>{this.getAllCustomers()}),1e5)},methods:{async getAllCustomers(){this.isLoading=!0;try{const t=await l.Z.get(this.getAllCustomersUrl);this.customers=t.data}catch(t){console.error(t)}this.isLoading=!0}}};const ye=(0,f.Z)(Ne,[["render",a]]);var Ce=ye,ke=s(1882);const De=(0,ke.MT)({state(){return{isLoading:!1}},mutations:{isLoading(t,e){t.isLoading=e}},actions:{isLoading(t,e){console.log(e),t.commit("isLoading",e)}},getters:{isLoading(t){return t.isLoading}}});var Ue=De;const Ae=(0,o.ri)(Ce);Ae.use(Ue),Ae.mount("#app")}},e={};function s(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,o,i,a){if(!o){var l=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],a=t[u][2];for(var n=!0,r=0;r<o.length;r++)(!1&a||l>=a)&&Object.keys(s.O).every((function(t){return s.O[t](o[r])}))?o.splice(r--,1):(n=!1,a<l&&(l=a));if(n){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,i,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,a,l=o[0],n=o[1],r=o[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(r)var u=r(s)}for(e&&e(o);c<l.length;c++)a=l[c],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(u)},o=self["webpackChunkcustomers_frontend"]=self["webpackChunkcustomers_frontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(6242)}));o=s.O(o)})();
//# sourceMappingURL=app.df89c8a7.js.map