"use strict";(self.webpackChunkQASystem=self.webpackChunkQASystem||[]).push([[6536],{6536:(O,m,o)=>{o.r(m),o.d(m,{ListModule:()=>Q});var p=o(9808),d=o(1083),t=o(5e3),g=o(9646),h=o(262),f=o(7886),Z=o(5519),v=o(4673),b=o(8966),A=o(7423),c=o(9386),u=o(4999),T=o(5245);const y=["tabla"];function C(e,n){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.hij(" ",i.name," ")}}function L(e,n){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.hij(" ",i.date," ")}}function x(e,n){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.hij(" ",i.state_analisys.name," ")}}function S(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"td",20),t.TgZ(1,"div",21),t.TgZ(2,"div",22),t.TgZ(3,"button",23),t.NdJ("click",function(a){const r=t.CHM(i).$implicit,R=t.oxw();return a.stopPropagation(),R.update(r.id)}),t.TgZ(4,"mat-icon"),t._uU(5,"edit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}const D=function(){return["../create"]},M=function(){return[5,10,25,100]},q=[{path:"",component:(()=>{class e{constructor(i,s,a,l){this.service=i,this.router=s,this.snakBarService=a,this.dialog=l,this.emitter=new t.vpe,this.hideOptions=!1,this.slectedRows=!0}emitSelectedValues(i){this.emitter.emit(i)}ngOnInit(){console.warn("ngOnInit",this.hideOptions,"este es el valoir del hide")}ngAfterViewInit(){this.tabla.selection.changed.subscribe(i=>{console.warn("esto es lo que cambia",i),this.slectedRows=0===i.source.selected.length;const s=new Array;this.result.forEach((a,l)=>{-1!=i.source.selected.indexOf(a.id)&&s.push(a)}),this.emitSelectedValues(s)})}update(i){this.router.navigate(["pages/simple-request-form/edit",i])}deleteMany(){this.dialog.open(f.G,{data:{value:1,message:"Are you sure you want to delete the selected item(s)?."}}).afterClosed().subscribe(s=>{if("accept"==s){const a=new Array;this.tabla.selection.selected.forEach((l,r)=>{a.push(l)}),0!=this.tabla.selection.selected.length&&this.service.deleteMany(a,"deleteManySampleRequestForms").pipe((0,h.K)(l=>(this.snakBarService.openSnackBar(l,""),(0,g.of)([])))).subscribe(()=>{var l,r;null===(l=this.snakBarService)||void 0===l||l.openSnackBar("The selected item(s) have been successfully deleted",""),null===(r=this.tabla)||void 0===r||r.selection.clear(),this.tabla.reloadData()})}})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(Z.I),t.Y36(d.F0),t.Y36(v.A),t.Y36(b.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-equipment"]],viewQuery:function(i,s){if(1&i&&t.Gf(y,5),2&i){let a;t.iGM(a=t.CRH())&&(s.tabla=a.first)}},inputs:{hideOptions:"hideOptions"},outputs:{emitter:"emitter",emitSelectedValues:"emitSelectedValues"},decls:30,vars:11,consts:[[1,"row"],[1,"col-xl-10","mx-auto"],[1,"mb-0","text-uppercase"],[1,"card","border-top","border-0","border-4","border-white"],[1,"card-body","p-5"],[1,"buttons-row"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"selectAvailable","serviceData","verticalLine"],["tabla",""],["title","Name","matColumnDef","ip","type","string",3,"sort"],["mat-cell","","style","text-align: right",4,"matCellDef"],["title","Date","matColumnDef","date","type","date",3,"sort"],["title","Analysis state","matColumnDef","state_analisys[0].name","type","string",3,"sort"],[2,"display","none"],["title","Options","matColumnDef","unknow"],["mat-cell","","style","padding-right: 0",4,"matCellDef"],[3,"pageSizeOptions"],["mat-raised-button","","color","warn",3,"click"],["mat-cell","",2,"text-align","right"],["mat-cell","",2,"padding-right","0"],[2,"text-align","center"],[2,"display","inline-flex"],["mat-icon-button","","mat-button","",3,"click"]],template:function(i,s){if(1&i){const a=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h6",2),t._uU(3,"Sample request form"),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"div",3),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"button",6),t._uU(9," Add "),t.qZA(),t.TgZ(10,"button",7),t.NdJ("click",function(r){return r.stopPropagation(),s.deleteMany()}),t._uU(11," Delete "),t.qZA(),t.qZA(),t._UZ(12,"hr"),t.TgZ(13,"app-mat-data-table",8,9),t.TgZ(15,"app-mat-column-table",10),t.YNc(16,C,2,1,"td",11),t.qZA(),t.TgZ(17,"app-mat-column-table",12),t.YNc(18,L,2,1,"td",11),t.qZA(),t.TgZ(19,"app-mat-column-table",13),t.YNc(20,x,2,1,"td",11),t.qZA(),t._UZ(21,"div",14),t.TgZ(22,"app-mat-option-table",15),t.YNc(23,S,6,0,"td",16),t.qZA(),t._UZ(24,"app-mat-paginator-data-table",17),t.TgZ(25,"app-mat-error-data-table"),t._uU(26," There are problems to load data. "),t._UZ(27,"br"),t.TgZ(28,"button",18),t.NdJ("click",function(){return t.CHM(a),t.MAs(14).reloadData()}),t._uU(29," Reload "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&i&&(t.xp6(8),t.Q6J("routerLink",t.DdM(9,D)),t.xp6(2),t.Q6J("disabled",s.slectedRows),t.xp6(3),t.Q6J("selectAvailable",!0)("serviceData",s.service)("verticalLine",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(2),t.Q6J("sort",!0),t.xp6(5),t.Q6J("pageSizeOptions",t.DdM(10,M)))},directives:[A.lW,d.rH,c.Zc,c.PT,u.w1,u.Dz,c.TD,c.y0,c.DV,u.ev,T.Hw],styles:[""]}),e})()}];let U=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(q)],d.Bz]}),e})();var w=o(6596),J=o(9151);let Q=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,U,w.V,J.q]]}),e})()}}]);