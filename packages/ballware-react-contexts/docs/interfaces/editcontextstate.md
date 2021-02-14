[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / EditContextState

# Interface: EditContextState

Context for functionality to edit a specific item

## Hierarchy

* **EditContextState**

## Table of contents

### Properties

- [editLayout](editcontextstate.md#editlayout)
- [functionIdentifier](editcontextstate.md#functionidentifier)
- [item](editcontextstate.md#item)
- [mode](editcontextstate.md#mode)
- [setItem](editcontextstate.md#setitem)

## Properties

### editLayout

• `Optional` **editLayout**: *undefined* \| EditLayout

Edit layout for rendering form

Defined in: [src/editcontext.ts:43](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/editcontext.ts#L43)

___

### functionIdentifier

• `Optional` **functionIdentifier**: *undefined* \| *string*

Function identifier when editing with custom function

Defined in: [src/editcontext.ts:53](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/editcontext.ts#L53)

___

### item

• `Optional` **item**: *undefined* \| *string* \| *number* \| *boolean* \| *CrudItem* \| *CrudItem*[] \| *Record*<*string*, *unknown*\> \| Date \| (*string* \| *number* \| *Record*<*string*, *unknown*\>)[] \| { `lat`: *number* ; `lng`: *number*  }

Edited item

Defined in: [src/editcontext.ts:48](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/editcontext.ts#L48)

___

### mode

• `Optional` **mode**: *undefined* \| [*VIEW*](../enums/editmodes.md#view) \| [*EDIT*](../enums/editmodes.md#edit) \| [*CREATE*](../enums/editmodes.md#create)

Current editing mode

Defined in: [src/editcontext.ts:38](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/editcontext.ts#L38)

___

### setItem

• `Optional` **setItem**: *undefined* \| (`item`: *undefined* \| *string* \| *number* \| *boolean* \| *CrudItem* \| *Record*<*string*, *unknown*\> \| Date \| (*string* \| *number* \| *Record*<*string*, *unknown*\>)[] \| { `lat`: *number* ; `lng`: *number*  }) => *void*

Replacing edited item

Defined in: [src/editcontext.ts:58](https://github.com/frankball/ballware-react-contexts/blob/85afb6f/src/editcontext.ts#L58)
