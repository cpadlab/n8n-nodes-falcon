import type { FalconClient } from 'crowdstrike-falcon';
import { executeIoc } from './Ioc.execution';

/**
 * Unit test suite for executeIoc operations.
 */
describe('executeIoc', () => {
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

		await expect(executeIoc.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'actionGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'actionGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'actionQueryV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'actionQueryV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIndicatorsReport' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIndicatorsReport';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorAggregateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorAggregateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorCombinedV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorCombinedV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorCreateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorCreateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorGetDeviceCountV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorGetDeviceCountV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorGetDevicesRanOnV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorGetDevicesRanOnV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorGetProcessesRanOnV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorGetProcessesRanOnV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorSdmfQueryV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorSdmfQueryV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorSearchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorSearchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'indicatorUpdateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'indicatorUpdateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iocTypeQueryV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iocTypeQueryV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'platformQueryV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'platformQueryV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'severityQueryV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'severityQueryV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoc.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
