import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const intelOperations: INodeProperties[] = [
	createOperationField('intel', [

			{ name: 'CAO Incidents Aggregates V1', value: 'caoIncidentsAggregatesV1', description: 'Perform statistical aggregations over incident data', action: 'Cao incidents aggregates v1' },
			{ name: 'CAO Incidents Entities V1', value: 'caoIncidentsEntitiesV1', description: 'Retrieve full details for adversary incidents by IDs', action: 'Cao incidents entities v1' },
			{ name: 'CAO Incidents Queries V1', value: 'caoIncidentsQueriesV1', description: 'Search for adversary incidents using FQL criteria', action: 'Cao incidents queries v1' },
			{ name: 'Get Intel Actor Entities', value: 'getIntelActorEntities', description: 'Retrieve specific actors using their actor IDs', action: 'Get intel actor entities' },
			{ name: 'Get Intel Indicator Entities', value: 'getIntelIndicatorEntities', description: 'Retrieve specific indicators using their indicator IDs', action: 'Get intel indicator entities' },
			{ name: 'Get Intel Report Entities', value: 'getIntelReportEntities', description: 'Retrieve specific reports using their report IDs', action: 'Get intel report entities' },
			{ name: 'Get Intel Report PDF', value: 'getIntelReportPDF', description: 'Return a Report PDF attachment', action: 'Get intel report pdf' },
			{ name: 'Get Intel Rule Entities', value: 'getIntelRuleEntities', description: 'Retrieve details for rule sets for specified IDs', action: 'Get intel rule entities' },
			{ name: 'Get Intel Rule File', value: 'getIntelRuleFile', description: 'Download earlier rule sets', action: 'Get intel rule file' },
			{ name: 'Get Latest Intel Rule File', value: 'getLatestIntelRuleFile', description: 'Download the latest rule set', action: 'Get latest intel rule file' },
			{ name: 'Get Malware Entities', value: 'getMalwareEntities', description: 'Get malware entities for specified IDs', action: 'Get malware entities' },
			{ name: 'Get Malware MITRE Report', value: 'getMalwareMitreReport', description: 'Export MITRE ATT&CK information for a malware family', action: 'Get malware mitre report' },
			{ name: 'Get MITRE Report', value: 'getMitreReport', description: 'Export MITRE ATT&CK information for an actor', action: 'Get mitre report' },
			{ name: 'Get Vulnerabilities', value: 'getVulnerabilities', description: 'Get vulnerabilities by providing IDs in body', action: 'Get vulnerabilities' },
			{ name: 'Post MITRE Attacks', value: 'postMitreAttacks', description: 'Retrieves report and observable IDs associated with actor and attacks', action: 'Post mitre attacks' },
			{ name: 'Query Intel Actor Entities', value: 'queryIntelActorEntities', description: 'Get info about actors matching provided FQL filters', action: 'Query intel actor entities' },
			{ name: 'Query Intel Actor IDs', value: 'queryIntelActorIds', description: 'Get actor IDs matching provided FQL filters', action: 'Query intel actor ids' },
			{ name: 'Query Intel Indicator Entities', value: 'queryIntelIndicatorEntities', description: 'Get info about indicators matching FQL filters', action: 'Query intel indicator entities' },
			{ name: 'Query Intel Indicator IDs', value: 'queryIntelIndicatorIds', description: 'Get indicator IDs matching FQL filters', action: 'Query intel indicator ids' },
			{ name: 'Query Intel Report Entities', value: 'queryIntelReportEntities', description: 'Get info about reports matching FQL filters', action: 'Query intel report entities' },
			{ name: 'Query Intel Report IDs', value: 'queryIntelReportIds', description: 'Get report IDs matching FQL filters', action: 'Query intel report ids' },
			{ name: 'Query Intel Rule IDs', value: 'queryIntelRuleIds', description: 'Search for rule IDs matching provided filter criteria', action: 'Query intel rule ids' },
			{ name: 'Query Malware', value: 'queryMalware', description: 'Get malware family names matching FQL filters', action: 'Query malware' },
			{ name: 'Query Malware Entities', value: 'queryMalwareEntities', description: 'Get malware entities matching FQL filters', action: 'Query malware entities' },
			{ name: 'Query MITRE Attacks', value: 'queryMitreAttacks', description: 'Gets MITRE tactics and techniques for given actor', action: 'Query mitre attacks' },
			{ name: 'Query MITRE Attacks for Malware', value: 'queryMitreAttacksForMalware', description: 'Gets MITRE tactics and techniques for given malware', action: 'Query mitre attacks for malware' },
			{ name: 'Query Vulnerabilities', value: 'queryVulnerabilities', description: 'Get vulnerability IDs matching FQL filters', action: 'Query vulnerabilities' },
		
	], 'queryIntelActorIds'),
];

export const intelFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intel'],
				operation: ['getIntelReportPDF', 'getIntelRuleFile', 'getMalwareMitreReport', 'queryMitreAttacks'],
			},
		},
		default: '',
		description: 'Unique ID string or numeric ID',
	},
	createIdsField('intel', ['getIntelActorEntities',
					'getIntelReportEntities',
					'getIntelRuleEntities',
					'getMalwareEntities',
					'queryMitreAttacks',
					'queryMitreAttacksForMalware',]),
	{
		displayName: 'Actor ID',
		name: 'actorId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intel'],
				operation: ['getMitreReport'],
			},
		},
		default: '',
		required: true,
		description: 'Actor ID string',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intel'],
				operation: ['getLatestIntelRuleFile', 'queryIntelRuleIds'],
			},
		},
		default: '',
		required: true,
		description: 'Rule type string (e.g. snort, yara)',
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intel'],
				operation: ['getMalwareMitreReport', 'getMitreReport'],
			},
		},
		default: 'json',
		required: true,
		description: 'Export format string',
	},
	createBodyJsonField('intel', ['caoIncidentsAggregatesV1',
					'caoIncidentsEntitiesV1',
					'getIntelIndicatorEntities',
					'getVulnerabilities',
					'postMitreAttacks',]),
	{
		displayName: 'Search Query (q)',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intel'],
				operation: [
					'queryIntelActorEntities',
					'queryIntelActorIds',
					'queryIntelIndicatorEntities',
					'queryIntelIndicatorIds',
					'queryIntelReportEntities',
					'queryIntelReportIds',
					'queryIntelRuleIds',
					'queryMalware',
					'queryMalwareEntities',
					'queryVulnerabilities',
				],
			},
		},
		default: '',
		description: 'Search string query',
	},
	...createStandardPaginationFields('intel', ['caoIncidentsQueriesV1',
					'queryIntelActorEntities',
					'queryIntelActorIds',
					'queryIntelIndicatorEntities',
					'queryIntelIndicatorIds',
					'queryIntelReportEntities',
					'queryIntelReportIds',
					'queryMalware',
					'queryMalwareEntities',
					'queryVulnerabilities',]),
];
