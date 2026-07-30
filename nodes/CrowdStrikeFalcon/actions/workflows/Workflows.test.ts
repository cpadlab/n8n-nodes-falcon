import { executeWorkflows } from './Workflows.execution';

/**
 * Unit test suite for executeWorkflows operations.
 */
describe('executeWorkflows', () => {
	let mockFalconClient: any;

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

		await expect(executeWorkflows.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'deprovision' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deprovision';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'execute' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'execute';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executionAction' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executionAction';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executionResults' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executionResults';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'promote' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'promote';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'provision' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'provision';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'v1ChildExecutionsQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'v1ChildExecutionsQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowActivitiesCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowActivitiesCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowActivitiesContentCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowActivitiesContentCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowDefinitionsAction' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowDefinitionsAction';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowDefinitionsCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowDefinitionsCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowDefinitionsDelete' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowDefinitionsDelete';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowDefinitionsExport' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowDefinitionsExport';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowDefinitionsImport' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowDefinitionsImport';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowDefinitionsUpdate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowDefinitionsUpdate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowExecuteInternal' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowExecuteInternal';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowExecuteSingleNodeV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowExecuteSingleNodeV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowExecutionsCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowExecutionsCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowGetHumanInputV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowGetHumanInputV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowMockExecute' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowMockExecute';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowTriggersCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowTriggersCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'workflowUpdateHumanInputV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'workflowUpdateHumanInputV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeWorkflows.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
