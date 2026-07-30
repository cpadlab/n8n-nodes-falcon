import type { FalconClient } from 'crowdstrike-falcon';
import { executeDownloadsApi } from './DownloadsApi.execution';

/**
 * Unit test suite for executeDownloadsApi operations.
 */
describe('executeDownloadsApi', () => {
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

		await expect(executeDownloadsApi.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'downloadFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'downloadFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDownloadsApi.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'enumerateFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'enumerateFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDownloadsApi.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'fetchFilesDownloadInfo' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'fetchFilesDownloadInfo';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDownloadsApi.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'fetchFilesDownloadInfoV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'fetchFilesDownloadInfoV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDownloadsApi.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
