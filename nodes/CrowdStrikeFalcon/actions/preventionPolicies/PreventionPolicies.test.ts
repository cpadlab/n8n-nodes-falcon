import type { FalconClient } from 'crowdstrike-falcon';
import { executePreventionPolicies } from './PreventionPolicies.execution';

/**
 * Unit test suite for executePreventionPolicies operations.
 */
describe('executePreventionPolicies', () => {
	let mockFalconClient: FalconClient;

	beforeEach(() => {
		jest.clearAllMocks();
		mockFalconClient = new Proxy({}, {
			get: () => new Proxy({}, {
				get: () => jest.fn().mockResolvedValue({ success: true }),
			}),
		});
	});

	it('should throw an error for unsupported operation', async () => {
		const mockContext: any = {
			getNodeParameter: jest.fn().mockReturnValue('unsupportedOperation'),
		};

		await expect(executePreventionPolicies.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createPreventionPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createPreventionPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executePreventionPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deletePreventionPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deletePreventionPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executePreventionPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getPreventionPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getPreventionPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executePreventionPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'performPreventionPoliciesAction' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'performPreventionPoliciesAction';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executePreventionPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedPreventionPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedPreventionPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executePreventionPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedPreventionPolicyMembers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedPreventionPolicyMembers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executePreventionPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryPreventionPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryPreventionPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executePreventionPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryPreventionPolicyMembers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryPreventionPolicyMembers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executePreventionPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'setPreventionPoliciesPrecedence' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'setPreventionPoliciesPrecedence';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executePreventionPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updatePreventionPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updatePreventionPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executePreventionPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
