import type { FalconClient } from 'crowdstrike-falcon';
import { executeIocs } from './Iocs.execution';

/**
 * Unit test suite for executeIocs operations.
 */
describe('executeIocs', () => {
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

		await expect(executeIocs.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'devicesCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'devicesCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIocs.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'devicesRanOn' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'devicesRanOn';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIocs.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesProcesses' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesProcesses';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIocs.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'processesRanOn' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'processesRanOn';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIocs.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
