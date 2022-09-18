"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[9915],{9915:(S,u,i)=>{i.r(u),i.d(u,{CreateModule:()=>Y});var m=i(9808),c=i(1083),o=i(3075),r=i(5e3),d=i(1606),p=i(4673),l=i(7322),g=i(7531),_=i(7423);function f(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.Oqu(t.requiredField)}}function Z(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.hij(" ",t.maxField," ")}}function C(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r.YNc(1,f,2,1,"mat-error",12),r.YNc(2,Z,2,1,"mat-error",12),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.nameControl.errors&&t.nameControl.errors.required),r.xp6(1),r.Q6J("ngIf",t.videoForm.controls.name.hasError("maxLength"))}}function x(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.Oqu(t.requiredField)}}function h(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.hij(" ",t.maxField," ")}}function v(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r.YNc(1,x,2,1,"mat-error",12),r.YNc(2,h,2,1,"mat-error",12),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.addressControl.errors&&t.addressControl.errors.required),r.xp6(1),r.Q6J("ngIf",t.videoForm.controls.address.hasError("maxLength"))}}function T(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.Oqu(t.requiredField)}}function q(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.hij(" ",t.maxField," ")}}function A(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.hij(" ",t.numberField," ")}}function b(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r.YNc(1,T,2,1,"mat-error",12),r.YNc(2,q,2,1,"mat-error",12),r.YNc(3,A,2,1,"mat-error",12),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.phoneControl.errors&&t.phoneControl.errors.required),r.xp6(1),r.Q6J("ngIf",t.videoForm.controls.phone.hasError("maxLength")),r.xp6(1),r.Q6J("ngIf",t.videoForm.controls.phone.hasError("notNumber"))}}function F(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.Oqu(t.requiredField)}}function I(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const t=r.oxw(2);r.xp6(1),r.hij(" ",t.maxField," ")}}function N(e,n){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Escriba una direccion de correo valida"),r.qZA())}function w(e,n){if(1&e&&(r.TgZ(0,"mat-error"),r.YNc(1,F,2,1,"mat-error",12),r.YNc(2,I,2,1,"mat-error",12),r.YNc(3,N,2,0,"mat-error",12),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.gmailControl.errors&&t.gmailControl.errors.required),r.xp6(1),r.Q6J("ngIf",t.videoForm.controls.gmail.hasError("maxLength")),r.xp6(1),r.Q6J("ngIf",t.videoForm.controls.gmail.hasError("email"))}}const U=[{path:"",component:(()=>{class e{constructor(t,a,s){this.location=t,this.servicio=a,this.snakBarService=s,this.requiredField="Required field.",this.maxField="Max characters allowed.",this.numberField="Only allowed numbers.",this.videoForm=new o.cw({name:new o.NI(null,{validators:[o.kI.required,o.kI.maxLength(50)],updateOn:"change"}),address:new o.NI(null,{validators:[o.kI.required,o.kI.maxLength(150)],updateOn:"change"}),phone:new o.NI(null,{validators:[o.kI.required,o.kI.maxLength(6),this.isNumberValidation()],updateOn:"change"}),gmail:new o.NI(null,{validators:[o.kI.required,o.kI.email],updateOn:"change"})})}ngOnInit(){}get nameControl(){return this.videoForm.get("name")}get addressControl(){return this.videoForm.get("address")}get phoneControl(){return this.videoForm.get("phone")}get gmailControl(){return this.videoForm.get("gmail")}returnToList(){this.location.back()}submitForm(){console.warn("valido??",this.videoForm.valid),this.videoForm.valid&&this.servicio.create(this.videoForm.value,"laboratory").subscribe({next:t=>{this.snakBarService.openSnackBar("Successfully created","Close"),this.returnToList()},error:t=>{this.snakBarService.openSnackBar("Error creating data.","cerrar",{},"error")},complete:()=>console.info("complete")})}isNumberValidation(){return function(t){return null!==t.value&&isNaN(+t.value)?{notNumber:!0}:null}}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(m.Ye),r.Y36(d.v),r.Y36(p.A))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-create"]],decls:42,vars:5,consts:[[1,"row"],[1,"col-xl-7","mx-auto"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"card-title","d-flex","align-items-center"],[1,"bx","bxs-user","me-1","font-22","text-white"],[1,"mb-0","text-white"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"form-control"],[1,"requeried","form-label"],["formControlName","name","matInput","","maxlength","50"],[4,"ngIf"],["matInput","","formControlName","address","maxlength","50"],["matInput","","formControlName","phone","maxlength","50"],["matInput","","formControlName","gmail","maxlength","50"],[1,"row","row-cols-auto","g-3"],[1,"col"],["type","button","mat-raised-button","","color","primary",3,"click"],["type","submit","mat-raised-button","","color","primary"]],template:function(t,a){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"div",4),r.TgZ(5,"div"),r._UZ(6,"i",5),r.qZA(),r.TgZ(7,"h5",6),r._uU(8,"Create laboratory"),r.qZA(),r.qZA(),r._UZ(9,"hr"),r.TgZ(10,"form",7),r.NdJ("ngSubmit",function(){return a.submitForm()}),r.TgZ(11,"div",8),r.TgZ(12,"mat-form-field",9),r.TgZ(13,"mat-label",10),r._uU(14,"Name:"),r.qZA(),r._UZ(15,"input",11),r.YNc(16,C,3,2,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(17,"div",8),r.TgZ(18,"mat-form-field",9),r.TgZ(19,"mat-label",10),r._uU(20,"Address:"),r.qZA(),r._UZ(21,"input",13),r.YNc(22,v,3,2,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(23,"div",8),r.TgZ(24,"mat-form-field",9),r.TgZ(25,"mat-label",10),r._uU(26,"Phone number:"),r.qZA(),r._UZ(27,"input",14),r.YNc(28,b,4,3,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(29,"div",8),r.TgZ(30,"mat-form-field",9),r.TgZ(31,"mat-label",10),r._uU(32,"Email:"),r.qZA(),r._UZ(33,"input",15),r.YNc(34,w,4,3,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(35,"div",16),r.TgZ(36,"div",17),r.TgZ(37,"button",18),r.NdJ("click",function(Q){return Q.stopPropagation(),a.returnToList()}),r._uU(38," Cancel "),r.qZA(),r.qZA(),r.TgZ(39,"div",17),r.TgZ(40,"button",19),r._uU(41," Acept "),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(10),r.Q6J("formGroup",a.videoForm),r.xp6(6),r.Q6J("ngIf",a.nameControl&&a.nameControl.invalid),r.xp6(6),r.Q6J("ngIf",a.addressControl&&a.addressControl.invalid),r.xp6(6),r.Q6J("ngIf",a.phoneControl&&a.phoneControl.invalid),r.xp6(6),r.Q6J("ngIf",a.gmailControl&&a.gmailControl.invalid))},directives:[o._Y,o.JL,o.sg,l.KE,l.hX,o.Fj,g.Nt,o.JJ,o.u,o.nD,m.O5,_.lW,l.TO],styles:[""]}),e})()}];let J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[c.Bz.forChild(U)],c.Bz]}),e})();var y=i(9151);let Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[m.ez,J,y.q]]}),e})()}}]);