(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"../../docs/consts/appId.md":function(n,e){n.exports="##### 1. 说明\n\n应用的 ID，可以在网站控制台概览里面查看，字符串类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet appId = wya.appId; // 比如： A6980386445546\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/appName.md":function(n,e){n.exports="##### 1. 说明\n\n应用在桌面显示名称，字符串类型\n\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet appName = wya.appName; // 比如： 微信\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/appParam.md":function(n,e){n.exports='##### 1. 说明\n\n当应用被第三方应用打开时，传递过来的参数，字符串类型\n\n建议通过`appintent`事件监听应用被第三方应用调起，并在事件回调里面获取参数进行处理。\n\n##### 2. 示例代码\n\n```javascript\nimport wya from \'wya-js-sdk\';\n\nlet appParam = wya.appParam;  //比如： {"name": "API Demo"}\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------'},"../../docs/consts/appVersion.md":function(n,e){n.exports="##### 1. 说明\n\n应用版本号，字符串类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet appVersion = wya.appVersion; // 比如： 1.0.0\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/cacheDir.md":function(n,e){n.exports="##### 1. 说明\n\ncache://协议对应的真实目录，字符串类型\n\niOS 平台下载的文件一般存放于该目录下，否则提交 AppStore 审核时可能会不通过，且此目录下的内容在手机备份时不会被备份\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet cacheDir = wya.cacheDir; \n/* \n比如： \n/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Library/Caches/APICloud/Cache/XXXXXX\n*/\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/channel.md":function(n,e){n.exports="##### 1. 说明\n\n渠道号，字符串类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet channel = wya.channel;         //如：Apple App Store\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/connectionType.md":function(n,e){n.exports="##### 1. 说明\n\n当前网络连接类型，如 2g、3g、4g、wifi 等，字符串类型\n- 取值范围\n```\nunknown         // 未知\nethernet        // 以太网\nwifi            // wifi\n2g              // 2G网络\n3g              // 3G网络\n4g              // 4G网络\nnone            // 无网络\n```\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet connectionType = wya.connectionType;  //比如： wifi\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/debug.md":function(n,e){n.exports="##### 1. 说明\n\n调试模式\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet debug = wya.debug;                 // 比如： true\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------\n"},"../../docs/consts/deviceId.md":function(n,e){n.exports="##### 1. 说明\n\n设备唯一标识，字符串类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet deviceId = wya.deviceId;  //比如： FC408F8B-9598-48B6-A740-B9037ADCXXXE\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/deviceModel.md":function(n,e){n.exports="##### 1. 说明\n\n设备型号，字符串类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet deviceModel = wya.deviceModel;  // 比如： iPhone 5\n\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/deviceName.md":function(n,e){n.exports="##### 1. 说明\n\n设备名称，字符串类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet deviceName = wya.deviceName;  // 比如：“柚子”的 iPhone\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/deviceToken.md":function(n,e){n.exports="##### 1. 说明\n\niOS中用于推送的Token，若未从系统获取到则返回空字符串，字符串类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet deviceToken = wya.deviceToken;  //比如： a22241adab6c68b3687a9f0f086c540341f4b3f010546d4af4834ada32301615\n```\n##### 3. 可用性\niOS系统\n\n---------"},"../../docs/consts/frameHeight.md":function(n,e){n.exports="##### 1. 说明\n\nframe 高度，数字类型\n\n> 若当前环境为 window 中，则值和 winHeight 相同\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet frameHeight = wya.frameHeight;  // 比如： 504\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/frameName.md":function(n,e){n.exports="##### 1. 说明\n\nframe 名称，字符串类型\n\n若当前环境为 window 中，则该属性值为空字符串\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet winName = wya.frameName;  // 比如： trans-con\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/frameWidth.md":function(n,e){n.exports="##### 1. 说明\n\nframe 宽度，数字类型\n\n> 若当前环境为 window 中，则值和 winWidth 相同\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet frameWidth = wya.frameWidth;  // 比如： 320\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/fsDir.md":function(n,e){n.exports="##### 1. 说明\n\nfs: //协议对应地真实目录，字符串类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet fsDir = wya.fsDir; \n/* \n比如： \n/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Documents/uzfs/A123456789\n*/\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/fullScreen.md":function(n,e){n.exports="##### 1. 说明\n\n应用是否全屏，布尔类型，只支持iOS\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet fullScreen = wya.fullScreen;  // 比如： true\n```\n##### 3. 可用性\niOS系统\n\n---------"},"../../docs/consts/jailbreak.md":function(n,e){n.exports="##### 1. 说明\n\n设备是否越狱，布尔类型\n\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet jailbreak = wya.jailbreak;         //如：false\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/operatorName.md":function(n,e){n.exports="##### 1. 说明\n\n运营商名称，若未获取到则返回none，字符串类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet operatorName = wya.operatorName;  // 比如：中国移动\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/pageParam.md":function(n,e){n.exports='##### 1. 说明\n\n页面参数，JSON 对象类型\n\n用于获取页面间传递的参数值，为 openWin()、openFrame() 等方法中的 pageParam 参数对应值\n\n\n##### 2. 示例代码\n\n```javascript\nimport wya from \'wya-js-sdk\';\n\nlet pageParam = wya.pageParam; //比如： {"name" : "tans-con"}\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------'},"../../docs/consts/safeArea.md":function(n,e){n.exports="##### 1. 说明\n\n页面不被其它内容（如状态栏）遮住的区域，JSON对象\n\n通过safeArea能够知道当前页面哪些地方被遮住，从而做出相应的调整，保证页面重要元素不被遮挡住。\n\n比如应对顶部header被状态栏遮住一部分，可以为header增加一个paddingTop，如：\n```\nheader.style.paddingTop = wya.safeArea.top + 'px';\n\n```\n在比如在iPhone X上面，底部的导航菜单会被虚拟Home键遮住一部分，可以为footer增加一个paddingBottom，如：\n\n\n```\nfooter.style.paddingBottom = wya.safeArea.bottom + 'px';\n\n```\n内部字段：\n\n```\n{\n    top:            // 安全区域上边缘，对于沉浸式下window中该值通常为状态栏高度，全屏或非沉浸式下为0（iPhone X竖屏时全屏状态下也为44）\n    left:            // 安全区域左边缘，通常为0（iPhone X横屏时为44）\n    bottom:            // 安全区域下边缘，通常为0（iPhone X竖屏时为34，横屏时为21）\n    right:            // 安全区域右边缘，通常为0（iPhone X横屏时为44）\n}\n```\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet safeArea = wya.safeArea;        // JSON对象，如{top:20, left:0, bottom:0, right:0}\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/screenHeight.md":function(n,e){n.exports="##### 1. 说明\n\n屏幕分辨率高，数字类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet screenHeight = wya.screenHeight;  // 比如： 960\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/screenWidth.md":function(n,e){n.exports="##### 1. 说明\n\n屏幕分辨率宽，数字类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet screenWidth = wya.screenWidth;  // 比如： 640\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/statusBarAppearance.md":function(n,e){n.exports="##### 1. 说明\n\n当前应用状态栏是否支持沉浸式效果，布尔类型\n\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet statusBarAppearance = wya.statusBarAppearance; // 比如： true\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/systemType.md":function(n,e){n.exports="##### 1. 说明\n\n系统类型，字符串类型\n\n- 取值范围：\n\n```\nios            // iOS系统\nandroid        // Android系统\n```\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet systemType = wya.systemType;  // 比如： ios\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/systemVersion.md":function(n,e){n.exports="##### 1. 说明\n\n手机平台的系统版本，字符串类型\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet systemVersion = wya.systemVersion;  // 比如： 8.0\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/uiMode.md":function(n,e){n.exports="##### 1. 说明\n\n设备类型，字符串类型\n- 取值范围：\n```\npad\nphone\nwatch\n```\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet uiMode = wya.uiMode;  // 比如：phone\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/version.md":function(n,e){n.exports="##### 1. 说明\n\n引擎版本信息，字符串类型 (sdk自带的，Native端不用返回)\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet version = wya.version;  // 比如： 1.0.0\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/wgtParam.md":function(n,e){n.exports='##### 1. 说明\n\nwidget 参数，JSON 对象类型\n\n用于获取 widget 间传递的参数值，为 openWidget() 方法中的 wgtParam 参数对应值\n\n\n\n##### 2. 示例代码\n\n```javascript\nimport wya from \'wya-js-sdk\';\n\nlet wgtParam = wya.wgtParam;  //比如： {"name": "API Demo"}\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------\n'},"../../docs/consts/wgtRootDir.md":function(n,e){n.exports="##### 1. 说明\n\nwidget: //协议对应的真实目录，即 widget 网页包的根目录，字符串类型\n\n注意该目录为只读，不要往该目录下面写文件\n\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet wgtRootDir = wya.wgtRootDir;  \n/* \n比如：  \n/private/var/mobile/Containers/Bundle/Application/56218B5B-1B59-48CD-8080-DAC54DB46446/UZApp.app/widget\n*/\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/winHeight.md":function(n,e){n.exports="##### 1. 说明\n\n当前 window 高度，数字类型\n\n> 此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winHeight 为 568（若不使用iOS7风格则为 548），因此前端需根据 winWidth 和 winHeight 来进行布局\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet winHeight = wya.winHeight;  // 比如： 568\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------\n"},"../../docs/consts/winName.md":function(n,e){n.exports="##### 1. 说明\n\n当前 window 名称，字符串类型\n\n该属性值为 openWin() 时传递的 name 参数值，注意首页的名称为 root\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet winName = wya.winName;  // 比如： root\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"../../docs/consts/winWidth.md":function(n,e){n.exports="##### 1. 说明\n\n当前 window 宽度，数字类型\n\n> 此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winWidth 为 320，因此前端需根据 winWidth 和 winHeight 来进行布局\n\n##### 2. 示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet winWidth = wya.winWidth;  // 比如： 320\n```\n##### 3. 可用性\niOS系统，Android系统\n\n---------"},"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=ab9234da&lang=scss&scoped=true&":function(n,e,o){(n.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([n.i,'.c-cell[data-v-ab9234da]{background-color:#fff;box-sizing:border-box;color:inherit;min-height:48px;display:block;overflow:hidden;position:relative;text-decoration:none}.c-cell .__wrapper[data-v-ab9234da]{background-image:linear-gradient(180deg,#d9d9d9,#d9d9d9 50%,transparent 0);background-size:120% 1px;background-repeat:no-repeat;background-position:0 100%;background-origin:content-box;align-items:center;box-sizing:border-box;display:flex;font-size:16px;line-height:1;min-height:inherit;overflow:hidden;padding:0 10px;width:100%}.c-cell .__title[data-v-ab9234da]{padding-left:10px}.c-cell .__icon[data-v-ab9234da]{font-size:22px;color:#26a2ff;display:inline-block;width:30px;vertical-align:middle}.c-cell .__span[data-v-ab9234da]{flex:1 1 0%;text-align:right;padding-right:32px;color:#8e8e93}.c-cell .__arrow-right[data-v-ab9234da]{border:2px solid #c7c7cb;border-bottom-width:0;border-left-width:0;content:" ";top:50%;right:20px;position:absolute;width:10px;height:10px;-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg)}',""])},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=ab9234da&lang=scss&scoped=true&":function(n,e,o){var t=o("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=ab9234da&lang=scss&scoped=true&");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,o("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("4e54cdd0",t,!0,{})},"./src/pages/components/_common/cell/cell.vue":function(n,e,o){"use strict";var t={props:{to:[String,Object],icon:String,title:String,label:String,extra:String},computed:{},methods:{handleClick:function(n){this.$router.push(this.to)}}},s=(o("./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=ab9234da&lang=scss&scoped=true&"),o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),a=Object(s.a)(t,function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"c-cell",on:{click:n.handleClick}},[o("div",{staticClass:"__wrapper"},[o("div",{on:{click:function(e){e.stopPropagation(),n.$emit("click",n.title)}}},[o("span",{staticClass:"__title"},[n._v(n._s(n.extra||"")+" "+n._s(n.title))])]),n._v(" "),o("span",{staticClass:"__span"},[n._v(n._s(n.label))]),n._v(" "),o("i",{staticClass:"__arrow-right"})])])},[],!1,null,"ab9234da",null);a.options.__file="cell.vue";e.a=a.exports},"./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=ab9234da&lang=scss&scoped=true&":function(n,e,o){"use strict";var t=o("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=ab9234da&lang=scss&scoped=true&");o.n(t).a},"./src/pages/components/consts/detail/modules/root.js":function(n,e,o){"use strict";o.r(e);o("../sdk/dist/wya.umd.js"),o("./src/pages/components/_common/toasts/toasts.js");var t=o("../../docs/consts/version.md"),s={to:"/consts/version",title:"version",label:"引擎版本信息",invoke:function(){},markdown:o.n(t).a},a=o("../../docs/consts/appId.md"),i={to:"/consts/appId",title:"appId",label:"应用的ID",invoke:function(){},markdown:o.n(a).a},r=o("../../docs/consts/appName.md"),d={to:"/consts/appName",title:"appName",label:"应用名称",invoke:function(){},markdown:o.n(r).a},c=o("../../docs/consts/appVersion.md"),l={to:"/consts/appVersion",title:"appVersion",label:"应用版本号",invoke:function(){},markdown:o.n(c).a},m=o("../../docs/consts/systemType.md"),p={to:"/consts/systemType",title:"systemType",label:"系统类型",invoke:function(){},markdown:o.n(m).a},u=o("../../docs/consts/systemVersion.md"),f={to:"/consts/systemVersion",title:"systemVersion",label:"系统版本",invoke:function(){},markdown:o.n(u).a},w=o("../../docs/consts/deviceId.md"),v={to:"/consts/deviceId",title:"deviceId",label:"设备唯一标识",invoke:function(){},markdown:o.n(w).a},y=o("../../docs/consts/deviceToken.md"),h={to:"/consts/deviceToken",title:"deviceToken",label:"推送的Token",invoke:function(){},markdown:o.n(y).a},b=o("../../docs/consts/deviceModel.md"),k={to:"/consts/deviceModel",title:"deviceModel",label:"设备型号",invoke:function(){},markdown:o.n(b).a},g=o("../../docs/consts/deviceName.md"),j={to:"/consts/deviceName",title:"deviceName",label:"设备名称",invoke:function(){},markdown:o.n(g).a},x=o("../../docs/consts/uiMode.md"),_={to:"/consts/uiMode",title:"uiMode",label:"设备类型",invoke:function(){},markdown:o.n(x).a},A=o("../../docs/consts/operatorName.md"),S={to:"/consts/operatorName",title:"operatorName",label:"运营商",invoke:function(){},markdown:o.n(A).a},O=o("../../docs/consts/connectionType.md"),N={to:"/consts/connectionType",title:"connectionType",label:"网络连接类型",invoke:function(){},markdown:o.n(O).a},P=o("../../docs/consts/fullScreen.md"),D={to:"/consts/fullScreen",title:"fullScreen",label:"是否全屏",invoke:function(){},markdown:o.n(P).a},H=o("../../docs/consts/screenWidth.md"),T={to:"/consts/screenWidth",title:"screenWidth",label:"屏幕分辨率宽",invoke:function(){},markdown:o.n(H).a},W=o("../../docs/consts/screenHeight.md"),C={to:"/consts/screenHeight",title:"screenHeight",label:"屏幕分辨率高",invoke:function(){},markdown:o.n(W).a},B=o("../../docs/consts/winName.md"),I={to:"/consts/winName",title:"winName",label:"window 名称",invoke:function(){},markdown:o.n(B).a},M=o("../../docs/consts/winWidth.md"),V={to:"/consts/winWidth",title:"winWidth",label:"window 宽度",invoke:function(){},markdown:o.n(M).a},X=o("../../docs/consts/winHeight.md"),E={to:"/consts/winHeight",title:"winHeight",label:"window 高度",invoke:function(){},markdown:o.n(X).a},L=o("../../docs/consts/frameName.md"),z={to:"/consts/frameName",title:"frameName",label:"frame 名称",invoke:function(){},markdown:o.n(L).a},R=o("../../docs/consts/frameWidth.md"),J={to:"/consts/frameWidth",title:"frameWidth",label:"frame 宽度",invoke:function(){},markdown:o.n(R).a},$=o("../../docs/consts/frameHeight.md"),F={to:"/consts/frameHeight",title:"frameHeight",label:"frame 高度",invoke:function(){},markdown:o.n($).a},G=o("../../docs/consts/safeArea.md"),q={to:"/consts/safeArea",title:"safeArea",label:"安全距离",invoke:function(){},markdown:o.n(G).a},Y=o("../../docs/consts/pageParam.md"),U={to:"/consts/pageParam",title:"pageParam",label:"页面参数",invoke:function(){},markdown:o.n(Y).a},Z=o("../../docs/consts/wgtParam.md"),K={to:"/consts/wgtParam",title:"wgtParam",label:"widget 参数",invoke:function(){},markdown:o.n(Z).a},Q=o("../../docs/consts/appParam.md"),nn={to:"/consts/appParam",title:"appParam",label:"第三方 -> 参数",invoke:function(){},markdown:o.n(Q).a},en=o("../../docs/consts/statusBarAppearance.md"),on={to:"/consts/statusBarAppearance",title:"statusBarAppearance",label:"是否状态栏底透明",invoke:function(){},markdown:o.n(en).a},tn=o("../../docs/consts/wgtRootDir.md"),sn={to:"/consts/wgtRootDir",title:"wgtRootDir",label:"网页根目录",invoke:function(){},markdown:o.n(tn).a},an=o("../../docs/consts/fsDir.md"),rn={to:"/consts/fsDir",title:"fsDir",label:"根目录",invoke:function(){},markdown:o.n(an).a},dn=o("../../docs/consts/cacheDir.md"),cn={to:"/consts/cacheDir",title:"cacheDir",label:"缓存目录",invoke:function(){},markdown:o.n(dn).a},ln=o("../../docs/consts/debug.md"),mn={to:"/consts/debug",title:"debug",label:"是否开启调试",invoke:function(){},markdown:o.n(ln).a},pn=o("../../docs/consts/channel.md"),un={to:"/consts/channel",title:"channel",label:"app来源",invoke:function(){},markdown:o.n(pn).a},fn=o("../../docs/consts/jailbreak.md"),wn={to:"/consts/jailbreak",title:"jailbreak",label:"是否越狱",invoke:function(){},markdown:o.n(fn).a};o.d(e,"version",function(){return s}),o.d(e,"appId",function(){return i}),o.d(e,"appName",function(){return d}),o.d(e,"appVersion",function(){return l}),o.d(e,"systemType",function(){return p}),o.d(e,"systemVersion",function(){return f}),o.d(e,"deviceId",function(){return v}),o.d(e,"deviceToken",function(){return h}),o.d(e,"deviceModel",function(){return k}),o.d(e,"deviceName",function(){return j}),o.d(e,"uiMode",function(){return _}),o.d(e,"operatorName",function(){return S}),o.d(e,"connectionType",function(){return N}),o.d(e,"fullScreen",function(){return D}),o.d(e,"screenWidth",function(){return T}),o.d(e,"screenHeight",function(){return C}),o.d(e,"winName",function(){return I}),o.d(e,"winWidth",function(){return V}),o.d(e,"winHeight",function(){return E}),o.d(e,"frameName",function(){return z}),o.d(e,"frameWidth",function(){return J}),o.d(e,"frameHeight",function(){return F}),o.d(e,"safeArea",function(){return q}),o.d(e,"pageParam",function(){return U}),o.d(e,"wgtParam",function(){return K}),o.d(e,"appParam",function(){return nn}),o.d(e,"statusBarAppearance",function(){return on}),o.d(e,"wgtRootDir",function(){return sn}),o.d(e,"fsDir",function(){return rn}),o.d(e,"cacheDir",function(){return cn}),o.d(e,"debug",function(){return mn}),o.d(e,"channel",function(){return un}),o.d(e,"jailbreak",function(){return wn})},"./src/pages/containers/consts/modules/consts.vue":function(n,e,o){"use strict";o.r(e);var t=o("../sdk/dist/wya.umd.js"),s=o.n(t),a={name:"consts-contents",directives:{hljs:o("./src/pages/extends/directives/hljs.js").a},data:function(){return{wya:s.a}},computed:{html:function(){return"".concat(JSON.stringify(this.wya))}},created:function(){},mounted:function(){},methods:{handleClick:function(){}}},i=o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),r=Object(i.a)(a,function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("div",{directives:[{name:"hljs",rawName:"v-hljs",value:"json",expression:"`json`"}],domProps:{innerHTML:this._s(this.html)}})])},[],!1,null,"20af43a4",null);r.options.__file="contents.vue";var d=r.exports,c=o("./src/pages/components/_common/cell/cell.vue"),l=o("./src/pages/components/consts/detail/modules/root.js"),m={name:"consts",components:{Cell:c.a},data:function(){return{routes:l}},created:function(){},methods:{}},p=Object(i.a)(m,function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",n._l(n.routes,function(e,t){return o("cell",n._b({key:t},"cell",e,!1))}),1)},[],!1,null,"b7803376",null);p.options.__file="links.vue";var u={name:"consts",components:{Contents:d,Links:p.exports},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},f=Object(i.a)(u,function(){var n=this.$createElement,e=this._self._c||n;return e("set-title",{attrs:{title:"Constants 常量"}},[e("contents"),this._v(" "),e("links")],1)},[],!1,null,"178ecbca",null);f.options.__file="consts.vue";e.default=f.exports},"./src/pages/extends/directives/hljs.js":function(n,e,o){"use strict";o.d(e,"a",function(){return a});var t=o("./src/pages/extends/directives/utils.js");function s(n,e,o,t,s,a,i){try{var r=n[a](i),d=r.value}catch(n){return void o(n)}r.done?e(d):Promise.resolve(d).then(t,s)}var a=function(){var n,e=(n=regeneratorRuntime.mark(function n(e){var s,a,i,r,d,c,l,m,p,u,f,w,v=arguments;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s=v.length>1&&void 0!==v[1]?v[1]:{},a=v.length>2&&void 0!==v[2]?v[2]:{},n.prev=2,i=a.data.domProps.innerHTML,e.style.display="none",n.next=7,o.e(0).then(o.t.bind(null,"./node_modules/highlight.js/lib/index.js",7));case 7:return r=n.sent,d=r.default,n.next=11,o.e(3).then(o.t.bind(null,"./node_modules/js-beautify/js/lib/beautify.js",7));case 11:c=n.sent,l=c.default,0===(m=e.querySelectorAll("pre code")).length&&(p=s.value,"js"!==(u=void 0===p?"js":p)&&"json"!==u||(i=l.js_beautify(i,{indent_size:4})),(f=document.createElement("pre")).innerHTML='<code class="'.concat(u,'">').concat(i,"</code>"),e.innerHTML="",e.appendChild(f),m=e.querySelectorAll("pre code")),e.style.display="block",m.forEach(function(n){d.highlightBlock(n)}),(w=Object(t.a)(a.context))&&w.refresh(),n.next=24;break;case 21:n.prev=21,n.t0=n.catch(2),console.log(n.t0);case 24:case"end":return n.stop()}},n,this,[[2,21]])}),function(){var e=this,o=arguments;return new Promise(function(t,a){var i=n.apply(e,o);function r(n){s(i,t,a,r,d,"next",n)}function d(n){s(i,t,a,r,d,"throw",n)}r(void 0)})});return function(n){return e.apply(this,arguments)}}()},"./src/pages/extends/directives/utils.js":function(n,e,o){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}o.d(e,"a",function(){return s});var s=function n(e){if("object"!==t(e))return null;var o=e.betterScroller;return void 0!==o?o:n(e.$parent)}}}]);