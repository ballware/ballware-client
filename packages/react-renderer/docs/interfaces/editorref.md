[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / EditorRef

# Interface: EditorRef

Reference for edit layout item

## Table of contents

### Properties

- [getOption](editorref.md#getoption)
- [setOption](editorref.md#setoption)
- [validate](editorref.md#validate)

## Properties

### getOption

• **getOption**: (`option`: *string*) => *unknown*

Get option value from editor component

**`param`** Identifier of option

**`returns`** Current value of option

#### Type declaration:

▸ (`option`: *string*): *unknown*

#### Parameters:

Name | Type |
:------ | :------ |
`option` | *string* |

**Returns:** *unknown*

Defined in: [packages/react-renderer/src/common/editor.ts:24](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/editor.ts#L24)

Defined in: [packages/react-renderer/src/common/editor.ts:24](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/editor.ts#L24)

___

### setOption

• **setOption**: (`option`: *string*, `value`: *unknown*) => *void*

Set option value in editor component

**`param`** Identifier of option

**`param`** New value of option

#### Type declaration:

▸ (`option`: *string*, `value`: *unknown*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`option` | *string* |
`value` | *unknown* |

**Returns:** *void*

Defined in: [packages/react-renderer/src/common/editor.ts:17](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/editor.ts#L17)

Defined in: [packages/react-renderer/src/common/editor.ts:17](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/editor.ts#L17)

___

### validate

• **validate**: () => *boolean*

Trigger validation of editor

**`returns`** true if validation of current value passes

#### Type declaration:

▸ (): *boolean*

**Returns:** *boolean*

Defined in: [packages/react-renderer/src/common/editor.ts:30](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/editor.ts#L30)

Defined in: [packages/react-renderer/src/common/editor.ts:30](https://github.com/ballware/ballware-client/blob/5f55ce4/packages/react-renderer/src/common/editor.ts#L30)
