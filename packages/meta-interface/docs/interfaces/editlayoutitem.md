[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / EditLayoutItem

# Interface: EditLayoutItem

Interface of edit layout item definition

## Table of contents

### Properties

- [colCount](editlayoutitem.md#colcount)
- [colSpan](editlayoutitem.md#colspan)
- [items](editlayoutitem.md#items)
- [options](editlayoutitem.md#options)
- [type](editlayoutitem.md#type)

## Properties

### colCount

• `Optional` **colCount**: *number*

Number of cols for layouting child editor items (only for container types)

Defined in: [entity.ts:240](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L240)

___

### colSpan

• `Optional` **colSpan**: *number*

Number of cols occupied by editor in layout

Defined in: [entity.ts:245](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L245)

___

### items

• `Optional` **items**: [*EditLayoutItem*](editlayoutitem.md)[]

Child editor components (only for container types)

Defined in: [entity.ts:250](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L250)

___

### options

• `Optional` **options**: [*EditLayoutItemOptions*](editlayoutitemoptions.md)

Options for editor component configuration

Defined in: [entity.ts:235](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L235)

___

### type

• **type**: *string*

Editor component type (specific for used rendering engine)

Defined in: [entity.ts:230](https://github.com/ballware/ballware-client/blob/cea3b48/packages/meta-interface/src/entity.ts#L230)
