import type { FalconClient } from 'crowdstrike-falcon';
import { executeItAutomation } from './ItAutomation.execution';

/**
 * Unit test suite for executeItAutomation operations.
 */
describe('executeItAutomation', () => {
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

		await expect(executeItAutomation.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'iTAutomationCancelTaskExecution' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationCancelTaskExecution';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationCombinedScheduledTasks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationCombinedScheduledTasks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationCreatePolicy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationCreatePolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationCreateScheduledTask' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationCreateScheduledTask';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationCreateTask' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationCreateTask';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationCreateTaskGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationCreateTaskGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationCreateUserGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationCreateUserGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationDeletePolicy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationDeletePolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationDeleteScheduledTasks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationDeleteScheduledTasks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationDeleteTask' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationDeleteTask';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationDeleteTaskGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationDeleteTaskGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationDeleteUserGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationDeleteUserGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetAssociatedTasks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetAssociatedTasks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetExecutionResults' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetExecutionResults';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetExecutionResultsSearchStatus' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetExecutionResultsSearchStatus';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetScheduledTasks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetScheduledTasks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetTaskExecution' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetTaskExecution';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetTaskExecutionHostStatus' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetTaskExecutionHostStatus';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetTaskExecutionsByQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetTaskExecutionsByQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetTaskGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetTaskGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetTaskGroupsByQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetTaskGroupsByQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetTasks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetTasks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetTasksByQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetTasksByQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationGetUserGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationGetUserGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationQueryPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationQueryPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationRerunTaskExecution' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationRerunTaskExecution';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationRunLiveQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationRunLiveQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationSearchScheduledTasks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationSearchScheduledTasks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationSearchTaskExecutions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationSearchTaskExecutions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationSearchTaskGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationSearchTaskGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationSearchTasks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationSearchTasks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationSearchUserGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationSearchUserGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationStartExecutionResultsSearch' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationStartExecutionResultsSearch';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationStartTaskExecution' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationStartTaskExecution';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationUpdatePoliciesPrecedence' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationUpdatePoliciesPrecedence';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationUpdatePolicyHostGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationUpdatePolicyHostGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationUpdateScheduledTask' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationUpdateScheduledTask';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationUpdateTask' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationUpdateTask';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationUpdateTaskGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationUpdateTaskGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'iTAutomationUpdateUserGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'iTAutomationUpdateUserGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeItAutomation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
