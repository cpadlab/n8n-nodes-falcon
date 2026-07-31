import type { INodeProperties } from 'n8n-workflow';

import { createFilterField, createLimitField, createOperationField } from '../common';

export const containerImageComplianceOperations: INodeProperties[] = [
	createOperationField('containerImageCompliance', [

			{ name: 'Aggregate Cluster Assessments', value: 'extAggregateClusterAssessments', description: 'Get the assessments for each cluster', action: 'Aggregate cluster assessments' },
			{ name: 'Aggregate Failed Containers by Rules Path', value: 'extAggregateFailedContainersByRulesPath', description: 'Get the containers grouped into rules on which they failed', action: 'Aggregate failed containers by rules path' },
			{ name: 'Aggregate Failed Containers Count by Severity', value: 'extAggregateFailedContainersCountBySeverity', description: 'Get the failed containers count grouped into severity levels', action: 'Aggregate failed containers count by severity' },
			{ name: 'Aggregate Failed Images by Rules Path', value: 'extAggregateFailedImagesByRulesPath', description: 'Get the images grouped into rules on which they failed', action: 'Aggregate failed images by rules path' },
			{ name: 'Aggregate Failed Images Count by Severity', value: 'extAggregateFailedImagesCountBySeverity', description: 'Get the failed images count grouped into severity levels', action: 'Aggregate failed images count by severity' },
			{ name: 'Aggregate Failed Rules by Clusters', value: 'extAggregateFailedRulesByClusters', description: 'Get the failed rules for each cluster grouped into severity levels', action: 'Aggregate failed rules by clusters' },
			{ name: 'Aggregate Failed Rules by Images', value: 'extAggregateFailedRulesByImages', description: 'Get images with failed rules, rule count grouped by severity', action: 'Aggregate failed rules by images' },
			{ name: 'Aggregate Failed Rules Count by Severity', value: 'extAggregateFailedRulesCountBySeverity', description: 'Get the failed rules count grouped into severity levels', action: 'Aggregate failed rules count by severity' },
			{ name: 'Aggregate Image Assessments', value: 'extAggregateImageAssessments', description: 'Get the assessments for each image', action: 'Aggregate image assessments' },
			{ name: 'Aggregate Rules Assessments', value: 'extAggregateRulesAssessments', description: 'Get the assessments for each rule', action: 'Aggregate rules assessments' },
			{ name: 'Aggregate Rules by Status', value: 'extAggregateRulesByStatus', description: 'Get the rules grouped by their statuses', action: 'Aggregate rules by status' },
		
	], 'extAggregateClusterAssessments'),
];

export const containerImageComplianceFields: INodeProperties[] = [
	createFilterField('containerImageCompliance', ['extAggregateClusterAssessments',
					'extAggregateFailedContainersByRulesPath',
					'extAggregateFailedContainersCountBySeverity',
					'extAggregateFailedImagesByRulesPath',
					'extAggregateFailedImagesCountBySeverity',
					'extAggregateFailedRulesByClusters',
					'extAggregateFailedRulesByImages',
					'extAggregateFailedRulesCountBySeverity',
					'extAggregateImageAssessments',
					'extAggregateRulesAssessments',
					'extAggregateRulesByStatus',]),
	createLimitField('containerImageCompliance', ['extAggregateImageAssessments']),
];
