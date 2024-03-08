// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
	// [Web-only]: Enables CSS support in Metro.

	isCSSEnabled: true,
});
// Expo 49 issue: default metro config needs to include "mjs"

// https://github.com/expo/expo/issues/23180

// config.resolver.sourceExts.push('mjs');
// module.exports = config;

const { withTamagui } = require('@tamagui/metro-plugin');
module.exports = withTamagui(config, {
	components: ['tamagui'],
	config: './tamagui.config.ts',
	outputCSS: './tamagui-web.css',
});