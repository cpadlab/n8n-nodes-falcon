import type { FalconClient } from 'crowdstrike-falcon';
import { executeNgsiem } from './Ngsiem.execution';

/**
 * Unit test suite for executeNgsiem operations.
 */
describe('executeNgsiem', () => {
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

		await expect(executeNgsiem.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'bulkCreateDashboardsFromTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'bulkCreateDashboardsFromTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'bulkCreateLookupFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'bulkCreateLookupFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'bulkCreateSavedQueriesFromTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'bulkCreateSavedQueriesFromTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'bulkGetLookupFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'bulkGetLookupFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'bulkInstallParsers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'bulkInstallParsers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'bulkUpdateDashboardsFromTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'bulkUpdateDashboardsFromTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'bulkUpdateLookupFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'bulkUpdateLookupFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'bulkUpdateSavedQueriesFromTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'bulkUpdateSavedQueriesFromTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloneParser' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloneParser';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createDashboardFromTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createDashboardFromTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createLookupFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createLookupFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createParser' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createParser';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createParserExtension' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createParserExtension';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createParserFromTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createParserFromTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createSavedQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createSavedQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteDashboard' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteDashboard';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteLookupFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteLookupFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteParser' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteParser';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteSavedQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteSavedQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalCreateConnectorConfig' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalCreateConnectorConfig';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalCreateDataConnection' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalCreateDataConnection';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalDeleteConnectorConfigs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalDeleteConnectorConfigs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalDeleteDataConnection' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalDeleteDataConnection';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalGetDataConnectionByID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalGetDataConnectionByID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalGetDataConnectionStatus' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalGetDataConnectionStatus';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalGetDataConnectionToken' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalGetDataConnectionToken';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalListConnectorConfigs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalListConnectorConfigs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalListDataConnections' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalListDataConnections';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalListDataConnectors' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalListDataConnectors';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalPatchConnectorConfig' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalPatchConnectorConfig';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalRegenerateDataConnectionToken' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalRegenerateDataConnectionToken';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalUpdateDataConnection' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalUpdateDataConnection';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'externalUpdateDataConnectionStatus' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'externalUpdateDataConnectionStatus';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDashboardTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDashboardTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getLookupFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getLookupFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getLookupFromPackageV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getLookupFromPackageV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getLookupFromPackageWithNamespaceV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getLookupFromPackageWithNamespaceV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getLookupV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getLookupV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getParser' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getParser';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getParserTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getParserTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSavedQueryTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSavedQueryTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSearchStatusV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSearchStatusV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'installParser' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'installParser';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listDashboards' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listDashboards';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listLookupFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listLookupFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listParsers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listParsers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listSavedQueries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listSavedQueries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'startSearchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'startSearchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'stopSearchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'stopSearchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'testParserFromTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'testParserFromTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateDashboardFromTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateDashboardFromTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateLookupFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateLookupFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateLookupFileEntries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateLookupFileEntries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateParser' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateParser';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateParserAutoUpdatePolicy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateParserAutoUpdatePolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateParserExtension' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateParserExtension';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateParserFromTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateParserFromTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateSavedQueryFromTemplate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateSavedQueryFromTemplate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'uploadLookupV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'uploadLookupV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNgsiem.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
