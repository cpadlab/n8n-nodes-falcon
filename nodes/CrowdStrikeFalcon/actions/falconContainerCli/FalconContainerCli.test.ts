import type { FalconClient } from 'crowdstrike-falcon';
import { executeFalconContainerCli } from './FalconContainerCli.execution';

/**
 * Unit test suite for executeFalconContainerCli operations.
 */
describe('executeFalconContainerCli', () => {
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

		await expect(executeFalconContainerCli.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'readImageVulnerabilities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readImageVulnerabilities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerCli.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
