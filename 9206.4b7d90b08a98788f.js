"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[9206],{9206:(O,c,a)=>{a.r(c),a.d(c,{EditModule:()=>J});var d=a(9808),s=a(1083),n=a(3075),r=a(5e3),p=a(1606),g=a(4673),u=a(7322),f=a(7531),_=a(7423);function Z(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const o=r.oxw(2);r.xp6(1),r.Oqu(o.requiredField)}}function h(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const o=r.oxw(2);r.xp6(1),r.Oqu(o.maxField)}}function v(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r.YNc(1,Z,2,1,"mat-error",12),r.YNc(2,h,2,1,"mat-error",12),r.qZA()),2&t){const o=r.oxw();r.xp6(1),r.Q6J("ngIf",o.nameControl.errors&&o.nameControl.errors.required),r.xp6(1),r.Q6J("ngIf",o.videoForm.controls.name.hasError("maxLength"))}}function x(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const o=r.oxw(2);r.xp6(1),r.Oqu(o.requiredField)}}function T(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const o=r.oxw(2);r.xp6(1),r.Oqu(o.maxField)}}function q(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r.YNc(1,x,2,1,"mat-error",12),r.YNc(2,T,2,1,"mat-error",12),r.qZA()),2&t){const o=r.oxw();r.xp6(1),r.Q6J("ngIf",o.addressControl.errors&&o.addressControl.errors.required),r.xp6(1),r.Q6J("ngIf",o.videoForm.controls.address.hasError("maxLength"))}}function C(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const o=r.oxw(2);r.xp6(1),r.Oqu(o.requiredField)}}function A(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const o=r.oxw(2);r.xp6(1),r.Oqu(o.phoneNumbres)}}function E(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r.YNc(1,C,2,1,"mat-error",12),r.YNc(2,A,2,1,"mat-error",12),r.qZA()),2&t){const o=r.oxw();r.xp6(1),r.Q6J("ngIf",o.phoneControl.errors&&o.phoneControl.errors.required),r.xp6(1),r.Q6J("ngIf",o.videoForm.controls.phone.hasError("pattern"))}}function b(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const o=r.oxw(2);r.xp6(1),r.Oqu(o.requiredField)}}function I(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const o=r.oxw(2);r.xp6(1),r.Oqu(o.maxField)}}function N(t,i){1&t&&(r.TgZ(0,"mat-error"),r._uU(1,"Escriba una direccion de correo valida"),r.qZA())}function F(t,i){if(1&t&&(r.TgZ(0,"mat-error"),r.YNc(1,b,2,1,"mat-error",12),r.YNc(2,I,2,1,"mat-error",12),r.YNc(3,N,2,0,"mat-error",12),r.qZA()),2&t){const o=r.oxw();r.xp6(1),r.Q6J("ngIf",o.gmailControl.errors&&o.gmailControl.errors.required),r.xp6(1),r.Q6J("ngIf",o.videoForm.controls.gmail.hasError("maxLength")),r.xp6(1),r.Q6J("ngIf",o.videoForm.controls.gmail.hasError("email"))}}const w=[{path:"",component:(()=>{class t{constructor(o,e,m,l){this.location=o,this.servicio=e,this.route=m,this.snakBarService=l,this.requiredField="Required field.",this.maxField="Max characters allowed.",this.numberField="Only allowed numbers.",this.phoneNumbres="Incorrect phone number",this.videoForm=new n.cw({name:new n.NI(null,{validators:[n.kI.required,n.kI.maxLength(50)],updateOn:"change"}),address:new n.NI(null,{validators:[n.kI.required,n.kI.maxLength(150)],updateOn:"change"}),phone:new n.NI(null,{validators:[n.kI.required,n.kI.pattern("^((\\+91-?)|0)?[0-9]{10}$")],updateOn:"change"}),gmail:new n.NI(null,{validators:[n.kI.required,n.kI.email],updateOn:"change"})})}ngOnInit(){this.findById()}findById(){this.id=this.route.snapshot.paramMap.get("id"),this.servicio.get(this.id,"laboratory").subscribe(o=>{console.warn("este es el formData",o.data);let e=o.data;this.videoForm.patchValue({name:e.name,address:e.address,gmail:e.gmail,phone:e.phone})})}get nameControl(){return this.videoForm.get("name")}get addressControl(){return this.videoForm.get("address")}get phoneControl(){return this.videoForm.get("phone")}get gmailControl(){return this.videoForm.get("gmail")}returnToList(){this.location.back()}submitForm(){var o,e,m,l;this.videoForm.valid&&this.servicio.update({id:parseInt(this.id),name:null===(o=this.nameControl)||void 0===o?void 0:o.value,address:null===(e=this.addressControl)||void 0===e?void 0:e.value,phone:null===(m=this.phoneControl)||void 0===m?void 0:m.value,gmail:null===(l=this.gmailControl)||void 0===l?void 0:l.value},"laboratory").subscribe({next:Y=>{this.snakBarService.openSnackBar("Successfully edited","Close"),this.returnToList()},error:Y=>{this.snakBarService.openSnackBar("Error editing data.","cerrar",{},"error")},complete:()=>console.info("complete")})}isNumberValidation(){return function(o){return null!==o.value&&isNaN(+o.value)?{notNumber:!0}:null}}}return t.\u0275fac=function(o){return new(o||t)(r.Y36(d.Ye),r.Y36(p.v),r.Y36(s.gz),r.Y36(g.A))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-edit"]],decls:42,vars:5,consts:[[1,"row"],[1,"col-12","mx-auto"],[1,"border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"card-title","d-flex","align-items-center"],[1,"bx","bxs-user","me-1","font-22","text-white"],[1,"mb-0","text-white"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"form-control"],[1,"form-label"],["formControlName","name","matInput","","requeried","","maxlength","50"],[4,"ngIf"],["matInput","","requeried","","formControlName","address","maxlength","50"],["matInput","","requeried","","formControlName","phone","maxlength","50"],["matInput","","requeried","","formControlName","gmail","maxlength","50"],[1,"row","row-cols-auto","g-3"],[1,"col"],["type","button","mat-raised-button","","color","primary",3,"click"],["type","submit","mat-raised-button","","color","primary"]],template:function(o,e){1&o&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"div",4),r.TgZ(5,"div"),r._UZ(6,"i",5),r.qZA(),r.TgZ(7,"h5",6),r._uU(8,"Edit laboratory"),r.qZA(),r.qZA(),r._UZ(9,"hr"),r.TgZ(10,"form",7),r.NdJ("ngSubmit",function(){return e.submitForm()}),r.TgZ(11,"div",8),r.TgZ(12,"mat-form-field",9),r.TgZ(13,"mat-label",10),r._uU(14,"Name:"),r.qZA(),r._UZ(15,"input",11),r.YNc(16,v,3,2,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(17,"div",8),r.TgZ(18,"mat-form-field",9),r.TgZ(19,"mat-label",10),r._uU(20,"Address:"),r.qZA(),r._UZ(21,"input",13),r.YNc(22,q,3,2,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(23,"div",8),r.TgZ(24,"mat-form-field",9),r.TgZ(25,"mat-label",10),r._uU(26,"Phone number:"),r.qZA(),r._UZ(27,"input",14),r.YNc(28,E,3,2,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(29,"div",8),r.TgZ(30,"mat-form-field",9),r.TgZ(31,"mat-label",10),r._uU(32,"Email:"),r.qZA(),r._UZ(33,"input",15),r.YNc(34,F,4,3,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(35,"div",16),r.TgZ(36,"div",17),r.TgZ(37,"button",18),r.NdJ("click",function(l){return l.stopPropagation(),e.returnToList()}),r._uU(38," Cancel "),r.qZA(),r.qZA(),r.TgZ(39,"div",17),r.TgZ(40,"button",19),r._uU(41," Edit "),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&o&&(r.xp6(10),r.Q6J("formGroup",e.videoForm),r.xp6(6),r.Q6J("ngIf",e.nameControl&&e.nameControl.invalid),r.xp6(6),r.Q6J("ngIf",e.addressControl&&e.addressControl.invalid),r.xp6(6),r.Q6J("ngIf",e.phoneControl&&e.phoneControl.invalid),r.xp6(6),r.Q6J("ngIf",e.gmailControl&&e.gmailControl.invalid))},directives:[n._Y,n.JL,n.sg,u.KE,u.hX,n.Fj,f.Nt,n.JJ,n.u,n.nD,d.O5,_.lW,u.TO],styles:[".mat-form-field .mat-form-field-underline{position:absolute;width:0%!important;pointer-events:none;transform:scaleY(1.0001)}[_nghost-%COMP%]     .mat-select-value{color:#fff!important}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[s.Bz.forChild(w)],s.Bz]}),t})();var U=a(9151);let J=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[d.ez,y,U.q]]}),t})()}}]);