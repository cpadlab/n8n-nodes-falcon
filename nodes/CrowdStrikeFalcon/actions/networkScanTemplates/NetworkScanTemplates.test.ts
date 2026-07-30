import type { FalconClient } from 'crowdstrike-falcon';
import { executeNetworkScanTemplates } from './NetworkScanTemplates.execution';

/**
 * Unit test suite for executeNetworkScanTemplates operations.
 */
describe('executeNetworkScanTemplates', () => {
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

		await expect(executeNetworkScanTemplates.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createTemplates' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createTemplates';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanTemplates.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteTemplates' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteTemplates';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanTemplates.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getTemplateConfigs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getTemplateConfigs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanTemplates.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getTemplates' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getTemplates';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanTemplates.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryTemplates' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryTemplates';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanTemplates.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateTemplates' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateTemplates';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanTemplates.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
