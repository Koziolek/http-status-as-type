# @koziolek/http-status-as-type

A simple, lightweight JavaScript/TypeScript library that provides HTTP status codes as types and a handy dictionary with
their descriptions.

## Installation

```bash
npm install @koziolek/http-status-as-type
```

## Usage

### JavaScript

```js
const {statusTexts} = require('@koziolek/http-status-as-type');

console.log(statusTexts[200]); // "OK"
```

### TypeScript

```ts
import { statusTexts, HttpStatus } from '@koziolek/http-status-as-type';

function printStatus(status: HttpStatus) {
	console.log(statusTexts[status]); // "OK"
}
```

## Available status codes

All official status codes are supported.

*(Feel free to extend the list as needed!)*

## Development

To build the project:

```bash
npm run build
```

To run tests:

```bash 
npm test
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT
