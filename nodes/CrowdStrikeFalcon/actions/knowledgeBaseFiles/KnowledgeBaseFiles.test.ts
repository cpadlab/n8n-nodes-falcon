import type { FalconClient } from 'crowdstrike-falcon';
import { executeKnowledgeBaseFiles } from './KnowledgeBaseFiles.execution';

/**
 * Unit test suite for executeKnowledgeBaseFiles operations.
 */
describe('executeKnowledgeBaseFiles', () => {
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

		await expect(executeKnowledgeBaseFiles.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'entitiesKnowledgeBaseFilesCreateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesKnowledgeBaseFilesCreateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesKnowledgeBaseFilesDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesKnowledgeBaseFilesDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesKnowledgeBaseFilesDownloadV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesKnowledgeBaseFilesDownloadV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesKnowledgeBaseFilesUpdateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesKnowledgeBaseFilesUpdateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesKnowledgeBaseFilesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesKnowledgeBaseFilesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesKnowledgeBaseFilesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesKnowledgeBaseFilesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
