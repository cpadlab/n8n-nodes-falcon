import type { FalconClient } from 'crowdstrike-falcon';
import { executeContainerDetections } from './ContainerDetections.execution';

/**
 * Unit test suite for executeContainerDetections operations.
 */
describe('executeContainerDetections', () => {
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

		await expect(executeContainerDetections.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'readCombinedDetections' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readCombinedDetections';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readDetections' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readDetections';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readDetectionsCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readDetectionsCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readDetectionsCountBySeverity' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readDetectionsCountBySeverity';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readDetectionsCountByType' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readDetectionsCountByType';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'searchDetections' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'searchDetections';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
