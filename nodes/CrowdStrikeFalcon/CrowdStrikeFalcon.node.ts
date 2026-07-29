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
import { router } from './actions/router';

export class CrowdStrikeFalcon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CrowdStrike Falcon',
		name: 'crowdStrikeFalcon',
		icon: 'file:falcon.svg',
		group: ['transform'],
		version: 1,
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
				options: [
					{ name: 'Access Scope', value: 'accessScopes' },
					{ name: 'Admission Control Policy', value: 'admissionControlPolicies' },
					{ name: 'Agent Invocation', value: 'agentInvocation' },
					{ name: 'Alerts', value: 'alerts' },
					{ name: 'API Clients', value: 'apiClients' },
					{ name: 'API Integrations', value: 'apiIntegrations' },
					{ name: 'ASPM', value: 'aspm' },
					{ name: 'CAO Hunting', value: 'caoHunting' },
					{ name: 'Case', value: 'cases' },
					{ name: 'Case Files', value: 'caseFiles' },
					{ name: 'Case Management', value: 'caseManagement' },
					{ name: 'Certificate Based Exclusions', value: 'certificateBasedExclusions' },
					{ name: 'Cloud AWS Registration', value: 'cloudAwsRegistration' },
					{ name: 'Cloud Azure Registration', value: 'cloudAzureRegistration' },
					{ name: 'Cloud Connect AWS', value: 'cloudConnectAws' },
					{ name: 'Cloud Google Cloud Registration', value: 'cloudGoogleCloudRegistration' },
					{ name: 'Cloud OCI Registration', value: 'cloudOciRegistration' },
					{ name: 'Cloud Policies', value: 'cloudPolicies' },
					{ name: 'Cloud Security', value: 'cloudSecurity' },
					{ name: 'Cloud Security Assets', value: 'cloudSecurityAssets' },
					{ name: 'Cloud Security Compliance', value: 'cloudSecurityCompliance' },
					{ name: 'Cloud Security Detections', value: 'cloudSecurityDetections' },
					{ name: 'Cloud Security Registration Combined', value: 'cloudSecurityRegistrationCombined' },
					{ name: 'Cloud Security Risks', value: 'cloudSecurityRisks' },
					{ name: 'Cloud Snapshots', value: 'cloudSnapshots' },
					{ name: 'Configuration Assessment', value: 'configurationAssessment' },
					{ name: 'Configuration Assessment Evaluation Logic', value: 'configurationAssessmentEvaluationLogic' },
					{ name: 'Container Alerts', value: 'containerAlerts' },
					{ name: 'Container Detections', value: 'containerDetections' },
					{ name: 'Container Image Compliance', value: 'containerImageCompliance' },
					{ name: 'Container Images', value: 'containerImages' },
					{ name: 'Container Packages', value: 'containerPackages' },
					{ name: 'Container Vulnerabilities', value: 'containerVulnerabilities' },
					{ name: 'Content Update Policies', value: 'contentUpdatePolicies' },
					{ name: 'Correlation Rules', value: 'correlationRules' },
					{ name: 'Correlation Rules Admin', value: 'correlationRulesAdmin' },
					{ name: 'CSPG IaC API', value: 'cspgIacapi' },
					{ name: 'CSPM Registration', value: 'cspmRegistration' },
					{ name: 'Custom IOA', value: 'customIoa' },
					{ name: 'Custom Storage', value: 'customStorage' },
					{ name: 'D4C Registration', value: 'd4cRegistration' },
					{ name: 'Default', value: 'default' },
					{ name: 'Delivery Settings', value: 'deliverySettings' },
					{ name: 'Deployments', value: 'deployments' },
					{ name: 'Detects', value: 'detects' },
					{ name: 'Device Content', value: 'deviceContent' },
					{ name: 'Device Control Policies', value: 'deviceControlPolicies' },
					{ name: 'Device Control with Bluetooth', value: 'deviceControlWithBluetooth' },
					{ name: 'Discover', value: 'discover' },
					{ name: 'Discover IoT', value: 'discoverIot' },
					{ name: 'Downloads API', value: 'downloadsApi' },
					{ name: 'Drift Indicators', value: 'driftIndicators' },
					{ name: 'Event Schema', value: 'eventSchema' },
					{ name: 'Event Streams', value: 'eventStreams' },
					{ name: 'Execution', value: 'execution' },
					{ name: 'Exposure Management', value: 'exposureManagement' },
					{ name: 'Falcon Complete Dashboard', value: 'falconCompleteDashboard' },
					{ name: 'Falcon Container', value: 'falconContainer' },
					{ name: 'Falcon Container CLI', value: 'falconContainerCli' },
					{ name: 'Falcon Container Image', value: 'falconContainerImage' },
					{ name: 'Falcon ID', value: 'falconId' },
					{ name: 'FalconX Sandbox', value: 'falconxSandbox' },
					{ name: 'Federated Connections', value: 'federatedConnections' },
					{ name: 'Field Schema', value: 'fieldSchema' },
					{ name: 'Filevantage', value: 'filevantage' },
					{ name: 'Firewall Management', value: 'firewallManagement' },
					{ name: 'Firewall Policies', value: 'firewallPolicies' },
					{ name: 'Foundry Logscale', value: 'foundryLogscale' },
					{ name: 'Foundry Lookup Files', value: 'foundryLookupFiles' },
					{ name: 'Host Group', value: 'hostGroup' },
					{ name: 'Host Migration', value: 'hostMigration' },
					{ name: 'Hosts', value: 'hosts' },
					{ name: 'Identity Entities', value: 'identityEntities' },
					{ name: 'Identity Protection', value: 'identityProtection' },
					{ name: 'Image Assessment Policies', value: 'imageAssessmentPolicies' },
					{ name: 'Incidents', value: 'incidents' },
					{ name: 'Installation Tokens', value: 'installationTokens' },
					{ name: 'Installation Tokens Settings', value: 'installationTokensSettings' },
					{ name: 'Intel', value: 'intel' },
				],
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
		],
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