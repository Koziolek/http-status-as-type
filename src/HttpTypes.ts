export type HTTP1XXStatus = 100 | 101 | 102 | 103;
export type HTTP2XXStatus = 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226;
export type HTTP3XXStatus = 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308;
export type HTTP4XXStatus = 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451;
export type HTTP5XXStatus = 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
export type HTTPStatus = HTTP1XXStatus | HTTP2XXStatus | HTTP3XXStatus | HTTP4XXStatus | HTTP5XXStatus;
export type StatusType = HTTPStatus | HTTPStatus[];
export type SuccessStatus = HTTP2XXStatus | HTTP2XXStatus[];
export type ClientErrorStatus = HTTP4XXStatus | HTTP4XXStatus[];
export type ServerErrorStatus = HTTP5XXStatus | HTTP5XXStatus[];
export type ErrorStatus = HTTP4XXStatus | HTTP5XXStatus | (HTTP4XXStatus | HTTP5XXStatus)[];
export type RedirectStatus = HTTP3XXStatus | HTTP3XXStatus[];

export const HTTP_STATUS_MESSAGES: Record<HTTPStatus, string> = {
  // 1XX
  100: 'Continue',
  101: 'Switching Protocols',
  102: 'Processing',
  103: 'Early Hints',

  // 2XX
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  207: 'Multi-Status',
  208: 'Already Reported',
  226: 'IM Used',

  // 3XX
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy',
  306: 'Switch Proxy',
  307: 'Temporary Redirect',
  308: 'Permanent Redirect',

  // 4XX
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  414: 'URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Range Not Satisfiable',
  417: 'Expectation Failed',
  418: "I'm a teapot",
  421: 'Misdirected Request',
  422: 'Unprocessable Entity',
  423: 'Locked',
  424: 'Failed Dependency',
  425: 'Too Early',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  451: 'Unavailable For Legal Reasons',

  // 5XX
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage',
  508: 'Loop Detected',
  510: 'Not Extended',
  511: 'Network Authentication Required',
};
