> **[@directus/sdk-js](../README.md)**

[Globals](../README.md) / ["API"](../modules/_api_.md) / [API](_api_.api.md) /

# Class: API

API definition for HTTP transactions

**`uses`** Authentication

**`uses`** axios

**`author`** Jan Biasi <biasijan@gmail.com>

## Hierarchy

* **API**

## Implements

* [IAPI](../interfaces/_api_.iapi.md)

### Index

#### Constructors

* [constructor](_api_.api.md#constructor)

#### Properties

* [auth](_api_.api.md#auth)
* [concurrent](_api_.api.md#concurrent)
* [config](_api_.api.md#private-config)
* [xhr](_api_.api.md#xhr)

#### Methods

* [delete](_api_.api.md#delete)
* [get](_api_.api.md#get)
* [getPayload](_api_.api.md#getpayload)
* [patch](_api_.api.md#patch)
* [post](_api_.api.md#post)
* [put](_api_.api.md#put)
* [request](_api_.api.md#request)
* [reset](_api_.api.md#reset)

## Constructors

###  constructor

\+ **new API**(`config`: [IConfiguration](../interfaces/_configuration_.iconfiguration.md)): *[API](_api_.api.md)*

*Defined in [API.ts:91](https://github.com/direcuts/sdk-js/tree/master/API.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IConfiguration](../interfaces/_configuration_.iconfiguration.md) |

**Returns:** *[API](_api_.api.md)*

## Properties

###  auth

• **auth**: *[IAuthentication](../interfaces/_authentication_.iauthentication.md)*

*Implementation of [IAPI](../interfaces/_api_.iapi.md).[auth](../interfaces/_api_.iapi.md#auth)*

*Defined in [API.ts:89](https://github.com/direcuts/sdk-js/tree/master/API.ts#L89)*

___

###  concurrent

• **concurrent**: *`ReturnType<concurrencyManager>`*

*Implementation of [IAPI](../interfaces/_api_.iapi.md).[concurrent](../interfaces/_api_.iapi.md#concurrent)*

*Defined in [API.ts:91](https://github.com/direcuts/sdk-js/tree/master/API.ts#L91)*

___

### `Private` config

• **config**: *[IConfiguration](../interfaces/_configuration_.iconfiguration.md)*

*Defined in [API.ts:93](https://github.com/direcuts/sdk-js/tree/master/API.ts#L93)*

___

###  xhr

• **xhr**: *`AxiosInstance`*

*Implementation of [IAPI](../interfaces/_api_.iapi.md).[xhr](../interfaces/_api_.iapi.md#xhr)*

*Defined in [API.ts:90](https://github.com/direcuts/sdk-js/tree/master/API.ts#L90)*

## Methods

###  delete

▸ **delete**<**T**>(`endpoint`: string): *`Promise<T>`*

*Implementation of [IAPI](../interfaces/_api_.iapi.md)*

*Defined in [API.ts:165](https://github.com/direcuts/sdk-js/tree/master/API.ts#L165)*

DELETE convenience method. Calls the request method for you

**Type parameters:**

▪ **T**: *any*

response type

**Parameters:**

Name | Type |
------ | ------ |
`endpoint` | string |

**Returns:** *`Promise<T>`*

___

###  get

▸ **get**<**T**>(`endpoint`: string, `params`: object): *`Promise<T>`*

*Implementation of [IAPI](../interfaces/_api_.iapi.md)*

*Defined in [API.ts:129](https://github.com/direcuts/sdk-js/tree/master/API.ts#L129)*

GET convenience method. Calls the request method for you

**Type parameters:**

▪ **T**: *any*

response type

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`endpoint` | string | - |
`params` | object |  {} |

**Returns:** *`Promise<T>`*

___

###  getPayload

▸ **getPayload**<**T**>(): *`T`*

*Implementation of [IAPI](../interfaces/_api_.iapi.md)*

*Defined in [API.ts:174](https://github.com/direcuts/sdk-js/tree/master/API.ts#L174)*

Gets the payload of the current token, return type can be generic

**Type parameters:**

▪ **T**: *object*

extends object, payload type

**Returns:** *`T`*

___

###  patch

▸ **patch**<**T**>(`endpoint`: string, `body`: [BodyType](../modules/_schemes_http_body_.md#bodytype), `params`: object): *`Promise<T>`*

*Implementation of [IAPI](../interfaces/_api_.iapi.md)*

*Defined in [API.ts:147](https://github.com/direcuts/sdk-js/tree/master/API.ts#L147)*

PATCH convenience method. Calls the request method for you

**Type parameters:**

▪ **T**: *any*

response type

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`endpoint` | string | - |
`body` | [BodyType](../modules/_schemes_http_body_.md#bodytype) |  {} |
`params` | object |  {} |

**Returns:** *`Promise<T>`*

___

###  post

▸ **post**<**T**>(`endpoint`: string, `body`: [BodyType](../modules/_schemes_http_body_.md#bodytype), `params`: object): *`Promise<T>`*

*Implementation of [IAPI](../interfaces/_api_.iapi.md)*

*Defined in [API.ts:138](https://github.com/direcuts/sdk-js/tree/master/API.ts#L138)*

POST convenience method. Calls the request method for you

**Type parameters:**

▪ **T**: *any*

response type

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`endpoint` | string | - |
`body` | [BodyType](../modules/_schemes_http_body_.md#bodytype) |  {} |
`params` | object |  {} |

**Returns:** *`Promise<T>`*

___

###  put

▸ **put**<**T**>(`endpoint`: string, `body`: [BodyType](../modules/_schemes_http_body_.md#bodytype), `params`: object): *`Promise<T>`*

*Implementation of [IAPI](../interfaces/_api_.iapi.md)*

*Defined in [API.ts:156](https://github.com/direcuts/sdk-js/tree/master/API.ts#L156)*

PUT convenience method. Calls the request method for you

**Type parameters:**

▪ **T**: *any*

response type

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`endpoint` | string | - |
`body` | [BodyType](../modules/_schemes_http_body_.md#bodytype) |  {} |
`params` | object |  {} |

**Returns:** *`Promise<T>`*

___

###  request

▸ **request**<**T**>(`method`: [RequestMethod](../modules/_schemes_http_request_.md#requestmethod), `endpoint`: string, `params`: object, `data`: object, `noProject`: boolean, `headers`: object, `skipParseToJSON`: boolean): *`Promise<T>`*

*Defined in [API.ts:194](https://github.com/direcuts/sdk-js/tree/master/API.ts#L194)*

Perform an API request to the Directus API

**Type parameters:**

▪ **T**: *any*

Response type definition, defaults to `any`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`method` | [RequestMethod](../modules/_schemes_http_request_.md#requestmethod) | - | Selected HTTP method |
`endpoint` | string | - | Endpoint definition as path |
`params` | object |  {} | Query parameters |
`data` | object |  {} | Data passed to directus |
`noProject` | boolean | false | Do not include the `project` in the url (for system calls) |
`headers` | object |  {} | Optional headers to include |
`skipParseToJSON` | boolean | false | Whether to skip `JSON.parse` or not |

**Returns:** *`Promise<T>`*

___

###  reset

▸ **reset**(): *void*

*Implementation of [IAPI](../interfaces/_api_.iapi.md)*

*Defined in [API.ts:117](https://github.com/direcuts/sdk-js/tree/master/API.ts#L117)*

Resets the client instance by logging out and removing the URL and project

**Returns:** *void*