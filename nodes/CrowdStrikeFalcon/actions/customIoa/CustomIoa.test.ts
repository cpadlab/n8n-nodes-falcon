import type { FalconClient } from 'crowdstrike-falcon';
import { executeCustomIoa } from './CustomIoa.execution';

/**
 * Unit test suite for executeCustomIoa operations.
 */
describe('executeCustomIoa', () => {
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

		await expect(executeCustomIoa.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createRule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createRule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createRuleGroupMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createRuleGroupMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteRuleGroupsMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteRuleGroupsMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getPatterns' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getPatterns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getPlatformsMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getPlatformsMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRuleGroupsMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRuleGroupsMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRuleTypes' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRuleTypes';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRulesGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRulesGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRulesMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRulesMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryPatterns' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryPatterns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryPlatformsMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryPlatformsMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRuleGroupsFull' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRuleGroupsFull';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRuleGroupsMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRuleGroupsMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRuleTypes' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRuleTypes';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRulesMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRulesMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateRuleGroupMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateRuleGroupMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateRulesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateRulesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'validate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'validate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
