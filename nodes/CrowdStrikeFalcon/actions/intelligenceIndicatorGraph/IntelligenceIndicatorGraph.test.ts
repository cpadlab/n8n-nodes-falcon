import type { FalconClient } from 'crowdstrike-falcon';
import { executeIntelligenceIndicatorGraph } from './IntelligenceIndicatorGraph.execution';

/**
 * Unit test suite for executeIntelligenceIndicatorGraph operations.
 */
describe('executeIntelligenceIndicatorGraph', () => {
	let mockFalconClient: any;

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

		await expect(executeIntelligenceIndicatorGraph.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'lookupIndicators' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'lookupIndicators';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntelligenceIndicatorGraph.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'searchIndicators' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'searchIndicators';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntelligenceIndicatorGraph.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
