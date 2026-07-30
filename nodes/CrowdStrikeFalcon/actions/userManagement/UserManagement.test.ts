import type { FalconClient } from 'crowdstrike-falcon';
import { executeUserManagement } from './UserManagement.execution';

/**
 * Unit test suite for executeUserManagement operations.
 */
describe('executeUserManagement', () => {
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

		await expect(executeUserManagement.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateUsersV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateUsersV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedUserRolesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedUserRolesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedUserRolesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedUserRolesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createUser' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createUser';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createUserV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createUserV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteUser' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteUser';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteUserV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteUserV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRolesGETV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRolesGETV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRolesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRolesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAvailableRoleIds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAvailableRoleIds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRoles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRoles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getUserRoleIds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getUserRoleIds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'grantUserRoleIds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'grantUserRoleIds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesRolesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesRolesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryUserV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryUserV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'retrieveEmailsByCID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'retrieveEmailsByCID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'retrieveUser' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'retrieveUser';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'retrieveUserUUID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'retrieveUserUUID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'retrieveUserUUIDsByCID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'retrieveUserUUIDsByCID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'retrieveUsersGETV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'retrieveUsersGETV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'revokeUserRoleIds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'revokeUserRoleIds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateUser' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateUser';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateUserV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateUserV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'userActionV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'userActionV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'userRolesActionV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'userRolesActionV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeUserManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
