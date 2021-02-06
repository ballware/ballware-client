[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaPickvalueApi

# Interface: MetaPickvalueApi

Interface for pickvalue operations

## Hierarchy

* **MetaPickvalueApi**

## Table of contents

### Properties

- [selectByValueForEntityAndField](metapickvalueapi.md#selectbyvalueforentityandfield)
- [selectListForEntityAndField](metapickvalueapi.md#selectlistforentityandfield)

## Properties

### selectByValueForEntityAndField

• **selectByValueForEntityAndField**: (`token`: *string*, `entity`: *string*, `field`: *string*) => (`value`: *string* \| *number*) => *Promise*<*Record*<*string*, *unknown*\>\>

Fetch single select list element for business object property

**`param`** Access token required for authentication

**`param`** Business object identifier

**`param`** Business object property

**`param`** Value requesting select list element

**`returns`** Promise containing single property value

Defined in: [pickvalue.ts:35](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/pickvalue.ts#L35)

___

### selectListForEntityAndField

• **selectListForEntityAndField**: (`token`: *string*, `entity`: *string*, `field`: *string*) => *Promise*<*Record*<*string*, *unknown*\>[]\>

Fetch select list for business object property possible values

**`param`** Access token required for authentication

**`param`** Business object identifier

**`param`** Business object property

**`returns`** Promise containing collection of possible property values

Defined in: [pickvalue.ts:20](https://github.com/frankball/ballware-meta-interface/blob/157bdb2/src/pickvalue.ts#L20)
