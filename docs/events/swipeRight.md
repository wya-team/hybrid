> web/native均可处理

#### 1. 说明

Window 或者 Frame 的页面全局向右轻扫事件

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		// ....
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('swipeRight', () => {

});

// on / once / last / first / off
wya.onSwipeRight(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('swipeRight', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('swipeRight', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------
