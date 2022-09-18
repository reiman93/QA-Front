"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[2015],{2015:(q,g,s)=>{s.r(g),s.d(g,{ListModule:()=>Q});var f=s(9808),u=s(1083),t=s(5e3),A=s(9646),Z=s(262),b=s(7886),v=s(520),d=s(4004),C=s(9183),T=s(7429);const m={headers:new v.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"})};let y=(()=>{class i{constructor(e,n){this.httpClient=e,this.enviroment=n,this.url=C.H}findAllPagination(e,n,o,r){return this.httpClient.post(this.enviroment.config.url+"storeDepartment",{skip:e,take:n,sortField:o,orSearchFields:r,select:[]}).pipe((0,d.U)(c=>(console.warn("data que retorna el servicio",c),c.data.department)))}get(e,n){return this.httpClient.get(this.enviroment.config.url+n+"/"+e,m).pipe((0,d.U)(o=>o))}create(e,n){return this.httpClient.get(this.enviroment.config.url+n,{}).pipe((0,d.U)(o=>o))}delete(e,n){return this.httpClient.delete(this.enviroment.config.url+n+"/"+e[0],m).pipe((0,d.U)(o=>o))}deleteMany(e,n){return this.httpClient.post(this.enviroment.config.url+n,{ids:e},m).pipe((0,d.U)(o=>o))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(v.eN),t.LFG(T.y))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var L=s(4673),S=s(8966),x=s(7423),p=s(9386),h=s(4999),D=s(5245);const M=["tabla"];function U(i,a){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function w(i,a){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.hij(" ",e.description," ")}}function O(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"td",19),t.TgZ(1,"div",20),t.TgZ(2,"div",21),t.TgZ(3,"button",22),t.NdJ("click",function(o){const l=t.CHM(e).$implicit,c=t.oxw();return o.stopPropagation(),c.update(l.id)}),t.TgZ(4,"mat-icon"),t._uU(5,"edit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}const E=function(){return["../create"]},B=function(){return[5,10,25,100]},R=[{path:"",component:(()=>{class i{constructor(e,n,o,r){this.service=e,this.router=n,this.snakBarService=o,this.dialog=r,this.emitter=new t.vpe,this.hideOptions=!1,this.slectedRows=!0}emitSelectedValues(e){this.emitter.emit(e)}ngOnInit(){console.warn("ngOnInit",this.hideOptions,"este es el valoir del hide")}ngAfterViewInit(){this.service.findAllPagination().subscribe({next:e=>{this.result=e.items,console.warn("resultado de la tabla",this.result)},error:e=>{console.log("error",e),this.snakBarService.openSnackBar("Error al obtener los datos.","cerrar",{},"error")},complete:()=>console.info("complete")}),this.tabla.selection.changed.subscribe(e=>{console.warn("esto es lo que cambia",e),this.slectedRows=0===e.source.selected.length;const n=new Array;this.result.forEach((o,r)=>{-1!=e.source.selected.indexOf(o.id)&&n.push(o)}),this.emitSelectedValues(n)})}update(e){this.router.navigate(["pages/department/edit",e])}deleteMany(){this.dialog.open(b.G,{data:{value:1,message:"\xbfEst\xe1 seguro que desea eliminar el(los) elemento(s) seleccionado(s)?."}}).afterClosed().subscribe(n=>{if("accept"==n){const o=new Array;this.tabla.selection.selected.forEach((r,l)=>{o.push(r)}),0!=this.tabla.selection.selected.length&&this.service.deleteMany(o,"deleteManyDepartment").pipe((0,Z.K)(r=>(this.snakBarService.openSnackBar(r,""),(0,A.of)([])))).subscribe(()=>{var r,l,c;o.length>1?null===(r=this.snakBarService)||void 0===r||r.openSnackBar("Los elementos seleccionados han sido eliminados satisfactoriamente",""):null===(l=this.snakBarService)||void 0===l||l.openSnackBar("El elemento ha sido eliminado satisfactoriamente",""),null===(c=this.tabla)||void 0===c||c.selection.clear(),this.tabla.reloadData()})}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(y),t.Y36(u.F0),t.Y36(L.A),t.Y36(S.uw))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-equipment"]],viewQuery:function(e,n){if(1&e&&t.Gf(M,5),2&e){let o;t.iGM(o=t.CRH())&&(n.tabla=o.first)}},inputs:{hideOptions:"hideOptions"},outputs:{emitter:"emitter",emitSelectedValues:"emitSelectedValues"},decls:28,vars:10,consts:[[1,"row"],[1,"col-xl-10","mx-auto"],[1,"mb-0","text-uppercase"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"buttons-row"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"selectAvailable","serviceData","verticalLine"],["tabla",""],["title","Nombre","matColumnDef","name","type","string",3,"sort"],["mat-cell","","style","text-align: right",4,"matCellDef"],["title","Descripcion","matColumnDef","description","type","string",3,"sort"],[2,"display","none"],["title","Opciones","matColumnDef","unknow"],["mat-cell","","style","padding-right: 0",4,"matCellDef"],[3,"pageSizeOptions"],["mat-raised-button","","color","warn",3,"click"],["mat-cell","",2,"text-align","right"],["mat-cell","",2,"padding-right","0"],[2,"text-align","center"],[2,"display","inline-flex"],["mat-icon-button","","mat-button","",3,"click"]],template:function(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h6",2),t._uU(3,"departamento"),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"div",3),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"button",6),t._uU(9," Adicionar "),t.qZA(),t.TgZ(10,"button",7),t.NdJ("click",function(l){return l.stopPropagation(),n.deleteMany()}),t._uU(11," Eliminar "),t.qZA(),t.qZA(),t._UZ(12,"hr"),t.TgZ(13,"app-mat-data-table",8,9),t.TgZ(15,"app-mat-column-table",10),t.YNc(16,U,2,1,"td",11),t.qZA(),t.TgZ(17,"app-mat-column-table",12),t.YNc(18,w,2,1,"td",11),t.qZA(),t._UZ(19,"div",13),t.TgZ(20,"app-mat-option-table",14),t.YNc(21,O,6,0,"td",15),t.qZA(),t._UZ(22,"app-mat-paginator-data-table",16),t.TgZ(23,"app-mat-error-data-table"),t._uU(24," Existen problemas al cargar los datos. "),t._UZ(25,"br"),t.TgZ(26,"button",17),t.NdJ("click",function(){return t.CHM(o),t.MAs(14).reloadData()}),t._uU(27," Recargar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(8),t.Q6J("routerLink",t.DdM(8,E)),t.xp6(2),t.Q6J("disabled",n.slectedRows),t.xp6(3),t.Q6J("selectAvailable",!0)("serviceData",n.service)("verticalLine",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(5),t.Q6J("pageSizeOptions",t.DdM(9,B)))},directives:[x.lW,u.rH,p.Zc,p.PT,h.w1,h.Dz,p.TD,p.y0,p.DV,h.ev,D.Hw],styles:[""]}),i})()}];let F=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.Bz.forChild(R)],u.Bz]}),i})();var J=s(6596),k=s(9151);let Q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.ez,F,J.V,k.q]]}),i})()}}]);