import type { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';
import { getFalconClient, handleFalconError } from './GenericFunctions';
import { accessScopesFields, accessScopesOperations } from './actions/accessScopes/AccessScopes.resource';
import { admissionControlPoliciesFields, admissionControlPoliciesOperations } from './actions/admissionControlPolicies/AdmissionControlPolicies.resource';
import { agentInvocationFields, agentInvocationOperations } from './actions/agentInvocation/AgentInvocation.resource';
import { alertsFields, alertsOperations } from './actions/alerts/Alerts.resource';
import { apiClientsFields, apiClientsOperations } from './actions/apiClients/ApiClients.resource';
import { apiIntegrationsFields, apiIntegrationsOperations } from './actions/apiIntegrations/ApiIntegrations.resource';
import { aspmFields, aspmOperations } from './actions/aspm/Aspm.resource';
import { caoHuntingFields, caoHuntingOperations } from './actions/caoHunting/CaoHunting.resource';
import { caseFilesFields, caseFilesOperations } from './actions/caseFiles/CaseFiles.resource';
import { caseManagementFields, caseManagementOperations } from './actions/caseManagement/CaseManagement.resource';
import { casesFields, casesOperations } from './actions/cases/Cases.resource';
import { certificateBasedExclusionsFields, certificateBasedExclusionsOperations } from './actions/certificateBasedExclusions/CertificateBasedExclusions.resource';
import { cloudAwsRegistrationFields, cloudAwsRegistrationOperations } from './actions/cloudAwsRegistration/CloudAwsRegistration.resource';
import { cloudAzureRegistrationFields, cloudAzureRegistrationOperations } from './actions/cloudAzureRegistration/CloudAzureRegistration.resource';
import { cloudConnectAwsFields, cloudConnectAwsOperations } from './actions/cloudConnectAws/CloudConnectAws.resource';
import { cloudGoogleCloudRegistrationFields, cloudGoogleCloudRegistrationOperations } from './actions/cloudGoogleCloudRegistration/CloudGoogleCloudRegistration.resource';
import { cloudOciRegistrationFields, cloudOciRegistrationOperations } from './actions/cloudOciRegistration/CloudOciRegistration.resource';
import { cloudPoliciesFields, cloudPoliciesOperations } from './actions/cloudPolicies/CloudPolicies.resource';
import { cloudSecurityFields, cloudSecurityOperations } from './actions/cloudSecurity/CloudSecurity.resource';
import { cloudSecurityAssetsFields, cloudSecurityAssetsOperations } from './actions/cloudSecurityAssets/CloudSecurityAssets.resource';
import { cloudSecurityComplianceFields, cloudSecurityComplianceOperations } from './actions/cloudSecurityCompliance/CloudSecurityCompliance.resource';
import { cloudSecurityDetectionsFields, cloudSecurityDetectionsOperations } from './actions/cloudSecurityDetections/CloudSecurityDetections.resource';
import { cloudSecurityRegistrationCombinedFields, cloudSecurityRegistrationCombinedOperations } from './actions/cloudSecurityRegistrationCombined/CloudSecurityRegistrationCombined.resource';
import { cloudSecurityRisksFields, cloudSecurityRisksOperations } from './actions/cloudSecurityRisks/CloudSecurityRisks.resource';
import { cloudSnapshotsFields, cloudSnapshotsOperations } from './actions/cloudSnapshots/CloudSnapshots.resource';
import { configurationAssessmentFields, configurationAssessmentOperations } from './actions/configurationAssessment/ConfigurationAssessment.resource';
import { configurationAssessmentEvaluationLogicFields, configurationAssessmentEvaluationLogicOperations } from './actions/configurationAssessmentEvaluationLogic/ConfigurationAssessmentEvaluationLogic.resource';
import { containerAlertsFields, containerAlertsOperations } from './actions/containerAlerts/ContainerAlerts.resource';
import { containerDetectionsFields, containerDetectionsOperations } from './actions/containerDetections/ContainerDetections.resource';
import { containerImageComplianceFields, containerImageComplianceOperations } from './actions/containerImageCompliance/ContainerImageCompliance.resource';
import { containerImagesFields, containerImagesOperations } from './actions/containerImages/ContainerImages.resource';
import { containerPackagesFields, containerPackagesOperations } from './actions/containerPackages/ContainerPackages.resource';
import { containerVulnerabilitiesFields, containerVulnerabilitiesOperations } from './actions/containerVulnerabilities/ContainerVulnerabilities.resource';
import { contentUpdatePoliciesFields, contentUpdatePoliciesOperations } from './actions/contentUpdatePolicies/ContentUpdatePolicies.resource';
import { correlationRulesFields, correlationRulesOperations } from './actions/correlationRules/CorrelationRules.resource';
import { correlationRulesAdminFields, correlationRulesAdminOperations } from './actions/correlationRulesAdmin/CorrelationRulesAdmin.resource';
import { cspgIacapiFields, cspgIacapiOperations } from './actions/cspgIacapi/CspgIacapi.resource';
import { cspmRegistrationFields, cspmRegistrationOperations } from './actions/cspmRegistration/CspmRegistration.resource';
import { customIoaFields, customIoaOperations } from './actions/customIoa/CustomIoa.resource';
import { customStorageFields, customStorageOperations } from './actions/customStorage/CustomStorage.resource';
import { d4cRegistrationFields, d4cRegistrationOperations } from './actions/d4cRegistration/D4cRegistration.resource';
import { dataProtectionConfigurationFields, dataProtectionConfigurationOperations } from './actions/dataProtectionConfiguration/DataProtectionConfiguration.resource';
import { defaultFields, defaultOperations } from './actions/default/Default.resource';
import { deliverySettingsFields, deliverySettingsOperations } from './actions/deliverySettings/DeliverySettings.resource';
import { deploymentsFields, deploymentsOperations } from './actions/deployments/Deployments.resource';
import { detectsFields, detectsOperations } from './actions/detects/Detects.resource';
import { deviceContentFields, deviceContentOperations } from './actions/deviceContent/DeviceContent.resource';
import { deviceControlPoliciesFields, deviceControlPoliciesOperations } from './actions/deviceControlPolicies/DeviceControlPolicies.resource';
import { deviceControlWithBluetoothFields, deviceControlWithBluetoothOperations } from './actions/deviceControlWithBluetooth/DeviceControlWithBluetooth.resource';
import { discoverFields, discoverOperations } from './actions/discover/Discover.resource';
import { discoverIotFields, discoverIotOperations } from './actions/discoverIot/DiscoverIot.resource';
import { downloadsApiFields, downloadsApiOperations } from './actions/downloadsApi/DownloadsApi.resource';
import { driftIndicatorsFields, driftIndicatorsOperations } from './actions/driftIndicators/DriftIndicators.resource';
import { eventSchemaFields, eventSchemaOperations } from './actions/eventSchema/EventSchema.resource';
import { eventStreamsFields, eventStreamsOperations } from './actions/eventStreams/EventStreams.resource';
import { executionFields, executionOperations } from './actions/execution/Execution.resource';
import { exposureManagementFields, exposureManagementOperations } from './actions/exposureManagement/ExposureManagement.resource';
import { falconCompleteDashboardFields, falconCompleteDashboardOperations } from './actions/falconCompleteDashboard/FalconCompleteDashboard.resource';
import { falconContainerFields, falconContainerOperations } from './actions/falconContainer/FalconContainer.resource';
import { falconContainerCliFields, falconContainerCliOperations } from './actions/falconContainerCli/FalconContainerCli.resource';
import { falconContainerImageFields, falconContainerImageOperations } from './actions/falconContainerImage/FalconContainerImage.resource';
import { falconIdFields, falconIdOperations } from './actions/falconId/FalconId.resource';
import { falconxSandboxFields, falconxSandboxOperations } from './actions/falconxSandbox/FalconxSandbox.resource';
import { federatedConnectionsFields, federatedConnectionsOperations } from './actions/federatedConnections/FederatedConnections.resource';
import { fieldSchemaFields, fieldSchemaOperations } from './actions/fieldSchema/FieldSchema.resource';
import { filevantageFields, filevantageOperations } from './actions/filevantage/Filevantage.resource';
import { firewallManagementFields, firewallManagementOperations } from './actions/firewallManagement/FirewallManagement.resource';
import { firewallPoliciesFields, firewallPoliciesOperations } from './actions/firewallPolicies/FirewallPolicies.resource';
import { foundryLogscaleFields, foundryLogscaleOperations } from './actions/foundryLogscale/FoundryLogscale.resource';
import { foundryLookupFilesFields, foundryLookupFilesOperations } from './actions/foundryLookupFiles/FoundryLookupFiles.resource';
import { hostGroupFields, hostGroupOperations } from './actions/hostGroup/HostGroup.resource';
import { hostMigrationFields, hostMigrationOperations } from './actions/hostMigration/HostMigration.resource';
import { hostsFields, hostsOperations } from './actions/hosts/Hosts.resource';
import { identityEntitiesFields, identityEntitiesOperations } from './actions/identityEntities/IdentityEntities.resource';
import { identityProtectionFields, identityProtectionOperations } from './actions/identityProtection/IdentityProtection.resource';
import { imageAssessmentPoliciesFields, imageAssessmentPoliciesOperations } from './actions/imageAssessmentPolicies/ImageAssessmentPolicies.resource';
import { incidentsFields, incidentsOperations } from './actions/incidents/Incidents.resource';
import { installationTokensFields, installationTokensOperations } from './actions/installationTokens/InstallationTokens.resource';
import { installationTokensSettingsFields, installationTokensSettingsOperations } from './actions/installationTokensSettings/InstallationTokensSettings.resource';
import { intelFields, intelOperations } from './actions/intel/Intel.resource';
import { intelligenceFeedsFields, intelligenceFeedsOperations } from './actions/intelligenceFeeds/IntelligenceFeeds.resource';
import { intelligenceIndicatorGraphFields, intelligenceIndicatorGraphOperations } from './actions/intelligenceIndicatorGraph/IntelligenceIndicatorGraph.resource';
import { ioaExclusionsFields, ioaExclusionsOperations } from './actions/ioaExclusions/IoaExclusions.resource';
import { iocFields, iocOperations } from './actions/ioc/Ioc.resource';
import { iocsFields, iocsOperations } from './actions/iocs/Iocs.resource';
import { itAutomationFields, itAutomationOperations } from './actions/itAutomation/ItAutomation.resource';
import { knowledgeBaseAuditEventsFields, knowledgeBaseAuditEventsOperations } from './actions/knowledgeBaseAuditEvents/KnowledgeBaseAuditEvents.resource';
import { knowledgeBaseFilesFields, knowledgeBaseFilesOperations } from './actions/knowledgeBaseFiles/KnowledgeBaseFiles.resource';
import { knowledgeBasesFields, knowledgeBasesOperations } from './actions/knowledgeBases/KnowledgeBases.resource';
import { kubernetesContainerComplianceFields, kubernetesContainerComplianceOperations } from './actions/kubernetesContainerCompliance/KubernetesContainerCompliance.resource';
import { kubernetesProtectionFields, kubernetesProtectionOperations } from './actions/kubernetesProtection/KubernetesProtection.resource';
import { maintenanceTokenFields, maintenanceTokenOperations } from './actions/maintenanceToken/MaintenanceToken.resource';
import { malqueryFields, malqueryOperations } from './actions/malquery/Malquery.resource';
import { messageCenterFields, messageCenterOperations } from './actions/messageCenter/MessageCenter.resource';
import { mlExclusionsFields, mlExclusionsOperations } from './actions/mlExclusions/MlExclusions.resource';
import { msspFields, msspOperations } from './actions/mssp/Mssp.resource';
import { mobileEnrollmentFields, mobileEnrollmentOperations } from './actions/mobileEnrollment/MobileEnrollment.resource';
import { networkScanGlobalConfigsFields, networkScanGlobalConfigsOperations } from './actions/networkScanGlobalConfigs/NetworkScanGlobalConfigs.resource';
import { networkScanNetworksFields, networkScanNetworksOperations } from './actions/networkScanNetworks/NetworkScanNetworks.resource';
import { networkScanScanRunReportsFields, networkScanScanRunReportsOperations } from './actions/networkScanScanRunReports/NetworkScanScanRunReports.resource';
import { networkScanScanRunsFields, networkScanScanRunsOperations } from './actions/networkScanScanRuns/NetworkScanScanRuns.resource';
import { networkScanScannersFields, networkScanScannersOperations } from './actions/networkScanScanners/NetworkScanScanners.resource';
import { networkScanScansFields, networkScanScansOperations } from './actions/networkScanScans/NetworkScanScans.resource';
import { networkScanTemplatesFields, networkScanTemplatesOperations } from './actions/networkScanTemplates/NetworkScanTemplates.resource';
import { networkScanZonesFields, networkScanZonesOperations } from './actions/networkScanZones/NetworkScanZones.resource';
import { ngsiemFields, ngsiemOperations } from './actions/ngsiem/Ngsiem.resource';
import { oauth2Fields, oauth2Operations } from './actions/oauth2/Oauth2.resource';
import { odsFields, odsOperations } from './actions/ods/Ods.resource';
import { preventionPoliciesFields, preventionPoliciesOperations } from './actions/preventionPolicies/PreventionPolicies.resource';
import { profileGroupsFields, profileGroupsOperations } from './actions/profileGroups/ProfileGroups.resource';
import { quarantineFields, quarantineOperations } from './actions/quarantine/Quarantine.resource';
import { quickScanFields, quickScanOperations } from './actions/quickScan/QuickScan.resource';
import { quickScanProFields, quickScanProOperations } from './actions/quickScanPro/QuickScanPro.resource';
import { realTimeResponseFields, realTimeResponseOperations } from './actions/realTimeResponse/RealTimeResponse.resource';
import { realTimeResponseAdminFields, realTimeResponseAdminOperations } from './actions/realTimeResponseAdmin/RealTimeResponseAdmin.resource';
import { realTimeResponseAuditFields, realTimeResponseAuditOperations } from './actions/realTimeResponseAudit/RealTimeResponseAudit.resource';
import { reconFields, reconOperations } from './actions/recon/Recon.resource';
import { releaseNotesFields, releaseNotesOperations } from './actions/releaseNotes/ReleaseNotes.resource';
import { releasesFields, releasesOperations } from './actions/releases/Releases.resource';
import { reportExecutionsFields, reportExecutionsOperations } from './actions/reportExecutions/ReportExecutions.resource';
import { responsePoliciesFields, responsePoliciesOperations } from './actions/responsePolicies/ResponsePolicies.resource';
import { runtimeDetectionsFields, runtimeDetectionsOperations } from './actions/runtimeDetections/RuntimeDetections.resource';
import { saasSecurityFields, saasSecurityOperations } from './actions/saasSecurity/SaasSecurity.resource';
import { sampleUploadsFields, sampleUploadsOperations } from './actions/sampleUploads/SampleUploads.resource';
import { scanningOrchestratorFields, scanningOrchestratorOperations } from './actions/scanningOrchestrator/ScanningOrchestrator.resource';
import { scheduledReportsFields, scheduledReportsOperations } from './actions/scheduledReports/ScheduledReports.resource';
import { sensorDownloadFields, sensorDownloadOperations } from './actions/sensorDownload/SensorDownload.resource';
import { sensorUpdatePoliciesFields, sensorUpdatePoliciesOperations } from './actions/sensorUpdatePolicies/SensorUpdatePolicies.resource';
import { sensorUsageApiFields, sensorUsageApiOperations } from './actions/sensorUsageApi/SensorUsageApi.resource';
import { sensorVisibilityExclusionsFields, sensorVisibilityExclusionsOperations } from './actions/sensorVisibilityExclusions/SensorVisibilityExclusions.resource';
import { serverlessExportsFields, serverlessExportsOperations } from './actions/serverlessExports/ServerlessExports.resource';
import { serverlessVulnerabilitiesFields, serverlessVulnerabilitiesOperations } from './actions/serverlessVulnerabilities/ServerlessVulnerabilities.resource';
import { spotlightEvaluationLogicFields, spotlightEvaluationLogicOperations } from './actions/spotlightEvaluationLogic/SpotlightEvaluationLogic.resource';
import { spotlightSupportedEvaluationFields, spotlightSupportedEvaluationOperations } from './actions/spotlightSupportedEvaluation/SpotlightSupportedEvaluation.resource';
import { spotlightVulnerabilitiesFields, spotlightVulnerabilitiesOperations } from './actions/spotlightVulnerabilities/SpotlightVulnerabilities.resource';
import { spotlightVulnerabilityMetadataFields, spotlightVulnerabilityMetadataOperations } from './actions/spotlightVulnerabilityMetadata/SpotlightVulnerabilityMetadata.resource';
import { streamFields, streamOperations } from './actions/stream/Stream.resource';
import { tailoredIntelligenceFields, tailoredIntelligenceOperations } from './actions/tailoredIntelligence/TailoredIntelligence.resource';
import { threatgraphFields, threatgraphOperations } from './actions/threatgraph/Threatgraph.resource';
import { unidentifiedContainersFields, unidentifiedContainersOperations } from './actions/unidentifiedContainers/UnidentifiedContainers.resource';
import { userManagementFields, userManagementOperations } from './actions/userManagement/UserManagement.resource';
import { workflowsFields, workflowsOperations } from './actions/workflows/Workflows.resource';
import { zeroTrustAssessmentFields, zeroTrustAssessmentOperations } from './actions/zeroTrustAssessment/ZeroTrustAssessment.resource';
import { router } from './actions/router';

const RESOURCE_OPTIONS: Array<[string, string]> = [
	['Access Scope', 'accessScopes'],
	['Admission Control Policy', 'admissionControlPolicies'],
	['Agent Invocation', 'agentInvocation'],
	['Alerts', 'alerts'],
	['API Clients', 'apiClients'],
	['API Integrations', 'apiIntegrations'],
	['ASPM', 'aspm'],
	['CAO Hunting', 'caoHunting'],
	['Case', 'cases'],
	['Case Files', 'caseFiles'],
	['Case Management', 'caseManagement'],
	['Certificate Based Exclusions', 'certificateBasedExclusions'],
	['Cloud AWS Registration', 'cloudAwsRegistration'],
	['Cloud Azure Registration', 'cloudAzureRegistration'],
	['Cloud Connect AWS', 'cloudConnectAws'],
	['Cloud Google Cloud Registration', 'cloudGoogleCloudRegistration'],
	['Cloud OCI Registration', 'cloudOciRegistration'],
	['Cloud Policies', 'cloudPolicies'],
	['Cloud Security', 'cloudSecurity'],
	['Cloud Security Assets', 'cloudSecurityAssets'],
	['Cloud Security Compliance', 'cloudSecurityCompliance'],
	['Cloud Security Detections', 'cloudSecurityDetections'],
	['Cloud Security Registration Combined', 'cloudSecurityRegistrationCombined'],
	['Cloud Security Risks', 'cloudSecurityRisks'],
	['Cloud Snapshots', 'cloudSnapshots'],
	['Configuration Assessment', 'configurationAssessment'],
	['Configuration Assessment Evaluation Logic', 'configurationAssessmentEvaluationLogic'],
	['Container Alerts', 'containerAlerts'],
	['Container Detections', 'containerDetections'],
	['Container Image Compliance', 'containerImageCompliance'],
	['Container Images', 'containerImages'],
	['Container Packages', 'containerPackages'],
	['Container Vulnerabilities', 'containerVulnerabilities'],
	['Content Update Policies', 'contentUpdatePolicies'],
	['Correlation Rules', 'correlationRules'],
	['Correlation Rules Admin', 'correlationRulesAdmin'],
	['CSPG IaC API', 'cspgIacapi'],
	['CSPM Registration', 'cspmRegistration'],
	['Custom IOA', 'customIoa'],
	['Custom Storage', 'customStorage'],
	['D4C Registration', 'd4cRegistration'],
	['Data Protection Configuration', 'dataProtectionConfiguration'],
	['Default', 'default'],
	['Delivery Settings', 'deliverySettings'],
	['Deployments', 'deployments'],
	['Detects', 'detects'],
	['Device Content', 'deviceContent'],
	['Device Control Policies', 'deviceControlPolicies'],
	['Device Control with Bluetooth', 'deviceControlWithBluetooth'],
	['Discover', 'discover'],
	['Discover IoT', 'discoverIot'],
	['Downloads API', 'downloadsApi'],
	['Drift Indicators', 'driftIndicators'],
	['Event Schema', 'eventSchema'],
	['Event Streams', 'eventStreams'],
	['Execution', 'execution'],
	['Exposure Management', 'exposureManagement'],
	['Falcon Complete Dashboard', 'falconCompleteDashboard'],
	['Falcon Container', 'falconContainer'],
	['Falcon Container CLI', 'falconContainerCli'],
	['Falcon Container Image', 'falconContainerImage'],
	['Falcon ID', 'falconId'],
	['FalconX Sandbox', 'falconxSandbox'],
	['Federated Connections', 'federatedConnections'],
	['Field Schema', 'fieldSchema'],
	['Filevantage', 'filevantage'],
	['Firewall Management', 'firewallManagement'],
	['Firewall Policies', 'firewallPolicies'],
	['Foundry Logscale', 'foundryLogscale'],
	['Foundry Lookup Files', 'foundryLookupFiles'],
	['Host Group', 'hostGroup'],
	['Host Migration', 'hostMigration'],
	['Hosts', 'hosts'],
	['Identity Entities', 'identityEntities'],
	['Identity Protection', 'identityProtection'],
	['Image Assessment Policies', 'imageAssessmentPolicies'],
	['Incidents', 'incidents'],
	['Installation Tokens', 'installationTokens'],
	['Installation Tokens Settings', 'installationTokensSettings'],
	['Intel', 'intel'],
	['Intelligence Feeds', 'intelligenceFeeds'],
	['Intelligence Indicator Graph', 'intelligenceIndicatorGraph'],
	['IOA Exclusions', 'ioaExclusions'],
	['IOC', 'ioc'],
	['IOCs', 'iocs'],
	['IT Automation', 'itAutomation'],
	['Knowledge Base Audit Events', 'knowledgeBaseAuditEvents'],
	['Knowledge Base Files', 'knowledgeBaseFiles'],
	['Knowledge Bases', 'knowledgeBases'],
	['Kubernetes Container Compliance', 'kubernetesContainerCompliance'],
	['Kubernetes Protection', 'kubernetesProtection'],
	['Maintenance Token', 'maintenanceToken'],
	['Malquery', 'malquery'],
	['Message Center', 'messageCenter'],
	['ML Exclusions', 'mlExclusions'],
	['MSSP', 'mssp'],
	['Mobile Enrollment', 'mobileEnrollment'],
	['Network Scan Global Configs', 'networkScanGlobalConfigs'],
	['Network Scan Networks', 'networkScanNetworks'],
	['Network Scan Scan Run Reports', 'networkScanScanRunReports'],
	['Network Scan Scan Runs', 'networkScanScanRuns'],
	['Network Scan Scanners', 'networkScanScanners'],
	['Network Scan Scans', 'networkScanScans'],
	['Network Scan Templates', 'networkScanTemplates'],
	['Network Scan Zones', 'networkScanZones'],
	['NGSIEM', 'ngsiem'],
	['OAuth2', 'oauth2'],
	['ODS', 'ods'],
	['Prevention Policies', 'preventionPolicies'],
	['Profile Groups', 'profileGroups'],
	['Quarantine', 'quarantine'],
	['Quick Scan', 'quickScan'],
	['Quick Scan Pro', 'quickScanPro'],
	['Real-Time Response', 'realTimeResponse'],
	['Real-Time Response Admin', 'realTimeResponseAdmin'],
	['Real-Time Response Audit', 'realTimeResponseAudit'],
	['Recon', 'recon'],
	['Release Notes', 'releaseNotes'],
	['Releases', 'releases'],
	['Report Executions', 'reportExecutions'],
	['Response Policies', 'responsePolicies'],
	['Runtime Detections', 'runtimeDetections'],
	['SaaS Security', 'saasSecurity'],
	['Sample Uploads', 'sampleUploads'],
	['Scanning Orchestrator', 'scanningOrchestrator'],
	['Scheduled Reports', 'scheduledReports'],
	['Sensor Download', 'sensorDownload'],
	['Sensor Update Policies', 'sensorUpdatePolicies'],
	['Sensor Usage API', 'sensorUsageApi'],
	['Sensor Visibility Exclusions', 'sensorVisibilityExclusions'],
	['Serverless Exports', 'serverlessExports'],
	['Serverless Vulnerabilities', 'serverlessVulnerabilities'],
	['Spotlight Evaluation Logic', 'spotlightEvaluationLogic'],
	['Spotlight Supported Evaluation', 'spotlightSupportedEvaluation'],
	['Spotlight Vulnerabilities', 'spotlightVulnerabilities'],
	['Spotlight Vulnerability Metadata', 'spotlightVulnerabilityMetadata'],
	['Stream', 'stream'],
	['Tailored Intelligence', 'tailoredIntelligence'],
	['Threatgraph', 'threatgraph'],
	['Unidentified Containers', 'unidentifiedContainers'],
	['User Management', 'userManagement'],
	['Workflows', 'workflows'],
	['Zero Trust Assessment', 'zeroTrustAssessment']
];

export class CrowdStrikeFalcon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CrowdStrike Falcon',
		name: 'crowdStrikeFalcon',
		icon: 'file:falcon.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with CrowdStrike Falcon API',
		defaults: {
			name: 'CrowdStrike Falcon',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'crowdStrikeFalconApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: RESOURCE_OPTIONS.map(([name, value]) => ({ name, value })),
				default: 'cases',
			},
			...accessScopesOperations,
			...accessScopesFields,
			...admissionControlPoliciesOperations,
			...admissionControlPoliciesFields,
			...agentInvocationOperations,
			...agentInvocationFields,
			...alertsOperations,
			...alertsFields,
			...apiClientsOperations,
			...apiClientsFields,
			...apiIntegrationsOperations,
			...apiIntegrationsFields,
			...aspmOperations,
			...aspmFields,
			...caoHuntingOperations,
			...caoHuntingFields,
			...caseFilesOperations,
			...caseFilesFields,
			...caseManagementOperations,
			...caseManagementFields,
			...casesOperations,
			...casesFields,
			...certificateBasedExclusionsOperations,
			...certificateBasedExclusionsFields,
			...cloudAwsRegistrationOperations,
			...cloudAwsRegistrationFields,
			...cloudAzureRegistrationOperations,
			...cloudAzureRegistrationFields,
			...cloudConnectAwsOperations,
			...cloudConnectAwsFields,
			...cloudGoogleCloudRegistrationOperations,
			...cloudGoogleCloudRegistrationFields,
			...cloudOciRegistrationOperations,
			...cloudOciRegistrationFields,
			...cloudPoliciesOperations,
			...cloudPoliciesFields,
			...cloudSecurityOperations,
			...cloudSecurityFields,
			...cloudSecurityAssetsOperations,
			...cloudSecurityAssetsFields,
			...cloudSecurityComplianceOperations,
			...cloudSecurityComplianceFields,
			...cloudSecurityDetectionsOperations,
			...cloudSecurityDetectionsFields,
			...cloudSecurityRegistrationCombinedOperations,
			...cloudSecurityRegistrationCombinedFields,
			...cloudSecurityRisksOperations,
			...cloudSecurityRisksFields,
			...cloudSnapshotsOperations,
			...cloudSnapshotsFields,
			...configurationAssessmentOperations,
			...configurationAssessmentFields,
			...configurationAssessmentEvaluationLogicOperations,
			...configurationAssessmentEvaluationLogicFields,
			...containerAlertsOperations,
			...containerAlertsFields,
			...containerDetectionsOperations,
			...containerDetectionsFields,
			...containerImageComplianceOperations,
			...containerImageComplianceFields,
			...containerImagesOperations,
			...containerImagesFields,
			...containerPackagesOperations,
			...containerPackagesFields,
			...containerVulnerabilitiesOperations,
			...containerVulnerabilitiesFields,
			...contentUpdatePoliciesOperations,
			...contentUpdatePoliciesFields,
			...correlationRulesOperations,
			...correlationRulesFields,
			...correlationRulesAdminOperations,
			...correlationRulesAdminFields,
			...cspgIacapiOperations,
			...cspgIacapiFields,
			...cspmRegistrationOperations,
			...cspmRegistrationFields,
			...customIoaOperations,
			...customIoaFields,
			...customStorageOperations,
			...customStorageFields,
			...d4cRegistrationOperations,
			...d4cRegistrationFields,
			...dataProtectionConfigurationOperations,
			...dataProtectionConfigurationFields,
			...defaultOperations,
			...defaultFields,
			...deliverySettingsOperations,
			...deliverySettingsFields,
			...deploymentsOperations,
			...deploymentsFields,
			...detectsOperations,
			...detectsFields,
			...deviceContentOperations,
			...deviceContentFields,
			...deviceControlPoliciesOperations,
			...deviceControlPoliciesFields,
			...deviceControlWithBluetoothOperations,
			...deviceControlWithBluetoothFields,
			...discoverOperations,
			...discoverFields,
			...discoverIotOperations,
			...discoverIotFields,
			...downloadsApiOperations,
			...downloadsApiFields,
			...driftIndicatorsOperations,
			...driftIndicatorsFields,
			...eventSchemaOperations,
			...eventSchemaFields,
			...eventStreamsOperations,
			...eventStreamsFields,
			...executionOperations,
			...executionFields,
			...exposureManagementOperations,
			...exposureManagementFields,
			...falconCompleteDashboardOperations,
			...falconCompleteDashboardFields,
			...falconContainerOperations,
			...falconContainerFields,
			...falconContainerCliOperations,
			...falconContainerCliFields,
			...falconContainerImageOperations,
			...falconContainerImageFields,
			...falconIdOperations,
			...falconIdFields,
			...falconxSandboxOperations,
			...falconxSandboxFields,
			...federatedConnectionsOperations,
			...federatedConnectionsFields,
			...fieldSchemaOperations,
			...fieldSchemaFields,
			...filevantageOperations,
			...filevantageFields,
			...firewallManagementOperations,
			...firewallManagementFields,
			...firewallPoliciesOperations,
			...firewallPoliciesFields,
			...foundryLogscaleOperations,
			...foundryLogscaleFields,
			...foundryLookupFilesOperations,
			...foundryLookupFilesFields,
			...hostGroupOperations,
			...hostGroupFields,
			...hostMigrationOperations,
			...hostMigrationFields,
			...hostsOperations,
			...hostsFields,
			...identityEntitiesOperations,
			...identityEntitiesFields,
			...identityProtectionOperations,
			...identityProtectionFields,
			...imageAssessmentPoliciesOperations,
			...imageAssessmentPoliciesFields,
			...incidentsOperations,
			...incidentsFields,
			...installationTokensOperations,
			...installationTokensFields,
			...installationTokensSettingsOperations,
			...installationTokensSettingsFields,
			...intelOperations,
			...intelFields,
			...intelligenceFeedsOperations,
			...intelligenceFeedsFields,
			...intelligenceIndicatorGraphOperations,
			...intelligenceIndicatorGraphFields,
			...ioaExclusionsOperations,
			...ioaExclusionsFields,
			...iocOperations,
			...iocFields,
			...iocsOperations,
			...iocsFields,
			...itAutomationOperations,
			...itAutomationFields,
			...knowledgeBaseAuditEventsOperations,
			...knowledgeBaseAuditEventsFields,
			...knowledgeBaseFilesOperations,
			...knowledgeBaseFilesFields,
			...knowledgeBasesOperations,
			...knowledgeBasesFields,
			...kubernetesContainerComplianceOperations,
			...kubernetesContainerComplianceFields,
			...kubernetesProtectionOperations,
			...kubernetesProtectionFields,
			...maintenanceTokenOperations,
			...maintenanceTokenFields,
			...malqueryOperations,
			...malqueryFields,
			...messageCenterOperations,
			...messageCenterFields,
			...mlExclusionsOperations,
			...mlExclusionsFields,
			...msspOperations,
			...msspFields,
			...mobileEnrollmentOperations,
			...mobileEnrollmentFields,
			...networkScanGlobalConfigsOperations,
			...networkScanGlobalConfigsFields,
			...networkScanNetworksOperations,
			...networkScanNetworksFields,
			...networkScanScanRunReportsOperations,
			...networkScanScanRunReportsFields,
			...networkScanScanRunsOperations,
			...networkScanScanRunsFields,
			...networkScanScannersOperations,
			...networkScanScannersFields,
			...networkScanScansOperations,
			...networkScanScansFields,
			...networkScanTemplatesOperations,
			...networkScanTemplatesFields,
			...networkScanZonesOperations,
			...networkScanZonesFields,
			...ngsiemOperations,
			...ngsiemFields,
			...oauth2Operations,
			...oauth2Fields,
			...odsOperations,
			...odsFields,
			...preventionPoliciesOperations,
			...preventionPoliciesFields,
			...profileGroupsOperations,
			...profileGroupsFields,
			...quarantineOperations,
			...quarantineFields,
			...quickScanOperations,
			...quickScanFields,
			...quickScanProOperations,
			...quickScanProFields,
			...realTimeResponseOperations,
			...realTimeResponseFields,
			...realTimeResponseAdminOperations,
			...realTimeResponseAdminFields,
			...realTimeResponseAuditOperations,
			...realTimeResponseAuditFields,
			...reconOperations,
			...reconFields,
			...releaseNotesOperations,
			...releaseNotesFields,
			...releasesOperations,
			...releasesFields,
			...reportExecutionsOperations,
			...reportExecutionsFields,
			...responsePoliciesOperations,
			...responsePoliciesFields,
			...runtimeDetectionsOperations,
			...runtimeDetectionsFields,
			...saasSecurityOperations,
			...saasSecurityFields,
			...sampleUploadsOperations,
			...sampleUploadsFields,
			...scanningOrchestratorOperations,
			...scanningOrchestratorFields,
			...scheduledReportsOperations,
			...scheduledReportsFields,
			...sensorDownloadOperations,
			...sensorDownloadFields,
			...sensorUpdatePoliciesOperations,
			...sensorUpdatePoliciesFields,
			...sensorUsageApiOperations,
			...sensorUsageApiFields,
			...sensorVisibilityExclusionsOperations,
			...sensorVisibilityExclusionsFields,
			...serverlessExportsOperations,
			...serverlessExportsFields,
			...serverlessVulnerabilitiesOperations,
			...serverlessVulnerabilitiesFields,
			...spotlightEvaluationLogicOperations,
			...spotlightEvaluationLogicFields,
			...spotlightSupportedEvaluationOperations,
			...spotlightSupportedEvaluationFields,
			...spotlightVulnerabilitiesOperations,
			...spotlightVulnerabilitiesFields,
			...spotlightVulnerabilityMetadataOperations,
			...spotlightVulnerabilityMetadataFields,
			...streamOperations,
			...streamFields,
			...tailoredIntelligenceOperations,
			...tailoredIntelligenceFields,
			...threatgraphOperations,
			...threatgraphFields,
			...unidentifiedContainersOperations,
			...unidentifiedContainersFields,
			...userManagementOperations,
			...userManagementFields,
			...workflowsOperations,
			...workflowsFields,
			...zeroTrustAssessmentOperations,
			...zeroTrustAssessmentFields,
		],
		usableAsTool: true,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const falconClient = await getFalconClient(this);

		for (let i = 0; i < items.length; i++) {
			try {
				const response = await router.call(this, i, falconClient);
				if (Array.isArray(response)) {
					response.forEach((item) =>
						returnData.push({ json: item, pairedItem: { item: i } }),
					);
				} else if (response !== undefined) {
					returnData.push({ json: response, pairedItem: { item: i } });
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: await handleFalconError(error) },
						pairedItem: { item: i },
					});
					continue;
				}
				const errorMessage = await handleFalconError(error);
				throw new NodeOperationError(this.getNode(), errorMessage, { itemIndex: i });
			}
		}

		return [returnData];

	}
}