import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudConnectAws } from './CloudConnectAws.execution';

/**
 * Unit test suite for executeCloudConnectAws operations.
 */
describe('executeCloudConnectAws', () => {
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

		await expect(executeCloudConnectAws.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createOrUpdateAWSSettings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createOrUpdateAWSSettings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudConnectAws.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteAWSAccounts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteAWSAccounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudConnectAws.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAWSAccounts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAWSAccounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudConnectAws.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAWSSettings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAWSSettings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudConnectAws.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'provisionAWSAccounts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'provisionAWSAccounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudConnectAws.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAWSAccounts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAWSAccounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudConnectAws.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAWSAccountsForIDs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAWSAccountsForIDs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudConnectAws.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateAWSAccounts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateAWSAccounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudConnectAws.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'verifyAWSAccountAccess' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'verifyAWSAccountAccess';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudConnectAws.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
