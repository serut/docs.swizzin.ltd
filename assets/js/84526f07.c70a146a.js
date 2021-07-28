(window.webpackJsonp=window.webpackJsonp||[]).push([[51,17,37],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(165)),i=(n(169),n(170),n(181),n(62)),s=n(57),c=n(64),l={id:"sonarrv2",title:'Sonarr v2 aka "Stable"',sidebar_label:"Sonarr v2"},d={unversionedId:"applications/sonarrv2",id:"applications/sonarrv2",isDocsHomePage:!1,title:'Sonarr v2 aka "Stable"',description:"Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.",source:"@site/docs/applications/sonarrv2.mdx",sourceDirName:"applications",slug:"/applications/sonarrv2",permalink:"/applications/sonarrv2",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/sonarrv2.mdx",version:"current",sidebar_label:"Sonarr v2",frontMatter:{id:"sonarrv2",title:'Sonarr v2 aka "Stable"',sidebar_label:"Sonarr v2"}},u=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Add a new show (and your first root directory)",id:"add-a-new-show-and-your-first-root-directory",children:[]},{value:"Connect download clients",id:"connect-download-clients",children:[]},{value:"Add an indexer with Jackett",id:"add-an-indexer-with-jackett",children:[]},{value:"Other tasks",id:"other-tasks",children:[]}]},{value:"Switching between v2 and v3",id:"switching-between-v2-and-v3",children:[{value:"Upgrading to Sonarr v3",id:"upgrading-to-sonarr-v3",children:[]},{value:"Downgrading from Sonarr v3",id:"downgrading-from-sonarr-v3",children:[]}]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.default,{mdxType:"Deprecated"}),Object(o.b)("p",null,"Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available."),Object(o.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(o.b)("p",null,"Installing Sonarr is easy. Simply issue the following command from SSH:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install sonarr\n")),Object(o.b)("p",null,"This command will configure sonarr for your user. Sonarr is installed via an apt repository, thus the easiest way to keep it up to date is by issuing the command ",Object(o.b)("inlineCode",{parentName:"p"},"apt update && apt upgrade"),". The sonarr base files will be located in ",Object(o.b)("inlineCode",{parentName:"p"},"/opt/nzbdrone")),Object(o.b)("h2",{id:"how-to-access"},"How to Access"),Object(o.b)("p",null,"Once setup, sonarr will be available at the link ",Object(o.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/sonarr")),Object(o.b)("h2",{id:"service-management"},"Service Management"),Object(o.b)("p",null,"Service status for sonarr is handled by systemd. Despite the service being enabled for multi-user usage, Sonarr itself has not been configured for usage on more than one user account with swizzin. Regardless, as a multi-user service, you must append the username of the service you need to modify follow the ",Object(o.b)("inlineCode",{parentName:"p"},"@")," sign. The systemd service file resides at"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/etc/systemd/system/sonarr@.service\n")),Object(o.b)(s.default,{service:"sonarr@<username>",mdxType:"SystemdTabs"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Out of the box, Sonarr comes with very little configuration. Following are some basic tasks to help get your client up and running:"),Object(o.b)("h3",{id:"add-a-new-show-and-your-first-root-directory"},"Add a new show (and your first root directory)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"At the top, click series."),Object(o.b)("li",{parentName:"ol"},"Click the button ",Object(o.b)("inlineCode",{parentName:"li"},"+ Add Series")),Object(o.b)("li",{parentName:"ol"},"Type the name of the show you want to add"),Object(o.b)("li",{parentName:"ol"},"Under ",Object(o.b)("inlineCode",{parentName:"li"},"Path"),", choose ",Object(o.b)("inlineCode",{parentName:"li"},"Add a new path"),". Enter the path for the folder you wish to add your Sonarr shows to and click the green check-mark to add the directory.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"e.g. ",Object(o.b)("inlineCode",{parentName:"li"},'"/home/<username>/media/TV Shows"'))),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Change the other settings to your own needs"),Object(o.b)("li",{parentName:"ol"},"Click the green + to add the show.")),Object(o.b)("h3",{id:"connect-download-clients"},"Connect download clients"),Object(o.b)(c.default,{mdxType:"Conn4Arrs"}),Object(o.b)("h3",{id:"add-an-indexer-with-jackett"},"Add an indexer with Jackett"),Object(o.b)("p",null,"Sonarr only supports a few trackers out of the box, but the indexers can be expanded by using the application ",Object(o.b)("a",{parentName:"p",href:"/applications/jackett"},"Jackett"),". To add an indexer with Jackett, use the following steps."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"By default, when receiving the torznab feed from Jackett, it will need to be modified to be connected with the application. The default link looks like:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"https://<yourhostname.ltd>/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")),Object(o.b)("p",{parentName:"div"},"We need to edit this link to ",Object(o.b)("strong",{parentName:"p"},"remove https")," and ",Object(o.b)("strong",{parentName:"p"},"add the port number"),". Thus, if your port number was ",Object(o.b)("inlineCode",{parentName:"p"},"12345"),", your edited URL would look like this:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"http://<yourhostname.ltd>:12345/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to ",Object(o.b)("inlineCode",{parentName:"li"},"Settings > Indexers")," and click ",Object(o.b)("inlineCode",{parentName:"li"},"+")," to add a new indexer."),Object(o.b)("li",{parentName:"ol"},"Under ",Object(o.b)("inlineCode",{parentName:"li"},"Torrent")," choose ",Object(o.b)("inlineCode",{parentName:"li"},"Torznab")),Object(o.b)("li",{parentName:"ol"},"Use the settings:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Name: <tracker name>\nURL: <click copy torznab feed in jackett and modify as per above>\nAPI: <copy and paste from jackett UI>\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("inlineCode",{parentName:"li"},"Test"),". If all is good, click ",Object(o.b)("inlineCode",{parentName:"li"},"Save"),".")),Object(o.b)("h3",{id:"other-tasks"},"Other tasks"),Object(o.b)("p",null,"You may wish to further alter your setup by setting quality profiles or setting up post-processing so that media is automatically transferred to your Sonarr library when your torrents are completed. If you need further help, you can refer to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Sonarr/Sonarr/wiki"},"Sonarr Wiki"),"."),Object(o.b)("h2",{id:"switching-between-v2-and-v3"},"Switching between v2 and v3"),Object(o.b)("h3",{id:"upgrading-to-sonarr-v3"},"Upgrading to Sonarr v3"),Object(o.b)("p",null,"You can upgrade to Sonarr v3 by running either ",Object(o.b)("inlineCode",{parentName:"p"},"box install sonarrv3")," or ",Object(o.b)("inlineCode",{parentName:"p"},"box upgrade sonarr")," (They do the exact same thing). Please check ",Object(o.b)("a",{parentName:"p",href:"/applications/sonarr#migrating-from-v2"},"the migration chapter")," for more information."),Object(o.b)("h3",{id:"downgrading-from-sonarr-v3"},"Downgrading from Sonarr v3"),Object(o.b)("p",null,"Like above, please check ",Object(o.b)("a",{parentName:"p",href:"/applications/sonarr#downgrading-to-v2"},"the downgrading chapter")," in v3 docs for more information."))}b.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},168:function(e,t,n){"use strict";var a=n(0),r=n(173);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},169:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(174),i=n(167),s=n(59),c=n.n(s),l=37,d=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,u=e.values,p=e.groupId,b=e.className,m=Object(o.a)(),h=m.tabGroupChoices,y=m.setTabGroupChoices,f=Object(a.useState)(s),g=f[0],v=f[1],j=Object(a.useState)(!1),O=j[0],w=j[1];if(null!=p){var k=h[p];null!=k&&k!==g&&u.some((function(e){return e.value===k}))&&v(k)}var N=function(e){v(e),null!=p&&y(p,e)},T=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},C=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",C)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},b)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":g===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),x(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},170:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},171:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),i={Prism:a.a,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=c({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=c({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var m=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=c({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==r&&(o.style=void 0!==o.style?c({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var i=a?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,i=c({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?c({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,i=0,s=[],c=[s];i>-1;){for(;(o=a[i]++)<r[i];){var p=void 0,b=t[i],m=n[i][o];if("string"==typeof m?(b=i>0?b:["plain"],p=m):(b=u(b,m.type),m.alias&&(b=u(b,m.alias)),p=m.content),"string"==typeof p){var h=p.split(l),y=h.length;s.push({types:b,content:h[0]});for(var f=1;f<y;f++)d(s),c.push(s=[]),s.push({types:b,content:h[f]})}else i++,t.push(b),n.push(p),a.push(0),r.push(p.length)}i--,t.pop(),n.pop(),a.pop(),r.pop()}return d(s),c}(void 0!==i?this.tokenize(t,a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=m},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(3),r=n(0),o=n.n(r),i=n(167),s=n(171);var c=n(175),l=n.n(c),d={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},u=n(168),p=n(166),b=function(){var e=Object(p.useThemeConfig)().prism,t=Object(u.a)().isDarkTheme,n=e.theme||d,a=e.darkTheme||n;return t?a:n},m=n(177),h=n(58),y=n.n(h),f=/{([\d,-]+)}/,g=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function v(e){var t=e.children,n=e.className,c=e.metastring,d=e.title,u=Object(p.useThemeConfig)().prism,h=Object(r.useState)(!1),v=h[0],j=h[1],O=Object(r.useState)(!1),w=O[0],k=O[1];Object(r.useEffect)((function(){k(!0)}),[]);var N=Object(p.parseCodeBlockTitle)(c)||d,T=Object(r.useRef)(null),x=[],C=b(),S=Array.isArray(t)?t.join(""):t;if(c&&f.test(c)){var P=c.match(f)[1];x=l()(P).filter((function(e){return e>0}))}var E=n&&n.replace(/language-/,"");!E&&u.defaultLanguage&&(E=u.defaultLanguage);var D=S.replace(/\n$/,"");if(0===x.length&&void 0!==E){for(var z,I="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"]);case"jsx":case"tsx":return g(["js","jsBlock","jsx"]);case"html":return g(["js","jsBlock","html"]);case"python":case"py":return g(["python"]);default:return g()}}(E),B=S.replace(/\n$/,"").split("\n"),A=0;A<B.length;){var M=A+1,U=B[A].match(L);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=M+",";break;case"highlight-start":z=M;break;case"highlight-end":I+=z+"-"+(M-1)+","}B.splice(A,1)}else A+=1}x=l()(I),D=B.join("\n")}var R=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(D),j(!0),setTimeout((function(){return j(!1)}),2e3)};return o.a.createElement(s.a,Object(a.a)({},s.b,{key:String(w),theme:C,code:D,language:E}),(function(e){var t,n=e.className,r=e.style,s=e.tokens,c=e.getLineProps,l=e.getTokenProps;return o.a.createElement("div",{className:y.a.codeBlockContainer},N&&o.a.createElement("div",{style:r,className:y.a.codeBlockTitle},N),o.a.createElement("div",{className:Object(i.a)(y.a.codeBlockContent,E)},o.a.createElement("div",{tabIndex:0,className:Object(i.a)(n,y.a.codeBlock,"thin-scrollbar",(t={},t[y.a.codeBlockWithTitle]=N,t))},o.a.createElement("div",{className:y.a.codeBlockLines,style:r},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return x.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t})))})))})))),o.a.createElement("button",{ref:T,type:"button","aria-label":Object(m.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(y.a.copyButton),onClick:R},v?o.a.createElement(m.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(m.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},173:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},174:function(e,t,n){"use strict";var a=n(0),r=n(176);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},175:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},176:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},181:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r),i=n(171),s=n(16),c=n(168),l=n(182),d=n.n(l);t.a=function(e){var t=Object(s.default)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,l=Object(r.useState)(!1),u=l[0],p=l[1];Object(r.useEffect)((function(){p(!0)}),[]);var b=Object(c.a)().isDarkTheme,m=n.theme,h=n.darkTheme||m,y=b?h:m,f=e.language,g=void 0===f?"bash":f,v=e.code;return o.a.createElement(i.a,Object(a.a)({},i.b,{code:v,language:g,key:u,theme:y}),(function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,i=e.getTokenProps;return o.a.createElement("pre",{className:t+" "+d.a.code,style:n},a.map((function(e,t){return o.a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return o.a.createElement("span",i({token:e,key:t}))})))})))}))}},182:function(e,t,n){e.exports={code:"code_1pQk"}},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(165)),i=n(169),s=n(170),c=n(172),l={},d={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},u=[],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"code"},Object(o.b)(i.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"status",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(s.a,{value:"start",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(s.a,{value:"stop",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(s.a,{value:"restart",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(s.a,{value:"enable",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(s.a,{value:"disable",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(165)),i={},s={unversionedId:"snippets/deprecated",id:"snippets/deprecated",isDocsHomePage:!1,title:"deprecated",description:"----",source:"@site/docs/snippets/deprecated.mdx",sourceDirName:"snippets",slug:"/snippets/deprecated",permalink:"/snippets/deprecated",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/deprecated.mdx",version:"current",frontMatter:{}},c=[],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This application has been deprecated and removed from swizzin."))),Object(o.b)("p",null,"One or more of these reasons can apply to why this application was removed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We have conducted surveys among our userbase to determine which apps were being used, and less than 2% have expressed their interest in this application."),Object(o.b)("li",{parentName:"ul"},"The application is severely out of date or no longer maintained, which causes us a severe headache when it comes to supporting it. While not a primary factor, this is very often a very strong support to other reasons."),Object(o.b)("li",{parentName:"ul"},"The application has reached its EOL, and a newer version is available as a separate package")),Object(o.b)("p",null,"We're sorry if this causes you any inconvenience."),Object(o.b)("hr",null))}d.isMDXComponent=!0},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(165)),i=n(169),s=n(170),c=n(181),l={},d={unversionedId:"snippets/conn4arr",id:"snippets/conn4arr",isDocsHomePage:!1,title:"conn4arr",description:"To add a download client, go to Settings > Download Client. Make sure Advanced Settings are shown and click Add Client.",source:"@site/docs/snippets/conn4arr.mdx",sourceDirName:"snippets",slug:"/snippets/conn4arr",permalink:"/snippets/conn4arr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/conn4arr.mdx",version:"current",frontMatter:{}},u=[],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To add a download client, go to ",Object(o.b)("inlineCode",{parentName:"p"},"Settings > Download Client"),". Make sure ",Object(o.b)("inlineCode",{parentName:"p"},"Advanced Settings")," are shown and click ",Object(o.b)("inlineCode",{parentName:"p"},"Add Client"),"."),Object(o.b)(i.a,{defaultValue:"rutorrent",values:[{label:"ruTorrent",value:"rutorrent"},{label:"Transmission",value:"transmission"},{label:"Deluge",value:"deluge"},{label:"nzbGet",value:"nzbget"},{label:"qBittorrent",value:"qbittorrent"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"rutorrent",mdxType:"TabItem"},Object(o.b)(c.a,{code:"Name: rTorrent\nrTorrent host: 127.0.0.1\nPort: 443\nURL Path: /rutorrent/plugins/httprpc/action.php\nUse SSL: ON\nUsername: <your username>\nPassword: <your password>\nAdd label to torrent: TV (or anything else you desire)\nOptional - Downloaded files location: <custom directory>",lang:"plaintext",mdxType:"CodeSnippet"})),Object(o.b)(s.a,{value:"transmission",mdxType:"TabItem"},Object(o.b)(c.a,{code:"To retrieve your port, please run `grep rpc-port ~/.config/transmission-daemon/settings.json`,\nwhen logged in as the user you want to use transmission of (i.e. not root).\n----------\nHost: 127.0.0.1\nPort: <See above, e.g. 9091>\nURL Base: /transmission/ (Should be default)\nUsername: <your username>\nPassword: <your password>\nCategory: <optional, e.g. Sonarr or TV>\nConnect using HTTPS: OFF",lang:"plaintext",mdxType:"CodeSnippet"})),Object(o.b)(s.a,{value:"deluge",mdxType:"TabItem"},Object(o.b)(c.a,{code:"Name: Deluge\nHost: 127.0.0.1\nPost: <deluge web port>\nDeluge Password: <your password>\nAdd label to torrent: TV (or anything else you desire)\n* label plugin must be enabled in Deluge if you add a label\nSSL: OFF",lang:"plaintext",mdxType:"CodeSnippet"})),Object(o.b)(s.a,{value:"nzbget",mdxType:"TabItem"},Object(o.b)(c.a,{code:"NZBget host: 127.0.0.1\nport: 443\nURL Base: nzbget\nConnect using HTTPS: ON\nnzbget username: <your username>\nnzbget Password: <your password>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in nzbGet",lang:"plaintext",mdxType:"CodeSnippet"})),Object(o.b)(s.a,{value:"qbittorrent",mdxType:"TabItem"},Object(o.b)(c.a,{code:"Name: qBittorrent\nHost: 127.0.0.1\nPost: <qbittorrent web port>\nUsername: <your username>\nPassword: <your password>\nCategory: TV (or anything else you desire)\nSSL: OFF",lang:"plaintext",mdxType:"CodeSnippet"}))))}b.isMDXComponent=!0}}]);