(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1Yje":function(t,e,i){"use strict";i.d(e,"c",(function(){return s.d})),i.d(e,"b",(function(){return s.c})),i.d(e,"a",(function(){return c}));var s=i("yQVu"),r=i("2kYt"),n=i("fL1z"),o=i("XApm"),a=i("EM62");const d=t=>[t,!0];let c=(()=>{class t{constructor(e){o.o.onCreatedSafe(t,((t,i)=>{i&&!i.hasPlugin("sticky")&&i.onInit().subscribe((()=>{const i=e.get("stickyPlugin");i&&(i.headers&&Object(s.d)(t,"header",i.headers.map(d)),i.footers&&Object(s.d)(t,"footer",i.footers.map(d)),i.columnStart&&Object(s.c)(t,"start",i.columnStart.map(d)),i.columnEnd&&Object(s.c)(t,"end",i.columnEnd.map(d)))}))}))}}return t.NGRID_PLUGIN=Object(o.v)({id:s.a},s.b),t.\u0275mod=a.Qb({type:t}),t.\u0275inj=a.Pb({factory:function(e){return new(e||t)(a.cc(o.i))},imports:[[r.c,n.s,o.l]]}),t})()},hiZZ:function(t,e,i){"use strict";i.d(e,"a",(function(){return y})),i.d(e,"b",(function(){return _}));var s=i("5XID"),r=i("XApm"),n=i("9bRT"),o=i("ROBh"),a=i("GoAz"),d=i("8j5Y"),c=i("YtkY");const h=Symbol("LOCAL_COLUMN_DEF"),l={};class u{constructor(t,e,i,s){this.grid=t,this.pluginCtrl=e,this.updateColumns=i,this.sourceFactoryWrapper=s,this.init(),t.columns&&t.columnApi.visibleColumns.length>0&&this.onInvalidateHeaders(),this.onDataSource(this.grid.ds)}destroy(t){this.destroyed||(this.destroyed=!0,r.x.unrx.kill(this,this.grid),this.grid.showHeader=this.headerRow,this.grid.columns=this.columnsInput,t&&(this.grid.invalidateColumns(),this.grid.ds.refresh(l)))}init(){this.headerRow=this.grid.showHeader,this.grid.showHeader=!1,this.pluginCtrl.events.pipe(r.x.unrx(this,this.grid)).subscribe((t=>"onInvalidateHeaders"===t.kind&&this.onInvalidateHeaders())),this.pluginCtrl.events.pipe(r.x.unrx(this,this.grid)).subscribe((t=>"onDataSource"===t.kind&&this.onDataSource(t.curr)))}onInvalidateHeaders(){this.grid.columns[h]||(this.columnsInput=this.grid.columns,this.storeColumns=this.grid.columnApi.visibleColumns,this.updateColumns())}onDataSource(t){this.unPatchDataSource(),t&&(this.ds=t,this.dsSourceFactory=t.adapter.sourceFactory,this.ds.adapter.sourceFactory=t=>{const e=t.data.changed&&t.data.curr===l?this.ds.source:this.dsSourceFactory(t);return!1===e?e:this.destroyed?(this.unPatchDataSource(),this.rawSource):(Object(n.a)(e)?e:Array.isArray(e)?Object(o.a)(e):Object(a.a)(e)).pipe(Object(d.a)((t=>this.rawSource=t)),Object(c.a)(this.sourceFactoryWrapper))})}unPatchDataSource(){this.ds&&(this.ds.adapter.sourceFactory=this.dsSourceFactory,this.ds=this.dsSourceFactory=void 0)}}const f=Symbol("TRANSFORM_ROW_REF");function p(t){return t.getValue(this.data[f])}function m(t,e){return{prop:`__transform_item_${e}__`,data:{[f]:t}}}var b=i("EM62");const g={prop:"__transpose__",css:"pbl-ngrid-header-cell pbl-ngrid-transposed-header-cell"},y="transpose";let _=(()=>{class t{constructor(t,e,i){this.grid=t,this.pluginCtrl=e,this._header=g,this._removePlugin=e.setPlugin(y,this);const s=i.get("transposePlugin");s&&(this.header=s.header,this.defaultCol=s.defaultCol||{},this.matchTemplates=s.matchTemplates||!1),e.onInit().subscribe((()=>{void 0!==this.enabled&&this.updateState(void 0,this.enabled)}))}get transpose(){return this.enabled}set transpose(t){(t=Object(s.c)(t))!==this.enabled&&this.grid.isInit&&this.updateState(this.enabled,t),this.enabled=t}set header(t){this._header=Object.assign({},g,t||{})}ngOnDestroy(){this._removePlugin(this.grid),this.disable(!1),r.x.unrx.kill(this)}disable(t){if(this.gridState){const{gridState:e}=this;this.columns=this.selfColumn=this.gridState=this.columns=this.selfColumn=void 0,e.destroy(t)}}enable(t=!1){this.gridState&&this.disable(!1),this.gridState=new u(this.grid,this.pluginCtrl,(()=>this.updateColumns(this.grid.columnApi.visibleColumns)),(t=>{if(t){const e=this.grid.columns=Object(r.s)().default(this.defaultCol||{}).table(this.selfColumn,...t.map(m)).build(),i=this.gridState.columnsInput;e.header=i.header,e.headerGroup=i.headerGroup,e.footer=i.footer,e[h]=!0,this.grid.invalidateColumns();const n=Object(s.c)(this.matchTemplates),{prop:o}=this._header,a=["type"];let d;n&&a.push("cellTpl");for(const t of this.grid.columnApi.visibleColumns)if(t.orgProp===o)t.getValue=t=>(d=t,t.label);else{t.getValue=p;for(const e of a)Object.defineProperty(t,e,{configurable:!0,get:()=>d&&d[e],set:t=>{}})}return this.columns}return t})),t?(this.pluginCtrl.extApi.contextApi.clear(),this.grid.ds.refresh()):this.grid.ds.length>0&&this.grid.ds.refresh(l)}updateState(t,e){e?this.enable(!(void 0===t)):this.disable(!0)}updateColumns(t){const{prop:e}=this._header;this.columns=[];for(const i of t)i.orgProp===e?this.selfColumn=i:this.columns.push(i);this.selfColumn||(this.selfColumn=new r.b(this._header,this.pluginCtrl.extApi.columnStore.groupStore))}}return t.\u0275fac=function(e){return new(e||t)(b.Sb(r.h),b.Sb(r.o),b.Sb(r.i))},t.\u0275dir=b.Nb({type:t,selectors:[["pbl-ngrid","transpose",""]],inputs:{transpose:"transpose",header:["transposeHeaderCol","header"],defaultCol:["transposeDefaultCol","defaultCol"],matchTemplates:"matchTemplates"}}),t})()},yQVu:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"d",(function(){return a})),i.d(e,"c",(function(){return d})),i.d(e,"b",(function(){return c}));var s=i("xVbo"),r=i("XApm"),n=i("EM62");const o="sticky";function a(t,e,i,s){const r="header"===e,n=r?t._headerRowDefs:t._footerRowDefs,o=Array.isArray(i)?i:[[i,s]],a=r&&t.showHeader||!r&&t.showFooter?1:0;let d;for(const[c,h]of o){let t="table"===c?0:c+a;r||(t=n.length-1-t);const e=n.toArray()[t];e&&e.sticky!==h&&(e.sticky=h,d=!0)}d&&(r?t._cdkTable.updateStickyHeaderRowStyles():t._cdkTable.updateStickyFooterRowStyles())}function d(t,e,i,s){const r=Array.isArray(i)?i:[[i,s]];let n;for(let[o,a]of r){"string"==typeof o&&(o=t.columnApi.visibleColumns.findIndex((t=>t.orgProp===o)));const i=t.columnApi.visibleColumns[o];i&&(n=!0,i.pin=a?e:void 0,"end"===e?(i.columnDef.stickyEnd=a,i.columnDef.sticky=!1):(i.columnDef.sticky=a,i.columnDef.stickyEnd=!1))}n&&t._cdkTable.updateStickyColumnStyles()}let c=(()=>{class t{constructor(t,e,i){this.grid=t,this._differs=e,this.pluginCtrl=i,this._columnCache={start:[],end:[]},this._removePlugin=i.setPlugin(o,this),i.events.pipe(Object(s.a)((t=>"onResizeRow"===t.kind))).subscribe((()=>{this.grid._cdkTable.updateStickyHeaderRowStyles(),this.grid._cdkTable.updateStickyColumnStyles(),this.grid._cdkTable.updateStickyFooterRowStyles()})),i.events.pipe(Object(s.a)((t=>"onInvalidateHeaders"===t.kind))).subscribe((()=>{this._startDiffer&&this.grid.isInit&&(this._startDiffer.diff([]),this.applyColumnDiff("start",this._columnCache.start,this._startDiffer)),this._endDiffer&&this.grid.isInit&&(this._endDiffer.diff([]),this.applyColumnDiff("end",this._columnCache.end,this._endDiffer))}))}set stickyColumnStart(t){this._startDiffer||(this._startDiffer=this._differs.find([]).create()),this.applyColumnDiff("start",t,this._startDiffer)}set stickyColumnEnd(t){this._endDiffer||(this._endDiffer=this._differs.find([]).create()),this.applyColumnDiff("end",t,this._endDiffer)}set stickyHeader(t){this._headerDiffer||(this._headerDiffer=this._differs.find([]).create()),this.applyRowDiff("header",t,this._headerDiffer)}set stickyFooter(t){this._footerDiffer||(this._footerDiffer=this._differs.find([]).create()),this.applyRowDiff("footer",t,this._footerDiffer)}ngOnDestroy(){this._removePlugin(this.grid)}applyColumnDiff(t,e,i){if(!this.grid.isInit)return void this.pluginCtrl.onInit().subscribe((()=>{this.applyColumnDiff(t,e,i)}));this._columnCache[t]=e||[];const s=i.diff(e||[]),r=[];s.forEachOperation(((t,e,i)=>{null==t.previousIndex?r.push([t.item,!0]):null==i&&r.push([t.item,!1])})),r.length>0&&d(this.grid,t,r)}applyRowDiff(t,e,i){if(!this.grid.isInit)return void this.pluginCtrl.onInit().subscribe((()=>{this.applyRowDiff(t,e,i)}));const s=i.diff(e||[]),r=[];s.forEachOperation(((t,e,i)=>{null==t.previousIndex?r.push([t.item,!0]):null==i&&r.push([t.item,!1])})),r.length>0&&a(this.grid,t,r)}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(r.h),n.Sb(n.w),n.Sb(r.o))},t.\u0275dir=n.Nb({type:t,selectors:[["pbl-ngrid","stickyColumnStart",""],["pbl-ngrid","stickyColumnEnd",""],["pbl-ngrid","stickyHeader",""],["pbl-ngrid","stickyFooter",""]],inputs:{stickyColumnStart:"stickyColumnStart",stickyColumnEnd:"stickyColumnEnd",stickyHeader:"stickyHeader",stickyFooter:"stickyFooter"}}),t})()},zbMq:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("2kYt"),r=i("XApm"),n=i("hiZZ"),o=i("EM62");let a=(()=>{class t{}return t.NGRID_PLUGIN=Object(r.v)({id:n.a},n.b),t.\u0275mod=o.Qb({type:t}),t.\u0275inj=o.Pb({factory:function(e){return new(e||t)},imports:[[s.c,r.l]]}),t})()}}]);