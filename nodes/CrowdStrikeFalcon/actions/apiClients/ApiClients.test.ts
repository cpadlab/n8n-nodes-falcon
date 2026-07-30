import type { FalconClient } from 'crowdstrike-falcon';
import { executeApiClients } from './ApiClients.execution';

/**
 * Unit test suite for executeApiClients operations.
 */
describe('executeApiClients', () => {
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

		await expect(executeApiClients.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getAllAPIClientIdsForCustomer' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAllAPIClientIdsForCustomer';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeApiClients.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAPIClients' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAPIClients';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeApiClients.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAccessibleScopes' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAccessibleScopes';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeApiClients.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createAPIClient' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createAPIClient';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeApiClients.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateAPIClient' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateAPIClient';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeApiClients.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteAPIClients' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteAPIClients';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeApiClients.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'resetAPIClientSecret' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'resetAPIClientSecret';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeApiClients.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
