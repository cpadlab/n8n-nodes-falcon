import { executeServerlessExports } from './ServerlessExports.execution';

/**
 * Unit test suite for executeServerlessExports operations.
 */
describe('executeServerlessExports', () => {
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

		await expect(executeServerlessExports.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'downloadExportFileMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'downloadExportFileMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeServerlessExports.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'launchExportJobMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'launchExportJobMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeServerlessExports.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryExportJobsMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryExportJobsMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeServerlessExports.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readExportJobsMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readExportJobsMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeServerlessExports.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
