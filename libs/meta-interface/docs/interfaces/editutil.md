[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / EditUtil

# Interface: EditUtil

Adapter for accessing editor objects in custom scripts

## Table of contents

### Properties

- [getEditorOption](editutil.md#geteditoroption)
- [setEditorOption](editutil.md#seteditoroption)

## Properties

### getEditorOption

• **getEditorOption**: (`dataMember`: *string*, `option`: *string*) => *unknown*

Get editor option by data member

**`param`** Data member in business object the editor is attached to

**`param`** Editor specific option identifier

**`returns`** Value of option, undefined if option is not available

#### Type declaration:

▸ (`dataMember`: *string*, `option`: *string*): *unknown*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`option` | *string* |

**Returns:** *unknown*

Defined in: [lib/entity.ts:24](https://github.com/ballware/ballware-client/blob/c9efe3e/libs/meta-interface/src/lib/entity.ts#L24)

Defined in: [lib/entity.ts:24](https://github.com/ballware/ballware-client/blob/c9efe3e/libs/meta-interface/src/lib/entity.ts#L24)

___

### setEditorOption

• **setEditorOption**: (`dataMember`: *string*, `option`: *string*, `value`: *unknown*) => *void*

Set editor option value by data member

**`param`** Data member in business object the editor is attached to

**`param`** Editor specific option identifier

**`param`** New value of option

#### Type declaration:

▸ (`dataMember`: *string*, `option`: *string*, `value`: *unknown*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dataMember` | *string* |
`option` | *string* |
`value` | *unknown* |

**Returns:** *void*

Defined in: [lib/entity.ts:33](https://github.com/ballware/ballware-client/blob/c9efe3e/libs/meta-interface/src/lib/entity.ts#L33)

Defined in: [lib/entity.ts:33](https://github.com/ballware/ballware-client/blob/c9efe3e/libs/meta-interface/src/lib/entity.ts#L33)
