import { executeRealTimeResponseAudit } from './RealTimeResponseAudit.execution';

/**
 * Unit test suite for executeRealTimeResponseAudit operations.
 */
describe('executeRealTimeResponseAudit', () => {
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

		await expect(executeRealTimeResponseAudit.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'rTRAuditSessions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRAuditSessions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAudit.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
