(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3JFK":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var i=r("qFEQ"),n=r("GAih"),o=r("cc5W"),c=r("EM62");let s=(()=>{class t{}return t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({factory:function(e){return new(e||t)},imports:[[i.i,n.e,o.l],i.i,n.e,o.l]}),t})()},D57K:function(t,e,r){"use strict";function i(t,e,r,i){var n,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c}r.d(e,"a",(function(){return i}))},R3BP:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return l}));var i=r("9bRT"),n=r("5XID"),o=r("XApm"),c=r("EM62");const s="blockUi";let l=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(s,this),t.registry.changes.subscribe((t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}})),e.events.subscribe((t=>{if("onDataSource"===t.kind){const{prev:e,curr:r}=t;e&&o.x.unrx.kill(this,e),r.onSourceChanging.pipe(o.x.unrx(this,r)).subscribe((()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())})),r.onSourceChanged.pipe(o.x.unrx(this,r)).subscribe((()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())}))}}))}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(n.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(i.a)(t)&&this._blockUi!==t?(Object(i.a)(this._blockUi)&&o.x.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(o.x.unrx(this,this._blockUi)).subscribe((t=>{this._blockInProgress=t,this.setupBlocker()}))):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){o.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(o.h),c.Sb(o.o))},t.\u0275dir=c.Nb({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},S3zY:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return s}));var i=r("XApm"),n=r("EM62"),o=r("cePI");const c="matSort";let s=(()=>{class t{constructor(t,e,r){this.table=t,this.pluginCtrl=e,this.sort=r,this._removePlugin=e.setPlugin(c,this);let n="click";this.sort.sortChange.pipe(i.x.unrx(this)).subscribe((t=>{this.onSort(t,n),n="click"}));const o=t=>{const{column:e}=t,r=t.sort?t.sort.order:void 0;if(this.sort&&e){if(this.sort.active===e.id&&this.sort.direction===(r||""))return;const t=this.sort.sortables.get(e.id);t&&(n="ds",this.sort.active=void 0,t.start=r||"asc",t._handleClick())}else if(this.sort.active){const t=this.sort.sortables.get(this.sort.active);if(t){if(!t.disableClear){let e;for(;e=this.sort.getNextSortDirection(t);)this.sort.direction=e}n="ds",t._handleClick()}}};e.events.subscribe((e=>{if("onInvalidateHeaders"===e.kind){const e=this.sort&&this.sort.active;t.ds&&t.ds.sort&&(!t.ds.sort.column&&e?this.onSort({active:this.sort.active,direction:this.sort.direction||"asc"},n):t.ds.sort.column&&!e&&setTimeout((()=>o(t.ds.sort))))}"onDataSource"===e.kind&&(i.x.unrx.kill(this,e.prev),this.sort&&this.sort.active&&this.onSort({active:this.sort.active,direction:this.sort.direction||"asc"},n),t.ds.sortChange.pipe(i.x.unrx(this,e.curr)).subscribe((t=>{o(t)})))}))}ngOnDestroy(){this._removePlugin(this.table),i.x.unrx.kill(this)}onSort(t,e){const r=this.table,i=r.columnApi.visibleColumns.find((e=>e.id===t.active));if("click"===e&&i&&i.sort){const e={},n="function"==typeof i.sort&&i.sort;t.direction&&(e.order=t.direction),n&&(e.sortFn=n);const o=r.ds.sort;if(i===o.column&&e.order===(o.sort||{}).order)return;r.ds.setSort(i,e)}}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(i.h),n.Sb(i.o),n.Sb(o.a))},t.\u0275dir=n.Nb({type:t,selectors:[["pbl-ngrid","matSort",""]],exportAs:["pblMatSort"]}),t})()},U31d:function(t,e,r){"use strict";r.r(e),r.d(e,"ColumnHeaderMenuExampleModule",(function(){return U}));var i=r("D57K"),n=r("2kYt"),o=r("Jb3d"),c=r("bFHC"),s=r("XApm"),l=r("WNo/"),a=r("e6z7"),u=r("cc5W"),b=r("3JFK"),d=r("JRn2"),p=r("EM62"),h=r("Ht9o"),m=r("R3BP"),g=r("S3zY"),f=r("cePI"),k=r("H1Fh"),v=r("p3Cn"),y=r("inZm"),x=r("qFEQ");const S=function(t){return{background:t}};function M(t,e){if(1&t&&(p.Yb(0,"div",7),p.Lc(1),p.lc(2,"number"),p.Xb()),2&t){const t=e.value,r=e.col;p.rc("ngridCellStyle",p.tc(5,S,t<0?r.type.data.neg:r.type.data.pos)),p.Gb(1),p.Mc(p.nc(2,2,t,r.type.data.format))}}function P(t,e){if(1&t&&(p.Yb(0,"div",8),p.Yb(1,"mat-icon",9),p.Lc(2,"more_vert"),p.Xb(),p.Xb()),2&t){const t=e.$implicit;p.kc();const r=p.wc(4);p.rc("matMenuTriggerFor",r)("matMenuTriggerData",t)}}function _(t,e){if(1&t&&(p.Yb(0,"button",10),p.gc("click",(function(){const t=e.$implicit;return t.table.columnApi.autoSizeColumn(t.col)})),p.Lc(1,"Auto Fit"),p.Xb(),p.Yb(2,"button",11),p.Lc(3,"Sort"),p.Xb(),p.Yb(4,"button",12),p.Lc(5,"Pin"),p.Xb()),2&t){const t=e.$implicit;p.kc();const r=p.wc(7),i=p.wc(10);p.Gb(2),p.rc("matMenuTriggerFor",r)("matMenuTriggerData",t)("disabled",!t.col.sort),p.Gb(2),p.rc("matMenuTriggerFor",i)("matMenuTriggerData",t)}}function C(t,e){1&t&&(p.Yb(0,"button",10),p.gc("click",(function(){return e.$implicit.table.ds.setSort()})),p.Lc(1,"None"),p.Xb(),p.Yb(2,"button",10),p.gc("click",(function(){const t=e.$implicit;return t.table.ds.setSort(t.col,{order:"asc"})})),p.Lc(3,"Asc"),p.Xb(),p.Yb(4,"button",10),p.gc("click",(function(){const t=e.$implicit;return t.table.ds.setSort(t.col,{order:"desc"})})),p.Lc(5,"Desc"),p.Xb())}function w(t,e){1&t&&(p.Yb(0,"button",10),p.gc("click",(function(){return e.$implicit.col.columnDef.updatePin()})),p.Lc(1,"Unpin"),p.Xb(),p.Yb(2,"button",10),p.gc("click",(function(){return e.$implicit.col.columnDef.updatePin("start")})),p.Lc(3,"Pin Start"),p.Xb(),p.Yb(4,"button",10),p.gc("click",(function(){return e.$implicit.col.columnDef.updatePin("end")})),p.Lc(5,"Pin End"),p.Xb())}const D={name:"accountBalance",data:{neg:"rgba(255, 0, 0, 0.33)",pos:"rgba(0, 128, 0, 0.33)",format:"1.0-2"}};let j=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(s.s)().default({minWidth:100,resize:!0}).table({prop:"id",width:"40px"},{prop:"name",sort:!0,reorder:!0},{prop:"jobTitle"},{prop:"accountId"},{prop:"accountType",reorder:!0},{prop:"primeAccount",type:"visualBool",width:"24px"},{prop:"creditScore",type:"starRatings",width:"50px"},{prop:"balance",type:D,sort:!0},...Array.from(new Array(12)).map(((t,e)=>({prop:`monthlyBalance.${e}`,type:D,sort:!0})))).build(),this.ds=Object(s.t)().onTrigger((()=>this.datasource.getCustomers(500))).create()}};return t.\u0275fac=function(e){return new(e||t)(p.Sb(d.a))},t.\u0275cmp=p.Mb({type:t,selectors:[["pbl-column-header-menu-example"]],decls:12,vars:3,consts:[["blockUi","","matSort","",1,"pbl-ngrid-cell-ellipsis","pbl-ngrid-header-cell-ellipsis",3,"dataSource","columns"],[3,"ngridCellStyle",4,"pblNgridCellTypeDef"],["style","position: absolute; right: 0; height: 100%; cursor: pointer; margin-right: 12px;","fxLayoutAlign","center center",3,"matMenuTriggerFor","matMenuTriggerData",4,"pblNgridHeaderExtensionRef"],["columnMenu","matMenu"],["matMenuContent",""],["columnSortMenu","matMenu"],["columnPinMenu","matMenu"],[3,"ngridCellStyle"],["fxLayoutAlign","center center",2,"position","absolute","right","0","height","100%","cursor","pointer","margin-right","12px",3,"matMenuTriggerFor","matMenuTriggerData"],[2,"height","16px","width","16px","font-size","16px","line-height","16px"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"matMenuTriggerFor","matMenuTriggerData","disabled"],["mat-menu-item","",3,"matMenuTriggerFor","matMenuTriggerData"]],template:function(t,e){1&t&&(p.Yb(0,"pbl-ngrid",0),p.Jc(1,M,3,7,"div",1),p.Jc(2,P,3,2,"div",2),p.Yb(3,"mat-menu",null,3),p.Jc(5,_,6,5,"ng-template",4),p.Xb(),p.Yb(6,"mat-menu",null,5),p.Jc(8,C,6,0,"ng-template",4),p.Xb(),p.Yb(9,"mat-menu",null,6),p.Jc(11,w,6,0,"ng-template",4),p.Xb(),p.Xb()),2&t&&(p.rc("dataSource",e.ds)("columns",e.columns),p.Gb(1),p.rc("pblNgridCellTypeDef","accountBalance"))},directives:[h.a,m.b,g.b,f.a,k.a,v.b,o.f,o.b,y.a,x.e,o.e,c.a,o.c],pipes:[n.g],styles:[""],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(u.e)("pbl-column-header-menu-example",{title:"Column Header Menu"})],t),t})(),U=(()=>{let t=class{};return t.\u0275mod=p.Qb({type:t}),t.\u0275inj=p.Pb({factory:function(e){return new(e||t)},imports:[[n.c,c.b,o.d,b.a,s.l,l.a,a.a]]}),t=Object(i.a)([Object(u.a)(j)],t),t})()},"WNo/":function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var i=r("2kYt"),n=r("fL1z"),o=r("XApm"),c=r("R3BP"),s=r("EM62");let l=(()=>{class t{}return t.NGRID_PLUGIN=Object(o.v)({id:c.a},c.b),t.\u0275mod=s.Qb({type:t}),t.\u0275inj=s.Pb({factory:function(e){return new(e||t)},imports:[[i.c,n.s,o.l]]}),t})()},e6z7:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var i=r("S3zY"),n=r("2kYt"),o=r("cePI"),c=r("PBFl"),s=r("XApm");class l extends s.m{constructor(t){super(),this.cfr=t,this.name="sortContainer",this.kind="dataHeaderExtensions",this.projectContent=!0}shouldRender(t){return!!t.col.sort&&!!t.injector.get(o.a,!1)}getFactory(t){return this.cfr.resolveComponentFactory(o.b)}onCreated(t,e){this.deregisterId(t,e.instance.id=t.col.id),e.changeDetectorRef.markForCheck()}deregisterId(t,e){const r=t.injector.get(o.a),i=r.sortables.get(e);i&&r.deregister(i)}}var a=r("EM62");let u=(()=>{class t{constructor(t,e){this.registry=t,t.addMulti("dataHeaderExtensions",new l(e))}}return t.NGRID_PLUGIN=Object(s.v)({id:i.a},i.b),t.\u0275mod=a.Qb({type:t}),t.\u0275inj=a.Pb({factory:function(e){return new(e||t)(a.cc(s.p),a.cc(a.j))},imports:[[n.c,c.c,o.c,s.l],o.c]}),t})()}}]);