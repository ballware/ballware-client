[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / ProviderFactoryContextState

# Interface: ProviderFactoryContextState

Context for instantiating context provider

## Table of contents

### Properties

- [AttachmentProvider](providerfactorycontextstate.md#attachmentprovider)
- [CrudProvider](providerfactorycontextstate.md#crudprovider)
- [EditProvider](providerfactorycontextstate.md#editprovider)
- [LookupProvider](providerfactorycontextstate.md#lookupprovider)
- [MetaProvider](providerfactorycontextstate.md#metaprovider)
- [NotificationProvider](providerfactorycontextstate.md#notificationprovider)
- [PageProvider](providerfactorycontextstate.md#pageprovider)
- [StatisticProvider](providerfactorycontextstate.md#statisticprovider)
- [TenantProvider](providerfactorycontextstate.md#tenantprovider)

## Properties

### AttachmentProvider

• `Optional` **AttachmentProvider**: (`props`: { `children?`: *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }) => *Element*

Instantiate attachment provider

#### Type declaration:

▸ (`props`: { `children?`: *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |
`props.children?` | *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal* |

**Returns:** *Element*

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:39](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L39)

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:39](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L39)

___

### CrudProvider

• `Optional` **CrudProvider**: (`props`: *PropsWithChildren*<{ `initialFetchParams`: *undefined* \| *Record*<string, unknown\> ; `query`: *undefined* \| *string*  }\>) => *Element*

Instanticate crud provider

#### Type declaration:

▸ (`props`: *PropsWithChildren*<{ `initialFetchParams`: *undefined* \| *Record*<string, unknown\> ; `query`: *undefined* \| *string*  }\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<{ `initialFetchParams`: *undefined* \| *Record*<string, unknown\> ; `query`: *undefined* \| *string*  }\> |

**Returns:** *Element*

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:44](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L44)

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:44](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L44)

___

### EditProvider

• `Optional` **EditProvider**: (`props`: *PropsWithChildren*<{ `editFunction`: *undefined* \| EntityCustomFunction ; `editLayout`: *undefined* \| EditLayout ; `item`: *CrudItem* \| *CrudItem*[] \| ValueType ; `mode`: [*EditModes*](../enums/editmodes.md)  }\>) => *Element*

Instantiate item edit provider

#### Type declaration:

▸ (`props`: *PropsWithChildren*<{ `editFunction`: *undefined* \| EntityCustomFunction ; `editLayout`: *undefined* \| EditLayout ; `item`: *CrudItem* \| *CrudItem*[] \| ValueType ; `mode`: [*EditModes*](../enums/editmodes.md)  }\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<{ `editFunction`: *undefined* \| EntityCustomFunction ; `editLayout`: *undefined* \| EditLayout ; `item`: *CrudItem* \| *CrudItem*[] \| ValueType ; `mode`: [*EditModes*](../enums/editmodes.md)  }\> |

**Returns:** *Element*

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:69](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L69)

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:69](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L69)

___

### LookupProvider

• `Optional` **LookupProvider**: (`props`: { `children?`: *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }) => *Element*

Instanticate lookup provider

#### Type declaration:

▸ (`props`: { `children?`: *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |
`props.children?` | *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal* |

**Returns:** *Element*

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:54](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L54)

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:54](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L54)

___

### MetaProvider

• `Optional` **MetaProvider**: (`props`: *PropsWithChildren*<{ `entity`: *string* ; `headParams`: *Record*<string, unknown\> ; `initialCustomParam`: *Record*<string, unknown\> ; `readOnly`: *boolean*  }\>) => *Element*

Instantiate generic entity metadata provider

#### Type declaration:

▸ (`props`: *PropsWithChildren*<{ `entity`: *string* ; `headParams`: *Record*<string, unknown\> ; `initialCustomParam`: *Record*<string, unknown\> ; `readOnly`: *boolean*  }\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<{ `entity`: *string* ; `headParams`: *Record*<string, unknown\> ; `initialCustomParam`: *Record*<string, unknown\> ; `readOnly`: *boolean*  }\> |

**Returns:** *Element*

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:27](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L27)

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:27](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L27)

___

### NotificationProvider

• `Optional` **NotificationProvider**: (`props`: { `children?`: *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }) => *Element*

Instantiate notification provider

#### Type declaration:

▸ (`props`: { `children?`: *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |
`props.children?` | *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal* |

**Returns:** *Element*

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:59](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L59)

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:59](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L59)

___

### PageProvider

• `Optional` **PageProvider**: (`props`: *PropsWithChildren*<{ `identifier`: *string*  }\>) => *Element*

Instantiate page provider

#### Type declaration:

▸ (`props`: *PropsWithChildren*<{ `identifier`: *string*  }\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<{ `identifier`: *string*  }\> |

**Returns:** *Element*

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:20](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L20)

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:20](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L20)

___

### StatisticProvider

• `Optional` **StatisticProvider**: (`props`: *PropsWithChildren*<{ `identifier`: *string* ; `params`: *undefined* \| *Record*<string, unknown\>  }\>) => *Element*

Instantiate statistic provider

#### Type declaration:

▸ (`props`: *PropsWithChildren*<{ `identifier`: *string* ; `params`: *undefined* \| *Record*<string, unknown\>  }\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<{ `identifier`: *string* ; `params`: *undefined* \| *Record*<string, unknown\>  }\> |

**Returns:** *Element*

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:81](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L81)

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:81](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L81)

___

### TenantProvider

• `Optional` **TenantProvider**: (`props`: { `children?`: *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }) => *Element*

Instantiate tenant provider

#### Type declaration:

▸ (`props`: { `children?`: *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |
`props.children?` | *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal* |

**Returns:** *Element*

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:64](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L64)

Defined in: [packages/react-contexts/src/providerfactorycontext.ts:64](https://github.com/ballware/ballware-client/blob/d7ee5ae/packages/react-contexts/src/providerfactorycontext.ts#L64)
