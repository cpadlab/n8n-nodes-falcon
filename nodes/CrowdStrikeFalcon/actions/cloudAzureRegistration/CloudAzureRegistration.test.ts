import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudAzureRegistration } from './CloudAzureRegistration.execution';

/**
 * Unit test suite for executeCloudAzureRegistration operations.
 */
describe('executeCloudAzureRegistration', () => {
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

		await expect(executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cloudRegistrationAzureCreateRegistration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureCreateRegistration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureCreateSuppressions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureCreateSuppressions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureDeleteLegacySubscription' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureDeleteLegacySubscription';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureDeleteRegistration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureDeleteRegistration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureDeleteSuppressions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureDeleteSuppressions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureDownloadScript' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureDownloadScript';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureGetIssueSuppressionValuesByField' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureGetIssueSuppressionValuesByField';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureGetIssueValuesByField' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureGetIssueValuesByField';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureGetIssues' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureGetIssues';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureGetRegistration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureGetRegistration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureGetScript' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureGetScript';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureGetScriptVersions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureGetScriptVersions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureGetSuppressions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureGetSuppressions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureTriggerHealthCheck' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureTriggerHealthCheck';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureUpdateRegistration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureUpdateRegistration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureUpdateSuppressions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureUpdateSuppressions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAzureValidateRegistration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAzureValidateRegistration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAzureRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
