import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudSecurity } from './CloudSecurity.execution';

/**
 * Unit test suite for executeCloudSecurity operations.
 */
describe('executeCloudSecurity', () => {
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

		await expect(executeCloudSecurity.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'combinedCloudRisks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedCloudRisks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createCloudGroupExternal' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createCloudGroupExternal';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteCloudGroupsExternal' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteCloudGroupsExternal';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listCloudGroupIDsExternal' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listCloudGroupIDsExternal';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listCloudGroupsByIDExternal' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listCloudGroupsByIDExternal';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listCloudGroupsExternal' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listCloudGroupsExternal';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateCloudGroupExternal' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateCloudGroupExternal';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
