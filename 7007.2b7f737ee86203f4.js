"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[7007],{7007:(y,u,n)=>{n.r(u),n.d(u,{EditModule:()=>b});var m=n(9808),d=n(1083),i=n(3075),t=n(5e3),p=n(4819),g=n(4673),l=n(7322),f=n(7531),Z=n(7423);function h(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const o=t.oxw(2);t.xp6(1),t.hij("",o.requiredField," ")}}function v(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const o=t.oxw(2);t.xp6(1),t.hij("",o.maxField," ")}}function x(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t.YNc(1,h,2,1,"mat-error",12),t.YNc(2,v,2,1,"mat-error",12),t.qZA()),2&r){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.nameControl.errors&&o.nameControl.errors.required),t.xp6(1),t.Q6J("ngIf",o.videoForm.controls.name.hasError("maxLength"))}}function T(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const o=t.oxw(2);t.xp6(1),t.hij("",o.requiredField," ")}}function C(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const o=t.oxw(2);t.xp6(1),t.hij("",o.maxField," ")}}function A(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t.YNc(1,T,2,1,"mat-error",12),t.YNc(2,C,2,1,"mat-error",12),t.qZA()),2&r){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.descControl.errors&&o.descControl.errors.required),t.xp6(1),t.Q6J("ngIf",o.videoForm.controls.description.hasError("maxLength"))}}const _=[{path:"",component:(()=>{class r{constructor(o,e,s,c){this.location=o,this.servicio=e,this.route=s,this.snakBarService=c,this.requiredField="Required field.",this.maxField="Max characters allowed.",this.videoForm=new i.cw({name:new i.NI(null,{validators:[i.kI.required,i.kI.maxLength(50)],updateOn:"change"}),description:new i.NI(null,{validators:[i.kI.required],updateOn:"change"})})}ngOnInit(){this.findById()}findById(){this.id=this.route.snapshot.paramMap.get("id"),this.servicio.get(this.id,"analisys_state").subscribe(o=>{let e=o.data;this.videoForm.patchValue({name:e.name,description:e.description})})}get nameControl(){return this.videoForm.get("name")}get descControl(){return this.videoForm.get("description")}returnToList(){this.location.back()}submitForm(){var o,e;this.videoForm.valid&&this.servicio.update({id:parseInt(this.id),name:null===(o=this.nameControl)||void 0===o?void 0:o.value,description:null===(e=this.descControl)||void 0===e?void 0:e.value},"analisys_state").subscribe({next:s=>{this.snakBarService.openSnackBar("Successfully edited","Close"),this.returnToList()},error:s=>{this.snakBarService.openSnackBar("Error editing data.","cerrar",{},"error")},complete:()=>console.info("complete")})}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(m.Ye),t.Y36(p.C),t.Y36(d.gz),t.Y36(g.A))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-edit"]],decls:30,vars:3,consts:[[1,"row"],[1,"col-xl-7","mx-auto"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"card-title","d-flex","align-items-center"],[1,"bx","bxs-user","me-1","font-22","text-white"],[1,"mb-0","text-white"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"form-control"],[1,"requeried","form-label"],["formControlName","name","matInput","","maxlength","50"],[4,"ngIf"],["matInput","","formControlName","description","maxlength","150","rows","3"],[1,"row","row-cols-auto","g-3"],[1,"col"],["type","button","mat-raised-button","","color","primary",3,"click"],["type","submit","mat-raised-button","","color","primary"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div"),t._UZ(6,"i",5),t.qZA(),t.TgZ(7,"h5",6),t._uU(8,"Edit state"),t.qZA(),t.qZA(),t._UZ(9,"hr"),t.TgZ(10,"form",7),t.NdJ("ngSubmit",function(){return e.submitForm()}),t.TgZ(11,"div",8),t.TgZ(12,"mat-form-field",9),t.TgZ(13,"mat-label",10),t._uU(14,"Name:"),t.qZA(),t._UZ(15,"input",11),t.YNc(16,x,3,2,"mat-error",12),t.qZA(),t.qZA(),t.TgZ(17,"div",8),t.TgZ(18,"mat-form-field",9),t.TgZ(19,"mat-label",10),t._uU(20,"Description:"),t.qZA(),t._UZ(21,"textarea",13),t.YNc(22,A,3,2,"mat-error",12),t.qZA(),t.qZA(),t.TgZ(23,"div",14),t.TgZ(24,"div",15),t.TgZ(25,"button",16),t.NdJ("click",function(c){return c.stopPropagation(),e.returnToList()}),t._uU(26,"Cancel"),t.qZA(),t.qZA(),t.TgZ(27,"div",15),t.TgZ(28,"button",17),t._uU(29,"Accept"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(10),t.Q6J("formGroup",e.videoForm),t.xp6(6),t.Q6J("ngIf",e.nameControl&&e.nameControl.invalid),t.xp6(6),t.Q6J("ngIf",e.descControl&&e.descControl.invalid))},directives:[i._Y,i.JL,i.sg,l.KE,l.hX,i.Fj,f.Nt,i.JJ,i.u,i.nD,m.O5,Z.lW,l.TO],styles:[""]}),r})()}];let E=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[d.Bz.forChild(_)],d.Bz]}),r})();var q=n(9151);let b=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[m.ez,E,q.q]]}),r})()}}]);