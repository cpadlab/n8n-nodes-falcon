import type { FalconClient } from 'crowdstrike-falcon';
import { executeEventStreams } from './EventStreams.execution';

/**
 * Unit test suite for executeEventStreams operations.
 */
describe('executeEventStreams', () => {
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

		await expect(executeEventStreams.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'listAvailableStreamsOAuth2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listAvailableStreamsOAuth2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeEventStreams.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'refreshActiveStreamSession' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'refreshActiveStreamSession';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeEventStreams.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
