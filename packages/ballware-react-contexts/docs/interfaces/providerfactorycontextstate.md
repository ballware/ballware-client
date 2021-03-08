[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / ProviderFactoryContextState

# Interface: ProviderFactoryContextState

Context for instantiating context provider

## Hierarchy

* **ProviderFactoryContextState**

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

• `Optional` **AttachmentProvider**: *undefined* \| (`props`: { `children?`: ReactNode  }) => *Element*

Instantiate attachment provider

Defined in: [src/providerfactorycontext.ts:39](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/providerfactorycontext.ts#L39)

___

### CrudProvider

• `Optional` **CrudProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `initialFetchParams`: *undefined* \| *Record*<*string*, *unknown*\> ; `query`: *undefined* \| *string*  }\>) => *Element*

Instanticate crud provider

Defined in: [src/providerfactorycontext.ts:44](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/providerfactorycontext.ts#L44)

___

### EditProvider

• `Optional` **EditProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `editLayout`: *undefined* \| EditLayout ; `functionIdentifier?`: *undefined* \| *string* ; `item`: *undefined* \| *string* \| *number* \| *boolean* \| *CrudItem* \| *CrudItem*[] \| *Record*<*string*, *unknown*\> \| Date \| (*string* \| *number* \| *Record*<*string*, *unknown*\>)[] \| { `lat`: *number* ; `lng`: *number*  } ; `mode`: [*EditModes*](../enums/editmodes.md)  }\>) => *Element*

Instantiate item edit provider

Defined in: [src/providerfactorycontext.ts:69](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/providerfactorycontext.ts#L69)

___

### LookupProvider

• `Optional` **LookupProvider**: *undefined* \| (`props`: { `children?`: ReactNode  }) => *Element*

Instanticate lookup provider

Defined in: [src/providerfactorycontext.ts:54](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/providerfactorycontext.ts#L54)

___

### MetaProvider

• `Optional` **MetaProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `entity`: *string* ; `headParams`: *Record*<*string*, *unknown*\> ; `initialCustomParam`: *Record*<*string*, *unknown*\> ; `readOnly`: *boolean*  }\>) => *Element*

Instantiate generic entity metadata provider

Defined in: [src/providerfactorycontext.ts:27](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/providerfactorycontext.ts#L27)

___

### NotificationProvider

• `Optional` **NotificationProvider**: *undefined* \| (`props`: { `children?`: ReactNode  }) => *Element*

Instantiate notification provider

Defined in: [src/providerfactorycontext.ts:59](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/providerfactorycontext.ts#L59)

___

### PageProvider

• `Optional` **PageProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `identifier`: *string*  }\>) => *Element*

Instantiate page provider

Defined in: [src/providerfactorycontext.ts:20](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/providerfactorycontext.ts#L20)

___

### StatisticProvider

• `Optional` **StatisticProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `identifier`: *string* ; `params`: *undefined* \| *Record*<*string*, *unknown*\>  }\>) => *Element*

Instantiate statistic provider

Defined in: [src/providerfactorycontext.ts:81](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/providerfactorycontext.ts#L81)

___

### TenantProvider

• `Optional` **TenantProvider**: *undefined* \| (`props`: { `children?`: ReactNode  }) => *Element*

Instantiate tenant provider

Defined in: [src/providerfactorycontext.ts:64](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/providerfactorycontext.ts#L64)
