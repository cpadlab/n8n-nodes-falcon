import type { FalconClient } from 'crowdstrike-falcon';
import { executeMobileEnrollment } from './MobileEnrollment.execution';

/**
 * Unit test suite for executeMobileEnrollment operations.
 */
describe('executeMobileEnrollment', () => {
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

		await expect(executeMobileEnrollment.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'requestDeviceEnrollmentV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'requestDeviceEnrollmentV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMobileEnrollment.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'requestDeviceEnrollmentV4' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'requestDeviceEnrollmentV4';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMobileEnrollment.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
