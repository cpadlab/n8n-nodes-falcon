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
