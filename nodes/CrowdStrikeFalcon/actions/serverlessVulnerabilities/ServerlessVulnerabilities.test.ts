import type { FalconClient } from 'crowdstrike-falcon';
import { executeServerlessVulnerabilities } from './ServerlessVulnerabilities.execution';

/**
 * Unit test suite for executeServerlessVulnerabilities operations.
 */
describe('executeServerlessVulnerabilities', () => {
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

		await expect(executeServerlessVulnerabilities.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getCombinedVulnerabilitiesSARIF' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCombinedVulnerabilitiesSARIF';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeServerlessVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
