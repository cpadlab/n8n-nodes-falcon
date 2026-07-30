import type { FalconClient } from 'crowdstrike-falcon';
import { executeAccessScopes } from './AccessScopes.execution';

/**
 * Unit test suite for executeAccessScopes operations.
 */
describe('executeAccessScopes', () => {
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

		await expect(executeAccessScopes.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'queryAccessScopesExternal' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAccessScopesExternal';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAccessScopes.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listAccessScopesExternal' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listAccessScopesExternal';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAccessScopes.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
