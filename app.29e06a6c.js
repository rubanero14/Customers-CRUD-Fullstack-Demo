(function(){"use strict";var e={995:function(e,t,s){var i=s(9242),o=s(3396);function a(e,t,s,i,a,l){const c=(0,o.up)("CPHeader"),n=(0,o.up)("CPBody"),r=(0,o.up)("CPSnackbar"),d=(0,o.up)("CPFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(n,{customers:this.customers,isFetchingData:this.isFetchingData,fetchError:this.fetchError,fetchCode:this.fetchCode},null,8,["customers","isFetchingData","fetchError","fetchCode"]),this.snackBarActivation>0?((0,o.wg)(),(0,o.j4)(r,{key:0,snackBarView:this.fetchCode,onClick:t[0]||(t[0]=e=>this.snackBarActivation=0)},null,8,["snackBarView"])):(0,o.kq)("",!0),(0,o.Wm)(d)],64)}var l=s(4311);const c=e=>((0,o.dD)("data-v-43c28f33"),e=e(),(0,o.Cn)(),e),n={class:"pt-4 px-3 px-lg-4"},r={class:"container-fluid"},d={class:"row"},m={class:"col-sm-6 col-md-4 col-lg-3 col-xl-2"},u=c((()=>(0,o._)("img",{class:"brand",src:"cp-logo.png",alt:"Capital Platforms logo"},null,-1))),h=c((()=>(0,o._)("hr",null,null,-1)));function f(e,t){return(0,o.wg)(),(0,o.iD)("header",n,[(0,o._)("div",r,[(0,o._)("div",d,[(0,o._)("div",m,[(0,o.Wm)(i.uT,{mode:"out-in",name:"slide-fade",appear:""},{default:(0,o.w5)((()=>[u])),_:1})])])]),h])}var p=s(89);const g={},w=(0,p.Z)(g,[["render",f],["__scopeId","data-v-43c28f33"]]);var v=w;function _(e,t,s,i,a,l){const c=(0,o.up)("CPCustomers");return(0,o.wg)(),(0,o.j4)(c,{customers:this.customers,isFetchingData:this.isFetchingData,fetchError:this.fetchError,fetchCode:this.fetchCode},null,8,["customers","isFetchingData","fetchError","fetchCode"])}const C={class:"container"},b={class:"row"};function y(e,t,s,i,a,l){const c=(0,o.up)("CreateCustomer"),n=(0,o.up)("CPCustomerList");return(0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",b,[(0,o.Wm)(c,{class:"mb-3"}),(0,o.Wm)(n,{customers:this.customers,isFetchingData:this.isFetchingData,fetchError:this.fetchError,fetchCode:this.fetchCode},null,8,["customers","isFetchingData","fetchError","fetchCode"])])])}var k=s(7139);const x=e=>((0,o.dD)("data-v-35f819e6"),e=e(),(0,o.Cn)(),e),N={key:1,class:"col-12"},D={key:0},z=x((()=>(0,o._)("h1",{class:"text-secondary mb-3"},[(0,o._)("strong",null,"List of Customers")],-1))),V={class:"d-flex justify-content-between align-items-center text-secondary"},S=x((()=>(0,o._)("h5",null,"Customer Profile",-1))),L=x((()=>(0,o._)("hr",{class:"my-2"},null,-1))),E={class:"text-secondary mb-1"},M={class:"text-secondary mb-2"},T=["onClick"],U=["id"],H={class:"d-flex justify-content-between align-items-center text-secondary"},B={class:"text-secondary"},F=x((()=>(0,o._)("hr",{class:"my-2"},null,-1))),j={class:"text-secondary mb-1"},A={class:"text-secondary mb-1"},W={class:"text-secondary mb-1"},I={class:"text-secondary mb-1"},P={class:"text-secondary mb-2"},R=x((()=>(0,o._)("hr",{class:"my-2"},null,-1))),$=x((()=>(0,o._)("br",null,null,-1))),q=x((()=>(0,o._)("br",null,null,-1))),O={class:"text-danger text-center mb-2"},Z=x((()=>(0,o._)("br",null,null,-1))),G={key:0,class:"text-success text-center mb-0"},Y={key:1,class:"text-danger text-center mb-0"},K={key:2,class:"col-12"},J=x((()=>(0,o._)("span",{class:"text-danger"},"503",-1))),Q=x((()=>(0,o._)("span",{class:"text-danger"},"404",-1)));function X(e,t,s,a,l,c){const n=(0,o.up)("LoadingSpinner"),r=(0,o.up)("SVG"),d=(0,o.up)("ToolTip"),m=(0,o.up)("center"),u=(0,o.up)("CardComponent"),h=(0,o.up)("UpdateCustomer"),f=(0,o.up)("CPAlert");return(0,o.wg)(),(0,o.iD)(o.HY,null,[this.$store.getters.isLoading&&!this.isEditDetail?((0,o.wg)(),(0,o.j4)(n,{key:0})):(0,o.kq)("",!0),void 0!==s.customers&&s.customers.length>0&&!this.fetchError?((0,o.wg)(),(0,o.iD)("div",N,[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[l.isViewDetails?((0,o.wg)(),(0,o.j4)(i.uT,{key:1,appear:"",name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[l.isEditDetail?((0,o.wg)(),(0,o.j4)(h,{key:1,customer:e.customer,onToggleEdit:t[5]||(t[5]=t=>l.isEditDetail=e.newValue),isEditDetail:l.isEditDetail},null,8,["customer","isEditDetail"])):((0,o.wg)(),(0,o.iD)("div",{key:0,id:e.customer.id},[(0,o._)("div",H,[(0,o._)("h5",B,(0,k.zw)(this.isDelete?"Delete":"")+" "+(0,k.zw)(e.customer.firstName+" "+e.customer.lastName)+"'s Info ",1),(0,o._)("div",null,[this.isDelete?((0,o.wg)(),(0,o.j4)(d,{key:0,toolTipText:"Delete "+e.customer.firstName+" "+e.customer.lastName+"'s Info"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{size:"lg",viewBox:"0 0 640 512",d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7H514.3c3.9 0 7.6-.7 11-2.1l-261-205.6z"},null,8,["d"])])),_:1},8,["toolTipText"])):((0,o.wg)(),(0,o.j4)(d,{key:1,toolTipText:e.customer.firstName+" "+e.customer.lastName+"'s Info"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{size:"lg",viewBox:"0 0 512 512",d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"},null,8,["d"])])),_:1},8,["toolTipText"]))])]),F,(0,o._)("p",j,[(0,o.Uk)(" Customer ID: "),(0,o._)("strong",null,(0,k.zw)(e.customer.id.toUpperCase()),1)]),(0,o._)("p",A,[(0,o.Uk)(" Customer Name: "),(0,o._)("strong",null,(0,k.zw)(e.customer.firstName+" "+e.customer.lastName),1)]),(0,o._)("p",W,[(0,o.Uk)(" Customer Mobile No: "),(0,o._)("strong",null,(0,k.zw)(e.customer.mobileNo),1)]),(0,o._)("p",I,[(0,o.Uk)(" Customer Age: "),(0,o._)("strong",null,(0,k.zw)(e.customer.age),1)]),(0,o._)("p",P,[(0,o.Uk)(" Customer Email: "),(0,o._)("strong",null,(0,k.zw)(e.customer.email),1)]),R,(0,o.wy)((0,o._)("div",null,[(0,o._)("button",{class:"btn btn-outline-danger mb-2",onClick:t[0]||(t[0]=e=>this.isDelete=!0)},[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 448 512",d:"M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"},null,8,["d"]),(0,o.Uk)(" Delete ")]),$,(0,o._)("button",{class:"btn btn-outline-primary mb-2",onClick:t[1]||(t[1]=t=>c.editDetails(e.customer))},[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 640 512",d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"},null,8,["d"]),(0,o.Uk)(" Edit ")]),q,(0,o._)("button",{class:"btn btn-outline-success mb-2",onClick:t[2]||(t[2]=e=>this.isViewDetails=!1)},[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 512 512",d:"M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"},null,8,["d"]),(0,o.Uk)(" Back ")])],512),[[i.F8,!this.isDelete]]),(0,o.wy)((0,o._)("p",O,[(0,o._)("strong",null," Are you sure to delete "+(0,k.zw)(e.customer.firstName+" "+e.customer.lastName)+"'s details? ",1)],512),[[i.F8,this.isDelete]]),(0,o.wy)((0,o._)("div",null,[(0,o._)("button",{class:"btn btn-outline-danger mb-2",onClick:t[3]||(t[3]=t=>c.deleteCustomer(e.customer.id))},[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 448 512",d:"M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"},null,8,["d"]),(0,o.Uk)(" Yes ")]),Z,(0,o._)("button",{class:"btn btn-outline-success mb-2",onClick:t[4]||(t[4]=e=>this.isDelete=!1)},[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 512 512",d:"M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"},null,8,["d"]),(0,o.Uk)(" No ")]),this.isDeleteSuccess?((0,o.wg)(),(0,o.iD)("p",G," Deleted Successfully! ")):(0,o.kq)("",!0),this.isDeleteSuccess||void 0===this.isDeleteSuccess?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",Y," Delete was unsuccessful! "))],512),[[i.F8,this.isDelete]])],8,U))])),_:1})])),_:1})])),_:1})):((0,o.wg)(),(0,o.iD)("div",D,[z,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.customers,((e,t)=>((0,o.wg)(),(0,o.j4)(i.uT,{key:t,appear:"",name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"mb-3 me-0 me-lg-3",style:(0,k.j5)({"--i":t})},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(m,{key:e.id,id:e.id},{default:(0,o.w5)((()=>[(0,o._)("div",V,[S,(0,o.Wm)(d,{toolTipText:e.firstName+" "+e.lastName+"'s Profile"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{size:"lg",viewBox:"0 0 448 512",d:"M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"},null,8,["d"])])),_:2},1032,["toolTipText"])]),L,(0,o._)("div",null,[(0,o._)("p",E,[(0,o.Uk)(" Customer ID: "),(0,o._)("strong",null,(0,k.zw)(e.id.toUpperCase()),1)]),(0,o._)("p",M,[(0,o.Uk)(" Customer Name: "),(0,o._)("strong",null,(0,k.zw)(e.firstName+" "+e.lastName),1)]),(0,o._)("button",{class:"d-block btn btn-outline-secondary",onClick:t=>c.viewDetails(e)},[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 512 512",d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"},null,8,["d"]),(0,o.Uk)(" View Details ")],8,T)])])),_:2},1032,["id"]))])),_:2},1032,["style"])])),_:2},1024)))),128))]))])),_:1})])):((0,o.wg)(),(0,o.iD)("div",K,[this.fetchError&&503===this.fetchCode?((0,o.wg)(),(0,o.j4)(f,{key:0},{default:(0,o.w5)((()=>[J,(0,o.Uk)(": Server offline!")])),_:1})):(0,o.kq)("",!0),this.fetchError&&404===this.fetchCode?((0,o.wg)(),(0,o.j4)(f,{key:1},{default:(0,o.w5)((()=>[Q,(0,o.Uk)(": Network offline!")])),_:1})):(0,o.kq)("",!0),this.isFetchingData&&void 0===s.customers?((0,o.wg)(),(0,o.j4)(f,{key:2},{default:(0,o.w5)((()=>[(0,o.Uk)("Please wait, data being fetched from server...")])),_:1})):(0,o.kq)("",!0),void 0!==s.customers&&0===s.customers.length?((0,o.wg)(),(0,o.j4)(f,{key:3},{default:(0,o.w5)((()=>[(0,o.Uk)("No clients registered for now. Register a new one?")])),_:1})):(0,o.kq)("",!0)]))],64)}const ee={class:"card d-inline-block"};function te(e,t){return(0,o.wg)(),(0,o.iD)("div",ee,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}const se={},ie=(0,p.Z)(se,[["render",te],["__scopeId","data-v-2a8bff90"]]);var oe=ie;const ae=e=>((0,o.dD)("data-v-8a0f2028"),e=e(),(0,o.Cn)(),e),le={class:"col-12"},ce={class:"d-flex justify-content-between align-items-center text-secondary"},ne={class:"text-secondary"},re=ae((()=>(0,o._)("div",{class:"tooltip"},[(0,o._)("span",{class:"tooltiptext"})],-1))),de=ae((()=>(0,o._)("hr",{class:"my-2"},null,-1))),me={class:"row"},ue={class:"col-12"},he=ae((()=>(0,o._)("label",{class:"d-flex justify-content-start text-secondary",for:"firstName"},"Customer First Name",-1))),fe={class:"row"},pe={class:"col-12"},ge=ae((()=>(0,o._)("label",{class:"d-flex justify-content-start text-secondary",for:"lastName"},"Customer Last Name",-1))),we={class:"row"},ve={class:"col-12"},_e=ae((()=>(0,o._)("label",{class:"d-flex justify-content-start text-secondary",for:"age"},"Customer Age",-1))),Ce={class:"row"},be={class:"col-12"},ye=ae((()=>(0,o._)("label",{class:"d-flex justify-content-start text-secondary",for:"mobileNo"},"Mobile Number",-1))),ke={class:"row"},xe={class:"col-12"},Ne=ae((()=>(0,o._)("label",{class:"d-flex justify-content-start text-secondary",for:"email"},"Email Address",-1))),De=ae((()=>(0,o._)("hr",{class:"my-2"},null,-1))),ze={class:"row"},Ve={class:"col-12"},Se={class:"btn btn-outline-success w-100 mb-2",type:"submit"},Le={class:"col-12"},Ee={key:0,class:"row"},Me=ae((()=>(0,o._)("div",{class:"col-12"},[(0,o._)("p",{class:"mb-0 text-danger"},"Please fill up the required fields!")],-1))),Te=[Me],Ue={key:0,class:"text-success text-center mb-0"},He={key:1,class:"text-danger text-center mb-0"};function Be(e,t,s,a,l,c){const n=(0,o.up)("LoadingSpinner"),r=(0,o.up)("SVG"),d=(0,o.up)("ToolTip");return(0,o.wg)(),(0,o.iD)(o.HY,null,[this.$store.getters.isLoading?((0,o.wg)(),(0,o.j4)(n,{key:0})):(0,o.kq)("",!0),(0,o._)("div",le,[(0,o._)("div",ce,[(0,o._)("h5",ne," Update "+(0,k.zw)(l.firstName)+" "+(0,k.zw)(l.lastName)+"'s Info ",1),(0,o.Wm)(d,{toolTipText:"Update "+s.customer.firstName+" "+s.customer.lastName+"'s Info"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{size:"lg",viewBox:"0 0 640 512",d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"},null,8,["d"])])),_:1},8,["toolTipText"]),re]),de,(0,o._)("form",{method:"POST",onSubmit:t[6]||(t[6]=(0,i.iM)(((...e)=>c.updateCustomerDetail&&c.updateCustomerDetail(...e)),["prevent"]))},[(0,o._)("div",me,[(0,o._)("div",ue,[he,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":t[0]||(t[0]=e=>l.firstName=e)},null,512),[[i.nr,l.firstName]])])]),(0,o._)("div",fe,[(0,o._)("div",pe,[ge,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":t[1]||(t[1]=e=>l.lastName=e)},null,512),[[i.nr,l.lastName]])])]),(0,o._)("div",we,[(0,o._)("div",ve,[_e,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":t[2]||(t[2]=e=>l.age=e)},null,512),[[i.nr,l.age]])])]),(0,o._)("div",Ce,[(0,o._)("div",be,[ye,(0,o.wy)((0,o._)("input",{type:"tel",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":t[3]||(t[3]=e=>l.mobileNo=e)},null,512),[[i.nr,l.mobileNo]])])]),(0,o._)("div",ke,[(0,o._)("div",xe,[Ne,(0,o.wy)((0,o._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>l.email=e)},null,512),[[i.nr,l.email]])])]),De,(0,o._)("div",ze,[(0,o._)("div",Ve,[(0,o._)("button",Se,[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 448 512",d:"M224 256c-35.2 0-64 28.8-64 64c0 35.2 28.8 64 64 64c35.2 0 64-28.8 64-64C288 284.8 259.2 256 224 256zM433.1 129.1l-83.9-83.9C341.1 37.06 328.8 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 151.2 442.9 138.9 433.1 129.1zM128 80h144V160H128V80zM400 416c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16V96c0-8.838 7.164-16 16-16h16v104c0 13.25 10.75 24 24 24h192C309.3 208 320 197.3 320 184V83.88l78.25 78.25C399.4 163.2 400 164.8 400 166.3V416z"},null,8,["d"]),(0,o.Uk)(" Save ")])]),(0,o._)("div",Le,[(0,o._)("button",{class:"btn btn-outline-danger mb-2 w-100",onClick:t[5]||(t[5]=e=>c.closeEdit(!1))},[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 512 512",d:"M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"},null,8,["d"]),(0,o.Uk)(" Back ")])])]),l.formValidationAlert?((0,o.wg)(),(0,o.iD)("div",Ee,Te)):(0,o.kq)("",!0)],32),this.isUpdateSuccess?((0,o.wg)(),(0,o.iD)("p",Ue," Update was successful! ")):(0,o.kq)("",!0),this.isUpdateSuccess||void 0===this.isUpdateSuccess?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",He," Update was unsuccessful! "))])],64)}const Fe={class:"tooltip"},je={class:"tooltiptext"};function Ae(e,t,s,i,a,l){return(0,o.wg)(),(0,o.iD)("div",Fe,[(0,o.WI)(e.$slots,"default",{},void 0,!0),(0,o._)("span",je,(0,k.zw)(this.toolTipText),1)])}var We={props:["toolTipText"]};const Ie=(0,p.Z)(We,[["render",Ae],["__scopeId","data-v-78cf8e2c"]]);var Pe=Ie;const Re=["viewBox"],$e=["d"];function qe(e,t,s,i,a,l){return(0,o.wg)(),(0,o.iD)("svg",{class:(0,k.C_)(["icon",this.size]),xmlns:"http://www.w3.org/2000/svg",viewBox:this.viewBox},[(0,o._)("path",{d:this.d},null,8,$e)],10,Re)}var Oe={props:["viewBox","d","size"]};const Ze=(0,p.Z)(Oe,[["render",qe]]);var Ge=Ze;const Ye={class:"centered overlay"},Ke=(0,o._)("div",{class:"d-flex justify-content-center align-items-center spinner"},[(0,o._)("div",{class:"mx-1 spinner-grow one",role:"status"},[(0,o._)("span",{class:"visually-hidden"},"Loading...")]),(0,o._)("div",{class:"mx-1 spinner-grow two",role:"status"},[(0,o._)("span",{class:"visually-hidden"},"Loading...")]),(0,o._)("div",{class:"mx-1 spinner-grow three",role:"status"},[(0,o._)("span",{class:"visually-hidden"},"Loading...")])],-1),Je=[Ke];function Qe(e,t){return(0,o.wg)(),(0,o.iD)("div",Ye,Je)}const Xe={},et=(0,p.Z)(Xe,[["render",Qe]]);var tt=et,st={props:["customer","toggleEdit"],emits:["toggle-edit"],components:{ToolTip:Pe,SVG:Ge,LoadingSpinner:tt},data(){return{updateEndPoint:"https://customers-crud-backend.onrender.com/customers/edit/",id:this.customer.id,firstName:this.customer.firstName,lastName:this.customer.lastName,age:this.customer.age,mobileNo:this.customer.mobileNo,email:this.customer.email,isUpdateSuccess:void 0,formValidationAlert:!1}},methods:{async updateCustomerDetail(){if(this.$store.dispatch("isLoading",!0),""===this.firstName||""===this.lastName||""===this.age||""===this.mobileNo||""===this.email)return this.$store.dispatch("isLoading",!1),this.formValidationAlert=!0;this.formValidationAlert=!1,await l.Z.post(this.updateEndPoint+this.id,{id:this.id,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((()=>{this.isUpdateSuccess=!0})).catch((()=>{this.isUpdateSuccess=!1})),setTimeout((()=>{this.$store.dispatch("isLoading",!1),this.isUpdateSuccess=void 0,this.closeEdit(!1)}),3e3)},closeEdit(e){return this.$emit("toggle-edit",e)}}};const it=(0,p.Z)(st,[["render",Be],["__scopeId","data-v-8a0f2028"]]);var ot=it;const at={class:"text-center text-secondary no-clients-alert mb-0"};function lt(e,t){return(0,o.wg)(),(0,o.iD)("p",at,[(0,o.WI)(e.$slots,"default")])}const ct={},nt=(0,p.Z)(ct,[["render",lt]]);var rt=nt,dt={props:["customers","isFetchingData","fetchError","fetchCode"],data(){return{isViewDetails:!1,isEditDetail:!1,isDelete:!1,isDeleteSuccess:void 0,deleteEndpoint:"https://customers-crud-backend.onrender.com/deleteUser"}},components:{CardComponent:oe,UpdateCustomer:ot,ToolTip:Pe,SVG:Ge,LoadingSpinner:tt,CPAlert:rt},mounted(){setInterval((()=>{this.setAppTitle()}),100)},methods:{viewDetails(e){this.customer=e,this.isViewDetails=!0},editDetails(e){this.customer=e,this.isEditDetail=!0},async deleteCustomer(e){this.$store.dispatch("isLoading",!0),await l.Z.post(this.deleteEndpoint,e).then((()=>{this.isDeleteSuccess=!0})).catch((()=>{this.isDeleteSuccess=!1})),setTimeout((()=>{this.$store.dispatch("isLoading",!1),this.isDelete=!1,this.isDeleteSuccess=void 0,this.isViewDetails=!1}),3e3)},setAppTitle(){this.isViewDetails&&this.isDelete&&(document.title=`Delete ${this.customer.firstName} ${this.customer.lastName}'s Info - CIM`),this.isViewDetails&&!this.isDelete&&(document.title=`${this.customer.firstName} ${this.customer.lastName}'s Info - CIM`),this.isEditDetail&&(document.title=`Update ${this.customer.firstName} ${this.customer.lastName}'s Info - CIM`),this.fetchError&&503===this.fetchCode&&(document.title="503: Server Offline - CIM"),this.fetchError&&404===this.fetchCode&&(document.title="404: Network Offline - CIM")}}};const mt=(0,p.Z)(dt,[["render",X],["__scopeId","data-v-35f819e6"]]);var ut=mt;const ht=e=>((0,o.dD)("data-v-a3284612"),e=e(),(0,o.Cn)(),e),ft={key:1,class:"col-6 col-md-4"},pt={class:"toggle-btn-registration btn btn-outline-secondary mb-3",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Backend-Node"},gt=ht((()=>(0,o._)("span",{class:"ms-1 d-none d-md-inline-block"},"Source Code",-1))),wt={key:2,class:"col-6 col-md-4"},vt={class:"toggle-btn-registration btn btn-outline-secondary mb-3",target:"_blank",href:"https://github.com/rubanero14/Customers-CRUD-Frontend-Vue"},_t=ht((()=>(0,o._)("span",{class:"ms-1 d-none d-md-inline-block"},"Source Code",-1))),Ct={key:3,class:"col-12 col-md-4"},bt={class:"col-12 col-md-6 col-xl-4"},yt={class:"d-flex justify-content-between align-items-center text-secondary"},kt=ht((()=>(0,o._)("h5",{class:"text-secondary"},"New Customer Registration",-1))),xt=ht((()=>(0,o._)("hr",{class:"my-2"},null,-1))),Nt={class:"row"},Dt={class:"col-12"},zt=ht((()=>(0,o._)("label",{class:"d-flex justify-content-start text-secondary",for:"firstName"},"Customer First Name",-1))),Vt={class:"row"},St={class:"col-12"},Lt=ht((()=>(0,o._)("label",{class:"d-flex justify-content-start text-secondary",for:"lastName"},"Customer Last Name",-1))),Et={class:"row"},Mt={class:"col-12"},Tt=ht((()=>(0,o._)("label",{class:"d-flex justify-content-start text-secondary",for:"age"},"Customer Age",-1))),Ut={class:"row"},Ht={class:"col-12"},Bt=ht((()=>(0,o._)("label",{class:"d-flex justify-content-start text-secondary",for:"mobileNo"},"Mobile Number",-1))),Ft={class:"row"},jt={class:"col-12"},At=ht((()=>(0,o._)("label",{class:"d-flex justify-content-start text-secondary",for:"email"},"Email Address",-1))),Wt=ht((()=>(0,o._)("hr",{class:"my-2"},null,-1))),It={class:"row"},Pt={class:"col-12"},Rt={class:"btn btn-outline-success w-100 mb-2",type:"submit"},$t={class:"col-12"},qt={key:0,class:"row"},Ot=ht((()=>(0,o._)("div",{class:"col-12"},[(0,o._)("p",{class:"mb-0 text-danger"}," Please fill up the required fields! ")],-1))),Zt=[Ot],Gt={key:0,class:"text-success text-center mb-0"},Yt={key:1,class:"text-danger text-center mb-0"},Kt=ht((()=>(0,o._)("hr",null,null,-1)));function Jt(e,t,s,a,l,c){const n=(0,o.up)("LoadingSpinner"),r=(0,o.up)("SVG"),d=(0,o.up)("ToolTip"),m=(0,o.up)("CardComponent"),u=(0,o.up)("center");return(0,o.wg)(),(0,o.iD)(o.HY,null,[this.$store.getters.isLoading?((0,o.wg)(),(0,o.j4)(n,{key:0})):(0,o.kq)("",!0),this.showRegistrationForm?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ft,[(0,o._)("a",pt,[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 448 512",d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},null,8,["d"]),gt,(0,o.Uk)(" Backend ")])])),this.showRegistrationForm?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",wt,[(0,o._)("a",vt,[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 448 512",d:"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"},null,8,["d"]),_t,(0,o.Uk)(" Frontend ")])])),this.showRegistrationForm?((0,o.wg)(),(0,o.j4)(u,{key:4},{default:(0,o.w5)((()=>[(0,o._)("div",bt,[(0,o.Wm)(i.uT,{appear:"",name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o._)("div",yt,[kt,(0,o.Wm)(d,{toolTipText:"Register New Customer"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{size:"lg",viewBox:"0 0 640 512",d:"M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"},null,8,["d"])])),_:1})]),xt,(0,o._)("form",{method:"POST",onSubmit:t[7]||(t[7]=(0,i.iM)(((...e)=>c.registerNewCustomer&&c.registerNewCustomer(...e)),["prevent"]))},[(0,o._)("div",Nt,[(0,o._)("div",Dt,[zt,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer First Name..",name:"firstName",id:"firstName","onUpdate:modelValue":t[1]||(t[1]=e=>l.firstName=e)},null,512),[[i.nr,l.firstName,void 0,{trim:!0}]])])]),(0,o._)("div",Vt,[(0,o._)("div",St,[Lt,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control mb-2",placeholder:"Enter customer Last Name..",name:"lastName",id:"lastName","onUpdate:modelValue":t[2]||(t[2]=e=>l.lastName=e)},null,512),[[i.nr,l.lastName,void 0,{trim:!0}]])])]),(0,o._)("div",Et,[(0,o._)("div",Mt,[Tt,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control mb-2",placeholder:"Enter customer Age..",name:"age",id:"age","onUpdate:modelValue":t[3]||(t[3]=e=>l.age=e)},null,512),[[i.nr,l.age,void 0,{trim:!0}]])])]),(0,o._)("div",Ut,[(0,o._)("div",Ht,[Bt,(0,o.wy)((0,o._)("input",{type:"tel",class:"form-control mb-2",placeholder:"Enter mobile no..",name:"mobileNo",id:"mobileNo","onUpdate:modelValue":t[4]||(t[4]=e=>l.mobileNo=e)},null,512),[[i.nr,l.mobileNo,void 0,{trim:!0}]])])]),(0,o._)("div",Ft,[(0,o._)("div",jt,[At,(0,o.wy)((0,o._)("input",{type:"email",class:"form-control mb-2",placeholder:"Enter email address..",name:"email",id:"email","onUpdate:modelValue":t[5]||(t[5]=e=>l.email=e)},null,512),[[i.nr,l.email,void 0,{trim:!0}]])])]),Wt,(0,o._)("div",It,[(0,o._)("div",Pt,[(0,o._)("button",Rt,[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 640 512",d:"M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"},null,8,["d"]),(0,o.Uk)(" Create New Customer ")])]),(0,o._)("div",$t,[(0,o._)("button",{class:(0,k.C_)([{"mb-2":l.formValidationAlert,"":!l.formValidationAlert},"btn btn-outline-danger mb-2 w-100"]),type:"submit",onClick:t[6]||(t[6]=(...e)=>c.toggleRegistrationForm&&c.toggleRegistrationForm(...e))},[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 512 512",d:"M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"},null,8,["d"]),(0,o.Uk)(" Back ")],2)])]),l.formValidationAlert?((0,o.wg)(),(0,o.iD)("div",qt,Zt)):(0,o.kq)("",!0)],32),this.isRegistrationSuccess?((0,o.wg)(),(0,o.iD)("p",Gt," Registration was successful! ")):(0,o.kq)("",!0),this.isRegistrationSuccess||void 0===this.isRegistrationSuccess?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",Yt," Registration was unsuccessful! "))])),_:1})])),_:1}),Kt])])),_:1})):((0,o.wg)(),(0,o.iD)("div",Ct,[(0,o._)("button",{class:"toggle-btn-registration btn btn-outline-primary mb-3",onClick:t[0]||(t[0]=(...e)=>c.toggleRegistrationForm&&c.toggleRegistrationForm(...e))},[(0,o.Wm)(r,{size:"sm",viewBox:"0 0 640 512",d:"M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"},null,8,["d"]),(0,o.Uk)(" Add New Customer ")])]))],64)}var Qt={components:{CardComponent:oe,ToolTip:Pe,SVG:Ge,LoadingSpinner:tt},data(){return{registrationEndPoint:"https://customers-crud-backend.onrender.com/customers",firstName:"",lastName:"",age:"",mobileNo:"",email:"",showRegistrationForm:!1,formValidationAlert:!1,isRegistrationSuccess:void 0}},mounted(){setInterval((()=>{this.setAppTitle()}),500)},methods:{async registerNewCustomer(){if(this.$store.dispatch("isLoading",!0),""===this.firstName||""===this.lastName||""===this.age||""===this.mobileNo||""===this.email)return this.$store.dispatch("isLoading",!1),this.formValidationAlert=!0;this.formValidationAlert=!1,await l.Z.post(this.registrationEndPoint,{id:`cid${Date.now()}`,firstName:this.firstName,lastName:this.lastName,age:this.age,mobileNo:this.mobileNo,email:this.email}).then((()=>{this.isRegistrationSuccess=!0})).catch((()=>{this.isRegistrationSuccess=!1})),setTimeout((()=>{this.$store.dispatch("isLoading",!1),this.firstName="",this.lastName="",this.age="",this.mobileNo="",this.email="",this.isRegistrationSuccess=void 0,this.toggleRegistrationForm()}),3e3)},toggleRegistrationForm(){return this.showRegistrationForm=!this.showRegistrationForm},setAppTitle(){this.showRegistrationForm?document.title="Register New Customer Info - CIM":document.title="Home - CIM"}}};const Xt=(0,p.Z)(Qt,[["render",Jt],["__scopeId","data-v-a3284612"]]);var es=Xt,ts={props:["customers","isFetchingData","fetchError","fetchCode"],components:{CPCustomerList:ut,CreateCustomer:es}};const ss=(0,p.Z)(ts,[["render",y]]);var is=ss,os={props:["customers","isFetchingData","fetchError","fetchCode"],components:{CPCustomers:is}};const as=(0,p.Z)(os,[["render",_]]);var ls=as;const cs={class:"text-center text-sm-start px-4 py-2"},ns=(0,o._)("hr",null,null,-1),rs={class:"container-fluid"},ds={class:"row"},ms={class:"col-12"},us={class:"text-secondary"};function hs(e,t,s,i,a,l){return(0,o.wg)(),(0,o.iD)("footer",cs,[ns,(0,o._)("div",rs,[(0,o._)("div",ds,[(0,o._)("div",ms,[(0,o._)("p",us,(0,k.zw)(l.updateDate())+" © Capital Platforms ",1)])])])])}var fs={methods:{updateDate(){return(new Date).getFullYear()}}};const ps=(0,p.Z)(fs,[["render",hs]]);var gs=ps;const ws={class:"centered overlay"},vs={class:"d-flex justify-content-center align-items-end alert-wrapper"},_s={class:"me-1"},Cs={key:0},bs={key:1},ys={key:2};function ks(e,t,s,a,l,c){const n=(0,o.up)("SVG");return(0,o.wg)(),(0,o.j4)(i.uT,{appear:"",name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o._)("div",ws,[(0,o._)("div",vs,[(0,o._)("div",{class:(0,k.C_)(["alert d-flex mb-4 mx-2",{"alert-danger":404===this.snackBarView||503===this.snackBarView,"alert-success":200===this.snackBarView}]),role:"alert"},[(0,o._)("div",_s,[404===this.snackBarView?((0,o.wg)(),(0,o.iD)("span",Cs,"Network Offline")):503===this.snackBarView?((0,o.wg)(),(0,o.iD)("span",bs,"Server Offline")):((0,o.wg)(),(0,o.iD)("span",ys,"Back Online"))]),(0,o.Wm)(n,{class:"mb-0",size:"lg",viewBox:"0 0 512 512",d:"M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"},null,8,["d"])],2)])])])),_:1})}var xs={props:["snackBarView"],components:{SVG:Ge}};const Ns=(0,p.Z)(xs,[["render",ks],["__scopeId","data-v-305ed23c"]]);var Ds=Ns,zs={name:"CDM-Tool",components:{CPHeader:v,CPBody:ls,CPFooter:gs,CPSnackbar:Ds},data(){return{getAllCustomersEndpoint:"https://customers-crud-backend.onrender.com/customers",customers:void 0,isFetchingData:!1,fetchCount:0,fetchError:!1,fetchCode:void 0,snackBarActivation:0,snackBarHide:!0}},mounted(){this.setAppTitle(),this.getAllCustomers(0),setInterval((()=>{this.getAllCustomers(1)}),1e4)},methods:{async getAllCustomers(e){if(navigator.onLine){this.isFetchingData=!0,this.fetchError=!1;try{const e=await l.Z.get(this.getAllCustomersEndpoint);this.customers=e.data,this.fetchCode=200,this.fetchCount=0,this.isFetchingData=!1,this.fetchError=!1,this.autoCloseSnackBar()}catch{this.fetchCode=503,this.snackBarActivation=e+1,this.customers=void 0,this.isFetchingData=!1,this.fetchError=!0,this.fetchCount++}}else this.snackBarActivation=e+1,this.fetchCode=404,this.fetchError=!0},setAppTitle(){document.title="Home - CIM"},autoCloseSnackBar(){setTimeout((()=>{this.snackBarActivation=0}),5e3)}}};const Vs=(0,p.Z)(zs,[["render",a]]);var Ss=Vs,Ls=s(1882);const Es=(0,Ls.MT)({state(){return{isLoading:!1}},mutations:{isLoading(e,t){e.isLoading=t}},actions:{isLoading(e,t){e.commit("isLoading",t)}},getters:{isLoading(e){return e.isLoading}}});var Ms=Es;const Ts=(0,i.ri)(Ss);Ts.use(Ms),Ts.mount("#app")}},t={};function s(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,i,o,a){if(!i){var l=1/0;for(d=0;d<e.length;d++){i=e[d][0],o=e[d][1],a=e[d][2];for(var c=!0,n=0;n<i.length;n++)(!1&a||l>=a)&&Object.keys(s.O).every((function(e){return s.O[e](i[n])}))?i.splice(n--,1):(c=!1,a<l&&(l=a));if(c){e.splice(d--,1);var r=o();void 0!==r&&(t=r)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,o,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,l=i[0],c=i[1],n=i[2],r=0;if(l.some((function(t){return 0!==e[t]}))){for(o in c)s.o(c,o)&&(s.m[o]=c[o]);if(n)var d=n(s)}for(t&&t(i);r<l.length;r++)a=l[r],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},i=self["webpackChunkcustomers_frontend"]=self["webpackChunkcustomers_frontend"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(995)}));i=s.O(i)})();
//# sourceMappingURL=app.29e06a6c.js.map