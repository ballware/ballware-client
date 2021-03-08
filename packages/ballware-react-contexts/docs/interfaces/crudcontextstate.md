[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / CrudContextState

# Interface: CrudContextState

Context for providing crud operations based parent meta entity context

## Hierarchy

* **CrudContextState**

## Table of contents

### Properties

- [add](crudcontextstate.md#add)
- [adding](crudcontextstate.md#adding)
- [close](crudcontextstate.md#close)
- [customEdit](crudcontextstate.md#customedit)
- [customEditFunction](crudcontextstate.md#customeditfunction)
- [customEditParam](crudcontextstate.md#customeditparam)
- [customEditing](crudcontextstate.md#customediting)
- [deleteing](crudcontextstate.md#deleteing)
- [drop](crudcontextstate.md#drop)
- [edit](crudcontextstate.md#edit)
- [editLayout](crudcontextstate.md#editlayout)
- [editing](crudcontextstate.md#editing)
- [fetchParams](crudcontextstate.md#fetchparams)
- [fetchedItems](crudcontextstate.md#fetcheditems)
- [isLoading](crudcontextstate.md#isloading)
- [item](crudcontextstate.md#item)
- [load](crudcontextstate.md#load)
- [refreshing](crudcontextstate.md#refreshing)
- [remove](crudcontextstate.md#remove)
- [save](crudcontextstate.md#save)
- [saveBatch](crudcontextstate.md#savebatch)
- [view](crudcontextstate.md#view)
- [viewing](crudcontextstate.md#viewing)

## Properties

### add

• `Optional` **add**: *undefined* \| (`editLayout`: *string*) => *void*

Add new item

**`param`** Edit layout to use for add operation

Defined in: [src/crudcontext.ts:94](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L94)

___

### adding

• `Optional` **adding**: *undefined* \| *boolean*

Adding current item

Defined in: [src/crudcontext.ts:47](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L47)

___

### close

• `Optional` **close**: *undefined* \| () => *void*

Cancel/close edit operation

Defined in: [src/crudcontext.ts:113](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L113)

___

### customEdit

• `Optional` **customEdit**: *undefined* \| (`customFunction`: EntityCustomFunction, `items?`: *CrudItem*[]) => *void*

Execute custom edit operation

**`param`** Selected custom function

**`param`** Selected items for edit operation (undefined if function type is 'add')

Defined in: [src/crudcontext.ts:145](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L145)

___

### customEditFunction

• `Optional` **customEditFunction**: *undefined* \| EntityCustomFunction

Function for current custom edit operation

Defined in: [src/crudcontext.ts:67](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L67)

___

### customEditParam

• `Optional` **customEditParam**: *unknown*

Prepared edit param for custom edit operation

Defined in: [src/crudcontext.ts:72](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L72)

___

### customEditing

• `Optional` **customEditing**: *undefined* \| *boolean*

Custom edit operation active

Defined in: [src/crudcontext.ts:62](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L62)

___

### deleteing

• `Optional` **deleteing**: *undefined* \| *boolean*

Deleting current item

Defined in: [src/crudcontext.ts:57](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L57)

___

### drop

• `Optional` **drop**: *undefined* \| (`id`: *string*) => *void*

Drop item

**`param`** Identifier of item to be dropped

Defined in: [src/crudcontext.ts:138](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L138)

___

### edit

• `Optional` **edit**: *undefined* \| (`id`: *string*, `editLayout`: *string*) => *void*

Edit item

**`param`** Identifier of item

**`param`** Edit layout to use for edit operation

Defined in: [src/crudcontext.ts:108](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L108)

___

### editLayout

• `Optional` **editLayout**: *undefined* \| *string*

Edit layout for current edit operation

Defined in: [src/crudcontext.ts:77](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L77)

___

### editing

• `Optional` **editing**: *undefined* \| *boolean*

Editing current item

Defined in: [src/crudcontext.ts:52](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L52)

___

### fetchParams

• `Optional` **fetchParams**: *undefined* \| *Record*<*string*, *string* \| *number* \| *boolean* \| (*string* \| *number* \| *boolean*)[]\>

Fetch params used for current item fetch

Defined in: [src/crudcontext.ts:27](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L27)

___

### fetchedItems

• `Optional` **fetchedItems**: *undefined* \| *CrudItem*[]

Fetched items from data provider

Defined in: [src/crudcontext.ts:32](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L32)

___

### isLoading

• `Optional` **isLoading**: *undefined* \| *boolean*

Currently fetching items

Defined in: [src/crudcontext.ts:22](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L22)

___

### item

• `Optional` **item**: *undefined* \| *CrudItem*

Current item for crud operations

Defined in: [src/crudcontext.ts:37](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L37)

___

### load

• `Optional` **load**: *undefined* \| (`params?`: *Record*<*string*, *string* \| *number* \| *boolean* \| (*string* \| *number* \| *boolean*)[]\>) => *void*

Fetch items

**`param`** Provided query params

Defined in: [src/crudcontext.ts:88](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L88)

___

### refreshing

• `Optional` **refreshing**: *undefined* \| *boolean*

Refresh after edit operation pending

Defined in: [src/crudcontext.ts:82](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L82)

___

### remove

• `Optional` **remove**: *undefined* \| (`id`: *string*) => *void*

Request remove item

**`param`** Identifier of item

Defined in: [src/crudcontext.ts:119](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L119)

___

### save

• `Optional` **save**: *undefined* \| (`item`: *CrudItem*) => *void*

Save changed/added item

**`param`** Edited item

Defined in: [src/crudcontext.ts:125](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L125)

___

### saveBatch

• `Optional` **saveBatch**: *undefined* \| (`items`: *CrudItem*[]) => *void*

Save changed/added multiple items

**`param`** Edited items

Defined in: [src/crudcontext.ts:132](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L132)

___

### view

• `Optional` **view**: *undefined* \| (`id`: *string*, `editLayout`: *string*) => *void*

View item

**`param`** Identifier of item

**`param`** Edit layout to use for view operation

Defined in: [src/crudcontext.ts:101](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L101)

___

### viewing

• `Optional` **viewing**: *undefined* \| *boolean*

Viewing current item

Defined in: [src/crudcontext.ts:42](https://github.com/frankball/ballware-react-contexts/blob/34223fb/src/crudcontext.ts#L42)
