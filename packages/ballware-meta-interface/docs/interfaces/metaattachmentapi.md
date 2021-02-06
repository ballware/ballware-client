[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaAttachmentApi

# Interface: MetaAttachmentApi

Interface for owner specific attachments operations

## Hierarchy

* **MetaAttachmentApi**

## Table of contents

### Properties

- [open](metaattachmentapi.md#open)
- [queryByOwner](metaattachmentapi.md#querybyowner)
- [remove](metaattachmentapi.md#remove)
- [upload](metaattachmentapi.md#upload)

## Properties

### open

• **open**: (`token`: *string*, `owner`: *string*, `fileName`: *string*) => *Promise*<*string*\>

Fetch file url for display/download

**`param`** Access token required for authentication

**`param`** Identifier for owner

**`param`** File name from metadata

**`returns`** Promise with URL for download of file

Defined in: [attachment.ts:42](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/attachment.ts#L42)

___

### queryByOwner

• **queryByOwner**: (`token`: *string*, `owner`: *string*) => *Promise*<*Record*<*string*, *unknown*\>[]\>

Query list of attachments by owner

**`param`** Access token required for authentication

**`param`** Identifier for owner

**`returns`** Promise with list of attachment metadata belonging to owner

Defined in: [attachment.ts:19](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/attachment.ts#L19)

___

### remove

• **remove**: (`token`: *string*, `owner`: *string*, `fileName`: *string*) => *Promise*<*void*\>

Remove existing attachment

**`param`** Access token required for authentication

**`param`** Identifier for owner

**`param`** File name from metadata

**`returns`** Promise resolved when remove operation finished

Defined in: [attachment.ts:52](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/attachment.ts#L52)

___

### upload

• **upload**: (`token`: *string*, `owner`: *string*, `file`: File) => *Promise*<*void*\>

Upload new attachment

**`param`** Access token required for authentication

**`param`** Identifier for owner

**`param`** Uploaded file

**`returns`** Promise resolved when upload finished

Defined in: [attachment.ts:32](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/attachment.ts#L32)
