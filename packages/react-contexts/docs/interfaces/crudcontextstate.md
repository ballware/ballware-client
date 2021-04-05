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
- [exportItems](crudcontextstate.md#exportitems)
- [exporting](crudcontextstate.md#exporting)
- [fetchParams](crudcontextstate.md#fetchparams)
- [fetchedItems](crudcontextstate.md#fetcheditems)
- [importFile](crudcontextstate.md#importfile)
- [importItems](crudcontextstate.md#importitems)
- [importing](crudcontextstate.md#importing)
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

Defined in: [packages/react-contexts/src/crudcontext.ts:104](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L104)

Defined in: [packages/react-contexts/src/crudcontext.ts:104](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L104)

___

### adding

• `Optional` **adding**: *boolean*

Adding current item

Defined in: [packages/react-contexts/src/crudcontext.ts:47](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L47)

___

### close

• `Optional` **close**: () => *void*

Cancel/close edit operation

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:123](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L123)

Defined in: [packages/react-contexts/src/crudcontext.ts:123](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L123)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:155](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L155)

Defined in: [packages/react-contexts/src/crudcontext.ts:155](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L155)

___

### customEditFunction

• `Optional` **customEditFunction**: EntityCustomFunction

Function for current custom edit operation

Defined in: [packages/react-contexts/src/crudcontext.ts:67](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L67)

___

### customEditParam

• `Optional` **customEditParam**: *unknown*

Prepared edit param for custom edit operation

Defined in: [packages/react-contexts/src/crudcontext.ts:72](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L72)

___

### customEditing

• `Optional` **customEditing**: *boolean*

Custom edit operation active

Defined in: [packages/react-contexts/src/crudcontext.ts:62](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L62)

___

### deleteing

• `Optional` **deleteing**: *boolean*

Deleting current item

Defined in: [packages/react-contexts/src/crudcontext.ts:57](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L57)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:148](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L148)

Defined in: [packages/react-contexts/src/crudcontext.ts:148](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L148)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:118](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L118)

Defined in: [packages/react-contexts/src/crudcontext.ts:118](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L118)

___

### editLayout

• `Optional` **editLayout**: *string*

Edit layout for current edit operation

Defined in: [packages/react-contexts/src/crudcontext.ts:77](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L77)

___

### editing

• `Optional` **editing**: *boolean*

Editing current item

Defined in: [packages/react-contexts/src/crudcontext.ts:52](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L52)

___

### exportItems

• `Optional` **exportItems**: (`customFunction`: EntityCustomFunction, `items?`: *CrudItem*[]) => *Promise*<string\>

Export items

**`param`** Selected export function

**`param`** Selected items for export

**`returns`** Promise resolved with url to exported file

#### Type declaration:

▸ (`customFunction`: EntityCustomFunction, `items?`: *CrudItem*[]): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`customFunction` | EntityCustomFunction |
`items?` | *CrudItem*[] |

**Returns:** *Promise*<string\>

Defined in: [packages/react-contexts/src/crudcontext.ts:166](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L166)

Defined in: [packages/react-contexts/src/crudcontext.ts:166](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L166)

___

### exporting

• `Optional` **exporting**: *boolean*

Exporting items

Defined in: [packages/react-contexts/src/crudcontext.ts:87](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L87)

___

### fetchParams

• `Optional` **fetchParams**: QueryParams

Fetch params used for current item fetch

Defined in: [packages/react-contexts/src/crudcontext.ts:27](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L27)

___

### fetchedItems

• `Optional` **fetchedItems**: *CrudItem*[]

Fetched items from data provider

Defined in: [packages/react-contexts/src/crudcontext.ts:32](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L32)

___

### importFile

• `Optional` **importFile**: (`customFunction`: EntityCustomFunction, `file`: File) => *Promise*<void\>

Import file containing items with selected import function

**`param`** Selected import function

**`param`** Uploaded file to import

**`returns`** Promise resolved when import completed

#### Type declaration:

▸ (`customFunction`: EntityCustomFunction, `file`: File): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`customFunction` | EntityCustomFunction |
`file` | File |

**Returns:** *Promise*<void\>

Defined in: [packages/react-contexts/src/crudcontext.ts:185](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L185)

Defined in: [packages/react-contexts/src/crudcontext.ts:185](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L185)

___

### importItems

• `Optional` **importItems**: (`customFunction`: EntityCustomFunction) => *void*

Import items

**`param`** Selected import function

#### Type declaration:

▸ (`customFunction`: EntityCustomFunction): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`customFunction` | EntityCustomFunction |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:175](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L175)

Defined in: [packages/react-contexts/src/crudcontext.ts:175](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L175)

___

### importing

• `Optional` **importing**: *boolean*

Importing file

Defined in: [packages/react-contexts/src/crudcontext.ts:82](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L82)

___

### isLoading

• `Optional` **isLoading**: *boolean*

Currently fetching items

Defined in: [packages/react-contexts/src/crudcontext.ts:22](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L22)

___

### item

• `Optional` **item**: *CrudItem*

Current item for crud operations

Defined in: [packages/react-contexts/src/crudcontext.ts:37](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L37)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:98](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L98)

Defined in: [packages/react-contexts/src/crudcontext.ts:98](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L98)

___

### refreshing

• `Optional` **refreshing**: *boolean*

Refresh after edit operation pending

Defined in: [packages/react-contexts/src/crudcontext.ts:92](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L92)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:129](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L129)

Defined in: [packages/react-contexts/src/crudcontext.ts:129](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L129)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:135](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L135)

Defined in: [packages/react-contexts/src/crudcontext.ts:135](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L135)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:142](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L142)

Defined in: [packages/react-contexts/src/crudcontext.ts:142](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L142)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:111](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L111)

Defined in: [packages/react-contexts/src/crudcontext.ts:111](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L111)

___

### viewing

• `Optional` **viewing**: *boolean*

Viewing current item

Defined in: [packages/react-contexts/src/crudcontext.ts:42](https://github.com/ballware/ballware-client/blob/77ab18c/packages/react-contexts/src/crudcontext.ts#L42)
