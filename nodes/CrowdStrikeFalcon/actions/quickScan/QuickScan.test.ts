import type { FalconClient } from 'crowdstrike-falcon';
import { executeQuickScan } from './QuickScan.execution';

/**
 * Unit test suite for executeQuickScan operations.
 */
describe('executeQuickScan', () => {
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

		await expect(executeQuickScan.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getScans' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getScans';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuickScan.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getScansAggregates' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getScansAggregates';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuickScan.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySubmissionsMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySubmissionsMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuickScan.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'scanSamples' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'scanSamples';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuickScan.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
