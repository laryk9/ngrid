(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{lKyu:function(e,t,i){"use strict";i.r(t),i.d(t,"InfiniteScrollExampleModule",function(){return j});var n=i("mrSG"),s=i("ofXK"),a=i("XEBs"),o=i("4dOD"),r=i("bv9b"),l=i("LpJu"),c=i("YT2F"),p=i("WPM6"),d=i("fluT"),b=i("fXoL"),g=i("XkVd");function h(e,t){1&e&&b.Sb(0,"mat-progress-bar",2)}let u=(()=>{let e=class{constructor(e){this.datasource=e,this.loading=!1,this.columns=Object(a.s)().table({prop:"id",width:"100px"},{prop:"name",width:"100px"},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",width:"25%"}).build(),this.ds=Object(a.t)().onTrigger(e=>this.allPeople?(this.loading=!1,Promise.resolve(this.allPeople.slice(0,Math.min(this.allPeople.length,this.ds.source.length+50)))):this.datasource.getPeople(100,1e3).then(e=>(this.allPeople=e,this.allPeople.slice(0,Math.min(this.allPeople.length,(this.ds.source||[]).length+50))))).create()}ngAfterViewInit(){this.ds.onRenderedDataChanged.subscribe(()=>{this.ds.length-this.ds.renderStart<20&&(this.loading||(this.loading=!0,setTimeout(()=>this.ds.refresh(),1e3*Math.random())))})}};return e.\u0275fac=function(t){return new(t||e)(b.Rb(d.a))},e.\u0275cmp=b.Lb({type:e,selectors:[["pbl-infinite-scroll-example"]],decls:2,vars:3,consts:[[3,"dataSource","columns"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(e,t){1&e&&(b.Xb(0,"pbl-ngrid",0),b.Jc(1,h,1,0,"mat-progress-bar",1),b.Wb()),2&e&&(b.qc("dataSource",t.ds)("columns",t.columns),b.Fb(1),b.qc("ngIf",t.loading))},directives:[g.a,s.t,r.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(n.a)([Object(c.e)("pbl-infinite-scroll-example",{title:"Infinite Scroll"}),Object(n.b)("design:paramtypes",[d.a])],e),e})();var m=i("HDdC");function f(e,t){1&e&&b.Sb(0,"mat-progress-bar",2)}let w=(()=>{let e=class{constructor(e){this.client=e,this.columns=Object(a.s)().table({prop:"id",width:"100px",pIndex:!0},{prop:"name",width:"100px",editable:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",width:"25%"}).build(),this.ds=Object(l.b)().withInfiniteScrollOptions({blockSize:100,initialVirtualSize:100}).withCacheOptions("sequenceBlocks").onTrigger(e=>{if(e.isInitial)return this.ds.setCacheSize(800),this.client.getPeople({pagination:{itemsPerPage:100,page:1}}).then(t=>(this.ds.updateVirtualSize(t.pagination.totalItems),e.updateTotalLength(t.pagination.totalItems),t.items));{console.log(e.fromRow,e.toRow);const t=e.fromRow%100,i=Math.floor(e.fromRow/100)+1,n=[this.client.getPeople({pagination:{itemsPerPage:100,page:i}})];return t>0&&n.push(this.client.getPeople({pagination:{itemsPerPage:100,page:i+1}})),new m.a(i=>(console.log(`NEW CALL WITH ${e.fromRow} - ${e.toRow}`),Promise.all(n).then(([e,n])=>{const s=e.items.slice(t,100);n&&s.push(...n.items.slice(0,t)),i.next(s),i.complete()}).catch(e=>i.error(e)),()=>console.log(`DONE WITH ${e.fromRow} - ${e.toRow}`)))}}).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Rb(d.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["pbl-infinite-scroll-data-source-example"]],decls:3,vars:5,consts:[[3,"dataSource","columns"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(e,t){1&e&&(b.Xb(0,"pbl-ngrid",0),b.Jc(1,f,1,0,"mat-progress-bar",1),b.kc(2,"async"),b.Wb()),2&e&&(b.qc("dataSource",t.ds)("columns",t.columns),b.Fb(1),b.qc("ngIf",b.lc(2,3,t.ds.adapter.virtualRowsLoading)))},directives:[g.a,s.t,r.a],pipes:[s.b],styles:[""],encapsulation:2,changeDetection:0}),e=Object(n.a)([Object(c.e)("pbl-infinite-scroll-data-source-example",{title:"Infinite Scroll Data Source"}),Object(n.b)("design:paramtypes",[d.b])],e),e})();var S=i("PIXP"),O=i("ejGh");function I(e,t){1&e&&b.Sb(0,"mat-progress-bar",3)}function P(e,t){1&e&&b.Sb(0,"pbl-ngrid-row",4)}let x=(()=>{let e=class{constructor(e){this.client=e,this.columns=Object(a.s)().table({prop:"id",width:"100px",pIndex:!0},{prop:"name",width:"100px",editable:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",width:"25%"}).build(),this.ds=Object(l.b)().withInfiniteScrollOptions({blockSize:100,initialVirtualSize:100}).withCacheOptions("fragmentedBlocks",{strictPaging:!1}).onTrigger(e=>e.isInitial?(this.ds.setCacheSize(800),this.client.getPeople({pagination:{skip:0,limit:100}}).then(t=>(this.ds.updateVirtualSize(t.pagination.totalItems),e.updateTotalLength(t.pagination.totalItems),t.items))):(console.log(e.fromRow,e.toRow),this.client.getPeople({pagination:{skip:e.fromRow,limit:e.toRow-e.fromRow+1}}).then(e=>e.items))).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Rb(d.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["pbl-index-based-paging-example"]],decls:4,vars:5,consts:[[3,"dataSource","columns"],["mode","indeterminate",4,"ngIf"],["in","","class","pbl-ngrid-infinite-virtual-row","row","",4,"pblNgridInfiniteVirtualRowDef"],["mode","indeterminate"],["in","","row","",1,"pbl-ngrid-infinite-virtual-row"]],template:function(e,t){1&e&&(b.Xb(0,"pbl-ngrid",0),b.Jc(1,I,1,0,"mat-progress-bar",1),b.kc(2,"async"),b.Jc(3,P,1,0,"pbl-ngrid-row",2),b.Wb()),2&e&&(b.qc("dataSource",t.ds)("columns",t.columns),b.Fb(1),b.qc("ngIf",b.lc(2,3,t.ds.adapter.virtualRowsLoading)))},directives:[g.a,s.t,S.a,r.a,O.a],pipes:[s.b],styles:[""],encapsulation:2,changeDetection:0}),e=Object(n.a)([Object(c.e)("pbl-index-based-paging-example",{title:"Index Based Paging"}),Object(n.b)("design:paramtypes",[d.b])],e),e})(),R=(()=>{let e=class{constructor(e){this.client=e,this.columns=Object(a.s)().table({prop:"id",width:"100px",pIndex:!0},{prop:"name",width:"100px"},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",width:"25%"}).build(),this.ds=Object(l.b)().withInfiniteScrollOptions({blockSize:100,initialVirtualSize:100}).withCacheOptions("fragmentedBlocks",{strictPaging:!1}).setCustomTriggers("filter","sort").onTrigger(e=>{if(e.isInitial)return this.ds.setCacheSize(800),this.client.getPeople({pagination:{skip:0,limit:100}}).then(t=>(this.ds.updateVirtualSize(t.pagination.totalItems),e.updateTotalLength(t.pagination.totalItems),t.items));switch(e.eventSource){case"infiniteScroll":return this.client.getPeople({pagination:{skip:e.fromRow,limit:e.toRow-e.fromRow+1}}).then(e=>e.items);case"customTrigger":break;default:throw new Error("This should NEVER EVENT happen...")}}).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Rb(d.b))},e.\u0275cmp=b.Lb({type:e,selectors:[["pbl-custom-triggers-example"]],decls:1,vars:2,consts:[[3,"dataSource","columns"]],template:function(e,t){1&e&&b.Sb(0,"pbl-ngrid",0),2&e&&b.qc("dataSource",t.ds)("columns",t.columns)},directives:[g.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(n.a)([Object(c.e)("pbl-custom-triggers-example",{title:"Custom Triggers"}),Object(n.b)("design:paramtypes",[d.b])],e),e})(),j=(()=>{let e=class{};return e.\u0275mod=b.Pb({type:e}),e.\u0275inj=b.Ob({factory:function(t){return new(t||e)},imports:[[s.c,p.a,r.b,a.k,o.a,l.a]]}),e=Object(n.a)([Object(c.a)(u,w,x,R)],e),e})()}}]);