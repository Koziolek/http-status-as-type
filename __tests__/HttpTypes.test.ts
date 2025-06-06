import {
	HTTP1XXStatus,
	HTTP2XXStatus,
	HTTP3XXStatus,
	HTTP4XXStatus,
	HTTP5XXStatus,
	HTTPStatus,
	StatusType,
	SuccessStatus,
	ClientErrorStatus,
	ServerErrorStatus,
	ErrorStatus,
	RedirectStatus,
	HTTP_STATUS_MESSAGES,
} from '../src/HttpTypes';

describe('HttpTypes', () => {

	test('HTTP1XXStatus only allows informational status codes', () => {
		expect(() => {
			const valid: HTTP1XXStatus = 100;
			// @ts-expect-error
			const invalid: HTTP1XXStatus = 150;
		}).not.toThrow();
	});


	test('HTTP2XXStatus only allows success status codes', () => {
		expect(() => {
			const valid: HTTP2XXStatus = 200;
			// @ts-expect-error
			const invalid: HTTP2XXStatus = 300;
		}).not.toThrow();
	});

	test('HTTP3XXStatus only allows redirection status codes', () => {
		expect(() => {
			const valid: HTTP3XXStatus = 301;
			// @ts-expect-error
			const invalid: HTTP3XXStatus = 400;
		}).not.toThrow();
	});

	test('HTTP4XXStatus only allows client error status codes', () => {
		expect(() => {
			const valid: HTTP4XXStatus = 404;
			// @ts-expect-error
			const invalid: HTTP4XXStatus = 500;
		}).not.toThrow();
	});

	test('HTTP5XXStatus only allows server error status codes', () => {
		expect(() => {
			const valid: HTTP5XXStatus = 500;
			// @ts-expect-error
			const invalid: HTTP5XXStatus = 100;
		}).not.toThrow();
	});


	test('HTTPStatus allows any valid HTTP status code', () => {
		const valid1: HTTPStatus = 200; // From 2XX
		const valid2: HTTPStatus = 404; // From 4XX
		const valid3: HTTPStatus = 500; // From 5XX
		// @ts-expect-error
		const invalid: HTTPStatus = 999; // Invalid status
	});
});

describe('Combined Status Types', () => {

	test('StatusType allows a single status or an array of statuses', () => {
		const singleStatus: StatusType = 200;
		const multipleStatuses: StatusType = [200, 404, 500];
		// @ts-expect-error
		const invalid: StatusType = 'string';
	});

	test('SuccessStatus allows single or array of success codes', () => {
		const singleStatus: SuccessStatus = 200;
		const multipleStatuses: SuccessStatus = [200, 201, 204];
		// @ts-expect-error
		const invalid: SuccessStatus = 404; // Not a 2XX status
	});

	test('ClientErrorStatus allows single or array of client error codes', () => {
		const singleStatus: ClientErrorStatus = 404;
		const multipleStatuses: ClientErrorStatus = [400, 404, 429];
		// @ts-expect-error
		const invalid: ClientErrorStatus = 300; // Not a 4XX status
	});

	test('ServerErrorStatus allows single or array of server error codes', () => {
		const singleStatus: ServerErrorStatus = 500;
		const multipleStatuses: ServerErrorStatus = [500, 502, 503];
		// @ts-expect-error
		const invalid: ServerErrorStatus = 404; // Not a 5XX status
	});

	test('ErrorStatus allows single or array of client/server error codes', () => {
		const singleClientError: ErrorStatus = 404;
		const singleServerError: ErrorStatus = 500;
		const multipleErrors: ErrorStatus = [404, 500];
		// @ts-expect-error
		const invalid: ErrorStatus = 200; // Success code
	});

	test('RedirectStatus allows single or array of redirect codes', () => {
		const singleRedirect: RedirectStatus = 301;
		const multipleRedirects: RedirectStatus = [301, 302, 308];
		// @ts-expect-error
		const invalid: RedirectStatus = 200; // Success code
	});
});

describe('HTTP_STATUS_MESSAGES', () => {

	test('HTTP_STATUS_MESSAGES contains correct messages for each status code', () => {
		expect(HTTP_STATUS_MESSAGES[200]).toBe('OK');
		expect(HTTP_STATUS_MESSAGES[404]).toBe('Not Found');
		expect(HTTP_STATUS_MESSAGES[500]).toBe('Internal Server Error');
		// Check an invalid code
		// @ts-expect-error
		expect(HTTP_STATUS_MESSAGES[999]).toBeUndefined();
	});

	test('should return undefined for unknown codes', () => {
		// @ts-expect-error
		expect(HTTP_STATUS_MESSAGES[999]).toBeUndefined();
		// @ts-expect-error
		expect(HTTP_STATUS_MESSAGES[1010]).toBeUndefined();
	});

	test('HTTP_STATUS_MESSAGES contains entries for all HTTPStatus members', () => {
		const allStatuses: number[] = [
			...Object.keys(HTTP_STATUS_MESSAGES).map(Number),
		];

		allStatuses.forEach((status) => {
			expect(HTTP_STATUS_MESSAGES[status as HTTPStatus]).toBeDefined();
		});
	});
});