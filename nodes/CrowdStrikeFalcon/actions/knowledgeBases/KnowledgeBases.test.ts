import type { FalconClient } from 'crowdstrike-falcon';
import { executeKnowledgeBases } from './KnowledgeBases.execution';

/**
 * Unit test suite for executeKnowledgeBases operations.
 */
describe('executeKnowledgeBases', () => {
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

		await expect(executeKnowledgeBases.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregatesKnowledgeBasesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatesKnowledgeBasesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedKnowledgeBasesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedKnowledgeBasesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesKnowledgeBasesCreateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesKnowledgeBasesCreateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesKnowledgeBasesUpdateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesKnowledgeBasesUpdateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesKnowledgeBasesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesKnowledgeBasesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesKnowledgeBasesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesKnowledgeBasesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
