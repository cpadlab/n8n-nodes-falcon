import type { FalconClient } from 'crowdstrike-falcon';
import { executeCorrelationRules } from './CorrelationRules.execution';

/**
 * Unit test suite for executeCorrelationRules operations.
 */
describe('executeCorrelationRules', () => {
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

		await expect(executeCorrelationRules.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregatesRuleVersionsPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatesRuleVersionsPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedRulesGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedRulesGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedRulesGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedRulesGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesLatestRulesGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesLatestRulesGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRuleVersionsDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRuleVersionsDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRuleVersionsExportPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRuleVersionsExportPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRuleVersionsImportPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRuleVersionsImportPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRuleVersionsPublishPatchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRuleVersionsPublishPatchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRulesDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRulesDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRulesGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRulesGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRulesGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRulesGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRulesPatchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRulesPatchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRulesPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRulesPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesTemplatesGetV1Mixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesTemplatesGetV1Mixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesTemplatesRulesPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesTemplatesRulesPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesRulesGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesRulesGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesRulesGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesRulesGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesTemplatesGetV1Mixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesTemplatesGetV1Mixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCorrelationRules.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
