(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"4DA5":function(e,t,i){"use strict";i.d(t,"a",function(){return c}),i.d(t,"b",function(){return l});var o=i("7+OI"),s=i("8LU1"),n=i("XEBs"),r=i("fXoL");const c="blockUi";let l=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(c,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.onInit().subscribe(e=>{e&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:i}=e;t&&n.x.unrx.kill(this,t),i.onSourceChanging.pipe(n.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),i.onSourceChanged.pipe(n.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(s.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(o.a)(e)&&this._blockUi!==e?(Object(o.a)(this._blockUi)&&n.x.unrx.kill(this,this._blockUi),this._blockUi=e,e.pipe(n.x.unrx(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){n.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(n.g),r.Rb(n.n))},e.\u0275dir=r.Mb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"6JOf":function(e,t,i){"use strict";i.d(t,"a",function(){return l});var o=i("ofXK"),s=i("f6nW"),n=i("XEBs"),r=i("4DA5"),c=i("fXoL");let l=(()=>{class e{}return e.NGRID_PLUGIN=Object(n.v)({id:r.a},r.b),e.\u0275mod=c.Pb({type:e}),e.\u0275inj=c.Ob({factory:function(t){return new(t||e)},imports:[[o.c,s.r,n.k]]}),e})()},iQQw:function(e,t,i){"use strict";i.r(t),i.d(t,"CopySelectionExampleModule",function(){return x});var o=i("mrSG"),s=i("XEBs"),n=i("6JOf"),r=i("pLZG"),c=i("ofXK"),l=i("fXoL");class a{constructor(e,t){this._document=t;const i=this._textarea=this._document.createElement("textarea"),o=i.style;o.position="fixed",o.top=o.opacity="0",o.left="-999em",i.setAttribute("aria-hidden","true"),i.value=e,this._document.body.appendChild(i)}copy(){const e=this._textarea;let t=!1;try{if(e){const i=this._document.activeElement;e.select(),e.setSelectionRange(0,e.value.length),t=this._document.execCommand("copy"),i&&i.focus()}}catch(i){}return t}destroy(){const e=this._textarea;e&&(e.parentNode&&e.parentNode.removeChild(e),this._textarea=void 0)}}let u=(()=>{class e{constructor(e){this._document=e}copy(e){const t=this.beginCopy(e),i=t.copy();return t.destroy(),i}beginCopy(e){return new a(e,this._document)}}return e.\u0275fac=function(t){return new(t||e)(l.bc(c.e))},e.\u0275prov=Object(l.Nb)({factory:function(){return new e(Object(l.bc)(c.e))},token:e,providedIn:"root"}),e})();const d=/^mac/.test(navigator.platform.toLowerCase()),p="clipboard";let b=(()=>{class e{constructor(e,t,i){this.grid=e,this.injector=t,this.pluginCtrl=i,this.config=t.get(s.h),this.clipboard=t.get(u),this.init()}static create(t,i){const o=s.n.find(t);return new e(t,i,o)}ngOnDestroy(){s.x.unrx.kill(this),this._removePlugin(this.grid)}isCopyEvent(e){return!!(e instanceof KeyboardEvent&&"c"===e.key&&(!d&&e.ctrlKey||d&&e.metaKey))}doCopy(){const{cellSeparator:e,rowSeparator:t}=this.config.get("clipboard",{}),{rows:i,minIndex:o}=this.getSelectedRowData(this.grid);this.clipboard.copy(i.map(t=>t.slice(o).join(this.clpCellSep||e||"\t")).join(this.clpRowSep||t||"\n"))}getSelectedRowData(e){const{columnApi:t,contextApi:i}=e,o=new Map;let s=Number.MAX_SAFE_INTEGER;for(const r of i.selectedCells){const n=t.columns[r.colIndex];if(n){const c=t.renderIndexOf(n);if(c>-1){const t=i.findRowInCache(r.rowIdent).dsIndex,l=n.getValue(e.ds.source[t]),a=o.get(r.rowIdent)||[];a[c]=l,o.set(r.rowIdent,a),s=Math.min(s,c)}}}const n=Array.from(o.entries());return n.sort((e,t)=>i.findRowInCache(e[0]).dsIndex<i.findRowInCache(t[0]).dsIndex?-1:1),{minIndex:s,rows:n.map(e=>e[1])}}init(){this._removePlugin=this.pluginCtrl.setPlugin(p,this),this.pluginCtrl.ensurePlugin("targetEvents"),this.pluginCtrl.getPlugin("targetEvents").keyDown.pipe(Object(r.a)(e=>this.isCopyEvent(e.source)),s.x.unrx(this)).subscribe(e=>this.doCopy())}}return e.\u0275fac=function(t){return new(t||e)(l.Rb(s.g),l.Rb(l.v),l.Rb(s.n))},e.\u0275dir=l.Mb({type:e,selectors:[["pbl-ngrid","clipboard",""]],inputs:{clpCellSep:"clpCellSep",clpRowSep:"clpRowSep"},exportAs:["pblNgridClipboard"]}),e})();var h=i("4dOD");let g=(()=>{class e{constructor(t){s.n.onCreatedSafe(e,(e,i)=>{!0===t.get(p,{}).autoEnable&&i.onInit().subscribe(()=>{i.hasPlugin(p)||i.createPlugin(p)})})}}return e.NGRID_PLUGIN=Object(s.v)({id:p,factory:"create"},b),e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({factory:function(t){return new(t||e)(l.bc(s.h))},imports:[[c.c,s.k,h.a]]}),e})();var f=i("YT2F"),m=i("WPM6"),k=i("fluT"),y=i("XkVd"),_=i("IO+B");let w=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(s.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(s.t)().onTrigger(()=>this.datasource.getPeople(100,500)).create(),this.hideColumns=["bio"]}};return e.\u0275fac=function(t){return new(t||e)(l.Rb(k.a))},e.\u0275cmp=l.Lb({type:e,selectors:[["pbl-copy-selection-example"]],decls:1,vars:3,consts:[["clipboard","","focusMode","cell",3,"dataSource","columns","hideColumns"]],template:function(e,t){1&e&&l.Sb(0,"pbl-ngrid",0),2&e&&l.qc("dataSource",t.ds)("columns",t.columns)("hideColumns",t.hideColumns)},directives:[y.a,b,_.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(f.e)("pbl-copy-selection-example",{title:"Copy Selection"}),Object(o.b)("design:paramtypes",[k.a])],e),e})(),x=(()=>{let e=class{};return e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({factory:function(t){return new(t||e)},imports:[[m.a,s.k,n.a,g]]}),e=Object(o.a)([Object(f.a)(w)],e),e})()}}]);