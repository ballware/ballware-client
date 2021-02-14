[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / ProviderFactoryContextState

# Interface: ProviderFactoryContextState

Context for instantiating context provider

## Hierarchy

* **ProviderFactoryContextState**

## Table of contents

### Properties

- [CrudProvider](providerfactorycontextstate.md#crudprovider)
- [EditProvider](providerfactorycontextstate.md#editprovider)
- [LookupProvider](providerfactorycontextstate.md#lookupprovider)
- [MetaProvider](providerfactorycontextstate.md#metaprovider)
- [NotificationProvider](providerfactorycontextstate.md#notificationprovider)
- [PageProvider](providerfactorycontextstate.md#pageprovider)
- [ResourceOwnerRightsProvider](providerfactorycontextstate.md#resourceownerrightsprovider)
- [StatisticProvider](providerfactorycontextstate.md#statisticprovider)
- [TenantProvider](providerfactorycontextstate.md#tenantprovider)

## Properties

### CrudProvider

• `Optional` **CrudProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `initialFetchParams`: *undefined* \| *Record*<*string*, *unknown*\> ; `query`: *undefined* \| *string*  }\>) => *Element*

Instanticate crud provider

Defined in: [src/providerfactorycontext.ts:35](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/providerfactorycontext.ts#L35)

___

### EditProvider

• `Optional` **EditProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `editLayout`: *undefined* \| EditLayout ; `functionIdentifier?`: *undefined* \| *string* ; `item`: *undefined* \| *string* \| *number* \| *boolean* \| *CrudItem* \| *CrudItem*[] \| *Record*<*string*, *unknown*\> \| Date \| (*string* \| *number* \| *Record*<*string*, *unknown*\>)[] \| { `lat`: *number* ; `lng`: *number*  } ; `mode`: [*EditModes*](../enums/editmodes.md)  }\>) => *Element*

Instantiate item edit provider

Defined in: [src/providerfactorycontext.ts:66](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/providerfactorycontext.ts#L66)

___

### LookupProvider

• `Optional` **LookupProvider**: *undefined* \| (`props`: { `children?`: ReactNode  }) => *Element*

Instanticate lookup provider

Defined in: [src/providerfactorycontext.ts:43](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/providerfactorycontext.ts#L43)

___

### MetaProvider

• `Optional` **MetaProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `entity`: *string* ; `headParams`: *Record*<*string*, *unknown*\> ; `initialCustomParam`: *Record*<*string*, *unknown*\> ; `readOnly`: *boolean*  }\>) => *Element*

Instantiate generic entity metadata provider

Defined in: [src/providerfactorycontext.ts:25](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/providerfactorycontext.ts#L25)

___

### NotificationProvider

• `Optional` **NotificationProvider**: *undefined* \| (`props`: { `children?`: ReactNode  }) => *Element*

Instantiate notification provider

Defined in: [src/providerfactorycontext.ts:48](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/providerfactorycontext.ts#L48)

___

### PageProvider

• `Optional` **PageProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `identifier`: *string*  }\>) => *Element*

Instantiate page provider

Defined in: [src/providerfactorycontext.ts:20](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/providerfactorycontext.ts#L20)

___

### ResourceOwnerRightsProvider

• `Optional` **ResourceOwnerRightsProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `client`: *string* ; `secret`: *string*  }\>) => *Element*

Instantiate resource owner user rights provider

Defined in: [src/providerfactorycontext.ts:53](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/providerfactorycontext.ts#L53)

___

### StatisticProvider

• `Optional` **StatisticProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `identifier`: *string* ; `params`: *undefined* \| *Record*<*string*, *unknown*\>  }\>) => *Element*

Instantiate statistic provider

Defined in: [src/providerfactorycontext.ts:76](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/providerfactorycontext.ts#L76)

___

### TenantProvider

• `Optional` **TenantProvider**: *undefined* \| (`props`: { `children`: *Element* \| *Element*[]  }) => *Element*

Instantiate tenant provider

Defined in: [src/providerfactorycontext.ts:61](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/providerfactorycontext.ts#L61)
