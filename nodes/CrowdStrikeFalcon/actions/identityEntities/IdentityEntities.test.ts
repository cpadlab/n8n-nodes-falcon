import type { FalconClient } from 'crowdstrike-falcon';
import { executeIdentityEntities } from './IdentityEntities.execution';

/**
 * Unit test suite for executeIdentityEntities operations.
 */
describe('executeIdentityEntities', () => {
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

		await expect(executeIdentityEntities.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getSensorAggregates' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorAggregates';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityEntities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorDetails' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorDetails';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityEntities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySensorsByFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySensorsByFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityEntities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
