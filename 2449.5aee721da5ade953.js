"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[2449],{2449:(_,c,i)=>{i.r(c),i.d(c,{EditModule:()=>F});var s=i(9808),d=i(1083),n=i(3075),t=i(5e3),p=i(2836),f=i(4673),l=i(7322),g=i(7531),v=i(7423);function Z(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const r=t.oxw(2);t.xp6(1),t.hij("",r.requiredField," ")}}function h(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"S\xf3lo se admiten 10 caracteres alfan\xfamericos. "),t.qZA())}function T(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,Z,2,1,"mat-error",11),t.YNc(2,h,2,0,"mat-error",11),t.qZA()),2&e){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.nameControl.errors&&r.nameControl.errors.required),t.xp6(1),t.Q6J("ngIf",r.videoForm.controls.name.hasError("maxLength"))}}function C(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const r=t.oxw(2);t.xp6(1),t.hij("",r.requiredField," ")}}function A(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"S\xf3lo se admiten 10 caracteres alfan\xfamericos. "),t.qZA())}function x(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,C,2,1,"mat-error",11),t.YNc(2,A,2,0,"mat-error",11),t.qZA()),2&e){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.descControl.errors&&r.descControl.errors.required),t.xp6(1),t.Q6J("ngIf",r.videoForm.controls.description.hasError("maxLength"))}}const E=[{path:"",component:(()=>{class e{constructor(r,o,m,u){this.location=r,this.servicio=o,this.route=m,this.snakBarService=u,this.requiredField="Campo requerido",this.videoForm=new n.cw({name:new n.NI(null,{validators:[n.kI.required,n.kI.maxLength(50)],updateOn:"change"}),description:new n.NI(null,{validators:[n.kI.required],updateOn:"change"})})}ngOnInit(){this.findById()}findById(){this.id=this.route.snapshot.paramMap.get("id"),this.servicio.get(this.id,"company").subscribe(r=>{let o=r.data;this.videoForm.patchValue({name:o.name,description:o.description})})}get nameControl(){var r;return null===(r=this.videoForm)||void 0===r?void 0:r.get("name")}get descControl(){return this.videoForm.get("description")}returnToList(){this.location.back()}submitForm(){var r,o;this.videoForm.valid&&this.servicio.update({id:parseInt(this.id),name:null===(r=this.nameControl)||void 0===r?void 0:r.value,description:null===(o=this.descControl)||void 0===o?void 0:o.value},"company").subscribe({next:m=>{this.snakBarService.openSnackBar("Editado correctamente","Cerrar"),this.returnToList()},error:m=>{this.snakBarService.openSnackBar("Error al editar los datos.","cerrar",{},"error")},complete:()=>console.info("complete")})}isNumberValidation(){return function(r){return null!==r.value&&isNaN(+r.value)?{notNumber:!0}:null}}ipValidator(){return r=>{const o=/^([0-9] {1, 3}\.) {3}[0-9] {1, 3}$/;return console.warn("estee es el test",o.test(r.value)),o.test(r.value)?null:{ipError:!0}}}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(s.Ye),t.Y36(p.J),t.Y36(d.gz),t.Y36(f.A))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit"]],decls:29,vars:3,consts:[[1,"row"],[1,"col-xl-7","mx-auto"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"card-title","d-flex","align-items-center"],[1,"bx","bxs-user","me-1","font-22","text-white"],[1,"mb-0","text-white"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"form-control"],[1,"requeried","form-label"],["formControlName","name","matInput","","maxlength","50"],[4,"ngIf"],[1,"col-12"],["matInput","","formControlName","description","maxlength","150","rows","3"],[1,"row","row-cols-auto","g-3"],[1,"col"],["type","button","mat-raised-button","","color","primary",3,"click"],["type","submit","mat-raised-button","","color","primary"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div"),t._UZ(6,"i",5),t.qZA(),t.TgZ(7,"h5",6),t._uU(8,"Editar compa\xf1\xeda de limpieza"),t.qZA(),t.qZA(),t._UZ(9,"hr"),t.TgZ(10,"form",7),t.NdJ("ngSubmit",function(){return o.submitForm()}),t.TgZ(11,"mat-form-field",8),t.TgZ(12,"mat-label",9),t._uU(13,"Nombre:"),t.qZA(),t._UZ(14,"input",10),t.YNc(15,T,3,2,"mat-error",11),t.qZA(),t.TgZ(16,"div",12),t.TgZ(17,"mat-form-field",8),t.TgZ(18,"mat-label",9),t._uU(19,"Descripcion:"),t.qZA(),t._UZ(20,"textarea",13),t.YNc(21,x,3,2,"mat-error",11),t.qZA(),t.qZA(),t.TgZ(22,"div",14),t.TgZ(23,"div",15),t.TgZ(24,"button",16),t.NdJ("click",function(u){return u.stopPropagation(),o.returnToList()}),t._uU(25,"Cancelar"),t.qZA(),t.qZA(),t.TgZ(26,"div",15),t.TgZ(27,"button",17),t._uU(28,"Aceptar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(10),t.Q6J("formGroup",o.videoForm),t.xp6(5),t.Q6J("ngIf",o.nameControl&&o.nameControl.invalid),t.xp6(6),t.Q6J("ngIf",o.descControl&&o.descControl.invalid))},directives:[n._Y,n.JL,n.sg,l.KE,l.hX,n.Fj,g.Nt,n.JJ,n.u,n.nD,s.O5,v.lW,l.TO],styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(E)],d.Bz]}),e})();var q=i(9151);let F=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,b,q.q]]}),e})()}}]);