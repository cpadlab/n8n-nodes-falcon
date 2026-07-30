import type { FalconClient } from 'crowdstrike-falcon';
import { executeReleases } from './Releases.execution';

/**
 * Unit test suite for executeReleases operations.
 */
describe('executeReleases', () => {
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

		await expect(executeReleases.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'combinedReleasesV1Mixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedReleasesV1Mixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeReleases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
