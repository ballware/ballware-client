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

Defined in: [src/crudcontext.ts:90](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L90)

___

### adding

• `Optional` **adding**: *undefined* \| *boolean*

Adding current item

Defined in: [src/crudcontext.ts:43](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L43)

___

### close

• `Optional` **close**: *undefined* \| () => *void*

Cancel/close edit operation

Defined in: [src/crudcontext.ts:109](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L109)

___

### customEdit

• `Optional` **customEdit**: *undefined* \| (`customFunction`: EntityCustomFunction, `items`: *CrudItem*[]) => *void*

Execute custom edit operation

**`param`** Selected custom function

**`param`** Selected items for edit operation

Defined in: [src/crudcontext.ts:140](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L140)

___

### customEditFunction

• `Optional` **customEditFunction**: *undefined* \| EntityCustomFunction

Function for current custom edit operation

Defined in: [src/crudcontext.ts:63](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L63)

___

### customEditParam

• `Optional` **customEditParam**: *unknown*

Prepared edit param for custom edit operation

Defined in: [src/crudcontext.ts:68](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L68)

___

### customEditing

• `Optional` **customEditing**: *undefined* \| *boolean*

Custom edit operation active

Defined in: [src/crudcontext.ts:58](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L58)

___

### deleteing

• `Optional` **deleteing**: *undefined* \| *boolean*

Deleting current item

Defined in: [src/crudcontext.ts:53](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L53)

___

### drop

• `Optional` **drop**: *undefined* \| (`id`: *string*) => *void*

Drop item

**`param`** Identifier of item to be dropped

Defined in: [src/crudcontext.ts:133](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L133)

___

### edit

• `Optional` **edit**: *undefined* \| (`id`: *string*, `editLayout`: *string*) => *void*

Edit item

**`param`** Identifier of item

**`param`** Edit layout to use for edit operation

Defined in: [src/crudcontext.ts:104](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L104)

___

### editLayout

• `Optional` **editLayout**: *undefined* \| *string*

Edit layout for current edit operation

Defined in: [src/crudcontext.ts:73](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L73)

___

### editing

• `Optional` **editing**: *undefined* \| *boolean*

Editing current item

Defined in: [src/crudcontext.ts:48](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L48)

___

### fetchParams

• `Optional` **fetchParams**: *undefined* \| *Record*<*string*, *string* \| *number* \| *boolean* \| (*string* \| *number* \| *boolean*)[]\>

Fetch params used for current item fetch

Defined in: [src/crudcontext.ts:23](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L23)

___

### fetchedItems

• `Optional` **fetchedItems**: *undefined* \| *CrudItem*[]

Fetched items from data provider

Defined in: [src/crudcontext.ts:28](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L28)

___

### isLoading

• `Optional` **isLoading**: *undefined* \| *boolean*

Currently fetching items

Defined in: [src/crudcontext.ts:18](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L18)

___

### item

• `Optional` **item**: *undefined* \| *CrudItem*

Current item for crud operations

Defined in: [src/crudcontext.ts:33](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L33)

___

### load

• `Optional` **load**: *undefined* \| (`params?`: *Record*<*string*, *string* \| *number* \| *boolean* \| (*string* \| *number* \| *boolean*)[]\>) => *void*

Fetch items

**`param`** Provided query params

Defined in: [src/crudcontext.ts:84](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L84)

___

### refreshing

• `Optional` **refreshing**: *undefined* \| *boolean*

Refresh after edit operation pending

Defined in: [src/crudcontext.ts:78](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L78)

___

### remove

• `Optional` **remove**: *undefined* \| (`id`: *string*) => *void*

Request remove item

**`param`** Identifier of item

Defined in: [src/crudcontext.ts:115](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L115)

___

### save

• `Optional` **save**: *undefined* \| (`item`: *CrudItem*) => *void*

Save changed/added item

**`param`** Edited item

Defined in: [src/crudcontext.ts:121](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L121)

___

### saveBatch

• `Optional` **saveBatch**: *undefined* \| (`items`: *CrudItem*[]) => *void*

Save changed/added multiple items

**`param`** Edited items

Defined in: [src/crudcontext.ts:127](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L127)

___

### view

• `Optional` **view**: *undefined* \| (`id`: *string*, `editLayout`: *string*) => *void*

View item

**`param`** Identifier of item

**`param`** Edit layout to use for view operation

Defined in: [src/crudcontext.ts:97](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L97)

___

### viewing

• `Optional` **viewing**: *undefined* \| *boolean*

Viewing current item

Defined in: [src/crudcontext.ts:38](https://github.com/frankball/ballware-react-contexts/blob/3ab969c/src/crudcontext.ts#L38)
