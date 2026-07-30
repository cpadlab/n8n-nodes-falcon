import type { FalconClient } from 'crowdstrike-falcon';
import { executeAspm } from './Aspm.execution';

/**
 * Unit test suite for executeAspm operations.
 */
describe('executeAspm', () => {
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

		await expect(executeAspm.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createExecutorNode' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createExecutorNode';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createIntegration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createIntegration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createIntegrationTask' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createIntegrationTask';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteExecutorNode' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteExecutorNode';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteGroupID09' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteGroupID09';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteIntegration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteIntegration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteIntegrationTask' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteIntegrationTask';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteTags' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteTags';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeFunctionData' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeFunctionData';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeFunctionDataCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeFunctionDataCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeFunctionDataQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeFunctionDataQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeFunctionDataQueryCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeFunctionDataQueryCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeFunctions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeFunctions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeFunctionsCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeFunctionsCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeFunctionsOvertime' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeFunctionsOvertime';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeFunctionsQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeFunctionsQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeFunctionsQueryCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeFunctionsQueryCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeFunctionsQueryOvertime' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeFunctionsQueryOvertime';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCloudSecurityIntegrationState' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCloudSecurityIntegrationState';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getExecutorNodes' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getExecutorNodes';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getExecutorNodesID09InstancesCsv' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getExecutorNodesID09InstancesCsv';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getExecutorNodesMetadata' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getExecutorNodesMetadata';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getGroupID09V2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getGroupID09V2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getGroupsHierV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getGroupsHierV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getGroupsListV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getGroupsListV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntegrationTasks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntegrationTasks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntegrationTasksAdmin' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntegrationTasksAdmin';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntegrationTasksMetadata' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntegrationTasksMetadata';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntegrationTasksV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntegrationTasksV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntegrationTypes' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntegrationTypes';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntegrations' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntegrations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntegrationsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntegrationsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getServiceArtifacts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getServiceArtifacts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getServiceViolationTypes' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getServiceViolationTypes';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getServicesCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getServicesCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getTags' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getTags';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getUsersV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getUsersV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postGroupID09UpdateDefault' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postGroupID09UpdateDefault';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postGroupID09V2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postGroupID09V2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postGroupV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postGroupV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'runIntegrationTask' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'runIntegrationTask';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'runIntegrationTaskAdmin' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'runIntegrationTaskAdmin';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'runIntegrationTaskV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'runIntegrationTaskV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'serviceNowGetDeployments' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'serviceNowGetDeployments';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'serviceNowGetServices' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'serviceNowGetServices';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'setCloudSecurityIntegrationState' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'setCloudSecurityIntegrationState';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateExecutorNode' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateExecutorNode';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateIntegration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateIntegration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateIntegrationTask' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateIntegrationTask';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'upsertBusinessApplications' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'upsertBusinessApplications';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'upsertTags' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'upsertTags';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAspm.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
