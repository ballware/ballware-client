[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / ScriptUtil

# Interface: ScriptUtil

Adapter for utilities available in custom scripts

## Table of contents

### Properties

- [beginOfLastYear](scriptutil.md#beginoflastyear)
- [beginOfYear](scriptutil.md#beginofyear)
- [dateToLocalDate](scriptutil.md#datetolocaldate)
- [endOfLastYear](scriptutil.md#endoflastyear)
- [endOfYear](scriptutil.md#endofyear)
- [geocodeAddress](scriptutil.md#geocodeaddress)
- [geocodeLocation](scriptutil.md#geocodelocation)
- [getJson](scriptutil.md#getjson)
- [getText](scriptutil.md#gettext)
- [localDateToDate](scriptutil.md#localdatetodate)
- [parse](scriptutil.md#parse)
- [stringify](scriptutil.md#stringify)
- [token](scriptutil.md#token)
- [uuid](scriptutil.md#uuid)
- [withAutocompleteList](scriptutil.md#withautocompletelist)
- [withLookupById](scriptutil.md#withlookupbyid)
- [withLookupList](scriptutil.md#withlookuplist)

## Properties

### beginOfLastYear

• **beginOfLastYear**: () => Date

Get date with first day of previous year

#### Type declaration:

▸ (): Date

**Returns:** Date

Defined in: [scriptutil.ts:66](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L66)

Defined in: [scriptutil.ts:66](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L66)

___

### beginOfYear

• **beginOfYear**: () => Date

Get date with first day of current year

#### Type declaration:

▸ (): Date

**Returns:** Date

Defined in: [scriptutil.ts:55](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L55)

Defined in: [scriptutil.ts:55](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L55)

___

### dateToLocalDate

• **dateToLocalDate**: (`date`: Date) => Date

Convert universal date to local date

#### Type declaration:

▸ (`date`: Date): Date

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |

**Returns:** Date

Defined in: [scriptutil.ts:45](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L45)

Defined in: [scriptutil.ts:45](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L45)

___

### endOfLastYear

• **endOfLastYear**: () => Date

Get Date with last day of previous year

#### Type declaration:

▸ (): Date

**Returns:** Date

Defined in: [scriptutil.ts:71](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L71)

Defined in: [scriptutil.ts:71](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L71)

___

### endOfYear

• **endOfYear**: () => Date

Get Date with last day of current year

#### Type declaration:

▸ (): Date

**Returns:** Date

Defined in: [scriptutil.ts:60](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L60)

Defined in: [scriptutil.ts:60](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L60)

___

### geocodeAddress

• **geocodeAddress**: (`address`: *string*, `callback`: (`location`: { `lat`: *number* ; `lng`: *number*  }) => *void*) => *void*

Find coordinates for adress

#### Type declaration:

▸ (`address`: *string*, `callback`: (`location`: { `lat`: *number* ; `lng`: *number*  }) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`address` | *string* |
`callback` | (`location`: { `lat`: *number* ; `lng`: *number*  }) => *void* |

**Returns:** *void*

Defined in: [scriptutil.ts:129](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L129)

Defined in: [scriptutil.ts:129](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L129)

___

### geocodeLocation

• **geocodeLocation**: (`location`: { `lat`: *number* ; `lng`: *number*  }, `callback`: (`addresses`: { `city?`: *string* ; `country?`: *string* ; `houseNumber?`: *string* ; `street?`: *string* ; `zipCode?`: *string*  }[]) => *void*) => *void*

Find adress for coordinates

#### Type declaration:

▸ (`location`: { `lat`: *number* ; `lng`: *number*  }, `callback`: (`addresses`: { `city?`: *string* ; `country?`: *string* ; `houseNumber?`: *string* ; `street?`: *string* ; `zipCode?`: *string*  }[]) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *object* |
`location.lat` | *number* |
`location.lng` | *number* |
`callback` | (`addresses`: { `city?`: *string* ; `country?`: *string* ; `houseNumber?`: *string* ; `street?`: *string* ; `zipCode?`: *string*  }[]) => *void* |

**Returns:** *void*

Defined in: [scriptutil.ts:137](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L137)

Defined in: [scriptutil.ts:137](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L137)

___

### getJson

• **getJson**: (`url`: *string*, `success`: (`response`: *unknown*) => *void*, `failure`: (`message`: *string*) => *void*) => *void*

Fetch JSON from url

#### Type declaration:

▸ (`url`: *string*, `success`: (`response`: *unknown*) => *void*, `failure`: (`message`: *string*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`success` | (`response`: *unknown*) => *void* |
`failure` | (`message`: *string*) => *void* |

**Returns:** *void*

Defined in: [scriptutil.ts:111](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L111)

Defined in: [scriptutil.ts:111](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L111)

___

### getText

• **getText**: (`url`: *string*, `success`: (`response`: *string*) => *void*, `failure`: (`message`: *string*) => *void*) => *void*

Fetch text from url

#### Type declaration:

▸ (`url`: *string*, `success`: (`response`: *string*) => *void*, `failure`: (`message`: *string*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`success` | (`response`: *string*) => *void* |
`failure` | (`message`: *string*) => *void* |

**Returns:** *void*

Defined in: [scriptutil.ts:120](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L120)

Defined in: [scriptutil.ts:120](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L120)

___

### localDateToDate

• **localDateToDate**: (`date`: Date) => Date

Convert local date to universal date

#### Type declaration:

▸ (`date`: Date): Date

#### Parameters:

Name | Type |
:------ | :------ |
`date` | Date |

**Returns:** Date

Defined in: [scriptutil.ts:50](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L50)

Defined in: [scriptutil.ts:50](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L50)

___

### parse

• **parse**: (`json`: *string*) => *Record*<string, unknown\> \| *Record*<string, unknown\>[]

Parse JSON to object

**`param`** String with serialized JSON

**`returns`** Deserialized object

#### Type declaration:

▸ (`json`: *string*): *Record*<string, unknown\> \| *Record*<string, unknown\>[]

#### Parameters:

Name | Type |
:------ | :------ |
`json` | *string* |

**Returns:** *Record*<string, unknown\> \| *Record*<string, unknown\>[]

Defined in: [scriptutil.ts:28](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L28)

Defined in: [scriptutil.ts:28](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L28)

___

### stringify

• **stringify**: (`json`: *Record*<string, unknown\> \| *Record*<string, unknown\>[]) => *string*

Stringify object to JSON

**`param`** object to serialize

**`returns`** String with serialized object

#### Type declaration:

▸ (`json`: *Record*<string, unknown\> \| *Record*<string, unknown\>[]): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`json` | *Record*<string, unknown\> \| *Record*<string, unknown\>[] |

**Returns:** *string*

Defined in: [scriptutil.ts:38](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L38)

Defined in: [scriptutil.ts:38](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L38)

___

### token

• **token**: () => *string*

Request current user access token

#### Type declaration:

▸ (): *string*

**Returns:** *string*

Defined in: [scriptutil.ts:15](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L15)

Defined in: [scriptutil.ts:15](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L15)

___

### uuid

• **uuid**: () => *string*

Generate new UUID

#### Type declaration:

▸ (): *string*

**Returns:** *string*

Defined in: [scriptutil.ts:20](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L20)

Defined in: [scriptutil.ts:20](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L20)

___

### withAutocompleteList

• **withAutocompleteList**: (`autocomplete`: *unknown*, `callback`: (`items`: *Record*<string, unknown\>[]) => *void*) => *void*

Fetch autocomplete list by definition

**`param`** Autocomplete definition object

**`param`** Callback function called with result

#### Type declaration:

▸ (`autocomplete`: *unknown*, `callback`: (`items`: *Record*<string, unknown\>[]) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`autocomplete` | *unknown* |
`callback` | (`items`: *Record*<string, unknown\>[]) => *void* |

**Returns:** *void*

Defined in: [scriptutil.ts:103](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L103)

Defined in: [scriptutil.ts:103](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L103)

___

### withLookupById

• **withLookupById**: (`lookup`: *unknown*, `id`: *string*, `callback`: (`item?`: *Record*<string, unknown\>) => *void*) => *void*

Fetch lookup single element by definition and id

**`param`** Lookup definition object

**`param`** Id of lookup element

**`param`** Callback function called with result

#### Type declaration:

▸ (`lookup`: *unknown*, `id`: *string*, `callback`: (`item?`: *Record*<string, unknown\>) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`lookup` | *unknown* |
`id` | *string* |
`callback` | (`item?`: *Record*<string, unknown\>) => *void* |

**Returns:** *void*

Defined in: [scriptutil.ts:91](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L91)

Defined in: [scriptutil.ts:91](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L91)

___

### withLookupList

• **withLookupList**: (`lookup`: *unknown*, `callback`: (`items`: *Record*<string, unknown\>[]) => *void*) => *void*

Fetch lookup select list by definition

**`param`** Lookup definition object

**`param`** Callback function called with result

#### Type declaration:

▸ (`lookup`: *unknown*, `callback`: (`items`: *Record*<string, unknown\>[]) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`lookup` | *unknown* |
`callback` | (`items`: *Record*<string, unknown\>[]) => *void* |

**Returns:** *void*

Defined in: [scriptutil.ts:79](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L79)

Defined in: [scriptutil.ts:79](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/scriptutil.ts#L79)
