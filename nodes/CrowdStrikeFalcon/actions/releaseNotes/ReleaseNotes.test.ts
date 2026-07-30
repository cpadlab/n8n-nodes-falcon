import { executeReleaseNotes } from './ReleaseNotes.execution';

/**
 * Unit test suite for executeReleaseNotes operations.
 */
describe('executeReleaseNotes', () => {
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

		await expect(executeReleaseNotes.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'combinedReleaseNotesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedReleaseNotesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeReleaseNotes.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getEntityIDsByQueryPOST' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getEntityIDsByQueryPOST';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeReleaseNotes.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getEntityIDsByQueryPOSTV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getEntityIDsByQueryPOSTV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeReleaseNotes.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryReleaseNotesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryReleaseNotesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeReleaseNotes.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
