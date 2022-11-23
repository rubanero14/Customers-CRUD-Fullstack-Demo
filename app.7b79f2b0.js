(function(){"use strict";var t={4412:function(t,e,s){var o=s(9242),l=s(3396);function i(t,e,s,o,i,a){const n=(0,l.up)("AHHeader"),r=(0,l.up)("AHBody"),c=(0,l.up)("AHFooter");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(n),(0,l.Wm)(r,{customers:this.customers},null,8,["customers"]),(0,l.Wm)(c)],64)}var a=s(4311);const n=t=>((0,l.dD)("data-v-39bb198f"),t=t(),(0,l.Cn)(),t),r={class:"pt-4 px-3 px-lg-4"},c={class:"container-fluid"},u={class:"row"},m={class:"col-sm-6 col-md-4 col-lg-3 col-xl-2"},d=n((()=>(0,l._)("img",{class:"brand",src:"https://aham.com.my/clients/Affin_Hwang_Capital_C0C09289-21F6-4E4F-BA45-A8A98943FE33/contentms/img/Logo/logo-aham-color.svg",alt:"Your Company Logo"},null,-1))),b=n((()=>(0,l._)("hr",null,null,-1)));function f(t,e){return(0,l.wg)(),(0,l.iD)("header",r,[(0,l._)("div",c,[(0,l._)("div",u,[(0,l._)("div",m,[(0,l.Wm)(o.uT,{mode:"out-in",name:"slide-fade",appear:""},{default:(0,l.w5)((()=>[d])),_:1})])])]),b])}var p=s(89);const g={},_=(0,p.Z)(g,[["render",f],["__scopeId","data-v-39bb198f"]]);var h=_;function v(t,e,s,o,i,a){const n=(0,l.up)("AHCustomers");return(0,l.wg)(),(0,l.j4)(n,{customers:this.customers},null,8,["customers"])}const w={class:"container"},N={class:"row"},C=(0,l._)("hr",null,null,-1);function y(t,e,s,o,i,a){const n=(0,l.up)("CreateCustomer"),r=(0,l.up)("AHCustomersList");return(0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("div",N,[(0,l.Wm)(n,{class:"mb-3"}),C,(0,l.Wm)(r,{customers:this.customers},null,8,["customers"])])])}var k=s(7139);const D=t=>((0,l.dD)("data-v-2bbe53a7"),t=t(),(0,l.Cn)(),t),A={key:0,class:"col-12"},U={class:"d-inline-block mb-2"},E=D((()=>(0,l._)("br",null,null,-1))),x={class:"d-inline-block mb-2"},j=D((()=>(0,l._)("br",null,null,-1))),V={class:"d-inline-block mb-2"},F=D((()=>(0,l._)("br",null,null,-1))),L=["onClick"],H=D((()=>(0,l._)("i",{class:"bi bi-info-circle"},null,-1))),O={key:0},Z=["id"],R={class:"col-12"},W={class:"col-12"},z={class:"col-12"},B={class:"col-12"},I={class:"col-12"},P={class:"col-12"},T=D((()=>(0,l._)("i",{class:"bi bi-trash"},null,-1))),M={class:"col-12"},S=D((()=>(0,l._)("i",{class:"bi bi-pencil-square"},null,-1))),$={class:"col-12"},q=D((()=>(0,l._)("i",{class:"bi bi-arrow-left"},null,-1))),Y={key:1,class:"col-12"},K=D((()=>(0,l._)("p",{class:"text-center text-secondary no-clients-alert mb-0"},"No clients registered for now. Register a new one?",-1))),G=[K];function J(t,e,s,i,a,n){const r=(0,l.up)("CardComponent"),c=(0,l.up)("center"),u=(0,l.up)("UpdateCustomer");return s.customers.length>0?((0,l.wg)(),(0,l.iD)("div",A,[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[a.isViewDetails?((0,l.wg)(),(0,l.j4)(o.uT,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[a.isEditDetail?((0,l.wg)(),(0,l.j4)(u,{key:1,customer:t.customer,onToggleEdit:e[3]||(e[3]=t=>a.isEditDetail=t),isEditDetail:a.isEditDetail},null,8,["customer","isEditDetail"])):((0,l.wg)(),(0,l.iD)("div",O,[(0,l._)("div",{class:"row",id:t.customer.id},[(0,l._)("div",R,[(0,l._)("p",null,[(0,l.Uk)("Customer ID: "),(0,l._)("strong",null,(0,k.zw)(t.customer.id),1)])]),(0,l._)("div",W,[(0,l._)("p",null,[(0,l.Uk)("Customer Name: "),(0,l._)("strong",null,(0,k.zw)(t.customer.firstName+" "+t.customer.lastName),1)])]),(0,l._)("div",z,[(0,l._)("p",null,[(0,l.Uk)("Customer Age: "),(0,l._)("strong",null,(0,k.zw)(t.customer.age),1)])]),(0,l._)("div",B,[(0,l._)("p",null,[(0,l.Uk)("Customer Mobile No: "),(0,l._)("strong",null,(0,k.zw)(t.customer.moBileNo),1)])]),(0,l._)("div",I,[(0,l._)("p",null,[(0,l.Uk)("Customer Email: "),(0,l._)("strong",null,(0,k.zw)(t.customer.email),1)])]),(0,l._)("div",P,[(0,l._)("button",{class:"btn btn-outline-primary mb-2",onClick:e[0]||(e[0]=e=>n.deleteCustomer(t.customer.id))},[T,(0,l.Uk)(" Delete")])]),(0,l._)("div",M,[(0,l._)("button",{class:"btn btn-outline-success mb-2",onClick:e[1]||(e[1]=e=>n.editDetails(t.customer))},[S,(0,l.Uk)(" Edit")])]),(0,l._)("div",$,[(0,l._)("button",{class:"btn btn-outline-danger mb-2",onClick:e[2]||(e[2]=t=>this.isViewDetails=!1)},[q,(0,l.Uk)(" Back")])])],8,Z)]))])),_:1})])),_:1})):((0,l.wg)(),(0,l.j4)(o.uT,{key:this.index,appear:"",name:"fade",mode:"out-in"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{style:(0,k.j5)({"--i":this.index})},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.customers,(t=>((0,l.wg)(),(0,l.j4)(r,{key:t.id,id:t.id},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l._)("p",U,[(0,l.Uk)("Customer ID: "),(0,l._)("strong",null,(0,k.zw)(t.id),1)]),E,(0,l._)("p",x,[(0,l.Uk)("Customer Name: "),(0,l._)("strong",null,(0,k.zw)(t.firstName+" "+t.lastName),1)]),j,(0,l._)("p",V,[(0,l.Uk)("Customer Age: "),(0,l._)("strong",null,(0,k.zw)(t.age),1)]),F,(0,l._)("button",{class:"d-block btn btn-outline-success",onClick:e=>n.viewDetails(t)},[H,(0,l.Uk)(" View Details")],8,L)])])),_:2},1032,["id"])))),128))])),_:1},8,["style"])])),_:1}))])),_:1})])):((0,l.wg)(),(0,l.iD)("div",Y,G))}const Q={class:"card d-inline-block mb-3 me-3"};function X(t,e){return(0,l.wg)(),(0,l.iD)("div",Q,[(0,l.WI)(t.$slots,"default",{},void 0,!0)])}const tt={},et=(0,p.Z)(tt,[["render",X],["__scopeId","data-v-48f73e98"]]);var st=et;const ot=t=>((0,l.dD)("data-v-61bdb0a0"),t=t(),(0,l.Cn)(),t),lt={class:"col-12"},it=ot((()=>(0,l._)("h1",null,"Edit Customer",-1))),at={class:"row"},nt={class:"col-12"},rt=ot((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"firstName"},"Customer First Name",-1))),ct={class:"row"},ut={class:"col-12"},mt=ot((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"lastName"},"Customer Last Name",-1))),dt={class:"row"},bt={class:"col-12"},ft=ot((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"age"},"Customer Age",-1))),pt={class:"row"},gt={class:"col-12"},_t=ot((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"mobileNo"},"Mobile Number",-1))),ht={class:"row"},vt={class:"col-12"},wt=ot((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"email"},"Email Address",-1))),Nt={class:"row"},Ct=ot((()=>(0,l._)("div",{class:"col-12"},[(0,l._)("button",{class:"btn btn-outline-success w-100 mb-2",type:"submit"},[(0,l._)("i",{class:"bi bi-pencil-square"}),(0,l.Uk)(" Update Details")])],-1))),yt={class:"col-12"},kt=ot((()=>(0,l._)("i",{class:"bi bi-arrow-left"},null,-1)));function Dt(t,e,s,i,a,n){const r=(0,l.up)("center");return(0,l.wg)(),(0,l.j4)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",lt,[it,(0,l._)("form",{method:"POST",onSubmit:e[6]||(e[6]=(0,o.iM)(((...t)=>n.updateCustomerDetail&&n.updateCustomerDetail(...t)),["prevent"]))},[(0,l._)("div",at,[(0,l._)("div",nt,[rt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":e[0]||(e[0]=t=>a.firstName=t)},null,512),[[o.nr,a.firstName]])])]),(0,l._)("div",ct,[(0,l._)("div",ut,[mt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":e[1]||(e[1]=t=>a.lastName=t)},null,512),[[o.nr,a.lastName]])])]),(0,l._)("div",dt,[(0,l._)("div",bt,[ft,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":e[2]||(e[2]=t=>a.age=t)},null,512),[[o.nr,a.age]])])]),(0,l._)("div",pt,[(0,l._)("div",gt,[_t,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":e[3]||(e[3]=t=>a.mobileNo=t)},null,512),[[o.nr,a.mobileNo]])])]),(0,l._)("div",ht,[(0,l._)("div",vt,[wt,(0,l.wy)((0,l._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":e[4]||(e[4]=t=>a.email=t)},null,512),[[o.nr,a.email]])])]),(0,l._)("div",Nt,[Ct,(0,l._)("div",yt,[(0,l._)("button",{class:"btn btn-outline-danger w-100",onClick:e[5]||(e[5]=t=>n.closeEdit(!1))},[kt,(0,l.Uk)(" Back")])])])],32)])])),_:1})}var At={props:["customer","toggleEdit"],emits:["toggle-edit"],data(){return{updateEndPoint:"https://test-customers-backend.herokuapp.com/customers/edit/",id:this.customer.id,firstName:this.customer.firstName,lastName:this.customer.lastName,age:this.customer.age,mobileNo:this.customer.mobileNo,email:this.customer.email}},methods:{async updateCustomerDetail(){await a.Z.post(this.updateEndPoint+this.id,{id:this.id,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.closeEdit()},closeEdit(t){return this.$emit("toggle-edit",t)}}};const Ut=(0,p.Z)(At,[["render",Dt],["__scopeId","data-v-61bdb0a0"]]);var Et=Ut,xt={props:["customers"],data(){return{isViewDetails:!1,isEditDetail:!1,deleteEndpoint:"https://test-customers-backend.herokuapp.com/deleteUser"}},components:{CardComponent:st,UpdateCustomer:Et},computed:{isLoading(){return this.$store.state.isLoading}},methods:{viewDetails(t){this.customer=t,this.isViewDetails=!0},editDetails(t){this.customer=t,this.isEditDetail=!0},async deleteCustomer(t){await a.Z.post(this.deleteEndpoint,t).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.isViewDetails=!1}}};const jt=(0,p.Z)(xt,[["render",J],["__scopeId","data-v-2bbe53a7"]]);var Vt=jt;const Ft=t=>((0,l.dD)("data-v-3512f0ce"),t=t(),(0,l.Cn)(),t),Lt={key:0,class:"col-12"},Ht=Ft((()=>(0,l._)("a",{class:"toggle-btn-registration btn btn-outline-secondary mb-3 me-2",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Backend-Node"},[(0,l._)("i",{class:"bi bi-code-slash"}),(0,l.Uk)(" Source Code Backend")],-1))),Ot=Ft((()=>(0,l._)("a",{class:"toggle-btn-registration btn btn-outline-secondary mb-3 me-2",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Frontend-Vue"},[(0,l._)("i",{class:"bi bi-code-slash"}),(0,l.Uk)(" Source Code Frontend")],-1))),Zt=Ft((()=>(0,l._)("i",{class:"bi bi-plus-lg"},null,-1))),Rt={key:1,class:"col-12 col-md-6 col-xl-4"},Wt={class:"row"},zt={class:"col-12"},Bt=Ft((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"firstName"},"Customer First Name",-1))),It={class:"row"},Pt={class:"col-12"},Tt=Ft((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"lastName"},"Customer Last Name",-1))),Mt={class:"row"},St={class:"col-12"},$t=Ft((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"age"},"Customer Age",-1))),qt={class:"row"},Yt={class:"col-12"},Kt=Ft((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"mobileNo"},"Mobile Number",-1))),Gt={class:"row"},Jt={class:"col-12"},Qt=Ft((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"email"},"Email Address",-1))),Xt={class:"row"},te=Ft((()=>(0,l._)("div",{class:"col-12"},[(0,l._)("button",{class:"btn btn-outline-success w-100 mb-2",type:"submit"},[(0,l._)("i",{class:"bi bi-plus-lg"}),(0,l.Uk)(" Create New Customer")])],-1))),ee={class:"col-12"},se=Ft((()=>(0,l._)("i",{class:"bi bi-arrow-left"},null,-1))),oe={key:0,class:"row"},le=Ft((()=>(0,l._)("div",{class:"col-12"},[(0,l._)("p",{class:"mb-0 text-danger"},"Please fill up the required fields!")],-1))),ie=[le];function ae(t,e,s,i,a,n){const r=(0,l.up)("CardComponent"),c=(0,l.up)("center");return(0,l.wg)(),(0,l.j4)(c,null,{default:(0,l.w5)((()=>[a.showRegistrationForm?((0,l.wg)(),(0,l.iD)("div",Rt,[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("form",{method:"POST",onSubmit:e[7]||(e[7]=(0,o.iM)(((...t)=>n.registerNewCustomer&&n.registerNewCustomer(...t)),["prevent"]))},[(0,l._)("div",Wt,[(0,l._)("div",zt,[Bt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":e[1]||(e[1]=t=>a.firstName=t)},null,512),[[o.nr,a.firstName,void 0,{trim:!0}]])])]),(0,l._)("div",It,[(0,l._)("div",Pt,[Tt,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":e[2]||(e[2]=t=>a.lastName=t)},null,512),[[o.nr,a.lastName,void 0,{trim:!0}]])])]),(0,l._)("div",Mt,[(0,l._)("div",St,[$t,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":e[3]||(e[3]=t=>a.age=t)},null,512),[[o.nr,a.age,void 0,{trim:!0}]])])]),(0,l._)("div",qt,[(0,l._)("div",Yt,[Kt,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":e[4]||(e[4]=t=>a.mobileNo=t)},null,512),[[o.nr,a.mobileNo,void 0,{trim:!0}]])])]),(0,l._)("div",Gt,[(0,l._)("div",Jt,[Qt,(0,l.wy)((0,l._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":e[5]||(e[5]=t=>a.email=t)},null,512),[[o.nr,a.email,void 0,{trim:!0}]])])]),(0,l._)("div",Xt,[te,(0,l._)("div",ee,[(0,l._)("button",{class:(0,k.C_)([{"mb-2":a.formValidationAlert,"":!a.formValidationAlert},"btn btn-outline-danger w-100"]),type:"submit",onClick:e[6]||(e[6]=(...t)=>n.toggleRegistrationForm&&n.toggleRegistrationForm(...t))},[se,(0,l.Uk)(" Back")],2)])]),a.formValidationAlert?((0,l.wg)(),(0,l.iD)("div",oe,ie)):(0,l.kq)("",!0)],32)])),_:1})])):((0,l.wg)(),(0,l.iD)("div",Lt,[Ht,Ot,(0,l._)("button",{class:"toggle-btn-registration btn btn-outline-primary mb-3",onClick:e[0]||(e[0]=(...t)=>n.toggleRegistrationForm&&n.toggleRegistrationForm(...t))},[Zt,(0,l.Uk)(" Add New Customer")])]))])),_:1})}var ne={components:{CardComponent:st},data(){return{registrationEndPoint:"https://test-customers-backend.herokuapp.com/customers",firstName:"",lastName:"",age:"",mobileNo:"",email:"",showRegistrationForm:!1,formValidationAlert:!1}},computed:{isLoading(){return this.$store.state.isLoading}},methods:{async registerNewCustomer(){if(""===this.firstName||""===this.lastName||""===this.age||""===this.mobileNo||""===this.email)return this.formValidationAlert=!0;this.formValidationAlert=!1,await a.Z.post(this.registrationEndPoint,{id:`cid${Date.now()}`,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.firstName=null,this.lastName=null,this.age=null,this.mobileNo=null,this.email=null},toggleRegistrationForm(){return this.showRegistrationForm=!this.showRegistrationForm}}};const re=(0,p.Z)(ne,[["render",ae],["__scopeId","data-v-3512f0ce"]]);var ce=re,ue={props:["customers"],components:{AHCustomersList:Vt,CreateCustomer:ce},data(){return{isViewAllCustomers:!0}}};const me=(0,p.Z)(ue,[["render",y]]);var de=me,be={props:["customers"],components:{AHCustomers:de}};const fe=(0,p.Z)(be,[["render",v]]);var pe=fe;const ge={class:"text-center text-sm-start px-4 py-2"},_e=(0,l._)("hr",null,null,-1),he={class:"container-fluid"},ve={class:"row"},we={class:"col-12"};function Ne(t,e,s,o,i,a){return(0,l.wg)(),(0,l.iD)("footer",ge,[_e,(0,l._)("div",he,[(0,l._)("div",ve,[(0,l._)("div",we,[(0,l._)("p",null,(0,k.zw)(a.updateDate())+" © Aham Capital Asset Management",1)])])])])}var Ce={methods:{updateDate(){return(new Date).getFullYear()}}};const ye=(0,p.Z)(Ce,[["render",Ne]]);var ke=ye,De={name:"Customers-Frontend",components:{AHHeader:h,AHBody:pe,AHFooter:ke},data(){return{getAllCustomersUrl:"https://test-customers-backend.herokuapp.com/customers",customers:[]}},mounted(){this.getAllCustomers()},updated(){setInterval((()=>{this.getAllCustomers()}),1e4)},methods:{async getAllCustomers(){try{console.log("this fired");const t=await a.Z.get(this.getAllCustomersUrl);this.customers=t.data}catch(t){console.error(t)}}}};const Ae=(0,p.Z)(De,[["render",i]]);var Ue=Ae,Ee=s(1882);const xe=(0,Ee.MT)({state(){return{isLoading:!1}},mutations:{isLoading(t,e){t.isLoading=e}},actions:{isLoading(t,e){console.log(e),t.commit("isLoading",e)}},getters:{isLoading(t){return t.isLoading}}});var je=xe;const Ve=(0,o.ri)(Ue);Ve.use(je),Ve.mount("#app")}},e={};function s(o){var l=e[o];if(void 0!==l)return l.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,o,l,i){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],l=t[u][1],i=t[u][2];for(var n=!0,r=0;r<o.length;r++)(!1&i||a>=i)&&Object.keys(s.O).every((function(t){return s.O[t](o[r])}))?o.splice(r--,1):(n=!1,i<a&&(a=i));if(n){t.splice(u--,1);var c=l();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,l,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var l,i,a=o[0],n=o[1],r=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(l in n)s.o(n,l)&&(s.m[l]=n[l]);if(r)var u=r(s)}for(e&&e(o);c<a.length;c++)i=a[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},o=self["webpackChunkcustomers_frontend"]=self["webpackChunkcustomers_frontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(4412)}));o=s.O(o)})();
//# sourceMappingURL=app.7b79f2b0.js.map