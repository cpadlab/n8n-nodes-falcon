import type { FalconClient } from 'crowdstrike-falcon';
import { executeInstallationTokensSettings } from './InstallationTokensSettings.execution';

/**
 * Unit test suite for executeInstallationTokensSettings operations.
 */
describe('executeInstallationTokensSettings', () => {
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

		await expect(executeInstallationTokensSettings.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'customerSettingsUpdate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'customerSettingsUpdate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeInstallationTokensSettings.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
