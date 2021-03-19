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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:70](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L70)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:70](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L70)

___

### children

• `Optional` **children**: *undefined* \| *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal* \| (`props`: *RouteChildrenProps*<{}, unknown\>) => *undefined* \| *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*

Inherited from: void

Defined in: node_modules/@types/react-router/index.d.ts:93

___

### component

• `Optional` **component**: *ComponentType*<RouteComponentProps<any, StaticContext, unknown\>\> \| *ComponentType*<any\>

Inherited from: void

Defined in: node_modules/@types/react-router/index.d.ts:91

___

### exact

• `Optional` **exact**: *boolean*

Inherited from: void

Defined in: node_modules/@types/react-router/index.d.ts:95

___

### location

• `Optional` **location**: *Location*<unknown\>

Inherited from: void

Defined in: node_modules/@types/react-router/index.d.ts:90

___

### path

• `Optional` **path**: *string* \| *string*[]

Inherited from: void

Defined in: node_modules/@types/react-router/index.d.ts:94

___

### render

• `Optional` **render**: (`props`: *RouteComponentProps*<{}, StaticContext, unknown\>) => *undefined* \| *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*

#### Type declaration:

▸ (`props`: *RouteComponentProps*<{}, StaticContext, unknown\>): *undefined* \| *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *RouteComponentProps*<{}, StaticContext, unknown\> |

**Returns:** *undefined* \| *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*

Defined in: node_modules/@types/react-router/index.d.ts:92

Inherited from: void

Defined in: node_modules/@types/react-router/index.d.ts:92

___

### sensitive

• `Optional` **sensitive**: *boolean*

Inherited from: void

Defined in: node_modules/@types/react-router/index.d.ts:96

___

### strict

• `Optional` **strict**: *boolean*

Inherited from: void

Defined in: node_modules/@types/react-router/index.d.ts:97
