import type { FalconClient } from 'crowdstrike-falcon';
import { executeImageAssessmentPolicies } from './ImageAssessmentPolicies.execution';

/**
 * Unit test suite for executeImageAssessmentPolicies operations.
 */
describe('executeImageAssessmentPolicies', () => {
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

		await expect(executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createPolicyGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createPolicyGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deletePolicy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deletePolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deletePolicyGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deletePolicyGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readPolicyExclusions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readPolicyExclusions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readPolicyGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readPolicyGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updatePolicyExclusions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updatePolicyExclusions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updatePolicyGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updatePolicyGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updatePolicyPrecedence' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updatePolicyPrecedence';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeImageAssessmentPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
