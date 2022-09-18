"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[6633],{6633:(F,u,n)=>{n.r(u),n.d(u,{EditModule:()=>b});var m=n(9808),s=n(1083),i=n(3075),t=n(5e3),p=n(4366),f=n(4673),l=n(7322),g=n(7531),v=n(7423);function Z(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const o=t.oxw(2);t.xp6(1),t.hij("",o.requiredField," ")}}function h(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const o=t.oxw(2);t.xp6(1),t.hij("",o.maxField," ")}}function x(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t.YNc(1,Z,2,1,"mat-error",11),t.YNc(2,h,2,1,"mat-error",11),t.qZA()),2&r){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.nameControl.errors&&o.nameControl.errors.required),t.xp6(1),t.Q6J("ngIf",o.videoForm.controls.name.hasError("maxLength"))}}function T(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const o=t.oxw(2);t.xp6(1),t.hij("",o.requiredField," ")}}function C(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const o=t.oxw(2);t.xp6(1),t.hij("",o.maxField," ")}}function A(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t.YNc(1,T,2,1,"mat-error",11),t.YNc(2,C,2,1,"mat-error",11),t.qZA()),2&r){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.descControl.errors&&o.descControl.errors.required),t.xp6(1),t.Q6J("ngIf",o.videoForm.controls.description.hasError("maxLength"))}}const _=[{path:"",component:(()=>{class r{constructor(o,e,d,c){this.location=o,this.servicio=e,this.route=d,this.snakBarService=c,this.requiredField="Required field.",this.maxField="Max characters allowed.",this.videoForm=new i.cw({name:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(50)],updateOn:"change"}),description:new i.NI(null,{validators:[i.kI.required],updateOn:"change"})})}ngOnInit(){this.findById()}findById(){this.id=this.route.snapshot.paramMap.get("id"),this.servicio.get(this.id,"relapse_action").subscribe(o=>{let e=o.data;this.videoForm.patchValue({name:e.name,description:e.description})})}get nameControl(){var o;return null===(o=this.videoForm)||void 0===o?void 0:o.get("name")}get descControl(){return this.videoForm.get("description")}returnToList(){this.location.back()}submitForm(){var o,e;this.videoForm.valid&&this.servicio.update({id:parseInt(this.id),name:null===(o=this.nameControl)||void 0===o?void 0:o.value,description:null===(e=this.descControl)||void 0===e?void 0:e.value},"relapse_action").subscribe({next:d=>{this.snakBarService.openSnackBar("Successfully edited","Close"),this.returnToList()},error:d=>{this.snakBarService.openSnackBar("Error editing data.","cerrar",{},"error")},complete:()=>console.info("complete")})}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(m.Ye),t.Y36(p.S),t.Y36(s.gz),t.Y36(f.A))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-edit"]],decls:29,vars:3,consts:[[1,"row"],[1,"col-xl-7","mx-auto"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"card-title","d-flex","align-items-center"],[1,"bx","bxs-user","me-1","font-22","text-white"],[1,"mb-0","text-white"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"form-control"],[1,"requeried","form-label"],["formControlName","name","matInput","","maxlength","50"],[4,"ngIf"],[1,"col-12"],["matInput","","formControlName","description","maxlength","150","rows","3"],[1,"row","row-cols-auto","g-3"],[1,"col"],["type","button","mat-raised-button","","color","primary",3,"click"],["type","submit","mat-raised-button","","color","primary"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div"),t._UZ(6,"i",5),t.qZA(),t.TgZ(7,"h5",6),t._uU(8,"Edit corrective actions"),t.qZA(),t.qZA(),t._UZ(9,"hr"),t.TgZ(10,"form",7),t.NdJ("ngSubmit",function(){return e.submitForm()}),t.TgZ(11,"mat-form-field",8),t.TgZ(12,"mat-label",9),t._uU(13,"Name:"),t.qZA(),t._UZ(14,"input",10),t.YNc(15,x,3,2,"mat-error",11),t.qZA(),t.TgZ(16,"div",12),t.TgZ(17,"mat-form-field",8),t.TgZ(18,"mat-label",9),t._uU(19,"Description:"),t.qZA(),t._UZ(20,"textarea",13),t.YNc(21,A,3,2,"mat-error",11),t.qZA(),t.qZA(),t.TgZ(22,"div",14),t.TgZ(23,"div",15),t.TgZ(24,"button",16),t.NdJ("click",function(c){return c.stopPropagation(),e.returnToList()}),t._uU(25,"Cancel"),t.qZA(),t.qZA(),t.TgZ(26,"div",15),t.TgZ(27,"button",17),t._uU(28,"Accept"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(10),t.Q6J("formGroup",e.videoForm),t.xp6(5),t.Q6J("ngIf",e.nameControl&&e.nameControl.invalid),t.xp6(6),t.Q6J("ngIf",e.descControl&&e.descControl.invalid))},directives:[i._Y,i.JL,i.sg,l.KE,l.hX,i.Fj,g.Nt,i.JJ,i.u,i.nD,m.O5,v.lW,l.TO],styles:[""]}),r})()}];let E=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[s.Bz.forChild(_)],s.Bz]}),r})();var q=n(9151);let b=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[m.ez,E,q.q]]}),r})()}}]);