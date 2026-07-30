import type { FalconClient } from 'crowdstrike-falcon';
import { executeHostMigration } from './HostMigration.execution';

/**
 * Unit test suite for executeHostMigration operations.
 */
describe('executeHostMigration', () => {
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

		await expect(executeHostMigration.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createMigrationV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createMigrationV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHostMigration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getHostMigrationIDsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getHostMigrationIDsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHostMigration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getHostMigrationsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getHostMigrationsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHostMigration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMigrationDestinationsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMigrationDestinationsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHostMigration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMigrationIDsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMigrationIDsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHostMigration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMigrationsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMigrationsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHostMigration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'hostMigrationAggregatesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'hostMigrationAggregatesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHostMigration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'hostMigrationsActionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'hostMigrationsActionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHostMigration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'migrationAggregatesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'migrationAggregatesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHostMigration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'migrationsActionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'migrationsActionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHostMigration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
