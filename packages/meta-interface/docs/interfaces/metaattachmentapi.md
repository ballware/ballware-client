[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaAttachmentApi

# Interface: MetaAttachmentApi

Interface for owner specific attachments operations

## Table of contents

### Properties

- [open](metaattachmentapi.md#open)
- [queryByOwner](metaattachmentapi.md#querybyowner)
- [remove](metaattachmentapi.md#remove)
- [upload](metaattachmentapi.md#upload)

## Properties

### open

• **open**: (`token`: *string*, `owner`: *string*, `fileName`: *string*) => *Promise*<string\>

Fetch file url for display/download

**`param`** Access token required for authentication

**`param`** Identifier for owner

**`param`** File name from metadata

**`returns`** Promise with URL for download of file

#### Type declaration:

▸ (`token`: *string*, `owner`: *string*, `fileName`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`owner` | *string* |
`fileName` | *string* |

**Returns:** *Promise*<string\>

Defined in: [attachment.ts:42](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/attachment.ts#L42)

Defined in: [attachment.ts:42](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/attachment.ts#L42)

___

### queryByOwner

• **queryByOwner**: (`token`: *string*, `owner`: *string*) => *Promise*<Record<string, unknown\>[]\>

Query list of attachments by owner

**`param`** Access token required for authentication

**`param`** Identifier for owner

**`returns`** Promise with list of attachment metadata belonging to owner

#### Type declaration:

▸ (`token`: *string*, `owner`: *string*): *Promise*<Record<string, unknown\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`owner` | *string* |

**Returns:** *Promise*<Record<string, unknown\>[]\>

Defined in: [attachment.ts:19](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/attachment.ts#L19)

Defined in: [attachment.ts:19](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/attachment.ts#L19)

___

### remove

• **remove**: (`token`: *string*, `owner`: *string*, `fileName`: *string*) => *Promise*<void\>

Remove existing attachment

**`param`** Access token required for authentication

**`param`** Identifier for owner

**`param`** File name from metadata

**`returns`** Promise resolved when remove operation finished

#### Type declaration:

▸ (`token`: *string*, `owner`: *string*, `fileName`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`owner` | *string* |
`fileName` | *string* |

**Returns:** *Promise*<void\>

Defined in: [attachment.ts:52](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/attachment.ts#L52)

Defined in: [attachment.ts:52](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/attachment.ts#L52)

___

### upload

• **upload**: (`token`: *string*, `owner`: *string*, `file`: File) => *Promise*<void\>

Upload new attachment

**`param`** Access token required for authentication

**`param`** Identifier for owner

**`param`** Uploaded file

**`returns`** Promise resolved when upload finished

#### Type declaration:

▸ (`token`: *string*, `owner`: *string*, `file`: File): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |
`owner` | *string* |
`file` | File |

**Returns:** *Promise*<void\>

Defined in: [attachment.ts:32](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/attachment.ts#L32)

Defined in: [attachment.ts:32](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/attachment.ts#L32)
