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

• `Optional` **CrudProvider**: *undefined* \| (`props`: { `children`: *Element* \| *Element*[] ; `initialFetchParams`: *undefined* \| *Record*<*string*, *unknown*\> ; `query`: *undefined* \| *string*  }) => *Element*

Instanticate crud provider

Defined in: [src/providerfactorycontext.ts:36](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/providerfactorycontext.ts#L36)

___

### EditProvider

• `Optional` **EditProvider**: *undefined* \| (`props`: { `children`: *Element* \| *Element*[] ; `editLayout`: *undefined* \| EditLayout ; `functionIdentifier?`: *undefined* \| *string* ; `item`: *undefined* \| *string* \| *number* \| *boolean* \| *CrudItem* \| *CrudItem*[] \| *Record*<*string*, *unknown*\> \| Date \| (*string* \| *number* \| *Record*<*string*, *unknown*\>)[] \| { `lat`: *number* ; `lng`: *number*  } ; `mode`: [*EditModes*](../enums/editmodes.md)  }) => *Element*

Instantiate item edit provider

Defined in: [src/providerfactorycontext.ts:69](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/providerfactorycontext.ts#L69)

___

### LookupProvider

• `Optional` **LookupProvider**: *undefined* \| (`props`: { `children`: *Element* \| *Element*[]  }) => *Element*

Instanticate lookup provider

Defined in: [src/providerfactorycontext.ts:45](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/providerfactorycontext.ts#L45)

___

### MetaProvider

• `Optional` **MetaProvider**: *undefined* \| (`props`: { `children`: *Element* \| *Element*[] ; `entity`: *string* ; `headParams`: *Record*<*string*, *unknown*\> ; `initialCustomParam`: *Record*<*string*, *unknown*\> ; `readOnly`: *boolean*  }) => *Element*

Instantiate generic entity metadata provider

Defined in: [src/providerfactorycontext.ts:25](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/providerfactorycontext.ts#L25)

___

### NotificationProvider

• `Optional` **NotificationProvider**: *undefined* \| (`props`: { `children`: *Element* \| *Element*[]  }) => *Element*

Instantiate notification provider

Defined in: [src/providerfactorycontext.ts:50](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/providerfactorycontext.ts#L50)

___

### PageProvider

• `Optional` **PageProvider**: *undefined* \| (`props`: { `children`: *Element* \| *Element*[] ; `identifier`: *string*  }) => *Element*

Instantiate page provider

Defined in: [src/providerfactorycontext.ts:20](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/providerfactorycontext.ts#L20)

___

### ResourceOwnerRightsProvider

• `Optional` **ResourceOwnerRightsProvider**: *undefined* \| (`props`: { `children`: *Element* \| *Element*[] ; `client`: *string* ; `secret`: *string*  }) => *Element*

Instantiate resource owner user rights provider

Defined in: [src/providerfactorycontext.ts:55](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/providerfactorycontext.ts#L55)

___

### StatisticProvider

• `Optional` **StatisticProvider**: *undefined* \| (`props`: { `children`: *Element* \| *Element*[] ; `identifier`: *string* ; `params`: *undefined* \| *Record*<*string*, *unknown*\>  }) => *Element*

Instantiate statistic provider

Defined in: [src/providerfactorycontext.ts:80](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/providerfactorycontext.ts#L80)

___

### TenantProvider

• `Optional` **TenantProvider**: *undefined* \| (`props`: { `children`: *Element* \| *Element*[]  }) => *Element*

Instantiate tenant provider

Defined in: [src/providerfactorycontext.ts:64](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/providerfactorycontext.ts#L64)
