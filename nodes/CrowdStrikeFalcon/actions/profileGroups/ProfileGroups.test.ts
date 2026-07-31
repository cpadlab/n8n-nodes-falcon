import type { FalconClient } from 'crowdstrike-falcon';
import { executeProfileGroups } from './ProfileGroups.execution';

/**
 * Comprehensive unit test suite for executeProfileGroups operations.
 */
describe('executeProfileGroups', () => {
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

		await expect(executeProfileGroups.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});


	it.each([
		'createGroupV1Mixin0',
		'deleteGroupsV1',
		'getGroupUsersV1',
		'getGroupsV1Mixin0',
		'getUserGroupsV1',
		'groupActionsV1Mixin0',
		'groupUsersActionsV1Mixin0',
		'queryGroupsV1Mixin0',
		'updateGroupV1Mixin0'
	])("should execute '%s' operation with default parameters successfully", async (operation) => {
		const mockContext: any = {
			getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
				if (paramName === 'operation') return operation;
				return fallback !== undefined ? fallback : '';
			}),
		};

		const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});

	it.each([
		'createGroupV1Mixin0',
		'deleteGroupsV1',
		'getGroupUsersV1',
		'getGroupsV1Mixin0',
		'getUserGroupsV1',
		'groupActionsV1Mixin0',
		'groupUsersActionsV1Mixin0',
		'queryGroupsV1Mixin0',
		'updateGroupV1Mixin0'
	])("should execute '%s' operation with non-empty parameters successfully", async (operation) => {
		const mockContext: any = {
			getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
				if (paramName === 'operation') return operation;
				if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
				if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
				if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
				if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
				if (typeof fallback === 'number') return fallback;
				if (typeof fallback === 'boolean') return true;
				return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
			}),
		};

		const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});
});
