import type { FalconClient } from 'crowdstrike-falcon';
import { executeAdmissionControlPolicies } from './AdmissionControlPolicies.execution';

/**
 * Unit test suite for executeAdmissionControlPolicies operations.
 */
describe('executeAdmissionControlPolicies', () => {
	let mockFalconClient: FalconClient;

	beforeEach(() => {
		jest.clearAllMocks();
		mockFalconClient = new Proxy({}, {
			get: () => new Proxy({}, {
				get: () => jest.fn().mockResolvedValue({ success: true }),
			}),
		}) as unknown as FalconClient;
	});

	it('should throw an error for unsupported operation', async () => {
		const mockContext: any = {
			getNodeParameter: jest.fn().mockReturnValue('unsupportedOperation'),
		};

		await expect(executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'admissionControlQueryPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlQueryPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlGetPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlGetPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlCreatePolicy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlCreatePolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlUpdatePolicy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlUpdatePolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlDeletePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlDeletePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlUpdatePolicyPrecedence' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlUpdatePolicyPrecedence';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlAddHostGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlAddHostGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlRemoveHostGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlRemoveHostGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlCreateRuleGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlCreateRuleGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlUpdateRuleGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlUpdateRuleGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlDeleteRuleGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlDeleteRuleGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlSetRuleGroupPrecedence' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlSetRuleGroupPrecedence';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlReplaceRuleGroupSelectors' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlReplaceRuleGroupSelectors';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlAddRuleGroupCustomRule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlAddRuleGroupCustomRule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'admissionControlRemoveRuleGroupCustomRule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'admissionControlRemoveRuleGroupCustomRule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAdmissionControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
