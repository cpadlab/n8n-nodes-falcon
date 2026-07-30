import type { FalconClient } from 'crowdstrike-falcon';
import { executeMessageCenter } from './MessageCenter.execution';

/**
 * Unit test suite for executeMessageCenter operations.
 */
describe('executeMessageCenter', () => {
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

		await expect(executeMessageCenter.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateCases' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateCases';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMessageCenter.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'caseAddActivity' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'caseAddActivity';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMessageCenter.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'caseAddAttachment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'caseAddAttachment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMessageCenter.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'caseDownloadAttachment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'caseDownloadAttachment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMessageCenter.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createCaseV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createCaseV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMessageCenter.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCaseActivityByIds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCaseActivityByIds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMessageCenter.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCaseEntitiesByIDs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCaseEntitiesByIDs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMessageCenter.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryActivityByCaseID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryActivityByCaseID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMessageCenter.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCasesIdsByFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCasesIdsByFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMessageCenter.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
