import { executeSensorUpdatePolicies } from './SensorUpdatePolicies.execution';

/**
 * Unit test suite for executeSensorUpdatePolicies operations.
 */
describe('executeSensorUpdatePolicies', () => {
	let mockFalconClient: any;

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

		await expect(executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createSensorUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createSensorUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createSensorUpdatePoliciesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createSensorUpdatePoliciesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteSensorUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteSensorUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorUpdatePoliciesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorUpdatePoliciesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'performSensorUpdatePoliciesAction' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'performSensorUpdatePoliciesAction';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedSensorUpdateBuilds' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedSensorUpdateBuilds';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedSensorUpdateKernels' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedSensorUpdateKernels';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedSensorUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedSensorUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedSensorUpdatePoliciesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedSensorUpdatePoliciesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedSensorUpdatePolicyMembers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedSensorUpdatePolicyMembers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySensorUpdateKernelsDistinct' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySensorUpdateKernelsDistinct';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySensorUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySensorUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySensorUpdatePolicyMembers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySensorUpdatePolicyMembers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'revealUninstallToken' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'revealUninstallToken';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'setSensorUpdatePoliciesPrecedence' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'setSensorUpdatePoliciesPrecedence';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateSensorUpdatePolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateSensorUpdatePolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateSensorUpdatePoliciesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateSensorUpdatePoliciesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUpdatePolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
