import type { FalconClient } from 'crowdstrike-falcon';
import { executeContentUpdatePolicies } from './ContentUpdatePolicies.execution';

/**
 * Unit test suite for executeContentUpdatePolicies operations.
 */
describe('executeContentUpdatePolicies', () => {
	let mockFalconClient: any;

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

		await expect(executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createContentUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createContentUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteContentUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteContentUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getContentUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getContentUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'performContentUpdatePoliciesAction' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'performContentUpdatePoliciesAction';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedContentUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedContentUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedContentUpdatePolicyMembers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedContentUpdatePolicyMembers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryContentUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryContentUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryContentUpdatePolicyMembers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryContentUpdatePolicyMembers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryPinnableContentVersions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryPinnableContentVersions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'setContentUpdatePoliciesPrecedence' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'setContentUpdatePoliciesPrecedence';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateContentUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateContentUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContentUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
