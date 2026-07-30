import { executeUnidentifiedContainers } from './UnidentifiedContainers.execution';

/**
 * Unit test suite for executeUnidentifiedContainers operations.
 */
describe('executeUnidentifiedContainers', () => {
	let mockFalconClient: any;

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

		await expect(executeUnidentifiedContainers.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'count' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'count';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUnidentifiedContainers.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'countByDateRange' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'countByDateRange';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUnidentifiedContainers.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'search' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'search';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUnidentifiedContainers.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
