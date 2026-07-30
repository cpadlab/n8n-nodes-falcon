import type { FalconClient } from 'crowdstrike-falcon';
import { executeAlerts } from './Alerts.execution';

/**
 * Unit test suite for executeAlerts operations.
 */
describe('executeAlerts', () => {
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

		await expect(executeAlerts.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'queryV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postCombinedAlertsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postCombinedAlertsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAggregateV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAggregateV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getQueriesAlertsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getQueriesAlertsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'patchEntitiesAlertsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'patchEntitiesAlertsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postAggregatesAlertsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postAggregatesAlertsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postEntitiesAlertsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postEntitiesAlertsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
