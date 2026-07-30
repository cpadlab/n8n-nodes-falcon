import type { FalconClient } from 'crowdstrike-falcon';
import { executeDataProtectionConfiguration } from './DataProtectionConfiguration.execution';

/**
 * Unit test suite for executeDataProtectionConfiguration operations.
 */
describe('executeDataProtectionConfiguration', () => {
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

		await expect(executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'entitiesClassificationDeleteV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesClassificationDeleteV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesClassificationGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesClassificationGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesClassificationPatchV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesClassificationPatchV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesClassificationPostV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesClassificationPostV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesCloudApplicationCreate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesCloudApplicationCreate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesCloudApplicationDelete' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesCloudApplicationDelete';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesCloudApplicationGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesCloudApplicationGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesCloudApplicationPatch' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesCloudApplicationPatch';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesContentPatternCreate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesContentPatternCreate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesContentPatternDelete' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesContentPatternDelete';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesContentPatternGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesContentPatternGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesContentPatternPatch' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesContentPatternPatch';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesEnterpriseAccountCreate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesEnterpriseAccountCreate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesEnterpriseAccountDelete' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesEnterpriseAccountDelete';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesEnterpriseAccountGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesEnterpriseAccountGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesEnterpriseAccountPatch' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesEnterpriseAccountPatch';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesFileTypeGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesFileTypeGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesLocalApplicationCreate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesLocalApplicationCreate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesLocalApplicationDelete' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesLocalApplicationDelete';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesLocalApplicationGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesLocalApplicationGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesLocalApplicationGroupCreate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesLocalApplicationGroupCreate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesLocalApplicationGroupDelete' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesLocalApplicationGroupDelete';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesLocalApplicationGroupGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesLocalApplicationGroupGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesLocalApplicationGroupPatch' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesLocalApplicationGroupPatch';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesLocalApplicationPatch' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesLocalApplicationPatch';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesPolicyDeleteV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesPolicyDeleteV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesPolicyGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesPolicyGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesPolicyPatchV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesPolicyPatchV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesPolicyPostV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesPolicyPostV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesPolicyPrecedencePostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesPolicyPrecedencePostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesSensitivityLabelCreateV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesSensitivityLabelCreateV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesSensitivityLabelDeleteV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesSensitivityLabelDeleteV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesSensitivityLabelGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesSensitivityLabelGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesWebLocationCreateV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesWebLocationCreateV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesWebLocationDeleteV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesWebLocationDeleteV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesWebLocationGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesWebLocationGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesWebLocationPatchV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesWebLocationPatchV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesClassificationGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesClassificationGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesCloudApplicationGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesCloudApplicationGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesContentPatternGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesContentPatternGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesEnterpriseAccountGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesEnterpriseAccountGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesFileTypeGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesFileTypeGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesLocalApplicationGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesLocalApplicationGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesLocalApplicationGroupGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesLocalApplicationGroupGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesPolicyGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesPolicyGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesSensitivityLabelGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesSensitivityLabelGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesWebLocationGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesWebLocationGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
