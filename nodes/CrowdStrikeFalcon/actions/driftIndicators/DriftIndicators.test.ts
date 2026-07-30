import type { FalconClient } from 'crowdstrike-falcon';
import { executeDriftIndicators } from './DriftIndicators.execution';

/**
 * Unit test suite for executeDriftIndicators operations.
 */
describe('executeDriftIndicators', () => {
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

		await expect(executeDriftIndicators.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getDriftIndicatorsValuesByDate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDriftIndicatorsValuesByDate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDriftIndicators.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readDriftIndicatorEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readDriftIndicatorEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDriftIndicators.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readDriftIndicatorsCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readDriftIndicatorsCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDriftIndicators.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'searchAndReadDriftIndicatorEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'searchAndReadDriftIndicatorEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDriftIndicators.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'searchDriftIndicators' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'searchDriftIndicators';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDriftIndicators.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
