"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[9676],{9676:(M,u,i)=>{i.r(u),i.d(u,{CreateModule:()=>O});var m=i(9808),p=i(1083),n=i(3075),r=i(5e3),d=i(3737),g=i(835),f=i(2836),Z=i(4673),l=i(7322),C=i(7531),h=i(4107),v=i(7423),_=i(508);function x(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const e=r.oxw(2);r.xp6(1),r.hij("",e.requiredField," ")}}function T(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const e=r.oxw(2);r.xp6(1),r.hij("",e.maxField," ")}}function A(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r.YNc(1,x,2,1,"mat-error",12),r.YNc(2,T,2,1,"mat-error",12),r.qZA()),2&t){const e=r.oxw();r.xp6(1),r.Q6J("ngIf",e.nameControl.errors&&e.nameControl.errors.required),r.xp6(1),r.Q6J("ngIf",e.videoForm.controls.name.hasError("maxLength"))}}function q(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const e=r.oxw(2);r.xp6(1),r.hij("",e.requiredField," ")}}function y(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const e=r.oxw(2);r.xp6(1),r.hij("",e.maxField," ")}}function N(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r.YNc(1,q,2,1,"mat-error",12),r.YNc(2,y,2,1,"mat-error",12),r.qZA()),2&t){const e=r.oxw();r.xp6(1),r.Q6J("ngIf",e.lastnameControl.errors&&e.lastnameControl.errors.required),r.xp6(1),r.Q6J("ngIf",e.videoForm.controls.lastname.hasError("maxLength"))}}function b(t,o){if(1&t&&(r.TgZ(0,"mat-option",22),r._uU(1),r.qZA()),2&t){const e=o.$implicit;r.Q6J("value",e.id),r.xp6(1),r.hij(" ",e.name," ")}}function I(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const e=r.oxw(2);r.xp6(1),r.hij("",e.requiredField," ")}}function F(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r.YNc(1,I,2,1,"mat-error",12),r.qZA()),2&t){const e=r.oxw();r.xp6(1),r.Q6J("ngIf",e.turnControl.errors&&e.turnControl.errors.required)}}function J(t,o){if(1&t&&(r.TgZ(0,"mat-option",22),r._uU(1),r.qZA()),2&t){const e=o.$implicit;r.Q6J("value",e.id),r.xp6(1),r.hij(" ",e.name," ")}}function U(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const e=r.oxw(2);r.xp6(1),r.hij("",e.requiredField," ")}}function Y(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r.YNc(1,U,2,1,"mat-error",12),r.qZA()),2&t){const e=r.oxw();r.xp6(1),r.Q6J("ngIf",e.companyControl.errors&&e.companyControl.errors.required)}}function w(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const e=r.oxw(2);r.xp6(1),r.hij("",e.requiredField," ")}}function S(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&t){const e=r.oxw(2);r.xp6(1),r.hij("",e.onlyNumbres," ")}}function Q(t,o){if(1&t&&(r.TgZ(0,"mat-error"),r.YNc(1,w,2,1,"mat-error",12),r.YNc(2,S,2,1,"mat-error",12),r.qZA()),2&t){const e=r.oxw();r.xp6(1),r.Q6J("ngIf",e.phoneControl.errors&&e.phoneControl.errors.required),r.xp6(1),r.Q6J("ngIf",e.phoneControl.errors&&e.phoneControl.errors.notNumber)}}const j=[{path:"",component:(()=>{class t{constructor(e,a,c,s,L){this.location=e,this.servicio=a,this.turnService=c,this.caompanyService=s,this.snakBarService=L,this.requiredField="Required field.",this.maxField="Max characters allowed.",this.onlyNumbres="Only allowed numbers",this.videoForm=new n.cw({name:new n.NI(null,{validators:[n.kI.required,n.kI.maxLength(50)],updateOn:"change"}),lastname:new n.NI(null,{validators:[n.kI.required],updateOn:"change"}),phone:new n.NI(null,{validators:[n.kI.required,this.isNumberValidation],updateOn:"change"}),turn:new n.NI(null,{validators:[n.kI.required,n.kI.maxLength(150)],updateOn:"change"}),company:new n.NI(null,{validators:[n.kI.required,n.kI.maxLength(150)],updateOn:"change"})})}ngOnInit(){this.getAllCompany(),this.getAllTurn()}getAllTurn(){this.turnService.getAll("turn_type").subscribe({next:e=>{console.warn("aaaha",e),this.turnsData=e.data},error:e=>{console.log("error",e),this.snakBarService.openSnackBar("Error al obtener los datos de turno.","cerrar",{},"error")},complete:()=>console.info("complete")})}getAllCompany(){this.caompanyService.getAll("company").subscribe({next:e=>{console.warn("aaaha",e),this.companyData=e.data},error:e=>{console.log("error",e),this.snakBarService.openSnackBar("Error al obtener los datos de company.","cerrar",{},"error")},complete:()=>console.info("complete")})}get nameControl(){return this.videoForm.get("name")}get lastnameControl(){return this.videoForm.get("lastname")}get phoneControl(){return this.videoForm.get("phone")}get turnControl(){return this.videoForm.get("turn")}get companyControl(){return this.videoForm.get("company")}returnToList(){this.location.back()}submitForm(){this.videoForm.valid&&this.servicio.create(this.videoForm.value,"janitor").subscribe({next:e=>{this.snakBarService.openSnackBar("Successfully created","Close"),this.returnToList()},error:e=>{this.snakBarService.openSnackBar("Error creating data.","cerrar",{},"error")},complete:()=>console.info("complete")})}isNumberValidation(){return function(e){return null!==e.value&&isNaN(+e.value)?{notNumber:!0}:null}}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(m.Ye),r.Y36(d.u),r.Y36(g.L),r.Y36(f.J),r.Y36(Z.A))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-create"]],decls:50,vars:8,consts:[[1,"row"],[1,"col-xl-7","mx-auto"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"card-title","d-flex","align-items-center"],[1,"bx","bxs-user","me-1","font-22","text-white"],[1,"mb-0","text-white"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"form-control"],[1,"requeried","form-label"],["formControlName","name","matInput","","maxlength","50"],[4,"ngIf"],["formControlName","lastname","matInput","","maxlength","50"],["formControlName","turn"],[3,"value",4,"ngFor","ngForOf"],["formControlName","company"],["formControlName","phone","matInput","","maxlength","50"],[1,"row","row-cols-auto","g-3"],[1,"col"],["type","button","mat-raised-button","","color","primary",3,"click"],["type","submit","mat-raised-button","","color","primary"],[3,"value"]],template:function(e,a){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"div",4),r.TgZ(5,"div"),r._UZ(6,"i",5),r.qZA(),r.TgZ(7,"h5",6),r._uU(8,"Create janitor"),r.qZA(),r.qZA(),r._UZ(9,"hr"),r.TgZ(10,"form",7),r.NdJ("ngSubmit",function(){return a.submitForm()}),r.TgZ(11,"div",8),r.TgZ(12,"mat-form-field",9),r.TgZ(13,"mat-label",10),r._uU(14,"Name:"),r.qZA(),r._UZ(15,"input",11),r.YNc(16,A,3,2,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(17,"div",8),r.TgZ(18,"mat-form-field",9),r.TgZ(19,"mat-label",10),r._uU(20,"Last name:"),r.qZA(),r._UZ(21,"input",13),r.YNc(22,N,3,2,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(23,"div",8),r.TgZ(24,"mat-form-field",9),r.TgZ(25,"mat-label",10),r._uU(26,"Turn type:"),r.qZA(),r.TgZ(27,"mat-select",14),r.YNc(28,b,2,2,"mat-option",15),r.qZA(),r.YNc(29,F,2,1,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(30,"div",8),r.TgZ(31,"mat-form-field",9),r.TgZ(32,"mat-label",10),r._uU(33,"Cleaning company:"),r.qZA(),r.TgZ(34,"mat-select",16),r.YNc(35,J,2,2,"mat-option",15),r.qZA(),r.YNc(36,Y,2,1,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(37,"div",8),r.TgZ(38,"mat-form-field",9),r.TgZ(39,"mat-label",10),r._uU(40,"Phone number:"),r.qZA(),r._UZ(41,"input",17),r.YNc(42,Q,3,2,"mat-error",12),r.qZA(),r.qZA(),r.TgZ(43,"div",18),r.TgZ(44,"div",19),r.TgZ(45,"button",20),r.NdJ("click",function(s){return s.stopPropagation(),a.returnToList()}),r._uU(46,"Cancel"),r.qZA(),r.qZA(),r.TgZ(47,"div",19),r.TgZ(48,"button",21),r._uU(49,"Accept"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(10),r.Q6J("formGroup",a.videoForm),r.xp6(6),r.Q6J("ngIf",a.nameControl&&a.nameControl.invalid),r.xp6(6),r.Q6J("ngIf",a.lastnameControl&&a.lastnameControl.invalid),r.xp6(6),r.Q6J("ngForOf",a.turnsData),r.xp6(1),r.Q6J("ngIf",a.turnControl&&a.turnControl.invalid),r.xp6(6),r.Q6J("ngForOf",a.companyData),r.xp6(1),r.Q6J("ngIf",a.companyControl&&a.companyControl.invalid),r.xp6(6),r.Q6J("ngIf",a.phoneControl&&a.phoneControl.invalid))},directives:[n._Y,n.JL,n.sg,l.KE,l.hX,n.Fj,C.Nt,n.JJ,n.u,n.nD,m.O5,h.gD,m.sg,v.lW,l.TO,_.ey],styles:["[_nghost-%COMP%]     .mat-select-value{color:#fff!important}"]}),t})()}];let k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[p.Bz.forChild(j)],p.Bz]}),t})();var B=i(9151);let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[m.ez,k,B.q]]}),t})()}}]);