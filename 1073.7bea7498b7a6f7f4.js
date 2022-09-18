"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[1073],{1073:(j,g,i)=>{i.r(g),i.d(g,{EditModule:()=>B});var u=i(9808),c=i(1083),n=i(3075),t=i(5e3),f=i(3737),v=i(835),Z=i(2836),h=i(4673),d=i(7322),_=i(7531),x=i(7423);function C(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.Oqu(r.requiredField)}}function T(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.hij(" ",r.maxField," ")}}function q(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,C,2,1,"mat-error",11),t.YNc(2,T,2,1,"mat-error",11),t.qZA()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.nameControl.errors&&r.nameControl.errors.required),t.xp6(1),t.Q6J("ngIf",r.videoForm.controls.name.hasError("maxLength"))}}function A(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.Oqu(r.requiredField)}}function y(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.hij(" ",r.maxField," ")}}function N(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,A,2,1,"mat-error",11),t.YNc(2,y,2,1,"mat-error",11),t.qZA()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.lastnameControl.errors&&r.lastnameControl.errors.required),t.xp6(1),t.Q6J("ngIf",r.videoForm.controls.lastname.hasError("maxLength"))}}function b(o,a){if(1&o&&(t.TgZ(0,"option",22),t._uU(1),t.qZA()),2&o){const r=a.$implicit;t.Q6J("value",r.id),t.xp6(1),t.hij(" ",r.name," ")}}function E(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.Oqu(r.requiredField)}}function I(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,E,2,1,"mat-error",11),t.qZA()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.turnControl.errors&&r.turnControl.errors.required)}}function F(o,a){if(1&o&&(t.TgZ(0,"option",22),t._uU(1),t.qZA()),2&o){const r=a.$implicit;t.Q6J("value",r.id),t.xp6(1),t.hij(" ",r.name," ")}}function J(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.Oqu(r.requiredField)}}function Y(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,J,2,1,"mat-error",11),t.qZA()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.companyControl.errors&&r.companyControl.errors.required)}}function w(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.Oqu(r.requiredField)}}function U(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.Oqu(r.onlyNumbres)}}function S(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,w,2,1,"mat-error",11),t.YNc(2,U,2,1,"mat-error",11),t.qZA()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.phoneControl.errors&&r.phoneControl.errors.required),t.xp6(1),t.Q6J("ngIf",r.phoneControl.errors&&r.phoneControl.errors.notNumber)}}const Q=[{path:"",component:(()=>{class o{constructor(r,e,m,l,s,p){this.location=r,this.servicio=e,this.turnService=m,this.caompanyService=l,this.route=s,this.snakBarService=p,this.requiredField="Required field.",this.maxField="Max characters allowed.",this.onlyNumbres="Only allowed numbers",this.videoForm=new n.cw({name:new n.NI(null,{validators:[n.kI.required,n.kI.maxLength(50)],updateOn:"change"}),lastname:new n.NI(null,{validators:[n.kI.required],updateOn:"change"}),phone:new n.NI(null,{validators:[n.kI.required,this.isNumberValidation],updateOn:"change"}),turn:new n.NI(null,{validators:[n.kI.required,n.kI.maxLength(150)],updateOn:"change"}),company:new n.NI(null,{validators:[n.kI.required,n.kI.maxLength(150)],updateOn:"change"})})}ngOnInit(){this.findById(),this.getAllCompany(),this.getAllTurn()}getAllTurn(){this.turnService.getAll("turn_type").subscribe({next:r=>{console.warn("aaaha",r),this.turnsData=r.data},error:r=>{console.log("error",r),this.snakBarService.openSnackBar("Error al obtener los datos de turno.","cerrar",{},"error")},complete:()=>console.info("complete")})}getAllCompany(){this.caompanyService.getAll("company").subscribe({next:r=>{console.warn("aaaha",r),this.companyData=r.data},error:r=>{console.log("error",r),this.snakBarService.openSnackBar("Error al obtener los datos de company.","cerrar",{},"error")},complete:()=>console.info("complete")})}findById(){this.id=this.route.snapshot.paramMap.get("id"),this.servicio.get(this.id,"janitor").subscribe(r=>{let e=r.data;this.videoForm.patchValue({name:e.name,lastname:e.lastname,phone:e.phone})})}get nameControl(){var r;return null===(r=this.videoForm)||void 0===r?void 0:r.get("name")}get lastnameControl(){return this.videoForm.get("lastname")}get phoneControl(){return this.videoForm.get("phone")}get turnControl(){return this.videoForm.get("turn")}get companyControl(){return this.videoForm.get("company")}returnToList(){this.location.back()}submitForm(){var r,e,m,l,s;this.videoForm.valid&&this.servicio.update({id:parseInt(this.id),name:null===(r=this.nameControl)||void 0===r?void 0:r.value,lastname:null===(e=this.lastnameControl)||void 0===e?void 0:e.value,phone:null===(m=this.lastnameControl)||void 0===m?void 0:m.value,company:parseInt(null===(l=this.companyControl)||void 0===l?void 0:l.value),turn:parseInt(null===(s=this.turnControl)||void 0===s?void 0:s.value)},"janitor").subscribe({next:p=>{this.snakBarService.openSnackBar("Successfully edited","Close"),this.returnToList()},error:p=>{this.snakBarService.openSnackBar("Error editing data.","cerrar",{},"error")},complete:()=>console.info("complete")})}isNumberValidation(){return function(r){return null!==r.value&&isNaN(+r.value)?{notNumber:!0}:null}}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(u.Ye),t.Y36(f.u),t.Y36(v.L),t.Y36(Z.J),t.Y36(c.gz),t.Y36(h.A))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit"]],decls:49,vars:8,consts:[[1,"row"],[1,"col-xl-7","mx-auto"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"card-title","d-flex","align-items-center"],[1,"bx","bxs-user","me-1","font-22","text-white"],[1,"mb-0","text-white"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"form-control"],[1,"requeried","form-label"],["formControlName","name","matInput","","maxlength","10"],[4,"ngIf"],[1,"col-12"],["formControlName","lastname","matInput","","maxlength","10"],["matNativeControl","","formControlName","turn"],[3,"value",4,"ngFor","ngForOf"],["matNativeControl","","formControlName","company"],["formControlName","phone","matInput","","maxlength","50"],[1,"row","row-cols-auto","g-3"],[1,"col"],["type","button","mat-raised-button","","color","primary",3,"click"],["type","submit","mat-raised-button","","color","primary"],[3,"value"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div"),t._UZ(6,"i",5),t.qZA(),t.TgZ(7,"h5",6),t._uU(8,"Edit janitor"),t.qZA(),t.qZA(),t._UZ(9,"hr"),t.TgZ(10,"form",7),t.NdJ("ngSubmit",function(){return e.submitForm()}),t.TgZ(11,"mat-form-field",8),t.TgZ(12,"mat-label",9),t._uU(13,"Name:"),t.qZA(),t._UZ(14,"input",10),t.YNc(15,q,3,2,"mat-error",11),t.qZA(),t.TgZ(16,"div",12),t.TgZ(17,"mat-form-field",8),t.TgZ(18,"mat-label",9),t._uU(19,"Lastname:"),t.qZA(),t._UZ(20,"input",13),t.YNc(21,N,3,2,"mat-error",11),t.qZA(),t.qZA(),t.TgZ(22,"div",12),t.TgZ(23,"mat-form-field",8),t.TgZ(24,"mat-label",9),t._uU(25,"Turn type:"),t.qZA(),t.TgZ(26,"select",14),t.YNc(27,b,2,2,"option",15),t.qZA(),t.YNc(28,I,2,1,"mat-error",11),t.qZA(),t.qZA(),t.TgZ(29,"div",12),t.TgZ(30,"mat-form-field",8),t.TgZ(31,"mat-label",9),t._uU(32,"Cleaning company:"),t.qZA(),t.TgZ(33,"select",16),t.YNc(34,F,2,2,"option",15),t.qZA(),t.YNc(35,Y,2,1,"mat-error",11),t.qZA(),t.qZA(),t.TgZ(36,"div",12),t.TgZ(37,"mat-form-field",8),t.TgZ(38,"mat-label",9),t._uU(39,"Phone number:"),t.qZA(),t._UZ(40,"input",17),t.YNc(41,S,3,2,"mat-error",11),t.qZA(),t.qZA(),t.TgZ(42,"div",18),t.TgZ(43,"div",19),t.TgZ(44,"button",20),t.NdJ("click",function(l){return l.stopPropagation(),e.returnToList()}),t._uU(45," Cancel "),t.qZA(),t.qZA(),t.TgZ(46,"div",19),t.TgZ(47,"button",21),t._uU(48," Accept "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(10),t.Q6J("formGroup",e.videoForm),t.xp6(5),t.Q6J("ngIf",e.nameControl&&e.nameControl.invalid),t.xp6(6),t.Q6J("ngIf",e.lastnameControl&&e.lastnameControl.invalid),t.xp6(6),t.Q6J("ngForOf",e.turnsData),t.xp6(1),t.Q6J("ngIf",e.turnControl&&e.turnControl.invalid),t.xp6(6),t.Q6J("ngForOf",e.companyData),t.xp6(1),t.Q6J("ngIf",e.companyControl&&e.companyControl.invalid),t.xp6(6),t.Q6J("ngIf",e.phoneControl&&e.phoneControl.invalid))},directives:[n._Y,n.JL,n.sg,d.KE,d.hX,n.Fj,_.Nt,n.JJ,n.u,n.nD,u.O5,n.EJ,u.sg,x.lW,d.TO,n.YN,n.Kr],styles:["[_nghost-%COMP%]     .mat-select-value{color:#fff!important}"]}),o})()}];let O=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(Q)],c.Bz]}),o})();var k=i(9151);let B=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,O,k.q]]}),o})()}}]);