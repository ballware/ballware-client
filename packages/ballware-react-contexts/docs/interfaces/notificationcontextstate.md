[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / NotificationContextState

# Interface: NotificationContextState

Context for triggering user notification functionality

## Hierarchy

* **NotificationContextState**

## Table of contents

### Properties

- [hide](notificationcontextstate.md#hide)
- [showError](notificationcontextstate.md#showerror)
- [showInfo](notificationcontextstate.md#showinfo)
- [showWarning](notificationcontextstate.md#showwarning)

## Properties

### hide

• `Optional` **hide**: *undefined* \| () => *void*

Hide current shown user notification

Defined in: [src/notificationcontext.ts:35](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/notificationcontext.ts#L35)

___

### showError

• `Optional` **showError**: *undefined* \| (`message`: *string*) => *void*

Show error message to user

**`param`** Message content or translation identifier

Defined in: [src/notificationcontext.ts:30](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/notificationcontext.ts#L30)

___

### showInfo

• `Optional` **showInfo**: *undefined* \| (`message`: *string*) => *void*

Show information message to user

**`param`** Message content or translation identifier

Defined in: [src/notificationcontext.ts:18](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/notificationcontext.ts#L18)

___

### showWarning

• `Optional` **showWarning**: *undefined* \| (`message`: *string*) => *void*

Show warning message to user

**`param`** Message content or translation identifier

Defined in: [src/notificationcontext.ts:24](https://github.com/frankball/ballware-react-contexts/blob/bbedef5/src/notificationcontext.ts#L24)
