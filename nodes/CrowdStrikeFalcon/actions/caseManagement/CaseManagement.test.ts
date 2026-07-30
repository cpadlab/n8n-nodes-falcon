import type { FalconClient } from 'crowdstrike-falcon';
import { executeCaseManagement } from './CaseManagement.execution';

/**
 * Unit test suite for executeCaseManagement operations.
 */
describe('executeCaseManagement', () => {
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

		await expect(executeCaseManagement.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregatesAccessTagsPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatesAccessTagsPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregatesNotificationGroupsPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatesNotificationGroupsPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregatesNotificationGroupsPostV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatesNotificationGroupsPostV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregatesSlasPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatesSlasPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregatesTemplatesPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatesTemplatesPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesFieldsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesFieldsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesNotificationGroupsDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesNotificationGroupsDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesNotificationGroupsDeleteV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesNotificationGroupsDeleteV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesNotificationGroupsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesNotificationGroupsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesNotificationGroupsGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesNotificationGroupsGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesNotificationGroupsPatchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesNotificationGroupsPatchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesNotificationGroupsPatchV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesNotificationGroupsPatchV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesNotificationGroupsPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesNotificationGroupsPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesNotificationGroupsPostV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesNotificationGroupsPostV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesSlasDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesSlasDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesSlasGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesSlasGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesSlasPatchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesSlasPatchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesSlasPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesSlasPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesTemplateSnapshotsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesTemplateSnapshotsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesTemplatesDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesTemplatesDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesTemplatesExportGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesTemplatesExportGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesTemplatesGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesTemplatesGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesTemplatesImportPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesTemplatesImportPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesTemplatesPatchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesTemplatesPatchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesTemplatesPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesTemplatesPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesAccessTagsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesAccessTagsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesFieldsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesFieldsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesNotificationGroupsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesNotificationGroupsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesNotificationGroupsGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesNotificationGroupsGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesSlasGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesSlasGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesTemplateSnapshotsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesTemplateSnapshotsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesTemplatesGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesTemplatesGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
