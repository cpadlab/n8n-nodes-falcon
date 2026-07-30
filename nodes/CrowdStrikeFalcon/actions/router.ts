import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';
import { executeAccessScopes } from './accessScopes/AccessScopes.execution';
import { executeAdmissionControlPolicies } from './admissionControlPolicies/AdmissionControlPolicies.execution';
import { executeAgentInvocation } from './agentInvocation/AgentInvocation.execution';
import { executeAlerts } from './alerts/Alerts.execution';
import { executeApiClients } from './apiClients/ApiClients.execution';
import { executeApiIntegrations } from './apiIntegrations/ApiIntegrations.execution';
import { executeAspm } from './aspm/Aspm.execution';
import { executeCaoHunting } from './caoHunting/CaoHunting.execution';
import { executeCaseFiles } from './caseFiles/CaseFiles.execution';
import { executeCaseManagement } from './caseManagement/CaseManagement.execution';
import { executeCases } from './cases/Cases.execution';
import { executeCertificateBasedExclusions } from './certificateBasedExclusions/CertificateBasedExclusions.execution';
import { executeCloudAwsRegistration } from './cloudAwsRegistration/CloudAwsRegistration.execution';
import { executeCloudAzureRegistration } from './cloudAzureRegistration/CloudAzureRegistration.execution';
import { executeCloudConnectAws } from './cloudConnectAws/CloudConnectAws.execution';
import { executeCloudGoogleCloudRegistration } from './cloudGoogleCloudRegistration/CloudGoogleCloudRegistration.execution';
import { executeCloudOciRegistration } from './cloudOciRegistration/CloudOciRegistration.execution';
import { executeCloudPolicies } from './cloudPolicies/CloudPolicies.execution';
import { executeCloudSecurity } from './cloudSecurity/CloudSecurity.execution';
import { executeCloudSecurityAssets } from './cloudSecurityAssets/CloudSecurityAssets.execution';
import { executeCloudSecurityCompliance } from './cloudSecurityCompliance/CloudSecurityCompliance.execution';
import { executeCloudSecurityDetections } from './cloudSecurityDetections/CloudSecurityDetections.execution';
import { executeCloudSecurityRegistrationCombined } from './cloudSecurityRegistrationCombined/CloudSecurityRegistrationCombined.execution';
import { executeCloudSecurityRisks } from './cloudSecurityRisks/CloudSecurityRisks.execution';
import { executeCloudSnapshots } from './cloudSnapshots/CloudSnapshots.execution';
import { executeConfigurationAssessment } from './configurationAssessment/ConfigurationAssessment.execution';
import { executeConfigurationAssessmentEvaluationLogic } from './configurationAssessmentEvaluationLogic/ConfigurationAssessmentEvaluationLogic.execution';
import { executeContainerAlerts } from './containerAlerts/ContainerAlerts.execution';
import { executeContainerDetections } from './containerDetections/ContainerDetections.execution';
import { executeContainerImageCompliance } from './containerImageCompliance/ContainerImageCompliance.execution';
import { executeContainerImages } from './containerImages/ContainerImages.execution';
import { executeContainerPackages } from './containerPackages/ContainerPackages.execution';
import { executeContainerVulnerabilities } from './containerVulnerabilities/ContainerVulnerabilities.execution';
import { executeContentUpdatePolicies } from './contentUpdatePolicies/ContentUpdatePolicies.execution';
import { executeCorrelationRules } from './correlationRules/CorrelationRules.execution';
import { executeCorrelationRulesAdmin } from './correlationRulesAdmin/CorrelationRulesAdmin.execution';
import { executeCspgIacapi } from './cspgIacapi/CspgIacapi.execution';
import { executeCspmRegistration } from './cspmRegistration/CspmRegistration.execution';
import { executeCustomIoa } from './customIoa/CustomIoa.execution';
import { executeCustomStorage } from './customStorage/CustomStorage.execution';
import { executeD4cRegistration } from './d4cRegistration/D4cRegistration.execution';
import { executeDefault } from './default/Default.execution';
import { executeDeliverySettings } from './deliverySettings/DeliverySettings.execution';
import { executeDeployments } from './deployments/Deployments.execution';
import { executeDetects } from './detects/Detects.execution';
import { executeDeviceContent } from './deviceContent/DeviceContent.execution';
import { executeDeviceControlPolicies } from './deviceControlPolicies/DeviceControlPolicies.execution';
import { executeDeviceControlWithBluetooth } from './deviceControlWithBluetooth/DeviceControlWithBluetooth.execution';
import { executeDiscover } from './discover/Discover.execution';
import { executeDiscoverIot } from './discoverIot/DiscoverIot.execution';
import { executeDownloadsApi } from './downloadsApi/DownloadsApi.execution';
import { executeDriftIndicators } from './driftIndicators/DriftIndicators.execution';
import { executeEventSchema } from './eventSchema/EventSchema.execution';
import { executeEventStreams } from './eventStreams/EventStreams.execution';
import { executeExecution } from './execution/Execution.execution';
import { executeExposureManagement } from './exposureManagement/ExposureManagement.execution';
import { executeFalconCompleteDashboard } from './falconCompleteDashboard/FalconCompleteDashboard.execution';
import { executeFalconContainer } from './falconContainer/FalconContainer.execution';
import { executeFalconContainerCli } from './falconContainerCli/FalconContainerCli.execution';
import { executeFalconContainerImage } from './falconContainerImage/FalconContainerImage.execution';
import { executeFalconId } from './falconId/FalconId.execution';
import { executeFalconxSandbox } from './falconxSandbox/FalconxSandbox.execution';
import { executeFederatedConnections } from './federatedConnections/FederatedConnections.execution';
import { executeFieldSchema } from './fieldSchema/FieldSchema.execution';
import { executeFilevantage } from './filevantage/Filevantage.execution';
import { executeFirewallManagement } from './firewallManagement/FirewallManagement.execution';
import { executeFirewallPolicies } from './firewallPolicies/FirewallPolicies.execution';
import { executeFoundryLogscale } from './foundryLogscale/FoundryLogscale.execution';
import { executeFoundryLookupFiles } from './foundryLookupFiles/FoundryLookupFiles.execution';
import { executeHostGroup } from './hostGroup/HostGroup.execution';
import { executeHostMigration } from './hostMigration/HostMigration.execution';
import { executeHosts } from './hosts/Hosts.execution';
import { executeIdentityEntities } from './identityEntities/IdentityEntities.execution';
import { executeIdentityProtection } from './identityProtection/IdentityProtection.execution';
import { executeImageAssessmentPolicies } from './imageAssessmentPolicies/ImageAssessmentPolicies.execution';
import { executeIncidents } from './incidents/Incidents.execution';
import { executeInstallationTokens } from './installationTokens/InstallationTokens.execution';
import { executeInstallationTokensSettings } from './installationTokensSettings/InstallationTokensSettings.execution';
import { executeIntel } from './intel/Intel.execution';
import { executeIntelligenceFeeds } from './intelligenceFeeds/IntelligenceFeeds.execution';
import { executeIntelligenceIndicatorGraph } from './intelligenceIndicatorGraph/IntelligenceIndicatorGraph.execution';
import { executeIoaExclusions } from './ioaExclusions/IoaExclusions.execution';
import { executeIoc } from './ioc/Ioc.execution';
import { executeIocs } from './iocs/Iocs.execution';
import { executeItAutomation } from './itAutomation/ItAutomation.execution';
import { executeKnowledgeBaseAuditEvents } from './knowledgeBaseAuditEvents/KnowledgeBaseAuditEvents.execution';
import { executeKnowledgeBaseFiles } from './knowledgeBaseFiles/KnowledgeBaseFiles.execution';
import { executeKnowledgeBases } from './knowledgeBases/KnowledgeBases.execution';
import { executeKubernetesContainerCompliance } from './kubernetesContainerCompliance/KubernetesContainerCompliance.execution';
import { executeKubernetesProtection } from './kubernetesProtection/KubernetesProtection.execution';
import { executeMssp } from './mssp/Mssp.execution';
import { executeNetworkScanGlobalConfigs } from './networkScanGlobalConfigs/NetworkScanGlobalConfigs.execution';
import { executeNetworkScanNetworks } from './networkScanNetworks/NetworkScanNetworks.execution';
import { executeNetworkScanScanRunReports } from './networkScanScanRunReports/NetworkScanScanRunReports.execution';
import { executeNetworkScanScanRuns } from './networkScanScanRuns/NetworkScanScanRuns.execution';
import { executeNetworkScanScanners } from './networkScanScanners/NetworkScanScanners.execution';
import { executeNetworkScanScans } from './networkScanScans/NetworkScanScans.execution';
import { executeNetworkScanTemplates } from './networkScanTemplates/NetworkScanTemplates.execution';
import { executeNetworkScanZones } from './networkScanZones/NetworkScanZones.execution';
import { executeNgsiem } from './ngsiem/Ngsiem.execution';
import { executeOauth2 } from './oauth2/Oauth2.execution';
import { executeOds } from './ods/Ods.execution';
import { executePreventionPolicies } from './preventionPolicies/PreventionPolicies.execution';
import { executeProfileGroups } from './profileGroups/ProfileGroups.execution';
import { executeQuarantine } from './quarantine/Quarantine.execution';
import { executeQuickScan } from './quickScan/QuickScan.execution';
import { executeQuickScanPro } from './quickScanPro/QuickScanPro.execution';
import { executeRealTimeResponse } from './realTimeResponse/RealTimeResponse.execution';
import { executeRealTimeResponseAdmin } from './realTimeResponseAdmin/RealTimeResponseAdmin.execution';
import { executeRealTimeResponseAudit } from './realTimeResponseAudit/RealTimeResponseAudit.execution';
import { executeRecon } from './recon/Recon.execution';
import { executeReleaseNotes } from './releaseNotes/ReleaseNotes.execution';
import { executeReleases } from './releases/Releases.execution';
import { executeReportExecutions } from './reportExecutions/ReportExecutions.execution';
import { executeResponsePolicies } from './responsePolicies/ResponsePolicies.execution';
import { executeRuntimeDetections } from './runtimeDetections/RuntimeDetections.execution';
import { executeSaasSecurity } from './saasSecurity/SaasSecurity.execution';
import { executeSampleUploads } from './sampleUploads/SampleUploads.execution';
import { executeScanningOrchestrator } from './scanningOrchestrator/ScanningOrchestrator.execution';

export async function router( this: IExecuteFunctions, index: number, falconClient: FalconClient ): Promise<any> {

	const resource = this.getNodeParameter('resource', index) as string;

	switch (resource) {
		case 'accessScopes':
			return await executeAccessScopes.call(this, index, falconClient);
		case 'admissionControlPolicies':
			return await executeAdmissionControlPolicies.call(this, index, falconClient);
		case 'agentInvocation':
			return await executeAgentInvocation.call(this, index, falconClient);
		case 'alerts':
			return await executeAlerts.call(this, index, falconClient);
		case 'apiClients':
			return await executeApiClients.call(this, index, falconClient);
		case 'apiIntegrations':
			return await executeApiIntegrations.call(this, index, falconClient);
		case 'aspm':
			return await executeAspm.call(this, index, falconClient);
		case 'caoHunting':
			return await executeCaoHunting.call(this, index, falconClient);
		case 'caseFiles':
			return await executeCaseFiles.call(this, index, falconClient);
		case 'caseManagement':
			return await executeCaseManagement.call(this, index, falconClient);
		case 'cases':
			return await executeCases.call(this, index, falconClient);
		case 'certificateBasedExclusions':
			return await executeCertificateBasedExclusions.call(this, index, falconClient);
		case 'cloudAwsRegistration':
			return await executeCloudAwsRegistration.call(this, index, falconClient);
		case 'cloudAzureRegistration':
			return await executeCloudAzureRegistration.call(this, index, falconClient);
		case 'cloudConnectAws':
			return await executeCloudConnectAws.call(this, index, falconClient);
		case 'cloudGoogleCloudRegistration':
			return await executeCloudGoogleCloudRegistration.call(this, index, falconClient);
		case 'cloudOciRegistration':
			return await executeCloudOciRegistration.call(this, index, falconClient);
		case 'cloudPolicies':
			return await executeCloudPolicies.call(this, index, falconClient);
		case 'cloudSecurity':
			return await executeCloudSecurity.call(this, index, falconClient);
		case 'cloudSecurityAssets':
			return await executeCloudSecurityAssets.call(this, index, falconClient);
		case 'cloudSecurityCompliance':
			return await executeCloudSecurityCompliance.call(this, index, falconClient);
		case 'cloudSecurityDetections':
			return await executeCloudSecurityDetections.call(this, index, falconClient);
		case 'cloudSecurityRegistrationCombined':
			return await executeCloudSecurityRegistrationCombined.call(this, index, falconClient);
		case 'cloudSecurityRisks':
			return await executeCloudSecurityRisks.call(this, index, falconClient);
		case 'cloudSnapshots':
			return await executeCloudSnapshots.call(this, index, falconClient);
		case 'configurationAssessment':
			return await executeConfigurationAssessment.call(this, index, falconClient);
		case 'configurationAssessmentEvaluationLogic':
			return await executeConfigurationAssessmentEvaluationLogic.call(this, index, falconClient);
		case 'containerAlerts':
			return await executeContainerAlerts.call(this, index, falconClient);
		case 'containerDetections':
			return await executeContainerDetections.call(this, index, falconClient);
		case 'containerImageCompliance':
			return await executeContainerImageCompliance.call(this, index, falconClient);
		case 'containerImages':
			return await executeContainerImages.call(this, index, falconClient);
		case 'containerPackages':
			return await executeContainerPackages.call(this, index, falconClient);
		case 'containerVulnerabilities':
			return await executeContainerVulnerabilities.call(this, index, falconClient);
		case 'contentUpdatePolicies':
			return await executeContentUpdatePolicies.call(this, index, falconClient);
		case 'correlationRulesAdmin':
			return await executeCorrelationRulesAdmin.call(this, index, falconClient);
		case 'correlationRules':
			return await executeCorrelationRules.call(this, index, falconClient);
		case 'cspgIacapi':
			return await executeCspgIacapi.call(this, index, falconClient);
		case 'cspmRegistration':
			return await executeCspmRegistration.call(this, index, falconClient);
		case 'customIoa':
			return await executeCustomIoa.call(this, index, falconClient);
		case 'customStorage':
			return await executeCustomStorage.call(this, index, falconClient);
		case 'd4cRegistration':
			return await executeD4cRegistration.call(this, index, falconClient);
		case 'default':
			return await executeDefault.call(this, index, falconClient);
		case 'deliverySettings':
			return await executeDeliverySettings.call(this, index, falconClient);
		case 'deployments':
			return await executeDeployments.call(this, index, falconClient);
		case 'detects':
			return await executeDetects.call(this, index, falconClient);
		case 'deviceContent':
			return await executeDeviceContent.call(this, index, falconClient);
		case 'deviceControlPolicies':
			return await executeDeviceControlPolicies.call(this, index, falconClient);
		case 'deviceControlWithBluetooth':
			return await executeDeviceControlWithBluetooth.call(this, index, falconClient);
		case 'discover':
			return await executeDiscover.call(this, index, falconClient);
		case 'discoverIot':
			return await executeDiscoverIot.call(this, index, falconClient);
		case 'downloadsApi':
			return await executeDownloadsApi.call(this, index, falconClient);
		case 'driftIndicators':
			return await executeDriftIndicators.call(this, index, falconClient);
		case 'eventSchema':
			return await executeEventSchema.call(this, index, falconClient);
		case 'eventStreams':
			return await executeEventStreams.call(this, index, falconClient);
		case 'execution':
			return await executeExecution.call(this, index, falconClient);
		case 'exposureManagement':
			return await executeExposureManagement.call(this, index, falconClient);
		case 'falconCompleteDashboard':
			return await executeFalconCompleteDashboard.call(this, index, falconClient);
		case 'falconContainer':
			return await executeFalconContainer.call(this, index, falconClient);
		case 'falconContainerCli':
			return await executeFalconContainerCli.call(this, index, falconClient);
		case 'falconContainerImage':
			return await executeFalconContainerImage.call(this, index, falconClient);
		case 'falconId':
			return await executeFalconId.call(this, index, falconClient);
		case 'falconxSandbox':
			return await executeFalconxSandbox.call(this, index, falconClient);
		case 'federatedConnections':
			return await executeFederatedConnections.call(this, index, falconClient);
		case 'fieldSchema':
			return await executeFieldSchema.call(this, index, falconClient);
		case 'filevantage':
			return await executeFilevantage.call(this, index, falconClient);
		case 'firewallManagement':
			return await executeFirewallManagement.call(this, index, falconClient);
		case 'firewallPolicies':
			return await executeFirewallPolicies.call(this, index, falconClient);
		case 'foundryLogscale':
			return await executeFoundryLogscale.call(this, index, falconClient);
		case 'foundryLookupFiles':
			return await executeFoundryLookupFiles.call(this, index, falconClient);
		case 'hostGroup':
			return await executeHostGroup.call(this, index, falconClient);
		case 'hostMigration':
			return await executeHostMigration.call(this, index, falconClient);
		case 'hosts':
			return await executeHosts.call(this, index, falconClient);
		case 'identityEntities':
			return await executeIdentityEntities.call(this, index, falconClient);
		case 'identityProtection':
			return await executeIdentityProtection.call(this, index, falconClient);
		case 'imageAssessmentPolicies':
			return await executeImageAssessmentPolicies.call(this, index, falconClient);
		case 'incidents':
			return await executeIncidents.call(this, index, falconClient);
		case 'installationTokens':
			return await executeInstallationTokens.call(this, index, falconClient);
		case 'installationTokensSettings':
			return await executeInstallationTokensSettings.call(this, index, falconClient);
		case 'intel':
			return await executeIntel.call(this, index, falconClient);
		case 'intelligenceFeeds':
			return await executeIntelligenceFeeds.call(this, index, falconClient);
		case 'intelligenceIndicatorGraph':
			return await executeIntelligenceIndicatorGraph.call(this, index, falconClient);
		case 'ioaExclusions':
			return await executeIoaExclusions.call(this, index, falconClient);
		case 'ioc':
			return await executeIoc.call(this, index, falconClient);
		case 'iocs':
			return await executeIocs.call(this, index, falconClient);
		case 'itAutomation':
			return await executeItAutomation.call(this, index, falconClient);
		case 'knowledgeBaseAuditEvents':
			return await executeKnowledgeBaseAuditEvents.call(this, index, falconClient);
		case 'knowledgeBaseFiles':
			return await executeKnowledgeBaseFiles.call(this, index, falconClient);
		case 'knowledgeBases':
			return await executeKnowledgeBases.call(this, index, falconClient);
		case 'kubernetesContainerCompliance':
			return await executeKubernetesContainerCompliance.call(this, index, falconClient);
		case 'kubernetesProtection':
			return await executeKubernetesProtection.call(this, index, falconClient);
		case 'mssp':
			return await executeMssp.call(this, index, falconClient);
		case 'networkScanGlobalConfigs':
			return await executeNetworkScanGlobalConfigs.call(this, index, falconClient);
		case 'networkScanNetworks':
			return await executeNetworkScanNetworks.call(this, index, falconClient);
		case 'networkScanScanRunReports':
			return await executeNetworkScanScanRunReports.call(this, index, falconClient);
		case 'networkScanScanRuns':
			return await executeNetworkScanScanRuns.call(this, index, falconClient);
		case 'networkScanScanners':
			return await executeNetworkScanScanners.call(this, index, falconClient);
		case 'networkScanScans':
			return await executeNetworkScanScans.call(this, index, falconClient);
		case 'networkScanTemplates':
			return await executeNetworkScanTemplates.call(this, index, falconClient);
		case 'networkScanZones':
			return await executeNetworkScanZones.call(this, index, falconClient);
		case 'ngsiem':
			return await executeNgsiem.call(this, index, falconClient);
		case 'oauth2':
			return await executeOauth2.call(this, index, falconClient);
		case 'ods':
			return await executeOds.call(this, index, falconClient);
		case 'preventionPolicies':
			return await executePreventionPolicies.call(this, index, falconClient);
		case 'profileGroups':
			return await executeProfileGroups.call(this, index, falconClient);
		case 'quarantine':
			return await executeQuarantine.call(this, index, falconClient);
		case 'quickScan':
			return await executeQuickScan.call(this, index, falconClient);
		case 'quickScanPro':
			return await executeQuickScanPro.call(this, index, falconClient);
		case 'realTimeResponseAdmin':
			return await executeRealTimeResponseAdmin.call(this, index, falconClient);
		case 'realTimeResponse':
			return await executeRealTimeResponse.call(this, index, falconClient);
		case 'realTimeResponseAudit':
			return await executeRealTimeResponseAudit.call(this, index, falconClient);
		case 'recon':
			return await executeRecon.call(this, index, falconClient);
		case 'releaseNotes':
			return await executeReleaseNotes.call(this, index, falconClient);
		case 'releases':
			return await executeReleases.call(this, index, falconClient);
		case 'reportExecutions':
			return await executeReportExecutions.call(this, index, falconClient);
		case 'responsePolicies':
			return await executeResponsePolicies.call(this, index, falconClient);
		case 'runtimeDetections':
			return await executeRuntimeDetections.call(this, index, falconClient);
		case 'saasSecurity':
			return await executeSaasSecurity.call(this, index, falconClient);
		case 'sampleUploads':
			return await executeSampleUploads.call(this, index, falconClient);
		case 'scanningOrchestrator':
			return await executeScanningOrchestrator.call(this, index, falconClient);
		default:
			throw new Error(`Resource ${resource} is not supported.`);
	}

}