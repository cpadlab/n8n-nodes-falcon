import type { FalconClient } from 'crowdstrike-falcon';
import { executeEventSchema } from './EventSchema.execution';

/**
 * Unit test suite for executeEventSchema operations.
 */
describe('executeEventSchema', () => {
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

		await expect(executeEventSchema.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'fdrschemaCombinedEventGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'fdrschemaCombinedEventGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeEventSchema.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'fdrschemaEntitiesEventGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'fdrschemaEntitiesEventGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeEventSchema.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'fdrschemaQueriesEventGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'fdrschemaQueriesEventGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeEventSchema.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
