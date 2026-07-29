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

* **Get File Details Aggregates**: Get file details aggregates as specified via JSON.
* **Query File Details**: Query file details.
* **Get File Details by ID**: Get file details by ID.
* **Update File Details**: Update file details.
* **Bulk Download Case Files**: Download multiple existing files from case as a ZIP.
* **Delete File Details by ID**: Delete file details by ID.
* **Download Case File**: Download existing file from case.
* **Download Case Files (Deprecated)**: Download existing files from case.
* **Upload File for Case**: Upload file for case.
* **Get RTR File Metadata**: Gets metadata for a file via RTR without retrieving it.
* **Retrieve RTR File**: Retrieves a file from host using RTR and adds it to a case.
* **Retrieve Recent RTR File**: Retrieves a recently fetched RTR file and adds it to a case.
* **Query File Details IDs**: Query for IDs of file details.

</details>

<details>
<summary>Case Management</summary>

* **Get Access Tag Aggregates**: Get access tag aggregates.
* **Get Notification Groups Aggregations V1**: Get notification groups aggregations (deprecated).
* **Get Notification Groups Aggregations V2**: Get notification groups aggregations V2.
* **Get SLA Aggregations**: Get SLA aggregations.
* **Get Templates Aggregations**: Get templates aggregations.
* **Get Fields by ID**: Get fields by ID.
* **Delete Notification Groups V1**: Delete notification groups by ID (deprecated).
* **Delete Notification Groups V2**: Delete notification groups by ID V2.
* **Get Notification Groups V1**: Get notification groups by ID (deprecated).
* **Get Notification Groups V2**: Get notification groups by ID V2.
* **Update Notification Group V1**: Update notification group (deprecated).
* **Update Notification Group V2**: Update notification group V2.
* **Create Notification Group V1**: Create notification group (deprecated).
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
* **Query Notification Groups V1**: Query notification groups (deprecated).
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
* **Generate Terraform Script**: Generate Google Cloud Terraform deployment scripts.
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
* **Query Rules**: Query for rules.
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

* **Get Combined Cloud Risks**: Gets cloud risks with full details based on filters and sort criteria.
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
* **Get Horizon D4CScripts**: Returns static install scripts for Horizon.
* **Update D4C GCP Service Accounts Ext**: Patches service account key for GCP.
* **Update Discover Cloud Azure Account Client ID**: Update Azure service account client ID.

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
* **Delete Registry Entities**: Delete the registry entity identified by the entity UUID.
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
* **Get Artifacts**: Download IOC packs, PCAP files, memory dumps, and analysis artifacts.
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
* **API Preempt Proxy Post GraphQL**: Identity Protection GraphQL API.
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

```python
items = [
    "intelligenceIndicatorGraph", "ioaExclusions", "ioc", "iocs", "itAutomation",
    "knowledgeBaseAuditEvents", "knowledgeBaseFiles", "knowledgeBases",
    "kubernetesContainerCompliance", "kubernetesProtection", "maintenanceToken",
    "malquery", "messageCenter", "mlExclusions", "mobileEnrollment", "mssp",
    "networkScanGlobalConfigs", "networkScanNetworks", "networkScanScanRunReports",
    "networkScanScanRuns", "networkScanScanners", "networkScanScans",
    "networkScanTemplates", "networkScanZones", "ngsiem", "oauth2", "ods",
    "preventionPolicies", "profileGroups", "quarantine", "quickScan",
    "quickScanPro", "realTimeResponseAdmin", "realTimeResponse",
    "realTimeResponseAudit", "recon", "releaseNotes", "releases",
    "reportExecutions", "responsePolicies", "runtimeDetections",
    "saasSecurity", "sampleUploads", "scanningOrchestrator",
    "scheduledReports", "sensorDownload", "sensorUpdatePolicies",
    "sensorUsageApi", "sensorVisibilityExclusions", "serverlessExports",
    "serverlessVulnerabilities", "spotlightEvaluationLogic",
    "spotlightSupportedEvaluation", "spotlightVulnerabilities",
    "spotlightVulnerabilityMetadata", "stream", "tailoredIntelligence",
    "threatgraph", "unidentifiedContainers", "userManagement",
    "workflows", "zeroTrustAssessment"
]

import re

def camel_to_title(name):
    # insert space before capital letters
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1 \2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1 \2', s1).title()

formatted = {item: camel_to_title(item) for item in items}
for k, v in formatted.items():
    print(f"- `{k}` -> {v}")


```

```text
- `intelligenceIndicatorGraph` -> Intelligence Indicator Graph
- `ioaExclusions` -> Ioa Exclusions
- `ioc` -> Ioc
- `iocs` -> Iocs
- `itAutomation` -> It Automation
- `knowledgeBaseAuditEvents` -> Knowledge Base Audit Events
- `knowledgeBaseFiles` -> Knowledge Base Files
- `knowledgeBases` -> Knowledge Bases
- `kubernetesContainerCompliance` -> Kubernetes Container Compliance
- `kubernetesProtection` -> Kubernetes Protection
- `maintenanceToken` -> Maintenance Token
- `malquery` -> Malquery
- `messageCenter` -> Message Center
- `mlExclusions` -> Ml Exclusions
- `mobileEnrollment` -> Mobile Enrollment
- `mssp` -> Mssp
- `networkScanGlobalConfigs` -> Network Scan Global Configs
- `networkScanNetworks` -> Network Scan Networks
- `networkScanScanRunReports` -> Network Scan Scan Run Reports
- `networkScanScanRuns` -> Network Scan Scan Runs
- `networkScanScanners` -> Network Scan Scanners
- `networkScanScans` -> Network Scan Scans
- `networkScanTemplates` -> Network Scan Templates
- `networkScanZones` -> Network Scan Zones
- `ngsiem` -> Ngsiem
- `oauth2` -> Oauth2
- `ods` -> Ods
- `preventionPolicies` -> Prevention Policies
- `profileGroups` -> Profile Groups
- `quarantine` -> Quarantine
- `quickScan` -> Quick Scan
- `quickScanPro` -> Quick Scan Pro
- `realTimeResponseAdmin` -> Real Time Response Admin
- `realTimeResponse` -> Real Time Response
- `realTimeResponseAudit` -> Real Time Response Audit
- `recon` -> Recon
- `releaseNotes` -> Release Notes
- `releases` -> Releases
- `reportExecutions` -> Report Executions
- `responsePolicies` -> Response Policies
- `runtimeDetections` -> Runtime Detections
- `saasSecurity` -> Saas Security
- `sampleUploads` -> Sample Uploads
- `scanningOrchestrator` -> Scanning Orchestrator
- `scheduledReports` -> Scheduled Reports
- `sensorDownload` -> Sensor Download
- `sensorUpdatePolicies` -> Sensor Update Policies
- `sensorUsageApi` -> Sensor Usage Api
- `sensorVisibilityExclusions` -> Sensor Visibility Exclusions
- `serverlessExports` -> Serverless Exports
- `serverlessVulnerabilities` -> Serverless Vulnerabilities
- `spotlightEvaluationLogic` -> Spotlight Evaluation Logic
- `spotlightSupportedEvaluation` -> Spotlight Supported Evaluation
- `spotlightVulnerabilities` -> Spotlight Vulnerabilities
- `spotlightVulnerabilityMetadata` -> Spotlight Vulnerability Metadata
- `stream` -> Stream
- `tailoredIntelligence` -> Tailored Intelligence
- `threatgraph` -> Threatgraph
- `unidentifiedContainers` -> Unidentified Containers
- `userManagement` -> User Management
- `workflows` -> Workflows
- `zeroTrustAssessment` -> Zero Trust Assessment


```

Here is the updated section for your `README.md` in English, with all the endpoints neatly categorized and formatted in clean Title Case (showing both the human-friendly name and the code identifier):

---

## 🚧 Pending Implementation

The following features, modules, and endpoints are currently pending integration into the project:

### 🔍 Intelligence & Threats (IOCs & Malquery)

* **Intelligence Indicator Graph** (`intelligenceIndicatorGraph`)
* **Ioa Exclusions** (`ioaExclusions`)
* **Ioc** (`ioc`)
* **Iocs** (`iocs`)
* **Malquery** (`malquery`)
* **Tailored Intelligence** (`tailoredIntelligence`)
* **Threatgraph** (`threatgraph`)

### 🛡️ Security, Prevention & Vulnerabilities (Spotlight)

* **Prevention Policies** (`preventionPolicies`)
* **Quarantine** (`quarantine`)
* **Runtime Detections** (`runtimeDetections`)
* **Saas Security** (`saasSecurity`)
* **Serverless Exports** (`serverlessExports`)
* **Serverless Vulnerabilities** (`serverlessVulnerabilities`)
* **Spotlight Evaluation Logic** (`spotlightEvaluationLogic`)
* **Spotlight Supported Evaluation** (`spotlightSupportedEvaluation`)
* **Spotlight Vulnerabilities** (`spotlightVulnerabilities`)
* **Spotlight Vulnerability Metadata** (`spotlightVulnerabilityMetadata`)
* **Zero Trust Assessment** (`zeroTrustAssessment`)

### ☁️ Infrastructure & Containers (Kubernetes & Network)

* **Kubernetes Container Compliance** (`kubernetesContainerCompliance`)
* **Kubernetes Protection** (`kubernetesProtection`)
* **Network Scan Global Configs** (`networkScanGlobalConfigs`)
* **Network Scan Networks** (`networkScanNetworks`)
* **Network Scan Scan Run Reports** (`networkScanScanRunReports`)
* **Network Scan Scan Runs** (`networkScanScanRuns`)
* **Network Scan Scanners** (`networkScanScanners`)
* **Network Scan Scans** (`networkScanScans`)
* **Network Scan Templates** (`networkScanTemplates`)
* **Network Scan Zones** (`networkScanZones`)
* **Unidentified Containers** (`unidentifiedContainers`)

### ⚙️ Automation, Alerts & Auditing

* **It Automation** (`itAutomation`)
* **Knowledge Base Audit Events** (`knowledgeBaseAuditEvents`)
* **Knowledge Base Files** (`knowledgeBaseFiles`)
* **Knowledge Bases** (`knowledgeBases`)
* **Message Center** (`messageCenter`)
* **Ngsiem** (`ngsiem`)
* **Stream** (`stream`)
* **Workflows** (`workflows`)

### 📋 Device Management, Sensors & Policies

* **Ml Exclusions** (`mlExclusions`)
* **Mobile Enrollment** (`mobileEnrollment`)
* **Sensor Download** (`sensorDownload`)
* **Sensor Update Policies** (`sensorUpdatePolicies`)
* **Sensor Usage Api** (`sensorUsageApi`)
* **Sensor Visibility Exclusions** (`sensorVisibilityExclusions`)

### 🛠️ Administration, Scans & Utilities

* **Maintenance Token** (`maintenanceToken`)
* **Mssp** (`mssp`)
* **Oauth2** (`oauth2`)
* **Ods** (`ods`)
* **Profile Groups** (`profileGroups`)
* **Quick Scan** (`quickScan`)
* **Quick Scan Pro** (`quickScanPro`)
* **Real Time Response** (`realTimeResponse`)
* **Real Time Response Admin** (`realTimeResponseAdmin`)
* **Real Time Response Audit** (`realTimeResponseAudit`)
* **Recon** (`recon`)
* **Release Notes** (`releaseNotes`)
* **Releases** (`releases`)
* **Report Executions** (`reportExecutions`)
* **Response Policies** (`responsePolicies`)
* **Sample Uploads** (`sampleUploads`)
* **Scanning Orchestrator** (`scanningOrchestrator`)
* **Scheduled Reports** (`scheduledReports`)
* **User Management** (`userManagement`)

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