(function(){"use strict";var e={693:function(e,t,s){var i=s(9242),l=s(3396);function o(e,t,s,i,o,a){const n=(0,l.up)("CPHeader"),r=(0,l.up)("LoadingSpinner"),c=(0,l.up)("CPBody"),u=(0,l.up)("CPFooter");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(n),this.$store.state.isLoading?((0,l.wg)(),(0,l.j4)(r,{key:0})):((0,l.wg)(),(0,l.j4)(c,{key:1,customers:this.customers},null,8,["customers"])),(0,l.Wm)(u)],64)}var a=s(4311);const n=e=>((0,l.dD)("data-v-43c28f33"),e=e(),(0,l.Cn)(),e),r={class:"pt-4 px-3 px-lg-4"},c={class:"container-fluid"},u={class:"row"},d={class:"col-sm-6 col-md-4 col-lg-3 col-xl-2"},m=n((()=>(0,l._)("img",{class:"brand",src:"cp-logo.png",alt:"Capital Platforms logo"},null,-1))),g=n((()=>(0,l._)("hr",null,null,-1)));function p(e,t){return(0,l.wg)(),(0,l.iD)("header",r,[(0,l._)("div",c,[(0,l._)("div",u,[(0,l._)("div",d,[(0,l.Wm)(i.uT,{mode:"out-in",name:"slide-fade",appear:""},{default:(0,l.w5)((()=>[m])),_:1})])])]),g])}var b=s(89);const f={},_=(0,b.Z)(f,[["render",p],["__scopeId","data-v-43c28f33"]]);var h=_;function w(e,t,s,i,o,a){const n=(0,l.up)("CPCustomers");return(0,l.wg)(),(0,l.j4)(n,{customers:this.customers},null,8,["customers"])}const v={class:"container"},y={class:"row"};function N(e,t,s,i,o,a){const n=(0,l.up)("LoadingSpinner"),r=(0,l.up)("CreateCustomer"),c=(0,l.up)("CPCustomerList");return(0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",y,[this.isLoading?((0,l.wg)(),(0,l.j4)(n,{key:0})):(0,l.kq)("",!0),this.isLoading?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(r,{key:1,class:"mb-3",onToggleLoading:t[0]||(t[0]=t=>this.isLoading=e.newValue),isLoading:this.isLoading},null,8,["isLoading"])),this.isLoading?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(c,{key:2,customers:this.customers,onToggleLoading:t[1]||(t[1]=t=>this.isLoading=e.newValue),isLoading:this.isLoading},null,8,["customers","isLoading"]))])])}var C=s(7139);const k=e=>((0,l.dD)("data-v-2577f1ab"),e=e(),(0,l.Cn)(),e),D={key:0,class:"col-12"},U={key:0},L=["onClick"],x=k((()=>(0,l._)("i",{class:"bi bi-info-circle"},null,-1))),E=["id"],j=k((()=>(0,l._)("i",{class:"bi bi-trash"},null,-1))),V=k((()=>(0,l._)("br",null,null,-1))),S=k((()=>(0,l._)("i",{class:"bi bi-pencil-square"},null,-1))),A=k((()=>(0,l._)("br",null,null,-1))),F=k((()=>(0,l._)("i",{class:"bi bi-arrow-left"},null,-1))),P={class:"text-danger"},T=k((()=>(0,l._)("i",{class:"bi bi-trash"},null,-1))),Z=k((()=>(0,l._)("br",null,null,-1))),z=k((()=>(0,l._)("i",{class:"bi bi-arrow-left"},null,-1))),O={key:0,class:"text-success mb-0"},R={key:1,class:"text-danger mb-0"},q={key:1,class:"col-12"},I=k((()=>(0,l._)("p",{class:"text-center text-secondary no-clients-alert mb-0"},"No clients registered for now. Register a new one?",-1))),W=[I];function $(e,t,s,o,a,n){const r=(0,l.up)("center"),c=(0,l.up)("CardComponent"),u=(0,l.up)("UpdateCustomer");return s.customers.length>0?((0,l.wg)(),(0,l.iD)("div",D,[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[a.isViewDetails?((0,l.wg)(),(0,l.j4)(i.uT,{key:1,appear:"",name:"fade",mode:"out-in"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[a.isEditDetail?((0,l.wg)(),(0,l.j4)(u,{key:1,isLoading:this.isLoading,customer:e.customer,onToggleEdit:t[5]||(t[5]=t=>a.isEditDetail=e.newValue),isEditDetail:a.isEditDetail},null,8,["isLoading","customer","isEditDetail"])):((0,l.wg)(),(0,l.iD)("div",{key:0,id:e.customer.id},[(0,l._)("h5",null,[(0,l._)("strong",null,(0,C.zw)(this.isDelete?"Delete":"")+" "+(0,C.zw)(e.customer.firstName+" "+e.customer.lastName)+"'s Details",1)]),(0,l._)("p",null,[(0,l.Uk)("Customer ID: "),(0,l._)("strong",null,(0,C.zw)(e.customer.id),1)]),(0,l._)("p",null,[(0,l.Uk)("Customer Name: "),(0,l._)("strong",null,(0,C.zw)(e.customer.firstName+" "+e.customer.lastName),1)]),(0,l._)("p",null,[(0,l.Uk)("Customer Mobile No: "),(0,l._)("strong",null,(0,C.zw)(e.customer.mobileNo),1)]),(0,l._)("p",null,[(0,l.Uk)("Customer Age: "),(0,l._)("strong",null,(0,C.zw)(e.customer.age),1)]),(0,l._)("p",null,[(0,l.Uk)("Customer Email: "),(0,l._)("strong",null,(0,C.zw)(e.customer.email),1)]),(0,l.wy)((0,l._)("div",null,[(0,l._)("button",{class:"btn btn-outline-danger mb-2",onClick:t[0]||(t[0]=e=>this.isDelete=!0)},[j,(0,l.Uk)(" Delete")]),V,(0,l._)("button",{class:"btn btn-outline-primary mb-2",onClick:t[1]||(t[1]=t=>n.editDetails(e.customer))},[S,(0,l.Uk)(" Edit")]),A,(0,l._)("button",{class:"btn btn-outline-success mb-2",onClick:t[2]||(t[2]=e=>this.isViewDetails=!1)},[F,(0,l.Uk)(" Back")])],512),[[i.F8,!this.isDelete]]),(0,l.wy)((0,l._)("p",P,[(0,l._)("strong",null," Are you sure to delete "+(0,C.zw)(e.customer.firstName+" "+e.customer.lastName)+"'s details? ",1)],512),[[i.F8,this.isDelete]]),(0,l.wy)((0,l._)("div",null,[(0,l._)("button",{class:"btn btn-outline-danger mb-2",onClick:t[3]||(t[3]=t=>n.deleteCustomer(e.customer.id))},[T,(0,l.Uk)(" Delete")]),Z,(0,l._)("button",{class:"btn btn-outline-success mb-2",onClick:t[4]||(t[4]=e=>this.isDelete=!1)},[z,(0,l.Uk)(" Back")]),this.isDeleteSuccess?((0,l.wg)(),(0,l.iD)("p",O,"Deleted Successfully!")):(0,l.kq)("",!0),this.isDeleteSuccess||void 0===this.isDeleteSuccess?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("p",R,"Delete was unsuccessful!"))],512),[[i.F8,this.isDelete]])],8,E))])),_:1})])),_:1})])),_:1})):((0,l.wg)(),(0,l.iD)("div",U,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.customers,((e,t)=>((0,l.wg)(),(0,l.j4)(i.uT,{key:t,appear:"",name:"fade",mode:"out-in"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)(c,{class:"mb-3 me-0 me-lg-3",key:e.id,id:e.id},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{style:(0,C.j5)({"--i":t})},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l._)("p",null,[(0,l.Uk)("Customer ID: "),(0,l._)("strong",null,(0,C.zw)(e.id),1)]),(0,l._)("p",null,[(0,l.Uk)("Customer Name: "),(0,l._)("strong",null,(0,C.zw)(e.firstName+" "+e.lastName),1)]),(0,l._)("button",{class:"d-block btn btn-outline-success",onClick:t=>n.viewDetails(e)},[x,(0,l.Uk)(" View Details ")],8,L)])])),_:2},1032,["style"])])),_:2},1032,["id"]))])),_:2},1024)))),128))]))])),_:1})])):((0,l.wg)(),(0,l.iD)("div",q,W))}const B={class:"card d-inline-block"};function M(e,t){return(0,l.wg)(),(0,l.iD)("div",B,[(0,l.WI)(e.$slots,"default",{},void 0,!0)])}const H={},Y=(0,b.Z)(H,[["render",M],["__scopeId","data-v-02de8811"]]);var K=Y;const G=e=>((0,l.dD)("data-v-72ed4c70"),e=e(),(0,l.Cn)(),e),J={class:"col-12"},Q={class:"row"},X={class:"col-12"},ee=G((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"firstName"},"Customer First Name",-1))),te={class:"row"},se={class:"col-12"},ie=G((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"lastName"},"Customer Last Name",-1))),le={class:"row"},oe={class:"col-12"},ae=G((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"age"},"Customer Age",-1))),ne={class:"row"},re={class:"col-12"},ce=G((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"mobileNo"},"Mobile Number",-1))),ue={class:"row"},de={class:"col-12"},me=G((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"email"},"Email Address",-1))),ge={class:"row"},pe=G((()=>(0,l._)("div",{class:"col-12"},[(0,l._)("button",{class:"btn btn-outline-success w-100 mb-2",type:"submit"},[(0,l._)("i",{class:"bi bi-pencil-square"}),(0,l.Uk)(" Update Details")])],-1))),be={class:"col-12"},fe=G((()=>(0,l._)("i",{class:"bi bi-arrow-left"},null,-1))),_e={key:0,class:"text-success mb-0"},he={key:1,class:"text-danger mb-0"};function we(e,t,s,o,a,n){return(0,l.wg)(),(0,l.iD)("div",J,[(0,l._)("h5",null,[(0,l._)("strong",null,"Update "+(0,C.zw)(a.firstName)+" "+(0,C.zw)(a.lastName)+"'s Details",1)]),(0,l._)("form",{method:"POST",onSubmit:t[6]||(t[6]=(0,i.iM)(((...e)=>n.updateCustomerDetail&&n.updateCustomerDetail(...e)),["prevent"]))},[(0,l._)("div",Q,[(0,l._)("div",X,[ee,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":t[0]||(t[0]=e=>a.firstName=e)},null,512),[[i.nr,a.firstName]])])]),(0,l._)("div",te,[(0,l._)("div",se,[ie,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":t[1]||(t[1]=e=>a.lastName=e)},null,512),[[i.nr,a.lastName]])])]),(0,l._)("div",le,[(0,l._)("div",oe,[ae,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":t[2]||(t[2]=e=>a.age=e)},null,512),[[i.nr,a.age]])])]),(0,l._)("div",ne,[(0,l._)("div",re,[ce,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":t[3]||(t[3]=e=>a.mobileNo=e)},null,512),[[i.nr,a.mobileNo]])])]),(0,l._)("div",ue,[(0,l._)("div",de,[me,(0,l.wy)((0,l._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>a.email=e)},null,512),[[i.nr,a.email]])])]),(0,l._)("div",ge,[pe,(0,l._)("div",be,[(0,l._)("button",{class:"btn btn-outline-danger mb-2 w-100",onClick:t[5]||(t[5]=e=>n.closeEdit(!1))},[fe,(0,l.Uk)(" Back")])])])],32),this.isUpdateSuccess?((0,l.wg)(),(0,l.iD)("p",_e,"Updated Successfully!")):(0,l.kq)("",!0),this.isUpdateSuccess||void 0===this.isUpdateSuccess?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("p",he,"Update was unsuccessful!"))])}var ve={props:["customer","toggleEdit","isLoading"],emits:["toggle-edit","toggle-loading"],data(){return{updateEndPoint:"https://customers-crud-backend.onrender.com/customers/edit/",id:this.customer.id,firstName:this.customer.firstName,lastName:this.customer.lastName,age:this.customer.age,mobileNo:this.customer.mobileNo,email:this.customer.email,isUpdateSuccess:void 0}},methods:{async updateCustomerDetail(){this.$emit("toggle-loading",!0),await a.Z.post(this.updateEndPoint+this.id,{id:this.id,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((()=>{this.isUpdateSuccess=!0})).catch((()=>{this.isUpdateSuccess=!1})),setTimeout((()=>this.closeEdit()),5e3),this.$emit("toggle-loading",!1)},closeEdit(e){return this.$emit("toggle-edit",e)}}};const ye=(0,b.Z)(ve,[["render",we],["__scopeId","data-v-72ed4c70"]]);var Ne=ye,Ce={props:["customers","toggle-loading","isLoading"],emits:["toggle-loading"],data(){return{isViewDetails:!1,isEditDetail:!1,isDelete:!1,isDeleteSuccess:void 0,deleteEndpoint:"https://customers-crud-backend.onrender.com/deleteUser"}},components:{CardComponent:K,UpdateCustomer:Ne},methods:{viewDetails(e){this.customer=e,this.isViewDetails=!0},editDetails(e){this.customer=e,this.isEditDetail=!0},async deleteCustomer(e){this.$emit("toggle-loading",!0),await a.Z.post(this.deleteEndpoint,e).then((()=>{this.isDeleteSuccess=!0})).catch((()=>{this.isDeleteSuccess=!1})),setTimeout((()=>this.isViewDetails=!1),5e3),this.$emit("toggle-loading",!1)}}};const ke=(0,b.Z)(Ce,[["render",$],["__scopeId","data-v-2577f1ab"]]);var De=ke;const Ue=e=>((0,l.dD)("data-v-3d859502"),e=e(),(0,l.Cn)(),e),Le={key:0,class:"col-12"},xe=Ue((()=>(0,l._)("a",{class:"toggle-btn-registration btn btn-outline-secondary mb-3 me-2",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Backend-Node"},[(0,l._)("i",{class:"bi bi-code-slash"}),(0,l.Uk)(" Source Code Backend")],-1))),Ee=Ue((()=>(0,l._)("a",{class:"toggle-btn-registration btn btn-outline-secondary mb-3 me-2",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Frontend-Vue"},[(0,l._)("i",{class:"bi bi-code-slash"}),(0,l.Uk)(" Source Code Frontend")],-1))),je=Ue((()=>(0,l._)("i",{class:"bi bi-plus-lg"},null,-1))),Ve={key:1,class:"col-12 col-md-6 col-xl-4"},Se=Ue((()=>(0,l._)("h5",null,[(0,l._)("strong",null,"New Customer Registration")],-1))),Ae={class:"row"},Fe={class:"col-12"},Pe=Ue((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"firstName"},"Customer First Name",-1))),Te={class:"row"},Ze={class:"col-12"},ze=Ue((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"lastName"},"Customer Last Name",-1))),Oe={class:"row"},Re={class:"col-12"},qe=Ue((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"age"},"Customer Age",-1))),Ie={class:"row"},We={class:"col-12"},$e=Ue((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"mobileNo"},"Mobile Number",-1))),Be={class:"row"},Me={class:"col-12"},He=Ue((()=>(0,l._)("label",{class:"d-flex justify-content-start",for:"email"},"Email Address",-1))),Ye={class:"row"},Ke=Ue((()=>(0,l._)("div",{class:"col-12"},[(0,l._)("button",{class:"btn btn-outline-success w-100 mb-2",type:"submit"},[(0,l._)("i",{class:"bi bi-plus-lg"}),(0,l.Uk)(" Create New Customer")])],-1))),Ge={class:"col-12"},Je=Ue((()=>(0,l._)("i",{class:"bi bi-arrow-left"},null,-1))),Qe={key:0,class:"row"},Xe=Ue((()=>(0,l._)("div",{class:"col-12"},[(0,l._)("p",{class:"mb-0 text-danger"},"Please fill up the required fields!")],-1))),et=[Xe],tt=Ue((()=>(0,l._)("hr",null,null,-1)));function st(e,t,s,o,a,n){const r=(0,l.up)("CardComponent"),c=(0,l.up)("center");return(0,l.wg)(),(0,l.j4)(c,null,{default:(0,l.w5)((()=>[a.showRegistrationForm?((0,l.wg)(),(0,l.iD)("div",Ve,[(0,l.Wm)(i.uT,{appear:"",name:"fade",mode:"out-in"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[Se,(0,l._)("form",{method:"POST",onSubmit:t[7]||(t[7]=(0,i.iM)(((...e)=>n.registerNewCustomer&&n.registerNewCustomer(...e)),["prevent"]))},[(0,l._)("div",Ae,[(0,l._)("div",Fe,[Pe,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":t[1]||(t[1]=e=>a.firstName=e)},null,512),[[i.nr,a.firstName,void 0,{trim:!0}]])])]),(0,l._)("div",Te,[(0,l._)("div",Ze,[ze,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":t[2]||(t[2]=e=>a.lastName=e)},null,512),[[i.nr,a.lastName,void 0,{trim:!0}]])])]),(0,l._)("div",Oe,[(0,l._)("div",Re,[qe,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":t[3]||(t[3]=e=>a.age=e)},null,512),[[i.nr,a.age,void 0,{trim:!0}]])])]),(0,l._)("div",Ie,[(0,l._)("div",We,[$e,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":t[4]||(t[4]=e=>a.mobileNo=e)},null,512),[[i.nr,a.mobileNo,void 0,{trim:!0}]])])]),(0,l._)("div",Be,[(0,l._)("div",Me,[He,(0,l.wy)((0,l._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":t[5]||(t[5]=e=>a.email=e)},null,512),[[i.nr,a.email,void 0,{trim:!0}]])])]),(0,l._)("div",Ye,[Ke,(0,l._)("div",Ge,[(0,l._)("button",{class:(0,C.C_)([{"mb-2":a.formValidationAlert,"":!a.formValidationAlert},"btn btn-outline-danger w-100"]),type:"submit",onClick:t[6]||(t[6]=(...e)=>n.toggleRegistrationForm&&n.toggleRegistrationForm(...e))},[Je,(0,l.Uk)(" Back")],2)])]),a.formValidationAlert?((0,l.wg)(),(0,l.iD)("div",Qe,et)):(0,l.kq)("",!0)],32)])),_:1})])),_:1}),tt])):((0,l.wg)(),(0,l.iD)("div",Le,[xe,Ee,(0,l._)("button",{class:"toggle-btn-registration btn btn-outline-primary mb-3",onClick:t[0]||(t[0]=(...e)=>n.toggleRegistrationForm&&n.toggleRegistrationForm(...e))},[je,(0,l.Uk)(" Add New Customer")])]))])),_:1})}var it={components:{CardComponent:K},props:["toggle-loading","isLoading"],emits:["toggle-loading"],data(){return{registrationEndPoint:"https://customers-crud-backend.onrender.com/customers",firstName:"",lastName:"",age:"",mobileNo:"",email:"",showRegistrationForm:!1,formValidationAlert:!1}},methods:{async registerNewCustomer(){if(this.$emit("toggle-loading",!0),""===this.firstName||""===this.lastName||""===this.age||""===this.mobileNo||""===this.email)return this.formValidationAlert=!0;this.formValidationAlert=!1,await a.Z.post(this.registrationEndPoint,{id:`cid${Date.now()}`,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),this.firstName=null,this.lastName=null,this.age=null,this.mobileNo=null,this.email=null,this.$emit("toggle-loading",!1)},toggleRegistrationForm(){return this.showRegistrationForm=!this.showRegistrationForm}}};const lt=(0,b.Z)(it,[["render",st],["__scopeId","data-v-3d859502"]]);var ot=lt;const at=e=>((0,l.dD)("data-v-3aa5bcb8"),e=e(),(0,l.Cn)(),e),nt={class:"centered overlay"},rt=at((()=>(0,l._)("div",{class:"d-flex spinner"},[(0,l._)("div",{style:{"--j":1},class:"mx-1 spinner-grow one",role:"status"},[(0,l._)("span",{class:"visually-hidden"},"Loading...")]),(0,l._)("div",{style:{"--j":2},class:"mx-1 spinner-grow two",role:"status"},[(0,l._)("span",{class:"visually-hidden"},"Loading...")]),(0,l._)("div",{style:{"--j":3},class:"mx-1 spinner-grow three",role:"status"},[(0,l._)("span",{class:"visually-hidden"},"Loading...")])],-1))),ct=[rt];function ut(e,t){return(0,l.wg)(),(0,l.iD)("div",nt,ct)}const dt={},mt=(0,b.Z)(dt,[["render",ut],["__scopeId","data-v-3aa5bcb8"]]);var gt=mt,pt={props:["customers"],components:{CPCustomerList:De,CreateCustomer:ot,LoadingSpinner:gt},data(){return{isViewAllCustomers:!0,isLoading:!1}}};const bt=(0,b.Z)(pt,[["render",N]]);var ft=bt,_t={props:["customers"],components:{CPCustomers:ft}};const ht=(0,b.Z)(_t,[["render",w]]);var wt=ht;const vt={class:"text-center text-sm-start px-4 py-2"},yt=(0,l._)("hr",null,null,-1),Nt={class:"container-fluid"},Ct={class:"row"},kt={class:"col-12"};function Dt(e,t,s,i,o,a){return(0,l.wg)(),(0,l.iD)("footer",vt,[yt,(0,l._)("div",Nt,[(0,l._)("div",Ct,[(0,l._)("div",kt,[(0,l._)("p",null,(0,C.zw)(a.updateDate())+" © Capital Platforms",1)])])])])}var Ut={methods:{updateDate(){return(new Date).getFullYear()}}};const Lt=(0,b.Z)(Ut,[["render",Dt]]);var xt=Lt,Et={name:"Customers-Data-Management-Application",components:{CPHeader:h,CPBody:wt,CPFooter:xt,LoadingSpinner:gt},data(){return{getAllCustomersUrl:"https://customers-crud-backend.onrender.com/customers",customers:[],isLoading:!1}},mounted(){this.getAllCustomers()},updated(){setInterval((()=>{this.getAllCustomers()}),1e5)},methods:{async getAllCustomers(){this.isLoading=!0;try{const e=await a.Z.get(this.getAllCustomersUrl);this.customers=e.data}catch(e){console.error(e)}this.isLoading=!0}}};const jt=(0,b.Z)(Et,[["render",o]]);var Vt=jt,St=s(1882);const At=(0,St.MT)({state(){return{isLoading:!1}},mutations:{isLoading(e,t){e.isLoading=t}},actions:{isLoading(e,t){console.log(t),e.commit("isLoading",t)}},getters:{isLoading(e){return e.isLoading}}});var Ft=At;const Pt=(0,i.ri)(Vt);Pt.use(Ft),Pt.mount("#app")}},t={};function s(i){var l=t[i];if(void 0!==l)return l.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,i,l,o){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],l=e[u][1],o=e[u][2];for(var n=!0,r=0;r<i.length;r++)(!1&o||a>=o)&&Object.keys(s.O).every((function(e){return s.O[e](i[r])}))?i.splice(r--,1):(n=!1,o<a&&(a=o));if(n){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,l,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var l,o,a=i[0],n=i[1],r=i[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(l in n)s.o(n,l)&&(s.m[l]=n[l]);if(r)var u=r(s)}for(t&&t(i);c<a.length;c++)o=a[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},i=self["webpackChunkcustomers_frontend"]=self["webpackChunkcustomers_frontend"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(693)}));i=s.O(i)})();
//# sourceMappingURL=app.e9553c17.js.map