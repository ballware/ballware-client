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

• `Optional` **AttachmentProvider**: (`props`: { `children?`: *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }) => *Element*

Instantiate attachment provider

#### Type declaration:

▸ (`props`: { `children?`: *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |
`props.children?` | *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal* |

**Returns:** *Element*

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:39](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L39)

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:39](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L39)

___

### CrudProvider

• `Optional` **CrudProvider**: (`props`: *PropsWithChildren*<{ `initialFetchParams`: *Record*<string, unknown\> ; `query`: *string*  }\>) => *Element*

Instanticate crud provider

#### Type declaration:

▸ (`props`: *PropsWithChildren*<{ `initialFetchParams`: *Record*<string, unknown\> ; `query`: *string*  }\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<{ `initialFetchParams`: *Record*<string, unknown\> ; `query`: *string*  }\> |

**Returns:** *Element*

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:44](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L44)

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:44](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L44)

___

### EditProvider

• `Optional` **EditProvider**: (`props`: *PropsWithChildren*<{ `editLayout`: EditLayout ; `functionIdentifier?`: *string* ; `item`: *CrudItem* \| *CrudItem*[] \| ValueType ; `mode`: [*EditModes*](../enums/editmodes.md)  }\>) => *Element*

Instantiate item edit provider

#### Type declaration:

▸ (`props`: *PropsWithChildren*<{ `editLayout`: EditLayout ; `functionIdentifier?`: *string* ; `item`: *CrudItem* \| *CrudItem*[] \| ValueType ; `mode`: [*EditModes*](../enums/editmodes.md)  }\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<{ `editLayout`: EditLayout ; `functionIdentifier?`: *string* ; `item`: *CrudItem* \| *CrudItem*[] \| ValueType ; `mode`: [*EditModes*](../enums/editmodes.md)  }\> |

**Returns:** *Element*

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:69](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L69)

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:69](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L69)

___

### LookupProvider

• `Optional` **LookupProvider**: (`props`: { `children?`: *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }) => *Element*

Instanticate lookup provider

#### Type declaration:

▸ (`props`: { `children?`: *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |
`props.children?` | *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal* |

**Returns:** *Element*

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:54](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L54)

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:54](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L54)

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

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:27](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L27)

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:27](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L27)

___

### NotificationProvider

• `Optional` **NotificationProvider**: (`props`: { `children?`: *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }) => *Element*

Instantiate notification provider

#### Type declaration:

▸ (`props`: { `children?`: *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |
`props.children?` | *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal* |

**Returns:** *Element*

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:59](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L59)

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:59](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L59)

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

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:20](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L20)

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:20](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L20)

___

### StatisticProvider

• `Optional` **StatisticProvider**: (`props`: *PropsWithChildren*<{ `identifier`: *string* ; `params`: *Record*<string, unknown\>  }\>) => *Element*

Instantiate statistic provider

#### Type declaration:

▸ (`props`: *PropsWithChildren*<{ `identifier`: *string* ; `params`: *Record*<string, unknown\>  }\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<{ `identifier`: *string* ; `params`: *Record*<string, unknown\>  }\> |

**Returns:** *Element*

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:81](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L81)

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:81](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L81)

___

### TenantProvider

• `Optional` **TenantProvider**: (`props`: { `children?`: *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }) => *Element*

Instantiate tenant provider

#### Type declaration:

▸ (`props`: { `children?`: *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |
`props.children?` | *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal* |

**Returns:** *Element*

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:64](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L64)

Defined in: [libs/react-contexts/src/lib/providerfactorycontext.ts:64](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/providerfactorycontext.ts#L64)
