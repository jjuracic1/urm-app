(this["webpackJsonpurm-subnet"]=this["webpackJsonpurm-subnet"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),i=a.n(r),c=a(14),s=a.n(c),l=a(8),j=a(9),u=a(11),d=a(10),b=a(41),h=a(39),o=a(40),p=a(24),O=a(44),x=a(42),v=function(e){return parseInt((e+"").replace(/[^01]/gi,""),2)},f=function(e){return parseInt(e,10).toString(2)},S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={input:"",output:""},e.handleChange=function(t){var a=t.target.value;if(null!==a.match("^[01 ]*$"))if(e.setState({input:a}),""!==a){var n=v(a);e.setState({output:n})}else e.setState({output:""})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.input,a=e.output;return Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{children:Object(n.jsxs)(x.a.Row,{children:[Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a.Control,{placeholder:"Unesite binarni broj",onChange:this.handleChange,value:t})}),Object(n.jsx)(p.a,{xs:"auto",children:"="}),Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a.Control,{placeholder:"Rezultat",value:a,readOnly:!0})})]})})})}}]),a}(i.a.Component),m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={input:"",output:""},e.handleChange=function(t){var a=t.target.value;if(null!==a.match("^[0-9 ]*$"))if(e.setState({input:a}),""!==a){var n=f(a);e.setState({output:n})}else e.setState({output:""})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.input,a=e.output;return Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{children:Object(n.jsxs)(x.a.Row,{children:[Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a.Control,{placeholder:"Unesite dekadski broj",onChange:this.handleChange,value:t})}),Object(n.jsx)(p.a,{xs:"auto",children:"="}),Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a.Control,{placeholder:"Rezultat",value:a,readOnly:!0})})]})})})}}]),a}(i.a.Component),g=a(45),I=a(23),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ip:"",subnet:""},e.refIp=i.a.createRef(),e.refSubnet=i.a.createRef(),e.handleIpChange=function(t){var a=t.target.value;e.setState({ip:a})},e.handleSubnetChange=function(t){var a=t.target.value;e.setState({subnet:a})},e.handleAddTodoClick=function(t){t.preventDefault();var a=e.state,n=a.ip,r=a.subnet,i=e.props.addIpSubnet;if(n&&n.trim()){if(!I.isIp(n))return alert("Unesite ispravnu IP adresu"),void e.refIp.current.focus();if(r&&r.trim()){if(!I.isIp(r))return alert("Unesite ispravnu Subnet masku"),void e.refSubnet.current.focus();i({ip:n,subnet:r}),e.setState({ip:"",subnet:""})}}},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.ip,a=e.subnet;return Object(n.jsx)("div",{children:Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(x.a.Group,{children:[Object(n.jsx)(x.a.Label,{children:"IP adresa"}),Object(n.jsx)(x.a.Control,{placeholder:"Unesite ip adresu (npr. 127.0.0.0)",onChange:this.handleIpChange,ref:this.refIp,value:t})]}),Object(n.jsxs)(x.a.Group,{children:[Object(n.jsx)(x.a.Label,{children:"Subnet maska"}),Object(n.jsx)(x.a.Control,{placeholder:"Unesite subnet masku (npr. 255.255.0.0)",onChange:this.handleSubnetChange,ref:this.refSubnet,value:a})]}),Object(n.jsx)(g.a,{variant:"primary",type:"submit",onClick:this.handleAddTodoClick,children:"Izra\u010dunaj"})]})})}}]),a}(i.a.Component),C=a(43);var y=function(e){var t=e.ipSubnet;return Object(n.jsxs)(C.a,{children:[Object(n.jsxs)(C.a.Item,{children:["IP adresa mre\u017ee: ",Object(n.jsx)("b",{children:t.ipLowStr})]}),Object(n.jsxs)(C.a.Item,{children:["Broadcast adresa: ",Object(n.jsx)("b",{children:t.ipHighStr})]}),Object(n.jsxs)(C.a.Item,{children:["Prva iskoristiva adresa: ",Object(n.jsx)("b",{children:t.ipLowStrUseful})]}),Object(n.jsxs)(C.a.Item,{children:["Zadnja iskoristiva adresa: ",Object(n.jsx)("b",{children:t.ipHighStrUseful})]}),Object(n.jsxs)(C.a.Item,{children:["Subnet maska: ",Object(n.jsx)("b",{children:t.prefixMaskStr})]}),Object(n.jsxs)(C.a.Item,{children:["Prefiks: ",Object(n.jsx)("b",{children:t.prefixSize})]})]})},w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={devices:""},e.handleChange=function(t){var a=t.target.value;null!==a.match("^[0-9 ]*$")&&e.setState({devices:a})},e.handleAddTodoClick=function(t){t.preventDefault();var a=e.state.devices,n=e.props.addDeviceSubnet;a&&a.trim()&&(n(a),e.setState({devices:""}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state.devices;return Object(n.jsx)("div",{children:Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(x.a.Group,{children:[Object(n.jsx)(x.a.Label,{children:"Broj ure\u0111aja"}),Object(n.jsx)(x.a.Control,{placeholder:"Unesite broj ure\u0111aja",onChange:this.handleChange,value:e})]}),Object(n.jsx)(g.a,{variant:"primary",type:"submit",onClick:this.handleAddTodoClick,children:"Izra\u010dunaj"})]})})}}]),a}(i.a.Component);var U=function(e){var t=e.deviceSubnet;return Object(n.jsxs)(C.a,{children:[Object(n.jsxs)(C.a.Item,{children:["Broj ure\u0111aja: ",Object(n.jsx)("b",{children:t.devices})]}),Object(n.jsxs)(C.a.Item,{children:["IP adresa mre\u017ee: ",Object(n.jsx)("b",{children:t.ipLowStr})]}),Object(n.jsxs)(C.a.Item,{children:["Subnet maska: ",Object(n.jsx)("b",{children:t.prefixMaskStr})]}),Object(n.jsxs)(C.a.Item,{children:["Prefiks: ",Object(n.jsx)("b",{children:t.prefixSize})]})]})},B=a(23),T=function(e){var t=B.calculateCIDRPrefix(e.ip,e.subnet),a=t.ipHighStr.split(".");a[3]=parseInt(a[3])-1;var n=t.ipLowStr.split(".");return n[3]=parseInt(n[3])+1,t.ipHighStrUseful=a.join("."),t.ipLowStrUseful=n.join("."),t},D=function(e){var t=parseInt(e),a=R(t),n=L(a),r=B.calculateSubnetMask(n,a),i=r.ipHighStr.split(".");i[3]=parseInt(i[3])-1;var c=r.ipLowStr.split(".");return c[3]=parseInt(c[3])+1,r.ipHighStrUseful=i.join("."),r.ipLowStrUseful=c.join("."),r.devices=new Intl.NumberFormat("de-DE").format(t),r},L=function(e){return e>0&&e<=8?"10.0.0.0":e>8&&e<=12?"172.16.0.0":e>12?"192.168.0.0":void 0},R=function(e){return 2==e?30:e>2&&e<=6?29:e>6&&e<=14?28:e>14&&e<=30?27:e>30&&e<=62?26:e>62&&e<=126?25:e>126&&e<=254?24:e>254&&e<=510?23:e>510&&e<=1022?22:e>1022&&e<=2046?21:e>2046&&e<=4094?20:e>4094&&e<=8190?19:e>8190&&e<=16382?18:e>16382&&e<=32766?17:e>32766&&e<=65534?16:e>65534&&e<=131070?15:e>131070&&e<=262142?14:e>262142&&e<=524286?13:e>524286&&e<=1048574?12:e>1048574&&e<=2097150?11:e>2097150&&e<=4194302?10:e>4194302&&e<=8388606?9:e>8388606&&e<=16777214?8:e>16777214&&e<=33554430?7:e>33554430&&e<=67108862?6:e>67108862&&e<=268435454?5:e>268435454&&e<=536870910?4:null},A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={ipSubnet:null,deviceSubnet:null},e.handleIpSubnet=function(t){var a=T(t);e.setState({ipSubnet:a})},e.handleDeviceSubnet=function(t){var a=D(t);e.setState({deviceSubnet:a})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.ipSubnet,a=e.deviceSubnet;return Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(n.jsx)(b.a.Brand,{href:"#home",children:"URM - Zada\u0107a"})}),Object(n.jsx)(h.a,{fluid:!0,children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(p.a,{xs:12,lg:4,children:Object(n.jsxs)(O.a,{style:{marginTop:"20px"},children:[Object(n.jsx)(O.a.Header,{as:"h5",children:"Konvertor"}),Object(n.jsxs)(O.a.Body,{children:[Object(n.jsx)(O.a.Title,{children:"Binarni u Dekadski"}),Object(n.jsx)(S,{})]}),Object(n.jsxs)(O.a.Body,{children:[Object(n.jsx)(O.a.Title,{children:"Dekadski u Binarni"}),Object(n.jsx)(m,{})]})]})}),Object(n.jsx)(p.a,{xs:12,lg:4,children:Object(n.jsxs)(O.a,{style:{marginTop:"20px"},children:[Object(n.jsx)(O.a.Header,{as:"h5",children:"Subnetiranje - IP adresa & Subnet maska"}),Object(n.jsx)(O.a.Body,{children:Object(n.jsx)(k,{addIpSubnet:this.handleIpSubnet})}),null!=t?Object(n.jsxs)(O.a.Body,{children:[Object(n.jsx)(O.a.Title,{children:"Rezultat"}),Object(n.jsx)(y,{ipSubnet:t})]}):""]})}),Object(n.jsx)(p.a,{xs:12,lg:4,children:Object(n.jsxs)(O.a,{style:{marginTop:"20px"},children:[Object(n.jsx)(O.a.Header,{as:"h5",children:"Subnetiranje - broj ure\u0111aja"}),Object(n.jsx)(O.a.Body,{children:Object(n.jsx)(w,{addDeviceSubnet:this.handleDeviceSubnet})}),null!=a?Object(n.jsxs)(O.a.Body,{children:[Object(n.jsx)(O.a.Title,{children:"Rezultat"}),Object(n.jsx)(U,{deviceSubnet:a})]}):""]})})]})})]})}}]),a}(i.a.Component);a(35),a(36);s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d3643e0f.chunk.js.map