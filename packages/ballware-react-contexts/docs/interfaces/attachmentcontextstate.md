[@ballware/react-contexts](../README.md) / [Exports](../modules.md) / AttachmentContextState

# Interface: AttachmentContextState

Context for attachment files functionality

## Hierarchy

* **AttachmentContextState**

## Table of contents

### Properties

- [drop](attachmentcontextstate.md#drop)
- [fetch](attachmentcontextstate.md#fetch)
- [open](attachmentcontextstate.md#open)
- [upload](attachmentcontextstate.md#upload)

## Properties

### drop

• `Optional` **drop**: *undefined* \| (`id`: *string*, `fileName`: *string*) => *Promise*<*void*\>

Drop existing attachment

**`param`** Owner id

**`param`** Attachment file name from metadata

**`returns`** Promise resolving when drop has completed

Defined in: [src/attachmentcontext.ts:44](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/attachmentcontext.ts#L44)

___

### fetch

• `Optional` **fetch**: *undefined* \| (`id`: *string*) => *Promise*<*Record*<*string*, *unknown*\>[]\>

Fetch available attachments by owner id

**`param`** Owner id of attachments

**`returns`** Promise resolving available attachment metadata

Defined in: [src/attachmentcontext.ts:20](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/attachmentcontext.ts#L20)

___

### open

• `Optional` **open**: *undefined* \| (`id`: *string*, `fileName`: *string*) => *Promise*<*string*\>

Request download url for attachment

**`param`** Owner id

**`param`** Attachment file name from metadata

**`returns`** Promise resolving Url for download attachment file

Defined in: [src/attachmentcontext.ts:36](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/attachmentcontext.ts#L36)

___

### upload

• `Optional` **upload**: *undefined* \| (`id`: *string*, `file`: File) => *Promise*<*void*\>

Upload new attachment

**`param`** Owner id

**`param`** Attachment file

**`returns`** Promise resolving when upload has completed

Defined in: [src/attachmentcontext.ts:28](https://github.com/frankball/ballware-react-contexts/blob/db6431c/src/attachmentcontext.ts#L28)
