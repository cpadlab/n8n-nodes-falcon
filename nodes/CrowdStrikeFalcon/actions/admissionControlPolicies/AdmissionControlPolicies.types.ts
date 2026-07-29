export interface IAdmissionControlQueryPoliciesParams {
	filter?: string;
	limit?: number;
	offset?: number;
	sort?: string;
}

export interface IAdmissionControlGetPoliciesParams {
	ids: string[];
}

export interface IAdmissionControlDeletePoliciesParams {
	ids: string[];
}

export interface IAdmissionControlDeleteRuleGroupsParams {
	policyId: string;
	ruleGroupIds: string[];
}

export interface IAdmissionControlRemoveHostGroupsParams {
	policyId: string;
	hostGroupIds: string[];
}

export interface IAdmissionControlRemoveRuleGroupCustomRuleParams {
	policyId: string;
	customRuleIds: string[];
}

export interface IAdmissionControlUpdatePolicyParams {
	ids: string;
	body: Record<string, any>;
}

export interface IAdmissionControlAddHostGroupsParams {
	body: Record<string, any>;
}

export interface IAdmissionControlAddRuleGroupCustomRuleParams {
	body: Record<string, any>;
}

export interface IAdmissionControlCreatePolicyParams {
	body: Record<string, any>;
}

export interface IAdmissionControlCreateRuleGroupsParams {
	body: Record<string, any>;
}

export interface IAdmissionControlReplaceRuleGroupSelectorsParams {
	body: Record<string, any>;
}

export interface IAdmissionControlSetRuleGroupPrecedenceParams {
	body: Record<string, any>;
}

export interface IAdmissionControlUpdatePolicyPrecedenceParams {
	body: Record<string, any>;
}

export interface IAdmissionControlUpdateRuleGroupsParams {
	body: Record<string, any>;
}
