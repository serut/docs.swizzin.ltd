"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4921,865,3389],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},50:function(e,t,n){var a=n(7294),r=n(2713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},1996:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),o=n(4544),i=n(9962),s=n(8002),l="code_1pQk";var d=function(e){var t=(0,i.Z)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,d=(0,r.useState)(!1),c=d[0],u=d[1];(0,r.useEffect)((function(){u(!0)}),[]);var p=(0,s.Z)().isDarkTheme,m=n.theme,h=n.darkTheme||m,f=p?h:m,v=e.language,k=void 0===v?"bash":v,g=e.code;return r.createElement(o.ZP,(0,a.Z)({},o.lG,{code:g,language:k,key:c,theme:f}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,i=e.getTokenProps;return r.createElement("pre",{className:t+" "+l,style:n},a.map((function(e,t){return r.createElement("div",o({line:e,key:t}),e.map((function(e,t){return r.createElement("span",i({token:e,key:t}))})))})))}))}},4297:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(50),o=n(6010),i="tabItem_HqPw",s=37,l=39;var d=function(e){var t=e.block,n=e.children,d=e.defaultValue,c=e.values,u=e.groupId,p=e.className,m=(0,r.Z)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=(0,a.useState)(d),k=v[0],g=v[1],y=(0,a.useState)(!1),b=y[0],w=y[1];if(null!=u){var N=h[u];null!=N&&N!==k&&c.some((function(e){return e.value===N}))&&g(N)}var T=function(e){g(e),null!=u&&f(u,e)},x=[],S=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},C=function(){w(!1)};return(0,a.useEffect)((function(){return window.addEventListener("keydown",S),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",S),window.removeEventListener("mousedown",C)}}),[]),a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},p)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":k===t,className:(0,o.Z)("tabs__item",t,i,{"tabs__item--active":k===t}),style:b?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),S(e)},onFocus:function(){return T(t)},onClick:function(){T(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===k}))[0]))}},9620:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=(n(4297),n(8448),n(1996),n(3989)),s=n(9124),l=n(9263),d=["components"],c={id:"sonarrv2",title:'Sonarr v2 aka "Stable"',sidebar_label:"Sonarr v2"},u=void 0,p={unversionedId:"applications/sonarrv2",id:"applications/sonarrv2",isDocsHomePage:!1,title:'Sonarr v2 aka "Stable"',description:"Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.",source:"@site/docs/applications/sonarrv2.mdx",sourceDirName:"applications",slug:"/applications/sonarrv2",permalink:"/applications/sonarrv2",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/sonarrv2.mdx",tags:[],version:"current",frontMatter:{id:"sonarrv2",title:'Sonarr v2 aka "Stable"',sidebar_label:"Sonarr v2"}},m=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Add a new show (and your first root directory)",id:"add-a-new-show-and-your-first-root-directory",children:[]},{value:"Connect download clients",id:"connect-download-clients",children:[]},{value:"Add an indexer with Jackett",id:"add-an-indexer-with-jackett",children:[]},{value:"Other tasks",id:"other-tasks",children:[]}]},{value:"Switching between v2 and v3",id:"switching-between-v2-and-v3",children:[{value:"Upgrading to Sonarr v3",id:"upgrading-to-sonarr-v3",children:[]},{value:"Downgrading from Sonarr v3",id:"downgrading-from-sonarr-v3",children:[]}]}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.default,{mdxType:"Deprecated"}),(0,o.kt)("p",null,"Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing Sonarr is easy. Simply issue the following command from SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install sonarr\n")),(0,o.kt)("p",null,"This command will configure sonarr for your user. Sonarr is installed via an apt repository, thus the easiest way to keep it up to date is by issuing the command ",(0,o.kt)("inlineCode",{parentName:"p"},"apt update && apt upgrade"),". The sonarr base files will be located in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/nzbdrone")),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"Once setup, sonarr will be available at the link ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/sonarr")),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"Service status for sonarr is handled by systemd. Despite the service being enabled for multi-user usage, Sonarr itself has not been configured for usage on more than one user account with swizzin. Regardless, as a multi-user service, you must append the username of the service you need to modify follow the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," sign. The systemd service file resides at"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/etc/systemd/system/sonarr@.service\n")),(0,o.kt)(s.default,{service:"sonarr@<username>",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Out of the box, Sonarr comes with very little configuration. Following are some basic tasks to help get your client up and running:"),(0,o.kt)("h3",{id:"add-a-new-show-and-your-first-root-directory"},"Add a new show (and your first root directory)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"At the top, click series."),(0,o.kt)("li",{parentName:"ol"},"Click the button ",(0,o.kt)("inlineCode",{parentName:"li"},"+ Add Series")),(0,o.kt)("li",{parentName:"ol"},"Type the name of the show you want to add"),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("inlineCode",{parentName:"li"},"Path"),", choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Add a new path"),". Enter the path for the folder you wish to add your Sonarr shows to and click the green check-mark to add the directory.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},'"/home/<username>/media/TV Shows"'))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Change the other settings to your own needs"),(0,o.kt)("li",{parentName:"ol"},"Click the green + to add the show.")),(0,o.kt)("h3",{id:"connect-download-clients"},"Connect download clients"),(0,o.kt)(l.default,{mdxType:"Conn4Arrs"}),(0,o.kt)("h3",{id:"add-an-indexer-with-jackett"},"Add an indexer with Jackett"),(0,o.kt)("p",null,"Sonarr only supports a few trackers out of the box, but the indexers can be expanded by using the application ",(0,o.kt)("a",{parentName:"p",href:"/applications/jackett"},"Jackett"),". To add an indexer with Jackett, use the following steps."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default, when receiving the torznab feed from Jackett, it will need to be modified to be connected with the application. The default link looks like:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://<yourhostname.ltd>/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")),(0,o.kt)("p",{parentName:"div"},"We need to edit this link to ",(0,o.kt)("strong",{parentName:"p"},"remove https")," and ",(0,o.kt)("strong",{parentName:"p"},"add the port number"),". Thus, if your port number was ",(0,o.kt)("inlineCode",{parentName:"p"},"12345"),", your edited URL would look like this:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"http://<yourhostname.ltd>:12345/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings > Indexers")," and click ",(0,o.kt)("inlineCode",{parentName:"li"},"+")," to add a new indexer."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("inlineCode",{parentName:"li"},"Torrent")," choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Torznab")),(0,o.kt)("li",{parentName:"ol"},"Use the settings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Name: <tracker name>\nURL: <click copy torznab feed in jackett and modify as per above>\nAPI: <copy and paste from jackett UI>\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Test"),". If all is good, click ",(0,o.kt)("inlineCode",{parentName:"li"},"Save"),".")),(0,o.kt)("h3",{id:"other-tasks"},"Other tasks"),(0,o.kt)("p",null,"You may wish to further alter your setup by setting quality profiles or setting up post-processing so that media is automatically transferred to your Sonarr library when your torrents are completed. If you need further help, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Sonarr/Sonarr/wiki"},"Sonarr Wiki"),"."),(0,o.kt)("h2",{id:"switching-between-v2-and-v3"},"Switching between v2 and v3"),(0,o.kt)("h3",{id:"upgrading-to-sonarr-v3"},"Upgrading to Sonarr v3"),(0,o.kt)("p",null,"You can upgrade to Sonarr v3 by running either ",(0,o.kt)("inlineCode",{parentName:"p"},"box install sonarrv3")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"box upgrade sonarr")," (They do the exact same thing). Please check ",(0,o.kt)("a",{parentName:"p",href:"/applications/sonarr#migrating-from-v2"},"the migration chapter")," for more information."),(0,o.kt)("h3",{id:"downgrading-from-sonarr-v3"},"Downgrading from Sonarr v3"),(0,o.kt)("p",null,"Like above, please check ",(0,o.kt)("a",{parentName:"p",href:"/applications/sonarr#downgrading-to-v2"},"the downgrading chapter")," in v3 docs for more information."))}f.isMDXComponent=!0},9263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(4297),s=n(8448),l=n(1996),d=["components"],c={},u=void 0,p={unversionedId:"snippets/conn4arr",id:"snippets/conn4arr",isDocsHomePage:!1,title:"conn4arr",description:"To add a download client, go to Settings > Download Client. Make sure Advanced Settings are shown and click Add Client.",source:"@site/docs/snippets/conn4arr.mdx",sourceDirName:"snippets",slug:"/snippets/conn4arr",permalink:"/snippets/conn4arr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/conn4arr.mdx",tags:[],version:"current",frontMatter:{}},m=[],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To add a download client, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings > Download Client"),". Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," are shown and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Client"),"."),(0,o.kt)(i.Z,{defaultValue:"rutorrent",values:[{label:"ruTorrent",value:"rutorrent"},{label:"Transmission",value:"transmission"},{label:"Deluge",value:"deluge"},{label:"nzbGet",value:"nzbget"},{label:"qBittorrent",value:"qbittorrent"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rutorrent",mdxType:"TabItem"},(0,o.kt)(l.Z,{code:"Name: rTorrent\nrTorrent host: 127.0.0.1\nPort: 443\nURL Path: /rutorrent/plugins/httprpc/action.php\nUse SSL: ON\nUsername: <your username>\nPassword: <your password>\nAdd label to torrent: TV (or anything else you desire)\nOptional - Downloaded files location: <custom directory>",lang:"plaintext",mdxType:"CodeSnippet"})),(0,o.kt)(s.Z,{value:"transmission",mdxType:"TabItem"},(0,o.kt)(l.Z,{code:"To retrieve your port, please run `grep rpc-port ~/.config/transmission-daemon/settings.json`,\nwhen logged in as the user you want to use transmission of (i.e. not root).\n----------\nHost: 127.0.0.1\nPort: <See above, e.g. 9091>\nURL Base: /transmission/ (Should be default)\nUsername: <your username>\nPassword: <your password>\nCategory: <optional, e.g. Sonarr or TV>\nConnect using HTTPS: OFF",lang:"plaintext",mdxType:"CodeSnippet"})),(0,o.kt)(s.Z,{value:"deluge",mdxType:"TabItem"},(0,o.kt)(l.Z,{code:"Name: Deluge\nHost: 127.0.0.1\nPost: <deluge web port>\nDeluge Password: <your password>\nAdd label to torrent: TV (or anything else you desire)\n* label plugin must be enabled in Deluge if you add a label\nSSL: OFF",lang:"plaintext",mdxType:"CodeSnippet"})),(0,o.kt)(s.Z,{value:"nzbget",mdxType:"TabItem"},(0,o.kt)(l.Z,{code:"NZBget host: 127.0.0.1\nport: 443\nURL Base: nzbget\nConnect using HTTPS: ON\nnzbget username: <your username>\nnzbget Password: <your password>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in nzbGet",lang:"plaintext",mdxType:"CodeSnippet"})),(0,o.kt)(s.Z,{value:"qbittorrent",mdxType:"TabItem"},(0,o.kt)(l.Z,{code:"Name: qBittorrent\nHost: 127.0.0.1\nPost: <qbittorrent web port>\nUsername: <your username>\nPassword: <your password>\nCategory: TV (or anything else you desire)\nSSL: OFF",lang:"plaintext",mdxType:"CodeSnippet"}))))}f.isMDXComponent=!0},3989:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],s={},l=void 0,d={unversionedId:"snippets/deprecated",id:"snippets/deprecated",isDocsHomePage:!1,title:"deprecated",description:"----",source:"@site/docs/snippets/deprecated.mdx",sourceDirName:"snippets",slug:"/snippets/deprecated",permalink:"/snippets/deprecated",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/deprecated.mdx",tags:[],version:"current",frontMatter:{}},c=[],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This application has been deprecated and removed from swizzin."))),(0,o.kt)("p",null,"One or more of these reasons can apply to why this application was removed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have conducted surveys among our userbase to determine which apps were being used, and less than 2% have expressed their interest in this application."),(0,o.kt)("li",{parentName:"ul"},"The application is severely out of date or no longer maintained, which causes us a severe headache when it comes to supporting it. While not a primary factor, this is very often a very strong support to other reasons."),(0,o.kt)("li",{parentName:"ul"},"The application has reached its EOL, and a newer version is available as a separate package")),(0,o.kt)("p",null,"We're sorry if this causes you any inconvenience."),(0,o.kt)("hr",null))}p.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(4297),s=n(8448),l=n(5654),d=["components"],c={},u=void 0,p={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m=[],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}f.isMDXComponent=!0}}]);