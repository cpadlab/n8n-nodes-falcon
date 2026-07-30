import type { FalconClient } from 'crowdstrike-falcon';
import { executeFalconId } from './FalconId.execution';

/**
 * Unit test suite for executeFalconId operations.
 */
describe('executeFalconId', () => {
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

		await expect(executeFalconId.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'deleteThirdPartyPasskeyRegistry' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteThirdPartyPasskeyRegistry';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconId.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getThirdPartyPasskeyRegistry' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getThirdPartyPasskeyRegistry';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconId.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryThirdPartyPasskeyRegistry' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryThirdPartyPasskeyRegistry';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconId.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateThirdPartyPasskeyRegistry' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateThirdPartyPasskeyRegistry';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconId.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
