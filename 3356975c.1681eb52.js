(window.webpackJsonp=window.webpackJsonp||[]).push([[25,16],{140:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(143),i=t(141),o=t(50),c=t.n(o),l=37,b=39;a.a=function(e){var a=e.block,t=e.children,o=e.defaultValue,d=e.values,u=e.groupId,m=e.className,p=Object(s.a)(),v=p.tabGroupChoices,f=p.setTabGroupChoices,h=Object(n.useState)(o),O=h[0],j=h[1],y=Object(n.useState)(!1),g=y[0],w=y[1];if(null!=u){var N=v[u];null!=N&&N!==O&&d.some((function(e){return e.value===N}))&&j(N)}var z=function(e){j(e),null!=u&&f(u,e)},T=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},k=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",k),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",k)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},m)},d.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===a,className:Object(i.a)("tabs__item",a,c.a.tabItem,{"tabs__item--active":O===a}),style:g?{}:{outline:"none"},key:a,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case b:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case l:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(T,e.target,e),x(e)},onFocus:function(){return z(a)},onClick:function(){z(a),w(!1)},onPointerDown:function(){return w(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},48:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return b})),t.d(a,"rightToc",(function(){return d})),t.d(a,"default",(function(){return m}));var n=t(2),r=t(6),s=(t(0),t(139)),i=t(140),o=t(142),c=t(144),l={},b={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},d=[],u={rightToc:d};function m(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"code"},Object(s.b)(i.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(s.b)(o.a,{value:"status",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl status "+t.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"start",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl start "+t.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"stop",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl stop "+t.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"restart",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl restart "+t.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"enable",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl enable "+t.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"disable",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl disable "+t.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0},87:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return d}));var n=t(2),r=t(6),s=(t(0),t(139)),i=t(48),o={id:"bazarr",title:"Bazarr",sidebar_label:"Bazarr"},c={unversionedId:"applications/bazarr",id:"applications/bazarr",isDocsHomePage:!1,title:"Bazarr",description:"Bazarr is a companion application to Sonarr and Radarr. It manages and downloads subtitles based on your requirements. You define your preferences by TV show or movie and Bazarr takes care of everything for you.",source:"@site/docs/applications/bazarr.mdx",slug:"/applications/bazarr",permalink:"/applications/bazarr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/bazarr.mdx",version:"current",sidebar_label:"Bazarr",sidebar:"docs",previous:{title:"Autodl",permalink:"/applications/autodl"},next:{title:"Couchpotato",permalink:"/applications/couchpotato"}},l=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[{value:"More info",id:"more-info",children:[]}]}],b={rightToc:l};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Bazarr is a companion application to Sonarr and Radarr. It manages and downloads subtitles based on your requirements. You define your preferences by TV show or movie and Bazarr takes care of everything for you."),Object(s.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(s.b)("p",null,"Installing Bazarr is easy. Simply issue the following command from SSH:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plaintext",metastring:"main",main:!0}),"sudo box install bazarr\n")),Object(s.b)("p",null,"This command will configure bazarr for the main user."),Object(s.b)("h2",{id:"how-to-access"},"How to Access"),Object(s.b)("p",null,"Once setup, bazarr will be available at the link ",Object(s.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/bazarr")),Object(s.b)("h2",{id:"service-management"},"Service Management"),Object(s.b)("p",null,"The systemd script for bazarr can be found at"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"/etc/systemd/system/bazarr.service\n")),Object(s.b)("p",null,"By default, bazarr can only be configured for use with a single user with swizzin."),Object(s.b)(i.default,{service:"bazarr",mdxType:"SystemdTabs"}),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Tip")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Forgot your API key or port? No worries, here are one-liners you can submit from SSH:"),Object(s.b)("p",{parentName:"div"},"Sonarr:"),Object(s.b)("pre",{parentName:"div"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cat ~/.config/NzbDrone/config.xml | grep -e \\<Api -e \\<Port\n")),Object(s.b)("p",{parentName:"div"},"Radarr:"),Object(s.b)("pre",{parentName:"div"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cat ~/.config/Radarr/config.xml | grep -e \\<Api -e \\<Port\n")))),Object(s.b)("h3",{id:"more-info"},"More info"),Object(s.b)("p",null,"If you need further help, please refer to the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/morpheus65535/bazarr/wiki"}),"Bazarr Wiki"),"."))}d.isMDXComponent=!0}}]);