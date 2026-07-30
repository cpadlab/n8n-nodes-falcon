import type { FalconClient } from 'crowdstrike-falcon';
import { executeCspmRegistration } from './CspmRegistration.execution';

/**
 * Unit test suite for executeCspmRegistration operations.
 */
describe('executeCspmRegistration', () => {
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

		await expect(executeCspmRegistration.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'azureDownloadCertificate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'azureDownloadCertificate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'azureRefreshCertificate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'azureRefreshCertificate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'connectCSPMGCPAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'connectCSPMGCPAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createCSPMAwsAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createCSPMAwsAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createCSPMAzureAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createCSPMAzureAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createCSPMAzureManagementGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createCSPMAzureManagementGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createCSPMGCPAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createCSPMGCPAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteCSPMAwsAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteCSPMAwsAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteCSPMAzureAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteCSPMAzureAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteCSPMAzureManagementGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteCSPMAzureManagementGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteCSPMGCPAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteCSPMGCPAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getBehaviorDetections' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getBehaviorDetections';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMAwsAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMAwsAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMAwsConsoleSetupURLs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMAwsConsoleSetupURLs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMAzureAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMAzureAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMAzureManagementGroup' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMAzureManagementGroup';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMAzureUserScriptsAttachment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMAzureUserScriptsAttachment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMGCPAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMGCPAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMGCPServiceAccountsExt' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMGCPServiceAccountsExt';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMGCPUserScriptsAttachment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMGCPUserScriptsAttachment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMGCPValidateAccountsExt' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMGCPValidateAccountsExt';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMPoliciesDetails' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMPoliciesDetails';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMPolicy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMPolicy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMPolicySettings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMPolicySettings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCSPMScanSchedule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCSPMScanSchedule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCloudEventIDs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCloudEventIDs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getConfigurationDetectionEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getConfigurationDetectionEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getConfigurationDetectionIDsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getConfigurationDetectionIDsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getConfigurationDetections' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getConfigurationDetections';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'patchCSPMAwsAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'patchCSPMAwsAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateCSPMAzureAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateCSPMAzureAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateCSPMAzureAccountClientID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateCSPMAzureAccountClientID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateCSPMAzureTenantDefaultSubscriptionID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateCSPMAzureTenantDefaultSubscriptionID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateCSPMGCPAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateCSPMGCPAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateCSPMGCPServiceAccountsExt' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateCSPMGCPServiceAccountsExt';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateCSPMPolicySettings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateCSPMPolicySettings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateCSPMScanSchedule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateCSPMScanSchedule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'validateCSPMGCPServiceAccountExt' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'validateCSPMGCPServiceAccountExt';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCspmRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
