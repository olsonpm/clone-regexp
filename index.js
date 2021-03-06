'use strict';
const isRegexp = require('is-regexp');

const flagMap = {
	global: 'g',
	ignoreCase: 'i',
	multiline: 'm',
	sticky: 'y',
	unicode: 'u'
};

module.exports = (regex, options) => {
	if (!isRegexp(regex)) {
		throw new TypeError('Expected a RegExp instance');
	}

	options = options || {};

	const flags = Object.keys(flagMap).map(flag => (
		(typeof options[flag] === 'boolean' ? options[flag] : regex[flag]) ? flagMap[flag] : ''
	)).join('');

	return new RegExp(options.source || regex.source, flags);
};
