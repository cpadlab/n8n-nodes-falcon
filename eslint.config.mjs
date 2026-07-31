import { configWithoutCloudSupport } from '@n8n/node-cli/eslint';

export default [
	...configWithoutCloudSupport,
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'no-useless-escape': 'off',
			'@n8n/community-nodes/no-runtime-dependencies': 'off',
		},
	},
];
