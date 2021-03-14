[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / PrivateRouteProps

# Interface: PrivateRouteProps

Properties for auth protected routes

## Hierarchy

* *RouteProps*

  ↳ **PrivateRouteProps**

## Table of contents

### Properties

- [allowed](privaterouteprops.md#allowed)
- [children](privaterouteprops.md#children)
- [component](privaterouteprops.md#component)
- [exact](privaterouteprops.md#exact)
- [location](privaterouteprops.md#location)
- [path](privaterouteprops.md#path)
- [render](privaterouteprops.md#render)
- [sensitive](privaterouteprops.md#sensitive)
- [strict](privaterouteprops.md#strict)

## Properties

### allowed

• **allowed**: () => *boolean*

Check if route is allowed to be accessed by authenticated user

**`returns`** true if access is allowed

#### Type declaration:

▸ (): *boolean*

**Returns:** *boolean*

Defined in: [libs/react-renderer/src/lib/renderfactorycontext.ts:70](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-renderer/src/lib/renderfactorycontext.ts#L70)

Defined in: [libs/react-renderer/src/lib/renderfactorycontext.ts:70](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-renderer/src/lib/renderfactorycontext.ts#L70)

___

### children

• `Optional` **children**: *string* \| *number* \| *boolean* \| {} \| *ReactElement*<any, string \| (`props`: *any*) => *ReactElement*<any, any\> \| (`props`: *any*) => *Component*<any, any, any\>\> \| *ReactNodeArray* \| *ReactPortal* \| (`props`: *RouteChildrenProps*<{}, unknown\>) => ReactNode

Defined in: node_modules/@types/react-router/index.d.ts:93

___

### component

• `Optional` **component**: *ComponentClass*<RouteComponentProps<any, StaticContext, unknown\>, any\> \| *FunctionComponent*<RouteComponentProps<any, StaticContext, unknown\>\> \| *ComponentClass*<any, any\> \| *FunctionComponent*<any\>

Defined in: node_modules/@types/react-router/index.d.ts:91

___

### exact

• `Optional` **exact**: *boolean*

Defined in: node_modules/@types/react-router/index.d.ts:95

___

### location

• `Optional` **location**: *Location*<unknown\>

Defined in: node_modules/@types/react-router/index.d.ts:90

___

### path

• `Optional` **path**: *string* \| *string*[]

Defined in: node_modules/@types/react-router/index.d.ts:94

___

### render

• `Optional` **render**: (`props`: *RouteComponentProps*<{}, StaticContext, unknown\>) => ReactNode

#### Type declaration:

▸ (`props`: *RouteComponentProps*<{}, StaticContext, unknown\>): ReactNode

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *RouteComponentProps*<{}, StaticContext, unknown\> |

**Returns:** ReactNode

Defined in: node_modules/@types/react-router/index.d.ts:92

Defined in: node_modules/@types/react-router/index.d.ts:92

___

### sensitive

• `Optional` **sensitive**: *boolean*

Defined in: node_modules/@types/react-router/index.d.ts:96

___

### strict

• `Optional` **strict**: *boolean*

Defined in: node_modules/@types/react-router/index.d.ts:97
