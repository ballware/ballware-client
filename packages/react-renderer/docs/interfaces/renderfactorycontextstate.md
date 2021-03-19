[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / RenderFactoryContextState

# Interface: RenderFactoryContextState

Context providing rendered items from render plugin

## Table of contents

### Properties

- [Application](renderfactorycontextstate.md#application)
- [ApplicationBar](renderfactorycontextstate.md#applicationbar)
- [Context](renderfactorycontextstate.md#context)
- [DeletePopup](renderfactorycontextstate.md#deletepopup)
- [DetailEditPopup](renderfactorycontextstate.md#detaileditpopup)
- [EditLayoutItem](renderfactorycontextstate.md#editlayoutitem)
- [EditPopup](renderfactorycontextstate.md#editpopup)
- [Editor](renderfactorycontextstate.md#editor)
- [ForeignEditPopup](renderfactorycontextstate.md#foreigneditpopup)
- [IframePopup](renderfactorycontextstate.md#iframepopup)
- [Navigation](renderfactorycontextstate.md#navigation)
- [Notification](renderfactorycontextstate.md#notification)
- [Page](renderfactorycontextstate.md#page)
- [PageLayoutItem](renderfactorycontextstate.md#pagelayoutitem)
- [PageToolbar](renderfactorycontextstate.md#pagetoolbar)
- [PageToolbarItem](renderfactorycontextstate.md#pagetoolbaritem)
- [PrivateRoute](renderfactorycontextstate.md#privateroute)
- [Routes](renderfactorycontextstate.md#routes)

## Properties

### Application

• `Optional` **Application**: (`props`: *PropsWithChildren*<[*ApplicationProps*](applicationprops.md)\>) => *Element*

Provide application window component

#### Type declaration:

▸ (`props`: *PropsWithChildren*<[*ApplicationProps*](applicationprops.md)\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<[*ApplicationProps*](applicationprops.md)\> |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:251](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L251)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:251](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L251)

___

### ApplicationBar

• `Optional` **ApplicationBar**: (`props`: *PropsWithChildren*<[*ApplicationBarProps*](applicationbarprops.md)\>) => *Element*

Provide main application bar component

#### Type declaration:

▸ (`props`: *PropsWithChildren*<[*ApplicationBarProps*](applicationbarprops.md)\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<[*ApplicationBarProps*](applicationbarprops.md)\> |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:256](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L256)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:256](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L256)

___

### Context

• `Optional` **Context**: (`props`: { `children?`: *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }) => *Element*

Provide context component with shared functionality for render plugin

#### Type declaration:

▸ (`props`: { `children?`: *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |
`props.children?` | *null* \| *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal* |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:246](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L246)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:246](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L246)

___

### DeletePopup

• `Optional` **DeletePopup**: (`props`: [*DeletePopupProps*](deletepopupprops.md)) => *Element*

Provide delete popup

#### Type declaration:

▸ (`props`: [*DeletePopupProps*](deletepopupprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*DeletePopupProps*](deletepopupprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:323](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L323)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:323](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L323)

___

### DetailEditPopup

• `Optional` **DetailEditPopup**: (`props`: [*DetailEditPopupProps*](detaileditpopupprops.md)) => *Element*

Provide detail edit popup

#### Type declaration:

▸ (`props`: [*DetailEditPopupProps*](detaileditpopupprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*DetailEditPopupProps*](detaileditpopupprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:333](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L333)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:333](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L333)

___

### EditLayoutItem

• `Optional` **EditLayoutItem**: (`props`: [*EditLayoutItemProps*](editlayoutitemprops.md)) => *Element*

Provide edit layout item

#### Type declaration:

▸ (`props`: [*EditLayoutItemProps*](editlayoutitemprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*EditLayoutItemProps*](editlayoutitemprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:298](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L298)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:298](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L298)

___

### EditPopup

• `Optional` **EditPopup**: (`props`: [*EditPopupProps*](editpopupprops.md)) => *Element*

Provide edit popup

#### Type declaration:

▸ (`props`: [*EditPopupProps*](editpopupprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*EditPopupProps*](editpopupprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:313](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L313)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:313](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L313)

___

### Editor

• `Optional` **Editor**: (`props`: [*EditorProps*](editorprops.md)) => *Element*

Provide editor component

#### Type declaration:

▸ (`props`: [*EditorProps*](editorprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*EditorProps*](editorprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:303](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L303)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:303](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L303)

___

### ForeignEditPopup

• `Optional` **ForeignEditPopup**: (`props`: [*ForeignEditPopupProps*](foreigneditpopupprops.md)) => *Element*

Provide foreign edit popup

#### Type declaration:

▸ (`props`: [*ForeignEditPopupProps*](foreigneditpopupprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*ForeignEditPopupProps*](foreigneditpopupprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:328](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L328)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:328](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L328)

___

### IframePopup

• `Optional` **IframePopup**: (`props`: [*IframePopupProps*](iframepopupprops.md)) => *Element*

Provide iframe popup

#### Type declaration:

▸ (`props`: [*IframePopupProps*](iframepopupprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*IframePopupProps*](iframepopupprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:318](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L318)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:318](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L318)

___

### Navigation

• `Optional` **Navigation**: (`props`: *PropsWithChildren*<[*NavigationProps*](navigationprops.md)\>) => *Element*

Provide navigation tree component

#### Type declaration:

▸ (`props`: *PropsWithChildren*<[*NavigationProps*](navigationprops.md)\>): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *PropsWithChildren*<[*NavigationProps*](navigationprops.md)\> |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:263](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L263)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:263](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L263)

___

### Notification

• `Optional` **Notification**: (`props`: {}) => *Element*

Provide notification component for display user notifications

#### Type declaration:

▸ (`props`: {}): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:278](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L278)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:278](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L278)

___

### Page

• `Optional` **Page**: (`props`: {}) => *Element*

Provide page component for displaying metadata page

#### Type declaration:

▸ (`props`: {}): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:283](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L283)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:283](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L283)

___

### PageLayoutItem

• `Optional` **PageLayoutItem**: (`props`: [*PageLayoutItemProps*](pagelayoutitemprops.md)) => *Element*

Provide page layout item

#### Type declaration:

▸ (`props`: [*PageLayoutItemProps*](pagelayoutitemprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*PageLayoutItemProps*](pagelayoutitemprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:293](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L293)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:293](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L293)

___

### PageToolbar

• `Optional` **PageToolbar**: (`props`: [*PageToolbarProps*](pagetoolbarprops.md)) => *Element*

Provide page toolbar component

#### Type declaration:

▸ (`props`: [*PageToolbarProps*](pagetoolbarprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*PageToolbarProps*](pagetoolbarprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:288](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L288)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:288](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L288)

___

### PageToolbarItem

• `Optional` **PageToolbarItem**: (`props`: [*PageToolbarItemProps*](pagetoolbaritemprops.md)) => *Element*

Provide page toolbar item component

#### Type declaration:

▸ (`props`: [*PageToolbarItemProps*](pagetoolbaritemprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*PageToolbarItemProps*](pagetoolbaritemprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:308](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L308)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:308](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L308)

___

### PrivateRoute

• `Optional` **PrivateRoute**: (`props`: [*PrivateRouteProps*](privaterouteprops.md)) => *Element*

Provide route component for restricted access

#### Type declaration:

▸ (`props`: [*PrivateRouteProps*](privaterouteprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*PrivateRouteProps*](privaterouteprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:268](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L268)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:268](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L268)

___

### Routes

• `Optional` **Routes**: (`props`: {}) => *Element*

Provide routes for router

#### Type declaration:

▸ (`props`: {}): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *object* |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:273](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L273)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:273](https://github.com/ballware/ballware-client/blob/88ab695/packages/react-renderer/src/renderfactorycontext.ts#L273)
