"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[8248],{8248:(F,u,s)=>{s.r(u),s.d(u,{ListModule:()=>I});var f=s(9808),h=s(1083),e=s(5e3),b=s(7511),v=s(651),x=s(3851),A=s(3424),Z=s(3737),C=s(5801),y=s(4366),S=s(7115),T=s(4673),w=s(8966),d=s(9386),g=s(4999),O=s(7423),D=s(5245),J=s(7322),L=s(2368);const M=["tabla"];function N(i,r){if(1&i&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&i){const t=r.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}function U(i,r){if(1&i&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&i){const t=r.$implicit;e.xp6(1),e.hij(" ",t.description," ")}}function B(i,r){if(1&i&&(e.TgZ(0,"td",16),e.TgZ(1,"span",17),e._uU(2),e.qZA(),e.qZA()),2&i){const t=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngClass",o.stateClass[t.id]),e.xp6(1),e.Oqu(t.state)}}function P(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"td",18),e.TgZ(1,"div",19),e.TgZ(2,"div",20),e.TgZ(3,"button",21),e.NdJ("click",function(a){const c=e.CHM(t).$implicit,l=e.oxw();return a.stopPropagation(),l.createPreOperation(c)}),e.TgZ(4,"mat-icon"),e._uU(5,"add"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",22),e.TgZ(7,"mat-label"),e._uU(8,"Si"),e.qZA(),e.qZA(),e.TgZ(9,"div",23),e.TgZ(10,"mat-slide-toggle",24),e.NdJ("click",function(a){return a.stopPropagation()})("change",function(a){const c=e.CHM(t).$implicit;return e.oxw().showModal(a,c)}),e._uU(11," No "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=r.$implicit,o=e.oxw();e.xp6(3),e.Q6J("disabled",o.disabled[t.id]),e.xp6(7),e.Q6J("disabled",o.disabled[t.id])}}const E=function(){return[5,10,25,100]},k=[{path:"",component:(()=>{class i{constructor(t,o,a,n,c,l,m,p,j,z){this.dataGridService=t,this.service=o,this.servicioArea=a,this.servicioJanitor=n,this.servicioAction=c,this.servicioDeficiency=l,this.servicioNotificacion=m,this.router=p,this.snakBarService=j,this.dialog=z,this.emitter=new e.vpe,this.hideOptions=!1,this.slectedRows=!0,this.disabled=[],this.fields=[{label:"Notas",model:"",ref:"notes",class:"col-12",type:"text"}],this.stateClass=[]}emitSelectedValues(t){this.emitter.emit(t)}emitNotifUpdate(t){this.servicioNotificacion.updateNotif()}ngOnInit(){console.warn("ngOnInit",this.hideOptions,"este es el valoir del hide"),this.getAllJanitor(),this.getAllDeficiency(),this.getAllAction(),this.dataGridService.dataGrid.subscribe(t=>{t.forEach((o,a)=>{this.stateClass[o.id]="Pendiente"==o.state?"badge rounded-pill bg-warning text-dark":"Aprobado"==o.state?"badge rounded-pill bg-success text-dark":"badge rounded-pill bg-danger text-dark"})})}getAllJanitor(){this.servicioJanitor.getAll("janitor").subscribe({next:t=>{console.warn("aaaha",t),this.dataJanitor=t.data,console.warn("this.dataArea",this.dataJanitor),console.warn("this.dataArea",this.fields),this.fields.push({label:"Encargado de limpieza",model:"",ref:"janitor",type:"combobox",class:"col-12",data:this.dataJanitor})},error:t=>{console.log("error",t),this.snakBarService.openSnackBar("Error al obtener los datos de los encargados.","cerrar",{},"error")},complete:()=>console.info("complete")})}getAllAction(){this.servicioAction.getAll("relapse_action").subscribe({next:t=>{console.warn("fields sactions",t),this.dataAction=t.data,console.warn("this.dataAction",this.dataAction),console.warn("this.fields",this.fields),this.fields.push({label:"Acci\xf3n correctiva",model:"",ref:"action",type:"combobox",class:"col-12",data:this.dataAction})},error:t=>{console.log("error",t),this.snakBarService.openSnackBar("Error al obtener los datos de las acciones.","cerrar",{},"error")},complete:()=>console.info("complete")})}getAllDeficiency(){this.servicioDeficiency.getAll("deficiency_type").subscribe({next:t=>{console.warn("dataDeficiency asdasd",t),this.dataDeficiency=t.data,console.warn("this.dataDeficiency",this.dataDeficiency),console.warn("this.fields",this.fields),this.fields.push({label:"Tipo de deficiencia",model:"",ref:"deficiency",type:"combobox",class:"col-12",data:this.dataDeficiency})},error:t=>{console.log("error",t),this.snakBarService.openSnackBar("Error al obtener los datos de las deficiencias.","cerrar",{},"error")},complete:()=>console.info("complete")})}ngAfterViewInit(){console.warn("  this.tabla",this.tabla),this.tabla.selection.changed.subscribe(t=>{console.warn("esto es lo que cambia",t),t.added.forEach(a=>{console.warn("value del addd",a),this.disabled[a]=!1}),t.removed.forEach(a=>{console.warn("value del remove",a),this.disabled[a]=!0}),this.slectedRows=0===t.source.selected.length;const o=new Array;this.result.forEach((a,n)=>{-1!=t.source.selected.indexOf(a.id)&&o.push(a)}),this.emitSelectedValues(o)})}createPreOperation(t){let o={id:t.id,aceptable:!0,state:"Aprobado",notes:"Area aporbada",user:JSON.parse(sessionStorage.getItem("currentUser")).username};this.service.addPreOperation(o,"pre_operational").subscribe({next:a=>{this.snakBarService.openSnackBar("Creado correctamente","Cerrar"),this.servicioArea.updateState(o,"updateState").subscribe({next:n=>{this.tabla.reloadData(),this.emitNotifUpdate(!0)},error:n=>{},complete:()=>{}})},error:a=>{this.snakBarService.openSnackBar("Error al crear los datos.","cerrar",{},"error")},complete:()=>console.info("complete")})}showModal(t,o){console.warn("this.fields campos a mostrar en el select del modal",this.fields),t.checked&&this.dialog.open(b.L,{data:{title:"Datos del \xe1rea:"+o.name,fields:this.fields}}).afterClosed().subscribe(n=>{if(console.warn("result",n),n){console.warn("result and id to send services",n,o.id);var c={aceptable:!1,id:o.id,user:JSON.parse(sessionStorage.getItem("currentUser")).username};n.forEach((l,m)=>{Object.assign(c,{[l.ref]:l.model})}),console.warn("result and id to send data ",c),this.service.addPreOperation(c,"pre_operational").subscribe({next:l=>{this.snakBarService.openSnackBar("Creado correctamente","Cerrar")},error:l=>{this.snakBarService.openSnackBar("Error al crear los datos.","cerrar",{},"error")},complete:()=>{console.warn("sessionStorage.getItem('currentUser')",JSON.parse(sessionStorage.getItem("currentUser")));let l={name:"System Info",recived:!1,user:JSON.parse(sessionStorage.getItem("currentUser")).username,description:"El "+o.name+" se detecto en mal estado"};this.servicioNotificacion.create(l,"notification").subscribe({next:p=>{this.emitNotifUpdate(!0)},error:p=>{},complete:()=>{}}),this.servicioArea.updateState({id:o.id,state:"Desaprobado"},"updateState").subscribe({next:p=>{this.tabla.reloadData(),this.emitNotifUpdate(!0)},error:p=>{},complete:()=>{}})}})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v.A),e.Y36(x.e),e.Y36(A.T),e.Y36(Z.u),e.Y36(C.b),e.Y36(y.S),e.Y36(S.T),e.Y36(h.F0),e.Y36(T.A),e.Y36(w.uw))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list-equipment"]],viewQuery:function(t,o){if(1&t&&e.Gf(M,5),2&t){let a;e.iGM(a=e.CRH())&&(o.tabla=a.first)}},inputs:{hideOptions:"hideOptions"},outputs:{emitter:"emitter",emitSelectedValues:"emitSelectedValues"},decls:24,vars:8,consts:[[1,"row"],[1,"col-xl-10","mx-auto"],[1,"mb-0","text-uppercase"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[3,"selectAvailable","serviceData","verticalLine"],["tabla",""],["title","Nombre","matColumnDef","name","type","string",3,"sort"],["mat-cell","","style","text-align: right",4,"matCellDef"],["title","Descripcion","matColumnDef","description","type","string",1,"warning",3,"sort"],["title","Estado","matColumnDef","state","type","string",3,"sort"],[2,"display","none"],["title","Opciones","matColumnDef","unknow"],["mat-cell","","style","padding-right: 0",4,"matCellDef"],[3,"pageSizeOptions"],["mat-raised-button","","color","warn",3,"click"],["mat-cell","",2,"text-align","right"],[3,"ngClass"],["mat-cell","",2,"padding-right","0"],[2,"text-align","center"],[2,"display","inline-flex"],["mat-icon-button","","mat-button","",3,"disabled","click"],[1,"left-space",2,"display","inline-flex"],[1,"buttons-row","left-space",2,"display","inline-flex"],["color","primary",3,"disabled","click","change"]],template:function(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h6",2),e._uU(3,"Pre-Operacion de saniamiento"),e.qZA(),e._UZ(4,"hr"),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"app-mat-data-table",5,6),e.TgZ(9,"app-mat-column-table",7),e.YNc(10,N,2,1,"td",8),e.qZA(),e.TgZ(11,"app-mat-column-table",9),e.YNc(12,U,2,1,"td",8),e.qZA(),e.TgZ(13,"app-mat-column-table",10),e.YNc(14,B,3,2,"td",8),e.qZA(),e._UZ(15,"div",11),e.TgZ(16,"app-mat-option-table",12),e.YNc(17,P,12,2,"td",13),e.qZA(),e._UZ(18,"app-mat-paginator-data-table",14),e.TgZ(19,"app-mat-error-data-table"),e._uU(20," Existen problemas al cargar los datos. "),e._UZ(21,"br"),e.TgZ(22,"button",15),e.NdJ("click",function(){return e.CHM(a),e.MAs(8).reloadData()}),e._uU(23," Recargar "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&t&&(e.xp6(7),e.Q6J("selectAvailable",!0)("serviceData",o.servicioArea)("verticalLine",!0),e.xp6(2),e.Q6J("sort",!0),e.xp6(2),e.Q6J("sort",!0),e.xp6(2),e.Q6J("sort",!0),e.xp6(5),e.Q6J("pageSizeOptions",e.DdM(7,E)))},directives:[d.Zc,d.PT,g.w1,g.Dz,d.TD,d.y0,d.DV,O.lW,g.ev,f.mk,D.Hw,J.hX,L.Rr],styles:["table[_ngcontent-%COMP%]{margin:1rem auto;width:100%;overflow-x:auto;overflow-y:hidden;min-width:500px;box-shadow:-1px 3px 66px #000000bf}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;margin:1rem auto;max-width:100%;padding:1rem}.header-text[_ngcontent-%COMP%]{font-size:24px;font-weight:500;color:#000000de;font-family:Roboto,Helvetica Neue,sans-serif}th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%]{text-align:center;max-width:300px}.mySpacer[_ngcontent-%COMP%]{margin:.5rem!important}.left-space[_ngcontent-%COMP%]{margin-left:10px}  mat-dialog-container{background:#222b45!important}mat-card-title[_ngcontent-%COMP%]{border-bottom:1px solid black;line-height:36px}"]}),i})()}];let Y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[h.Bz.forChild(k)],h.Bz]}),i})();var Q=s(6596),R=s(9151);let I=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[f.ez,Y,Q.V,R.q]]}),i})()}}]);