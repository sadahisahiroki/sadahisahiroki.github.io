!function e(n,t,r){function i(u,a){if(!t[u]){if(!n[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(o)return o(u,!0);var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d}var l=t[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return i(t?t:e)},l,l.exports,e,n,t,r)}return t[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(e,n,t){"use strict";function r(){c=document.getElementById("canvas"),d=new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,1e3),d.position.z=100,l=new THREE.Scene;var e=new THREE.PlaneGeometry(window.innerWidth,window.innerHeight,1);f={time:{value:0},resolution:{value:new THREE.Vector2}};var n=new THREE.ShaderMaterial({uniforms:f,vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent}),t=new THREE.Mesh(e,n);l.add(t),s=new THREE.WebGLRenderer,s.setPixelRatio(window.devicePixelRatio),c.appendChild(s.domElement),i(),a.resize(i)}function i(e){f.resolution.value.x=v,f.resolution.value.y=w,d.aspect=v/w,d.updateProjectionMatrix(),s.setSize(v,w)}function o(){requestAnimationFrame(o),u()}function u(){f.time.value+=.01,s.render(l,d)}var a=e("./utils/browserStateChange");AOS.init({duration:800,easing:"ease-out-quad",once:!0});var c=void 0,d=void 0,l=void 0,s=void 0,f=void 0,v=window.innerWidth,w=window.innerHeight;r(),o()},{"./utils/browserStateChange":2}],2:[function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=function(){function e(){r(this,e)}return i(e,[{key:"trigger",value:function(e,n,t){var r=void 0,i=1e3/t,o=$(window);o.on(e,function(){r!==!1&&clearTimeout(r),r=setTimeout(function(){n()},i)})}},{key:"resize",value:function(e){return this.trigger("resize",e,45)}},{key:"scroll",value:function(e){return this.trigger("scroll",e,45)}},{key:"touchmove",value:function(e){return this.trigger("touchmove",e,45)}}]),e}(),u=new o;n.exports=u},{}]},{},[1]);