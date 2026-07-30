import type { FalconClient } from 'crowdstrike-falcon';
import { executeFirewallManagement } from './FirewallManagement.execution';

/**
 * Unit test suite for executeFirewallManagement operations.
 */
describe('executeFirewallManagement', () => {
	let mockFalconClient: FalconClient;

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

		await expect(executeFirewallManagement.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateEvents' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateEvents';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregatePolicyRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatePolicyRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateRuleGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateRuleGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createNetworkLocations' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createNetworkLocations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createRuleGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createRuleGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createRuleGroupValidation' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createRuleGroupValidation';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteNetworkLocations' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteNetworkLocations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteRuleGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteRuleGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getEvents' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getEvents';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getFirewallFields' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getFirewallFields';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getNetworkLocations' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getNetworkLocations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getNetworkLocationsDetails' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getNetworkLocationsDetails';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getPlatforms' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getPlatforms';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getPolicyContainers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getPolicyContainers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRuleGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRuleGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryEvents' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryEvents';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryFirewallFields' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryFirewallFields';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryNetworkLocations' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryNetworkLocations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryPlatforms' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryPlatforms';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryPolicyRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryPolicyRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRuleGroups' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRuleGroups';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateNetworkLocations' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateNetworkLocations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateNetworkLocationsMetadata' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateNetworkLocationsMetadata';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateNetworkLocationsPrecedence' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateNetworkLocationsPrecedence';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updatePolicyContainer' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updatePolicyContainer';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updatePolicyContainerV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updatePolicyContainerV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateRuleGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateRuleGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateRuleGroupValidation' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateRuleGroupValidation';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'upsertNetworkLocations' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'upsertNetworkLocations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'validateFilepathPattern' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'validateFilepathPattern';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFirewallManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
