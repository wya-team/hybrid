(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"../../docs/events/appIntent.md":function(n,t){n.exports="#### 1. 说明\n\n本应用被其他应用调起来时（Android 平台也可以通过 Activity 打开），收到相关数据的回调\n\n在任意页面中注册该监听后，如果本应用被其他应用调起，将触发该监听函数，同时将传给该应用的数据回调给网页\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\tiosUrl: ''              // 其他应用打开本应用的url，只iOS有效，字符串类型\n\t\tsourceAppId: ''         // 其他应用的包名，iOS平台有可能为空字符串，字符串类型\n\t\tappParam: {}            // 其他应用传递过来的参数，JSON或字符串类型\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('appIntent', () => {\n\n});\n\n// on / once / last / first / off\nwya.onAppIntent(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('appIntent', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('appIntent', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/batteryLow.md":function(n,t){n.exports="#### 1. 说明\n\n设备电池电量低事件\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n    status: 1,\n    msg: '响应成功',\n    data: {\n        level: 100,            // 电池电量（0-100）\n        isPlugged: true        // 是否连接电源\n    }\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('batteryLow', () => {\n\n});\n\n// on / once / last / first / off\nwya.onBatteryLow(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('batteryLow', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('batteryLow', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/batteryStatus.md":function(n,t){n.exports="#### 1. 说明\n\n设备电池状态改变事件，如电量变化或正在充电\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\tlevel: 100,            // 电池电量（0-100）\n\t\tisPlugged: true        // 是否连接电源\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('batteryStatus', () => {\n\n});\n\n// on / once / last / first / off\nwya.onBatteryStatus(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('batteryStatus', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('batteryStatus', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/keyBack.md":function(n,t){n.exports="#### 1. 说明\n\n设备 back 键被点击事件，仅 Android 平台有效\n\n该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。\n\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\tkeyCode: 0                // 被点击的按键\n\t\tlongPress: false          // 是否是长按\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('keyBack', () => {\n\n});\n\n// on / once / last / first / off\nwya.onKeyBack(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('keyBack', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('keyBack', '@Object');\n```\n\n#### 6. 可用性\n\nAndroid系统\n\n---------\n\n"},"../../docs/events/keyMenu.md":function(n,t){n.exports="#### 1. 说明\n\n设备 menu 键被点击事件，仅 Android 平台有效\n\n该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。\n\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\tkeyCode: 0                // 被点击的按键\n\t\tlongPress: false          // 是否是长按\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('keyMenu', () => {\n\n});\n\n// on / once / last / first / off\nwya.onKeyMenu(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('keyMenu', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('keyMenu', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/keyboardHide.md":function(n,t){n.exports="#### 1. 说明\n\n系统键盘隐藏的回调\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('keyboardHide', () => {\n\n});\n\n// on / once / last / first / off\nwya.onKeyboardHide(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('keyboardHide', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('keyboardHide', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/keyboardShow.md":function(n,t){n.exports="#### 1. 说明\n\n系统键盘弹出的回调\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\theight: 260        // 键盘高度，数字类型\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('keyboardShow', () => {\n\n});\n\n// on / once / last / first / off\nwya.onKeyboardShow(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('keyboardShow', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('keyboardShow', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/noticeClick.md":function(n,t){n.exports="#### 1. 说明\n\n状态栏通知被用户点击后的回调\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\ttype: 0,            // 内容来源类型， 待定\n\t\tvalue: ''           // 内容，收到的推送内容\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('noticeClick', () => {\n\n});\n\n// on / once / last / first / off\nwya.onNoticeClick(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('noticeClick', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('noticeClick', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/offline.md":function(n,t){n.exports="#### 1. 说明\n\n监听设备断开网络的事件，字符串类型\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('offline', () => {\n\n});\n\n// on / once / last / first / off\nwya.onOffline(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('offline', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('offline', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/online.md":function(n,t){n.exports="#### 1. 说明\n\n监听设备连接到网络的事件\n\n#### 2. Native传递参数给Client\n\n> 取值范围参考常量\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\tconnectionType: '' // 当前网络连接类型，如2g、3g、4g、wifi等\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('online', () => {\n\n});\n\n// on / once / last / first / off\nwya.onOnline(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('online', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('online', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/pause.md":function(n,t){n.exports="#### 1. 说明\n\n应用进入后台事件\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('pause', () => {\n\n});\n\n// on / once / last / first / off\nwya.onPause(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('pause', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('pause', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/resume.md":function(n,t){n.exports="#### 1. 说明\n\n应用从后台回到前台事件\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('resume', () => {\n\n});\n\n// on / once / last / first / off\nwya.onResume(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('resume', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('resume', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/safeAreaChange.md":function(n,t){n.exports="#### 1. 说明\n\n安全区域发生变化的回调\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\ttop: 0,           // 安全区域上边缘，数字类型\n\t\tleft: 0,          // 安全区域左边缘，数字类型\n\t\tbottom: 0,        // 安全区域下边缘，数字类型\n\t\tright: 0          // 安全区域右边缘，数字类型\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('safeAreaChange', () => {\n\n});\n\n// on / once / last / first / off\nwya.onSafeAreaChange(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('safeAreaChange', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('safeAreaChange', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/shake.md":function(n,t){n.exports="#### 1. 说明\n\n设备摇动事件，字符串类型。设置该监听后，当前 APP 将立即开启摇动检测功能。\n\n可用于实现摇一摇功能\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('shake', () => {\n\n});\n\n// on / once / last / first / off\nwya.onShake(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('shake', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('shake', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/takeScreenshot.md":function(n,t){n.exports="#### 1. 说明\n\n应用在前台运行期间，用户屏幕截图事件\n\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\timage: '' // 是否回传图片待定\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('takeScreenshot', () => {\n\n});\n\n// on / once / last / first / off\nwya.onTakeScreenshot(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('takeScreenshot', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('takeScreenshot', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/viewAppear.md":function(n,t){n.exports="#### 1. 说明\n\nWindow 显示到屏幕的事件，字符串类型。收到 viewappear 事件回调，即标识当前 Window 已经动画结束，并且完全显示到屏幕上。\n\n该事件的作用对象为 Window，Frame 的显示不会收到事件\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('viewAppear', () => {\n\n});\n\n// on / once / last / first / off\nwya.onViewAppear(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('viewAppear', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('viewAppear', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/viewDisappear.md":function(n,t){n.exports="#### 1. 说明\n\nWindow 离开屏幕的事件，字符串类型。收到 viewdisappear 事件回调，即标识当前 Window 已经动画结束，并且完全从屏幕上移除。\n\n该事件的作用对象为 Window，Frame 的隐藏不会收到事件\n\n若是 Window 被关闭，此事件不会再回调\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('viewDisappear', () => {\n\n});\n\n// on / once / last / first / off\nwya.onViewDisappear(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('viewDisappear', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('viewDisappear', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/volumeDown.md":function(n,t){n.exports="#### 1. 说明\n\n设备音量减键被点击事件\n\n该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\tkeyCode: 0                // 被点击的按键\n\t\tlongPress: false          // 是否是长按\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('volumeDown', () => {\n\n});\n\n// on / once / last / first / off\nwya.onVolumeDown(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('volumeDown', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('volumeDown', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"../../docs/events/volumeUp.md":function(n,t){n.exports="#### 1. 说明\n\n设备音量加键被点击事件\n\n该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。\n\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\tkeyCode: 0                // 被点击的按键\n\t\tlongPress: false          // 是否是长按\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\n// on / once / last / first / off\nwya.on('volumeUp', () => {\n\n});\n\n// on / once / last / first / off\nwya.onVolumeUp(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('volumeUp', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('volumeUp', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"./src/pages/components/events/detail/modules/root.js":function(n,t,o){"use strict";o.r(t);var e=o("../sdk/dist/wya.umd.js"),i=o.n(e),a=o("./src/pages/components/_common/toasts/toasts.js"),r=o("../../docs/events/batteryLow.md");function s(n){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var f={to:"/events/batteryLow",title:"batteryLow",label:"低电量",invoke:function(){i.a.once("batteryLow",function(n){n="object"===s(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"batteryLow"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(r).a},c=o("../../docs/events/batteryStatus.md");function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var y={to:"/events/batteryStatus",title:"batteryStatus",label:"电池状态",invoke:function(){i.a.once("batteryStatus",function(n){n="object"===u(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"batteryStatus"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(c).a},l=o("../../docs/events/offline.md");function d(n){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var p={to:"/events/offline",title:"offline",label:"断开网络",invoke:function(){i.a.once("offline",function(n){n="object"===d(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"offline"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(l).a},m=o("../../docs/events/online.md");function v(n){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var b={to:"/events/online",title:"online",label:"连接网络",invoke:function(){i.a.once("online",function(n){n="object"===v(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"online"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(m).a},S=o("../../docs/events/pause.md");function k(n){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var g={to:"/events/pause",title:"pause",label:"应用进入后台",invoke:function(){i.a.once("pause",function(n){n="object"===k(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"pause"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(S).a},w=o("../../docs/events/resume.md");function j(n){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var h={to:"/events/resume",title:"resume",label:"应用从后台回到前台",invoke:function(){i.a.once("resume",function(n){n="object"===j(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"resume"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(w).a},A=o("../../docs/events/shake.md");function C(n){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var O={to:"/events/shake",title:"shake",label:"摇动事件",invoke:function(){i.a.once("shake",function(n){n="object"===C(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"shake"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(A).a},J=o("../../docs/events/takeScreenshot.md");function N(n){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var B={to:"/events/takeScreenshot",title:"takeScreenshot",label:"用户屏幕截图",invoke:function(){i.a.once("takeScreenshot",function(n){n="object"===N(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"takeScreenshot"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(J).a},W=o("../../docs/events/viewAppear.md");function Y(n){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var D={to:"/events/viewAppear",title:"viewAppear",label:"显示到屏幕的事件",invoke:function(){i.a.once("viewAppear",function(n){n="object"===Y(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"viewAppear"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(W).a},x=o("../../docs/events/viewDisappear.md");function I(n){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var U={to:"/events/viewDisappear",title:"viewDisappear",label:"离开屏幕的事件",invoke:function(){i.a.once("viewDisappear",function(n){n="object"===I(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"viewDisappear"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(x).a},H=o("../../docs/events/noticeClick.md");function L(n){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var M={to:"/events/noticeClick",title:"noticeClick",label:"状态栏通知点击",invoke:function(){i.a.once("noticeClick",function(n){n="object"===L(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"noticeClick"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(H).a},P=o("../../docs/events/appIntent.md");function F(n){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var K={to:"/events/appIntent",title:"appIntent",label:"应用被调起",invoke:function(){i.a.once("appIntent",function(n){n="object"===F(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"appIntent"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(P).a},V=o("../../docs/events/keyboardShow.md");function T(n){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var R={to:"/events/keyboardShow",title:"keyboardShow",label:"系统键盘弹出的回调",invoke:function(){i.a.once("keyboardShow",function(n){n="object"===T(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"keyboardShow"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(V).a},_=o("../../docs/events/keyboardHide.md");function q(n){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var z={to:"/events/keyboardHide",title:"keyboardHide",label:"系统键盘隐藏的回调",invoke:function(){i.a.once("keyboardHide",function(n){n="object"===q(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"keyboardHide"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(_).a},E=o("../../docs/events/safeAreaChange.md");function G(n){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var Q={to:"/events/safeAreaChange",title:"safeAreaChange",label:"安全区域变化",invoke:function(){i.a.once("safeAreaChange",function(n){n="object"===G(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"safeAreaChange"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(E).a},X=o("../../docs/events/keyBack.md");function Z(n){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var $={to:"/events/keyBack",title:"keyBack",label:"返回",invoke:function(){i.a.once("keyBack",function(n){n="object"===Z(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"keyBack"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(X).a},nn=o("../../docs/events/keyMenu.md");function tn(n){return(tn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var on={to:"/events/keyMenu",title:"keyMenu",label:"菜单键",invoke:function(){i.a.once("keyMenu",function(n){n="object"===tn(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"keyMenu"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(nn).a},en=o("../../docs/events/volumeUp.md");function an(n){return(an="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var rn={to:"/events/volumeUp",title:"volumeUp",label:"音量加键",invoke:function(){i.a.once("volumeUp",function(n){n="object"===an(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"volumeUp"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(en).a},sn=o("../../docs/events/volumeDown.md");function fn(n){return(fn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var cn={to:"/events/volumeDown",title:"volumeDown",label:"音量减键",invoke:function(){i.a.once("volumeDown",function(n){n="object"===fn(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),i.a.invoke("debugger",{event:"volumeDown"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:o.n(sn).a};o.d(t,"batteryLow",function(){return f}),o.d(t,"batteryStatus",function(){return y}),o.d(t,"offline",function(){return p}),o.d(t,"online",function(){return b}),o.d(t,"pause",function(){return g}),o.d(t,"resume",function(){return h}),o.d(t,"shake",function(){return O}),o.d(t,"takeScreenshot",function(){return B}),o.d(t,"viewAppear",function(){return D}),o.d(t,"viewDisappear",function(){return U}),o.d(t,"noticeClick",function(){return M}),o.d(t,"appIntent",function(){return K}),o.d(t,"keyboardShow",function(){return R}),o.d(t,"keyboardHide",function(){return z}),o.d(t,"safeAreaChange",function(){return Q}),o.d(t,"keyBack",function(){return $}),o.d(t,"keyMenu",function(){return on}),o.d(t,"volumeUp",function(){return rn}),o.d(t,"volumeDown",function(){return cn})}}]);