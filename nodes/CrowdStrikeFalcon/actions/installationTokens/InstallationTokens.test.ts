import type { FalconClient } from 'crowdstrike-falcon';
import { executeInstallationTokens } from './InstallationTokens.execution';

/**
 * Unit test suite for executeInstallationTokens operations.
 */
describe('executeInstallationTokens', () => {
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

		await expect(executeInstallationTokens.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'auditEventsQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'auditEventsQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeInstallationTokens.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'auditEventsRead' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'auditEventsRead';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeInstallationTokens.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'customerSettingsRead' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'customerSettingsRead';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeInstallationTokens.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'tokensCreate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'tokensCreate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeInstallationTokens.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'tokensDelete' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'tokensDelete';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeInstallationTokens.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'tokensQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'tokensQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeInstallationTokens.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'tokensRead' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'tokensRead';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeInstallationTokens.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'tokensUpdate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'tokensUpdate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeInstallationTokens.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
