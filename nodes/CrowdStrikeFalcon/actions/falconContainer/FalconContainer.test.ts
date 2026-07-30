import type { FalconClient } from 'crowdstrike-falcon';
import { executeFalconContainer } from './FalconContainer.execution';

/**
 * Unit test suite for executeFalconContainer operations.
 */
describe('executeFalconContainer', () => {
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

		await expect(executeFalconContainer.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getCredentials' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCredentials';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainer.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
