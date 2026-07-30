import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudPolicies } from './CloudPolicies.execution';

/**
 * Unit test suite for executeCloudPolicies operations.
 */
describe('executeCloudPolicies', () => {
	let mockFalconClient: FalconClient;

	beforeEach(() => {
		jest.clearAllMocks();
		mockFalconClient = new Proxy({}, {
			get: () => new Proxy({}, {
				get: () => jest.fn().mockResolvedValue({ success: true }),
			}),
		}) as any as FalconClient;
	});

	it('should throw an error for unsupported operation', async () => {
		const mockContext: any = {
			getNodeParameter: jest.fn().mockReturnValue('unsupportedOperation'),
		};

		await expect(executeCloudPolicies.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cloneComplianceFramework' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloneComplianceFramework';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createComplianceControl' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createComplianceControl';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createComplianceFramework' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createComplianceFramework';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createRuleMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createRuleMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createRuleOverride' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createRuleOverride';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createSuppressionRule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createSuppressionRule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteComplianceControl' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteComplianceControl';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteComplianceFramework' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteComplianceFramework';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteRuleMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteRuleMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteRuleOverride' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteRuleOverride';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteSuppressionRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteSuppressionRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getComplianceControls' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getComplianceControls';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getComplianceFrameworks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getComplianceFrameworks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getEnrichedAsset' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getEnrichedAsset';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getEvaluationResult' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getEvaluationResult';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRuleInputSchema' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRuleInputSchema';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRuleOverride' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRuleOverride';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSuppressionRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSuppressionRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryComplianceControls' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryComplianceControls';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryComplianceFrameworks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryComplianceFrameworks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySuppressionRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySuppressionRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'renameSectionComplianceFramework' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'renameSectionComplianceFramework';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'replaceControlRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'replaceControlRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateComplianceControl' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateComplianceControl';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateComplianceFramework' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateComplianceFramework';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateRule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateRule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateRuleOverride' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateRuleOverride';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateSuppressionRule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateSuppressionRule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
