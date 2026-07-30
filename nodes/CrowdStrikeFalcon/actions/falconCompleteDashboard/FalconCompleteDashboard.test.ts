import type { FalconClient } from 'crowdstrike-falcon';
import { executeFalconCompleteDashboard } from './FalconCompleteDashboard.execution';

/**
 * Unit test suite for executeFalconCompleteDashboard operations.
 */
describe('executeFalconCompleteDashboard', () => {
	let mockFalconClient: any;

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

		await expect(executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateAlerts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateAlerts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateAllowList' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateAllowList';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateBlockList' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateBlockList';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateDeviceCountCollection' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateDeviceCountCollection';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateEscalations' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateEscalations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregatePreventionPolicy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatePreventionPolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateRemediations' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateRemediations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateSensorUpdatePolicy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateSensorUpdatePolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateSupportIssues' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateSupportIssues';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateTotalDeviceCounts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateTotalDeviceCounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDeviceCountCollectionQueriesByFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDeviceCountCollectionQueriesByFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAlertIdsByFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAlertIdsByFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAlertIdsByFilterV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAlertIdsByFilterV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAllowListFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAllowListFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryBlockListFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryBlockListFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryEscalationsFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryEscalationsFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRemediationsFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRemediationsFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
