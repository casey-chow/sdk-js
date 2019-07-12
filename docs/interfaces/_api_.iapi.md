> **[@directus/sdk-js](../README.md)**

[Globals](../README.md) / ["API"](../modules/_api_.md) / [IAPI](_api_.iapi.md) /

# Interface: IAPI

## Hierarchy

* **IAPI**

## Implemented by

* [API](../classes/_api_.api.md)

### Index

#### Properties

* [auth](_api_.iapi.md#auth)
* [concurrent](_api_.iapi.md#concurrent)
* [xhr](_api_.iapi.md#xhr)

#### Methods

* [delete](_api_.iapi.md#delete)
* [get](_api_.iapi.md#get)
* [getPayload](_api_.iapi.md#getpayload)
* [patch](_api_.iapi.md#patch)
* [post](_api_.iapi.md#post)
* [put](_api_.iapi.md#put)
* [request](_api_.iapi.md#request)
* [reset](_api_.iapi.md#reset)

## Properties

###  auth

• **auth**: *[IAuthentication](_authentication_.iauthentication.md)*

*Defined in [API.ts:19](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L19)*

___

###  concurrent

• **concurrent**: *`ReturnType<concurrencyManager>`*

*Defined in [API.ts:21](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L21)*

___

###  xhr

• **xhr**: *`AxiosInstance`*

*Defined in [API.ts:20](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L20)*

## Methods

###  delete

▸ **delete**<**T**>(`endpoint`: string): *`Promise<T>`*

*Defined in [API.ts:27](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L27)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`endpoint` | string |

**Returns:** *`Promise<T>`*

___

###  get

▸ **get**<**T**>(`endpoint`: string, `params?`: object): *`Promise<T>`*

*Defined in [API.ts:23](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L23)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`endpoint` | string |
`params?` | object |

**Returns:** *`Promise<T>`*

___

###  getPayload

▸ **getPayload**<**T**>(): *`T`*

*Defined in [API.ts:28](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L28)*

**Type parameters:**

▪ **T**: *object*

**Returns:** *`T`*

___

###  patch

▸ **patch**<**T**>(`endpoint`: string, `body?`: [BodyType](../modules/_schemes_http_body_.md#bodytype), `params?`: object): *`Promise<T>`*

*Defined in [API.ts:25](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L25)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`endpoint` | string |
`body?` | [BodyType](../modules/_schemes_http_body_.md#bodytype) |
`params?` | object |

**Returns:** *`Promise<T>`*

___

###  post

▸ **post**<**T**>(`endpoint`: string, `body?`: [BodyType](../modules/_schemes_http_body_.md#bodytype), `params?`: object): *`Promise<T>`*

*Defined in [API.ts:24](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L24)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`endpoint` | string |
`body?` | [BodyType](../modules/_schemes_http_body_.md#bodytype) |
`params?` | object |

**Returns:** *`Promise<T>`*

___

###  put

▸ **put**<**T**>(`endpoint`: string, `body?`: [BodyType](../modules/_schemes_http_body_.md#bodytype), `params?`: object): *`Promise<T>`*

*Defined in [API.ts:26](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L26)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`endpoint` | string |
`body?` | [BodyType](../modules/_schemes_http_body_.md#bodytype) |
`params?` | object |

**Returns:** *`Promise<T>`*

___

###  request

▸ **request**<**T**>(`method`: [RequestMethod](../modules/_schemes_http_request_.md#requestmethod), `endpoint`: string, `params?`: object, `data?`: object, `noEnv?`: boolean, `headers?`: object, `skipParseToJSON?`: boolean): *`Promise<T>`*

*Defined in [API.ts:29](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L29)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [RequestMethod](../modules/_schemes_http_request_.md#requestmethod) |
`endpoint` | string |
`params?` | object |
`data?` | object |
`noEnv?` | boolean |
`headers?` | object |
`skipParseToJSON?` | boolean |

**Returns:** *`Promise<T>`*

___

###  reset

▸ **reset**(): *void*

*Defined in [API.ts:22](https://github.com/janbiasi/sdk-js/blob/6d04a0b/src/API.ts#L22)*

**Returns:** *void*