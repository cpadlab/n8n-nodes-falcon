import type { FalconClient } from 'crowdstrike-falcon';
import { executeCustomStorage } from './CustomStorage.execution';

/**
 * Unit test suite for executeCustomStorage operations.
 */
describe('executeCustomStorage', () => {
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

		await expect(executeCustomStorage.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'delete' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'delete';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteVersionedObject' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteVersionedObject';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'describeCollection' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'describeCollection';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'describeCollections' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'describeCollections';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'get' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'get';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSchema' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSchema';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSchemaMetadata' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSchemaMetadata';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getVersionedObject' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getVersionedObject';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getVersionedObjectMetadata' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getVersionedObjectMetadata';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'list' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'list';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listCollections' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listCollections';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listObjectsByVersion' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listObjectsByVersion';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listSchemas' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listSchemas';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'metadata' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'metadata';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'search' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'search';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'searchObjectsByVersion' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'searchObjectsByVersion';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomStorage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
