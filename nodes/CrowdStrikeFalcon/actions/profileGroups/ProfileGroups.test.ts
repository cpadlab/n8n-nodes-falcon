import type { FalconClient } from 'crowdstrike-falcon';
import { executeProfileGroups } from './ProfileGroups.execution';

/**
 * Unit test suite for executeProfileGroups operations.
 */
describe('executeProfileGroups', () => {
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

		await expect(executeProfileGroups.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createGroupV1Mixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createGroupV1Mixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteGroupsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteGroupsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getGroupUsersV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getGroupUsersV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getGroupsV1Mixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getGroupsV1Mixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getUserGroupsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getUserGroupsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'groupActionsV1Mixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'groupActionsV1Mixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'groupUsersActionsV1Mixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'groupUsersActionsV1Mixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryGroupsV1Mixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryGroupsV1Mixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateGroupV1Mixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateGroupV1Mixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeProfileGroups.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
