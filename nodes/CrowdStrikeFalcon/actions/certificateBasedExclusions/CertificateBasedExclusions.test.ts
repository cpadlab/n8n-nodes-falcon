import type { FalconClient } from 'crowdstrike-falcon';
import { executeCertificateBasedExclusions } from './CertificateBasedExclusions.execution';

/**
 * Unit test suite for executeCertificateBasedExclusions operations.
 */
describe('executeCertificateBasedExclusions', () => {
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

		await expect(executeCertificateBasedExclusions.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cbExclusionsCreateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cbExclusionsCreateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCertificateBasedExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cbExclusionsDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cbExclusionsDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCertificateBasedExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cbExclusionsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cbExclusionsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCertificateBasedExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cbExclusionsQueryV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cbExclusionsQueryV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCertificateBasedExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cbExclusionsUpdateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cbExclusionsUpdateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCertificateBasedExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'certificatesGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'certificatesGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCertificateBasedExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
