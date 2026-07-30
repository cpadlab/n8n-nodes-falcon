# n8n-nodes-falcon

This is an n8n community node. It lets you interact with the CrowdStrike Falcon platform in your n8n workflows.

CrowdStrike Falcon is a cloud-native cybersecurity platform that provides endpoint protection, threat intelligence, incident response, and cloud security. This node acts as a comprehensive wrapper mapping the official [CrowdStrike FalconJS SDK](https://github.com/CrowdStrike/falconjs/), allowing you to automate operations across the entire Falcon ecosystem.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Resources](#resources)  
[Version history](#version-history)  
[License](#license)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

<details>
<summary>Access Scope</summary>

* **Query Access Scopes**: Query Access Scopes and return matching IDs.
* **Get Access Scopes by IDs**: Retrieves full details for given Access Scope IDs.

</details>

<details>
<summary>Admission Control Policy</summary>

* **Query Policies**: Search admission control policies.
* **Get Policies by IDs**: Get admission control policies by IDs.
* **Create Policy**: Create an admission control policy.
* **Update Policy**: Update an admission control policy.
* **Delete Policies**: Delete one or more admission control policies.
* **Update Policy Precedence**: Update admission control policy precedence.
* **Add Host Groups**: Add host groups to an admission control policy.
* **Remove Host Groups**: Remove host groups from an admission control policy.
* **Create Rule Groups**: Create rule groups in an admission control policy.
* **Update Rule Group**: Update a rule group in an admission control policy.
* **Delete Rule Groups**: Delete rule groups from an admission control policy.
* **Set Rule Group Precedence**: Change precedence of rule groups within a policy.
* **Replace Rule Group Selectors**: Replace labels/namespaces of a rule group.
* **Add Rule Group Custom Rule**: Add custom Rego rules to a rule group.
* **Remove Rule Group Custom Rule**: Delete custom Rego rules from all rule groups.

</details>

<details>
<summary>Agent Invocation</summary>

* **Get Agent Invocation**: Retrieves the list of messages resulting from a specified invocation.
* **Invoke Published Agent**: Invoke a published agent by ID with specified input.

</details>

<details>
<summary>Alerts</summary>

* **Query Alerts (V2)**: Retrieves all Alert IDs matching a given query.
* **Get Alerts by Composite IDs (V2)**: Retrieves all Alerts given their composite IDs.
* **Update Alerts (V3)**: Perform actions on Alerts identified by composite IDs.
* **Get Combined Alerts Stream (V1)**: Retrieves all Alerts matching a FQL filter using pagination token.
* **Get Alert Aggregates (V2)**: Retrieves aggregate values for Alerts across CIDs.
* **Query Alerts (V1 - Deprecated)**: Retrieves all Alert IDs matching a given query (V1 deprecated).
* **Patch Alert Entities (V2 - Deprecated)**: Perform actions on Alerts identified by composite IDs (V2 deprecated).
* **Post Alert Aggregates (V1 - Deprecated)**: Retrieves aggregate values for Alerts (V1 deprecated).
* **Get Alert Entities (V1 - Deprecated)**: Retrieves all Alerts given their IDs (V1 deprecated).

</details>

<details>
<summary>API Clients</summary>

* **Get All API Client IDs**: Get all API client IDs for customer.
* **Get API Clients by IDs**: Get API Clients based on API Client IDs provided.
* **Get Accessible Scopes**: Get all available API scopes for customer.
* **Create API Client**: Create a new API Client.
* **Update API Client**: Update an existing API Client by ID.
* **Delete API Clients**: Delete existing API Clients based on IDs.
* **Reset API Client Secret**: Reset existing API Client secret by IDs.

</details>

<details>
<summary>API Integrations</summary>

* **Execute Command**: Execute a command.
* **Execute Command Proxy**: Execute a command and proxy the response directly.
* **Get Combined Plugin Configs**: Queries for config resources and returns details.

</details>

<details>
<summary>ASPM</summary>

* **Create Executor Node**: Create a new relay node.
* **Create Integration**: Create a new integration.
* **Create Integration Task**: Create new integration task.
* **Delete Executor Node**: Delete a relay node.
* **Delete Group ID 09**: Delete group by ID.
* **Delete Integration**: Delete an existing integration by ID.
* **Delete Integration Task**: Delete an existing integration task by ID.
* **Delete Tags**: Remove existing tags.
* **Execute Function Data**: Query language queries (MSA format).
* **Execute Function Data Count**: Query language count queries (MSA format).
* **Execute Function Data Query**: Query language queries.
* **Execute Function Data Query Count**: Query language count queries.
* **Execute Functions**: Query language services queries.
* **Execute Functions Count**: Query language count queries for functions.
* **Execute Functions Overtime**: Query language overtime queries.
* **Execute Functions Query**: Query language services queries.
* **Execute Functions Query Count**: Query language count queries.
* **Execute Functions Query Overtime**: Query language overtime queries.
* **Execute Query**: Execute a query matching query page syntax.
* **Get Cloud Security Integration State**: Get Cloud Security integration state.
* **Get Executor Nodes**: Get all the relay nodes.
* **Get Executor Nodes Instances CSV**: Retrieve relay instances in CSV format.
* **Get Executor Nodes Metadata**: Get metadata about all executor nodes.
* **Get Group ID 09 V2**: Get group details.
* **Get Groups Hierarchy V2**: Get group hierarchy.
* **Get Groups List V2**: Get groups list.
* **Get Integration Tasks**: Get all the integration tasks.
* **Get Integration Tasks Admin**: Get integration tasks with admin scope.
* **Get Integration Tasks Metadata**: Get metadata about all integration tasks.
* **Get Integration Tasks V2**: Get all integration tasks V2.
* **Get Integration Types**: Get all the integration types.
* **Get Integrations**: Get list of all integrations.
* **Get Integrations V2**: Get list of all integrations V2.
* **Get Service Artifacts**: Get service artifacts.
* **Get Service Violation Types**: Get different types of violation.
* **Get Services Count**: Get total amount of existing services.
* **Get Tags**: Get all tags.
* **Get Users V2**: List users.
* **Post Group ID 09 Update Default**: Update default group.
* **Post Group ID 09 V2**: Update group.
* **Post Group V2**: Create group.
* **Run Integration Task**: Run an integration task by ID.
* **Run Integration Task Admin**: Run an integration task by ID (admin scope).
* **Run Integration Task V2**: Run an integration task by ID V2.
* **ServiceNow Get Deployments**: Get ServiceNow deployments.
* **ServiceNow Get Services**: Get ServiceNow services.
* **Set Cloud Security Integration State**: Set Cloud Security integration state.
* **Update Executor Node**: Update an existing relay node.
* **Update Integration**: Update an existing integration by ID.
* **Update Integration Task**: Update an existing integration task by ID.
* **Upsert Business Applications**: Create or update business applications.
* **Upsert Tags**: Create new or update existing tag.

</details>

<details>
<summary>CAO Hunting</summary>

* **Aggregate Hunting Guides**: Aggregate Hunting Guides.
* **Aggregate Intelligence Queries**: Aggregate intelligence queries.
* **Get Archive Export**: Creates an Archive Export.
* **Get Hunting Guides**: Retrieves a list of Hunting Guides.
* **Get Intelligence Queries**: Retrieves details of Intelligence queries IDs.
* **Search Hunting Guides**: Search for Hunting Guides matching conditions.
* **Search Intelligence Queries**: Search for intelligence queries IDs matching conditions.

</details>

<details>
<summary>Case</summary>

* **Get Cases Query**: Retrieves all Case IDs matching a query filter.
* **Get Cases by IDs**: Retrieves full details for given Case IDs.
* **Create Case**: Creates a new Case.
* **Update Case**: Updates specified fields on a Case.
* **Add Alert Evidence**: Adds alert evidence to a specified Case.
* **Add Event Evidence**: Adds event evidence to a specified Case.
* **Add Tags**: Adds tags to a specified Case.
* **Remove Tags**: Removes specified tags from a Case.
* **Merge Cases**: Merges a source case into a destination case.

</details>

<details>
<summary>Case Files</summary>

* **Aggregates File Details**: Get file details aggregates as specified via JSON.
* **Combined File Details**: Query file details.
* **Get File Details by ID**: Get file details by ID.
* **Update File Details**: Update file details.
* **Bulk Download Files**: Download multiple existing files from case as a ZIP.
* **Delete File Details by ID**: Delete file details by ID.
* **Download File**: Download existing file from case.
* **Download Files (Deprecated)**: Download existing files from case (deprecated).
* **Upload File for Case**: Upload file for case.
* **Get RTR File Metadata**: Gets metadata for a file via RTR without retrieving it.
* **Retrieve RTR File**: Retrieves a file from host using RTR and adds it to a case.
* **Retrieve Recent RTR File**: Retrieves a recently fetched RTR file and adds it to a case.
* **Query File Details IDs**: Query for IDs of file details.

</details>

<details>
<summary>Case Management</summary>

* **Aggregates Access Tags**: Get access tag aggregates.
* **Aggregates Notification Groups V1 (Deprecated)**: Get notification groups aggregations (deprecated).
* **Aggregates Notification Groups V2**: Get notification groups aggregations V2.
* **Aggregates SLAs**: Get SLA aggregations.
* **Aggregates Templates**: Get templates aggregations.
* **Get Fields by ID**: Get fields by ID.
* **Delete Notification Groups V1 (Deprecated)**: Delete notification groups by ID (deprecated).
* **Delete Notification Groups V2**: Delete notification groups by ID V2.
* **Get Notification Groups V1 (Deprecated)**: Get notification groups by ID (deprecated).
* **Get Notification Groups V2**: Get notification groups by ID V2.
* **Update Notification Group V1 (Deprecated)**: Update notification group (deprecated).
* **Update Notification Group V2**: Update notification group V2.
* **Create Notification Group V1 (Deprecated)**: Create notification group (deprecated).
* **Create Notification Group V2**: Create notification group V2.
* **Delete SLAs**: Delete SLAs.
* **Get SLAs by ID**: Get SLAs by ID.
* **Update SLA**: Update SLA.
* **Create SLA**: Create SLA.
* **Get Template Snapshots**: Get template snapshots.
* **Delete Templates**: Delete templates.
* **Export Templates**: Export templates to files in a zip archive.
* **Get Templates by ID**: Get templates by ID.
* **Import Template**: Import a template from a file.
* **Update Template**: Update template.
* **Create Template**: Create template.
* **Query Access Tags**: Query access tags.
* **Query Fields**: Query fields.
* **Query Notification Groups V1 (Deprecated)**: Query notification groups (deprecated).
* **Query Notification Groups V2**: Query notification groups V2.
* **Query SLAs**: Query SLAs.
* **Query Template Snapshots**: Query template snapshots.
* **Query Templates**: Query templates.

</details>

<details>
<summary>Certificate Based Exclusions</summary>

* **Create Certificate Based Exclusion**: Create new Certificate Based Exclusions.
* **Delete Certificate Based Exclusions**: Delete the exclusions by ID.
* **Get Certificate Based Exclusions**: Find all exclusion IDs matching query with filter.
* **Query Certificate Based Exclusions**: Search for cert-based exclusions.
* **Update Certificate Based Exclusion**: Updates existing Certificate Based Exclusions.
* **Get Certificate Information**: Retrieves certificate signing information for a file.

</details>

<details>
<summary>Cloud AWS Registration</summary>

* **Create Account Registration**: Creates a new account in our system for a customer.
* **Delete Account Registration**: Deletes an existing AWS account or organization in our system.
* **Get Account Registrations**: Retrieve existing AWS accounts by account IDs or organization IDs.
* **Query Account Registrations**: Retrieve existing AWS accounts by account IDs.
* **Trigger Health Check**: Trigger health check scan for AWS accounts.
* **Update Account Registration**: Patches an existing account in our system for a customer.
* **Validate Accounts**: Validates AWS account registration status.

</details>

<details>
<summary>Cloud Azure Registration</summary>

* **Create Registration**: Create an Azure registration for a tenant.
* **Create Suppressions**: Create new issue suppression rules.
* **Delete Legacy Subscription**: Delete existing legacy Azure subscriptions.
* **Delete Registration**: Deletes existing Azure registrations.
* **Delete Suppressions**: Remove/revoke suppression rules.
* **Download Script**: Retrieve script to create resources.
* **Get Issue Suppression Values by Field**: Retrieve distinct values for issue suppression fields.
* **Get Issue Values by Field**: Retrieve distinct values for issue fields.
* **Get Issues**: Retrieve issues for Azure registrations.
* **Get Registration**: Retrieve existing Azure registration for a tenant.
* **Get Script**: Download Azure deployment script (Terraform or Bicep).
* **Get Script Versions**: Retrieve available script versions.
* **Get Suppressions**: Retrieve existing suppression rules.
* **Trigger Health Check**: Trigger health check scan for Azure registrations.
* **Update Registration**: Update an existing Azure registration for a tenant.
* **Update Suppressions**: Update existing suppression rules.
* **Validate Registration**: Validate Azure registration status.

</details>

<details>
<summary>Cloud Connect AWS</summary>

* **Create or Update AWS Settings**: Create or update Global Settings applicable to all provisioned AWS accounts.
* **Delete AWS Accounts**: Delete a set of AWS Accounts by specifying their IDs.
* **Get AWS Accounts**: Retrieve a set of AWS Accounts by specifying their IDs.
* **Get AWS Settings**: Retrieve Global Settings applicable to all provisioned AWS accounts.
* **Provision AWS Accounts**: Provision AWS Accounts by specifying details.
* **Query AWS Accounts**: Search for provisioned AWS Accounts.
* **Query AWS Account IDs**: Search for provisioned AWS Account IDs.
* **Update AWS Accounts**: Update AWS Accounts by specifying account ID and details.
* **Verify AWS Account Access**: Performs Access Verification check on specified AWS Account IDs.

</details>

<details>
<summary>Cloud Google Cloud Registration</summary>

* **Create Registration**: Create a Google Cloud Registration.
* **Delete Registration**: Deletes a Google Cloud Registration by ID.
* **Get Entities**: Retrieve all GCP entities (orgs, folders, projects).
* **Get Registration**: Retrieve a Google Cloud Registration by ID.
* **Post Terraform Script**: Generate Google Cloud Terraform deployment scripts.
* **Put Registration**: Creates or updates a Google Cloud Registration.
* **Trigger Health Check**: Trigger health check scan for GCP registrations.
* **Update Registration**: Update a Google Cloud Registration.

</details>

<details>
<summary>Cloud OCI Registration</summary>

* **Create Account**: Create OCI tenancy account in CSPM.
* **Delete Account**: Delete an existing OCI tenancy in CSPM.
* **Download Script**: Retrieve script to create resources in tenancy OCID.
* **Get Account**: Retrieve a list of OCI tenancies.
* **Rotate Key**: Refresh key for the OCI Tenancy.
* **Update Account**: Patch an existing OCI account in our system.
* **Validate Tenancy**: Validate OCI account in CSPM for a provided CID.

</details>

<details>
<summary>Cloud Policies</summary>

* **Clone Compliance Framework**: Clone an existing compliance framework.
* **Create Compliance Control**: Create a new custom compliance control.
* **Create Compliance Framework**: Create a new custom compliance framework.
* **Create Rule**: Create a new rule.
* **Create Rule Override**: Create a new rule override.
* **Create Suppression Rule**: Create a new suppression rule.
* **Delete Compliance Controls**: Delete custom compliance controls.
* **Delete Compliance Framework**: Delete a custom compliance framework.
* **Delete Rule**: Delete a rule.
* **Delete Rule Override**: Delete a rule override.
* **Delete Suppression Rules**: Delete Suppression Rules by ID.
* **Get Compliance Controls**: Get compliance controls by ID.
* **Get Compliance Frameworks**: Get compliance frameworks by ID.
* **Get Enriched Asset**: Gets enriched assets combining primary and related resources.
* **Get Evaluation Result**: Gets evaluation results based on rule.
* **Get Rule**: Get a rule by ID.
* **Get Rule Input Schema**: Get rule input schema for given resource type.
* **Get Rule Override**: Get a rule override.
* **Get Suppression Rules**: Get Suppression Rules by ID.
* **Query Compliance Controls**: Query for compliance controls.
* **Query Compliance Frameworks**: Query for compliance frameworks.
* **Query Rule**: Query for rules.
* **Query Suppression Rules**: Query suppression rules.
* **Rename Section Compliance Framework**: Rename a section in a custom framework.
* **Replace Control Rules**: Assign rules to a compliance control.
* **Update Compliance Control**: Update a custom compliance control.
* **Update Compliance Framework**: Update a custom compliance framework.
* **Update Rule**: Update a rule.
* **Update Rule Override**: Update a rule override.
* **Update Suppression Rule**: Update a suppression rule.

</details>

<details>
<summary>Cloud Security</summary>

* **Combined Cloud Risks**: Gets cloud risks with full details based on filters and sort criteria.
* **Create Cloud Group**: Create a Cloud Group.
* **Delete Cloud Groups**: Delete Cloud Groups in batch.
* **List Cloud Group IDs**: Query Cloud Groups and returns IDs.
* **List Cloud Groups by ID**: List Cloud Groups By ID.
* **List Cloud Groups**: Query Cloud Groups and returns entities.
* **Update Cloud Group**: Update Cloud Group.

</details>

<details>
<summary>Cloud Security Assets</summary>

* **Get Application Findings**: Get findings for an application resource with pagination.
* **Get Compliance by Account**: Gets combined compliance data aggregated by account and region.
* **Get Assets by IDs**: Gets raw resources based on provided IDs.
* **Get Assets by Body (POST)**: Gets raw resources based on IDs in request body.
* **Query Assets**: Gets a list of resource IDs for given parameters.

</details>

<details>
<summary>Cloud Security Compliance</summary>

* **Get Framework Posture Summaries**: Get sections and requirements with scores for benchmarks.
* **Get Rule Posture Summaries**: Get compliance score and counts for rules.

</details>

<details>
<summary>Cloud Security Detections</summary>

* **Get Combined IOM by Rule**: Returns IOMs grouped by rule.
* **Get IOM Entities by IDs**: Gets IOMs based on provided IDs.
* **Get IOM Entities by Body (POST)**: Gets IOMs based on IDs in request body.
* **Query IOM IDs**: Gets a list of IOM IDs for given parameters.

</details>

<details>
<summary>Cloud Security Registration Combined</summary>

* **Get Account Aggregates**: Returns cross-provider account aggregates by status.

</details>

<details>
<summary>Cloud Security Risks</summary>

* **Get Enriched Timeline Risks**: Returns the enriched asset timeline.

</details>

<details>
<summary>Cloud Snapshots</summary>

* **Create Deployment Entity**: Launch a snapshot scan for a given cloud asset.
* **Get Credentials**: Gets registry credentials.
* **Get Scan Report**: Retrieve the scan report for an instance.
* **Read Deployments Combined**: Retrieve snapshot jobs matching search criteria.
* **Read Deployments Entities**: Retrieve snapshot jobs identified by provided IDs.
* **Register Cloud Account**: Register customer cloud account for snapshot scanning.

</details>

<details>
<summary>Configuration Assessment</summary>

* **Get Combined Assessments Query**: Search for assessments matching FQL filter.
* **Get Rule Details**: Get rules details for provided rule IDs.

</details>

<details>
<summary>Configuration Assessment Evaluation Logic</summary>

* **Get Evaluation Logic**: Get details on evaluation logic items by finding IDs.

</details>

<details>
<summary>Container Alerts</summary>

* **Read Container Alerts Count**: Search Container Alerts count by search criteria.
* **Read Container Alerts Count by Severity**: Get Container Alerts counts by severity.
* **Search and Read Container Alerts**: Search Container Alerts by search criteria.

</details>

<details>
<summary>Container Detections</summary>

* **Read Combined Detections**: Retrieve image assessment detections identified by filter criteria.
* **Read Detections**: Retrieve image assessment detection entities identified by filter criteria.
* **Read Detections Count**: Aggregate count of detections.
* **Read Detections Count by Severity**: Aggregate counts of detections by severity.
* **Read Detections Count by Type**: Aggregate counts of detections by detection type.
* **Search Detections**: Retrieve image assessment detection entities identified by filter criteria.

</details>

<details>
<summary>Container Image Compliance</summary>

* **Aggregate Cluster Assessments**: Get the assessments for each cluster.
* **Aggregate Failed Containers by Rules Path**: Get the containers grouped into rules on which they failed.
* **Aggregate Failed Containers Count by Severity**: Get the failed containers count grouped into severity levels.
* **Aggregate Failed Images by Rules Path**: Get the images grouped into rules on which they failed.
* **Aggregate Failed Images Count by Severity**: Get the failed images count grouped into severity levels.
* **Aggregate Failed Rules by Clusters**: Get the failed rules for each cluster grouped into severity levels.
* **Aggregate Failed Rules by Images**: Get images with failed rules, rule count grouped by severity.
* **Aggregate Failed Rules Count by Severity**: Get the failed rules count grouped into severity levels.
* **Aggregate Image Assessments**: Get the assessments for each image.
* **Aggregate Rules Assessments**: Get the assessments for each rule.
* **Aggregate Rules by Status**: Get the rules grouped by their statuses.

</details>

<details>
<summary>Container Images</summary>

* **Aggregate Image Assessment History**: Image assessment history.
* **Aggregate Image Count**: Aggregate count of images.
* **Aggregate Image Count by Base OS**: Aggregate count of images grouped by Base OS.
* **Aggregate Image Count by State**: Aggregate count of images grouped by state.
* **Combined Base Images**: Retrieves a list of base images for filter.
* **Combined Image by Vulnerability Count**: Retrieve top x images with most vulnerabilities.
* **Combined Image Detail**: Retrieve image entities by filter criteria.
* **Combined Image Issues Summary**: Retrieve image issues summary.
* **Combined Image Vulnerability Summary**: Aggregates information about vulnerabilities for an image.
* **Create Base Images Entities**: Creates base images using provided details.
* **Delete Base Images**: Delete base images by UUID.
* **Get Combined Images**: Get image assessment results with FQL filter.
* **Read Combined Images Export**: Retrieves paginated list of images for export.

</details>

<details>
<summary>Container Packages</summary>

* **Read Packages by Fixable Vuln Count**: Retrieve top x packages with most fixable vulnerabilities.
* **Read Packages by Image Count**: Retrieves N most frequently used packages across images.
* **Read Packages by Vuln Count**: Retrieve top x packages with most vulnerabilities.
* **Read Packages Combined**: Retrieve packages identified by filter criteria.
* **Read Packages Combined Export**: Retrieves a paginated list of packages for export.
* **Read Packages Combined V2**: Retrieve packages identified by filter criteria V2.
* **Read Packages Count by Zero Day**: Retrieve packages count affected by zero day vulnerabilities.

</details>

<details>
<summary>Container Vulnerabilities</summary>

* **Read Combined Vulnerabilities**: Retrieves a paginated list of vulnerabilities.
* **Read Combined Vulnerabilities Details**: Retrieve vulnerability details related to an image.
* **Read Combined Vulnerabilities Info**: Retrieve vulnerability and package related info.
* **Read Vulnerabilities by Image Count**: Retrieve top x vulnerabilities with most impacted images.
* **Read Vulnerabilities Publication Date**: Retrieve top x vulnerabilities with most recent publication date.
* **Read Vulnerability Count**: Aggregate count of vulnerabilities.
* **Read Vulnerability Count by Actively Exploited**: Aggregate count of vulnerabilities grouped by actively exploited.
* **Read Vulnerability Count by CPS Rating**: Aggregate count of vulnerabilities grouped by csp_rating.
* **Read Vulnerability Count by CVSS Score**: Aggregate count of vulnerabilities grouped by CVSS score.
* **Read Vulnerability Count by Severity**: Aggregate count of vulnerabilities grouped by severity.

</details>

<details>
<summary>Content Update Policies</summary>

* **Create Policies**: Create Content Update Policies.
* **Delete Policies**: Delete Content Update Policies by IDs.
* **Get Policies by IDs**: Retrieve Content Update Policies by IDs.
* **Perform Action on Policies**: Perform specified action on Content Update Policies.
* **Query Combined Policies**: Search for Content Update Policies with FQL filter.
* **Query Combined Policy Members**: Search for members of a Content Update Policy.
* **Query Policy IDs**: Search for Content Update Policy IDs.
* **Query Policy Member IDs**: Search for member Agent IDs of a policy.
* **Query Pinnable Content Versions**: Search for content versions available for pinning.
* **Set Policies Precedence**: Sets precedence of Content Update Policies.
* **Update Policies**: Update Content Update Policies.

</details>

<details>
<summary>Correlation Rules</summary>

* **Aggregates Rule Versions Post V1**: Get rules aggregates via json.
* **Combined Rules Get V1**: Find all rules matching query and filter.
* **Combined Rules Get V2**: Find all rules matching query and filter V2.
* **Entities Latest Rules Get V1**: Retrieve latest rule versions by rule IDs.
* **Entities Rule Versions Delete V1**: Delete rule versions by IDs.
* **Entities Rule Versions Export Post V1**: Export rule versions.
* **Entities Rule Versions Import Post V1**: Import rule versions.
* **Entities Rule Versions Publish Patch V1**: Publish existing rule version.
* **Entities Rules Delete V1**: Delete rules by IDs.
* **Entities Rules Get V1**: Retrieve rules by IDs.
* **Entities Rules Get V2**: Retrieve rule versions by IDs.
* **Entities Rules Patch V1**: Update rules.
* **Entities Rules Post V1**: Create rule.
* **Entities Templates Get V1**: Retrieve rule templates by IDs.
* **Entities Templates Rules Post V1**: Create rule from template.
* **Queries Rules Get V1**: Find all rule IDs matching query and filter.
* **Queries Rules Get V2**: Find all rule version IDs matching query and filter.
* **Queries Templates Get V1**: Search rule template IDs matching filter.

</details>

<details>
<summary>Correlation Rules Admin</summary>

* **Update Rule Ownership V1**: Change the owner of an existing Correlation Rule.
* **Update Rule Ownership V2 (Bulk)**: Bulk change the owner of existing Correlation Rules.

</details>

<details>
<summary>CSPG IaC API</summary>

* **Combined Detections**: Search IaC Detections using FQL query.
* **Get Credentials**: Gets the registry credentials.

</details>

<details>
<summary>CSPM Registration</summary>

* **Azure Download Certificate**: Returns base64 encoded certificate for service principal.
* **Azure Refresh Certificate**: Refresh certificate for service principal.
* **Connect CSPM GCP Account**: Connect GCP account with existing service account.
* **Create CSPM AWS Account**: Creates a new AWS account in CSPM.
* **Create CSPM Azure Account**: Creates a new Azure account in CSPM.
* **Create CSPM Azure Management Group**: Creates a new Azure management group in CSPM.
* **Create CSPM GCP Account**: Creates a new GCP account in CSPM.
* **Delete CSPM AWS Account**: Deletes an existing AWS account or organization.
* **Delete CSPM Azure Account**: Deletes an Azure subscription from system.
* **Delete CSPM Azure Management Group**: Deletes Azure management groups from system.
* **Delete CSPM GCP Account**: Deletes a GCP account from system.
* **Get Behavior Detections**: Get list of detected behaviors.
* **Get CSPM AWS Account**: Returns status of AWS account.
* **Get CSPM AWS Console Setup URLs**: Return URL for customer setup in AWS.
* **Get CSPM Azure Account**: Return information about Azure account registration.
* **Get CSPM Azure Management Group**: Return information about Azure management group registration.
* **Get CSPM Azure User Scripts Attachment**: Return Azure setup script attachment.
* **Get CSPM GCP Account**: Returns status of GCP account.
* **Get CSPM GCP Service Accounts Ext**: Returns service account ID and email.
* **Get CSPM GCP User Scripts Attachment**: Return GCP setup script attachment.
* **Get CSPM GCP Validate Accounts Ext**: Run synchronous health check for GCP.
* **Get CSPM Policies Details**: Returns detailed policies info by IDs.
* **Get CSPM Policy**: Returns detailed policy info by ID.
* **Get CSPM Policy Settings**: Returns information about policy settings.
* **Get CSPM Scan Schedule**: Returns scan schedule configuration.
* **Get Cloud Event IDs (Deprecated)**: Get list of related cloud event LogScale IDs.
* **Get Configuration Detection Entities**: Get misconfigurations by IDs.
* **Get Configuration Detection IDs V2**: Get list of active misconfiguration IDs V2.
* **Get Configuration Detections (Deprecated)**: Get list of active misconfigurations (deprecated).
* **Patch CSPM AWS Account**: Patches an existing AWS account.
* **Update CSPM Azure Account**: Patches an existing Azure account.
* **Update CSPM Azure Account Client ID**: Update Azure service account client ID.
* **Update CSPM Azure Default Subscription ID**: Update Azure default subscription ID.
* **Update CSPM GCP Account**: Patches an existing GCP account.
* **Update CSPM GCP Service Accounts Ext**: Patches GCP service account key.
* **Update CSPM Policy Settings**: Updates policy setting (severity/disable).
* **Update CSPM Scan Schedule**: Updates scan schedule configuration.
* **Validate CSPM GCP Service Account Ext**: Validates credentials for GCP service account.

</details>

<details>
<summary>Custom IOA</summary>

* **Create Rule**: Create a rule within a rule group.
* **Create Rule Group**: Create a rule group for a platform.
* **Delete Rule Groups**: Delete rule groups by ID.
* **Delete Rules**: Delete rules from a rule group by ID.
* **Get Patterns**: Get pattern severities by ID.
* **Get Platforms**: Get platforms by ID.
* **Get Rule Groups**: Get rule groups by ID.
* **Get Rule Types**: Get rule types by ID.
* **Get Rules (POST)**: Get rules by ID via request body.
* **Get Rules (GET)**: Get rules by ID list.
* **Query Patterns**: Get all pattern severity IDs.
* **Query Platforms**: Get all platform IDs.
* **Query Rule Groups Full**: Find all rule groups matching query with filter.
* **Query Rule Groups**: Finds all rule group IDs matching query.
* **Query Rule Types**: Get all rule type IDs.
* **Query Rules**: Finds all rule IDs matching query.
* **Update Rule Group**: Update a rule group.
* **Update Rules**: Update rules within a rule group.
* **Update Rules V2**: Update subset of rules within a rule group V2.
* **Validate**: Validates field values and test string matches.

</details>

<details>
<summary>Custom Storage</summary>

* **Delete Object**: Delete specified object.
* **Delete Versioned Object**: Delete specified versioned object.
* **Describe Collection**: Fetch metadata about an existing collection.
* **Describe Collections**: Fetch metadata about multiple existing collections.
* **Get Object**: Get bytes for specified object.
* **Get Schema**: Get bytes of specified schema.
* **Get Schema Metadata**: Get metadata for specified schema.
* **Get Versioned Object**: Get bytes for specified versioned object.
* **Get Versioned Object Metadata**: Get metadata for specified versioned object.
* **List Objects**: List object keys in specified collection.
* **List Collections**: List available collection names.
* **List Objects by Version**: List object keys by collection version.
* **List Schemas**: Get list of schemas for requested collection.
* **Get Object Metadata**: Get metadata for specified object.
* **Search Objects**: Search for objects matching filter criteria.
* **Search Objects by Version**: Search for versioned objects matching filter criteria.

</details>

<details>
<summary>D4C Registration</summary>

* **Connect D4C GCP Account**: Creates GCP account or connects existing service account.
* **Create D4C AWS Account**: Creates AWS account in D4C.
* **Create D4C GCP Account**: Creates GCP account in D4C.
* **Create Discover Cloud Azure Account**: Creates Azure account in Discover Cloud.
* **Delete D4C AWS Account**: Deletes AWS account or organization in D4C.
* **Delete D4C GCP Account**: Deletes GCP account in D4C.
* **Get D4C AWS Account Scripts Attachment**: Return AWS setup script attachment.
* **Get D4C AWS Account**: Returns status of AWS account in D4C.
* **Get D4C AWS Console Setup URLs**: Return setup URL for AWS.
* **Get D4C GCP Service Accounts Ext**: Returns service account ID and client email.
* **Get D4C GCP User Scripts Attachment**: Return GCP setup script attachment.
* **Get D4C GCP Account**: Returns status of GCP account in D4C.
* **Get D4C GCP User Scripts**: Return GCP setup script.
* **Get Discover Cloud Azure Account**: Return information about Azure account registration.
* **Get Discover Cloud Azure Tenant IDs**: Return available tenant IDs for Azure.
* **Get Discover Cloud Azure User Scripts**: Return Azure setup script.
* **Get Discover Cloud Azure User Scripts Attachment**: Return Azure setup script attachment.
* **Get Horizon D4C Scripts**: Returns static install scripts for Horizon.
* **Update D4C GCP Service Accounts Ext**: Patches service account key for GCP.
* **Update Discover Cloud Azure Account Client ID**: Update Azure service account client ID.

</details>

<details>
<summary>Data Protection Configuration</summary>

* **Entities Classification Delete V2**: Deletes classifications matching IDs.
* **Entities Classification Get V2**: Gets classifications matching IDs.
* **Entities Classification Patch V2**: Update classifications.
* **Entities Classification Post V2**: Create classifications.
* **Entities Cloud Application Create**: Create cloud application.
* **Entities Cloud Application Delete**: Delete cloud application.
* **Entities Cloud Application Get**: Get cloud application by IDs.
* **Entities Cloud Application Patch**: Update cloud application.
* **Entities Content Pattern Create**: Create content pattern.
* **Entities Content Pattern Delete**: Delete content pattern.
* **Entities Content Pattern Get**: Get content pattern by IDs.
* **Entities Content Pattern Patch**: Update content pattern.
* **Entities Enterprise Account Create**: Create enterprise account.
* **Entities Enterprise Account Delete**: Delete enterprise account.
* **Entities Enterprise Account Get**: Get enterprise account by IDs.
* **Entities Enterprise Account Patch**: Update enterprise account.
* **Entities File Type Get**: Get file type by IDs.
* **Entities Local Application Create**: Create local application.
* **Entities Local Application Delete**: Soft delete local application.
* **Entities Local Application Get**: Get local application by IDs.
* **Entities Local Application Group Create**: Create local application group.
* **Entities Local Application Group Delete**: Soft delete local application group.
* **Entities Local Application Group Get**: Get local application group by IDs.
* **Entities Local Application Group Patch**: Update local application group.
* **Entities Local Application Patch**: Update local application.
* **Entities Policy Delete V2**: Deletes policies matching IDs.
* **Entities Policy Get V2**: Gets policies matching IDs.
* **Entities Policy Patch V2**: Update policies.
* **Entities Policy Post V2**: Create policies.
* **Entities Policy Precedence Post V1**: Update policy precedence.
* **Entities Sensitivity Label Create V2**: Create sensitivity label V2.
* **Entities Sensitivity Label Delete V2**: Delete sensitivity labels V2.
* **Entities Sensitivity Label Get V2**: Get sensitivity labels V2.
* **Entities Web Location Create V2**: Create web location V2.
* **Entities Web Location Delete V2**: Delete web location V2.
* **Entities Web Location Get V2**: Get web location V2.
* **Entities Web Location Patch V2**: Update web location V2.
* **Queries Classification Get V2**: Search classifications matching criteria.
* **Queries Cloud Application Get V2**: Get cloud application IDs with filter.
* **Queries Content Pattern Get V2**: Get content pattern IDs with filter.
* **Queries Enterprise Account Get V2**: Get enterprise account IDs with filter.
* **Queries File Type Get V2**: Get file type IDs with filter.
* **Queries Local Application Get**: Get local application IDs with filter.
* **Queries Local Application Group Get**: Get local application group IDs with filter.
* **Queries Policy Get V2**: Search policies matching criteria.
* **Queries Sensitivity Label Get V2**: Get sensitivity label IDs with filter.
* **Queries Web Location Get V2**: Get web location IDs with filter.

</details>

<details>
<summary>Default</summary>

* **Combined Query Installed Patches**: Get installed patches information for hosts.
* **Delete Collections V1**: Cancel Collections.
* **Delete Configs V1**: Retires a custom configuration.
* **Falcon Complete Dashboards Queries Detects V1**: Query detects for Falcon Complete dashboards.
* **Falcon Complete Dashboards Queries Incidents V1**: Query incidents for Falcon Complete dashboards.
* **Get Collection Counts by V1**: Get Collection counts by field names.
* **Get Collections V1**: Get Collections with given IDs, Platform, Agent/Collector IDs, States.
* **Get Collectors V1**: Get collectors.
* **Get Combined Collections V1**: Get Combined Collections for Customer ID.
* **Get Combined Collectors V1**: Get collectors for the given Customer ID.
* **Get Combined Configs V1**: Get Configurations for the given Customer ID.
* **Get Combined Templates V1**: Get Templates with the given IDs.
* **Get Config Download V1**: Download offline Configuration file using ID.
* **Get Configs V1**: Get Configurations with the given IDs.
* **Get Templates V1**: Get Templates with the given IDs.
* **Post Collections V1**: Create Collections.
* **Post Collectors V1**: Shutdown collectors with self_destruct option.
* **Post Configs V1**: Creates a new custom configuration.
* **Post Deploy V1**: Deploy collector to managed endpoints.
* **Put Collections V1**: Update Collections.
* **Put Configs V1**: Creates or replaces an existing custom configuration.
* **Search Collections V1**: Search Collections for given Customer ID/Platform.
* **Search Collectors V1**: Search Collectors for given Customer ID/Platform.
* **Search Configs V1**: Search Configurations for the given Customer ID.
* **Search Templates V1**: Search Templates.
* **V1 Host Configs Post**: Configures all hosts in host group to accept execute API call.
* **V1 Status Get**: Fetches host configs within provided host group.
* **Validate Collection V1**: Validates a configuration collection.
* **Validate Config V1**: Validates a custom configuration.

</details>

<details>
<summary>Delivery Settings</summary>

* **Get Delivery Settings**: Get Delivery Settings.
* **Post Delivery Settings**: Create Delivery Settings.

</details>

<details>
<summary>Deployments</summary>

* **Get Deployments External V1**: Get deployment resources by IDs.

</details>

<details>
<summary>Detects</summary>

* **Get Aggregate Detects (Deprecated)**: Get aggregate detects (deprecated).
* **Get Detect Summaries (Deprecated)**: Get detect summaries by IDs (deprecated).
* **Query Detects (Deprecated)**: Query detects matching filter criteria (deprecated).
* **Update Detects by IDs V2 (Deprecated)**: Update detects by IDs (deprecated).

</details>

<details>
<summary>Device Content</summary>

* **Entities States V1**: Retrieve host content state for IDs.
* **Queries States V1**: Query for the content state of the host.

</details>

<details>
<summary>Device Control Policies</summary>

* **Create Policies (Deprecated)**: Create Device Control Policies (deprecated).
* **Delete Policies**: Delete Device Control Policies by IDs.
* **Get Default Policy (Deprecated)**: Retrieve Default Device Control Policy configuration (deprecated).
* **Get Policies by IDs (Deprecated)**: Retrieve Device Control Policies by IDs (deprecated).
* **Perform Action on Policies**: Perform action on Device Control Policies.
* **Query Combined Policies**: Search for Device Control Policies matching filter.
* **Query Combined Policy Members**: Search for members of a Device Control Policy.
* **Query Policy IDs**: Search for Device Control Policy IDs.
* **Query Policy Member IDs**: Search for member Agent IDs of a policy.
* **Set Policies Precedence**: Sets precedence of Device Control Policies.
* **Update Default Policy (Deprecated)**: Update Default Device Control Policy configuration (deprecated).
* **Update Policies (Deprecated)**: Update Device Control Policies (deprecated).

</details>

<details>
<summary>Device Control with Bluetooth</summary>

* **Get Default Settings**: Get default device control settings (USB and Bluetooth).
* **Get Policies V2**: Get device control policies for filter criteria (USB and Bluetooth).
* **Patch Policies Classes V1**: Update device control policy classes (USB and Bluetooth).
* **Patch Policies V2**: Update device control policy base (USB and Bluetooth).
* **Post Policies V2**: Create/clone a device control policy (USB and Bluetooth).
* **Update Default Settings**: Update configuration for Default Device Control Settings.

</details>

<details>
<summary>Discover</summary>

* **Combined Applications**: Search for applications in your environment with filter and paging.
* **Combined Hosts**: Search for assets in your environment with filter and paging.
* **Get Accounts**: Get details on accounts by providing IDs.
* **Get Applications**: Get details on applications by providing IDs.
* **Get Hosts**: Get details on assets by providing IDs.
* **Get Logins**: Get details on logins by providing IDs.
* **Query Accounts**: Search for accounts returning matching IDs.
* **Query Applications**: Search for applications returning matching IDs.
* **Query Hosts**: Search for assets returning matching IDs.
* **Query Logins**: Search for logins returning matching IDs.

</details>

<details>
<summary>Discover IoT</summary>

* **Get IoT Hosts**: Get details on IoT assets by providing IDs.
* **Query IoT Hosts**: Search for IoT assets returning matching IDs.
* **Query IoT Hosts V2**: Search for IoT assets returning matching IDs V2.

</details>

<details>
<summary>Downloads API</summary>

* **Download File (Deprecated)**: Gets pre-signed URL for the file (deprecated).
* **Enumerate File (Deprecated)**: Enumerates list of files available for CID (deprecated).
* **Fetch Files Download Info (Deprecated)**: Get files info and pre-signed download URLs (deprecated).
* **Fetch Files Download Info V2**: Get cloud security tools info and pre-signed download URLs.

</details>

<details>
<summary>Drift Indicators</summary>

* **Get Drift Indicators Values by Date**: Returns the count of Drift Indicators by date.
* **Read Drift Indicator Entities**: Retrieve Drift Indicator entities identified by IDs.
* **Read Drift Indicators Count**: Returns total count of Drift indicators over time period.
* **Search and Read Drift Indicator Entities**: Retrieve Drift Indicators by search criteria.
* **Search Drift Indicators**: Retrieve all drift indicators matching query.

</details>

<details>
<summary>Event Schema</summary>

* **Fetch Combined Schema**: Fetch combined event schema.
* **Fetch Event Schema by ID**: Fetch event schema by ID.
* **Get Event Query IDs**: Get list of event IDs given a particular query.

</details>

<details>
<summary>Event Streams</summary>

* **List Available Streams OAuth2**: Discover all event streams in your environment.
* **Refresh Active Stream Session**: Refresh an active event stream session.

</details>

<details>
<summary>Execution</summary>

* **Read Request Body**: Retrieve a large request body spilled into object storage.

</details>

<details>
<summary>Exposure Management</summary>

* **Aggregate External Assets**: Returns external assets aggregates.
* **Blob Download External Assets**: Download the entire contents of the blob.
* **Blob Preview External Assets**: Download a preview of the blob.
* **Combined Ecosystem Subsidiaries**: Retrieves a list of ecosystem subsidiaries with details.
* **Delete External Assets**: Delete multiple external assets.
* **Get Ecosystem Subsidiaries**: Retrieves detailed information about ecosystem subsidiaries by ID.
* **Get External Assets**: Get details on external assets by providing IDs.
* **Patch External Assets**: Update the details of external assets.
* **Post External Assets Inventory V1**: Add external assets for external asset scanning.
* **Query Ecosystem Subsidiaries**: Retrieves a list of IDs for ecosystem subsidiaries.
* **Query External Assets**: Get a list of external asset IDs matching filter.
* **Query External Assets V2**: Get a list of external asset IDs matching filter V2.

</details>

<details>
<summary>Falcon Complete Dashboard</summary>

* **Aggregate Alerts**: Retrieve aggregate EPP alerts values based on filter.
* **Aggregate Allow List**: Retrieve aggregate allowlist ticket values based on filter.
* **Aggregate Block List**: Retrieve aggregate blocklist ticket values based on filter.
* **Aggregate Device Count Collection**: Retrieve aggregate host/device count based on filter.
* **Aggregate Escalations**: Retrieve aggregate escalation ticket values based on filter.
* **Aggregate Prevention Policy**: Retrieve prevention policies aggregate values based on filter.
* **Aggregate Remediations**: Retrieve aggregate remediation ticket values based on filter.
* **Aggregate Sensor Update Policy**: Retrieve sensor update policies aggregate values.
* **Aggregate Support Issues**: Retrieve aggregate support issue ticket values based on filter.
* **Aggregate Total Device Counts**: Retrieve aggregate total host/devices based on filter.
* **Get Device Count Collection Queries by Filter**: Retrieve device count collection IDs matching filter.
* **Query Alert IDs by Filter**: Retrieve Alert IDs for EPP matching filter.
* **Query Alert IDs by Filter V2**: Retrieve Alert IDs for EPP, IDP and NGSIEM matching filter V2.
* **Query Allow List Filter**: Retrieve allowlist tickets matching filter.
* **Query Block List Filter**: Retrieve block list tickets matching filter.
* **Query Escalations Filter**: Retrieve escalation tickets matching filter.
* **Query Remediations Filter**: Retrieve remediation tickets matching filter.

</details>

<details>
<summary>Falcon Container</summary>

* **Get Credentials**: Gets the registry credentials.

</details>

<details>
<summary>Falcon Container CLI</summary>

* **Read Image Vulnerabilities**: Retrieve known vulnerabilities for the provided image.

</details>

<details>
<summary>Falcon Container Image</summary>

* **Create Registry Entities**: Create a registry entity using the provided details.
* **Delete Registry Entities**: Delete registry entity identified by entity UUID.
* **Download Export File**: Download an export file.
* **Get Report by Reference**: Get image assessment scan report by image reference (v2).
* **Get Report by Scan ID**: Get image assessment scan report by scan UUID (v2).
* **Head Image Scan Inventory**: Get headers for POST request for image scan inventory.
* **Launch Export Job**: Launch an export job of a Container Security resource.
* **Policy Checks**: Check image prevention policies.
* **Post Image Scan Inventory**: Post image scan inventory.
* **Query Export Jobs**: Query export jobs entities.
* **Read Export Jobs**: Read export jobs entities.
* **Read Registry Entities**: Retrieves a list of registry entities identified by customer ID.
* **Read Registry Entities by UUID**: Retrieves a list of registry entities by provided UUIDs.
* **Update Registry Entities**: Update registry entity identified by entity UUID.

</details>

<details>
<summary>Falcon ID</summary>

* **Delete Third Party Passkey Registry**: Deletes third party passkey registries.
* **Get Third Party Passkey Registry**: Fetches third party passkey registries.
* **Query Third Party Passkey Registry**: Query third party passkey registries.
* **Update Third Party Passkey Registry**: Updates third party passkey registries.

</details>

<details>
<summary>FalconX Sandbox</summary>

* **Delete Report**: Delete report based on report ID.
* **Delete Sample V2**: Removes a sample including file, meta and submissions.
* **Get Artifacts**: Download IOC packs, PCAP files, memory dumps, and artifacts.
* **Get Memory Dump**: Get memory dump content as binary.
* **Get Memory Dump Extracted Strings**: Get extracted strings from a memory dump.
* **Get Memory Dump Hex Dump**: Get hex view of a memory dump.
* **Get Reports**: Get a full sandbox report.
* **Get Sample V2**: Retrieves the file associated with the given ID (SHA256).
* **Get Submissions**: Check the status of a sandbox analysis.
* **Get Summary Reports**: Get a short summary version of a sandbox report.
* **Query Reports**: Find sandbox reports by FQL filter and paging.
* **Query Sample V1**: Retrieves a list with sha256 of accessible samples.
* **Query Submissions**: Find submission IDs by FQL filter and paging.
* **Submit**: Submit an uploaded file or URL for sandbox analysis.
* **Upload Sample V2**: Upload a file for sandbox analysis.

</details>

<details>
<summary>Federated Connections</summary>

* **Delete Federated Connections Config**: Delete configuration for a federated connection.
* **Patch Federated Connections Config**: Update configuration for a federated connection.
* **Post Federated Connections Config**: Create configuration for a federated connection.

</details>

<details>
<summary>Field Schema</summary>

* **Fetch Field Schema by ID**: Fetch field schema by ID.
* **Get Field Query IDs**: Get list of field IDs given a particular query.

</details>

<details>
<summary>Filevantage</summary>

* **Create Policies**: Creates a new policy of the specified type.
* **Create Rule Groups**: Creates a new rule group of the specified type.
* **Create Rules**: Creates a new rule configuration within the specified rule group.
* **Create Scheduled Exclusions**: Creates a new scheduled exclusion configuration for policy.
* **Delete Policies**: Deletes 1 or more policies.
* **Delete Rule Groups**: Deletes 1 or more rule groups.
* **Delete Rules**: Deletes 1 or more rules from specified rule group.
* **Delete Scheduled Exclusions**: Deletes 1 or more scheduled exclusions from policy.
* **Get Actions**: Retrieves processing results for 1 or more actions.
* **Get Changes**: Retrieve information on changes.
* **Get Contents**: Retrieves content captured for change ID.
* **Get Policies**: Retrieves configuration for 1 or more policies.
* **Get Rule Groups**: Retrieves rule group details for 1 or more rule groups.
* **Get Rules**: Retrieves configuration for 1 or more rules.
* **Get Scheduled Exclusions**: Retrieves configuration of scheduled exclusions.
* **High Volume Query Changes**: Returns 1 or more change IDs with high volume pagination.
* **Query Actions**: Returns one or more action IDs matching filter.
* **Query Changes**: Returns 1 or more change IDs matching filter.
* **Query Policies**: Retrieve IDs of policies assigned the provided type.
* **Query Rule Groups**: Retrieve IDs of rule groups of provided type.
* **Query Scheduled Exclusions**: Retrieve IDs of scheduled exclusions in policy.
* **Signal Changes External**: Initiates workflows for provided change IDs.
* **Start Actions**: Initiates specified action on provided change IDs.
* **Update Policies**: Updates general information of provided policy.
* **Update Policy Host Groups**: Manage host groups assigned to a policy.
* **Update Policy Precedence**: Updates policy precedence for policies of a type.
* **Update Policy Rule Groups**: Manage rule groups assigned to a policy.
* **Update Rule Group Precedence**: Updates rule precedence for rules in rule group.
* **Update Rule Groups**: Updates name and description of rule group.
* **Update Rules**: Updates rule configuration within specified rule group.
* **Update Scheduled Exclusions**: Updates scheduled exclusion configuration.

</details>

<details>
<summary>Firewall Management</summary>

* **Aggregate Events**: Aggregate events for customer.
* **Aggregate Policy Rules**: Aggregate rules within a policy for customer.
* **Aggregate Rule Groups**: Aggregate rule groups for customer.
* **Aggregate Rules**: Aggregate rules for customer.
* **Create Network Locations**: Create new network locations provided.
* **Create Rule Group**: Create new rule group on a platform.
* **Create Rule Group Validation**: Validates request of creating new rule group.
* **Delete Network Locations**: Delete network location entities by ID.
* **Delete Rule Groups**: Delete rule group entities by ID.
* **Get Events**: Get events entities by ID.
* **Get Firewall Fields**: Get firewall field specifications by ID.
* **Get Network Locations**: Get summary of network locations entities by ID.
* **Get Network Locations Details**: Get complete network locations objects.
* **Get Platforms**: Get platforms by ID.
* **Get Policy Containers**: Get policy container entities by policy ID.
* **Get Rule Groups**: Get rule group entities by ID.
* **Get Rules**: Get rule entities by ID or Family ID.
* **Query Events**: Find all event IDs matching query with filter.
* **Query Firewall Fields**: Get firewall field specification IDs for platform.
* **Query Network Locations**: Get list of network location IDs.
* **Query Platforms**: Get list of platform names.
* **Query Policy Rules**: Find firewall rule IDs matching query in precedence order.
* **Query Rule Groups**: Find all rule group IDs matching query.
* **Query Rules**: Find all rule IDs matching query.
* **Update Network Locations**: Updates network locations provided.
* **Update Network Locations Metadata**: Updates network locations metadata.
* **Update Network Locations Precedence**: Updates network locations precedence.
* **Update Policy Container**: Update identified policy container including local logging.
* **Update Policy Container V1 (Deprecated)**: Update identified policy container (deprecated).
* **Update Rule Group**: Update name, description, or enabled status of rule group.
* **Update Rule Group Validation**: Validates request of updating rule group.
* **Upsert Network Locations**: Updates network locations provided.
* **Validate Filepath Pattern**: Validates test pattern matches executable filepath glob.

</details>

<details>
<summary>Firewall Policies</summary>

* **Create Firewall Policies**: Create Firewall Policies by specifying details about the policy to create.
* **Delete Firewall Policies**: Delete a set of Firewall Policies by specifying their IDs.
* **Get Firewall Policies**: Retrieve a set of Firewall Policies by specifying their IDs.
* **Perform Firewall Policies Action**: Perform the specified action on the Firewall Policies specified in request.
* **Query Combined Firewall Policies**: Search for Firewall Policies in environment returning matching policies.
* **Query Combined Firewall Policy Members**: Search for members of Firewall Policy returning matching host details.
* **Query Firewall Policies**: Search for Firewall Policies in environment returning matching policy IDs.
* **Query Firewall Policy Members**: Search for members of Firewall Policy returning Agent IDs.
* **Set Firewall Policies Precedence**: Sets precedence of Firewall Policies based on order of IDs.
* **Update Firewall Policies**: Update Firewall Policies by specifying policy ID and details.

</details>

<details>
<summary>Foundry Logscale</summary>

* **Create Saved Searches Dynamic Execute Alt V1**: Execute a dynamic saved search.
* **Create Saved Searches Execute Alt V1**: Execute a saved search.
* **Create Saved Searches Ingest Alt V1**: Populate a saved search.
* **Download Results**: Get the results of a saved search as a file.
* **Execute**: Execute a saved search.
* **Execute Dynamic**: Execute a dynamic saved search.
* **Get Saved Searches Execute Alt V1**: Get the results of a saved search.
* **Get Saved Searches Job Results Download Alt V1**: Get the results of a saved search as a file.
* **Get Search Results**: Get the results of a saved search.
* **Ingest Data**: Synchronously ingest data into the application repository.
* **Ingest Data Async V1**: Asynchronously ingest data into the application repository.
* **List Repos**: Lists available repositories.
* **List Views**: List available views.
* **Populate**: Populate a saved search.

</details>

<details>
<summary>Foundry Lookup Files</summary>

* **Create File V1**: Creates a lookup file within a foundry app.
* **Update File V1**: Updates a lookup file within a Foundry app.

</details>

<details>
<summary>Host Group</summary>

* **Create Host Groups**: Create Host Groups by specifying details about the group to create.
* **Delete Host Groups**: Delete a set of Host Groups by specifying their IDs.
* **Get Host Groups**: Retrieve a set of Host Groups by specifying their IDs.
* **Perform Group Action**: Perform specified action on specified Host Groups.
* **Query Combined Group Members**: Search for members of a Host Group returning host details.
* **Query Combined Host Groups**: Search for Host Groups returning matching Host Groups.
* **Query Group Members**: Search for members of a Host Group returning Agent IDs.
* **Query Host Groups**: Search for Host Groups returning Host Group IDs.
* **Update Host Groups**: Update Host Groups by specifying ID and details.

</details>

<details>
<summary>Host Migration</summary>

* **Create Migration V1**: Create a device migration job.
* **Get Host Migration IDs V1**: Query host migration IDs.
* **Get Host Migrations V1**: Get host migration details.
* **Get Migration Destinations V1**: Get destinations for a migration.
* **Get Migration IDs V1**: Query migration jobs.
* **Get Migrations V1**: Get migration job details.
* **Host Migration Aggregates V1**: Get host migration aggregates as specified via JSON.
* **Host Migrations Actions V1**: Perform an action on host migrations.
* **Migration Aggregates V1**: Get migration aggregates as specified via JSON.
* **Migrations Actions V1**: Perform an action on a migration job.

</details>

<details>
<summary>Hosts</summary>

* **Combined Devices by Filter**: Search for hosts returning full device records.
* **Combined Hidden Devices by Filter**: Search for hidden hosts returning full device records.
* **Devices Actions Delete V1**: Permanently delete hosts from the system.
* **Entities Perform Action**: Performs specified action on provided group IDs.
* **Get Device Details V2**: Get details on one or more hosts by host IDs.
* **Get Online State V1**: Get online status for one or more hosts by unique ID.
* **Perform Action V2**: Take various actions on hosts (contain, hide, etc.).
* **Post Device Details V2**: Get details on one or more hosts by host IDs in POST body.
* **Query Device Login History**: Retrieve details about recent login sessions for devices.
* **Query Device Login History V2**: Retrieve interactive login sessions powered by Host Timeline.
* **Query Devices by Filter**: Search for hosts in your environment by FQL filter.
* **Query Devices by Filter Scroll**: Search for hosts with continuous scroll pagination.
* **Query Get Network Address History V1**: Retrieve history of IP and MAC addresses of devices.
* **Query Hidden Devices**: Retrieve hidden hosts matching filter criteria.
* **Update Device Tags**: Append or remove Falcon Grouping Tags on hosts.

</details>

<details>
<summary>Identity Entities</summary>

* **Get Sensor Aggregates**: Get sensor aggregates as specified via JSON in request body.
* **Get Sensor Details**: Get details on one or more sensors by providing device IDs in body.
* **Query Sensors by Filter**: Search for sensors by hostname, IP, and other criteria.

</details>

<details>
<summary>Identity Protection</summary>

* **API Preempt Proxy Delete Policy Rules**: Delete policy rules.
* **API Preempt Proxy Get Policy Rules**: Get policy rules.
* **API Preempt Proxy Get Policy Rules Query**: Query policy rule IDs.
* **API Preempt Proxy Post GraphQL**: Identity Protection GraphQL API (entities, timeline activities, etc.).
* **API Preempt Proxy Post Policy Rules**: Create policy rule.

</details>

<details>
<summary>Image Assessment Policies</summary>

* **Create Policies**: Create Image Assessment policies.
* **Create Policy Groups**: Create Image Assessment Policy Group entities.
* **Delete Policy**: Delete Image Assessment Policy by policy UUID.
* **Delete Policy Group**: Delete Image Assessment Policy Group entities.
* **Read Policies**: Get all Image Assessment policies.
* **Read Policy Exclusions**: Retrieve Image Assessment Policy Exclusion entities.
* **Read Policy Groups**: Retrieve Image Assessment Policy Group entities.
* **Update Policies**: Update Image Assessment Policy entities.
* **Update Policy Exclusions**: Update Image Assessment Policy Exclusion entities.
* **Update Policy Groups**: Update Image Assessment Policy Group entities.
* **Update Policy Precedence**: Update Image Assessment Policy precedence.

</details>

<details>
<summary>Incidents</summary>

* **Crowd Score**: Query environment wide CrowdScore and return entity data.
* **Get Behaviors**: Get details on behaviors by providing behavior IDs in body.
* **Get Incidents**: Get details on incidents by providing incident IDs in body.
* **Perform Incident Action**: Perform actions on one or more incidents.
* **Query Behaviors**: Search for behaviors by providing filter, sort, and paging.
* **Query Incidents**: Search for incidents by providing filter, sort, and paging.

</details>

<details>
<summary>Installation Tokens</summary>

* **Audit Events Query**: Search for audit events by providing an FQL filter and paging details.
* **Audit Events Read**: Gets the details of one or more audit events by ID.
* **Customer Settings Read**: Check current installation token settings.
* **Tokens Create**: Creates an installation token.
* **Tokens Delete**: Deletes a token immediately.
* **Tokens Query**: Search for tokens by providing an FQL filter and paging details.
* **Tokens Read**: Gets the details of one or more tokens by ID.
* **Tokens Update**: Updates one or more tokens.

</details>

<details>
<summary>Installation Tokens Settings</summary>

* **Customer Settings Update**: Update installation token settings.

</details>

<details>
<summary>Intel</summary>

* **CAO Incidents Aggregates V1**: Perform statistical aggregations over incident data.
* **CAO Incidents Entities V1**: Retrieve full details for adversary incidents by IDs.
* **CAO Incidents Queries V1**: Search for adversary incidents using FQL criteria.
* **Get Intel Actor Entities**: Retrieve specific actors using their actor IDs.
* **Get Intel Indicator Entities**: Retrieve specific indicators using their indicator IDs.
* **Get Intel Report Entities**: Retrieve specific reports using their report IDs.
* **Get Intel Report PDF**: Return a Report PDF attachment.
* **Get Intel Rule Entities**: Retrieve details for rule sets for specified IDs.
* **Get Intel Rule File**: Download earlier rule sets.
* **Get Latest Intel Rule File**: Download the latest rule set.
* **Get Malware Entities**: Get malware entities for specified IDs.
* **Get Malware MITRE Report**: Export MITRE ATT&CK information for a malware family.
* **Get MITRE Report**: Export MITRE ATT&CK information for an actor.
* **Get Vulnerabilities**: Get vulnerabilities by providing IDs in body.
* **Post MITRE Attacks**: Retrieves report and observable IDs associated with actor and attacks.
* **Query Intel Actor Entities**: Get info about actors matching provided FQL filters.
* **Query Intel Actor IDs**: Get actor IDs matching provided FQL filters.
* **Query Intel Indicator Entities**: Get info about indicators matching FQL filters.
* **Query Intel Indicator IDs**: Get indicator IDs matching FQL filters.
* **Query Intel Report Entities**: Get info about reports matching FQL filters.
* **Query Intel Report IDs**: Get report IDs matching FQL filters.
* **Query Intel Rule IDs**: Search for rule IDs matching provided filter criteria.
* **Query Malware**: Get malware family names matching FQL filters.
* **Query Malware Entities**: Get malware entities matching FQL filters.
* **Query MITRE Attacks**: Gets MITRE tactics and techniques for given actor.
* **Query MITRE Attacks for Malware**: Gets MITRE tactics and techniques for given malware.
* **Query Vulnerabilities**: Get vulnerability IDs matching FQL filters.

</details>

<details>
<summary>Intelligence Feeds</summary>

* **Download Feed Archive**: Downloads the content as a zip archive for a given feed item ID.
* **List Feed Types**: Lists the accessible feed types for a given customer.
* **Query Feed Archives**: Queries the accessible feed types for a customer and returns feed item IDs.

</details>

<details>
<summary>Intelligence Indicator Graph</summary>

* **Lookup Indicators**: Look up intelligence data for multiple indicators.
* **Search Indicators**: Search indicators based on FQL filter or request body.

</details>

<details>
<summary>IOA Exclusions</summary>

* **Create IOA Exclusions V1**: Create the IOA exclusions V1.
* **Delete IOA Exclusions V1**: Delete the IOA exclusions by ID V1.
* **Get IOA Exclusions V1**: Get a set of IOA Exclusions by specifying their IDs V1.
* **Query IOA Exclusions V1**: Search for IOA exclusions V1.
* **Self Service Aggregates V2**: Get Self Service IOA Exclusion aggregates as specified via JSON.
* **Self Service Create V2**: Create new Self Service IOA Exclusions V2.
* **Self Service Delete V2**: Delete Self Service IOA Exclusions rule by ID V2.
* **Self Service Get Reports V2**: Create a report of Self Service IOA Exclusions.
* **Self Service Get V2**: Get Self Service IOA Exclusions rules by ID V2.
* **Self Service Matched Rule V2**: Get Self Service IOA Exclusions rules for matched IFN/CLI.
* **Self Service New Rules V2**: Get defaults for Self Service IOA Exclusions based on IFN/CLI.
* **Self Service Search V2**: Search for Self Service IOA Exclusions V2.
* **Self Service Update V2**: Update Self Service IOA Exclusions rule by ID V2.
* **Update IOA Exclusions V1**: Update the IOA exclusions V1.

</details>

<details>
<summary>IOC</summary>

* **Action Get V1**: Get Actions by IDs.
* **Action Query V1**: Query Actions.
* **Get Indicators Report**: Launch an indicators report creation job.
* **Indicator Aggregate V1**: Get Indicators aggregates as specified via JSON.
* **Indicator Combined V1**: Get Combined for Indicators.
* **Indicator Create V1**: Create Indicators.
* **Indicator Delete V1**: Delete Indicators by IDs.
* **Indicator Get Device Count V1**: Get the number of devices the indicator has run on.
* **Indicator Get Devices Ran On V1**: Get the IDs of devices the indicator has run on.
* **Indicator Get Processes Ran On V1**: Get the number of processes the indicator has run on.
* **Indicator Get V1**: Get Indicators by IDs.
* **Indicator SDMF Query V1**: Executes an SDMF data frame query against IOC indicators.
* **Indicator Search V1**: Search for Indicators.
* **Indicator Update V1**: Update Indicators.
* **IOC Type Query V1**: Query IOC Types.
* **Platform Query V1**: Query Platforms.
* **Severity Query V1**: Query Severities.

</details>

<details>
<summary>IOCs</summary>

* **Devices Count**: Number of hosts in your customer account that have observed a given custom IOC.
* **Devices Ran On**: Find hosts that have observed a given custom IOC.
* **Entities Processes**: For the provided ProcessID retrieve the process details.
* **Processes Ran On**: Search for processes associated with a custom IOC.

</details>

<details>
<summary>IT Automation</summary>

* **Cancel Task Execution**: Cancel a task execution specified in the request.
* **Combined Scheduled Tasks**: Returns full details of scheduled tasks matching filter.
* **Create Policy**: Creates a new policy of the specified type.
* **Create Scheduled Task**: Creates a scheduled task from the given request.
* **Create Task**: Creates a task with details from the given request.
* **Create Task Group**: Creates a task group from the given request.
* **Create User Group**: Creates a user group from the given request.
* **Delete Policy**: Deletes 1 or more disabled policies.
* **Delete Scheduled Tasks**: Delete one or more scheduled tasks by ID.
* **Delete Task**: Deletes tasks for each provided ID.
* **Delete Task Groups**: Delete one or more task groups by ID.
* **Delete User Group**: Deletes user groups for each provided ID.
* **Get Associated Tasks**: Retrieve tasks associated with the provided file ID.
* **Get Execution Results**: Get the task execution results from an async search.
* **Get Execution Results Search Status**: Get the status of an async task execution results search.
* **Get Policies**: Retrieves the configuration for 1 or more policies.
* **Get Scheduled Tasks**: Returns scheduled tasks for each provided ID.
* **Get Task Execution**: Get the task execution for provided task execution IDs.
* **Get Task Execution Host Status**: Get the status of host executions by providing execution IDs.
* **Get Task Executions by Query**: Returns list of task executions matching filter query.
* **Get Task Groups**: Returns task groups for each provided ID.
* **Get Task Groups by Query**: Returns full details of task groups matching filter.
* **Get Tasks**: Returns tasks for each provided ID.
* **Get Tasks by Query**: Returns full details of tasks matching filter.
* **Get User Group**: Returns user groups for each provided ID.
* **Query Policies**: Returns list of policy IDs matching filter query.
* **Rerun Task Execution**: Rerun the task execution specified in the request.
* **Run Live Query**: Starts a new task execution from provided query data.
* **Search Scheduled Tasks**: Returns list of scheduled task IDs matching filter.
* **Search Task Executions**: Returns list of task execution IDs matching filter.
* **Search Task Groups**: Returns list of task group IDs matching filter.
* **Search Tasks**: Returns list of task IDs matching filter query.
* **Search User Group**: Returns list of user group IDs matching filter query.
* **Start Execution Results Search**: Starts an async task execution results search.
* **Start Task Execution**: Starts a new task execution from an existing task.
* **Update Policies**: Updates multiple fields for a policy.
* **Update Policies Precedence**: Updates policy precedence for all policies of a specific platform.
* **Update Policy Host Groups**: Manage host groups assigned to a policy.
* **Update Scheduled Task**: Update an existing scheduled task.
* **Update Task**: Update a task with details from given request.
* **Update Task Group**: Update a task group for a given ID.
* **Update User Group**: Update a user group for a given ID.

</details>

<details>
<summary>Knowledge Base Audit Events</summary>

* **Aggregates Knowledge Base Audit Events V1**: Aggregate knowledge base audit events based on MSA criteria.
* **Combined Knowledge Base Audit Events V1**: Get knowledge base audit events with full details and pagination.
* **Entities Knowledge Base Audit Events V1**: Retrieve knowledge base audit event entities by their IDs.
* **Queries Knowledge Base Audit Events V1**: Query knowledge base audit event IDs with pagination and filtering.

</details>

<details>
<summary>Knowledge Base Files</summary>

* **Entities Knowledge Base Files Create V1**: Upload a file to a knowledge base.
* **Entities Knowledge Base Files Delete V1**: Delete document from knowledge base.
* **Entities Knowledge Base Files Download V1**: Download knowledge base file entities for provided ID.
* **Entities Knowledge Base Files Update V1**: Update an existing file in a knowledge base.
* **Entities Knowledge Base Files V1**: Retrieve knowledge base file entities for provided IDs.
* **Queries Knowledge Base Files V1**: Query knowledge base files based on provided filters.

</details>

<details>
<summary>Knowledge Bases</summary>

* **Aggregates Knowledge Bases V1**: Aggregate knowledge bases based on MSA criteria.
* **Combined Knowledge Bases V1**: Search for knowledge bases returning full entity details.
* **Entities Knowledge Bases Create V1**: Create a knowledge base.
* **Entities Knowledge Bases Update V1**: Update an existing knowledge base.
* **Entities Knowledge Bases V1**: Retrieve knowledge base entities for provided IDs.
* **Queries Knowledge Bases V1**: Query knowledge bases based on provided filters.

</details>

<details>
<summary>Kubernetes Container Compliance</summary>

* **Aggregate Assessments Grouped by Clusters V2**: Returns cluster details along with aggregated assessment results organized by cluster.
* **Aggregate Assessments Grouped by Rules V2**: Returns rule details along with aggregated assessment results organized by compliance rule.
* **Aggregate Compliance by Asset Type**: Provides aggregated compliance assessment metrics organized by asset type.
* **Aggregate Compliance by Cluster Type**: Provides aggregated compliance assessment metrics organized by cluster type.
* **Aggregate Compliance by Framework**: Provides aggregated compliance assessment metrics organized by framework.
* **Aggregate Failed Rules by Clusters V3**: Retrieves the most non-compliant clusters ranked by failed compliance rules.
* **Aggregate Top Failed Images**: Retrieves the most non-compliant container images ranked by failed assessments.
* **Combined Images Findings**: Returns detailed compliance assessment results for container images.
* **Combined Nodes Findings**: Returns detailed compliance assessment results for kubernetes nodes.
* **Get Rules Metadata by ID**: Retrieve detailed compliance rule information by specifying rule identifiers.

</details>

<details>
<summary>Kubernetes Protection</summary>

* **Cluster Combined**: Retrieve kubernetes clusters identified by filter criteria.
* **Cluster Count**: Retrieve cluster counts.
* **Cluster Enrichment**: Retrieve cluster enrichment data.
* **Clusters by Date Range Count**: Retrieve clusters by date range counts.
* **Clusters by Kubernetes Version Count**: Bucket clusters by kubernetes version.
* **Clusters by Status Count**: Bucket clusters by status.
* **Container Combined**: Retrieves a paginated list of containers identified by filter criteria.
* **Container Count**: Retrieve container counts.
* **Container Count by Registry**: Retrieves a list with the top container image registries.
* **Container Enrichment**: Retrieve container enrichment data.
* **Container Image Detections Count by Date**: Retrieve count of image assessment detections on running containers.
* **Container Images by Most Used**: Bucket container by image-digest.
* **Container Images by State**: Retrieve count of image states running on containers.
* **Container Vulnerabilities by Severity Count**: Retrieve container vulnerabilities by severity counts.
* **Containers by Date Range Count**: Retrieve containers by date range counts.
* **Containers Sensor Coverage**: Bucket containers by agent type and calculate sensor coverage.
* **Create AWS Account**: Creates a new AWS account in system and generates installation script.
* **Create Azure Subscription**: Creates a new Azure Subscription in system.
* **Delete AWS Accounts**: Delete AWS accounts.
* **Delete Azure Subscription**: Deletes Azure Subscriptions in system.
* **Deployment Combined**: Retrieve kubernetes deployments identified by filter criteria.
* **Deployment Count**: Retrieve deployment counts.
* **Deployment Enrichment**: Retrieve deployment enrichment data.
* **Deployments by Date Range Count**: Retrieve deployments by date range counts.
* **Distinct Container Image Count**: Retrieve count of distinct images running on containers.
* **Find Containers by Container Runtime Version**: Retrieve containers by container_runtime_version.
* **Find Containers Count Affected by Zero Day Vulnerabilities**: Retrieve containers count affected by zero day vulnerabilities.
* **Get AWS Accounts**: Provides a list of AWS accounts.
* **Get Azure Install Script**: Provides script to run for given tenant ID and subscription IDs.
* **Get Azure Tenant Config**: Gets the Azure tenant Config.
* **Get Azure Tenant IDs**: Provides all azure subscriptions and tenants.
* **Get Clusters**: Provides clusters acknowledged by Kubernetes Protection service.
* **Get Combined Cloud Clusters**: Returns combined list of provisioned cloud accounts and clusters.
* **Get Helm Values YAML**: Provides sample Helm values.yaml file for agent Helm chart.
* **Get Locations**: Provides cloud locations acknowledged by Kubernetes Protection.
* **Get Static Scripts**: Gets static bash scripts used during registration.
* **Group Containers by Managed**: Group the containers by Managed.
* **Kubernetes IOM by Date Range**: Returns count of Kubernetes IOMs by date range.
* **Kubernetes IOM Count**: Returns total count of Kubernetes IOMs.
* **Kubernetes IOM Entities**: Retrieve Kubernetes IOM entities by IDs.
* **Kubernetes IOM Entities Combined**: Retrieves list of Kubernetes IOMs by search criteria.
* **List Azure Accounts**: Provides azure subscriptions registered to Kubernetes Protection.
* **Node Combined**: Retrieve kubernetes nodes identified by filter criteria.
* **Node Count**: Retrieve node counts.
* **Node Enrichment**: Retrieve node enrichment data.
* **Nodes by Cloud Count**: Bucket nodes by cloud providers.
* **Nodes by Container Engine Version Count**: Bucket nodes by container engine version.
* **Nodes by Date Range Count**: Retrieve nodes by date range counts.
* **Patch Azure Service Principal**: Adds client ID for given tenant ID to system.
* **Pod Combined**: Retrieve kubernetes pods identified by filter criteria.
* **Pod Count**: Retrieve pod counts.
* **Pod Enrichment**: Retrieve pod enrichment data.
* **Pods by Date Range Count**: Retrieve pods by date range counts.
* **Post Aggregates Pods**: Get aggregate query result for pods.
* **Post Search Kubernetes IOM Entities**: Search for Kubernetes IOMs with filtering options.
* **Query Kubernetes IOMs**: Search Kubernetes IOMs returning list of UUIDs.
* **Read Cluster Combined V2**: Retrieve Kubernetes cluster data V2.
* **Read Namespace Count**: Retrieve namespace counts.
* **Read Namespaces by Date Range Count**: Retrieve namespaces by date range counts.
* **Regenerate API Key**: Regenerate API key for docker registry integrations.
* **Running Container Images**: Retrieve images on running containers.
* **Trigger Scan**: Triggers dry run or full scan of kubernetes footprint.
* **Update AWS Account**: Updates AWS account per query parameters.
* **Vulnerable Container Image Count**: Retrieve count of vulnerable images running on containers.

</details>

<details>
<summary>Maintenance Token</summary>

* **Increment Uninstall Token**: Increments a bulk maintenance token.

</details>

<details>
<summary>Malquery</summary>

* **Get MalQuery Download V1**: Download a file indexed by MalQuery by SHA256.
* **Get MalQuery Entities Samples Fetch V1**: Fetch a zip archive containing samples.
* **Get MalQuery Metadata V1**: Retrieve indexed files metadata by hash.
* **Get MalQuery Quotas V1**: Get search and download quota info.
* **Get MalQuery Request V1**: Check status and results of async request.
* **Post MalQuery Entities Samples Multidownload V1**: Schedule samples for download.
* **Post MalQuery Exact Search V1**: Search MalQuery by hex patterns and strings.
* **Post MalQuery Fuzzy Search V1**: Quick fuzzy search MalQuery for patterns.
* **Post MalQuery Hunt V1**: Schedule YARA-based search execution.

</details>

<details>
<summary>Message Center</summary>

* **Aggregate Cases**: Retrieve aggregate case values.
* **Case Add Activity**: Add activity comment to a case.
* **Case Add Attachment**: Upload attachment to a case.
* **Case Download Attachment**: Retrieve attachment by ID.
* **Create Case V2**: Create a new case.
* **Get Case Activity By IDs**: Retrieve activities for given IDs.
* **Get Case Entities By IDs**: Retrieve message center cases.
* **Query Activity By Case ID**: Retrieve activity IDs for a case.
* **Query Cases IDs By Filter**: Retrieve case IDs matching filter.

</details>

<details>
<summary>ML Exclusions</summary>

* **Create ML Exclusions V1**: Create ML exclusions V1.
* **Delete ML Exclusions V1**: Delete ML exclusions by ID.
* **Exclusions Aggregates V2**: Get exclusion aggregates.
* **Exclusions Create V2**: Create exclusions with ancestor fields.
* **Exclusions Delete V2**: Delete exclusions with ancestor fields.
* **Exclusions Get All V2**: Get all exclusions.
* **Exclusions Get Reports V2**: Create report of ML exclusions.
* **Exclusions Get V2**: Get exclusions by ID with ancestor fields.
* **Exclusions Perform Action V2**: Manipulate exclusion content.
* **Exclusions SDMF Query V1**: Execute SDMF data frame query.
* **Exclusions Search V2**: Search for exclusions with ancestor fields.
* **Exclusions Update V2**: Update exclusions with ancestor fields.
* **Get ML Exclusions V1**: Get set of ML Exclusions by IDs.
* **Query ML Exclusions V1**: Search for ML exclusions.
* **Update ML Exclusions V1**: Update ML exclusions V1.

</details>

<details>
<summary>Mobile Enrollment</summary>

* **Request Device Enrollment V3**: Trigger onboarding process for mobile device V3.
* **Request Device Enrollment V4**: Trigger onboarding process for mobile device V4.

</details>

<details>
<summary>MSSP</summary>

* **Add CID Group Members**: Add new CID group member.
* **Add Role**: Create link between user group and CID group with roles.
* **Add User Group Members**: Add new user group member.
* **Create CID Groups**: Create new CID groups.
* **Create User Groups**: Create new user groups.
* **Delete CID Group Members**: Delete CID group members (Deprecated).
* **Delete CID Group Members V2**: Delete CID group members V2.
* **Delete CID Groups**: Delete CID groups by ID.
* **Delete User Group Members**: Delete user group members entry.
* **Delete User Groups**: Delete user groups by ID.
* **Deleted Roles**: Delete links or additional roles between user groups and CID groups.
* **Get CID Group by ID**: Get CID groups by ID (Deprecated).
* **Get CID Group by ID V2**: Get CID Groups by ID V2.
* **Get CID Group Members By**: Get CID group members by CID group ID (Deprecated).
* **Get CID Group Members By V2**: Get CID group members by CID Group ID V2.
* **Get Children**: Get link to child customer by child CID(s).
* **Get Children V2**: Get link to child customer by child CID(s) V2.
* **Get Roles by ID**: Get link between user group and CID group by ID.
* **Get User Group Members by ID**: Get user group members by user group ID (Deprecated).
* **Get User Group Members by ID V2**: Get user group members by user group ID V2.
* **Get User Groups by ID**: Get user groups by ID (Deprecated).
* **Get User Groups by ID V2**: Get user groups by ID V2.
* **Query CID Group Members**: Query a CID groups members by associated CID.
* **Query CID Groups**: Query CID groups.
* **Query Children**: Query for customers linked as children.
* **Query Roles**: Query links between user groups and CID groups.
* **Query User Group Members**: Query user group member by user UUID.
* **Query User Groups**: Query user groups.
* **Update CID Groups**: Update existing CID groups.
* **Update User Groups**: Update existing user group(s).

</details>

<details>
<summary>Network Scan Global Configs</summary>

* **Get Global Configs**: Get global configs for the CID.
* **Update Global Configs**: Update global configs using provided specifications.

</details>

<details>
<summary>Network Scan Networks</summary>

* **Aggregate Networks**: Returns networks aggregations.
* **Create Networks**: Create networks using provided specifications.
* **Delete Networks**: Delete networks by their IDs.
* **Get Networks**: Get networks by their IDs.
* **Query Networks**: Get networks IDs by filter.
* **Update Networks**: Update networks using provided specifications.

</details>

<details>
<summary>Network Scan Scan Run Reports</summary>

* **Get Scan Run Reports**: Downloads scan run report in CSV format.

</details>

<details>
<summary>Network Scan Scan Runs</summary>

* **Aggregate Scan Runs**: Returns scan-runs aggregations.
* **Create Scan Runs**: Create scan-runs using provided specifications.
* **Get Scan Runs**: Get scan-runs by their IDs.
* **Query Scan Runs**: Get scan-runs IDs by filter.
* **Update Scan Runs**: Update scan-runs using provided specifications.

</details>

<details>
<summary>Network Scan Scanners</summary>

* **Aggregate Scanners**: Returns scanners aggregations.
* **Get Scanners**: Get scanners by their IDs.
* **Query Scanners**: Get scanners IDs by filter.
* **Update Scanners**: Update scanners using provided specifications.

</details>

<details>
<summary>Network Scan Scans</summary>

* **Aggregate Scans**: Returns scans aggregations.
* **Create Scans**: Create scans using provided specifications.
* **Delete Scans**: Delete scans by their IDs.
* **Get Scans**: Get scans by their IDs.
* **Query Scans**: Get scans IDs by filter.
* **Update Scans**: Update scans using provided specifications.

</details>

<details>
<summary>Network Scan Templates</summary>

* **Create Templates**: Create templates using provided specifications.
* **Delete Templates**: Delete templates by their IDs.
* **Get Template Configs**: Get details on network scan template configurations.
* **Get Templates**: Get templates by their IDs.
* **Query Templates**: Get templates IDs by filter.
* **Update Templates**: Update templates using provided specifications.

</details>

<details>
<summary>Network Scan Zones</summary>

* **Aggregate Zones**: Returns zones aggregations.
* **Combined Zones**: Get zones by filter.
* **Create Zones**: Create zones using provided specifications.
* **Delete Zones**: Delete zones by their IDs.
* **Get Zones**: Get zones by their IDs.
* **Query Zones**: Get zones IDs by filter.
* **Update Zones**: Update zones using provided specifications.

</details>

<details>
<summary>NGSIEM</summary>

* **Bulk Create Dashboards from Template**: Create Multiple Dashboards from YAML Templates.
* **Bulk Create Lookup Files**: Create Multiple Lookup Files.
* **Bulk Create Saved Queries from Template**: Create Multiple Saved Queries from LogScale YAML Templates.
* **Bulk Get Lookup Files**: Retrieve Multiple Lookup Files by Filenames in NGSIEM.
* **Bulk Install Parsers**: Installs multiple CrowdStrike-managed OOTB parsers.
* **Bulk Update Dashboards from Template**: Update Multiple Dashboards from YAML Templates.
* **Bulk Update Lookup Files**: Update Multiple Lookup Files.
* **Bulk Update Saved Queries from Template**: Update Multiple Saved Queries from LogScale YAML Templates.
* **Clone Parser**: Clone an existing parser with a new name.
* **Create Dashboard from Template**: Create Dashboard from LogScale YAML Template in NGSIEM.
* **Create Lookup File**: Create Lookup File in NGSIEM.
* **Create Parser**: Create Parser in NGSIEM (Deprecated).
* **Create Parser Extension**: Create a Parser extension in NGSIEM for provided base parser.
* **Create Parser from Template**: Create Parser from LogScale YAML Template in NGSIEM.
* **Create Saved Query**: Create Saved Query from LogScale YAML Template in NGSIEM.
* **Delete Dashboard**: Delete Dashboard in NGSIEM.
* **Delete Lookup File**: Delete Lookup File in NGSIEM.
* **Delete Parser**: Delete Parser in NGSIEM.
* **Delete Saved Query**: Delete Saved Query in NGSIEM.
* **External Create Connector Config**: Create a new configuration for a data connector.
* **External Create Data Connection**: Create a new data connection.
* **External Delete Connector Configs**: Delete data connection config.
* **External Delete Data Connection**: Delete a data connection.
* **External Get Data Connection by ID**: Get data connection by ID.
* **External Get Data Connection Status**: Get data connection provisioning status.
* **External Get Data Connection Token**: Get Ingest token for data connection.
* **External List Connector Configs**: List configurations for a data connector.
* **External List Data Connections**: List and search data connections.
* **External List Data Connectors**: List available data connectors.
* **External Patch Connector Config**: Patch configurations for a data connector.
* **External Regenerate Data Connection Token**: Regenerate Ingest token for data connection.
* **External Update Data Connection**: Update a data connection.
* **External Update Data Connection Status**: Update data connection status.
* **Get Dashboard Template**: Retrieve Dashboard(s) in NGSIEM as LogScale YAML Template.
* **Get Lookup File**: Retrieve Lookup File in NGSIEM.
* **Get Lookup from Package V1**: Download lookup file in package from NGSIEM.
* **Get Lookup from Package with Namespace V1**: Download lookup file in namespaced package from NGSIEM.
* **Get Lookup V1**: Download lookup file from NGSIEM.
* **Get Parser**: Retrieve Parser in NGSIEM (Deprecated).
* **Get Parser Template**: Retrieve Parser in NGSIEM as LogScale YAML Template.
* **Get Saved Query Template**: Retrieve Saved Quer(ies) in NGSIEM as LogScale YAML Template.
* **Get Search Status V1**: Get status of search.
* **Install Parser**: Installs a CrowdStrike-managed OOTB parser.
* **List Dashboards**: List Dashboards in NGSIEM with Pagination and Filtering.
* **List Lookup Files**: List Lookup Files in NGSIEM with Pagination and Filtering.
* **List Parsers**: List Parsers in NGSIEM.
* **List Saved Queries**: List Saved Queries in NGSIEM with Pagination and Filtering.
* **Start Search V1**: Initiate search.
* **Stop Search V1**: Stop search.
* **Test Parser from Template**: Test Parser from LogScale YAML Template in NGSIEM.
* **Update Dashboard from Template**: Update Dashboard from LogScale YAML Template in NGSIEM.
* **Update Lookup File**: Update an entire Lookup File in NGSIEM.
* **Update Lookup File Entries**: Update entries in an existing Lookup File in NGSIEM.
* **Update Parser**: Update Parser in NGSIEM (Deprecated).
* **Update Parser Auto Update Policy**: Updates a parser auto update policy.
* **Update Parser Extension**: Update an existing Parser extension in NGSIEM.
* **Update Parser from Template**: Update Parser in NGSIEM from YAML Template.
* **Update Saved Query from Template**: Update Saved Query from LogScale YAML Template in NGSIEM.
* **Upload Lookup V1**: Upload file to NGSIEM.

</details>

<details>
<summary>OAuth2</summary>

* **OAuth2 Access Token**: Generate an OAuth2 access token.
* **OAuth2 Revoke Token**: Revoke a previously issued OAuth2 access token.

</details>

<details>
<summary>ODS</summary>

* **Aggregate Query Scan Host Metadata**: Get aggregates on ODS scan-hosts data.
* **Aggregate Scans**: Get aggregates on ODS scan data.
* **Aggregate Scheduled Scans**: Get aggregates on ODS scheduled-scan data.
* **Cancel Scans**: Cancel ODS scans for given scan IDs.
* **Create Scan**: Create ODS scan and start or schedule scan.
* **Delete Scheduled Scans**: Delete ODS scheduled-scans for given scheduled-scan IDs.
* **Get Malicious Files by IDs**: Get malicious files by IDs.
* **Get Scan Host Metadata by IDs**: Get scan hosts by IDs.
* **Get Scans by Scan IDs**: Get Scans by IDs.
* **Get Scans by Scan IDs V2**: Get Scans by IDs V2.
* **Get Scheduled Scans by Scan IDs**: Get ScheduledScans by IDs.
* **Query Malicious Files**: Query malicious files.
* **Query Scan Host Metadata**: Query scan hosts.
* **Query Scans**: Query Scans.
* **Query Scheduled Scans**: Query ScheduledScans.
* **Schedule Scan**: Create ODS scan and start or schedule scan for given scan request.

</details>

<details>
<summary>Prevention Policies</summary>

* **Create Prevention Policies**: Create Prevention Policies by specifying details about policy to create.
* **Delete Prevention Policies**: Delete a set of Prevention Policies by specifying their IDs.
* **Get Prevention Policies**: Retrieve a set of Prevention Policies by specifying their IDs.
* **Perform Prevention Policies Action**: Perform specified action on Prevention Policies.
* **Query Combined Prevention Policies**: Search for Prevention Policies in environment matching filter criteria.
* **Query Combined Prevention Policy Members**: Search for members of a Prevention Policy returning host details.
* **Query Prevention Policies**: Search for Prevention Policies returning IDs matching filter criteria.
* **Query Prevention Policy Members**: Search for members of a Prevention Policy returning Agent IDs.
* **Set Prevention Policies Precedence**: Sets precedence of Prevention Policies based on order of IDs.
* **Update Prevention Policies**: Update Prevention Policies by specifying ID and details to update.

</details>

<details>
<summary>Profile Groups</summary>

* **Create Group V1**: Creates a new profile group.
* **Delete Groups V1**: Deletes profile groups by IDs.
* **Get Group Users V1**: Returns information about a group\.
* **Get Groups V1**: Returns profile groups with details by IDs.
* **Get User Groups V1**: Returns information about a user\.
* **Group Actions V1**: Perform actions on profile groups (roles, user groups, FGA objects).
* **Group Users Actions V1**: Add or remove users from profile groups.
* **Query Groups V1**: Returns list of profile group IDs available to actor.
* **Update Group V1**: Updates existing profile group metadata.

</details>

<details>
<summary>Quarantine</summary>

* **Action Update Count**: Returns count of potentially affected quarantined files for each action.
* **Get Aggregate Files**: Get quarantine file aggregates as specified via JSON in request body.
* **Get Quarantine Files**: Get quarantine file metadata for specified IDs.
* **Query Quarantine Files**: Get quarantine file IDs that match filter criteria.
* **Update Qf by Query**: Apply quarantine file actions by query.
* **Update Quarantined Detects by IDs**: Apply action by quarantine file IDs.

</details>

<details>
<summary>Quick Scan</summary>

* **Get Scans**: Check status of volume scan.
* **Get Scans Aggregates**: Get scans aggregations as specified via JSON in request body.
* **Query Submissions**: Find IDs for submitted scans by providing FQL filter.
* **Scan Samples**: Submit a volume of files for ML scanning.

</details>

<details>
<summary>Quick Scan Pro</summary>

* **Delete File**: Deletes file by its SHA256 identifier.
* **Delete Scan Result**: Deletes result of QuickScan Pro scan.
* **Get Scan Result**: Gets result of QuickScan Pro scan.
* **Launch Scan**: Starts scanning a file uploaded through QuickScan Pro.
* **Query Scan Results**: FQL query specifying filter parameters.
* **Upload File QuickScan Pro**: Uploads a file to be further analyzed with QuickScan Pro.

</details>

<details>
<summary>Real-Time Response</summary>

* **Batch Active Responder Cmd**: Batch executes RTR active-responder command across hosts.
* **Batch Cmd**: Batch executes RTR read-only command across hosts.
* **Batch Get Cmd**: Batch executes get command across hosts to retrieve files.
* **Batch Get Cmd Status**: Retrieves status of specified batch get command.
* **Batch Init Sessions**: Batch initialize a RTR session on multiple hosts.
* **Batch Refresh Sessions**: Batch refresh a RTR session on multiple hosts.
* **RTR Aggregate Sessions**: Get aggregates on session data.
* **RTR Check Active Responder Command Status**: Get status of executed active-responder command on single host.
* **RTR Check Command Status**: Get status of executed command on single host.
* **RTR Delete File**: Delete a RTR session file.
* **RTR Delete File V2**: Delete a RTR session file V2.
* **RTR Delete Queued Session**: Delete a queued session command.
* **RTR Delete Session**: Delete a session.
* **RTR Execute Active Responder Command**: Execute an active responder command on single host.
* **RTR Execute Command**: Execute a command on single host.
* **RTR Get Extracted File Contents**: Get RTR extracted file contents for session and SHA256.
* **RTR Init Session**: Initialize a new session with RTR cloud.
* **RTR List All Sessions**: Get a list of session IDs.
* **RTR List Files**: Get a list of files for specified RTR session.
* **RTR List Files V2**: Get a list of files for specified RTR session V2.
* **RTR List Queued Sessions**: Get queued session metadata by session ID.
* **RTR List Sessions**: Get session metadata by session ID.
* **RTR Pulse Session**: Refresh a session timeout on a single host.

</details>

<details>
<summary>Real-Time Response Admin</summary>

* **Batch Admin Cmd**: Batch executes RTR admin command across hosts.
* **RTR Check Admin Command Status**: Get status of executed RTR admin command on host.
* **RTR Create Put Files**: Upload a new put-file for RTR put command.
* **RTR Create Put Files V2**: Upload a new put-file for RTR put command V2.
* **RTR Create Scripts**: Upload a new custom-script for RTR runscript command.
* **RTR Create Scripts V2**: Upload a new custom-script for RTR runscript command V2.
* **RTR Delete Put Files**: Delete put-file based on ID.
* **RTR Delete Scripts**: Delete custom-script based on ID.
* **RTR Execute Admin Command**: Execute RTR admin command on single host.
* **RTR Get Falcon Scripts**: Get Falcon scripts with metadata and content.
* **RTR Get Put File Contents**: Get RTR put file contents for given file ID.
* **RTR Get Put Files**: Get put-files based on IDs.
* **RTR Get Put Files V2**: Get put-files based on IDs V2.
* **RTR Get Scripts**: Get custom-scripts based on IDs.
* **RTR Get Scripts V2**: Get custom-scripts based on IDs V2.
* **RTR List Falcon Scripts**: Get list of Falcon script IDs available to user.
* **RTR List Put Files**: Get list of put-file IDs available for put command.
* **RTR List Scripts**: Get list of custom-script IDs available for runscript command.
* **RTR Update Scripts**: Upload a new script to replace existing one.
* **RTR Update Scripts V2**: Upload a new script to replace existing one V2.

</details>

<details>
<summary>Real-Time Response Audit</summary>

* **RTR Audit Sessions**: Get all RTR sessions created for customer in specified duration.

</details>

<details>
<summary>Recon</summary>

* **Aggregate Notifications Exposed Data Records V1**: Get notification exposed data record aggregates.
* **Aggregate Notifications V1**: Get notification aggregates.
* **Create Actions V1**: Create actions for a monitoring rule.
* **Create Export Jobs V1**: Launch asynchronous export job.
* **Create Rules V1**: Create monitoring rules.
* **Delete Action V1**: Delete an action from a monitoring rule based on ID.
* **Delete Export Jobs V1**: Delete export jobs based on IDs.
* **Delete Notifications V1**: Delete notifications based on IDs.
* **Delete Rules V1**: Delete monitoring rules.
* **Get Actions V1**: Get actions based on their IDs.
* **Get Export Jobs V1**: Get status of export jobs based on IDs.
* **Get File Content for Export Jobs V1**: Download file associated with job ID.
* **Get Notifications Detailed Translated V1**: Get detailed translated notifications based on IDs.
* **Get Notifications Detailed V1**: Get detailed notifications based on IDs.
* **Get Notifications Exposed Data Records V1**: Get notifications exposed data records based on IDs.
* **Get Notifications Translated V1**: Get translated notifications based on IDs.
* **Get Notifications V1**: Get notifications based on IDs.
* **Get Rules V1**: Get monitoring rules based on IDs.
* **Preview Rule V1**: Preview rules notification count and distribution.
* **Query Actions V1**: Query actions based on provided criteria.
* **Query Notifications Exposed Data Records V1**: Query notifications exposed data records based on criteria.
* **Query Notifications V1**: Query notifications based on provided criteria.
* **Query Rules V1**: Query monitoring rules based on provided criteria.
* **Update Action V1**: Update an action for a monitoring rule.
* **Update Notifications V1**: Update notification status or assignee.
* **Update Rules V1**: Update monitoring rules.

</details>

<details>
<summary>Release Notes</summary>

* **Combined Release Notes V1**: Queries for release-notes resources and returns details.
* **Get Entity IDs by Query POST**: Returns release notes for IDs in request.
* **Get Entity IDs by Query POST V2**: Returns release notes for IDs with EA and GA dates in ISO 8601 format.
* **Query Release Notes V1**: Queries for release-notes resources and returns IDs.

</details>

<details>
<summary>Releases</summary>

* **Combined Releases V1**: Queries for releases resources and returns details.

</details>

<details>
<summary>Report Executions</summary>

* **Report Executions Download Get**: Get report entity download.
* **Report Executions Get**: Retrieve report details for provided report IDs.
* **Report Executions Query**: Find all report execution IDs matching query with filter.
* **Report Executions Retry**: Retry report executions.

</details>

<details>
<summary>Response Policies</summary>

* **Create RT Response Policies**: Create Response Policies by specifying details about policy to create.
* **Delete RT Response Policies**: Delete a set of Response Policies by specifying their IDs.
* **Get RT Response Policies**: Retrieve a set of Response Policies by specifying their IDs.
* **Perform RT Response Policies Action**: Perform specified action on Response Policies.
* **Query Combined RT Response Policies**: Search for Response Policies in environment matching filter criteria.
* **Query Combined RT Response Policy Members**: Search for members of a Response policy returning host details.
* **Query RT Response Policies**: Search for Response Policies returning IDs matching filter criteria.
* **Query RT Response Policy Members**: Search for members of a Response policy returning Agent IDs.
* **Set RT Response Policies Precedence**: Sets precedence of Response Policies based on order of IDs.
* **Update RT Response Policies**: Update Response Policies by specifying ID and details to update.

</details>

<details>
<summary>Runtime Detections</summary>

* **Get Runtime Detections Combined V2**: Retrieve container runtime detections by search criteria.

</details>

<details>
<summary>SaaS Security</summary>

* **Dismiss Affected Entity V3**: Perform dismiss to an affected entity in a security check.
* **Dismiss Security Check V3**: Perform dismiss to a security check by ID.
* **Get Activity Monitor V3**: Get a list of all events in monitor.
* **Get Alerts V3**: Get data on specific alert or list of all alerts.
* **Get App Inventory**: Get a list of all apps in Applications inventory.
* **Get App Inventory Users**: Get users associated with an app from Applications inventory.
* **Get Asset Inventory V3**: Get a list of all assets in Data inventory.
* **Get Device Inventory V3**: Get a list of all devices.
* **Get Integrations V3**: Get a list of connected integrations in your account.
* **Get Metrics V3**: Get metrics on security checks.
* **Get Security Check Affected V3**: Get a list of affected entities.
* **Get Security Check Compliance V3**: Get a list of compliance standards attached to a check.
* **Get Security Checks V3**: Get specific security check by ID or list all security checks.
* **Get Supported SaaS V3**: Get a list of supported integrations.
* **Get System Logs V3**: Get a list of all system logs.
* **Get System Users V3**: Get a list of system users.
* **Get User Inventory V3**: Get a list of all users.
* **Integration Builder End Transaction V3**: Make close transaction call after uploading data.
* **Integration Builder Get Status V3**: Get transaction status for custom integration.
* **Integration Builder Reset V3**: Make a reset call to custom integration.
* **Integration Builder Upload V3**: Send data to specific source in custom integration.

</details>

<details>
<summary>Sample Uploads</summary>

* **Archive Delete V1**: Delete an archive that was uploaded previously.
* **Archive Get V1**: Retrieves archive upload operation status.
* **Archive List V1**: Retrieves archive files in chunks.
* **Archive Upload V1**: Uploads an archive and extracts files list.
* **Archive Upload V2**: Uploads an archive and extracts files list V2.
* **Delete Sample V3**: Removes sample including file, meta and submissions.
* **Extraction Create V1**: Extracts files from uploaded archive.
* **Extraction Get V1**: Retrieves files extraction operation status.
* **Extraction List V1**: Retrieves files extractions in chunks.
* **Get Sample V3**: Retrieves file associated with given ID SHA256.
* **Upload Sample V3**: Upload a file for further cloud analysis.

</details>

<details>
<summary>Scanning Orchestrator</summary>

* **Create Schedules**: Create one or more scanning schedules.
* **Delete Schedules**: Delete one or more scanning schedules by ID.
* **Get Combined Schedules**: Get schedules with pagination, sorting, and filtering.
* **Get Schedules**: Get scanning schedules by their IDs.
* **Get Service Types**: Returns list of service types available for scanning.
* **Search Schedules**: Search schedules and return IDs with pagination, sorting, and filtering.
* **Trigger Scan by Schedule**: Triggers an immediate scan for given schedule IDs.
* **Update Schedules**: Updates one or more scanning schedules.

</details>

<details>
<summary>Scheduled Reports</summary>

* **Execute**: Launch scheduled report executions for report IDs.
* **Query**: Find all report IDs matching query with filter.
* **Query By ID**: Retrieve scheduled reports for provided report IDs.

</details>

<details>
<summary>Sensor Download</summary>

* **Download Sensor Installer By ID**: Download sensor installer by SHA256 ID.
* **Download Sensor Installer By ID V2**: Download sensor installer by SHA256 ID V2.
* **Download Sensor Installer By ID V3**: Download sensor installer by SHA256 ID V3.
* **Get Combined Sensor Installers By Query**: Get sensor installer details by query.
* **Get Combined Sensor Installers By Query V2**: Get sensor installer details by query V2.
* **Get Combined Sensor Installers By Query V3**: Get sensor installer details by query V3.
* **Get Sensor Installers By Query**: Get sensor installer IDs by query.
* **Get Sensor Installers By Query V2**: Get sensor installer IDs by query V2.
* **Get Sensor Installers By Query V3**: Get sensor installer IDs by query V3.
* **Get Sensor Installers CCID By Query**: Get CCID to use with sensor installers.
* **Get Sensor Installers Entities**: Get sensor installer details by SHA256 IDs.
* **Get Sensor Installers Entities V2**: Get sensor installer details by SHA256 IDs V2.
* **Get Sensor Installers Entities V3**: Get sensor installer details by SHA256 IDs V3.

</details>

<details>
<summary>Sensor Update Policies</summary>

* **Create Sensor Update Policies**: Create Sensor Update Policies.
* **Create Sensor Update Policies V2**: Create Sensor Update Policies with uninstall protection.
* **Delete Sensor Update Policies**: Delete Sensor Update Policies by IDs.
* **Get Sensor Update Policies**: Retrieve Sensor Update Policies by IDs.
* **Get Sensor Update Policies V2**: Retrieve Sensor Update Policies with uninstall protection by IDs.
* **Perform Sensor Update Policies Action**: Perform action on Sensor Update Policies.
* **Query Combined Sensor Update Builds**: Retrieve available builds for policies.
* **Query Combined Sensor Update Kernels**: Retrieve kernel compatibility info.
* **Query Combined Sensor Update Policies**: Search policies returning full entities.
* **Query Combined Sensor Update Policies V2**: Search policies with uninstall protection returning full entities.
* **Query Combined Sensor Update Policy Members**: Search members of a policy returning host details.
* **Query Sensor Update Kernels Distinct**: Retrieve distinct kernel compatibility info.
* **Query Sensor Update Policies**: Search policy IDs matching criteria.
* **Query Sensor Update Policy Members**: Search member Agent IDs of a policy.
* **Reveal Uninstall Token**: Reveals an uninstall token for a specific device.
* **Set Sensor Update Policies Precedence**: Sets precedence of Sensor Update Policies.
* **Update Sensor Update Policies**: Update Sensor Update Policies.
* **Update Sensor Update Policies V2**: Update Sensor Update Policies with uninstall protection.

</details>

<details>
<summary>Sensor Usage API</summary>

* **Get Sensor Usage Hourly**: Fetches hourly average of unique AIDs for previous 28 days.
* **Get Sensor Usage Weekly**: Fetches weekly average of unique AIDs for previous 28 days.

</details>

<details>
<summary>Sensor Visibility Exclusions</summary>

* **Create SV Exclusions V1**: Create sensor visibility exclusions V1.
* **Delete Sensor Visibility Exclusions V1**: Delete sensor visibility exclusions by ID.
* **Get Sensor Visibility Exclusions V1**: Get sensor visibility exclusions by IDs.
* **Query Sensor Visibility Exclusions V1**: Search sensor visibility exclusions.
* **Update Sensor Visibility Exclusions V1**: Update sensor visibility exclusions V1.

</details>

<details>
<summary>Serverless Exports</summary>

* **Download Export File**: Download an export file.
* **Launch Export Job**: Launch export job of Lambda Security resource.
* **Query Export Jobs**: Query export jobs entities.
* **Read Export Jobs**: Read export jobs entities.

</details>

<details>
<summary>Serverless Vulnerabilities</summary>

* **Get Combined Vulnerabilities SARIF**: Retrieve all lambda vulnerabilities matching query in SARIF format.

</details>

<details>
<summary>Spotlight Evaluation Logic</summary>

* **Combined Query Evaluation Logic**: Search evaluation logic returning full entities.
* **Get Evaluation Logic**: Get details on evaluation logic items by IDs.
* **Query Evaluation Logic**: Search evaluation logic returning IDs.

</details>

<details>
<summary>Spotlight Supported Evaluation</summary>

* **Combined Supported Evaluation Ext**: Performs combined query for retrieving RiskSupportedEvaluation entities.

</details>

<details>
<summary>Spotlight Vulnerabilities</summary>

* **Combined Query Vulnerabilities**: Search vulnerabilities returning full entities.
* **Get Remediations V2**: Get details on remediation by IDs.
* **Get Vulnerabilities**: Get details on vulnerabilities by IDs.
* **Query Vulnerabilities**: Search vulnerabilities returning IDs.

</details>

<details>
<summary>Spotlight Vulnerability Metadata</summary>

* **Combine Vuln Metadata Ext**: Performs combined query for retrieving Risk entities.

</details>

<details>
<summary>Stream</summary>

* **Stream Invocation Response V1**: Retrieves the stream of results for an invocation.

</details>

<details>
<summary>Tailored Intelligence</summary>

* **Get Events Body**: Get event body for event ID.
* **Get Events Entities**: Get events entities for specified IDs.
* **Get Rules Entities**: Get rules entities for specified IDs.
* **Query Events**: Get events IDs matching filter criteria.
* **Query Rules**: Get rules IDs matching filter criteria.

</details>

<details>
<summary>Threatgraph</summary>

* **Combined Edges Get**: Retrieve edges for a given vertex ID.
* **Combined Ran On Get**: Look up instances of indicators seen on devices.
* **Combined Summary Get**: Retrieve summary for a given vertex ID.
* **Entities Vertices Get**: Retrieve metadata for a given vertex ID (Legacy).
* **Entities Vertices Get V2**: Retrieve metadata for a given vertex ID V2.
* **Queries Edgetypes Get**: Show all available edge types.

</details>

<details>
<summary>Unidentified Containers</summary>

* **Count**: Returns total count of Unidentified Containers over a time period.
* **Count By Date Range**: Returns count of Unidentified Containers over last 7 days.
* **Search**: Search Unidentified Containers by provided search criteria.

</details>

<details>
<summary>User Management</summary>

* **Aggregate Users V1**: Get user aggregates as specified in body.
* **Combined User Roles V1**: Get user grant(s) between user and customer V1.
* **Combined User Roles V2**: Get user grant(s) between user and customer V2.
* **Create User**: Create a new user (Legacy).
* **Create User V1**: Create a new user V1.
* **Delete User**: Delete a user permanently (Legacy).
* **Delete User V1**: Delete a user permanently V1.
* **Entities Roles GET V2**: Get info about a role V2.
* **Entities Roles V1**: Get info about a role V1.
* **Get Available Role IDs**: Show role IDs available in customer account.
* **Get Roles**: Get info about a role (Legacy).
* **Get User Role IDs**: Show role IDs assigned to a user.
* **Grant User Role IDs**: Assign roles to a user.
* **Queries Roles V1**: Show role IDs for all roles available in customer account V1.
* **Query User V1**: List user IDs for all users in customer account.
* **Retrieve Emails By CID**: List usernames for all users in customer account.
* **Retrieve User**: Get info about a user (Legacy).
* **Retrieve User UUID**: Get user ID by username.
* **Retrieve User UUIDs By CID**: List user IDs for all users in customer account (Legacy).
* **Retrieve Users GET V1**: Get info about users by UUIDs.
* **Revoke User Role IDs**: Revoke roles from a user.
* **Update User**: Modify existing user name (Legacy).
* **Update User V1**: Modify existing user name V1.
* **User Action V1**: Apply actions (reset_2fa, reset_password) to users.
* **User Roles Action V1**: Grant or revoke roles for a user against CID.

</details>

<details>
<summary>Workflows</summary>

* **Deprovision**: Deprovisions a system definition provisioned on target CID.
* **Execute**: Executes an on-demand Workflow.
* **Execution Action**: Resume, retry, cancel, or stop workflow execution.
* **Execution Results**: Get execution result of a given execution.
* **Promote**: Promotes a version of a system definition for a customer.
* **Provision**: Provisions a system definition onto target CID.
* **V1 Child Executions Query**: Search for child executions by FQL filter.
* **Workflow Activities Combined**: Search for activities by name.
* **Workflow Activities Content Combined**: Search for activities content by name.
* **Workflow Definitions Action**: Enable or disable a workflow definition.
* **Workflow Definitions Combined**: Search workflow definitions based on filter.
* **Workflow Definitions Delete**: Delete workflow definitions and associated versions.
* **Workflow Definitions Export**: Exports a workflow definition by ID.
* **Workflow Definitions Import**: Imports a workflow definition based on model.
* **Workflow Definitions Update**: Updates a workflow definition based on model.
* **Workflow Execute Internal**: Executes an on-demand Workflow (Internal).
* **Workflow Execute Single Node V1**: Executes a single activity node.
* **Workflow Executions Combined**: Search workflow executions based on filter.
* **Workflow Get Human Input V1**: Gets specific human inputs by IDs.
* **Workflow Mock Execute**: Executes a workflow definition with mocks.
* **Workflow Triggers Combined**: Search for triggers by namespaced identifier.
* **Workflow Update Human Input V1**: Provides an input in response to a human input action.

</details>

<details>
<summary>Zero Trust Assessment</summary>

* **Get Assessment V1**: Get Zero Trust Assessment data for hosts by Agent IDs.
* **Get Assessments By Score V1**: Get Zero Trust Assessment data by range of scores.
* **Get Audit V1**: Get Zero Trust Assessment audit report for customer ID.

</details>

## Credentials

To authenticate with CrowdStrike Falcon, you must create API client credentials in your CrowdStrike Falcon Console:

### Prerequisites

1. Log in to your CrowdStrike Falcon Console.
2. Navigate to **Support & resources > API Scopes & Client Clients**.
3. Click **Add new API client**.
4. Assign the required read/write permissions (scopes) depending on the resources you intend to automate in n8n (e.g., *Cases: Read/Write*, *Hosts: Read*, *Alerts: Read/Write*).
5. Copy your generated **Client ID** and **Client Secret**.

### Setup in n8n

1. In n8n, create a new credential for **CrowdStrike Falcon API**.
2. Fill in the following fields:
* **Client ID**: Paste your API Client ID.
* **Client Secret**: Paste your API Client Secret.
* **Cloud / Region**: Select your CrowdStrike cloud environment (e.g., `us-1`, `us-2`, `eu-1`, `us-gov-1`).
* **Member CID**: (Optional) Provide Member CID for MSSP targeting if your key pair has access to multiple CID environments.

The node handles OAuth2 token generation, caching, and transparent renewal automatically.

## Resources

* [CrowdStrike FalconJS SDK Repository](https://github.com/CrowdStrike/falconjs/)
* [CrowdStrike Falcon API Documentation](https://docs.crowdstrike.com/p/api)
* [CrowdStrike Developer Portal & Guides](https://docs.crowdstrike.com/r/es-ES/es-kgsgkjd3/es-a5c4c449)
* [n8n Community Nodes Documentation](https://www.google.com/search?q=https://docs.n8n.io/integrations/community-nodes/)

## Version history

For a detailed list of changes, bug fixes, and new features added in each release, please refer to the [CHANGELOG.md](./CHANGELOG.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.