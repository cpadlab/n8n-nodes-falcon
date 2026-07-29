# n8n-nodes-_node-name_

This is an n8n community node. It lets you use _app/service name_ in your n8n workflows.

_App/service name_ is _one or two sentences describing the service this node integrates with_.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage)  <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Access Scope
* **Query Access Scopes**: Query Access Scopes and return matching IDs.
* **Get Access Scopes by IDs**: Retrieves full details for given Access Scope IDs.

### Admission Control Policy
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

### Agent Invocation
* **Get Agent Invocation**: Retrieves the list of messages resulting from a specified invocation.
* **Invoke Published Agent**: Invoke a published agent by ID with specified input.

### Alerts
* **Query Alerts (V2)**: Retrieves all Alert IDs matching a given query.
* **Get Alerts by Composite IDs (V2)**: Retrieves all Alerts given their composite IDs.
* **Update Alerts (V3)**: Perform actions on Alerts identified by composite IDs.
* **Get Combined Alerts Stream (V1)**: Retrieves all Alerts matching a FQL filter using pagination token.
* **Get Alert Aggregates (V2)**: Retrieves aggregate values for Alerts across CIDs.
* **Query Alerts (V1 - Deprecated)**: Retrieves all Alert IDs matching a given query (V1 deprecated).
* **Patch Alert Entities (V2 - Deprecated)**: Perform actions on Alerts identified by composite IDs (V2 deprecated).
* **Post Alert Aggregates (V1 - Deprecated)**: Retrieves aggregate values for Alerts (V1 deprecated).
* **Get Alert Entities (V1 - Deprecated)**: Retrieves all Alerts given their IDs (V1 deprecated).

### API Clients
* **Get All API Client IDs**: Get all API client IDs for customer.
* **Get API Clients by IDs**: Get API Clients based on API Client IDs provided.
* **Get Accessible Scopes**: Get all available API scopes for customer.
* **Create API Client**: Create a new API Client.
* **Update API Client**: Update an existing API Client by ID.
* **Delete API Clients**: Delete existing API Clients based on IDs.
* **Reset API Client Secret**: Reset existing API Client secret by IDs.

### API Integrations
* **Execute Command**: Execute a command.
* **Execute Command Proxy**: Execute a command and proxy the response directly.
* **Get Combined Plugin Configs**: Queries for config resources and returns details.

### ASPM
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

### Case
* **Get Cases Query**: Retrieves all Case IDs matching a query filter.
* **Get Cases by IDs**: Retrieves full details for given Case IDs.
* **Create Case**: Creates a new Case.
* **Update Case**: Updates specified fields on a Case.
* **Add Alert Evidence**: Adds alert evidence to a specified Case.
* **Add Event Evidence**: Adds event evidence to a specified Case.
* **Add Tags**: Adds tags to a specified Case.
* **Remove Tags**: Removes specified tags from a Case.
* **Merge Cases**: Merges a source case into a destination case.

## Credentials

_If users need to authenticate with the app/service, provide details here. You should include prerequisites (such as signing up with the service), available authentication methods, and how to set them up._

## Compatibility

_State the minimum n8n version, as well as which versions you test against. You can also include any known version incompatibility issues._

## Usage

_This is an optional section. Use it to help users with any difficult or confusing aspects of the node._

_By the time users are looking for community nodes, they probably already know n8n basics. But if you expect new users, you can link to the [Try it out](https://docs.n8n.io/try-it-out/) documentation to help them get started._

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* _Link to app/service documentation._

## Version history

_This is another optional section. If your node has multiple versions, include a short description of available versions and what changed, as well as any compatibility impact._
