import type { FalconClient } from 'crowdstrike-falcon';
import { executeD4cRegistration } from './D4cRegistration.execution';

/**
 * Unit test suite for executeD4cRegistration operations.
 */
describe('executeD4cRegistration', () => {
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

		await expect(executeD4cRegistration.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'connectD4CGCPAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'connectD4CGCPAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createD4CAwsAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createD4CAwsAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createD4CGcpAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createD4CGcpAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createDiscoverCloudAzureAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createDiscoverCloudAzureAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteD4CAwsAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteD4CAwsAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteD4CGCPAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteD4CGCPAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getD4CAWSAccountScriptsAttachment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getD4CAWSAccountScriptsAttachment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getD4CAwsAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getD4CAwsAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getD4CAwsConsoleSetupURLs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getD4CAwsConsoleSetupURLs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getD4CGCPServiceAccountsExt' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getD4CGCPServiceAccountsExt';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getD4CGCPUserScriptsAttachment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getD4CGCPUserScriptsAttachment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getD4CGcpAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getD4CGcpAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getD4CGcpUserScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getD4CGcpUserScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDiscoverCloudAzureAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDiscoverCloudAzureAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDiscoverCloudAzureTenantIDs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDiscoverCloudAzureTenantIDs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDiscoverCloudAzureUserScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDiscoverCloudAzureUserScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDiscoverCloudAzureUserScriptsAttachment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDiscoverCloudAzureUserScriptsAttachment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getHorizonD4CScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getHorizonD4CScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateD4CGCPServiceAccountsExt' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateD4CGCPServiceAccountsExt';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateDiscoverCloudAzureAccountClientID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateDiscoverCloudAzureAccountClientID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeD4cRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
