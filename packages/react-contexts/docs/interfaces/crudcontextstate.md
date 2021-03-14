[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / CrudContextState

# Interface: CrudContextState

Context for providing crud operations based parent meta entity context

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

• `Optional` **add**: (`editLayout`: *string*) => *void*

Add new item

**`param`** Edit layout to use for add operation

#### Type declaration:

▸ (`editLayout`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`editLayout` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:94](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L94)

Defined in: [packages/react-contexts/src/crudcontext.ts:94](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L94)

___

### adding

• `Optional` **adding**: *boolean*

Adding current item

Defined in: [packages/react-contexts/src/crudcontext.ts:47](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L47)

___

### close

• `Optional` **close**: () => *void*

Cancel/close edit operation

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:113](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L113)

Defined in: [packages/react-contexts/src/crudcontext.ts:113](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L113)

___

### customEdit

• `Optional` **customEdit**: (`customFunction`: EntityCustomFunction, `items?`: *CrudItem*[]) => *void*

Execute custom edit operation

**`param`** Selected custom function

**`param`** Selected items for edit operation (undefined if function type is 'add')

#### Type declaration:

▸ (`customFunction`: EntityCustomFunction, `items?`: *CrudItem*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`customFunction` | EntityCustomFunction |
`items?` | *CrudItem*[] |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:145](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L145)

Defined in: [packages/react-contexts/src/crudcontext.ts:145](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L145)

___

### customEditFunction

• `Optional` **customEditFunction**: EntityCustomFunction

Function for current custom edit operation

Defined in: [packages/react-contexts/src/crudcontext.ts:67](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L67)

___

### customEditParam

• `Optional` **customEditParam**: *unknown*

Prepared edit param for custom edit operation

Defined in: [packages/react-contexts/src/crudcontext.ts:72](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L72)

___

### customEditing

• `Optional` **customEditing**: *boolean*

Custom edit operation active

Defined in: [packages/react-contexts/src/crudcontext.ts:62](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L62)

___

### deleteing

• `Optional` **deleteing**: *boolean*

Deleting current item

Defined in: [packages/react-contexts/src/crudcontext.ts:57](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L57)

___

### drop

• `Optional` **drop**: (`id`: *string*) => *void*

Drop item

**`param`** Identifier of item to be dropped

#### Type declaration:

▸ (`id`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:138](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L138)

Defined in: [packages/react-contexts/src/crudcontext.ts:138](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L138)

___

### edit

• `Optional` **edit**: (`id`: *string*, `editLayout`: *string*) => *void*

Edit item

**`param`** Identifier of item

**`param`** Edit layout to use for edit operation

#### Type declaration:

▸ (`id`: *string*, `editLayout`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`editLayout` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:108](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L108)

Defined in: [packages/react-contexts/src/crudcontext.ts:108](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L108)

___

### editLayout

• `Optional` **editLayout**: *string*

Edit layout for current edit operation

Defined in: [packages/react-contexts/src/crudcontext.ts:77](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L77)

___

### editing

• `Optional` **editing**: *boolean*

Editing current item

Defined in: [packages/react-contexts/src/crudcontext.ts:52](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L52)

___

### fetchParams

• `Optional` **fetchParams**: QueryParams

Fetch params used for current item fetch

Defined in: [packages/react-contexts/src/crudcontext.ts:27](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L27)

___

### fetchedItems

• `Optional` **fetchedItems**: *CrudItem*[]

Fetched items from data provider

Defined in: [packages/react-contexts/src/crudcontext.ts:32](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L32)

___

### isLoading

• `Optional` **isLoading**: *boolean*

Currently fetching items

Defined in: [packages/react-contexts/src/crudcontext.ts:22](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L22)

___

### item

• `Optional` **item**: *CrudItem*

Current item for crud operations

Defined in: [packages/react-contexts/src/crudcontext.ts:37](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L37)

___

### load

• `Optional` **load**: (`params?`: QueryParams) => *void*

Fetch items

**`param`** Provided query params

#### Type declaration:

▸ (`params?`: QueryParams): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`params?` | QueryParams |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:88](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L88)

Defined in: [packages/react-contexts/src/crudcontext.ts:88](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L88)

___

### refreshing

• `Optional` **refreshing**: *boolean*

Refresh after edit operation pending

Defined in: [packages/react-contexts/src/crudcontext.ts:82](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L82)

___

### remove

• `Optional` **remove**: (`id`: *string*) => *void*

Request remove item

**`param`** Identifier of item

#### Type declaration:

▸ (`id`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:119](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L119)

Defined in: [packages/react-contexts/src/crudcontext.ts:119](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L119)

___

### save

• `Optional` **save**: (`item`: *CrudItem*) => *void*

Save changed/added item

**`param`** Edited item

#### Type declaration:

▸ (`item`: *CrudItem*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *CrudItem* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:125](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L125)

Defined in: [packages/react-contexts/src/crudcontext.ts:125](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L125)

___

### saveBatch

• `Optional` **saveBatch**: (`items`: *CrudItem*[]) => *void*

Save changed/added multiple items

**`param`** Edited items

#### Type declaration:

▸ (`items`: *CrudItem*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`items` | *CrudItem*[] |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:132](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L132)

Defined in: [packages/react-contexts/src/crudcontext.ts:132](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L132)

___

### view

• `Optional` **view**: (`id`: *string*, `editLayout`: *string*) => *void*

View item

**`param`** Identifier of item

**`param`** Edit layout to use for view operation

#### Type declaration:

▸ (`id`: *string*, `editLayout`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`editLayout` | *string* |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:101](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L101)

Defined in: [packages/react-contexts/src/crudcontext.ts:101](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L101)

___

### viewing

• `Optional` **viewing**: *boolean*

Viewing current item

Defined in: [packages/react-contexts/src/crudcontext.ts:42](https://github.com/ballware/ballware-client/blob/c28ad0b/packages/react-contexts/src/crudcontext.ts#L42)
