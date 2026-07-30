import type { FalconClient } from 'crowdstrike-falcon';
import { executeFalconCompleteDashboard } from './FalconCompleteDashboard.execution';

/**
 * Comprehensive unit test suite for executeFalconCompleteDashboard operations.
 */
describe('executeFalconCompleteDashboard', () => {
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

		await expect(executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateAlerts' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateAlerts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateAlerts' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateAlerts';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateAllowList' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateAllowList';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateAllowList' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateAllowList';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateBlockList' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateBlockList';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateBlockList' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateBlockList';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateDeviceCountCollection' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateDeviceCountCollection';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateDeviceCountCollection' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateDeviceCountCollection';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateEscalations' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateEscalations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateEscalations' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateEscalations';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregatePreventionPolicy' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatePreventionPolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregatePreventionPolicy' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatePreventionPolicy';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateRemediations' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateRemediations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateRemediations' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateRemediations';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateSensorUpdatePolicy' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateSensorUpdatePolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateSensorUpdatePolicy' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateSensorUpdatePolicy';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateSupportIssues' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateSupportIssues';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateSupportIssues' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateSupportIssues';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateTotalDeviceCounts' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateTotalDeviceCounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateTotalDeviceCounts' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateTotalDeviceCounts';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDeviceCountCollectionQueriesByFilter' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDeviceCountCollectionQueriesByFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDeviceCountCollectionQueriesByFilter' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDeviceCountCollectionQueriesByFilter';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAlertIdsByFilter' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAlertIdsByFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAlertIdsByFilter' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAlertIdsByFilter';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAlertIdsByFilterV2' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAlertIdsByFilterV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAlertIdsByFilterV2' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAlertIdsByFilterV2';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAllowListFilter' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAllowListFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryAllowListFilter' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryAllowListFilter';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryBlockListFilter' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryBlockListFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryBlockListFilter' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryBlockListFilter';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryEscalationsFilter' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryEscalationsFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryEscalationsFilter' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryEscalationsFilter';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRemediationsFilter' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRemediationsFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRemediationsFilter' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRemediationsFilter';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeFalconCompleteDashboard.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
