"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[9150],{9150:(I,l,n)=>{n.r(l),n.d(l,{CreateModule:()=>b});var m=n(9808),u=n(1083),o=n(3075),r=n(5e3),d=n(3424),p=n(4673),s=n(7322),g=n(7531),f=n(7423);function Z(e,a){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.hij("",t.requiredField," ")}}function C(e,a){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"S\xf3lo se admiten 10 caracteres alfan\xfamericos. "),r.qZA())}function v(e,a){if(1&e&&(r.TgZ(0,"mat-error"),r.YNc(1,Z,2,1,"mat-error",12),r.YNc(2,C,2,0,"mat-error",12),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.nameControl.errors&&t.nameControl.errors.required),r.xp6(1),r.Q6J("ngIf",t.videoForm.controls.name.hasError("maxLength"))}}function T(e,a){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.hij("",t.requiredField," ")}}function h(e,a){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"S\xf3lo se admiten 10 caracteres alfan\xfamericos. "),r.qZA())}function A(e,a){if(1&e&&(r.TgZ(0,"mat-error"),r.YNc(1,T,2,1,"mat-error",12),r.YNc(2,h,2,0,"mat-error",12),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.descControl.errors&&t.descControl.errors.required),r.xp6(1),r.Q6J("ngIf",t.videoForm.controls.description.hasError("maxLength"))}}const x=[{path:"",component:(()=>{class e{constructor(t,i,c){this.location=t,this.servicio=i,this.snakBarService=c,this.requiredField="Campo requerido",this.videoForm=new o.cw({name:new o.NI(null,{validators:[o.kI.required,o.kI.maxLength(50)],updateOn:"change"}),description:new o.NI(null,{validators:[o.kI.required,o.kI.maxLength(150)],updateOn:"change"})})}ngOnInit(){}get nameControl(){return this.videoForm.get("name")}get descControl(){return this.videoForm.get("description")}returnToList(){this.location.back()}submitForm(){this.videoForm.valid&&this.servicio.create(this.videoForm.value,"area").subscribe({next:t=>{this.snakBarService.openSnackBar("Creado correctamente","Cerrar"),this.returnToList()},error:t=>{this.snakBarService.openSnackBar("Error al crear los datos.","cerrar",{},"error")},complete:()=>console.info("complete")})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(m.Ye),r.Y36(d.T),r.Y36(p.A))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-create"]],decls:30,vars:3,consts:[[1,"row"],[1,"col-xl-7","mx-auto"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"card-title","d-flex","align-items-center"],[1,"bx","bxs-user","me-1","font-22","text-white"],[1,"mb-0","text-white"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"form-control"],[1,"requeried","form-label"],["formControlName","name","matInput","","maxlength","50"],[4,"ngIf"],["matInput","","formControlName","description","maxlength","150","rows","3"],[1,"row","row-cols-auto","g-3"],[1,"col"],["type","button","mat-raised-button","","color","primary",3,"click"],["type","submit","mat-raised-button","","color","primary"]],template:function(t,i){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"div",4),r.TgZ(5,"div"),r._UZ(6,"i",5),r.qZA(),r.TgZ(7,"h5",6),r._uU(8,"Registrar area"),r.qZA(),r.qZA(),r._UZ(9,"hr"),r.TgZ(10,"form",7),r.NdJ("ngSubmit",function(){return i.submitForm()}),r.TgZ(11,"div",8),r.TgZ(12,"mat-form-field",9),r.TgZ(13,"mat-label",10),r._uU(14,"Nombre:"),r.qZA(),r._UZ(15,"input",11),r.YNc(16,v,3,2,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(17,"div",8),r.TgZ(18,"mat-form-field",9),r.TgZ(19,"mat-label",10),r._uU(20,"Descripcion:"),r.qZA(),r._UZ(21,"textarea",13),r.YNc(22,A,3,2,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(23,"div",14),r.TgZ(24,"div",15),r.TgZ(25,"button",16),r.NdJ("click",function(_){return _.stopPropagation(),i.returnToList()}),r._uU(26,"Cancelar"),r.qZA(),r.qZA(),r.TgZ(27,"div",15),r.TgZ(28,"button",17),r._uU(29,"Aceptar"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(10),r.Q6J("formGroup",i.videoForm),r.xp6(6),r.Q6J("ngIf",i.nameControl&&i.nameControl.invalid),r.xp6(6),r.Q6J("ngIf",i.descControl&&i.descControl.invalid))},directives:[o._Y,o.JL,o.sg,s.KE,s.hX,o.Fj,g.Nt,o.JJ,o.u,o.nD,m.O5,f.lW,s.TO],styles:[""]}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[u.Bz.forChild(x)],u.Bz]}),e})();var F=n(9151);let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[m.ez,q,F.q]]}),e})()}}]);