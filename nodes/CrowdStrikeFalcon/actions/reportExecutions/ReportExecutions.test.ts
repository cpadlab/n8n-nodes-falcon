import type { FalconClient } from 'crowdstrike-falcon';
import { executeReportExecutions } from './ReportExecutions.execution';

/**
 * Unit test suite for executeReportExecutions operations.
 */
describe('executeReportExecutions', () => {
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

		await expect(executeReportExecutions.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'reportExecutionsDownloadGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'reportExecutionsDownloadGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeReportExecutions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'reportExecutionsGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'reportExecutionsGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeReportExecutions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'reportExecutionsQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'reportExecutionsQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeReportExecutions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'reportExecutionsRetry' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'reportExecutionsRetry';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeReportExecutions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
