(function(){"use strict";var e={3881:function(e,t,s){var o=s(9242),i=s(3396);function l(e,t,s,o,l,a){const n=(0,i.up)("CPHeader"),c=(0,i.up)("LoadingSpinner"),r=(0,i.up)("CPBody"),d=(0,i.up)("CPFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(n),this.$store.state.isLoading?((0,i.wg)(),(0,i.j4)(c,{key:0})):((0,i.wg)(),(0,i.j4)(r,{key:1,customers:this.customers},null,8,["customers"])),(0,i.Wm)(d)],64)}var a=s(4311);const n=e=>((0,i.dD)("data-v-43c28f33"),e=e(),(0,i.Cn)(),e),c={class:"pt-4 px-3 px-lg-4"},r={class:"container-fluid"},d={class:"row"},u={class:"col-sm-6 col-md-4 col-lg-3 col-xl-2"},m=n((()=>(0,i._)("img",{class:"brand",src:"cp-logo.png",alt:"Capital Platforms logo"},null,-1))),g=n((()=>(0,i._)("hr",null,null,-1)));function p(e,t){return(0,i.wg)(),(0,i.iD)("header",c,[(0,i._)("div",r,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i.Wm)(o.uT,{mode:"out-in",name:"slide-fade",appear:""},{default:(0,i.w5)((()=>[m])),_:1})])])]),g])}var h=s(89);const f={},v=(0,h.Z)(f,[["render",p],["__scopeId","data-v-43c28f33"]]);var w=v;function _(e,t,s,o,l,a){const n=(0,i.up)("CPCustomers");return(0,i.wg)(),(0,i.j4)(n,{customers:this.customers},null,8,["customers"])}const b={class:"container"},C={class:"row"};function y(e,t,s,o,l,a){const n=(0,i.up)("LoadingSpinner"),c=(0,i.up)("CreateCustomer"),r=(0,i.up)("CPCustomerList");return(0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("div",C,[this.isLoading?((0,i.wg)(),(0,i.j4)(n,{key:0})):(0,i.kq)("",!0),this.isLoading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:1,class:"mb-3",onToggleLoading:t[0]||(t[0]=t=>this.isLoading=e.newValue),isLoading:this.isLoading},null,8,["isLoading"])),this.isLoading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:2,customers:this.customers,onToggleLoading:t[1]||(t[1]=t=>this.isLoading=e.newValue),isLoading:this.isLoading},null,8,["customers","isLoading"]))])])}var x=s(7139);const N=e=>((0,i.dD)("data-v-9171359e"),e=e(),(0,i.Cn)(),e),D={key:0,class:"col-12"},k={key:0},L=N((()=>(0,i._)("h1",{class:"text-secondary mb-3"},[(0,i._)("strong",null,"List of Customers")],-1))),V={class:"d-flex justify-content-between align-items-center text-secondary"},S=N((()=>(0,i._)("h5",null,"Customer Profile",-1))),z=N((()=>(0,i._)("hr",{class:"my-2"},null,-1))),T={class:"text-secondary mb-1"},M={class:"text-secondary mb-2"},U=["onClick"],H=["id"],j={class:"d-flex justify-content-between align-items-center text-secondary"},E={class:"text-secondary"},B=N((()=>(0,i._)("hr",{class:"my-2"},null,-1))),W={class:"text-secondary mb-1"},A={class:"text-secondary mb-1"},I={class:"text-secondary mb-1"},R={class:"text-secondary mb-1"},F={class:"text-secondary mb-2"},P=N((()=>(0,i._)("hr",{class:"my-2"},null,-1))),Z=N((()=>(0,i._)("br",null,null,-1))),$=N((()=>(0,i._)("br",null,null,-1))),q={class:"text-danger text-center mb-2"},O=N((()=>(0,i._)("br",null,null,-1))),Y={key:0,class:"text-success text-center mb-0"},K={key:1,class:"text-danger text-center mb-0"},G={key:1,class:"col-12"},J=N((()=>(0,i._)("p",{class:"text-center text-secondary no-clients-alert mb-0"}," No clients registered for now. Register a new one? ",-1))),Q=[J];function X(e,t,s,l,a,n){const c=(0,i.up)("SvgLg"),r=(0,i.up)("ToolTip"),d=(0,i.up)("SvgSm"),u=(0,i.up)("center"),m=(0,i.up)("CardComponent"),g=(0,i.up)("UpdateCustomer");return s.customers.length>0?((0,i.wg)(),(0,i.iD)("div",D,[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[a.isViewDetails?((0,i.wg)(),(0,i.j4)(o.uT,{key:1,appear:"",name:"fade",mode:"out-in"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[a.isEditDetail?((0,i.wg)(),(0,i.j4)(g,{key:1,isLoading:this.isLoading,customer:e.customer,onToggleEdit:t[5]||(t[5]=t=>a.isEditDetail=e.newValue),isEditDetail:a.isEditDetail},null,8,["isLoading","customer","isEditDetail"])):((0,i.wg)(),(0,i.iD)("div",{key:0,id:e.customer.id},[(0,i._)("div",j,[(0,i._)("h5",E,(0,x.zw)(this.isDelete?"Delete":"")+" "+(0,x.zw)(e.customer.firstName+" "+e.customer.lastName)+"'s Info ",1),(0,i._)("div",null,[this.isDelete?((0,i.wg)(),(0,i.j4)(r,{key:0,toolTipText:"Delete "+e.customer.firstName+" "+e.customer.lastName+"'s Info"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{viewBox:"0 0 640 512",d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7H514.3c3.9 0 7.6-.7 11-2.1l-261-205.6z"},null,8,["d"])])),_:1},8,["toolTipText"])):((0,i.wg)(),(0,i.j4)(r,{key:1,toolTipText:e.customer.firstName+" "+e.customer.lastName+"'s Info"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{viewBox:"0 0 512 512",d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"},null,8,["d"])])),_:1},8,["toolTipText"]))])]),B,(0,i._)("p",W,[(0,i.Uk)(" Customer ID: "),(0,i._)("strong",null,(0,x.zw)(e.customer.id.toUpperCase()),1)]),(0,i._)("p",A,[(0,i.Uk)(" Customer Name: "),(0,i._)("strong",null,(0,x.zw)(e.customer.firstName+" "+e.customer.lastName),1)]),(0,i._)("p",I,[(0,i.Uk)(" Customer Mobile No: "),(0,i._)("strong",null,(0,x.zw)(e.customer.mobileNo),1)]),(0,i._)("p",R,[(0,i.Uk)(" Customer Age: "),(0,i._)("strong",null,(0,x.zw)(e.customer.age),1)]),(0,i._)("p",F,[(0,i.Uk)(" Customer Email: "),(0,i._)("strong",null,(0,x.zw)(e.customer.email),1)]),P,(0,i.wy)((0,i._)("div",null,[(0,i._)("button",{class:"btn btn-outline-danger mb-2",onClick:t[0]||(t[0]=e=>this.isDelete=!0)},[(0,i.Wm)(d,{viewBox:"0 0 448 512",d:"M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"},null,8,["d"]),(0,i.Uk)(" Delete ")]),Z,(0,i._)("button",{class:"btn btn-outline-primary mb-2",onClick:t[1]||(t[1]=t=>n.editDetails(e.customer))},[(0,i.Wm)(d,{viewBox:"0 0 640 512",d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"},null,8,["d"]),(0,i.Uk)(" Edit ")]),$,(0,i._)("button",{class:"btn btn-outline-success mb-2",onClick:t[2]||(t[2]=e=>this.isViewDetails=!1)},[(0,i.Wm)(d,{viewBox:"0 0 512 512",d:"M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"},null,8,["d"]),(0,i.Uk)(" Back ")])],512),[[o.F8,!this.isDelete]]),(0,i.wy)((0,i._)("p",q,[(0,i._)("strong",null," Are you sure to delete "+(0,x.zw)(e.customer.firstName+" "+e.customer.lastName)+"'s details? ",1)],512),[[o.F8,this.isDelete]]),(0,i.wy)((0,i._)("div",null,[(0,i._)("button",{class:"btn btn-outline-danger mb-2",onClick:t[3]||(t[3]=t=>n.deleteCustomer(e.customer.id))},[(0,i.Wm)(d,{viewBox:"0 0 448 512",d:"M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"},null,8,["d"]),(0,i.Uk)(" Yes ")]),O,(0,i._)("button",{class:"btn btn-outline-success mb-2",onClick:t[4]||(t[4]=e=>this.isDelete=!1)},[(0,i.Wm)(d,{viewBox:"0 0 512 512",d:"M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"},null,8,["d"]),(0,i.Uk)(" No ")]),this.isDeleteSuccess?((0,i.wg)(),(0,i.iD)("p",Y," Deleted Successfully! ")):(0,i.kq)("",!0),this.isDeleteSuccess||void 0===this.isDeleteSuccess?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",K," Delete was unsuccessful! "))],512),[[o.F8,this.isDelete]])],8,H))])),_:1})])),_:1})])),_:1})):((0,i.wg)(),(0,i.iD)("div",k,[L,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.customers,((e,t)=>((0,i.wg)(),(0,i.j4)(o.uT,{key:t,appear:"",name:"fade",mode:"out-in"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{class:"mb-3 me-0 me-lg-3",style:(0,x.j5)({"--i":t})},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(u,{key:e.id,id:e.id},{default:(0,i.w5)((()=>[(0,i._)("div",V,[S,(0,i.Wm)(r,{toolTipText:e.firstName+" "+e.lastName+"'s Profile"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{viewBox:"0 0 448 512",d:"M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"},null,8,["d"])])),_:2},1032,["toolTipText"])]),z,(0,i._)("div",null,[(0,i._)("p",T,[(0,i.Uk)(" Customer ID: "),(0,i._)("strong",null,(0,x.zw)(e.id.toUpperCase()),1)]),(0,i._)("p",M,[(0,i.Uk)(" Customer Name: "),(0,i._)("strong",null,(0,x.zw)(e.firstName+" "+e.lastName),1)]),(0,i._)("button",{class:"d-block btn btn-outline-secondary",onClick:t=>n.viewDetails(e)},[(0,i.Wm)(d,{viewBox:"0 0 512 512",d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"},null,8,["d"]),(0,i.Uk)(" View Details ")],8,U)])])),_:2},1032,["id"]))])),_:2},1032,["style"])])),_:2},1024)))),128))]))])),_:1})])):((0,i.wg)(),(0,i.iD)("div",G,Q))}const ee={class:"card d-inline-block"};function te(e,t){return(0,i.wg)(),(0,i.iD)("div",ee,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}const se={},oe=(0,h.Z)(se,[["render",te],["__scopeId","data-v-2a8bff90"]]);var ie=oe;const le=e=>((0,i.dD)("data-v-0f7a8a78"),e=e(),(0,i.Cn)(),e),ae={class:"col-12"},ne={class:"d-flex justify-content-between align-items-center text-secondary"},ce={class:"text-secondary"},re=le((()=>(0,i._)("div",{class:"tooltip"},[(0,i._)("span",{class:"tooltiptext"})],-1))),de=le((()=>(0,i._)("hr",{class:"my-2"},null,-1))),ue={class:"row"},me={class:"col-12"},ge=le((()=>(0,i._)("label",{class:"d-flex justify-content-start text-secondary",for:"firstName"},"Customer First Name",-1))),pe={class:"row"},he={class:"col-12"},fe=le((()=>(0,i._)("label",{class:"d-flex justify-content-start text-secondary",for:"lastName"},"Customer Last Name",-1))),ve={class:"row"},we={class:"col-12"},_e=le((()=>(0,i._)("label",{class:"d-flex justify-content-start text-secondary",for:"age"},"Customer Age",-1))),be={class:"row"},Ce={class:"col-12"},ye=le((()=>(0,i._)("label",{class:"d-flex justify-content-start text-secondary",for:"mobileNo"},"Mobile Number",-1))),xe={class:"row"},Ne={class:"col-12"},De=le((()=>(0,i._)("label",{class:"d-flex justify-content-start text-secondary",for:"email"},"Email Address",-1))),ke=le((()=>(0,i._)("hr",{class:"my-2"},null,-1))),Le={class:"row"},Ve={class:"col-12"},Se={class:"btn btn-outline-success w-100 mb-2",type:"submit"},ze={class:"col-12"},Te={key:0,class:"row"},Me=le((()=>(0,i._)("div",{class:"col-12"},[(0,i._)("p",{class:"mb-0 text-danger"},"Please fill up the required fields!")],-1))),Ue=[Me],He={key:0,class:"text-success text-center mb-0"},je={key:1,class:"text-danger text-center mb-0"};function Ee(e,t,s,l,a,n){const c=(0,i.up)("SvgLg"),r=(0,i.up)("ToolTip"),d=(0,i.up)("SvgSm");return(0,i.wg)(),(0,i.iD)("div",ae,[(0,i._)("div",ne,[(0,i._)("h5",ce," Update "+(0,x.zw)(a.firstName)+" "+(0,x.zw)(a.lastName)+"'s Info ",1),(0,i.Wm)(r,{toolTipText:"Update "+s.customer.firstName+" "+s.customer.lastName+"'s Info"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{viewBox:"0 0 640 512",d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"},null,8,["d"])])),_:1},8,["toolTipText"]),re]),de,(0,i._)("form",{method:"POST",onSubmit:t[6]||(t[6]=(0,o.iM)(((...e)=>n.updateCustomerDetail&&n.updateCustomerDetail(...e)),["prevent"]))},[(0,i._)("div",ue,[(0,i._)("div",me,[ge,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":t[0]||(t[0]=e=>a.firstName=e)},null,512),[[o.nr,a.firstName]])])]),(0,i._)("div",pe,[(0,i._)("div",he,[fe,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":t[1]||(t[1]=e=>a.lastName=e)},null,512),[[o.nr,a.lastName]])])]),(0,i._)("div",ve,[(0,i._)("div",we,[_e,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":t[2]||(t[2]=e=>a.age=e)},null,512),[[o.nr,a.age]])])]),(0,i._)("div",be,[(0,i._)("div",Ce,[ye,(0,i.wy)((0,i._)("input",{type:"tel",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":t[3]||(t[3]=e=>a.mobileNo=e)},null,512),[[o.nr,a.mobileNo]])])]),(0,i._)("div",xe,[(0,i._)("div",Ne,[De,(0,i.wy)((0,i._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>a.email=e)},null,512),[[o.nr,a.email]])])]),ke,(0,i._)("div",Le,[(0,i._)("div",Ve,[(0,i._)("button",Se,[(0,i.Wm)(d,{viewBox:"0 0 448 512",d:"M224 256c-35.2 0-64 28.8-64 64c0 35.2 28.8 64 64 64c35.2 0 64-28.8 64-64C288 284.8 259.2 256 224 256zM433.1 129.1l-83.9-83.9C341.1 37.06 328.8 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 151.2 442.9 138.9 433.1 129.1zM128 80h144V160H128V80zM400 416c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16V96c0-8.838 7.164-16 16-16h16v104c0 13.25 10.75 24 24 24h192C309.3 208 320 197.3 320 184V83.88l78.25 78.25C399.4 163.2 400 164.8 400 166.3V416z"},null,8,["d"]),(0,i.Uk)(" Save ")])]),(0,i._)("div",ze,[(0,i._)("button",{class:"btn btn-outline-danger mb-2 w-100",onClick:t[5]||(t[5]=e=>n.closeEdit(!1))},[(0,i.Wm)(d,{viewBox:"0 0 512 512",d:"M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"},null,8,["d"]),(0,i.Uk)(" Back ")])])]),a.formValidationAlert?((0,i.wg)(),(0,i.iD)("div",Te,Ue)):(0,i.kq)("",!0)],32),this.isUpdateSuccess?((0,i.wg)(),(0,i.iD)("p",He," Update was successful! ")):(0,i.kq)("",!0),this.isUpdateSuccess||void 0===this.isUpdateSuccess?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",je," Update was unsuccessful! "))])}const Be={class:"tooltip"},We={class:"tooltiptext"};function Ae(e,t,s,o,l,a){return(0,i.wg)(),(0,i.iD)("div",Be,[(0,i.WI)(e.$slots,"default",{},void 0,!0),(0,i._)("span",We,(0,x.zw)(this.toolTipText),1)])}var Ie={props:["toolTipText"]};const Re=(0,h.Z)(Ie,[["render",Ae],["__scopeId","data-v-78cf8e2c"]]);var Fe=Re;const Pe=["viewBox"],Ze=["d"];function $e(e,t,s,o,l,a){return(0,i.wg)(),(0,i.iD)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:this.viewBox},[(0,i._)("path",{d:this.d},null,8,Ze)],8,Pe)}var qe={props:["viewBox","d"]};const Oe=(0,h.Z)(qe,[["render",$e]]);var Ye=Oe;const Ke=["viewBox"],Ge=["d"];function Je(e,t,s,o,l,a){return(0,i.wg)(),(0,i.iD)("svg",{class:"icon lg",xmlns:"http://www.w3.org/2000/svg",viewBox:this.viewBox},[(0,i._)("path",{d:this.d},null,8,Ge)],8,Ke)}var Qe={props:["viewBox","d"]};const Xe=(0,h.Z)(Qe,[["render",Je]]);var et=Xe,tt={props:["customer","toggleEdit","isLoading"],emits:["toggle-edit","toggle-loading"],components:{ToolTip:Fe,SvgSm:Ye,SvgLg:et},data(){return{updateEndPoint:"https://customers-crud-backend.onrender.com/customers/edit/",id:this.customer.id,firstName:this.customer.firstName,lastName:this.customer.lastName,age:this.customer.age,mobileNo:this.customer.mobileNo,email:this.customer.email,isUpdateSuccess:void 0,formValidationAlert:!1}},methods:{async updateCustomerDetail(){if(this.$emit("toggle-loading",!0),""===this.firstName||""===this.lastName||null===this.age||null===this.mobileNo||""===this.email)return this.formValidationAlert=!0;this.formValidationAlert=!1,await a.Z.post(this.updateEndPoint+this.id,{id:this.id,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((()=>{this.isUpdateSuccess=!0})).catch((()=>{this.isUpdateSuccess=!1})),setTimeout((()=>{this.isUpdateSuccess=void 0,this.closeEdit()}),3e3),this.$emit("toggle-loading",!1)},closeEdit(e){return this.$emit("toggle-edit",e)}}};const st=(0,h.Z)(tt,[["render",Ee],["__scopeId","data-v-0f7a8a78"]]);var ot=st,it={props:["customers","toggle-loading","isLoading"],emits:["toggle-loading"],data(){return{isViewDetails:!1,isEditDetail:!1,isDelete:!1,isDeleteSuccess:void 0,deleteEndpoint:"https://customers-crud-backend.onrender.com/deleteUser"}},components:{CardComponent:ie,UpdateCustomer:ot,ToolTip:Fe,SvgLg:et,SvgSm:Ye},mounted(){setInterval((()=>{this.setAppTitle()}),500)},methods:{viewDetails(e){this.customer=e,this.isViewDetails=!0},editDetails(e){this.customer=e,this.isEditDetail=!0},async deleteCustomer(e){this.$emit("toggle-loading",!0),await a.Z.post(this.deleteEndpoint,e).then((()=>{this.isDeleteSuccess=!0})).catch((()=>{this.isDeleteSuccess=!1})),setTimeout((()=>{this.isDelete=!1,this.isDeleteSuccess=void 0,this.isViewDetails=!1}),1e3),this.$emit("toggle-loading",!1)},setAppTitle(){this.isViewDetails&&this.isDelete&&(document.title=`Delete ${this.customer.firstName} ${this.customer.lastName}'s Info - CIM`),this.isViewDetails&&!this.isDelete&&(document.title=`${this.customer.firstName} ${this.customer.lastName}'s Info - CIM`),this.isEditDetail&&(document.title=`Update ${this.customer.firstName} ${this.customer.lastName}'s Info - CIM`)}}};const lt=(0,h.Z)(it,[["render",X],["__scopeId","data-v-9171359e"]]);var at=lt;const nt=e=>((0,i.dD)("data-v-49c39af3"),e=e(),(0,i.Cn)(),e),ct={key:0,class:"col-12"},rt={class:"toggle-btn-registration btn btn-outline-secondary mb-3 me-2",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Backend-Node"},dt={class:"toggle-btn-registration btn btn-outline-secondary mb-3 me-2",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Frontend-Vue"},ut={key:1,class:"col-12 col-md-6 col-xl-4"},mt={class:"d-flex justify-content-between align-items-center text-secondary"},gt=nt((()=>(0,i._)("h5",{class:"text-secondary"},"New Customer Registration",-1))),pt=nt((()=>(0,i._)("hr",{class:"my-2"},null,-1))),ht={class:"row"},ft={class:"col-12"},vt=nt((()=>(0,i._)("label",{class:"d-flex justify-content-start text-secondary",for:"firstName"},"Customer First Name",-1))),wt={class:"row"},_t={class:"col-12"},bt=nt((()=>(0,i._)("label",{class:"d-flex justify-content-start text-secondary",for:"lastName"},"Customer Last Name",-1))),Ct={class:"row"},yt={class:"col-12"},xt=nt((()=>(0,i._)("label",{class:"d-flex justify-content-start text-secondary",for:"age"},"Customer Age",-1))),Nt={class:"row"},Dt={class:"col-12"},kt=nt((()=>(0,i._)("label",{class:"d-flex justify-content-start text-secondary",for:"mobileNo"},"Mobile Number",-1))),Lt={class:"row"},Vt={class:"col-12"},St=nt((()=>(0,i._)("label",{class:"d-flex justify-content-start text-secondary",for:"email"},"Email Address",-1))),zt=nt((()=>(0,i._)("hr",{class:"my-2"},null,-1))),Tt={class:"row"},Mt={class:"col-12"},Ut={class:"btn btn-outline-success w-100 mb-2",type:"submit"},Ht={class:"col-12"},jt={key:0,class:"row"},Et=nt((()=>(0,i._)("div",{class:"col-12"},[(0,i._)("p",{class:"mb-0 text-danger"}," Please fill up the required fields! ")],-1))),Bt=[Et],Wt={key:0,class:"text-success text-center mb-0"},At={key:1,class:"text-danger text-center mb-0"},It=nt((()=>(0,i._)("hr",null,null,-1)));function Rt(e,t,s,l,a,n){const c=(0,i.up)("SvgSm"),r=(0,i.up)("SvgLg"),d=(0,i.up)("ToolTip"),u=(0,i.up)("CardComponent"),m=(0,i.up)("center");return(0,i.wg)(),(0,i.j4)(m,null,{default:(0,i.w5)((()=>[a.showRegistrationForm?((0,i.wg)(),(0,i.iD)("div",ut,[(0,i.Wm)(o.uT,{appear:"",name:"fade",mode:"out-in"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i._)("div",mt,[gt,(0,i.Wm)(d,{toolTipText:"Register New Customer"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{viewBox:"0 0 640 512",d:"M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"},null,8,["d"])])),_:1})]),pt,(0,i._)("form",{method:"POST",onSubmit:t[7]||(t[7]=(0,o.iM)(((...e)=>n.registerNewCustomer&&n.registerNewCustomer(...e)),["prevent"]))},[(0,i._)("div",ht,[(0,i._)("div",ft,[vt,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":t[1]||(t[1]=e=>a.firstName=e)},null,512),[[o.nr,a.firstName,void 0,{trim:!0}]])])]),(0,i._)("div",wt,[(0,i._)("div",_t,[bt,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":t[2]||(t[2]=e=>a.lastName=e)},null,512),[[o.nr,a.lastName,void 0,{trim:!0}]])])]),(0,i._)("div",Ct,[(0,i._)("div",yt,[xt,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":t[3]||(t[3]=e=>a.age=e)},null,512),[[o.nr,a.age,void 0,{trim:!0}]])])]),(0,i._)("div",Nt,[(0,i._)("div",Dt,[kt,(0,i.wy)((0,i._)("input",{type:"tel",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":t[4]||(t[4]=e=>a.mobileNo=e)},null,512),[[o.nr,a.mobileNo,void 0,{trim:!0}]])])]),(0,i._)("div",Lt,[(0,i._)("div",Vt,[St,(0,i.wy)((0,i._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":t[5]||(t[5]=e=>a.email=e)},null,512),[[o.nr,a.email,void 0,{trim:!0}]])])]),zt,(0,i._)("div",Tt,[(0,i._)("div",Mt,[(0,i._)("button",Ut,[(0,i.Wm)(c,{viewBox:"0 0 640 512",d:"M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"},null,8,["d"]),(0,i.Uk)(" Create New Customer ")])]),(0,i._)("div",Ht,[(0,i._)("button",{class:(0,x.C_)([{"mb-2":a.formValidationAlert,"":!a.formValidationAlert},"btn btn-outline-danger mb-2 w-100"]),type:"submit",onClick:t[6]||(t[6]=(...e)=>n.toggleRegistrationForm&&n.toggleRegistrationForm(...e))},[(0,i.Wm)(c,{viewBox:"0 0 512 512",d:"M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"},null,8,["d"]),(0,i.Uk)(" Back ")],2)])]),a.formValidationAlert?((0,i.wg)(),(0,i.iD)("div",jt,Bt)):(0,i.kq)("",!0)],32),this.isRegistrationSuccess?((0,i.wg)(),(0,i.iD)("p",Wt," Registration was successful! ")):(0,i.kq)("",!0),this.isRegistrationSuccess||void 0===this.isRegistrationSuccess?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",At," Registration was unsuccessful! "))])),_:1})])),_:1}),It])):((0,i.wg)(),(0,i.iD)("div",ct,[(0,i._)("a",rt,[(0,i.Wm)(c,{viewBox:"0 0 448 512",d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},null,8,["d"]),(0,i.Uk)(" Source Code Backend ")]),(0,i._)("a",dt,[(0,i.Wm)(c,{viewBox:"0 0 448 512",d:"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"},null,8,["d"]),(0,i.Uk)(" Source Code Frontend ")]),(0,i._)("button",{class:"toggle-btn-registration btn btn-outline-primary mb-3",onClick:t[0]||(t[0]=(...e)=>n.toggleRegistrationForm&&n.toggleRegistrationForm(...e))},[(0,i.Wm)(c,{viewBox:"0 0 640 512",d:"M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"},null,8,["d"]),(0,i.Uk)(" Add New Customer ")])]))])),_:1})}var Ft={components:{CardComponent:ie,ToolTip:Fe,SvgSm:Ye,SvgLg:et},props:["toggle-loading","isLoading"],emits:["toggle-loading"],data(){return{registrationEndPoint:"https://customers-crud-backend.onrender.com/customers",firstName:"",lastName:"",age:"",mobileNo:"",email:"",showRegistrationForm:!1,formValidationAlert:!1,isRegistrationSuccess:void 0}},mounted(){setInterval((()=>{this.setAppTitle()}),500)},methods:{async registerNewCustomer(){if(this.$emit("toggle-loading",!0),""===this.firstName||""===this.lastName||null===this.age||null===this.mobileNo||""===this.email)return this.formValidationAlert=!0;this.formValidationAlert=!1,await a.Z.post(this.registrationEndPoint,{id:`cid${Date.now()}`,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((()=>{this.isRegistrationSuccess=!0})).catch((()=>{this.isRegistrationSuccess=!1})),setTimeout((()=>{this.isRegistrationSuccess=void 0,this.toggleRegistrationForm()}),3e3),this.firstName=null,this.lastName=null,this.age=null,this.mobileNo=null,this.email=null,this.$emit("toggle-loading",!1)},toggleRegistrationForm(){return this.showRegistrationForm=!this.showRegistrationForm},setAppTitle(){this.showRegistrationForm?document.title="Register New Customer Info - CIM":document.title="Home - CIM"}}};const Pt=(0,h.Z)(Ft,[["render",Rt],["__scopeId","data-v-49c39af3"]]);var Zt=Pt;const $t=e=>((0,i.dD)("data-v-3aa5bcb8"),e=e(),(0,i.Cn)(),e),qt={class:"centered overlay"},Ot=$t((()=>(0,i._)("div",{class:"d-flex spinner"},[(0,i._)("div",{style:{"--j":1},class:"mx-1 spinner-grow one",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")]),(0,i._)("div",{style:{"--j":2},class:"mx-1 spinner-grow two",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")]),(0,i._)("div",{style:{"--j":3},class:"mx-1 spinner-grow three",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")])],-1))),Yt=[Ot];function Kt(e,t){return(0,i.wg)(),(0,i.iD)("div",qt,Yt)}const Gt={},Jt=(0,h.Z)(Gt,[["render",Kt],["__scopeId","data-v-3aa5bcb8"]]);var Qt=Jt,Xt={props:["customers"],components:{CPCustomerList:at,CreateCustomer:Zt,LoadingSpinner:Qt},data(){return{isViewAllCustomers:!0,isLoading:!1}}};const es=(0,h.Z)(Xt,[["render",y]]);var ts=es,ss={props:["customers"],components:{CPCustomers:ts}};const os=(0,h.Z)(ss,[["render",_]]);var is=os;const ls={class:"text-center text-sm-start px-4 py-2"},as=(0,i._)("hr",null,null,-1),ns={class:"container-fluid"},cs={class:"row"},rs={class:"col-12"},ds={class:"text-secondary"};function us(e,t,s,o,l,a){return(0,i.wg)(),(0,i.iD)("footer",ls,[as,(0,i._)("div",ns,[(0,i._)("div",cs,[(0,i._)("div",rs,[(0,i._)("p",ds,(0,x.zw)(a.updateDate())+" © Capital Platforms ",1)])])])])}var ms={methods:{updateDate(){return(new Date).getFullYear()}}};const gs=(0,h.Z)(ms,[["render",us]]);var ps=gs,hs={name:"CDM-Tool",components:{CPHeader:w,CPBody:is,CPFooter:ps,LoadingSpinner:Qt},data(){return{getAllCustomersUrl:"https://customers-crud-backend.onrender.com/customers",customers:[],isLoading:!1}},mounted(){this.setAppTitle(),this.getAllCustomers(),setInterval((()=>{this.getAllCustomers()}),5e3)},methods:{async getAllCustomers(){this.isLoading=!0;try{const e=await a.Z.get(this.getAllCustomersUrl);this.customers=e.data,console.log(e.data)}catch(e){console.error(e)}this.isLoading=!0},setAppTitle(){document.title="Home - CIM"}}};const fs=(0,h.Z)(hs,[["render",l]]);var vs=fs,ws=s(1882);const _s=(0,ws.MT)({state(){return{isLoading:!1}},mutations:{isLoading(e,t){e.isLoading=t}},actions:{isLoading(e,t){console.log(t),e.commit("isLoading",t)}},getters:{isLoading(e){return e.isLoading}}});var bs=_s;const Cs=(0,o.ri)(vs);Cs.use(bs),Cs.mount("#app")}},t={};function s(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,s),l.exports}s.m=e,function(){var e=[];s.O=function(t,o,i,l){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],l=e[d][2];for(var n=!0,c=0;c<o.length;c++)(!1&l||a>=l)&&Object.keys(s.O).every((function(e){return s.O[e](o[c])}))?o.splice(c--,1):(n=!1,l<a&&(a=l));if(n){e.splice(d--,1);var r=i();void 0!==r&&(t=r)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[o,i,l]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,l,a=o[0],n=o[1],c=o[2],r=0;if(a.some((function(t){return 0!==e[t]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(c)var d=c(s)}for(t&&t(o);r<a.length;r++)l=a[r],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(d)},o=self["webpackChunkcustomers_frontend"]=self["webpackChunkcustomers_frontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(3881)}));o=s.O(o)})();
//# sourceMappingURL=app.d035722e.js.map