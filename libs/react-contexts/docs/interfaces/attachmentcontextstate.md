[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / AttachmentContextState

# Interface: AttachmentContextState

Context for attachment files functionality

## Table of contents

### Properties

- [drop](attachmentcontextstate.md#drop)
- [fetch](attachmentcontextstate.md#fetch)
- [open](attachmentcontextstate.md#open)
- [upload](attachmentcontextstate.md#upload)

## Properties

### drop

• `Optional` **drop**: (`id`: *string*, `fileName`: *string*) => *Promise*<void\>

Drop existing attachment

**`param`** Owner id

**`param`** Attachment file name from metadata

**`returns`** Promise resolving when drop has completed

#### Type declaration:

▸ (`id`: *string*, `fileName`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`fileName` | *string* |

**Returns:** *Promise*<void\>

Defined in: [libs/react-contexts/src/lib/attachmentcontext.ts:43](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/attachmentcontext.ts#L43)

Defined in: [libs/react-contexts/src/lib/attachmentcontext.ts:43](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/attachmentcontext.ts#L43)

___

### fetch

• `Optional` **fetch**: (`id`: *string*) => *Promise*<Record<string, unknown\>[]\>

Fetch available attachments by owner id

**`param`** Owner id of attachments

**`returns`** Promise resolving available attachment metadata

#### Type declaration:

▸ (`id`: *string*): *Promise*<Record<string, unknown\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: [libs/react-contexts/src/lib/attachmentcontext.ts:19](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/attachmentcontext.ts#L19)

Defined in: [libs/react-contexts/src/lib/attachmentcontext.ts:19](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/attachmentcontext.ts#L19)

___

### open

• `Optional` **open**: (`id`: *string*, `fileName`: *string*) => *Promise*<string\>

Request download url for attachment

**`param`** Owner id

**`param`** Attachment file name from metadata

**`returns`** Promise resolving Url for download attachment file

#### Type declaration:

▸ (`id`: *string*, `fileName`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`fileName` | *string* |

**Returns:** *Promise*<string\>

Defined in: [libs/react-contexts/src/lib/attachmentcontext.ts:35](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/attachmentcontext.ts#L35)

Defined in: [libs/react-contexts/src/lib/attachmentcontext.ts:35](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/attachmentcontext.ts#L35)

___

### upload

• `Optional` **upload**: (`id`: *string*, `file`: File) => *Promise*<void\>

Upload new attachment

**`param`** Owner id

**`param`** Attachment file

**`returns`** Promise resolving when upload has completed

#### Type declaration:

▸ (`id`: *string*, `file`: File): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`file` | File |

**Returns:** *Promise*<void\>

Defined in: [libs/react-contexts/src/lib/attachmentcontext.ts:27](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/attachmentcontext.ts#L27)

Defined in: [libs/react-contexts/src/lib/attachmentcontext.ts:27](https://github.com/ballware/ballware-client/blob/61bbbf8/libs/react-contexts/src/lib/attachmentcontext.ts#L27)
