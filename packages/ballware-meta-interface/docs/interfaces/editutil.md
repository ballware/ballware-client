[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / EditUtil

# Interface: EditUtil

Adapter for accessing editor objects in custom scripts

## Hierarchy

* **EditUtil**

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

Defined in: [entity.ts:24](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L24)

___

### setEditorOption

• **setEditorOption**: (`dataMember`: *string*, `option`: *string*, `value`: *unknown*) => *void*

Set editor option value by data member

**`param`** Data member in business object the editor is attached to

**`param`** Editor specific option identifier

**`param`** New value of option

Defined in: [entity.ts:33](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/entity.ts#L33)
