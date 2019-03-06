import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/assists/log.md';

const invoke = () => {
	// ...
};

export default {
	to: '/assists/log',
	title: 'log',
	label: 'Native日志捕获',
	invoke,
	markdown
};
