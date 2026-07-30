import type { FalconClient } from 'crowdstrike-falcon';
import { executeStream } from './Stream.execution';

/**
 * Unit test suite for executeStream operations.
 */
describe('executeStream', () => {
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

		await expect(executeStream.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'streamInvocationResponseV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'streamInvocationResponseV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeStream.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
