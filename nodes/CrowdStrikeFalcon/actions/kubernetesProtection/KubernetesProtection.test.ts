import type { FalconClient } from 'crowdstrike-falcon';
import { executeKubernetesProtection } from './KubernetesProtection.execution';

/**
 * Unit test suite for executeKubernetesProtection operations.
 */
describe('executeKubernetesProtection', () => {
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

		await expect(executeKubernetesProtection.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'clusterCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'clusterCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'clusterCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'clusterCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'clusterEnrichment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'clusterEnrichment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'clustersByDateRangeCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'clustersByDateRangeCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'clustersByKubernetesVersionCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'clustersByKubernetesVersionCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'clustersByStatusCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'clustersByStatusCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'containerCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'containerCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'containerCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'containerCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'containerCountByRegistry' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'containerCountByRegistry';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'containerEnrichment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'containerEnrichment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'containerImageDetectionsCountByDate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'containerImageDetectionsCountByDate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'containerImagesByMostUsed' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'containerImagesByMostUsed';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'containerImagesByState' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'containerImagesByState';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'containerVulnerabilitiesBySeverityCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'containerVulnerabilitiesBySeverityCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'containersByDateRangeCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'containersByDateRangeCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'containersSensorCoverage' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'containersSensorCoverage';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createAWSAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createAWSAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createAzureSubscription' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createAzureSubscription';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteAWSAccountsMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteAWSAccountsMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteAzureSubscription' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteAzureSubscription';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deploymentCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deploymentCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deploymentCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deploymentCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deploymentEnrichment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deploymentEnrichment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deploymentsByDateRangeCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deploymentsByDateRangeCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'distinctContainerImageCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'distinctContainerImageCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'findContainersByContainerRunTimeVersion' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'findContainersByContainerRunTimeVersion';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'findContainersCountAffectedByZeroDayVulnerabilities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'findContainersCountAffectedByZeroDayVulnerabilities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAWSAccountsMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAWSAccountsMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAzureInstallScript' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAzureInstallScript';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAzureTenantConfig' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAzureTenantConfig';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAzureTenantIDs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAzureTenantIDs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getClusters' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getClusters';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCombinedCloudClusters' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCombinedCloudClusters';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getHelmValuesYaml' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getHelmValuesYaml';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getLocations' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getLocations';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getStaticScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getStaticScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'groupContainersByManaged' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'groupContainersByManaged';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'kubernetesIomByDateRange' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'kubernetesIomByDateRange';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'kubernetesIomCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'kubernetesIomCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'kubernetesIomEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'kubernetesIomEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'kubernetesIomEntitiesCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'kubernetesIomEntitiesCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listAzureAccounts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listAzureAccounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'nodeCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'nodeCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'nodeCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'nodeCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'nodeEnrichment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'nodeEnrichment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'nodesByCloudCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'nodesByCloudCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'nodesByContainerEngineVersionCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'nodesByContainerEngineVersionCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'nodesByDateRangeCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'nodesByDateRangeCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'patchAzureServicePrincipal' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'patchAzureServicePrincipal';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'podCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'podCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'podCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'podCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'podEnrichment' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'podEnrichment';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'podsByDateRangeCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'podsByDateRangeCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postAggregatesPods' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postAggregatesPods';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postSearchKubernetesIOMEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postSearchKubernetesIOMEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryKubernetesIoms' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryKubernetesIoms';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readClusterCombinedV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readClusterCombinedV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readNamespaceCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readNamespaceCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readNamespacesByDateRangeCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readNamespacesByDateRangeCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'regenerateAPIKey' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'regenerateAPIKey';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'runningContainerImages' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'runningContainerImages';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'triggerScan' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'triggerScan';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateAWSAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateAWSAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'vulnerableContainerImageCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'vulnerableContainerImageCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesProtection.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
