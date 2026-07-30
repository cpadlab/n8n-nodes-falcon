import type { FalconClient } from 'crowdstrike-falcon';
import { executeCases } from './Cases.execution';

/**
 * Unit test suite for executeCases operations.
 */
describe('executeCases', () => {
	let mockFalconClient: FalconClient;

	beforeEach(() => {
		jest.clearAllMocks();
		mockFalconClient = new Proxy({}, {
			get: () => new Proxy({}, {
				get: () => jest.fn().mockResolvedValue({ success: true }),
			}),
		}) as any as FalconClient;
	});

	it('should throw an error for unsupported operation', async () => {
		const mockContext: any = {
			getNodeParameter: jest.fn().mockReturnValue('unsupportedOperation'),
		};

		await expect(executeCases.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'queriesCasesGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesCasesGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesCasesPostV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesCasesPostV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesCasesPutV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesCasesPutV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesCasesPatchV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesCasesPatchV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesAlertEvidencePostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesAlertEvidencePostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesEventEvidencePostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesEventEvidencePostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesCaseTagsPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesCaseTagsPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesCaseTagsDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesCaseTagsDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesMergePostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesMergePostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCases.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
