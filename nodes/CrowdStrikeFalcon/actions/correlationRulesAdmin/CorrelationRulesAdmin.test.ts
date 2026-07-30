import type { FalconClient } from 'crowdstrike-falcon';
import { executeCorrelationRulesAdmin } from './CorrelationRulesAdmin.execution';

/**
 * Unit test suite for executeCorrelationRulesAdmin operations.
 */
describe('executeCorrelationRulesAdmin', () => {
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

		await expect(executeCorrelationRulesAdmin.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'entitiesRulesOwnershipPutV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRulesOwnershipPutV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRulesAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRulesOwnershipPutV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRulesOwnershipPutV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRulesAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
