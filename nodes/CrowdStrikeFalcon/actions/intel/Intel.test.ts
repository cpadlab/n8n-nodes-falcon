import type { FalconClient } from 'crowdstrike-falcon';
import { executeIntel } from './Intel.execution';

/**
 * Unit test suite for executeIntel operations.
 */
describe('executeIntel', () => {
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

		await expect(executeIntel.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'caoIncidentsAggregatesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'caoIncidentsAggregatesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'caoIncidentsEntitiesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'caoIncidentsEntitiesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'caoIncidentsQueriesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'caoIncidentsQueriesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntelActorEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntelActorEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntelIndicatorEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntelIndicatorEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntelReportEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntelReportEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntelReportPDF' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntelReportPDF';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntelRuleEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntelRuleEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntelRuleFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntelRuleFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getLatestIntelRuleFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getLatestIntelRuleFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalwareEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalwareEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalwareMitreReport' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalwareMitreReport';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMitreReport' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMitreReport';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getVulnerabilities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getVulnerabilities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMitreAttacks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMitreAttacks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryIntelActorEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryIntelActorEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryIntelActorIds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryIntelActorIds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryIntelIndicatorEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryIntelIndicatorEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryIntelIndicatorIds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryIntelIndicatorIds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryIntelReportEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryIntelReportEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryIntelReportIds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryIntelReportIds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryIntelRuleIds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryIntelRuleIds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryMalware' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryMalware';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryMalwareEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryMalwareEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryMitreAttacks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryMitreAttacks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryMitreAttacksForMalware' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryMitreAttacksForMalware';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryVulnerabilities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryVulnerabilities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIntel.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
