#### 1. 说明

~

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		// ....
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('offline', () => {

});

// on / once / last / first / off
wya.onOffline(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('offline', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('offline', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------
