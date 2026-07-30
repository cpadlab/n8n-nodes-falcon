import { executeRuntimeDetections } from './RuntimeDetections.execution';

/**
 * Unit test suite for executeRuntimeDetections operations.
 */
describe('executeRuntimeDetections', () => {
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

		await expect(executeRuntimeDetections.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getRuntimeDetectionsCombinedV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRuntimeDetectionsCombinedV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRuntimeDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
