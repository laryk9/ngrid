(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8r4k":function(t,e,i){"use strict";i.d(e,"a",function(){return c});var s=i("f6nW"),n=i("XEBs"),r=i("fXoL");const a=["infiniteRow",""],o=[[["",8,"pbl-ngrid-row-prefix"]],"*",[["",8,"pbl-ngrid-row-suffix"]]],h=[".pbl-ngrid-row-prefix","*",".pbl-ngrid-row-suffix"];let c=(()=>{class t extends n.p{canCreateCell(){return!1}}return t.\u0275fac=function(e){return l(e||t)},t.\u0275cmp=r.Lb({type:t,selectors:[["pbl-ngrid-row","infiniteRow",""]],hostAttrs:["role","row",1,"pbl-ngrid-row"],exportAs:["pblNgridInfiniteRow"],features:[r.Eb([{provide:s.o,useExisting:n.p}]),r.Cb],attrs:a,ngContentSelectors:h,decls:3,vars:0,template:function(t,e){1&t&&(r.pc(o),r.oc(0),r.oc(1,1),r.oc(2,2))},encapsulation:2,changeDetection:0}),t})();const l=r.Zb(c)},LpJu:function(t,e,i){"use strict";i.d(e,"b",function(){return B}),i.d(e,"a",function(){return J});var s=i("XEBs"),n=i("2Vo4"),r=i("LRne"),a=i("nYR2"),o=i("pLZG"),h=i("IzEk"),c=i("vkgz"),l=i("lJxs");const u={};class d{constructor(t,e){this.context=t,this.end=-1,this.start=0,this._maxSize=0,this.options=Object.assign({},e||{})}get maxSize(){return this._maxSize}get size(){return this.end-this.start+1}get empty(){return 0===this.size}remove(t,e){return[[Math.max(t,this.start),Math.min(t+e-1,this.end)]]}setCacheSize(t){this._maxSize=Math.max(0,t);const e=this.alignBoundary(this.lastAdd||1);return e<0?[[this.start+e,this.start-1]]:e>0?[[this.end+1,this.end+e]]:[]}update(t,e,i){if(this.empty)return this.add(t,e-t+1);if(this.isSibling(t,e,i)){if(-1===i)return this.add(t,this.start-t);if(1===i)return this.add(this.end+1,e-this.end);throw new Error("Cache Error")}{const i=this.clear();return this.add(t,e-t+1),i}}clear(){if(this.lastAdd=void 0,this.empty)return[[0,0]];const{start:t,end:e}=this;return this.start=0,this.end=-1,[[t,e]]}createBlock(t,e,i=0){const[s,n,r]=this.matchBlock(t,e)||[];if(!s)return;const{blockSize:a}=this.context.options;let o,h;switch(s){case-1:o=Math.max(0,r-(a-1)),h=r;break;case 1:o=n,h=n+a-1}if(i&&o>=i)return;const c=1===s?o:h;let l=c%a;return 0!==l&&(o=c-l,h=o+a-1),i&&h>=i&&(h=i-1,o=h-h%a),[s,o,h]}matchBlock(t,e){return this.empty?[1,t,e]:t>=this.start&&e<=this.end?void 0:t<this.start&&e>=this.start-1?[-1,t,this.start-1]:e>this.end&&t<=this.end+1?[1,this.end+1,e]:[e>this.end?1:-1,t,e]}oversize(){return this._maxSize?Math.max(this.size-this._maxSize,0):0}isSibling(t,e,i){return 1===i?this.end+1===t:-1===i&&this.start-1===e}add(t,e){if(t<0||e<=0)return[];let i,s=t+e-1;return this.empty?(this.start=t,this.end=s,i=this.alignBoundary(1)):t<this.start?(this.start=t,i=this.alignBoundary(-(this.lastAdd=-1))):s>this.end&&(this.end=s,i=this.alignBoundary(-(this.lastAdd=1))),i<0?[[this.start+i,this.start-1]]:i>0?[[this.end+1,this.end+i]]:[]}alignBoundary(t){const e=this.oversize();if(e){if(1!==t)return this.start+=e,-e;this.end-=e}return e}}class g{constructor(t,e){this.start=t,this.end=e}static calcEnd(t,e){return t+e-1}get size(){return this.end-this.start+1}get empty(){return 0===this.size}containsRow(t){return t>=this.start&&t<=this.end}equals(t){return this.start===t.start&&this.end===t.end}}class f extends Array{constructor(){super(...arguments),this.dirty=!1,this._size=0}get size(){return this.dirty&&this.onDirty(),this._size}remove(t,e,i=0){const s=[],n=g.calcEnd(t,e),r=this.searchByRow(t,i);if(-1!==r){const e=this[r],i=e.end,a=i-n;if(e.end=t-1,0===a)s.push([t,n]);else if(a<0)s.push([t,i],...this.remove(i+1,a,r+1));else{const e=new g(n+1,i);this.splice(r,0,e),s.push([t,n])}s.length>0&&this.markDirty()}return s}removeItems(t,e){const i=[];let s;for(;t>0&&(s=-1===e?this.shift():this.pop(),s);)s.size>t?(-1===e?(s.start+=t,i.push([s.start-t,s.start-1])):(s.end-=t,i.push([s.end+1,s.end+t])),t=0):(t-=s.size,i.push([s.start,s.end]),s=void 0);return s&&(-1===e?this.unshift(s):this.push(s)),i.length>0&&this.markDirty(),i}clear(){const t=[];for(;this.length>0;){const e=this.shift();t.push([e.start,e.end])}return t.length>0&&this.markDirty(),t}findClosestMissing(t,e){const i=this[this.searchByRow(t)];return i?1===e?i.end+1:i.start-1:t}containsRange(t,e){const i=this[this.searchByRow(t)];return i&&e<=i.end}searchByRow(t,e=0){let i=this.length-1;for(;e<=i;){let s=Math.floor((e+i)/2);const n=this[s];if(n.containsRow(t))return s;n.end<t?e=s+1:i=s-1}return-1}searchRowProximity(t,e=0){let i=this.length-1,s=-1;for(;e<=i;){let n=Math.floor((e+i)/2);const r=this[n];if(r.containsRow(t))return n;r.end<t?e=n+1:(s=n,i=n-1)}return s}markDirty(){this.dirty=!0}checkAndMerge(){for(let t=1;t<this.length;t++)this[t-1].end+1===this[t].start&&(this[t-1].end=this[t].end,this.splice(t,1),t-=1)}onDirty(){this.dirty=!1,this._size=this.reduce((t,e)=>t+e.size,0)}}var p=function(t){return t[t.none=0]="none",t[t.full=1]="full",t[t.contained=2]="contained",t[t.contains=3]="contains",t[t.partial=4]="partial",t}({});function m(t,e,i){return t.equals(e)?p.full:(void 0===i&&(i=function(t,e){const i=t.start<e.start?t:e,s=i===t?e:t;return i.end<s.start?null:new g(s.start,i.end<s.end?i.end:s.end)}(t,e)),i?t.equals(i)?p.contained:e.equals(i)?p.contains:p.partial:p.none)}class w{constructor(t,e){this.context=t,this._maxSize=0,this.fragments=new f,this.lastStartRow=0,this.lastDir=1,this.options=Object.assign({},e||{})}get maxSize(){return this._maxSize}get size(){return this.fragments.size}get empty(){return 0===this.size}remove(t,e){return this.fragments.remove(t,e)}setCacheSize(t){return this._maxSize=Math.max(0,t),this.alignBoundary()}update(t,e,i){return this.coldLocation=1===i?-1:1,this.add(t,e)}clear(){return this.coldLocation=void 0,this.empty?[[0,0]]:this.fragments.clear()}createBlock(t,e,i=0){const[s,n,r]=this.matchBlock(t,e)||[];if(!s)return;const{blockSize:a}=this.context.options,{strictPaging:o}=this.options;let h,c;switch(s){case-1:h=Math.max(0,r-(a-1)),c=r,!o&&h<n&&(h=Math.min(this.fragments.findClosestMissing(h,1),n));break;case 1:h=n,c=n+a-1,!o&&c>r&&(c=Math.max(this.fragments.findClosestMissing(c,-1),r))}if(!(i&&h>=i)){if(o){const t=1===s?h:c;let e=t%a;0!==e&&(h=t-e,c=h+a-1)}return i&&c>=i&&(c=i-1,o&&(h=c-c%a)),[s,h,c]}}matchBlock(t,e){if(this.empty)return[1,t,e];const i=this.fragments.searchRowProximity(t),s=this.fragments.searchRowProximity(e);if(-1===i)return[1,t,e];const n=this.fragments[i];if(-1===s)return[1,n.containsRow(t)?n.end+1:t,e];const r=m(n,new g(t,e)),a=this.lastStartRow>t?-1:this.lastStartRow===t?this.lastDir:1;switch(this.lastStartRow=t,this.lastDir=a,r){case p.none:return[a,t,e];case p.partial:if(i===s)return t<n.start?[a,t,n.start-1]:[a,n.end+1,e];{const i=this.fragments[s];return[a,t<n.start?t:n.end+1,e>=i.start?i.start-1:e]}case p.contained:const r=this.fragments[s];return[a,t,e>=r.start?r.start-1:e];case p.contains:case p.full:return}}add(t,e){if(t<0||e<=0)return[];const i=new g(t,e),s=this.fragments.searchRowProximity(t),n=this.fragments[s];switch(n?m(n,i):null){case null:this.fragments.push(i);break;case p.none:this.fragments.splice(s,0,i);break;case p.partial:case p.contained:let t=this.fragments.searchRowProximity(e);-1===t&&(t=this.fragments.length-1);const r=this.fragments[t];n.start=Math.min(i.start,n.start),i.end>=r.start?(n.end=i.end,this.fragments.splice(s+1,t-s)):(n.end=Math.max(i.end,n.end),this.fragments.splice(s+1,t-1-s));break;case p.contains:case p.full:return[]}return this.fragments.markDirty(),this.fragments.checkAndMerge(),this.alignBoundary()}oversize(){return this._maxSize?Math.max(this.size-this._maxSize,0):0}alignBoundary(){const t=this.oversize();return t>0?this.fragments.removeItems(t,this.coldLocation||1):[]}}class b{constructor(t,e){this.context=t,this.virtualRow=e,this.ds=t.getDataSource()}get maxSize(){return this.ds.length}get size(){return this.ds.length}get empty(){return 0===this.size}remove(t,e){return[[0,Math.min(t+e-1,this.ds.length)]]}setCacheSize(t){return[]}update(t,e,i){return[]}clear(){return[[0,this.ds.length-1]]}createBlock(t,e,i=0){const[s,n,r]=this.matchBlock(t,e)||[];if(!s)return;const{blockSize:a}=this.context.options;let o,h;switch(s){case-1:o=Math.max(0,r-(a-1)),h=r;break;case 1:o=n,h=n+a-1}return i&&o>=i?void 0:(i&&h>=i&&(h=i-1),[s,o,h])}matchBlock(t,e){if(t===e)return[1,t,e];const i=this.ds.source;for(let s=t;s<=e&&i[s]!==this.virtualRow;s++)t=s;return t===e?void 0:[1,t,e]}}class S{constructor(t,e){this.context=t,this.cacheAdapter=function(t,e){switch(e.type){case"noOpCache":return new b(t,u);case"sequenceBlocks":return new d(t,e.options);case"fragmentedBlocks":return new w(t,e.options)}}(t,function(t){return t||(t={type:"noOpCache"}),t}(e)),this.setCacheSize(300)}get maxSize(){return this.cacheAdapter.maxSize}get size(){return this.cacheAdapter.size}get empty(){return this.cacheAdapter.empty}setCacheSize(t){this.cacheAdapter.setCacheSize(t)}matchNewBlock(){const t=this.context.getDataSource(),e=this.context.totalLength,i=t.renderStart+t.renderLength,s=t.renderStart,n=e?Math.min(i,e):i;return this.cacheAdapter.createBlock(s,n,e)}createInitialBlock(){const t=this.context.getDataSource(),e=this.context.totalLength,i=t.renderLength,s=e?Math.min(i,e):i;return this.cacheAdapter.createBlock(0,s,e)}update(t,e,i){return this.cacheAdapter.update(t,e,i)}clear(){return this.cacheAdapter.clear()}}function v(t){const e=t.getDataSource();return!(t.totalLength&&e.renderStart>t.totalLength||!t.cache.matchNewBlock())}function k(t,e,i){const s=t.length;if(s<e.totalLength&&e.totalLength>e.toRow&&t[s-1]!==u){const n=Math.min(s+i-1,e.totalLength);for(let e=s;e<n;e++)t[e]=u;return!0}return!1}class R extends s.c{constructor(t,e){super(t.getAdapter(),e),this.context=t}get maxCacheSize(){return this.context.cache.maxSize}get cacheSize(){return this.context.cache.size}setCacheSize(t){this.context.cache.setCacheSize(t)}purgeCache(){const t=this.source;for(const[e,i]of this.context.cache.clear())for(let s=e;s<=i;s++)t[s]=u;this.refresh()}isVirtualRow(t){return t===u}isVirtualContext(t){return t.$implicit===u}updateVirtualSize(t){this.adapter.inFlight?this.onRenderDataChanging.pipe(Object(h.a)(1)).subscribe(e=>{R.updateVirtualSize(t,e.data),this._onRenderDataChanging.next(e)}):R.updateVirtualSize(t,this.source)}static updateVirtualSize(t,e){if(e&&e.length<t)for(let i=e.length;i<t;i++)e[i]=u}}var x=i("Kj3r");class y extends s.d{constructor(t,e,i){super(e=>t.onTrigger(e),e),this.context=t,this.virtualRowsLoading=i.pipe(Object(x.a)(24))}dispose(){this.context.dispose(),super.dispose()}emitOnSourceChanging(t){t.isInitial&&super.emitOnSourceChanging(t)}}var z=i("7+OI"),O=i("Cfvw"),C=i("HDdC"),D=i("XNiG");class T extends C.a{constructor(t,e){super(t=>this.onSubscribe(t)),this.event=t,this.target=e,this.onKilled=new D.a,this.canLive=!1}keepAlive(){this.canLive=!0}onSubscribe(t){return this.subscriber=t,this.baseSubscription||(this.baseSubscription=this.target.subscribe({next:t=>this.subscriber.next(t),error:t=>{this.error=t,this.subscriber.error(t)},complete:()=>{this.completed=!0,this.subscriber.complete()}})),()=>this.tearDown()}tearDown(){!this.canLive||this.completed||this.error?(this.baseSubscription.unsubscribe(),this.onKilled.next(),this.onKilled.complete()):this.canLive=!1}}class L{constructor(t){this.handler=t,this.slots=2,this.runningEvents=new Map}execute(t,e=!1){const i=this.checkOverlap(t);if(i)return!!e&&(i.keepAlive(),i);const s=this.handler(t);if(!1===s)return!1;const n=Array.isArray(s)?Object(r.a)(s):Object(z.a)(s)?s:Object(O.a)(s),a=new T(t,n);return a.onKilled.subscribe(()=>this.runningEvents.delete(t)),this.runningEvents.set(t,a),a}checkOverlap(t){for(const[e,i]of this.runningEvents.entries())if(t.fromRow>=e.fromRow&&t.toRow<=e.toRow)return i}}class V{constructor(t=null){this.event=t}isDone(){return this.done}rangeEquals(t){return t.fromRow===this.event.fromRow&&t.toRow===this.event.toRow}skipNextRender(){return!!this.notFull&&(this.notFull=!1,!0)}pipe(){return t=>t.pipe(Object(c.a)(t=>{this.done=!0,this.notFull=t.length<this.event.offset}))}}class _{constructor(t){this.factoryOptions=t,this.onVirtualLoading=new n.a(!1),this.virtualLoadingSessions=0,this.timeoutCancelTokens=new Set,this.ignoreScrolling=!1,this.lastEventState=new V,this.options=function(t){const e=t||{};return e.blockSize=Number(e.blockSize),(Number.isNaN(e.blockSize)||e.blockSize<=0)&&(e.blockSize=50),e.initialVirtualSize=Number(e.initialVirtualSize),Number.isNaN(e.initialVirtualSize)&&(e.initialVirtualSize=0),e}(t.infiniteOptions),this.options.initialVirtualSize>0&&(this.totalLength=this.options.initialVirtualSize),this.queue=new L(this.factoryOptions.onTrigger)}onTrigger(t){if(t.isInitial)return this.invokeInitialOnTrigger(t);if(this.pendingTrigger$){const e=this.pendingTrigger$;if(this.pendingTrigger$=void 0,t.data.changed&&t.data.curr===e)return e.pipe(Object(a.a)(()=>{this.deferSyncRows(16,()=>this.tickVirtualLoading(-1)),this.currentSessionToken=void 0}))}if(this.currentSessionToken&&t.data.changed&&t.data.curr===this.currentSessionToken){if(this.ds.hostGrid.viewport.isScrolling)return this.handleScrolling(t),Object(r.a)(this.ds.source);const{result:e,event:i}=this.invokeRuntimeOnTrigger(t);if(e&&i){const{source:t}=this.ds;return k(t,i,this.options.blockSize)?(this.pendingTrigger$=e,this.tickVirtualLoading(1),Object(r.a)(t).pipe(Object(a.a)(()=>{this.deferSyncRows(),this.currentSessionToken=void 0,this.ds.refresh(e)}))):e.pipe(Object(a.a)(()=>{this.deferSyncRows(16),this.currentSessionToken=void 0}))}return this.currentSessionToken=void 0,!1}return!!(t.data.changed||this.customTriggers&&y.isCustomBehaviorEvent(t,this.customTriggers))&&(this.cache.clear(),t.isInitial=!0,this.invokeInitialOnTrigger(t))}getAdapter(){return this.adapter||(this.customTriggers=this.factoryOptions.customTriggers||!1,this.adapter=new y(this,{filter:!0,sort:!0,pagination:!0},this.onVirtualLoading)),this.adapter}getDataSource(){return this.ds||(this.ds=new R(this,this.factoryOptions.dsOptions),this.cache=new S(this,this.factoryOptions.cacheOptions),this.ds.onRenderedDataChanged.subscribe(()=>this.onRenderedDataChanged()),this.factoryOptions.onCreated&&this.factoryOptions.onCreated(this.ds)),this.ds}dispose(){this.onVirtualLoading.complete();for(const t of this.timeoutCancelTokens.values())clearTimeout(t)}onRenderedDataChanged(){if(!this.lastEventState.skipNextRender())if(this.currentSessionToken)this.ds.hostGrid.viewport.isScrolling?this.ignoreScrolling||(this.ignoreScrolling=!0,this.ds.hostGrid.viewport.scrolling.pipe(Object(o.a)(t=>0===t),Object(h.a)(1)).subscribe(t=>{this.ignoreScrolling=!1,v(this)&&(this.currentSessionToken=void 0,this.onRenderedDataChanged())})):this.ds.refresh(this.currentSessionToken={});else if(v(this)){const t=this.currentSessionToken={};this.safeAsyncOp(()=>{this.currentSessionToken===t&&this.ds.refresh(t)},16)}}wrapEventState(t){return(this.lastEventState=new V(t)).pipe()}deferSyncRows(t=0,e,i){this.safeAsyncOp(()=>{e&&e(),this.ds.hostGrid.rowsApi.syncRows("data",!0),i&&i()},t)}safeAsyncOp(t,e){const i=setTimeout(()=>{this.timeoutCancelTokens.delete(i),t()},e);this.timeoutCancelTokens.add(i)}tickVirtualLoading(t){this.virtualLoadingSessions=this.virtualLoadingSessions+t;const e=this.onVirtualLoading.value;switch(this.virtualLoadingSessions){case 0:e&&this.onVirtualLoading.next(!1);break;case 1:!e&&this.onVirtualLoading.next(!0);break;default:this.virtualLoadingSessions<0&&(this.virtualLoadingSessions=0)}}handleScrolling(t){this.tickVirtualLoading(1);const e=this.cache.matchNewBlock(),i=!!e&&this.tryGetInfiniteEvent(t,e);!1!==i&&k(this.ds.source,i,this.options.blockSize),this.ds.hostGrid.viewport.scrolling.pipe(Object(o.a)(t=>0===t),Object(h.a)(1)).subscribe(e=>{const{result:i}=this.invokeRuntimeOnTrigger(t);i?(this.pendingTrigger$&&this.tickVirtualLoading(-1),this.ds.refresh(this.pendingTrigger$=i)):this.pendingTrigger$?this.tickVirtualLoading(-1):this.ds.refresh(this.pendingTrigger$=Object(r.a)(this.ds.source))})}invokeInitialOnTrigger(t){const e=this.tryGetInfiniteEvent(t,this.cache.createInitialBlock()),i=this.queue.execute(e);return i&&i.pipe(this.wrapEventState(e),Object(c.a)(e=>{this.cache.clear(),e.length>1&&this.cache.update(0,e.length-1,1),R.updateVirtualSize(this.options.initialVirtualSize,e),t.isInitial||this.ds.hostGrid.viewport.scrollToOffset(0)}))}invokeRuntimeOnTrigger(t){const e=this.cache.matchNewBlock(),i=!!e&&this.tryGetInfiniteEvent(t,e);if(!1!==i){if(this.lastEventState.isDone()&&this.lastEventState.rangeEquals(i))return{event:!1};i.eventSource="infiniteScroll";const t=this.queue.execute(i,!0);if(!1!==t)return{event:i,result:t.pipe(this.wrapEventState(i),Object(l.a)(t=>function(t,e,i){if(t.cache.empty)return i;const s=t.getDataSource().source,n=t.cache.update(e.fromRow,e.toRow,e.direction);for(const[a,o]of n)for(let t=a;t<=o;t++)s[t]=u;const{fromRow:r}=e;for(let a=0,o=i.length;a<o;a++)s[a+r]=i[a];return s}(this,i,t)))}}return{event:i}}tryGetInfiniteEvent(t,e){const i=this.totalLength||0;return t.updateTotalLength=t=>{this.totalLength=t},t.totalLength=i,function(t,e,i){const[s,n,r]=i;return e.isInitial||1===s&&r===t-1&&(e.isLastBlock=!0),e.direction=s,e.fromRow=n,e.offset=r-n+1,e.toRow=r,e}(i,t,e)}}class A extends s.e{withInfiniteScrollOptions(t){return this.infiniteScrollOptions=t,this}withCacheOptions(t,e){return this.cacheOptions={type:t,options:e},this}create(){return this.context=new _({onTrigger:this._adapter.onTrigger,customTriggers:this._adapter.customTriggers,onCreated:this._onCreated,dsOptions:this._dsOptions,infiniteOptions:this.infiniteScrollOptions,cacheOptions:this.cacheOptions}),super.onCreated(null),super.create()}createAdapter(){return this.context.getAdapter()}createDataSource(t){return this.context.getDataSource()}}function B(){return new A}var I=i("PIXP"),E=i("8r4k"),j=i("ofXK"),M=i("f6nW"),N=i("4dOD"),P=i("fXoL");function G(t,e){1&t&&(P.Xb(0,"pbl-ngrid-row",1),P.Lc(1," ...Loading\n"),P.Wb())}let q=(()=>{class t{createCell(t){}destroyCell(t){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=P.Lb({type:t,selectors:[["pbl-ngrid-default-infinite-virtual-row"]],decls:1,vars:0,consts:[["in","","class","pbl-ngrid-infinite-virtual-row","infiniteRow","",4,"pblNgridInfiniteVirtualRowDef"],["in","","infiniteRow","",1,"pbl-ngrid-infinite-virtual-row"]],template:function(t,e){1&t&&P.Jc(0,G,2,0,"pbl-ngrid-row",0)},directives:[I.a,E.a],styles:['.pbl-ngrid-infinite-virtual-row .pbl-ngrid-cell{position:relative}.pbl-ngrid-infinite-virtual-row .pbl-ngrid-cell:before{position:absolute;top:12px;left:12px;right:12px;bottom:12px;content:" ";-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeload;animation-name:placeload;-webkit-animation-timing-function:ease;animation-timing-function:ease;background:#f6f7f8;background:#eee;background:linear-gradient(90deg,#eee 8%,#ddd 18%,#eee 33%);background-size:200px 100%;border-radius:4px}@-webkit-keyframes placeload{0%{background-position:-200px 0}to{background-position:200px 0}}@keyframes placeload{0%{background-position:-200px 0}to{background-position:200px 0}}'],encapsulation:2}),t})();const X="infiniteScroll",$=(t,e)=>e===u,K=(t,e)=>!$(0,e);class F{constructor(t,e,i){this.grid=t,this.pluginCtrl=e,this.injector=i,this._enabled=!1,this._removePlugin=e.setPlugin(X,this),t.registry.changes.subscribe(t=>{for(const e of t)switch(e.type){case"infiniteVirtualRow":"remove"===e.op&&(this.pluginCtrl.extApi.cdkTable.removeRowDef(e.value),this._infiniteVirtualRowDef=void 0),this.setupInfiniteVirtualRow()}}),e.events.subscribe(t=>{if("onDataSource"===t.kind){const i=this._enabled;this._enabled=t.curr instanceof R,this._enabled!==i&&e.onInit().subscribe(()=>this.updateTable())}else"onDestroy"===t.kind&&(this._infiniteVirtualRowRef&&this._infiniteVirtualRowRef.destroy(),this._removePlugin(this.grid))})}static create(t,e){const i=s.n.find(t);return new F(t,i,e)}setupInfiniteVirtualRow(){const t=this.grid;if(this._infiniteVirtualRowDef&&(this.pluginCtrl.extApi.cdkTable.removeRowDef(this._infiniteVirtualRowDef),this._infiniteVirtualRowDef=void 0),this._enabled){let e=t.registry.getSingle("infiniteVirtualRow");if(e)this._infiniteVirtualRowDef=e=e.clone(),Object.defineProperty(e,"when",{enumerable:!0,get:()=>$});else if(!this._infiniteVirtualRowRef)return this._infiniteVirtualRowRef=this.injector.get(P.j).resolveComponentFactory(q).create(this.injector),void this._infiniteVirtualRowRef.changeDetectorRef.detectChanges()}this.resetTableRowDefs()}resetTableRowDefs(){this._infiniteVirtualRowDef&&(!1===this._enabled?this.pluginCtrl.extApi.cdkTable.removeRowDef(this._infiniteVirtualRowDef):this.pluginCtrl.extApi.cdkTable.addRowDef(this._infiniteVirtualRowDef))}updateTable(){this.grid._tableRowDef.when=this._enabled?K:void 0,this.setupInfiniteVirtualRow(),this.pluginCtrl.extApi.cdkTable.updateRowDefCache(),this.pluginCtrl.extApi.cdkTable.multiTemplateDataRows=!!this._enabled}}let J=(()=>{class t{constructor(){s.n.onCreatedSafe(t,(e,i)=>{i&&i.hasAncestor(t)&&i.createPlugin(X)})}}return t.NGRID_PLUGIN=Object(s.v)({id:X,factory:"create"},F),t.\u0275mod=P.Pb({type:t}),t.\u0275inj=P.Ob({factory:function(e){return new(e||t)},imports:[[j.c,M.r,s.k,N.a]]}),t})()},PIXP:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var s=i("XEBs"),n=i("fXoL");let r=(()=>{class t extends s.q{ngOnInit(){this.registry.setSingle("infiniteVirtualRow",this)}ngOnDestroy(){this.registry.setSingle("infiniteVirtualRow",void 0)}}return t.\u0275fac=function(e){return a(e||t)},t.\u0275dir=n.Mb({type:t,selectors:[["","pblNgridInfiniteVirtualRowDef",""]],inputs:{columns:["pblNgridInfiniteVirtualRowDefColumns","columns"],when:["pblNgridInfiniteVirtualRowDefWhen","when"]},features:[n.Cb]}),t})();const a=n.Zb(r)}}]);