import type { FalconClient } from 'crowdstrike-falcon';
import { executeDetects } from './Detects.execution';

/**
 * Unit test suite for executeDetects operations.
 */
describe('executeDetects', () => {
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

		await expect(executeDetects.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getAggregateDetects' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAggregateDetects';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDetects.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDetectSummaries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDetectSummaries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDetects.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryDetects' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryDetects';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDetects.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateDetectsByIdsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateDetectsByIdsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDetects.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
