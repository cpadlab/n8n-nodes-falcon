import type { FalconClient } from 'crowdstrike-falcon';
import { executeOauth2 } from './Oauth2.execution';

/**
 * Unit test suite for executeOauth2 operations.
 */
describe('executeOauth2', () => {
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

		await expect(executeOauth2.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'oauth2AccessToken' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'oauth2AccessToken';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeOauth2.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'oauth2RevokeToken' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'oauth2RevokeToken';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeOauth2.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
