"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[87],{87:(E,p,i)=>{i.r(p),i.d(p,{ListModule:()=>k});var g=i(9808),m=i(1083),t=i(5e3),h=i(9646),f=i(262),Z=i(7886),v=i(1606),b=i(4673),A=i(8966),T=i(7423),c=i(9386),u=i(4999),y=i(5245);const C=["tabla"];function L(o,a){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function x(o,a){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.address," ")}}function S(o,a){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.gmail," ")}}function D(o,a){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.phone," ")}}function M(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"td",21),t.TgZ(1,"div",22),t.TgZ(2,"div",23),t.TgZ(3,"button",24),t.NdJ("click",function(n){const l=t.CHM(e).$implicit,d=t.oxw();return n.stopPropagation(),d.update(l.id)}),t.TgZ(4,"mat-icon"),t._uU(5,"edit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}const w=function(){return["../create"]},U=function(){return[5,10,25,100]},q=[{path:"",component:(()=>{class o{constructor(e,s,n,r){this.service=e,this.router=s,this.snakBarService=n,this.dialog=r,this.emitter=new t.vpe,this.hideOptions=!1,this.slectedRows=!0}emitSelectedValues(e){this.emitter.emit(e)}ngOnInit(){console.warn("ngOnInit",this.hideOptions,"este es el valoir del hide")}ngAfterViewInit(){this.service.findAllPagination().subscribe({next:e=>{this.result=e.items,console.warn("resultado de la tabla",this.result),this.result.forEach((n,r)=>{console.warn("mierda pasa aki con esto ",n.id)})},error:e=>{console.log("error",e),this.snakBarService.openSnackBar("Error al obtener los datos.","cerrar",{},"error")},complete:()=>console.info("complete")}),this.tabla.selection.changed.subscribe(e=>{console.warn("esto es lo que cambia",e),this.slectedRows=0===e.source.selected.length;const s=new Array;this.result.forEach((n,r)=>{-1!=e.source.selected.indexOf(n.id)&&s.push(n)}),this.emitSelectedValues(s)})}update(e){this.router.navigate(["pages/laboratory/edit",e])}deleteMany(){this.dialog.open(Z.G,{data:{value:1,message:"\xbfEst\xe1 seguro que desea eliminar el(los) elemento(s) seleccionado(s)?."}}).afterClosed().subscribe(s=>{if("accept"==s){const n=new Array;this.tabla.selection.selected.forEach((r,l)=>{n.push(r)}),0!=this.tabla.selection.selected.length&&this.service.deleteMany(n,"deleteManyLaboratory").pipe((0,f.K)(r=>(this.snakBarService.openSnackBar(r,""),(0,h.of)([])))).subscribe(()=>{var r,l,d;n.length>1?null===(r=this.snakBarService)||void 0===r||r.openSnackBar("Los elementos seleccionados han sido eliminados satisfactoriamente",""):null===(l=this.snakBarService)||void 0===l||l.openSnackBar("El elemento ha sido eliminado satisfactoriamente",""),null===(d=this.tabla)||void 0===d||d.selection.clear(),this.tabla.reloadData()})}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v.v),t.Y36(m.F0),t.Y36(b.A),t.Y36(A.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-equipment"]],viewQuery:function(e,s){if(1&e&&t.Gf(C,5),2&e){let n;t.iGM(n=t.CRH())&&(s.tabla=n.first)}},inputs:{hideOptions:"hideOptions"},outputs:{emitter:"emitter",emitSelectedValues:"emitSelectedValues"},decls:32,vars:12,consts:[[1,"row"],[1,"col-xl-10","mx-auto"],[1,"mb-0","text-uppercase"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"buttons-row"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"selectAvailable","serviceData","verticalLine"],["tabla",""],["title","Nombre","matColumnDef","name","type","string",3,"sort"],["mat-cell","","style","text-align: right",4,"matCellDef"],["title","Direccion","matColumnDef","address","type","string",3,"sort"],["title","Correo","matColumnDef","gmail","type","string",3,"sort"],["title","Numero de telefono","matColumnDef","phone","type","number",3,"sort"],[2,"display","none"],["title","Opciones","matColumnDef","unknow"],["mat-cell","","style","padding-right: 0",4,"matCellDef"],[3,"pageSizeOptions"],["mat-raised-button","","color","warn",3,"click"],["mat-cell","",2,"text-align","right"],["mat-cell","",2,"padding-right","0"],[2,"text-align","center"],[2,"display","inline-flex"],["mat-icon-button","","mat-button","",3,"click"]],template:function(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h6",2),t._uU(3,"Laboratorio"),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"div",3),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"button",6),t._uU(9," Adicionar "),t.qZA(),t.TgZ(10,"button",7),t.NdJ("click",function(l){return l.stopPropagation(),s.deleteMany()}),t._uU(11," Eliminar "),t.qZA(),t.qZA(),t._UZ(12,"hr"),t.TgZ(13,"app-mat-data-table",8,9),t.TgZ(15,"app-mat-column-table",10),t.YNc(16,L,2,1,"td",11),t.qZA(),t.TgZ(17,"app-mat-column-table",12),t.YNc(18,x,2,1,"td",11),t.qZA(),t.TgZ(19,"app-mat-column-table",13),t.YNc(20,S,2,1,"td",11),t.qZA(),t.TgZ(21,"app-mat-column-table",14),t.YNc(22,D,2,1,"td",11),t.qZA(),t._UZ(23,"div",15),t.TgZ(24,"app-mat-option-table",16),t.YNc(25,M,6,0,"td",17),t.qZA(),t._UZ(26,"app-mat-paginator-data-table",18),t.TgZ(27,"app-mat-error-data-table"),t._uU(28," Existen problemas al cargar los datos. "),t._UZ(29,"br"),t.TgZ(30,"button",19),t.NdJ("click",function(){return t.CHM(n),t.MAs(14).reloadData()}),t._uU(31," Recargar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(8),t.Q6J("routerLink",t.DdM(10,w)),t.xp6(2),t.Q6J("disabled",s.slectedRows),t.xp6(3),t.Q6J("selectAvailable",!0)("serviceData",s.service)("verticalLine",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(5),t.Q6J("pageSizeOptions",t.DdM(11,U)))},directives:[T.lW,m.rH,c.Zc,c.PT,u.w1,u.Dz,c.TD,c.y0,c.DV,u.ev,y.Hw],styles:[""]}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.Bz.forChild(q)],m.Bz]}),o})();var J=i(6596),Q=i(9151);let k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.ez,B,J.V,Q.q]]}),o})()}}]);