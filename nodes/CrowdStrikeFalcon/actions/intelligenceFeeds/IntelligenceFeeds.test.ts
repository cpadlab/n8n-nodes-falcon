import type { FalconClient } from 'crowdstrike-falcon';
import { executeIntelligenceFeeds } from './IntelligenceFeeds.execution';

/**
 * Unit test suite for executeIntelligenceFeeds operations.
 */
describe('executeIntelligenceFeeds', () => {
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

		await expect(executeIntelligenceFeeds.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'downloadFeedArchive' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'downloadFeedArchive';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntelligenceFeeds.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listFeedTypes' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listFeedTypes';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntelligenceFeeds.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryFeedArchives' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryFeedArchives';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntelligenceFeeds.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
