(function(t){function e(e){for(var i,n,l=e[0],r=e[1],c=e[2],u=0,p=[];u<l.length;u++)n=l[u],o[n]&&p.push(o[n][0]),o[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,n=1;n<a.length;n++){var r=a[n];0!==o[r]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},o={app:0},s=[];function n(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d9f8c004"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,i){a=o[t]=[e,i]});e.push(a[2]=i);var s,r=document.createElement("script");r.charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.src=n(t),s=function(e){r.onerror=r.onload=null,clearTimeout(c);var a=o[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,n=new Error("Loading chunk "+t+" failed.\n("+i+": "+s+")");n.type=i,n.request=s,a[1](n)}o[t]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:r})},12e4);r.onerror=r.onload=s,document.head.appendChild(r)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/sweetart/",l.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1207:function(t,e,a){},"287b":function(t,e,a){"use strict";var i=a("1207"),o=a.n(i);o.a},"3da9":function(t){t.exports={message:"hello i18n !!"}},"41f3":function(t,e,a){"use strict";var i=a("dfc8"),o=a.n(i);o.a},"49f8":function(t,e,a){var i={"./en.json":"edd4","./sk.json":"3da9"};function o(t){var e=s(t);return a(e)}function s(t){var e=i[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}o.keys=function(){return Object.keys(i)},o.resolve=s,t.exports=o,o.id="49f8"},"53c7":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),o=a("bb71");a("da64");i["a"].use(o["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{staticStyle:{"z-index":"900"},attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("div",{staticStyle:{float:"left","margin-right":"20px"}},[a("v-img",{attrs:{src:"/sweetart/lollipop.png",width:"20px"}})],1),a("v-btn",{attrs:{flat:"",to:"/","active-class":""}},[a("span",{staticClass:"headline text-uppercase"},[t._v("SWEET")]),a("span",{staticClass:"headline text-uppercase font-weight-light"},[t._v("art")])])],1),a("v-spacer"),a("span",{staticClass:"display-1"},[t._v("\n       "+t._s(t.mainTitle)+"\n    ")]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{attrs:{slot:"activator",color:"#f01663",dark:""},slot:"activator"},[t._v("Kategórie")]),a("v-list",t._l(t.items,function(e,i){return a("v-list-tile",{key:i,on:{click:function(e){t.toGallery(i)}}},[a("v-list-tile-title",[t._v(t._s(e.text))])],1)}),1)],1)],1),a("router-view")],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"700px"},attrs:{id:t.id}},[a("v-img",{attrs:{src:t.src}},[a("div",{attrs:{id:"inner-"+t.id}})])],1)},r=[],c={props:["src","title","id"],created:function(){var t=document.getElementById("intro-1");console.log("created bgIMG",this.id,document.getElementById("intro-1")),t&&(t.getElementsByClassName("v-responsive__content")[0].style.backgroundColor="rgba(0,0,0,0.3);")}},u=c,d=(a("287b"),a("2877")),p=a("6544"),g=a.n(p),m=a("adda"),f=Object(d["a"])(u,l,r,!1,null,"061a6bec",null);f.options.__file="BgImage.vue";var v=f.exports;g()(f,{VImg:m["a"]});var h={name:"App",components:{BgImg:v},mounted:function(){console.log("mounted")},updated:function(){console.log("component APP updated"),console.log("component APP route path",this.$route.path),"/"==this.$route.path?this.$store.commit("setTitle",{title:""}):this.$store.commit("setLoad",!0)},computed:{mainTitle:function(){return this.$store.state.title}},data:function(){return{items:this.$store.state.categories,images:["main/FB_IMG_1549111435078.jpg","main/FB_IMG_1549112091846.jpg"],images1:["main/FB_IMG_1549105914089.jpg","main/FB_IMG_1549112091846.jpg","main/FB_IMG_1549111435078.jpg","main/FB_IMG_1549111914270.jpg"],images3:["images/kytice/FB_IMG_1549109155932.jpg","images/kytice/FB_IMG_1549110519363.jpg","images/kytice/FB_IMG_1549110586176.jpg","images/kytice/IMG_20190204_164714.jpg"],images2:["images/sladkosti/FB_IMG_1549105661214.jpg","images/sladkosti/IMG_20190203_140318.jpg","images/sladkosti/FB_IMG_1549104710376.jpg","images/sladkosti/FB_IMG_1549104426057.jpg"]}},methods:{aaa:function(){},toGallery:function(t){console.log(t),this.$router.push({name:"gallery",params:{id:t+1}})}}},_=h,b=a("7496"),x=a("8336"),y=a("8860"),k=a("ba95"),w=a("5d23"),C=a("e449"),j=a("9910"),I=a("71d9"),F=a("2a7f"),S=Object(d["a"])(_,s,n,!1,null,null,null);S.options.__file="App.vue";var M=S.exports;g()(S,{VApp:b["a"],VBtn:x["a"],VImg:m["a"],VList:y["a"],VListTile:k["a"],VListTileTitle:w["b"],VMenu:C["a"],VSpacer:j["a"],VToolbar:I["a"],VToolbarTitle:F["a"]});var V=a("8c4f"),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{on:{click:function(e){t.getData()}}},[t._v("GET DATA")]),t.loading?a("v-progress-linear",{attrs:{indeterminate:!0,active:t.loading}}):t._e(),t.loading?t._e():a("v-timeline",{staticClass:"lime lighten-4",staticStyle:{"padding-top":"100px"},attrs:{dense:""}},t._l(t.photos,function(e){return a("v-timeline-item",{key:e.topicID,staticClass:"mx-4",attrs:{color:e.color,small:"","fill-dot":"",right:""}},[a("div",{staticClass:"date-label"},[a("div",[t._v(t._s(e.date.substring(8,10))+".\n      "+t._s(t.mmm[Number(e.date.substring(5,7))]))]),a("div",{staticStyle:{"font-size":"130%"}},[t._v(t._s(e.date.substring(0,4)))])]),a("v-card",{style:{color:e.colorF,"min-height":"350px","background-image":e.gradient},attrs:{color:e.color2}},[a("v-card-title",{style:{"background-color":e.color1}},[a("v-container",{staticClass:"py-0"},[a("h2",{staticClass:"font-weight-light",style:{color:e.colorF,fontSize:"28px"}},[t._v("\n            "+t._s(e.title)+" \n           ")])])],1),e.showAll?t._e():a("v-container",[e.showAll?t._e():a("swiper",{staticStyle:{height:"290px"},attrs:{options:t.swiperOption}},[a("div",{staticClass:"swiper-button-prev swiper-button-black",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._l(e.images,function(i,o){return a("swiper-slide",{key:o,staticStyle:{width:"auto"}},[a("img",{staticStyle:{"max-height":"250px"},attrs:{src:"../uploads/"+t.id+"/"+e.topicID+"/tiny_"+i.img}})])})],2)],1),a("v-container",{staticClass:"pa-3"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("silentbox-group",t._l(e.images,function(i,o){return a("silentbox-item",{key:o,attrs:{src:"../uploads/"+t.id+"/"+e.topicID+"/"+i.img}},[a("v-avatar",{attrs:{tile:!0,size:48,color:"grey lighten-4"}},[a("img",{staticClass:"pa-1",staticStyle:{"max-height":"250px"},attrs:{src:"../uploads/"+t.id+"/"+e.topicID+"/tiny_"+i.img}})])],1)}),1)],1),a("v-flex",{attrs:{xs12:"",md2:""}},[a("v-btn",{on:{click:function(t){e.showAll=!e.showAll}}},[e.showAll?a("span",[t._v("Náhľad")]):t._e(),e.showAll?t._e():a("span",[t._v("Ukázať všetko")])])],1)],1)],1),e.showAll?a("v-container",[a("silentbox-group",[a("v-layout",{attrs:{wrap:""}},t._l(e.images,function(i,o){return a("v-flex",{key:o,attrs:{xs6:"",md3:"","d-flex":""}},[a("silentbox-item",{attrs:{src:"../uploads/"+t.id+"/"+e.topicID+"/"+i.img}},[a("v-img",{staticClass:"ma-2",attrs:{src:"../uploads/"+t.id+"/"+e.topicID+"/tiny_"+i.img,"max-height":"200"}},[a("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1)],1)],1)}),1)],1)],1):t._e()],1)],1)}),1)],1)},T=[],A=(a("dfa4"),a("7212")),B=a("6929"),E={components:{swiper:A["swiper"],swiperSlide:A["swiperSlide"]},props:["_title","_items"],computed:{title:function(){return this.$store.state.categories[this.id].text},id:function(){return this.$route.params.id}},created:function(){console.log("component GALLERY created"),this.getData(),this.$store.commit("setTitle",{title:this.$store.state.categories[this.id-1].text})},mounted:function(){console.log("component GALLERY mounted")},updated:function(){console.log("component GALLERY updated"),console.log("this.$store.state.loadData",this.$store.state.loadData),this.$store.state.loadData&&this.getData()},methods:{swapPanel:function(t){console.log("SWAP panel",t,t.panels),t.panels[0]=!t.panels[0],t.panels[1]=!t.panels[1]},testLog:function(){console.log("test Log")},toggleShowAll:function(t){console.log("showAll ",this.photos[t].showAll),this.photos[t].showAll=!this.photos[t].showAll,console.log("showAll",this.photos[t].showAll)},hideLitebox:function(){this.showLitebox=!1},getData:function(){var t=this,e=this;this.loading=!0,this.axios.get("http://sweetart.sk/sweetart/topic.php?id="+e.id).then(function(a){console.log("SUCCESS",a),t.loading=!1,t.$store.commit("setLoad",!1);for(var i=a.data,o=0,s=[],n=-1,l=0;l<i.length;l++){var r=i[l];if(r.topic_id==o)s[n].images.push({img:r.file_name,src:r.file_name}),s[n].imagesLight.push({src:"../uploads/"+e.id+"/"+r.topic_id+"/"+r.file_name});else{var c=B(r.color).hsl().string(),u=B(r.color).lighten(.5).string();s.push({topicID:r.topic_id,title:r.title,subtitle:r.subtitle,btnText:"Ukázať všetko",date:r.date,color:r.color,colorF:r.color_f,color1:c,color2:u,panels:[!0,!1],gradient:"linear-gradient(to top left,"+c+","+u+")",showAll:!1,images:[{img:r.file_name,src:r.file_name}],imagesLight:[{src:"../uploads/"+e.id+"/"+r.topic_id+"/"+r.file_name}]}),o=r.topic_id,n++}}t.photos=s}).catch(function(t){console.log("ERROR",t)}).then(function(){})}},data:function(){return{loading:!0,panel:[!0,!0,!0],mmm:["Jan","Feb","Mar","Apr","Máj","Jún","Júl","Aug","Sep","Okt","Nov","Dec"],showLitebox:!1,photos:[{topicID:0,title:"",subtitle:"",btnText:"",date:null,color:"",colorF:"",color1:"",color2:"",panels:[!0,!1],gradient:"",showAll:!1,images:[{img:"",src:""}],imagesLight:[{src:""}]}],swiperOption:{spaceBetween:30,slidesPerView:"auto",centeredSlides:!1,loop:!1,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}},setting:{autoRoll:!0,imgStyle:{borderRadius:"5px"},image:["main/FB_IMG_1549105914089.jpg","main/FB_IMG_1549112091846.jpg","main/FB_IMG_1549111435078.jpg","main/FB_IMG_1549111914270.jpg","images/kytice/FB_IMG_1549109155932.jpg"],styleObject:{width:"450",height:"250"},interval:2e3},items:[{id:0,color:"red",title:"Kytica KINDER",date:"22.4.2018"},{id:1,color:"blue",title:"Kytica filaova",date:"24.6.2018"},{id:2,color:"pink",title:"Modra kytica",date:"15.2.2018"}],images1:["main/FB_IMG_1549105914089.jpg","main/FB_IMG_1549112091846.jpg","main/FB_IMG_1549111435078.jpg","main/FB_IMG_1549111914270.jpg","images/kytice/FB_IMG_1549109155932.jpg","images/kytice/FB_IMG_1549110519363.jpg","images/kytice/FB_IMG_1549110586176.jpg","images/kytice/IMG_20190204_164714.jpg","images/sladkosti/FB_IMG_1549105661214.jpg","images/sladkosti/IMG_20190203_140318.jpg","images/sladkosti/FB_IMG_1549104710376.jpg","images/sladkosti/FB_IMG_1549104426057.jpg"]}}},D=E,L=(a("7d8a"),a("8212")),P=a("b0af"),U=a("12b2"),$=a("a523"),O=a("0e8f"),z=a("a722"),R=a("490a"),N=a("8e36"),K=a("8414"),q=a("1e06"),J=Object(d["a"])(D,G,T,!1,null,null,null);J.options.__file="Gallery.vue";var Y=J.exports;g()(J,{VAvatar:L["a"],VBtn:x["a"],VCard:P["a"],VCardTitle:U["a"],VContainer:$["a"],VFlex:O["a"],VImg:m["a"],VLayout:z["a"],VProgressCircular:R["a"],VProgressLinear:N["a"],VTimeline:K["a"],VTimelineItem:q["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{"margin-top":"100px"}},[a("div",{staticClass:"large-12 medium-12 small-12 cell"},[a("h1",[t._v("Vue JS Axios - Image Upload using PHP API - ItSolutionStuff.com")]),a("label",[t._v("\n        File\n        "),a("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(e){t.onChangeFileUpload()}}})]),a("button",{on:{click:function(e){t.submitForm()}}},[t._v("Upload")])]),a("hr"),a("div",{staticStyle:{display:"flex","justify-content":"center"},attrs:{id:"my-strictly-unique-vue-upload-multiple-image"}},[a("vue-upload-multiple-image",{attrs:{"data-images":t.images,dragText:"dragText",browseText:"browseText",primaryText:"primaryText"},on:{"upload-success":t.uploadImageSuccess,"before-remove":t.beforeRemove,"edit-image":t.editImage,"data-change":t.dataChange}})],1),a("upload-image",{attrs:{url:"up.php",name:"file",max_files:5}}),a("file-upload",{ref:"upload",staticClass:"btn btn-primary",attrs:{"post-action":"up.php",extensions:"gif,jpg,jpeg,png,webp",accept:"image/png,image/gif,image/jpeg,image/webp",multiple:!0,size:10485760},on:{"input-filter":t.inputFilter,"input-file":t.inputFile},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}},[a("i",{staticClass:"fa fa-plus"}),t._v("\n          Select files\n        ")]),t.$refs.upload&&t.$refs.upload.active?a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.$refs.upload.active=!1}}},[a("i",{staticClass:"fa fa-stop",attrs:{"aria-hidden":"true"}}),t._v("\n          Stop Upload\n")]):a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.$refs.upload.active=!0}}},[a("i",{staticClass:"fa fa-arrow-up",attrs:{"aria-hidden":"true"}}),t._v("\n          Start Upload\n        ")])],1)},H=[],Z=(a("7f7f"),a("fc5c")),Q=a("8b7f"),X=a("8019"),tt=a.n(X),et={components:{VueUploadMultipleImage:Z["a"],UploadImage:Q["a"],FileUpload:tt.a},data:function(){return{selectedFile:null,images:[],file:null,files:[]}},methods:{inputFilter:function(t,e,a){if(t&&!e){if(/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(t.name))return a();if(/\.(php5?|html?|jsx?)$/i.test(t.name))return a()}},inputFile:function(t,e){t&&!e&&console.log("add",t),t&&e&&console.log("update",t),!t&&e&&console.log("remove",e)},uploadImageSuccess:function(t,e,a){console.log("data",t,e,a),window.f=t,this.axios.post("up.php",{data:t}).then(function(t){console.log(t)})},beforeRemove:function(t,e,a){console.log("index",t,a);var i=confirm("remove image");1==i?e():console.log("else")},editImage:function(t,e,a){console.log("edit data",t,e,a)},dataChange:function(t){console.log(t)},submitForm:function(){var t=new FormData;t.append("file",this.file),console.log(t),window.x=t,this.axios.post("up.php",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t.data)}).catch(function(){console.log("FAILURE!!")})},onChangeFileUpload:function(){this.file=this.$refs.file.files[0]}},onFileChanged:function(t){this.selectedFile=t.target.files[0]},onUpload:function(){console.log(this.selectedFile);var t=new FormData;t.append("myFile",this.selectedFile,this.selectedFile.name),this.axios.post("my-domain.com/file-upload",t,{onUploadProgress:function(t){console.log(t.loaded/t.total)}})}},at=et,it=(a("41f3"),Object(d["a"])(at,W,H,!1,null,null,null));it.options.__file="Upload.vue";var ot=it.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("bg-img",{attrs:{id:"intro-1",src:"IMG_20180522_084518.jpg"}}),a("div",{staticStyle:{color:"white",position:"absolute",top:"189px","text-align":"right",right:"10%"},attrs:{id:"title"}},[a("div",{staticClass:"display-2 my-3",staticStyle:{color:"#f01663","font-weight":"700","font-size":"78px !important"},attrs:{"data-aos":"slide-up"}},[t._v(t._s(t.title.t1.text))]),a("div",{staticClass:"display-2",staticStyle:{"font-size":"30px !important"},attrs:{"data-aos":"slide-up"}},[t._v(t._s(t.title.t2.text))]),a("div",{staticStyle:{"font-weight":"700","font-size":"30px !important","margin-top":"30px"},attrs:{"data-aos":"slide-up"}},[t._v(t._s(t.title.t3.text))]),a("div",{staticStyle:{"font-size":"20px !important"},attrs:{"data-aos":"slide-up"}},[t._v(t._s(t.title.t4.text))])]),a("panel",{attrs:{id:"1",title:"CANDY BARY",text:'Candy bar je takzvaný "sladký stôl" vo forme samostatného, krásne zdobeného stola.\n  To predstavuje miesto, na ktorom existujú rôzne druhy cukroviniek, koláčov, sušienok, ovocia, želé, ... \n  Plne závisí od vašich túžob, možností a vkusu.\n  Candy bar je možné realizovať kdekoľvek a kedykoľvek. Je čoraz obľúbenejšou dekoráciou rôznych osláv, párty,\n   firemných eventov.',images:t.images1}}),a("bg-img",{attrs:{src:"IMG_20180522_084518.jpg"}}),a("panel",{attrs:{id:"2",title:"SLADKOSTI",text:"Sladkosť je cukrovinka, ktorá upúta pozornosť svojím vzhľadom, pestrosťou, originalitou. \n  Aj obyčajná sladkosť môže vyzerať chutnejšie, lákavejšie, nápadito či úplne inak.",images:t.images2}}),a("bg-img",{attrs:{src:"IMG_20180522_084518.jpg"}}),a("panel",{attrs:{id:"3",title:"SLADKÉ KYTICE",text:"Sladká kytica je plná nápadov, pestrostí, chute. Obsahuje rôzne druhy cukroviniek, želé, ovocia ...\n  Čoraz viac získava značnú popularitu vďaka svojej jedinečnosti a originalite.",images:t.images3}}),a("bg-img",{attrs:{src:"IMG_20180522_084518.jpg"}}),a("panel",{attrs:{id:"4",title:"DEKORÁCIE",text:"bla bla bla ",images:t.images4}})],1)},nt=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:" lime lighten-4",staticStyle:{position:"relative","z-index":"100","padding-bottom":"20px"}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-card-title",{attrs:{"primary-title":"","data-aos":"slide-up"}},[a("h2",{staticClass:" pa-1",staticStyle:{color:"#f01663","font-weight":"700","font-size":"30px"}},[t._v(t._s(t.title))])]),a("v-card-text",{staticStyle:{"margin-top":"-20px"},attrs:{"data-aos":"slide-up"}},[a("div",{staticClass:"pa-1 subheading",staticStyle:{"font-size":"20px !important"}},[t._v(t._s(t.text))])]),a("v-card-media",[a("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},t._l(t.images,function(t){return a("v-img",{key:t,staticClass:"grey lighten-2 ma-2",attrs:{"data-aos":"zoom-in",src:t,"aspect-ratio":"1","max-width":"300"}},[a("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"})],1)}),1)],1),a("v-card-actions",{attrs:{"data-aos":"slide-up"}},[a("v-spacer"),a("v-btn",{staticStyle:{color:"#f01663","font-weight":"700","font-size":"20px"},attrs:{flat:"",to:"gallery/"+t.id},on:{click:t.setTitle}},[t._v("Viac "),a("v-icon",[t._v("arrow_forward_ios")])],1)],1)],1)],1)],1)},rt=[],ct={props:["id","title","text","images"],methods:{setTitle:function(){this.$store.commit("setTitle",{title:this.title}),this.$store.commit("setID",{id:this.id})}}},ut=ct,dt=a("99d9"),pt=a("b901"),gt=a("132d"),mt=Object(d["a"])(ut,lt,rt,!1,null,null,null);mt.options.__file="Panel.vue";var ft=mt.exports;g()(mt,{VBtn:x["a"],VCard:P["a"],VCardActions:dt["a"],VCardMedia:pt["a"],VCardText:dt["b"],VCardTitle:U["a"],VFlex:O["a"],VIcon:gt["a"],VImg:m["a"],VLayout:z["a"],VSpacer:j["a"]});var vt={components:{BgImg:v,Panel:ft},created:function(){this.show=!0},mounted:function(){this.loaded=!0},methods:{onLoaded:function(){this.loaded=!0,console.log("OnLoaded")}},data:function(){return{loaded:!1,title:{t1:{text:"Sweet  Art",show:!1},t2:{text:"Sladké Umenie",show:!1},t3:{text:"Aby ste mohli robiť veci inak, musíte ich inak i vidieť."},t4:{text:"Paul Allaire "}},items:[{title:"Candy Bary"},{title:"Sladkosti"}],images:["main/FB_IMG_1549111435078.jpg","main/FB_IMG_1549112091846.jpg"],images1:["images/1/S_IMG_20190219_193736.jpg","images/1/S_IMG_20170627_112224.jpg","images/1/S_FB_IMG_1549112100773.jpg","images/1/S_IMG_20190219_181755.jpg"],images3:["images/kytice/FB_IMG_1549109155932.jpg","images/kytice/FB_IMG_1549110519363.jpg","images/kytice/FB_IMG_1549110586176.jpg","images/kytice/IMG_20190204_164714.jpg"],images2:["images/sladkosti/FB_IMG_1549105661214.jpg","images/sladkosti/IMG_20190203_140318.jpg","images/2/S_IMG_20190208_103814.jpg","images/sladkosti/FB_IMG_1549104710376.jpg"],images4:["images/4/S_IMG_20180426_171429.jpg","images/4/S_IMG_20180421_093742.jpg"]}}},ht=vt,_t=Object(d["a"])(ht,st,nt,!1,null,null,null);_t.options.__file="Main.vue";var bt=_t.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"upload2"}},[a("div",{staticClass:"container"},[t.isInitial||t.isSaving?a("form",{attrs:{enctype:"multipart/form-data",novalidate:""}},[a("h1",[t._v("Upload images")]),a("div",{staticClass:"dropbox"},[a("input",{staticClass:"input-file",attrs:{type:"file",multiple:"",name:t.uploadFieldName,disabled:t.isSaving,accept:"image/*"},on:{change:function(e){t.filesChange(e.target.name,e.target.files),t.fileCount=e.target.files.length}}}),t.isInitial?a("p",[t._v("Drag your file(s) here to begin\n          "),a("br"),t._v("or click to browse\n        ")]):t._e(),t.isSaving?a("p",[t._v("Uploading "+t._s(t.fileCount)+" files...")]):t._e()])]):t._e(),t.isSuccess?a("div",[a("h2",[t._v("Uploaded "+t._s(t.uploadedFiles.length)+" file(s) successfully.")]),a("p",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.reset()}}},[t._v("Upload again")])]),a("ul",{staticClass:"list-unstyled"},t._l(t.uploadedFiles,function(t){return a("li",{key:t},[a("img",{staticClass:"img-responsive img-thumbnail",attrs:{src:t.url,alt:t.originalName}})])}),0)]):t._e(),t.isFailed?a("div",[a("h2",[t._v("Uploaded failed.")]),a("p",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.reset()}}},[t._v("Try again")])]),a("pre",[t._v(t._s(t.uploadError))])]):t._e()])])},yt=[],kt=(a("ac6a"),a("774e")),wt=a.n(kt),Ct=a("5176"),jt=a.n(Ct),It=a("bc3a"),Ft=a.n(It),St="http://sweetart.sk/sweetart";function Mt(t){var e="".concat(St,"/up.php");return console.log("axios post URL ",e,t),It["post"](e,t).then(function(t){return t.data}).then(function(t){return t.map(function(t){return jt()({},t,{url:"".concat(St,"/images/").concat(t.id)})})})}var Vt=0,Gt=1,Tt=2,At=3,Bt={name:"upload2",data:function(){return{uploadedFiles:[],uploadError:null,currentStatus:null,uploadFieldName:"photos"}},computed:{isInitial:function(){return this.currentStatus===Vt},isSaving:function(){return this.currentStatus===Gt},isSuccess:function(){return this.currentStatus===Tt},isFailed:function(){return this.currentStatus===At}},methods:{reset:function(){this.currentStatus=Vt,this.uploadedFiles=[],this.uploadError=null},save:function(t){var e=this;this.currentStatus=Gt,Mt(t).then(function(t){e.uploadedFiles=[].concat(t),e.currentStatus=Tt,console.log("upload ",e.uploadedFiles)}).catch(function(t){e.uploadError=t.response,e.currentStatus=At,console.log("error  ",t.response)})},filesChange:function(t,e){var a=new FormData;e.length&&(wt()(Array(e.length).keys()).map(function(i){a.append(t,e[i],e[i].name)}),this.save(a),console.log("filesChange",a))}},mounted:function(){this.reset()}},Et=Bt,Dt=(a("f873"),Object(d["a"])(Et,xt,yt,!1,null,null,null));Dt.options.__file="Upload2.vue";var Lt=Dt.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{"margin-top":"100px"}},[a("v-card",[a("v-card-title",{style:{"background-color":t.color},attrs:{"primary-title":""}},[a("h2",{staticClass:"font-weight-light",style:{color:t.colorF,fontSize:"28px"}},[t._v("\n       "+t._s(t.title))])]),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"px-3",attrs:{counter:250,label:"Nadpis",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-combobox",{staticClass:"px-3",attrs:{items:t.categories,label:"Kategória"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1),a("v-flex",{attrs:{xs7:"",md4:""}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[a("v-text-field",{staticClass:"px-3",attrs:{slot:"activator",label:"Dátum príspevku","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),a("v-date-picker",{attrs:{"first-day-of-week":1,locale:"sk-sk"},on:{input:function(e){t.menu2=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),a("v-flex",{staticClass:"text-xs-center",attrs:{xs5:"",md4:""}},[a("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.dialogColor,callback:function(e){t.dialogColor=e},expression:"dialogColor"}},[a("v-btn",{style:{color:t.colorF},attrs:{slot:"activator",color:t.color},slot:"activator"},[t._v("Color")]),a("v-card",{staticClass:"pa-3 text-xs-center"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("color-picker",{staticStyle:{margin:"auto"},attrs:{width:200,height:200},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("color-picker",{staticStyle:{margin:"auto"},attrs:{width:200,height:200},model:{value:t.colorF,callback:function(e){t.colorF=e},expression:"colorF"}})],1)],1),a("v-btn",{staticClass:"text-xs-center",attrs:{color:"green darken-1",flat:""},on:{click:function(e){t.dialogColor=!1}}},[t._v("OK")])],1)],1)],1)],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[a("v-btn",{attrs:{color:"info"},on:{click:function(e){t.addFiles()}}},[t._v("PRIDAŤ")]),a("label",[a("input",{ref:"photos",attrs:{type:"file",id:"photos",multiple:""},on:{change:function(e){t.handleFileUploads()}}})])],1),a("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[a("v-btn",{attrs:{color:"success",disabled:t.disableUpload,loading:t.uploadProgress>0},on:{click:function(e){t.submitFiles()}}},[t._v("Upload")])],1)],1),a("div",{staticClass:"large-12 medium-12 small-12 cell"},[a("v-list",[a("draggable",{staticClass:"list-group",attrs:{list:t.files},on:{start:function(e){t.dragging=!0},end:function(e){t.dragging=!1},change:t.dragChange}},[a("transition-group",{attrs:{type:"transition",name:t.dragging?null:"flip-list"}},t._l(t.files,function(e,i){return a("v-list-tile",{key:e.name},[a("v-list-tile-avatar",{attrs:{tile:""}},[a("img",{attrs:{id:"img-"+i,src:""}})]),a("v-list-tile-content",[a("v-list-tile-title",[a("small",{staticClass:"px-1"},[t._v(t._s(i+1)+".")]),t._v(t._s(e.name))])],1),a("v-list-tile-action",[a("v-btn",{attrs:{icon:"",ripple:""},on:{click:function(e){t.removeFile(i)}}},[a("v-icon",{attrs:{color:"red lighten-1"}},[t._v("delete")])],1)],1)],1)}),1)],1)],1)],1),a("v-progress-linear",{model:{value:t.uploadProgress,callback:function(e){t.uploadProgress=e},expression:"uploadProgress"}})],1)},Ut=[],$t=a("1516"),Ot=a.n($t),zt=a("1e8a"),Rt=new FileReader;function Nt(t,e){if(t&&t){var a=new FileReader;a.onload=function(t){document.getElementById("img-"+e).setAttribute("src",t.target.result)},a.readAsDataURL(t)}}Rt.onload=function(t){document.getElementById("img1").setAttribute("src",t.target.result)};var Kt={components:{ColorPicker:zt["a"],draggable:Ot.a},data:function(){return{title:"",file:"",files:[],uploadProgress:0,picker:(new Date).toISOString().substr(0,10),date:(new Date).toISOString().substr(0,10),menu:!1,modal:!1,menu2:!1,disableUpload:!0,color:"#ff6600",colorF:"#000",dialogColor:!1,dragging:!1}},computed:{categories:function(){return this.$store.state.categories},dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}},created:function(){this.category=this.$store.state.categories[0]},methods:{dragChange:function(t){console.log("dragChange",t),this.files.forEach(function(t,e){Nt(t,e)})},addFiles:function(){this.$refs.photos.click()},removeFile:function(t){this.files.splice(t,1)},handleFileUploads:function(){for(var t=this.$refs.photos.files,e=0;e<t.length;e++)console.log(e,t[e]),this.files.push(t[e]);this.files.forEach(function(t,e){Nt(t,e)}),this.disableUpload=!1},submitFiles:function(){for(var t=this,e=new FormData,a=0;a<this.files.length;a++){var i=this.files[a];e.append("photos["+a+"]",i)}e.append("title",this.title),e.append("cat_id",this.category.value),e.append("color",this.color),e.append("colorF",this.colorF),e.append("date",this.date);var o=this;this.axios.post("up.php",e,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){console.log(e.loaded/e.total),t.uploadProgress=e.loaded/e.total*100}}).then(function(){o.uploadProgress=0,o.files=[],o.disableUpload=!0,console.log("SUCCESS!!")}).catch(function(t){console.log("ERROR",t)})}}},qt=Kt,Jt=(a("d9d4"),a("2b5d")),Yt=a("2e4b"),Wt=a("169a"),Ht=a("40fe"),Zt=a("c954"),Qt=a("2677"),Xt=Object(d["a"])(qt,Pt,Ut,!1,null,null,null);Xt.options.__file="Upload3.vue";var te=Xt.exports;g()(Xt,{VBtn:x["a"],VCard:P["a"],VCardTitle:U["a"],VCombobox:Jt["a"],VDatePicker:Yt["a"],VDialog:Wt["a"],VFlex:O["a"],VIcon:gt["a"],VLayout:z["a"],VList:y["a"],VListTile:k["a"],VListTileAction:Ht["a"],VListTileAvatar:Zt["a"],VListTileContent:w["a"],VListTileTitle:w["b"],VMenu:C["a"],VProgressLinear:N["a"],VTextField:Qt["a"]});var ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"100px"}},[a("div",{staticClass:"text-xs-center mb-3"},[t._v(t._s(t.panel))]),a("v-expansion-panel",{attrs:{expand:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(5,function(e,i){return a("v-expansion-panel-content",{key:i},[[a("div",[t._v("Item")])],a("v-card",[a("v-card-text",{staticClass:"grey lighten-3"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])],1)],2)}),1)],1)},ae=[],ie={data:function(){return{panel:[!1,!1,!0]}}},oe=ie,se=a("cd55"),ne=a("49e2"),le=Object(d["a"])(oe,ee,ae,!1,null,null,null);le.options.__file="Test.vue";var re=le.exports;g()(le,{VCard:P["a"],VCardText:dt["b"],VExpansionPanel:se["a"],VExpansionPanelContent:ne["a"]}),i["a"].use(V["a"]);var ce=new V["a"]({mode:"history",base:"/sweetart/",routes:[{path:"/",name:"main",component:bt},{path:"/gallery/:id",name:"gallery",component:Y},{path:"/test",name:"test",component:re},{path:"/uploadx",name:"upload",component:ot},{path:"/upload2",name:"upload2",component:Lt},{path:"/upload",name:"upload3",component:te},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),ue=a("2f62");i["a"].use(ue["a"]);var de=new ue["a"].Store({state:{id:null,title:"",loadData:!1,categories:[{text:"Candy bary",value:1},{text:"Kytice",value:2},{text:"Sladkosti",value:3},{text:"Dekorácie",value:4}]},mutations:{setTitle:function(t,e){t.title=e.title},setID:function(t,e){t.id=e.id},setLoad:function(t,e){t.loadData=e}},actions:{}}),pe=a("a7fe"),ge=a.n(pe),me=a("79bb"),fe=a("043e"),ve=a.n(fe),he=a("f5af"),_e=a.n(he),be=(a("e829"),a("4917"),a("a925"));function xe(){var t=a("49f8"),e={};return t.keys().forEach(function(a){var i=a.match(/([A-Za-z0-9-_]+)\./i);if(i&&i.length>1){var o=i[1];e[o]=t(a)}}),e}i["a"].use(be["a"]);var ye=new be["a"]({locale:"sk",fallbackLocale:"en",messages:xe()});i["a"].use(ge.a,Ft.a),i["a"].use(me["a"]),i["a"].use(ve.a),a("9ddc"),i["a"].config.productionTip=!1,i["a"].config.devtools=!0,_e.a.init({duration:1e3}),new i["a"]({router:ce,store:de,i18n:ye,render:function(t){return t(M)}}).$mount("#app")},"610e":function(t,e,a){},"7d8a":function(t,e,a){"use strict";var i=a("c5f4"),o=a.n(i);o.a},c5f4:function(t,e,a){},d9d4:function(t,e,a){"use strict";var i=a("53c7"),o=a.n(i);o.a},dfc8:function(t,e,a){},edd4:function(t){t.exports={message:"hello i18n !!"}},f873:function(t,e,a){"use strict";var i=a("610e"),o=a.n(i);o.a}});
//# sourceMappingURL=app.01cd5d00.js.map