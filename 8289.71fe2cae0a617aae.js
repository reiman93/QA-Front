"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[8289],{8289:(Ft,x,s)=>{s.r(x),s.d(x,{ListModule:()=>It});var g=s(9808),v=s(1083),t=s(5e3),Z=s(7423),i=s(3075),N=s(4077),T=s(5801),C=s(3516),A=s(4673),q=s(651),c=s(7322),b=s(7531),_=s(6856),S=s(3271),k=s(4107),d=s(9386),f=s(4999),I=s(508);const F=["tabla"];function J(o,n){if(1&o&&(t.TgZ(0,"mat-option",42),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.name," ")}}function w(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredField)}}function O(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,w,2,1,"mat-error",17),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.typeControl.errors&&e.typeControl.errors.required)}}function L(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredField)}}function Q(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.maxField)}}function P(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,L,2,1,"mat-error",17),t.YNc(2,Q,2,1,"mat-error",17),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.statusControl.errors&&e.statusControl.errors.required),t.xp6(1),t.Q6J("ngIf",e.mainForm.controls.status.hasError("maxLength"))}}function Y(o,n){if(1&o&&(t.TgZ(0,"mat-option",42),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function M(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredField)}}function G(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,M,2,1,"mat-error",17),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.preventiveControl.errors&&e.preventiveControl.errors.required)}}function D(o,n){if(1&o&&(t.TgZ(0,"mat-option",42),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function E(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredField)}}function B(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,E,2,1,"mat-error",17),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.correctiveControl.errors&&e.correctiveControl.errors.required)}}function R(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredField)}}function H(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.notNumberField)}}function z(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,R,2,1,"mat-error",17),t.YNc(2,H,2,1,"mat-error",17),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.dayControl.errors&&e.dayControl.errors.required),t.xp6(1),t.Q6J("ngIf",e.dayControl.errors&&e.dayControl.errors.notNumber)}}function j(o,n){if(1&o&&(t.TgZ(0,"td",43),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.date," ")}}function $(o,n){if(1&o&&(t.TgZ(0,"td",43),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.periodo," ")}}function V(o,n){if(1&o&&(t.TgZ(0,"td",44),t._UZ(1,"img",45),t._uU(2),t.qZA()),2&o){const e=n.$implicit,r=t.oxw();t.xp6(1),t.s9C("src",r.fotoT[e.id],t.LSH),t.xp6(1),t.hij(" ",e.users.name," ")}}const W=function(){return[5,10,25,100]};let X=(()=>{class o{constructor(e,r,a,p,l,m){this.service=e,this.servicioAction=r,this.servicioPreventive=a,this.snakBarService=p,this.router=l,this.dataGridService=m,this.requiredField="Required field.",this.maxField="Max characters allowed.",this.notNumberField="Only allowed numbers.",this.fotoT=[],this.mainForm=new i.cw({time:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(50)],updateOn:"change"}),date:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(50)],updateOn:"change"}),day_hours:new i.NI(null,{validators:[this.isNumberValidation(),i.kI.required,i.kI.maxLength(5)],updateOn:"change"}),status:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(150)],updateOn:"change"}),type_inform:new i.NI(null,{validators:[i.kI.required],updateOn:"change"}),preventive_action:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(150)],updateOn:"change"}),corrective_action:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(150)],updateOn:"change"})})}ngOnInit(){this.nameQA=JSON.parse(sessionStorage.getItem("currentUser")).name,this.foto=JSON.parse(sessionStorage.getItem("currentUser")).foto,this.getAllAction(),this.getAllPreventive(),this.dataGridService.dataGrid.subscribe(e=>{e instanceof Array&&e.forEach((r,a)=>{this.fotoT[r.id]=r.users&&r.users.foto?r.users.foto:"assets/img/user.png"})})}get timeControl(){return this.mainForm.get("time")}get dateControl(){return this.mainForm.get("date")}get statusControl(){return this.mainForm.get("status")}get typeControl(){return this.mainForm.get("type_inform")}get dayControl(){return this.mainForm.get("day_hours")}get correctiveControl(){return this.mainForm.get("corrective_action")}get preventiveControl(){return this.mainForm.get("preventive_action")}goTo(e){this.router.navigate(["pages/nomenclators/"+e+"/create"])}getAllAction(){this.servicioAction.getAll("relapse_action").subscribe({next:e=>{this.dataAction=e.data},error:e=>{this.snakBarService.openSnackBar("Error getting data.","Close",{},"error")},complete:()=>{}})}getAllPreventive(){this.servicioPreventive.getAll("preventive_action").subscribe({next:e=>{this.dataPreventive=e.data},error:e=>{this.snakBarService.openSnackBar("Error getting data.","Close",{},"error")},complete:()=>{}})}submitForm(){var e,r,a,p,l,m,u;this.mainForm.valid&&this.service.create({date:null===(e=this.dateControl)||void 0===e?void 0:e.value,verifyed_by:JSON.parse(sessionStorage.getItem("currentUser")).username,time:null===(r=this.timeControl)||void 0===r?void 0:r.value,inform_type:null===(a=this.typeControl)||void 0===a?void 0:a.value,periodo:this.period,day_hours:null===(p=this.dayControl)||void 0===p?void 0:p.value,status:null===(l=this.statusControl)||void 0===l?void 0:l.value,corrective_action:null===(m=this.correctiveControl)||void 0===m?void 0:m.value,preventive_action:null===(u=this.preventiveControl)||void 0===u?void 0:u.value},"sop-log").subscribe({next:h=>{this.snakBarService.openSnackBar("Successfully created","Close"),this.tabla.reloadData()},error:h=>{this.snakBarService.openSnackBar("Error creating data.","Close",{},"error")},complete:()=>{}})}clearForm(){this.mainForm.reset()}isNumberValidation(){return function(e){return null!==e.value&&isNaN(+e.value)?{notNumber:!0}:null}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(N.D),t.Y36(T.b),t.Y36(C.v),t.Y36(A.A),t.Y36(v.F0),t.Y36(q.A))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sop-genirc-log"]],viewQuery:function(e,r){if(1&e&&t.Gf(F,5),2&e){let a;t.iGM(a=t.CRH())&&(r.tabla=a.first)}},inputs:{period:"period",type:"type"},decls:89,vars:23,consts:[[1,"card-title","d-flex","align-items-center"],[1,"customers-list-item","d-flex","align-items-center","p-2","cursor-pointer"],["width","80","height","80","alt","user avatar",1,"rounded-circle",3,"src"],[1,"ms-2"],[1,"mb-1","font-14","text-white"],[1,"font-size-sm"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-6"],[1,"form-control"],["matInput","","formControlName","date","placeholder","Select date....",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","time","placeholder","Select time....",3,"ngxTimepicker"],["timepicker",""],[1,"form-label"],["formControlName","type_inform","requeried",""],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["formControlName","status","matInput","","requeried","","maxlength","50"],[1,"col-10","containerBtn"],["formControlName","preventive_action","requeried",""],[1,"col-2","padding-btn",2,"display","inline-block"],["type","button",1,"btn","btn-light",3,"click"],[1,"fadeIn","animated","bx","bx-plus"],["formControlName","corrective_action","requeried",""],["matInput","","requeried","","formControlName","day_hours","maxlength","2"],["day",""],["align","end"],[1,"row","row-cols-auto","g-3"],[1,"col"],["type","button","mat-raised-button","","color","primary",3,"click"],["type","submit","mat-raised-button","","color","primary"],[3,"selectAvailable","serviceData","verticalLine"],["tabla",""],["title","Date","matColumnDef","date","type","string",3,"sort"],["mat-cell","","style","text-align: right",4,"matCellDef"],["title","Periodo","matColumnDef","periodo","type","string",3,"sort"],["title","QA last reviewer","matColumnDef","users","type","string",3,"sort"],["mat-cell","","style","text-align: left",4,"matCellDef"],[2,"display","none"],[3,"pageSizeOptions"],["mat-raised-button","","color","warn",3,"click"],[3,"value"],["mat-cell","",2,"text-align","right"],["mat-cell","",2,"text-align","left"],["width","40","height","40","alt","user avatar",1,"rounded-circle","mySpacer",3,"src"]],template:function(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div"),t._UZ(3,"img",2),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"h5",4),t._uU(6,"Audited by:"),t.qZA(),t.TgZ(7,"p",5),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(9,"hr"),t.TgZ(10,"form",6),t.NdJ("ngSubmit",function(){return r.submitForm()}),t.TgZ(11,"div",7),t.TgZ(12,"mat-form-field",8),t._UZ(13,"input",9),t._UZ(14,"mat-datepicker-toggle",10),t._UZ(15,"mat-datepicker",null,11),t.qZA(),t.qZA(),t.TgZ(17,"div",7),t.TgZ(18,"mat-form-field",8),t._UZ(19,"input",12),t._UZ(20,"ngx-material-timepicker",null,13),t.qZA(),t.qZA(),t.TgZ(22,"div",7),t.TgZ(23,"mat-form-field",8),t.TgZ(24,"mat-label",14),t._uU(25,"Type inform:"),t.qZA(),t.TgZ(26,"mat-select",15),t.YNc(27,J,2,2,"mat-option",16),t.qZA(),t.YNc(28,O,2,1,"mat-error",17),t.qZA(),t.qZA(),t.TgZ(29,"div",7),t.TgZ(30,"mat-form-field",8),t.TgZ(31,"mat-label",14),t._uU(32,"Status:"),t.qZA(),t._UZ(33,"input",18),t.YNc(34,P,3,2,"mat-error",17),t.qZA(),t.qZA(),t.TgZ(35,"div",7),t.TgZ(36,"div",19),t.TgZ(37,"mat-form-field",8),t.TgZ(38,"mat-label",14),t._uU(39,"Preventive actions:"),t.qZA(),t.TgZ(40,"mat-select",20),t.YNc(41,Y,2,2,"mat-option",16),t.qZA(),t.YNc(42,G,2,1,"mat-error",17),t.qZA(),t.qZA(),t.TgZ(43,"div",21),t.TgZ(44,"button",22),t.NdJ("click",function(l){return l.stopPropagation(),r.goTo("preventive-actions")}),t._UZ(45,"i",23),t.qZA(),t.qZA(),t.qZA(),t.TgZ(46,"div",7),t.TgZ(47,"div",19),t.TgZ(48,"mat-form-field",8),t.TgZ(49,"mat-label",14),t._uU(50,"Corrective actions:"),t.qZA(),t.TgZ(51,"mat-select",24),t.YNc(52,D,2,2,"mat-option",16),t.qZA(),t.YNc(53,B,2,1,"mat-error",17),t.qZA(),t.qZA(),t.TgZ(54,"div",21),t.TgZ(55,"button",22),t.NdJ("click",function(l){return l.stopPropagation(),r.goTo("actions")}),t._UZ(56,"i",23),t.qZA(),t.qZA(),t.qZA(),t.TgZ(57,"div",7),t.TgZ(58,"mat-form-field",8),t.TgZ(59,"mat-label",14),t._uU(60,"No. day hours:"),t.qZA(),t._UZ(61,"input",25,26),t.TgZ(63,"mat-hint",27),t._uU(64),t.qZA(),t.YNc(65,z,3,2,"mat-error",17),t.qZA(),t.qZA(),t.TgZ(66,"div",28),t.TgZ(67,"div",29),t.TgZ(68,"button",30),t.NdJ("click",function(l){return l.stopPropagation(),r.clearForm()}),t._uU(69," Cancel "),t.qZA(),t.qZA(),t.TgZ(70,"div",29),t.TgZ(71,"button",31),t._uU(72," Add "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(73,"hr"),t.TgZ(74,"app-mat-data-table",32,33),t.TgZ(76,"app-mat-column-table",34),t.YNc(77,j,2,1,"td",35),t.qZA(),t.TgZ(78,"app-mat-column-table",36),t.YNc(79,$,2,1,"td",35),t.qZA(),t.TgZ(80,"app-mat-column-table",37),t.YNc(81,V,3,2,"td",38),t.qZA(),t._UZ(82,"div",39),t._UZ(83,"app-mat-paginator-data-table",40),t.TgZ(84,"app-mat-error-data-table"),t._uU(85," There are problems to load data. "),t._UZ(86,"br"),t.TgZ(87,"button",41),t.NdJ("click",function(){return t.CHM(a),t.MAs(75).reloadData()}),t._uU(88," Reload "),t.qZA(),t.qZA(),t.qZA()}if(2&e){const a=t.MAs(16),p=t.MAs(21),l=t.MAs(62);t.xp6(3),t.s9C("src",r.foto,t.LSH),t.xp6(5),t.Oqu(r.nameQA),t.xp6(2),t.Q6J("formGroup",r.mainForm),t.xp6(3),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(5),t.Q6J("ngxTimepicker",p),t.xp6(8),t.Q6J("ngForOf",r.type),t.xp6(1),t.Q6J("ngIf",r.typeControl&&r.typeControl.invalid),t.xp6(6),t.Q6J("ngIf",r.statusControl&&r.statusControl.invalid),t.xp6(7),t.Q6J("ngForOf",r.dataPreventive),t.xp6(1),t.Q6J("ngIf",r.preventiveControl&&r.preventiveControl.invalid),t.xp6(10),t.Q6J("ngForOf",r.dataAction),t.xp6(1),t.Q6J("ngIf",r.correctiveControl&&r.correctiveControl.invalid),t.xp6(11),t.hij("",l.value.length," / 2"),t.xp6(1),t.Q6J("ngIf",r.dayControl&&r.dayControl.invalid),t.xp6(9),t.Q6J("selectAvailable",!1)("serviceData",r.service)("verticalLine",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(3),t.Q6J("pageSizeOptions",t.DdM(22,W))}},directives:[i._Y,i.JL,i.sg,c.KE,b.Nt,i.Fj,_.hl,i.JJ,i.u,_.nW,c.R9,_.Mq,S.I2,S.ro,c.hX,k.gD,g.sg,g.O5,i.nD,c.bx,Z.lW,d.Zc,d.PT,f.w1,f.Dz,d.y0,d.DV,I.ey,c.TO,f.ev],styles:[".margin-toogle[_ngcontent-%COMP%]{margin-left:2.5px;margin-right:5px}.label-toogle[_ngcontent-%COMP%]{vertical-align:top}.containerToggle[_ngcontent-%COMP%]{display:inline-block;width:130px;vertical-align:top}  .mat-form-field .mat-form-field-underline{position:absolute;width:0%!important;pointer-events:none;transform:scaleY(1.0001)}[_nghost-%COMP%]     .mat-select-value{color:#fff!important}.containerBtn[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.padding-btn[_ngcontent-%COMP%]{padding:15px}"]}),o})();var y=s(520),U=s(4004),K=s(9183),tt=s(7429);const et={headers:new y.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let ot=(()=>{class o{constructor(e,r){this.httpClient=e,this.enviroment=r,this.url=K.H}findAllPagination(e,r,a,p){return this.httpClient.post(this.enviroment.config.url+"storeSopLog",{skip:e,take:r,sortField:a,orSearchFields:p,select:[]}).pipe((0,U.U)(m=>m.data.sop_log))}create(e,r){return this.httpClient.post(this.enviroment.config.url+r,e,et).pipe((0,U.U)(a=>a))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(y.eN),t.LFG(tt.y))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var rt=s(2368);const nt=["tabla"];function it(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredField)}}function at(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.maxField)}}function lt(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,it,2,1,"mat-error",14),t.YNc(2,at,2,1,"mat-error",14),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.dispositionControl.errors&&e.dispositionControl.errors.required),t.xp6(1),t.Q6J("ngIf",e.mainForm.controls.disposition.hasError("maxLength"))}}function st(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredField)}}function pt(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.maxField)}}function mt(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,st,2,1,"mat-error",14),t.YNc(2,pt,2,1,"mat-error",14),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.rootControl.errors&&e.rootControl.errors.required),t.xp6(1),t.Q6J("ngIf",e.mainForm.controls.root.hasError("maxLength"))}}function ct(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredField)}}function dt(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.maxField)}}function ut(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,ct,2,1,"mat-error",14),t.YNc(2,dt,2,1,"mat-error",14),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.furtherControl.errors&&e.furtherControl.errors.required),t.xp6(1),t.Q6J("ngIf",e.mainForm.controls.further.hasError("maxLength"))}}function gt(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredField)}}function _t(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.maxField)}}function ft(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,gt,2,1,"mat-error",14),t.YNc(2,_t,2,1,"mat-error",14),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.prodControl.errors&&e.prodControl.errors.required),t.xp6(1),t.Q6J("ngIf",e.mainForm.controls.prod.hasError("maxLength"))}}function vt(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredField)}}function Zt(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.maxField)}}function ht(o,n){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,vt,2,1,"mat-error",14),t.YNc(2,Zt,2,1,"mat-error",14),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.defectControl.errors&&e.defectControl.errors.required),t.xp6(1),t.Q6J("ngIf",e.mainForm.controls.defect.hasError("maxLength"))}}function xt(o,n){if(1&o&&(t.TgZ(0,"td",38),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.date," ")}}function Tt(o,n){if(1&o&&(t.TgZ(0,"td",38),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.hij(" ",e.periodo," ")}}function Ct(o,n){if(1&o&&(t.TgZ(0,"td",39),t._UZ(1,"img",40),t._uU(2),t.qZA()),2&o){const e=n.$implicit,r=t.oxw();t.xp6(1),t.s9C("src",r.fotoT[e.id],t.LSH),t.xp6(1),t.hij(" ",e.users.name," ")}}const At=function(){return[5,10,25,100]};let qt=(()=>{class o{constructor(e,r,a,p,l){this.service=e,this.servicioAction=r,this.servicioPreventive=a,this.snakBarService=p,this.dataGridService=l,this.requiredField="Required field.",this.maxField="Max characters allowed.",this.fotoT=[],this.mainForm=new i.cw({date:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(50)],updateOn:"change"}),defect:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(150)],updateOn:"change"}),disposition:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(150)],updateOn:"change"}),restoration:new i.NI(!1,{validators:[],updateOn:"change"}),root:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(150)],updateOn:"change"}),further:new i.NI(null,{validators:[i.kI.required],updateOn:"change"}),prod:new i.NI(null,{validators:[i.kI.required],updateOn:"change"})})}ngOnInit(){this.nameQA=JSON.parse(sessionStorage.getItem("currentUser")).name,this.foto=JSON.parse(sessionStorage.getItem("currentUser")).foto,this.getAllAction(),this.getAllPreventive(),this.dataGridService.dataGrid.subscribe(e=>{e instanceof Array&&e.forEach((r,a)=>{this.fotoT[r.id]=r.users&&r.users.foto?r.users.foto:"assets/img/user.png"})})}get dateControl(){return this.mainForm.get("date")}get defectControl(){return this.mainForm.get("defect")}get dispositionControl(){return this.mainForm.get("disposition")}get restorationControl(){return this.mainForm.get("restoration")}get rootControl(){return this.mainForm.get("root")}get furtherControl(){return this.mainForm.get("further")}get prodControl(){return this.mainForm.get("prod")}getAllAction(){this.servicioAction.getAll("relapse_action").subscribe({next:e=>{this.dataAction=e.data},error:e=>{this.snakBarService.openSnackBar("Error creating data.","Close",{},"error")},complete:()=>{}})}getAllPreventive(){this.servicioPreventive.getAll("preventive_action").subscribe({next:e=>{this.dataPreventive=e.data},error:e=>{this.snakBarService.openSnackBar("Error creating data.","Close",{},"error")},complete:()=>{}})}submitForm(){var e,r,a,p,l,m,u;this.mainForm.valid&&this.service.create({date:null===(e=this.dateControl)||void 0===e?void 0:e.value,verifyed_by:JSON.parse(sessionStorage.getItem("currentUser")).username,decfects_description:null===(r=this.defectControl)||void 0===r?void 0:r.value,disposition_of_product:null===(a=this.dispositionControl)||void 0===a?void 0:a.value,restoration_sanitary_condition:null===(p=this.restorationControl)||void 0===p?void 0:p.value,root_cause:null===(l=this.rootControl)||void 0===l?void 0:l.value,Further_planned_actions:null===(m=this.furtherControl)||void 0===m?void 0:m.value,prod_usage_kill_box:null===(u=this.prodControl)||void 0===u?void 0:u.value},"sop-suplements").subscribe({next:h=>{this.snakBarService.openSnackBar("Successfully created","Close"),this.tabla.reloadData()},error:h=>{this.snakBarService.openSnackBar("Error creating data.","Close",{},"error")},complete:()=>{}})}clearForm(){this.mainForm.reset()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(ot),t.Y36(T.b),t.Y36(C.v),t.Y36(A.A),t.Y36(q.A))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sop-suplement"]],viewQuery:function(e,r){if(1&e&&t.Gf(nt,5),2&e){let a;t.iGM(a=t.CRH())&&(r.tabla=a.first)}},inputs:{period:"period",type:"type"},decls:80,vars:18,consts:[[1,"card-title","d-flex","align-items-center"],[1,"customers-list-item","d-flex","align-items-center","p-2","cursor-pointer"],["width","80","height","80","alt","user avatar",1,"rounded-circle",3,"src"],[1,"ms-2"],[1,"mb-1","font-14","text-white"],[1,"font-size-sm"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-6"],[1,"form-control"],["matInput","","formControlName","date","placeholder","Select date....",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],[1,"form-label"],["formControlName","disposition","requeried","","matInput","","maxlength","50"],[4,"ngIf"],["formControlName","root","requeried","","matInput","","maxlength","50"],["formControlName","further","requeried","","matInput","","maxlength","50"],["formControlName","prod","requeried","","matInput","","maxlength","50"],[1,"col-12"],["matInput","","requeried","","formControlName","defect","maxlength","150","rows","4"],[1,"col-6","containerToggle"],[1,"label-toogle"],[1,"col-6",2,"display","inline-block"],["requeried","","formControlName","restoration","color","primary",1,"margin-toogle",3,"click"],[1,"row","row-cols-auto","g-3"],[1,"col"],["type","button","mat-raised-button","","color","primary",3,"click"],["type","submit","mat-raised-button","","color","primary"],[3,"selectAvailable","serviceData","verticalLine"],["tabla",""],["title","Date","matColumnDef","date","type","string",3,"sort"],["mat-cell","","style","text-align: right",4,"matCellDef"],["title","Periodo","matColumnDef","periodo","type","string",3,"sort"],["title","QA last reviewer","matColumnDef","users","type","string",3,"sort"],["mat-cell","","style","text-align: left",4,"matCellDef"],[2,"display","none"],[3,"pageSizeOptions"],["mat-raised-button","","color","warn",3,"click"],["mat-cell","",2,"text-align","right"],["mat-cell","",2,"text-align","left"],["width","40","height","40","alt","user avatar",1,"rounded-circle","mySpacer",3,"src"]],template:function(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div"),t._UZ(3,"img",2),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"h5",4),t._uU(6,"Audited by:"),t.qZA(),t.TgZ(7,"p",5),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(9,"hr"),t.TgZ(10,"form",6),t.NdJ("ngSubmit",function(){return r.submitForm()}),t.TgZ(11,"div",7),t.TgZ(12,"mat-form-field",8),t._UZ(13,"input",9),t._UZ(14,"mat-datepicker-toggle",10),t._UZ(15,"mat-datepicker",null,11),t.qZA(),t.qZA(),t.TgZ(17,"div",7),t.TgZ(18,"mat-form-field",8),t.TgZ(19,"mat-label",12),t._uU(20,"Disposition of product:"),t.qZA(),t._UZ(21,"input",13),t.YNc(22,lt,3,2,"mat-error",14),t.qZA(),t.qZA(),t.TgZ(23,"div",7),t.TgZ(24,"mat-form-field",8),t.TgZ(25,"mat-label",12),t._uU(26,"Root cause:"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,mt,3,2,"mat-error",14),t.qZA(),t.qZA(),t.TgZ(29,"div",7),t.TgZ(30,"mat-form-field",8),t.TgZ(31,"mat-label",12),t._uU(32,"Further planned actions:"),t.qZA(),t._UZ(33,"input",16),t.YNc(34,ut,3,2,"mat-error",14),t.qZA(),t.qZA(),t.TgZ(35,"div",7),t.TgZ(36,"mat-form-field",8),t.TgZ(37,"mat-label",12),t._uU(38,"Prod usage kill box:"),t.qZA(),t._UZ(39,"input",17),t.YNc(40,ft,3,2,"mat-error",14),t.qZA(),t.qZA(),t.TgZ(41,"div",18),t.TgZ(42,"mat-form-field",8),t.TgZ(43,"mat-label",12),t._uU(44,"Decfects description:"),t.qZA(),t._UZ(45,"textarea",19),t.YNc(46,ht,3,2,"mat-error",14),t.qZA(),t.qZA(),t.TgZ(47,"div",18),t.TgZ(48,"div",7),t.TgZ(49,"div",20),t.TgZ(50,"mat-label",21),t._uU(51,"Restoration sanitary condition:"),t.qZA(),t.qZA(),t.TgZ(52,"div",22),t.TgZ(53,"mat-label",21),t._uU(54,"No"),t.qZA(),t.TgZ(55,"mat-slide-toggle",23),t.NdJ("click",function(l){return l.stopPropagation()}),t._uU(56," Yes "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(57,"div",24),t.TgZ(58,"div",25),t.TgZ(59,"button",26),t.NdJ("click",function(l){return l.stopPropagation(),r.clearForm()}),t._uU(60," Cancel "),t.qZA(),t.qZA(),t.TgZ(61,"div",25),t.TgZ(62,"button",27),t._uU(63," Add "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(64,"hr"),t.TgZ(65,"app-mat-data-table",28,29),t.TgZ(67,"app-mat-column-table",30),t.YNc(68,xt,2,1,"td",31),t.qZA(),t.TgZ(69,"app-mat-column-table",32),t.YNc(70,Tt,2,1,"td",31),t.qZA(),t.TgZ(71,"app-mat-column-table",33),t.YNc(72,Ct,3,2,"td",34),t.qZA(),t._UZ(73,"div",35),t._UZ(74,"app-mat-paginator-data-table",36),t.TgZ(75,"app-mat-error-data-table"),t._uU(76," There are problems to load data. "),t._UZ(77,"br"),t.TgZ(78,"button",37),t.NdJ("click",function(){return t.CHM(a),t.MAs(66).reloadData()}),t._uU(79," Reload "),t.qZA(),t.qZA(),t.qZA()}if(2&e){const a=t.MAs(16);t.xp6(3),t.s9C("src",r.foto,t.LSH),t.xp6(5),t.Oqu(r.nameQA),t.xp6(2),t.Q6J("formGroup",r.mainForm),t.xp6(3),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(8),t.Q6J("ngIf",r.dispositionControl&&r.dispositionControl.invalid),t.xp6(6),t.Q6J("ngIf",r.rootControl&&r.rootControl.invalid),t.xp6(6),t.Q6J("ngIf",r.furtherControl&&r.furtherControl.invalid),t.xp6(6),t.Q6J("ngIf",r.prodControl&&r.prodControl.invalid),t.xp6(6),t.Q6J("ngIf",r.defectControl&&r.defectControl.invalid),t.xp6(19),t.Q6J("selectAvailable",!1)("serviceData",r.service)("verticalLine",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(3),t.Q6J("pageSizeOptions",t.DdM(17,At))}},directives:[i._Y,i.JL,i.sg,c.KE,b.Nt,i.Fj,_.hl,i.JJ,i.u,_.nW,c.R9,_.Mq,c.hX,i.nD,g.O5,rt.Rr,Z.lW,d.Zc,d.PT,f.w1,f.Dz,d.y0,d.DV,c.TO,f.ev],styles:[".margin-toogle[_ngcontent-%COMP%]{margin-left:2.5px;margin-right:5px}.label-toogle[_ngcontent-%COMP%]{vertical-align:top}.containerToggle[_ngcontent-%COMP%]{display:inline-block;width:130px;vertical-align:top}  .mat-form-field .mat-form-field-underline{position:absolute;width:0%!important;pointer-events:none;transform:scaleY(1.0001)}[_nghost-%COMP%]     .mat-select-value{color:#fff!important}"]}),o})();const bt=["myIdentifier"];function St(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"li",23),t.TgZ(1,"a",24),t.NdJ("click",function(){const p=t.CHM(e).$implicit;return t.oxw().clickActive(p.index)}),t.TgZ(2,"div",25),t.TgZ(3,"div",26),t._UZ(4,"i",27),t.qZA(),t.TgZ(5,"div",28),t._uU(6),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=n.$implicit,r=t.oxw();t.xp6(1),t.Q6J("href",e.href,t.LSH)("ngClass",r.active[e.index]?"active":""),t.xp6(5),t.Oqu(e.label)}}const yt=[{path:"",component:(()=>{class o{constructor(){this.requiredField="Campo requerido",this.active=[],this.items=6,this.period1=1,this.period2=2,this.period3=3,this.period4=4,this.period5=5,this.type1=[{name:"Product handling",value:"Product handling"},{name:"Employee dress",value:"Employee dress"},{name:"Condensation",value:"Condensation"}],this.type2=[{name:"Hide opening",value:"Hide opening"},{name:"Evisceration",value:"Evisceration"},{name:"Buckets and Tubs",value:"Buckets and Tubs"}],this.type3=[{name:"Sterilizar temperatura",value:"Sterilizar temperatura"},{name:"Packanging material",value:"Packanging material"},{name:"Pest and rodent",value:"Pest and rodent"}],this.type4=[{name:"Equipment Surfaces Prior",value:"Equipment Surfaces Prior"},{name:"Esposed Variety Meauts at Breaks",value:"Esposed Variety Meauts at Breaks"},{name:"Lunch Break Sanitation",value:"Lunch Break Sanitation"}],this.type5=[{name:"Specific Risk Material Handling Equipment",value:"Specific Risk Material Handling Equipment"},{name:"Specific Risk Material Hundling",value:"Specific Risk Material Hundling"},{name:"Boot Foamer Evosceration",value:"Boot Foamer Evosceration"}],this.clickActive=e=>{for(let r=0;r<this.active.length;r++)this.active[r]=!1;this.active[e]=!0},this.prevTab=()=>{this.nextTabs.push(this.li.pop()),this.li.unshift(this.prevTabs.pop())},this.nexTab=()=>{this.prevTabs.push(this.li.shift()),this.li.push(this.nextTabs.shift())}}ngOnInit(){this.li=[{index:0,href:"#sop-log-1",label:"sop log #1"},{index:1,href:"#sop-log-2",label:"sop log #2"},{index:2,href:"#sop-log-3",label:"sop log #3"},{index:3,href:"#sop-log-4",label:"sop log #4"}],this.nextTabs=[{index:5,href:"#sop-log-5",label:"sop log #5"},{index:6,href:"#sop-log-6",label:"Sop log sheet suplemental"}],this.prevTabs=[],this.clickActive(0)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-equipment"]],viewQuery:function(e,r){if(1&e&&t.Gf(bt,5),2&e){let a;t.iGM(a=t.CRH())&&(r.myIdentifier=a.first)}},decls:27,vars:8,consts:[[1,"row"],["myIdentifier",""],[1,"col-12","mx-auto"],[1,"mb-0","text-uppercase"],[1,"card"],[1,"card-body"],["role","tablist",1,"nav","nav-tabs","nav-fill"],["mat-raised-button","",1,"mySpacer",3,"disabled","click"],[1,"fadeIn","animated","bx","bx-left-arrow-alt"],["class","nav-item","role","presentation",4,"ngFor","ngForOf"],[1,"fadeIn","animated","bx","bx-right-arrow-alt"],[1,"tab-content","py-3"],["id","sop-log-1","role","tabpanel",1,"tab-pane","fade","show","active"],["period","1",3,"type"],["id","sop-log-2","role","tabpanel",1,"tab-pane","fade"],["period","2",3,"type"],["id","sop-log-3","role","tabpanel",1,"tab-pane","fade"],["period","3",3,"type"],["id","sop-log-4","role","tabpanel",1,"tab-pane","fade"],["period","4",3,"type"],["id","sop-log-5","role","tabpanel",1,"tab-pane","fade"],["period","5",3,"type"],["id","sop-log-6","role","tabpanel",1,"tab-pane","fade"],["role","presentation",1,"nav-item"],["data-bs-toggle","tab","role","tab","aria-selected","true",1,"nav-link",3,"href","ngClass","click"],[1,"d-flex","align-items-center"],[1,"tab-icon"],[1,"bx","bx-home","font-18","me-1"],[1,"tab-title","text-uppercase"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0,1),t.TgZ(2,"div",2),t.TgZ(3,"h6",3),t._uU(4,"sop logs"),t.qZA(),t._UZ(5,"hr"),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"ul",6),t.TgZ(9,"button",7),t.NdJ("click",function(){return r.prevTab()}),t._UZ(10,"i",8),t.qZA(),t.YNc(11,St,7,3,"li",9),t.TgZ(12,"button",7),t.NdJ("click",function(){return r.nexTab()}),t._UZ(13,"i",10),t.qZA(),t.qZA(),t.TgZ(14,"div",11),t.TgZ(15,"div",12),t._UZ(16,"app-sop-genirc-log",13),t.qZA(),t.TgZ(17,"div",14),t._UZ(18,"app-sop-genirc-log",15),t.qZA(),t.TgZ(19,"div",16),t._UZ(20,"app-sop-genirc-log",17),t.qZA(),t.TgZ(21,"div",18),t._UZ(22,"app-sop-genirc-log",19),t.qZA(),t.TgZ(23,"div",20),t._UZ(24,"app-sop-genirc-log",21),t.qZA(),t.TgZ(25,"div",22),t._UZ(26,"app-sop-suplement"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Q6J("disabled",0==r.prevTabs.length),t.xp6(2),t.Q6J("ngForOf",r.li),t.xp6(1),t.Q6J("disabled",0==r.nextTabs.length),t.xp6(4),t.Q6J("type",r.type1),t.xp6(2),t.Q6J("type",r.type2),t.xp6(2),t.Q6J("type",r.type3),t.xp6(2),t.Q6J("type",r.type4),t.xp6(2),t.Q6J("type",r.type5))},directives:[Z.lW,g.sg,X,qt,g.mk],styles:["table[_ngcontent-%COMP%]{margin:1rem auto;width:100%;overflow-x:auto;overflow-y:hidden;min-width:500px;box-shadow:-1px 3px 66px #000000bf}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;margin:1rem auto;max-width:100%;padding:1rem}.header-text[_ngcontent-%COMP%]{font-size:24px;font-weight:500;color:#000000de;font-family:Roboto,Helvetica Neue,sans-serif}th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%]{text-align:center;max-width:300px}.mySpacer[_ngcontent-%COMP%]{margin:.5rem!important}.left-space[_ngcontent-%COMP%]{margin-left:10px}.right-space[_ngcontent-%COMP%]{margin-right:10px}mat-card-title[_ngcontent-%COMP%]{border-bottom:1px solid black;line-height:36px}app-mat-data-table[_ngcontent-%COMP%]{margin-top:10px}  mat-dialog-container{background:#222b45!important}"]}),o})()}];let Ut=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[v.Bz.forChild(yt)],v.Bz]}),o})();var Nt=s(9151),kt=s(6596);let It=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.ez,Ut,Nt.q,kt.V]]}),o})()}}]);