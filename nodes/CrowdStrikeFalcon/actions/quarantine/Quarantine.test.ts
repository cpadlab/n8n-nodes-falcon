import type { FalconClient } from 'crowdstrike-falcon';
import { executeQuarantine } from './Quarantine.execution';

/**
 * Unit test suite for executeQuarantine operations.
 */
describe('executeQuarantine', () => {
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

		await expect(executeQuarantine.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'actionUpdateCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'actionUpdateCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuarantine.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAggregateFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAggregateFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuarantine.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getQuarantineFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getQuarantineFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuarantine.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryQuarantineFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryQuarantineFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuarantine.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateQfByQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateQfByQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuarantine.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateQuarantinedDetectsByIds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateQuarantinedDetectsByIds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuarantine.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
