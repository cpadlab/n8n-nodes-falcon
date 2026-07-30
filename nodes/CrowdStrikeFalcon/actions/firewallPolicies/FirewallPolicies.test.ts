import type { FalconClient } from 'crowdstrike-falcon';
import { executeFirewallPolicies } from './FirewallPolicies.execution';

/**
 * Unit test suite for executeFirewallPolicies operations.
 */
describe('executeFirewallPolicies', () => {
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

		await expect(executeFirewallPolicies.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createFirewallPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createFirewallPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteFirewallPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteFirewallPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getFirewallPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getFirewallPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'performFirewallPoliciesAction' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'performFirewallPoliciesAction';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedFirewallPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedFirewallPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedFirewallPolicyMembers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedFirewallPolicyMembers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryFirewallPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryFirewallPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryFirewallPolicyMembers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryFirewallPolicyMembers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'setFirewallPoliciesPrecedence' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'setFirewallPoliciesPrecedence';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateFirewallPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateFirewallPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
