import type { FalconClient } from 'crowdstrike-falcon';
import { executeKnowledgeBaseAuditEvents } from './KnowledgeBaseAuditEvents.execution';

/**
 * Unit test suite for executeKnowledgeBaseAuditEvents operations.
 */
describe('executeKnowledgeBaseAuditEvents', () => {
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

		await expect(executeKnowledgeBaseAuditEvents.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregatesKnowledgeBaseAuditEventsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatesKnowledgeBaseAuditEventsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBaseAuditEvents.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedKnowledgeBaseAuditEventsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedKnowledgeBaseAuditEventsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBaseAuditEvents.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesKnowledgeBaseAuditEventsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesKnowledgeBaseAuditEventsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBaseAuditEvents.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesKnowledgeBaseAuditEventsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesKnowledgeBaseAuditEventsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKnowledgeBaseAuditEvents.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
