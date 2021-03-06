module.exports = (name) => {
	let contents = '';
	let [moduleName, methodName] = name.replace(/([A-Z])/, ".$1").split('.');
	methodName = methodName.charAt(0).toLowerCase() + methodName.slice(1);

	let scheme = `${moduleName}/${methodName}`;

	contents += `#### 1. 说明\n\n`;

	contents += `~\n\n`;

	contents += `#### 2. Client传递参数给Native\n\n`;

	contents += '```javascript\n';
	contents += `{\n`;
	contents += `	// ....\n`;
	contents += `}\n`;
	contents += '```\n\n';

	contents += `#### 3. Native传递参数给Client\n\n`;

	contents += '```javascript\n';
	contents += `{\n`;
	contents += `	status: 1,\n`;
	contents += `	msg: '响应成功',\n`;
	contents += `	data: {\n`;
	contents += `		// ....\n`;
	contents += `	}\n`;
	contents += `}\n`;
	contents += '```\n\n';

	contents += `#### 4. Client端示例代码\n\n`;

	contents += '```javascript\n';
	contents += `import wya from '@wya/js-sdk';\n\n`;
	contents += `let ${moduleName} = wya.requireModule('${moduleName}')\n`;
	contents += `${moduleName}.${methodName}({\n`;
	contents += `	// ...\n`;
	contents += `}).then(() => {\n`;
	contents += `	// ...\n`;
	contents += `}).catch(() => {\n`;
	contents += `	// ...\n`;
	contents += `});\n\n`;

	contents += `// 或者\n`;
	contents += `import wya from '@wya/js-sdk';\n\n`;
	contents += `wya.${moduleName}.${methodName}({\n`;
	contents += `	// ...\n`;
	contents += `}).then(() => {\n`;
	contents += `	// ...\n`;
	contents += `}).catch(() => {\n`;
	contents += `	// ...\n`;
	contents += `});\n\n`;

	contents += `// 或者\n`;
	contents += `wya.invoke('${scheme}', {\n`;
	contents += `	// ...\n`;
	contents += `}).then(() => {\n`;
	contents += `	// ...\n`;
	contents += `}).catch(() => {\n`;
	contents += `	// ...\n`;
	contents += `});\n`;
	contents += '```\n\n';

	contents += `#### 5. 不引入sdk示例代码\n\n`;

	contents += '```javascript\n';
	contents += `WYAJSBridge.invoke('${scheme}', {\n`;
	contents += `	// ...\n`;
	contents += `}).then(() => {\n`;
	contents += `	// ...\n`;
	contents += `}).catch(() => {\n`;
	contents += `	// ...\n`;
	contents += `});\n`;
	contents += '```\n\n';

	contents += `#### 6. Native端示例代码\n\n`;

	contents += '```javascript\n';
	contents += `WYAJSBridge.emit('[对应的唯一id]', '@Object');\n`;
	contents += '```\n\n';

	contents += `#### 7. 可用性\n\n`;

	contents += `iOS系统，Android系统\n\n`;

	contents += `---------\n\n`;
	return contents;
};



