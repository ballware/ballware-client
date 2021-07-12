[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / CrudContextState

# Interface: CrudContextState

Context for providing crud operations based parent meta entity context

## Table of contents

### Properties

- [add](crudcontextstate.md#add)
- [adding](crudcontextstate.md#adding)
- [close](crudcontextstate.md#close)
- [count](crudcontextstate.md#count)
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
- [fetchItemCount](crudcontextstate.md#fetchitemcount)
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

Defined in: [packages/react-contexts/src/crudcontext.ts:115](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L115)

Defined in: [packages/react-contexts/src/crudcontext.ts:115](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L115)

___

### adding

• `Optional` **adding**: *boolean*

Adding current item

Defined in: [packages/react-contexts/src/crudcontext.ts:52](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L52)

___

### close

• `Optional` **close**: () => *void*

Cancel/close edit operation

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:134](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L134)

Defined in: [packages/react-contexts/src/crudcontext.ts:134](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L134)

___

### count

• `Optional` **count**: (`params?`: QueryParams) => *void*

Count items to be fetched

**`param`** Provided query params

#### Type declaration:

▸ (`params?`: QueryParams): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`params?` | QueryParams |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:109](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L109)

Defined in: [packages/react-contexts/src/crudcontext.ts:109](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L109)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:167](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L167)

Defined in: [packages/react-contexts/src/crudcontext.ts:167](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L167)

___

### customEditFunction

• `Optional` **customEditFunction**: EntityCustomFunction

Function for current custom edit operation

Defined in: [packages/react-contexts/src/crudcontext.ts:72](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L72)

___

### customEditParam

• `Optional` **customEditParam**: *unknown*

Prepared edit param for custom edit operation

Defined in: [packages/react-contexts/src/crudcontext.ts:77](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L77)

___

### customEditing

• `Optional` **customEditing**: *boolean*

Custom edit operation active

Defined in: [packages/react-contexts/src/crudcontext.ts:67](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L67)

___

### deleteing

• `Optional` **deleteing**: *boolean*

Deleting current item

Defined in: [packages/react-contexts/src/crudcontext.ts:62](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L62)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:160](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L160)

Defined in: [packages/react-contexts/src/crudcontext.ts:160](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L160)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:129](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L129)

Defined in: [packages/react-contexts/src/crudcontext.ts:129](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L129)

___

### editLayout

• `Optional` **editLayout**: *string*

Edit layout for current edit operation

Defined in: [packages/react-contexts/src/crudcontext.ts:82](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L82)

___

### editing

• `Optional` **editing**: *boolean*

Editing current item

Defined in: [packages/react-contexts/src/crudcontext.ts:57](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L57)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:178](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L178)

Defined in: [packages/react-contexts/src/crudcontext.ts:178](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L178)

___

### exporting

• `Optional` **exporting**: *boolean*

Exporting items

Defined in: [packages/react-contexts/src/crudcontext.ts:92](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L92)

___

### fetchItemCount

• `Optional` **fetchItemCount**: *number*

Count of items to be fetched

Defined in: [packages/react-contexts/src/crudcontext.ts:37](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L37)

___

### fetchParams

• `Optional` **fetchParams**: QueryParams

Fetch params used for current item fetch

Defined in: [packages/react-contexts/src/crudcontext.ts:27](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L27)

___

### fetchedItems

• `Optional` **fetchedItems**: *CrudItem*[]

Fetched items from data provider

Defined in: [packages/react-contexts/src/crudcontext.ts:32](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L32)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:197](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L197)

Defined in: [packages/react-contexts/src/crudcontext.ts:197](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L197)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:187](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L187)

Defined in: [packages/react-contexts/src/crudcontext.ts:187](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L187)

___

### importing

• `Optional` **importing**: *boolean*

Importing file

Defined in: [packages/react-contexts/src/crudcontext.ts:87](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L87)

___

### isLoading

• `Optional` **isLoading**: *boolean*

Currently fetching items

Defined in: [packages/react-contexts/src/crudcontext.ts:22](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L22)

___

### item

• `Optional` **item**: *CrudItem*

Current item for crud operations

Defined in: [packages/react-contexts/src/crudcontext.ts:42](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L42)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:103](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L103)

Defined in: [packages/react-contexts/src/crudcontext.ts:103](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L103)

___

### refreshing

• `Optional` **refreshing**: *boolean*

Refresh after edit operation pending

Defined in: [packages/react-contexts/src/crudcontext.ts:97](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L97)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:140](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L140)

Defined in: [packages/react-contexts/src/crudcontext.ts:140](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L140)

___

### save

• `Optional` **save**: (`item`: *CrudItem*, `customFunction`: EntityCustomFunction) => *void*

Save changed/added item

**`param`** Edited item

**`param`** Custom edit function

#### Type declaration:

▸ (`item`: *CrudItem*, `customFunction`: EntityCustomFunction): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | *CrudItem* |
`customFunction` | EntityCustomFunction |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:147](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L147)

Defined in: [packages/react-contexts/src/crudcontext.ts:147](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L147)

___

### saveBatch

• `Optional` **saveBatch**: (`items`: *CrudItem*[], `customFunction`: EntityCustomFunction) => *void*

Save changed/added multiple items

**`param`** Edited items

**`param`** Custom edit function

#### Type declaration:

▸ (`items`: *CrudItem*[], `customFunction`: EntityCustomFunction): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`items` | *CrudItem*[] |
`customFunction` | EntityCustomFunction |

**Returns:** *void*

Defined in: [packages/react-contexts/src/crudcontext.ts:154](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L154)

Defined in: [packages/react-contexts/src/crudcontext.ts:154](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L154)

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

Defined in: [packages/react-contexts/src/crudcontext.ts:122](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L122)

Defined in: [packages/react-contexts/src/crudcontext.ts:122](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L122)

___

### viewing

• `Optional` **viewing**: *boolean*

Viewing current item

Defined in: [packages/react-contexts/src/crudcontext.ts:47](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-contexts/src/crudcontext.ts#L47)
