import { executeSpotlightVulnerabilities } from './SpotlightVulnerabilities.execution';

/**
 * Unit test suite for executeSpotlightVulnerabilities operations.
 */
describe('executeSpotlightVulnerabilities', () => {
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

		await expect(executeSpotlightVulnerabilities.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'combinedQueryVulnerabilities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedQueryVulnerabilities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSpotlightVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRemediationsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRemediationsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSpotlightVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getVulnerabilities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getVulnerabilities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSpotlightVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryVulnerabilities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryVulnerabilities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSpotlightVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
