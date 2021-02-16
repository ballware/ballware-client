[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / EditLayoutItem

# Interface: EditLayoutItem

Interface of edit layout item definition

## Hierarchy

* **EditLayoutItem**

## Table of contents

### Properties

- [colCount](editlayoutitem.md#colcount)
- [colSpan](editlayoutitem.md#colspan)
- [items](editlayoutitem.md#items)
- [options](editlayoutitem.md#options)
- [type](editlayoutitem.md#type)

## Properties

### colCount

• `Optional` **colCount**: *undefined* \| *number*

Number of cols for layouting child editor items (only for container types)

Defined in: [entity.ts:213](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L213)

___

### colSpan

• `Optional` **colSpan**: *undefined* \| *number*

Number of cols occupied by editor in layout

Defined in: [entity.ts:218](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L218)

___

### items

• `Optional` **items**: *undefined* \| [*EditLayoutItem*](editlayoutitem.md)[]

Child editor components (only for container types)

Defined in: [entity.ts:223](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L223)

___

### options

• `Optional` **options**: *undefined* \| [*EditLayoutItemOptions*](editlayoutitemoptions.md)

Options for editor component configuration

Defined in: [entity.ts:208](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L208)

___

### type

• **type**: *string*

Editor component type (specific for used rendering engine)

Defined in: [entity.ts:203](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/entity.ts#L203)
