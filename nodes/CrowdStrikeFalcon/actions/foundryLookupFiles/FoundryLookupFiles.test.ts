import type { FalconClient } from 'crowdstrike-falcon';
import { executeFoundryLookupFiles } from './FoundryLookupFiles.execution';

/**
 * Unit test suite for executeFoundryLookupFiles operations.
 */
describe('executeFoundryLookupFiles', () => {
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

		await expect(executeFoundryLookupFiles.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createFileV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createFileV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLookupFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateFileV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateFileV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLookupFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
