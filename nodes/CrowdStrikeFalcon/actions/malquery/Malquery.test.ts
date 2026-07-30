import type { FalconClient } from 'crowdstrike-falcon';
import { executeMalquery } from './Malquery.execution';

/**
 * Comprehensive unit test suite for executeMalquery operations.
 */
describe('executeMalquery', () => {
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

		await expect(executeMalquery.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getMalQueryDownloadV1' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryDownloadV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryDownloadV1' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryDownloadV1';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryEntitiesSamplesFetchV1' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryEntitiesSamplesFetchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryEntitiesSamplesFetchV1' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryEntitiesSamplesFetchV1';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryMetadataV1' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryMetadataV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryMetadataV1' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryMetadataV1';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryQuotasV1' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryQuotasV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryQuotasV1' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryQuotasV1';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryRequestV1' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryRequestV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryRequestV1' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryRequestV1';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryEntitiesSamplesMultidownloadV1' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryEntitiesSamplesMultidownloadV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryEntitiesSamplesMultidownloadV1' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryEntitiesSamplesMultidownloadV1';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryExactSearchV1' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryExactSearchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryExactSearchV1' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryExactSearchV1';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryFuzzySearchV1' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryFuzzySearchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryFuzzySearchV1' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryFuzzySearchV1';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryHuntV1' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryHuntV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryHuntV1' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryHuntV1';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
