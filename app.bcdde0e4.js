(function(){"use strict";var t={9465:function(t,e,s){var o=s(9242),i=s(3396);function l(t,e,s,o,l,a){const n=(0,i.up)("AHHeader"),r=(0,i.up)("LoadingSpinner"),c=(0,i.up)("AHBody"),u=(0,i.up)("AHFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(n),this.$store.state.isLoading?((0,i.wg)(),(0,i.j4)(r,{key:0})):((0,i.wg)(),(0,i.j4)(c,{key:1,customers:this.customers},null,8,["customers"])),(0,i.Wm)(u)],64)}var a=s(4311),n=s.p+"./your-logo.828b0317.svg";const r=t=>((0,i.dD)("data-v-491f2e26"),t=t(),(0,i.Cn)(),t),c={class:"pt-4 px-3 px-lg-4"},u={class:"container-fluid"},m={class:"row"},d={class:"col-sm-6 col-md-4 col-lg-3 col-xl-2"},p=r((()=>(0,i._)("img",{class:"brand",src:n,alt:"Your Company Logo"},null,-1))),g=r((()=>(0,i._)("hr",null,null,-1)));function f(t,e){return(0,i.wg)(),(0,i.iD)("header",c,[(0,i._)("div",u,[(0,i._)("div",m,[(0,i._)("div",d,[(0,i.Wm)(o.uT,{mode:"out-in",name:"slide-fade",appear:""},{default:(0,i.w5)((()=>[p])),_:1})])])]),g])}var b=s(89);const _={},h=(0,b.Z)(_,[["render",f],["__scopeId","data-v-491f2e26"]]);var w=h;function v(t,e,s,o,l,a){const n=(0,i.up)("AHCustomers");return(0,i.wg)(),(0,i.j4)(n,{customers:this.customers},null,8,["customers"])}const N={class:"container"},y={class:"row"};function C(t,e,s,o,l,a){const n=(0,i.up)("CreateCustomer"),r=(0,i.up)("AHCustomersList");return(0,i.wg)(),(0,i.iD)("div",N,[(0,i._)("div",y,[(0,i.Wm)(n,{class:"mb-3"}),(0,i.Wm)(r,{customers:this.customers},null,8,["customers"])])])}var k=s(7139);const D=t=>((0,i.dD)("data-v-1d1091bc"),t=t(),(0,i.Cn)(),t),U={key:0,class:"col-12"},L={key:0},E=["onClick"],A=D((()=>(0,i._)("i",{class:"bi bi-info-circle"},null,-1))),x=["id"],j=D((()=>(0,i._)("i",{class:"bi bi-trash"},null,-1))),V=D((()=>(0,i._)("br",null,null,-1))),F=D((()=>(0,i._)("i",{class:"bi bi-pencil-square"},null,-1))),H=D((()=>(0,i._)("br",null,null,-1))),Z=D((()=>(0,i._)("i",{class:"bi bi-arrow-left"},null,-1))),O={key:1,class:"col-12"},R=D((()=>(0,i._)("p",{class:"text-center text-secondary no-clients-alert mb-0"},"No clients registered for now. Register a new one?",-1))),$=[R];function z(t,e,s,l,a,n){const r=(0,i.up)("center"),c=(0,i.up)("CardComponent"),u=(0,i.up)("UpdateCustomer");return s.customers.length>0?((0,i.wg)(),(0,i.iD)("div",U,[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[a.isViewDetails?((0,i.wg)(),(0,i.j4)(o.uT,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[a.isEditDetail?((0,i.wg)(),(0,i.j4)(u,{key:1,customer:t.customer,onToggleEdit:e[3]||(e[3]=t=>a.isEditDetail=t),isEditDetail:a.isEditDetail},null,8,["customer","isEditDetail"])):((0,i.wg)(),(0,i.iD)("div",{key:0,id:t.customer.id},[(0,i._)("p",null,[(0,i.Uk)("Customer ID: "),(0,i._)("strong",null,(0,k.zw)(t.customer.id),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Name: "),(0,i._)("strong",null,(0,k.zw)(t.customer.firstName+" "+t.customer.lastName),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Mobile No: "),(0,i._)("strong",null,(0,k.zw)(t.customer.mobileNo),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Age: "),(0,i._)("strong",null,(0,k.zw)(t.customer.age),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Email: "),(0,i._)("strong",null,(0,k.zw)(t.customer.email),1)]),(0,i._)("button",{class:"btn btn-outline-primary mb-2",onClick:e[0]||(e[0]=e=>n.deleteCustomer(t.customer.id))},[j,(0,i.Uk)(" Delete")]),V,(0,i._)("button",{class:"btn btn-outline-success mb-2",onClick:e[1]||(e[1]=e=>n.editDetails(t.customer))},[F,(0,i.Uk)(" Edit")]),H,(0,i._)("button",{class:"btn btn-outline-danger mb-2",onClick:e[2]||(e[2]=t=>this.isViewDetails=!1)},[Z,(0,i.Uk)(" Back")])],8,x))])),_:1})])),_:1})])),_:1})):((0,i.wg)(),(0,i.iD)("div",L,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.customers,((t,e)=>((0,i.wg)(),(0,i.j4)(o.uT,{key:e,appear:"",name:"fade",mode:"out-in"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(c,{key:t.id,id:t.id},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{style:(0,k.j5)({"--i":e})},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i._)("p",null,[(0,i.Uk)("Customer ID: "),(0,i._)("strong",null,(0,k.zw)(t.id),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Name: "),(0,i._)("strong",null,(0,k.zw)(t.firstName+" "+t.lastName),1)]),(0,i._)("p",null,[(0,i.Uk)("Customer Age: "),(0,i._)("strong",null,(0,k.zw)(t.age),1)]),(0,i._)("button",{class:"d-block btn btn-outline-success",onClick:e=>n.viewDetails(t)},[A,(0,i.Uk)(" View Details")],8,E)])])),_:2},1032,["style"])])),_:2},1032,["id"]))])),_:2},1024)))),128))]))])),_:1})])):((0,i.wg)(),(0,i.iD)("div",O,$))}const W={class:"card d-inline-block mb-3 me-3"};function I(t,e){return(0,i.wg)(),(0,i.iD)("div",W,[(0,i.WI)(t.$slots,"default",{},void 0,!0)])}const P={},T=(0,b.Z)(P,[["render",I],["__scopeId","data-v-a872a664"]]);var M=T;const S=t=>((0,i.dD)("data-v-15c191f3"),t=t(),(0,i.Cn)(),t),B={class:"col-12"},q={class:"row"},Y={class:"col-12"},K=S((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"firstName"},"Customer First Name",-1))),G={class:"row"},J={class:"col-12"},Q=S((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"lastName"},"Customer Last Name",-1))),X={class:"row"},tt={class:"col-12"},et=S((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"age"},"Customer Age",-1))),st={class:"row"},ot={class:"col-12"},it=S((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"mobileNo"},"Mobile Number",-1))),lt={class:"row"},at={class:"col-12"},nt=S((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"email"},"Email Address",-1))),rt={class:"row"},ct=S((()=>(0,i._)("div",{class:"col-12"},[(0,i._)("button",{class:"btn btn-outline-success w-100 mb-2",type:"submit"},[(0,i._)("i",{class:"bi bi-pencil-square"}),(0,i.Uk)(" Update Details")])],-1))),ut={class:"col-12"},mt=S((()=>(0,i._)("i",{class:"bi bi-arrow-left"},null,-1)));function dt(t,e,s,l,a,n){return(0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("h5",null,[(0,i._)("strong",null,"Update "+(0,k.zw)(a.firstName)+" "+(0,k.zw)(a.lastName)+"'s Details",1)]),(0,i._)("form",{method:"POST",onSubmit:e[6]||(e[6]=(0,o.iM)(((...t)=>n.updateCustomerDetail&&n.updateCustomerDetail(...t)),["prevent"]))},[(0,i._)("div",q,[(0,i._)("div",Y,[K,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":e[0]||(e[0]=t=>a.firstName=t)},null,512),[[o.nr,a.firstName]])])]),(0,i._)("div",G,[(0,i._)("div",J,[Q,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":e[1]||(e[1]=t=>a.lastName=t)},null,512),[[o.nr,a.lastName]])])]),(0,i._)("div",X,[(0,i._)("div",tt,[et,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":e[2]||(e[2]=t=>a.age=t)},null,512),[[o.nr,a.age]])])]),(0,i._)("div",st,[(0,i._)("div",ot,[it,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":e[3]||(e[3]=t=>a.mobileNo=t)},null,512),[[o.nr,a.mobileNo]])])]),(0,i._)("div",lt,[(0,i._)("div",at,[nt,(0,i.wy)((0,i._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":e[4]||(e[4]=t=>a.email=t)},null,512),[[o.nr,a.email]])])]),(0,i._)("div",rt,[ct,(0,i._)("div",ut,[(0,i._)("button",{class:"btn btn-outline-danger w-100",onClick:e[5]||(e[5]=t=>n.closeEdit(!1))},[mt,(0,i.Uk)(" Back")])])])],32)])}var pt={props:["customer","toggleEdit"],emits:["toggle-edit"],data(){return{updateEndPoint:"https://test-customers-backend.herokuapp.com/customers/edit/",id:this.customer.id,firstName:this.customer.firstName,lastName:this.customer.lastName,age:this.customer.age,mobileNo:this.customer.mobileNo,email:this.customer.email}},computed:{isLoading(){return this.$store.state.isLoading}},methods:{async updateCustomerDetail(){await this.$store.dispatch("isLoading",!0),await a.Z.post(this.updateEndPoint+this.id,{id:this.id,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.closeEdit(),await this.$store.dispatch("isLoading",!1)},closeEdit(t){return this.$emit("toggle-edit",t)}}};const gt=(0,b.Z)(pt,[["render",dt],["__scopeId","data-v-15c191f3"]]);var ft=gt,bt={props:["customers"],data(){return{isViewDetails:!1,isEditDetail:!1,deleteEndpoint:"https://test-customers-backend.herokuapp.com/deleteUser"}},components:{CardComponent:M,UpdateCustomer:ft},computed:{isLoading(){return this.$store.state.isLoading}},methods:{viewDetails(t){this.customer=t,this.isViewDetails=!0},editDetails(t){this.customer=t,this.isEditDetail=!0},async deleteCustomer(t){await this.$store.dispatch("isLoading",!0),console.log(this.deleteEndpoint,{id:t}),await a.Z.post(this.deleteEndpoint,t).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.isViewDetails=!1,await this.$store.dispatch("isLoading",!1)}}};const _t=(0,b.Z)(bt,[["render",z],["__scopeId","data-v-1d1091bc"]]);var ht=_t;const wt=t=>((0,i.dD)("data-v-471845c3"),t=t(),(0,i.Cn)(),t),vt={key:0,class:"col-12"},Nt=wt((()=>(0,i._)("a",{class:"toggle-btn-registration btn btn-outline-secondary mb-3 me-2",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Backend-Node"},[(0,i._)("i",{class:"bi bi-code-slash"}),(0,i.Uk)(" Source Code Backend")],-1))),yt=wt((()=>(0,i._)("a",{class:"toggle-btn-registration btn btn-outline-secondary mb-3 me-2",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Frontend-Vue"},[(0,i._)("i",{class:"bi bi-code-slash"}),(0,i.Uk)(" Source Code Frontend")],-1))),Ct=wt((()=>(0,i._)("i",{class:"bi bi-plus-lg"},null,-1))),kt={key:1,class:"col-12 col-md-6 col-xl-4"},Dt=wt((()=>(0,i._)("h5",null,[(0,i._)("strong",null,"New Customer Registration")],-1))),Ut={class:"row"},Lt={class:"col-12"},Et=wt((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"firstName"},"Customer First Name",-1))),At={class:"row"},xt={class:"col-12"},jt=wt((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"lastName"},"Customer Last Name",-1))),Vt={class:"row"},Ft={class:"col-12"},Ht=wt((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"age"},"Customer Age",-1))),Zt={class:"row"},Ot={class:"col-12"},Rt=wt((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"mobileNo"},"Mobile Number",-1))),$t={class:"row"},zt={class:"col-12"},Wt=wt((()=>(0,i._)("label",{class:"d-flex justify-content-start",for:"email"},"Email Address",-1))),It={class:"row"},Pt=wt((()=>(0,i._)("div",{class:"col-12"},[(0,i._)("button",{class:"btn btn-outline-success w-100 mb-2",type:"submit"},[(0,i._)("i",{class:"bi bi-plus-lg"}),(0,i.Uk)(" Create New Customer")])],-1))),Tt={class:"col-12"},Mt=wt((()=>(0,i._)("i",{class:"bi bi-arrow-left"},null,-1))),St={key:0,class:"row"},Bt=wt((()=>(0,i._)("div",{class:"col-12"},[(0,i._)("p",{class:"mb-0 text-danger"},"Please fill up the required fields!")],-1))),qt=[Bt],Yt=wt((()=>(0,i._)("hr",null,null,-1)));function Kt(t,e,s,l,a,n){const r=(0,i.up)("CardComponent"),c=(0,i.up)("center");return(0,i.wg)(),(0,i.j4)(c,null,{default:(0,i.w5)((()=>[a.showRegistrationForm?((0,i.wg)(),(0,i.iD)("div",kt,[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[Dt,(0,i._)("form",{method:"POST",onSubmit:e[7]||(e[7]=(0,o.iM)(((...t)=>n.registerNewCustomer&&n.registerNewCustomer(...t)),["prevent"]))},[(0,i._)("div",Ut,[(0,i._)("div",Lt,[Et,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":e[1]||(e[1]=t=>a.firstName=t)},null,512),[[o.nr,a.firstName,void 0,{trim:!0}]])])]),(0,i._)("div",At,[(0,i._)("div",xt,[jt,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":e[2]||(e[2]=t=>a.lastName=t)},null,512),[[o.nr,a.lastName,void 0,{trim:!0}]])])]),(0,i._)("div",Vt,[(0,i._)("div",Ft,[Ht,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":e[3]||(e[3]=t=>a.age=t)},null,512),[[o.nr,a.age,void 0,{trim:!0}]])])]),(0,i._)("div",Zt,[(0,i._)("div",Ot,[Rt,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":e[4]||(e[4]=t=>a.mobileNo=t)},null,512),[[o.nr,a.mobileNo,void 0,{trim:!0}]])])]),(0,i._)("div",$t,[(0,i._)("div",zt,[Wt,(0,i.wy)((0,i._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":e[5]||(e[5]=t=>a.email=t)},null,512),[[o.nr,a.email,void 0,{trim:!0}]])])]),(0,i._)("div",It,[Pt,(0,i._)("div",Tt,[(0,i._)("button",{class:(0,k.C_)([{"mb-2":a.formValidationAlert,"":!a.formValidationAlert},"btn btn-outline-danger w-100"]),type:"submit",onClick:e[6]||(e[6]=(...t)=>n.toggleRegistrationForm&&n.toggleRegistrationForm(...t))},[Mt,(0,i.Uk)(" Back")],2)])]),a.formValidationAlert?((0,i.wg)(),(0,i.iD)("div",St,qt)):(0,i.kq)("",!0)],32)])),_:1}),Yt])):((0,i.wg)(),(0,i.iD)("div",vt,[Nt,yt,(0,i._)("button",{class:"toggle-btn-registration btn btn-outline-primary mb-3",onClick:e[0]||(e[0]=(...t)=>n.toggleRegistrationForm&&n.toggleRegistrationForm(...t))},[Ct,(0,i.Uk)(" Add New Customer")])]))])),_:1})}var Gt={components:{CardComponent:M},data(){return{registrationEndPoint:"https://test-customers-backend.herokuapp.com/customers",firstName:"",lastName:"",age:"",mobileNo:"",email:"",showRegistrationForm:!1,formValidationAlert:!1}},computed:{isLoading(){return this.$store.state.isLoading}},methods:{async registerNewCustomer(){if(await this.$store.dispatch("isLoading",!0),""===this.firstName||""===this.lastName||""===this.age||""===this.mobileNo||""===this.email)return this.formValidationAlert=!0;this.formValidationAlert=!1,await a.Z.post(this.registrationEndPoint,{id:`cid${Date.now()}`,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.firstName=null,this.lastName=null,this.age=null,this.mobileNo=null,this.email=null,await this.$store.dispatch("isLoading",!1)},toggleRegistrationForm(){return this.showRegistrationForm=!this.showRegistrationForm}}};const Jt=(0,b.Z)(Gt,[["render",Kt],["__scopeId","data-v-471845c3"]]);var Qt=Jt,Xt={props:["customers"],components:{AHCustomersList:ht,CreateCustomer:Qt},data(){return{isViewAllCustomers:!0}}};const te=(0,b.Z)(Xt,[["render",C]]);var ee=te,se={props:["customers"],components:{AHCustomers:ee}};const oe=(0,b.Z)(se,[["render",v]]);var ie=oe;const le={class:"text-center text-sm-start px-4 py-2"},ae=(0,i._)("hr",null,null,-1),ne={class:"container-fluid"},re={class:"row"},ce={class:"col-12"};function ue(t,e,s,o,l,a){return(0,i.wg)(),(0,i.iD)("footer",le,[ae,(0,i._)("div",ne,[(0,i._)("div",re,[(0,i._)("div",ce,[(0,i._)("p",null,(0,k.zw)(a.updateDate())+" © Aham Capital Asset Management",1)])])])])}var me={methods:{updateDate(){return(new Date).getFullYear()}}};const de=(0,b.Z)(me,[["render",ue]]);var pe=de;const ge=t=>((0,i.dD)("data-v-62113ae6"),t=t(),(0,i.Cn)(),t),fe={class:"centered overlay"},be=ge((()=>(0,i._)("div",{class:"d-flex spinner"},[(0,i._)("div",{style:{"--j":1},class:"mx-1 spinner-grow one",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")]),(0,i._)("div",{style:{"--j":2},class:"mx-1 spinner-grow two",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")]),(0,i._)("div",{style:{"--j":3},class:"mx-1 spinner-grow three",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")])],-1))),_e=[be];function he(t,e){return(0,i.wg)(),(0,i.iD)("div",fe,_e)}const we={},ve=(0,b.Z)(we,[["render",he],["__scopeId","data-v-62113ae6"]]);var Ne=ve,ye={name:"Customers-Frontend",components:{AHHeader:w,AHBody:ie,AHFooter:pe,LoadingSpinner:Ne},data(){return{getAllCustomersUrl:"https://test-customers-backend.herokuapp.com/customers",customers:[],isLoading:!1}},mounted(){this.getAllCustomers()},updated(){setInterval((()=>{this.getAllCustomers()}),1e5)},methods:{async getAllCustomers(){this.isLoading=!0;try{const t=await a.Z.get(this.getAllCustomersUrl);this.customers=t.data}catch(t){console.error(t)}this.isLoading=!0}}};const Ce=(0,b.Z)(ye,[["render",l]]);var ke=Ce,De=s(1882);const Ue=(0,De.MT)({state(){return{isLoading:!1}},mutations:{isLoading(t,e){t.isLoading=e}},actions:{isLoading(t,e){console.log(e),t.commit("isLoading",e)}},getters:{isLoading(t){return t.isLoading}}});var Le=Ue;const Ee=(0,o.ri)(ke);Ee.use(Le),Ee.mount("#app")}},e={};function s(o){var i=e[o];if(void 0!==i)return i.exports;var l=e[o]={exports:{}};return t[o](l,l.exports,s),l.exports}s.m=t,function(){var t=[];s.O=function(e,o,i,l){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],l=t[u][2];for(var n=!0,r=0;r<o.length;r++)(!1&l||a>=l)&&Object.keys(s.O).every((function(t){return s.O[t](o[r])}))?o.splice(r--,1):(n=!1,l<a&&(a=l));if(n){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[o,i,l]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,l,a=o[0],n=o[1],r=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(r)var u=r(s)}for(e&&e(o);c<a.length;c++)l=a[c],s.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return s.O(u)},o=self["webpackChunkcustomers_frontend"]=self["webpackChunkcustomers_frontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(9465)}));o=s.O(o)})();
//# sourceMappingURL=app.bcdde0e4.js.map
