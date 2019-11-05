(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./app/containers/App/actions.js":function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"c",function(){return a}),o.d(t,"b",function(){return i});var n=o("./app/containers/App/constants.js");function r(){return{type:n.a}}function a(e,t){return{type:n.c,repos:e,username:t}}function i(e){return{type:n.b,error:e}}},"./app/containers/App/selectors.js":function(e,t,o){"use strict";o.d(t,"b",function(){return i}),o.d(t,"a",function(){return c}),o.d(t,"c",function(){return s});var n=o("./node_modules/reselect/es/index.js"),r=o("./app/containers/App/reducer.js"),a=function(e){return e.global||r.b},i=function(){return Object(n.a)(a,function(e){return e.loading})},c=function(){return Object(n.a)(a,function(e){return e.error})},s=function(){return Object(n.a)(a,function(e){return e.userData.repositories})}},"./app/containers/SearchPage/index.js":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/react-redux/lib/index.js"),r=o("./node_modules/redux/lib/redux.js"),a=o("./node_modules/reselect/es/index.js"),i=o("./app/utils/injectReducer.js"),c=o("./app/utils/injectSaga.js"),s=o("./app/containers/App/selectors.js"),u=o("./app/containers/App/actions.js"),l="boilerplate/Home/CHANGE_USERNAME";var d=function(e){return e.home},p=function(){return Object(a.a)(d,function(e){return e.username})};function f(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var b={username:""};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){f(e,t,o[t])})}return e}({},e,{username:t.name.replace(/@/gi,"")});default:return e}},h=o("./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.cjs.js"),y=o("./app/containers/App/constants.js"),j=o("./app/utils/request.js"),g=regeneratorRuntime.mark(x),v=regeneratorRuntime.mark(w);function x(){var e,t,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(h.select)(p());case 2:return e=n.sent,t="https://api.github.com/users/".concat(e,"/repos?type=all&sort=updated"),n.prev=4,n.next=7,Object(h.call)(j.a,t);case 7:return o=n.sent,n.next=10,Object(h.put)(Object(u.c)(o,e));case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(4),n.next=16,Object(h.put)(Object(u.b)(n.t0));case 16:case"end":return n.stop()}},g,null,[[4,12]])}function w(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.takeLatest)(y.a,x);case 2:case"end":return e.stop()}},v)}var O,S=o("./node_modules/react/index.js"),_=o.n(S),k=(o("./node_modules/prop-types/index.js"),o("./node_modules/react-helmet/lib/Helmet.js")),P=o("./node_modules/react-router-dom/index.js"),R=o("./node_modules/react-geolocated/dist-modules/index.js");o("./app/containers/SearchPage/style.scss");function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t,o,n){O||(O="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&r)for(var i in r)void 0===t[i]&&(t[i]=r[i]);else t||(t=r||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),s=0;s<a;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:O,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function C(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=E(k.Helmet,{},void 0,E("title",{},void 0,"Home Page"),E("meta",{name:"description",content:"A React.js Boilerplate application"})),F=E("h3",{className:" text-center text-white text-uppercase font-weight-bold"},void 0,"Search for a PokeStop"),H=E("p",{className:"mb-4 text-center text-white"},void 0,"Search for a PokeStop either by its' name or by its rating. Enter your search query or rating and click the adjacent search button."),M=E("div",{className:"input-group-prepend"},void 0,E("span",{className:"input-group-text"},void 0,"Search by Title")),q=E("input",{type:"text",className:"form-control",placeholder:"Enter your query","aria-label":"Recipient's username"}),z=E("div",{className:"input-group-append"},void 0,E(P.Link,{to:"/results"},void 0,E("button",{className:"btn btn-default",type:"submit"},void 0,E("i",{className:"fas fa-search"})))),G=E("div",{className:"input-group-prepend"},void 0,E("span",{className:"input-group-text"},void 0,"Search by Rating")),U=E("select",{className:"custom-select",id:"inputGroupSelect04"},void 0,E("option",{defaultValue:!0},void 0,"Choose..."),E("option",{value:"1"},void 0,"1 Star"),E("option",{value:"2"},void 0,"2 Stars"),E("option",{value:"3"},void 0,"3 Stars"),E("option",{value:"4"},void 0,"4 Stars"),E("option",{value:"5"},void 0,"5 Stars")),W=E("div",{className:"input-group-append"},void 0,E(P.Link,{to:"/results"},void 0,E("button",{className:"btn btn-default",type:"submit"},void 0,E("i",{className:"fas fa-search"})))),J=E("i",{className:"fas fa-search"}),$=function(e){function t(e){var o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(o=!(r=T(t).call(this,e))||"object"!==N(r)&&"function"!=typeof r?A(n):r).state={location:null},o.handleSubmit=o.handleSubmit.bind(A(o)),o}var o,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,_.a.PureComponent),o=t,(n=[{key:"getLocation",value:function(){console.log(this.props),this.props.isGeolocationAvailable&&this.props.isGeolocationEnabled&&this.props.coords?this.setState({location:{lat:this.props.coords.latitude,lng:this.props.coords.longitude}}):console.log("Geolocation not working.")}},{key:"formatPosition",value:function(e){return e?"\n      Latitude: ".concat((Math.round(1e5*e.lat)/1e5).toFixed(5),"\n      Longitude: ").concat((Math.round(1e5*e.lng)/1e5).toFixed(5),"\n      "):""}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this.props;e.loading,e.error,e.repos;return E("div",{},void 0,D,F,H,E("form",{className:"input-group mb-3",onSubmit:this.handleSubmit},void 0,M,q,z),E("form",{className:"input-group mb-3",onSubmit:this.handleSubmit},void 0,G,U,W),E("div",{className:"input-group mb-3"},void 0,E(P.Link,{className:"mx-auto",to:"/results"},void 0,E("button",{className:"btn btn-light mx-auto",onClick:this.getLocation.bind(this)},void 0,"Search Near Your Location ",J))),E("div",{className:"input-group mb-3"},void 0,E("h6",{id:"latlng",className:"mx-auto text-white"},void 0,this.state.location?"Latitude: ".concat((Math.round(1e5*this.state.location.lat)/1e5).toFixed(5),"\n                Longitude: ").concat((Math.round(1e5*this.state.location.lng)/1e5).toFixed(5)):"")))}}])&&C(o.prototype,n),r&&C(o,r),t}(),B=Object(R.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})($);o.d(t,"mapDispatchToProps",function(){return I});var I=function(e){return{onChangeUsername:function(t){return e((o=t.target.value,{type:l,name:o}));var o},onSubmitForm:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e(Object(u.a)())}}},V=Object(a.b)({repos:Object(s.c)(),username:p(),loading:Object(s.b)(),error:Object(s.a)()}),Y=Object(n.connect)(V,I),K=Object(i.a)({key:"home",reducer:m}),Q=Object(c.a)({key:"home",saga:w});t.default=Object(r.compose)(K,Q,Y)(B)},"./app/containers/SearchPage/style.scss":function(e,t,o){var n=o("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/containers/SearchPage/style.scss");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(n,r);n.locals&&(e.exports=n.locals)},"./app/utils/checkStore.js":function(e,t,o){"use strict";o.d(t,"a",function(){return d});var n=o("./node_modules/lodash/conformsTo.js"),r=o.n(n),a=o("./node_modules/lodash/isFunction.js"),i=o.n(a),c=o("./node_modules/lodash/isObject.js"),s=o.n(c),u=o("./node_modules/invariant/browser.js"),l=o.n(u);function d(e){var t={dispatch:i.a,subscribe:i.a,getState:i.a,replaceReducer:i.a,runSaga:i.a,injectedReducers:s.a,injectedSagas:s.a};l()(r()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},"./app/utils/injectReducer.js":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js"),r=o.n(n),a=o("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),i=o.n(a),c=o("./node_modules/react-redux/lib/index.js"),s=o("./node_modules/invariant/browser.js"),u=o.n(s),l=o("./node_modules/lodash/isEmpty.js"),d=o.n(l),p=o("./node_modules/lodash/isFunction.js"),f=o.n(p),b=o("./node_modules/lodash/isString.js"),m=o.n(b),h=o("./app/utils/checkStore.js"),y=o("./app/reducers.js");function j(e,t){return function(o,n){t||Object(h.a)(e),u()(m()(o)&&!d()(o)&&f()(n),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,o)&&e.injectedReducers[o]===n||(e.injectedReducers[o]=n,e.replaceReducer(Object(y.a)(e.injectedReducers)))}}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}t.a=function(e){var t=e.key,o=e.reducer;return function(e){var n=function(n){function a(e,n){var r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),r=x(this,w(a).call(this,e,n)),(i=n.store,Object(h.a)(i),{injectReducer:j(i,!0)}).injectReducer(t,o),r}var i,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,r.a.Component),i=a,(c=[{key:"render",value:function(){return r.a.createElement(e,this.props)}}])&&v(i.prototype,c),s&&v(i,s),a}();return S(n,"WrappedComponent",e),S(n,"contextType",c.ReactReduxContext),S(n,"displayName","withReducer(".concat(e.displayName||e.name||"Component",")")),i()(n,e)}}},"./app/utils/injectSaga.js":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js"),r=o.n(n),a=o("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),i=o.n(a),c=o("./node_modules/react-redux/lib/index.js"),s=o("./node_modules/lodash/isEmpty.js"),u=o.n(s),l=o("./node_modules/lodash/isFunction.js"),d=o.n(l),p=o("./node_modules/lodash/isString.js"),f=o.n(p),b=o("./node_modules/invariant/browser.js"),m=o.n(b),h=o("./node_modules/lodash/conformsTo.js"),y=o.n(h),j=o("./app/utils/checkStore.js"),g="@@saga-injector/restart-on-remount",v="@@saga-injector/daemon",x="@@saga-injector/once-till-unmount";function w(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){O(e,t,o[t])})}return e}function O(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var S=[g,v,x],_=function(e){return m()(f()(e)&&!u()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},k=function(e){var t={saga:d.a,mode:function(e){return f()(e)&&S.includes(e)}};m()(y()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function P(e,t){return function(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;t||Object(j.a)(e);var a=w({},n,{mode:n.mode||g}),i=a.saga,c=a.mode;_(o),k(a);var s=Reflect.has(e.injectedSagas,o);(!s||s&&c!==v&&c!==x)&&(e.injectedSagas[o]=w({},a,{task:e.runSaga(i,r)}))}}function R(e,t){return function(o){if(t||Object(j.a)(e),_(o),Reflect.has(e.injectedSagas,o)){var n=e.injectedSagas[o];n.mode!==v&&(n.task.cancel(),e.injectedSagas[o]="done")}}}function N(e){return Object(j.a)(e),{injectSaga:P(e,!0),ejectSaga:R(e,!0)}}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}t.a=function(e){var t=e.key,o=e.saga,n=e.mode;return function(e){var a=function(a){function i(e,r){var a,c,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),c=this,a=!(s=T(i).call(this,e,r))||"object"!==E(s)&&"function"!=typeof s?A(c):s,D(A(a),"injectors",N(a.context.store)),a.injectors=N(r.store),a.injectors.injectSaga(t,{saga:o,mode:n},a.props),a}var c,s,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(i,r.a.Component),c=i,(s=[{key:"componentWillUnmount",value:function(){this.injectors.ejectSaga(t)}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}])&&C(c.prototype,s),u&&C(c,u),i}();return D(a,"WrappedComponent",e),D(a,"contextType",c.ReactReduxContext),D(a,"displayName","withSaga(".concat(e.displayName||e.name||"Component",")")),i()(a,e)}}},"./app/utils/request.js":function(e,t,o){"use strict";(function(e){o.d(t,"a",function(){return a});o("./node_modules/whatwg-fetch/dist/fetch.umd.js");function n(e){return 204===e.status||205===e.status?null:e.json()}function r(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function a(t,o){return e(t,o).then(r).then(n)}}).call(this,o("./node_modules/exports-loader/index.js?self.fetch!./node_modules/whatwg-fetch/dist/fetch.umd.js"))},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/containers/SearchPage/style.scss":function(e,t,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,"a{text-decoration:none}a:hover{text-decoration:none}a.card{color:inherit}.badge--gray{color:#4f5255;background-color:#ededed}body{display:block}.btn--red{border-color:#f75b5c;background-color:#f75b5c}.btn--red:focus{box-shadow:none;outline:none}.btn--red:hover{color:#f75b5c;border-color:inherit;background-color:inherit}.btn--red:active{color:#f75b5c !important;border-color:inherit !important;background-color:inherit !important}#buckle{width:70px;height:70px;border:20px solid #353535;background-color:white;border-radius:70px;transform:translatey(-65%);margin-left:auto;margin-right:auto}.card{border:none;transition:0.15s ease-in-out}.card--clickable{cursor:pointer}.card--clickable:hover{box-shadow:0 0.125rem 1rem rgba(0,0,0,0.34);transform:scale(1.01)}.card--clickable:active{transition:0.05s ease-in-out;box-shadow:0 0.125rem 1rem rgba(0,0,0,0.34);transform:scale(1.02)}.card-img-top{object-fit:cover}.card-footer{font-size:0.8em}.card-footer--transparent{background-color:rgba(0,0,0,0);border-top:none}.card-title--ellipsis{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:2px}footer{background-color:white;border-top:20px solid #353535;padding-bottom:2rem}footer p{margin-bottom:0.25rem}.form-control:focus{border-color:#f75b5c;box-shadow:0 0 0 0.1rem rgba(255,0,0,0.25)}.header{width:100%;font-family:'Montserrat', 'Times New Roman', Helvetica, Arial, sans-serif;font-weight:500;line-height:1.6;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.header--bordered{border-bottom:20px solid #353535}.header--shadow{-webkit-box-shadow:0 7px 10px -6px #00000014;-moz-box-shadow:0 8px 6px -6px black;box-shadow:0 7px 10px -6px #00000014}.header__title{text-align:center;margin:0.5em 0px 0.2em;font-weight:900;color:#f75b5c;font-size:2em}.img--search{height:225px}input:required{border-color:#f75b5c;outline:0}input:valid{border-color:#ced4da}#main-body{background-size:4em;min-height:1000px}.map{height:50em;max-height:500px;object-fit:cover;position:relative;overflow:hidden}.marker{padding-left:6px;padding-bottom:5px;display:flex;flex-direction:column}.marker__content{word-break:break-word;width:200px}.marker__img{width:200px;border-radius:3px}.reviews{max-height:50em;overflow:auto}.shadow--sm{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075)}\n",""])}}]);