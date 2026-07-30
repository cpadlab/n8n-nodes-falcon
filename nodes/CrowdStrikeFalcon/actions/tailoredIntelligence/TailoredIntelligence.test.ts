import { executeTailoredIntelligence } from './TailoredIntelligence.execution';

/**
 * Unit test suite for executeTailoredIntelligence operations.
 */
describe('executeTailoredIntelligence', () => {
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

		await expect(executeTailoredIntelligence.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getEventsBody' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getEventsBody';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeTailoredIntelligence.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getEventsEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getEventsEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeTailoredIntelligence.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRulesEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRulesEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeTailoredIntelligence.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryEvents' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryEvents';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeTailoredIntelligence.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryRules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryRules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeTailoredIntelligence.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
