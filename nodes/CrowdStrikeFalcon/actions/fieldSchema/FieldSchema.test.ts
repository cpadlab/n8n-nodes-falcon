import type { FalconClient } from 'crowdstrike-falcon';
import { executeFieldSchema } from './FieldSchema.execution';

/**
 * Unit test suite for executeFieldSchema operations.
 */
describe('executeFieldSchema', () => {
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

		await expect(executeFieldSchema.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'fdrschemaEntitiesFieldGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'fdrschemaEntitiesFieldGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFieldSchema.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'fdrschemaQueriesFieldGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'fdrschemaQueriesFieldGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFieldSchema.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
