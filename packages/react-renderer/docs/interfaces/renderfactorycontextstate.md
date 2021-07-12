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
- [ImportPopup](renderfactorycontextstate.md#importpopup)
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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:262](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L262)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:262](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L262)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:267](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L267)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:267](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L267)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:257](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L257)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:257](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L257)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:334](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L334)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:334](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L334)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:344](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L344)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:344](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L344)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:309](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L309)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:309](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L309)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:324](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L324)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:324](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L324)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:314](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L314)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:314](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L314)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:339](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L339)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:339](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L339)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:329](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L329)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:329](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L329)

___

### ImportPopup

• `Optional` **ImportPopup**: (`props`: [*ImportPopupProps*](importpopupprops.md)) => *Element*

Import upload popup

#### Type declaration:

▸ (`props`: [*ImportPopupProps*](importpopupprops.md)): *Element*

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*ImportPopupProps*](importpopupprops.md) |

**Returns:** *Element*

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:349](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L349)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:349](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L349)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:274](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L274)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:274](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L274)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:289](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L289)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:289](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L289)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:294](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L294)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:294](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L294)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:304](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L304)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:304](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L304)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:299](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L299)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:299](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L299)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:319](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L319)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:319](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L319)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:279](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L279)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:279](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L279)

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

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:284](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L284)

Defined in: [packages/react-renderer/src/renderfactorycontext.ts:284](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/renderfactorycontext.ts#L284)
