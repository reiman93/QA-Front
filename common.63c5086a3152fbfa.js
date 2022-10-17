"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[8592],{4673:(C,h,o)=>{o.d(h,{A:()=>i});var c=o(7261),r=o(5e3),_=o(5245),l=o(9808);function d(p,t){if(1&p){const e=r.EpF();r.TgZ(0,"mat-icon",5),r.NdJ("click",function(){return r.CHM(e),r.oxw().sbRef.dismiss()}),r._uU(1,"close"),r.qZA()}}let s=(()=>{class p{constructor(e,n){this.sbRef=e,this.data=n}}return p.\u0275fac=function(e){return new(e||p)(r.Y36(c.OX),r.Y36(c.qD))},p.\u0275cmp=r.Xpm({type:p,selectors:[["app-snack-bar"]],decls:8,vars:3,consts:[[1,"snackbar-panel","mat-elevation-z6"],[1,"icon-message"],[1,"message"],[1,"dismiss"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,n){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"mat-icon"),r._uU(3),r.qZA(),r.qZA(),r.TgZ(4,"div",2),r._uU(5),r.qZA(),r.TgZ(6,"div",3),r.YNc(7,d,2,0,"mat-icon",4),r.qZA(),r.qZA()),2&e&&(r.xp6(3),r.Oqu(n.data.icon),r.xp6(2),r.Oqu(n.data.message),r.xp6(2),r.Q6J("ngIf",n.data.closeButton))},directives:[_.Hw,l.O5],styles:[".snackbar-panel[_ngcontent-%COMP%]{padding:1rem;display:flex;justify-content:space-between;border-radius:3px;max-width:18rem}.snackbar-panel[_ngcontent-%COMP%]   .icon-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:3rem!important;width:3rem!important;height:3rem!important;margin-right:3px!important}.snackbar-panel[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{justify-content:center;margin:0 5px}.snackbar-panel[_ngcontent-%COMP%]   .dismiss[_ngcontent-%COMP%]{cursor:pointer}.snackbar-panel[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){display:flex;align-items:center;justify-content:center}"]}),p})(),i=(()=>{class p{constructor(e){this.snackBar=e}openSnackBar(e="",n,a={duration:3e3,horizontalPosition:"right",verticalPosition:"top"},u="success",v=!1){a&&(a.duration=a.duration?a.duration:e.length>300?100*e.length:3e3,a.horizontalPosition=a.horizontalPosition?a.horizontalPosition:"right",a.verticalPosition=a.verticalPosition?a.verticalPosition:"top"),a.panelClass=["snackbar",`${u}-snackbar`],this.snackBar.openFromComponent(s,Object.assign(Object.assign({},a),{data:{message:e,icon:{basic:"",success:"task_alt_outlined",info:"info_outlined",warning:"warning_outlined",error:"error_outlined"}[u],closeButton:v}}))}}return p.\u0275fac=function(e){return new(e||p)(r.LFG(c.ux))},p.\u0275prov=r.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},5801:(C,h,o)=>{o.d(h,{b:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeRelapseAction",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.action))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},4819:(C,h,o)=>{o.d(h,{C:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeAnalysisState",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.analysis_state))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},6517:(C,h,o)=>{o.d(h,{c:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeAnalysisType",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.analysis_type))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},2836:(C,h,o)=>{o.d(h,{J:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeCompany",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.company))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},4366:(C,h,o)=>{o.d(h,{S:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeDeficiency",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.deficiency))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},2891:(C,h,o)=>{o.d(h,{n:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeDepartment",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.department))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}create(t,e){return this.httpClient.get(this.enviroment.config.url+e,{}).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},3737:(C,h,o)=>{o.d(h,{u:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeJanitor",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.janitor))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,lastname:t.lastname,phone:t.phone,cleaning_companies_id:parseInt(t.company),turn_types_id:parseInt(t.turn)},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,lastname:t.lastname,phone:t.phone,cleaning_companies_id:parseInt(t.company),turn_types_id:parseInt(t.turn)},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},1606:(C,h,o)=>{o.d(h,{v:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeLaboratory",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.laboratory))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,address:t.address,phone:t.phone,gmail:t.gmail},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,address:t.address,phone:t.phone,gmail:t.gmail},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},3516:(C,h,o)=>{o.d(h,{v:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storePreventiveAction",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.preventive))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},5628:(C,h,o)=>{o.d(h,{P:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeSampleForm",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.sample))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},1707:(C,h,o)=>{o.d(h,{i:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeSampleRequestType",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.sample))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},835:(C,h,o)=>{o.d(h,{L:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeTurn",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.turn))}getAll(t){return this.httpClient.get(this.enviroment.config.url+t,s).pipe((0,r.U)(e=>e))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e+"/"+t,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},3851:(C,h,o)=>{o.d(h,{e:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storePreOperational",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.pre_operational))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e,s).pipe((0,r.U)(n=>n))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,{name:t.name,description:t.description},s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}addPreOperation(t,e){return this.httpClient.post(this.enviroment.config.url+e,{aceptable:t.aceptable,notes:t.notes,date:t.date,areas_id:t.id,deficiency_types_id:t.deficiency,janitors_id:t.janitor,relapse_actions_id:t.action,users_id:t.user},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},5519:(C,h,o)=>{o.d(h,{I:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeSampleRequestForms",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.sample_request_forms))}get(t,e){return this.httpClient.get(this.enviroment.config.url+e,s).pipe((0,r.U)(n=>n))}create(t,e,n){return this.httpClient.post(this.enviroment.config.url+n,{name:t.name,date:t.date,state_analisys_id:t.analisys_state,analysis_types_id:t.analysis_types,areas_id:t.area,sample_forms_id:t.sample_forms,laboratories_id:t.laboratory,user_id:e},s).pipe((0,r.U)(a=>a))}update(t,e){return this.httpClient.put(this.enviroment.config.url+e+"/"+t.id,t,s).pipe((0,r.U)(n=>n))}delete(t,e){return this.httpClient.delete(this.enviroment.config.url+e+"/"+t[0],s).pipe((0,r.U)(n=>n))}deleteMany(t,e){return this.httpClient.post(this.enviroment.config.url+e,{ids:t},s).pipe((0,r.U)(n=>n))}addPreOperation(t,e){return this.httpClient.post(this.enviroment.config.url+e,{aceptable:t.aceptable,notes:t.notes,areas_id:t.area,deficiency_types_id:t.deficiency,janitors_id:t.janitor,relapse_actions_id:t.action},s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},4077:(C,h,o)=>{o.d(h,{D:()=>A});var c=o(520),r=o(4004),_=o(9183),l=o(5e3),d=o(7429);const s={headers:new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let A=(()=>{class i{constructor(t,e){this.httpClient=t,this.enviroment=e,this.url=_.H}findAllPagination(t,e,n,a){return this.httpClient.post(this.enviroment.config.url+"storeSopLog",{skip:t,take:e,sortField:n,orSearchFields:a,select:[]}).pipe((0,r.U)(v=>v.data.sop_log))}create(t,e){return this.httpClient.post(this.enviroment.config.url+e,t,s).pipe((0,r.U)(n=>n))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN),l.LFG(d.y))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);