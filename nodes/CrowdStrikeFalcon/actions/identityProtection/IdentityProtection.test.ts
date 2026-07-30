import type { FalconClient } from 'crowdstrike-falcon';
import { executeIdentityProtection } from './IdentityProtection.execution';

/**
 * Unit test suite for executeIdentityProtection operations.
 */
describe('executeIdentityProtection', () => {
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

		await expect(executeIdentityProtection.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'apiPreemptProxyDeletePolicyRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'apiPreemptProxyDeletePolicyRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'apiPreemptProxyGetPolicyRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'apiPreemptProxyGetPolicyRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'apiPreemptProxyGetPolicyRulesQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'apiPreemptProxyGetPolicyRulesQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'apiPreemptProxyPostGraphql' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'apiPreemptProxyPostGraphql';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'apiPreemptProxyPostPolicyRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'apiPreemptProxyPostPolicyRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
