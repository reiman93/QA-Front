"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[6567],{6567:(J,p,o)=>{o.r(p),o.d(p,{ListModule:()=>E});var g=o(9808),u=o(1083),t=o(5e3),h=o(9646),v=o(262),f=o(7886),Z=o(5801),b=o(4673),A=o(8966),T=o(7423),c=o(9386),m=o(4999),y=o(5245);const C=["tabla"];function L(i,r){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=r.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function x(i,r){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=r.$implicit;t.xp6(1),t.hij(" ",e.description," ")}}function S(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"td",19),t.TgZ(1,"div",20),t.TgZ(2,"div",21),t.TgZ(3,"button",22),t.NdJ("click",function(n){const l=t.CHM(e).$implicit,d=t.oxw();return n.stopPropagation(),d.update(l.id)}),t.TgZ(4,"mat-icon"),t._uU(5,"edit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}const M=function(){return["../create"]},D=function(){return[5,10,25,100]},w=[{path:"",component:(()=>{class i{constructor(e,s,n,a){this.service=e,this.router=s,this.snakBarService=n,this.dialog=a,this.emitter=new t.vpe,this.hideOptions=!1,this.slectedRows=!0}emitSelectedValues(e){this.emitter.emit(e)}ngOnInit(){console.warn("ngOnInit",this.hideOptions,"este es el valoir del hide")}ngAfterViewInit(){this.service.findAllPagination().subscribe({next:e=>{this.result=e.items,console.warn("resultado de la tabla",this.result),this.result.forEach((n,a)=>{console.warn("mierda pasa aki con esto ",n.id)})},error:e=>{console.log("error",e),this.snakBarService.openSnackBar("Error al obtener los datos.","cerrar",{},"error")},complete:()=>console.info("complete")}),this.tabla.selection.changed.subscribe(e=>{console.warn("esto es lo que cambia",e),this.slectedRows=0===e.source.selected.length;const s=new Array;this.result.forEach((n,a)=>{-1!=e.source.selected.indexOf(n.id)&&s.push(n)}),this.emitSelectedValues(s)})}update(e){this.router.navigate(["pages/actions/edit",e])}deleteMany(){this.dialog.open(f.G,{data:{value:1,message:"\xbfEst\xe1 seguro que desea eliminar el(los) elemento(s) seleccionado(s)?."}}).afterClosed().subscribe(s=>{if("accept"==s){const n=new Array;this.tabla.selection.selected.forEach((a,l)=>{n.push(a)}),0!=this.tabla.selection.selected.length&&this.service.deleteMany(n,"deleteManyRelapseAction").pipe((0,v.K)(a=>(this.snakBarService.openSnackBar(a,""),(0,h.of)([])))).subscribe(()=>{var a,l,d;n.length>1?null===(a=this.snakBarService)||void 0===a||a.openSnackBar("Los elementos seleccionados han sido eliminados satisfactoriamente",""):null===(l=this.snakBarService)||void 0===l||l.openSnackBar("El elemento ha sido eliminado satisfactoriamente",""),null===(d=this.tabla)||void 0===d||d.selection.clear(),this.tabla.reloadData()})}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z.b),t.Y36(u.F0),t.Y36(b.A),t.Y36(A.uw))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-equipment"]],viewQuery:function(e,s){if(1&e&&t.Gf(C,5),2&e){let n;t.iGM(n=t.CRH())&&(s.tabla=n.first)}},inputs:{hideOptions:"hideOptions"},outputs:{emitter:"emitter",emitSelectedValues:"emitSelectedValues"},decls:28,vars:10,consts:[[1,"row"],[1,"col-xl-10","mx-auto"],[1,"mb-0","text-uppercase"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"buttons-row"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"selectAvailable","serviceData","verticalLine"],["tabla",""],["title","Nombre","matColumnDef","name","type","string",3,"sort"],["mat-cell","","style","text-align: right",4,"matCellDef"],["title","Descripcion","matColumnDef","description","type","string",3,"sort"],[2,"display","none"],["title","Opciones","matColumnDef","unknow"],["mat-cell","","style","padding-right: 0",4,"matCellDef"],[3,"pageSizeOptions"],["mat-raised-button","","color","warn",3,"click"],["mat-cell","",2,"text-align","right"],["mat-cell","",2,"padding-right","0"],[2,"text-align","center"],[2,"display","inline-flex"],["mat-icon-button","","mat-button","",3,"click"]],template:function(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h6",2),t._uU(3,"Acciones corectivas"),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"div",3),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"button",6),t._uU(9," Adicionar "),t.qZA(),t.TgZ(10,"button",7),t.NdJ("click",function(l){return l.stopPropagation(),s.deleteMany()}),t._uU(11," Eliminar "),t.qZA(),t.qZA(),t._UZ(12,"hr"),t.TgZ(13,"app-mat-data-table",8,9),t.TgZ(15,"app-mat-column-table",10),t.YNc(16,L,2,1,"td",11),t.qZA(),t.TgZ(17,"app-mat-column-table",12),t.YNc(18,x,2,1,"td",11),t.qZA(),t._UZ(19,"div",13),t.TgZ(20,"app-mat-option-table",14),t.YNc(21,S,6,0,"td",15),t.qZA(),t._UZ(22,"app-mat-paginator-data-table",16),t.TgZ(23,"app-mat-error-data-table"),t._uU(24," Existen problemas al cargar los datos. "),t._UZ(25,"br"),t.TgZ(26,"button",17),t.NdJ("click",function(){return t.CHM(n),t.MAs(14).reloadData()}),t._uU(27," Recargar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(8),t.Q6J("routerLink",t.DdM(8,M)),t.xp6(2),t.Q6J("disabled",s.slectedRows),t.xp6(3),t.Q6J("selectAvailable",!0)("serviceData",s.service)("verticalLine",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(5),t.Q6J("pageSizeOptions",t.DdM(9,D)))},directives:[T.lW,u.rH,c.Zc,c.PT,m.w1,m.Dz,c.TD,c.y0,c.DV,m.ev,y.Hw],styles:[""]}),i})()}];let B=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.Bz.forChild(w)],u.Bz]}),i})();var U=o(6596),k=o(9151);let E=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[g.ez,B,U.V,k.q]]}),i})()}}]);