(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"M1+n":function(e,t,i){"use strict";i.d(t,"a",function(){return F});var n=i("ugF5"),s=i("ofXK"),o=i("f6nW"),r=i("XEBs"),l=i("4dOD"),a=i("NRLV"),c=i("fdU2"),d=i("fXoL"),h=i("HPSf"),g=i("ejGh"),p=i("Y4Xh"),u=i("OzR9"),w=i("tQNW"),R=i("Lj3m"),f=i("ntJ3"),b=i("lcGA"),D=i("mxEP"),m=i("P2FH"),x=i("L3Ad"),v=i("aR4q"),C=i("IJFs"),_=i("wl19"),k=i("dbCt"),P=i("tGSV"),y=i("ukFO"),E=i("jnpC"),O=i("IO+B"),A=i("z6lm"),M=i("7WRX"),T=i("yNqP"),j=i("nve3"),S=i("XkVd"),L=i("rIse"),N=i("MOZf");let F=(()=>{class e{}return e.NGRID_PLUGIN=Object(r.v)({id:n.a},n.b),e.\u0275mod=d.Pb({type:e}),e.\u0275inj=d.Ob({factory:function(t){return new(t||e)},imports:[[s.c,o.r,r.k,l.a]]}),e})();d.Ac(a.a,[s.q,s.r,s.s,s.t,s.A,s.w,s.x,s.y,s.z,s.u,s.v,o.q,o.p,o.c,o.d,o.k,o.g,o.e,o.b,o.o,o.j,o.f,o.l,o.m,o.h,o.i,o.t,o.v,o.u,o.s,o.n,o.w,h.a,h.b,g.a,p.a,u.a,w.a,R.a,f.b,b.a,D.a,m.a,x.a,v.a,C.a,_.a,k.a,P.a,y.a,E.a,O.a,A.a,M.a,T.a,j.a,S.a,L.c,N.a,n.b,c.a,a.c,a.b,a.a],[s.b,s.G,s.p,s.k,s.E,s.g,s.C,s.F,s.d,s.f,s.i,s.j,s.l])},MOZf:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i("8LU1"),s=i("XEBs"),o=i("fXoL");let r=(()=>{class e{constructor(e,t,i){this._click=!1,this._dblClick=!1,i.onInit().subscribe(()=>{this.targetEventsPlugin=i.getPlugin("targetEvents")||i.createPlugin("targetEvents"),this.update()})}set cellEditClick(e){e=Object(n.c)(e),this._click!==e&&(this._click=e,this.update())}set cellEditDblClick(e){e=Object(n.c)(e),this._dblClick!==e&&(this._dblClick=e,this.update())}ngOnDestroy(){s.x.unrx.kill(this)}update(){this.targetEventsPlugin&&(s.x.unrx.kill(this,this.targetEventsPlugin),this._click&&this.targetEventsPlugin.cellClick.pipe(s.x.unrx(this,this.targetEventsPlugin)).subscribe(e=>{"data"===e.type&&e.column.editable&&e.context.startEdit(!0)}),this._dblClick&&this.targetEventsPlugin.cellDblClick.pipe(s.x.unrx(this,this.targetEventsPlugin)).subscribe(e=>{"data"===e.type&&e.column.editable&&e.context.startEdit(!0)}))}}return e.\u0275fac=function(t){return new(t||e)(o.Rb(s.g),o.Rb(o.v),o.Rb(s.n))},e.\u0275dir=o.Mb({type:e,selectors:[["pbl-ngrid","cellEditClick",""],["pbl-ngrid","cellEditDblClick",""]],inputs:{cellEditClick:"cellEditClick",cellEditDblClick:"cellEditDblClick"}}),e})()},NRLV:function(e,t,i){"use strict";i.d(t,"b",function(){return r}),i.d(t,"c",function(){return l}),i.d(t,"a",function(){return c});var n=i("XEBs"),s=i("fXoL");function o(e,t){1&e&&s.Sb(0,"pbl-ngrid-row",1)}let r=(()=>{class e extends n.r{constructor(e,t){super(e,t),this.kind="detailRow"}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(s.Q),s.Rb(n.o))},e.\u0275dir=s.Mb({type:e,selectors:[["","pblNgridDetailRowDef",""]],inputs:{hasAnimation:["pblNgridDetailRowDefHasAnimation","hasAnimation"]},features:[s.Cb]}),e})(),l=(()=>{class e extends n.q{ngOnInit(){this.registry.setSingle("detailRowParent",this)}ngOnDestroy(){this.registry.getSingle("detailRowParent")===this&&this.registry.setSingle("detailRowParent",void 0)}}return e.\u0275fac=function(t){return a(t||e)},e.\u0275dir=s.Mb({type:e,selectors:[["","pblNgridDetailRowParentRef",""]],inputs:{columns:["pblNgridDetailRowParentRef","columns"],when:["pblNgridDetailRowParentRefWhen","when"]},features:[s.Cb]}),e})();const a=s.Zb(l);let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Lb({type:e,selectors:[["pbl-ngrid-default-detail-row-parent"]],decls:1,vars:0,consts:[["detailRow","",4,"pblNgridDetailRowParentRef"],["detailRow",""]],template:function(e,t){1&e&&s.Jc(0,o,1,0,"pbl-ngrid-row",0)},encapsulation:2}),e})()},fdU2:function(e,t,i){"use strict";i.d(t,"a",function(){return g});var n=i("fXoL"),s=i("FtGj"),o=i("f6nW"),r=i("XEBs"),l=i("ugF5");const a=["viewRef"],c=["detailRow",""],d=[[["",8,"pbl-ngrid-row-prefix"]],[["",8,"pbl-ngrid-row-suffix"]]],h=[".pbl-ngrid-row-prefix",".pbl-ngrid-row-suffix"];let g=(()=>{class e extends r.p{constructor(){super(...arguments),this.opened=!1}get expended(){return this.opened}get height(){return super.height+this.controller.getDetailRowHeight(this)}get row(){return this.context.$implicit}ngOnInit(){super.ngOnInit(),this.plugin.addDetailRow(this);const e=this._extApi.pluginCtrl.getPlugin("targetEvents");e.cellClick.pipe(r.x.unrx(this)).subscribe(e=>{if("data"===e.type&&e.row===this.context.$implicit){const{excludeToggleFrom:t}=this.plugin;t&&t.some(t=>e.column.id===t)||this.toggle()}}),e.rowClick.pipe(r.x.unrx(this)).subscribe(e=>{e.root||"data"!==e.type||e.row!==this.context.$implicit||this.toggle()})}ngOnDestroy(){r.x.unrx.kill(this),this.plugin.removeDetailRow(this),this.controller.clearDetailRow(this,!0),super.ngOnDestroy()}updateRow(){if(super.updateRow()){switch(this.plugin.whenContextChange){case"context":const e=!!this.context.getExternal("detailRow");e&&this.opened?this.controller.updateDetailRow(this):this.toggle(e,!0);break;case"render":this.opened&&this.controller.updateDetailRow(this);break;case"close":this.toggle(!1,!0)}return this.plugin.markForCheck(),this.controller.detectChanges(this),this.plugin.toggledRowContextChange.next(this),!0}return!1}toggle(e,t=!1){if(this.opened!==e){let e=!1;this.opened?(this.controller.clearDetailRow(this,t),this.element.classList.remove("pbl-row-detail-opened")):this.controller.render(this,t)&&(e=!0,this.element.classList.add("pbl-row-detail-opened")),this.opened!==e&&(this.opened=e,this.context.setExternal("detailRow",e,!0),this.plugin.detailRowToggled(this))}}handleKeydown(e){if(e.target===this.element){const t=e.keyCode;(t===s.f||t===s.n)&&(e.preventDefault(),this.toggle())}}onCtor(){super.onCtor(),this.plugin=this._extApi.pluginCtrl.getPlugin(l.a),this.controller=this.plugin.detailRowCtrl}}return e.\u0275fac=function(t){return p(t||e)},e.\u0275cmp=n.Lb({type:e,selectors:[["pbl-ngrid-row","detailRow",""]],viewQuery:function(e,t){if(1&e&&n.Dc(a,!0,n.U),2&e){let e;n.uc(e=n.gc())&&(t._viewRef=e.first)}},hostAttrs:["role","row",1,"pbl-ngrid-row","pbl-row-detail-parent"],hostVars:1,hostBindings:function(e,t){1&e&&n.fc("keydown",function(e){return t.handleKeydown(e)}),2&e&&n.Gb("tabindex",t.grid.rowFocus)},exportAs:["pblNgridDetailRow"],features:[n.Eb([{provide:o.o,useExisting:e}]),n.Cb],attrs:c,ngContentSelectors:h,decls:4,vars:0,consts:[["viewRef",""]],template:function(e,t){1&e&&(n.pc(d),n.oc(0),n.Tb(1,null,0),n.oc(3,1))},styles:[".pbl-row-detail-parent { position: relative; cursor: pointer; }"],encapsulation:2,changeDetection:0}),e})();const p=n.Zb(g)},ugF5:function(e,t,i){"use strict";i.d(t,"a",function(){return a}),i.d(t,"b",function(){return h});var n=i("fXoL"),s=i("8LU1"),o=i("XEBs"),r=i("NRLV");class l{constructor(e,t){this.vcRef=e,this.extApi=t,this.viewMap=new Map,this.pendingOps=new Map,this.deferOps=!1,this.runMeasure=()=>this.extApi.grid.viewport.reMeasureCurrentRenderedContent(),t.onInit(()=>{this.detailRowDef=t.grid.registry.getSingle("detailRow"),t.cdkTable.beforeRenderRows.subscribe(()=>this.deferOps=!0),t.cdkTable.onRenderRows.subscribe(()=>this.flushPendingOps())}),t.grid.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"detailRow":this.detailRowDef="remove"===t.op?void 0:t.value}})}render(e,t){return this.viewMap.has(e)?(this.pendingOps.delete(e),this.updateDetailRow(e),!0):this.deferOps?!(!e.context.$implicit||!this.detailRowDef||(this.pendingOps.set(e,{type:"render",fromRender:t}),0)):this._render(e,t)}clearDetailRow(e,t){this.viewMap.get(e)&&(this.deferOps?this.pendingOps.set(e,{type:"clear",fromRender:t}):this._clearDetailRow(e,t))}updateDetailRow(e){const t=this.viewMap.get(e);t&&(Object.assign(t.viewRef.context,this.createDetailRowContext(e,!0)),t.viewRef.detectChanges())}getDetailRowHeight(e){let t=0;const i=this.viewMap.get(e);if(i)for(const n of i.viewRef.rootNodes)t+=n.getBoundingClientRect().height;return t}detectChanges(e){const t=this.viewMap.get(e);t&&t.viewRef.detectChanges()}createDetailRowContext(e,t){return{$implicit:e.context.$implicit,rowContext:e.context,animation:{fromRender:t,end:()=>this.checkHasAnimation(t)?this.runMeasure():void 0}}}flushPendingOps(){if(this.deferOps){this.deferOps=!1;const e=[],t=[];for(const i of this.pendingOps.entries())("clear"===i[1].type?t:e).push(i);this.pendingOps.clear();for(const[i,n]of e){if(this.viewMap.has(i))throw new Error("Invalid detail row state.");if(t.length){const[e]=t.pop();this.viewMap.set(i,this.viewMap.get(e)),this.viewMap.delete(e),this.insertElementsToRow(i),this.updateDetailRow(i),this.checkHasAnimation(n.fromRender)||this.runMeasure()}else this._render(i,n.fromRender)}for(const[i,n]of t)this._clearDetailRow(i,n.fromRender)}}_render(e,t){if(e.context.$implicit&&this.detailRowDef){const i=this.createDetailRowContext(e,t);return this.viewMap.set(e,{viewRef:this.vcRef.createEmbeddedView(this.detailRowDef.tRef,i)}),this.insertElementsToRow(e,!0),this.checkHasAnimation(t)||this.runMeasure(),!0}return!1}_clearDetailRow(e,t){const i=this.viewMap.get(e);if(i){const{viewRef:n}=i;n.context.animation.fromRender!==t&&(n.context.animation.fromRender=t,n.detectChanges()),n.destroy(),this.checkHasAnimation(t)||this.runMeasure(),this.viewMap.delete(e)}}insertElementsToRow(e,t){const{viewRef:i}=this.viewMap.get(e),n=e.element.nextSibling;for(const s of i.rootNodes)e.element.parentElement.insertBefore(s,n);t&&i.detectChanges()}checkHasAnimation(e){return"always"===this.detailRowDef.hasAnimation||"interaction"===this.detailRowDef.hasAnimation&&!e}}const a="detailRow",c=()=>!0,d=()=>!1;let h=(()=>{class e{constructor(e,t,i,s){this.pluginCtrl=t,this.ngZone=i,this.injector=s,this.whenContextChange="context",this.toggleChange=new n.p,this.toggledRowContextChange=new n.p,this._isSimpleRow=c,this._isDetailRow=d,this._detailRowRows=new Set,this._removePlugin=t.setPlugin(a,this),this.grid=t.extApi.grid,this.detailRowCtrl=new l(e,t.extApi),t.onInit().subscribe(()=>{t.ensurePlugin("targetEvents"),this.grid.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"detailRowParent":"remove"===t.op&&(this.pluginCtrl.extApi.cdkTable.removeRowDef(t.value),this._detailRowDef=void 0),this.setupDetailRowParent()}}),this._detailRow?this.updateTable():this.setupDetailRowParent()})}get detailRow(){return this._detailRow}set detailRow(e){if(this._detailRow!==e){const t=this.grid;"function"==typeof e?(this._isSimpleRow=(t,i)=>!e(t,i),this._isDetailRow=e):(e=Object(s.c)(e),this._isDetailRow=e?c:d,this._isSimpleRow=e?d:c),this._detailRow=e,t.isInit&&this.updateTable()}}set singleDetailRow(e){if(e=Object(s.c)(e),this._forceSingle!==e&&(this._forceSingle=e,e&&this._openedRow&&this._openedRow.expended))for(const t of this._detailRowRows)t.context.$implicit!==this._openedRow.row&&t.toggle(!1)}addDetailRow(e){this._detailRowRows.add(e)}removeDetailRow(e){this._detailRowRows.delete(e)}toggleDetailRow(e,t){for(const i of this._detailRowRows)if(i.context.$implicit===e)return i.toggle(t),i.expended}markForCheck(){this._cdPending||(this._cdPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this.ngZone.run(()=>{var e;this._cdPending=!1,null===(e=this._defaultParentRef)||void 0===e||e.changeDetectorRef.markForCheck()})})))}ngOnDestroy(){this._defaultParentRef&&this._defaultParentRef.destroy(),this._removePlugin(this.grid)}detailRowToggled(e){const t=this._openedRow&&this._openedRow.row===e.row;e.expended?(this._forceSingle&&this._openedRow&&this._openedRow.expended&&!t&&this._openedRow.toggle(),this._openedRow=e):t&&(this._openedRow=void 0),this.toggleChange.emit(e)}setupDetailRowParent(){const e=this.grid;if(this._detailRowDef&&(this.pluginCtrl.extApi.cdkTable.removeRowDef(this._detailRowDef),this._detailRowDef=void 0),this.detailRow){let t=e.registry.getSingle("detailRowParent");if(t)this._detailRowDef=t=t.clone(),Object.defineProperty(t,"when",{enumerable:!0,get:()=>this._isDetailRow});else if(!this._defaultParentRef)return this._defaultParentRef=this.injector.get(n.j).resolveComponentFactory(r.a).create(this.injector),void this._defaultParentRef.changeDetectorRef.detectChanges()}this.resetTableRowDefs()}resetTableRowDefs(){this._detailRowDef&&(!1===this._detailRow?this.pluginCtrl.extApi.cdkTable.removeRowDef(this._detailRowDef):this.pluginCtrl.extApi.cdkTable.addRowDef(this._detailRowDef))}updateTable(){this.grid._tableRowDef.when=this._isSimpleRow,this.setupDetailRowParent(),this.pluginCtrl.extApi.cdkTable.updateRowDefCache(),this.pluginCtrl.extApi.cdkTable.multiTemplateDataRows=!!this._detailRow}}return e.\u0275fac=function(t){return new(t||e)(n.Rb(n.U),n.Rb(o.n),n.Rb(n.E),n.Rb(n.v))},e.\u0275dir=n.Mb({type:e,selectors:[["pbl-ngrid","detailRow",""]],inputs:{detailRow:"detailRow",singleDetailRow:"singleDetailRow",excludeToggleFrom:"excludeToggleFrom",whenContextChange:"whenContextChange"},outputs:{toggleChange:"toggleChange",toggledRowContextChange:"toggledRowContextChange"},exportAs:["pblNgridDetailRow"]}),e})()}}]);