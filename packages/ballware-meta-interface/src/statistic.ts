import { ScriptUtil } from './scriptutil';

export interface StatisticChartOptions {
  rotated?: boolean;
  argumentField: string;
  argumentAxis?: {
    argumentType: string;
    visualRangeFrom: number;
    visualRangeTo: number;
    tickIntervall: unknown;
    lines: Array<{ value: number; color: string; dashStyle: string; labelText: string }>;
  };
  valueAxis?: {
    lines: Array<{ value: number; color: string; dashStyle: string; labelText: string }>;
  };
  legend?: { title: string; horizontalAlignment: string; verticalAlignment: string };
  series: Array<{
    type: 'bar' | 'line';
    visible?: boolean;
    name: string;
    valueField: string;
    labelVisible?: boolean;
    format?: string;
    precision?: number;
  }>;
  verticalLines: Array<Record<string, unknown>>;
  horizontalLines: Array<Record<string, unknown>>;
}

export interface StatisticMapOptions {
  locationField: string;
  tooltipField: string;
}

export interface StatisticPivotOptions {
  showRowTotals?: boolean;
  showRowGrandTotals?: boolean;
  fields: Array<{
    caption: string;
    dataField: string;
    area?: 'row' | 'column' | 'data';
    dataType: string;
    groupInterval: string;
    summaryType: 'count' | 'sum';
    expanded?: boolean;
    showTotals?: boolean;
    showGrandTotals?: boolean;
    format?: string;
    precision?: number;
    width?: number;
  }>;
}

export interface StatisticLayout {
  type: 'chart' | 'map' | 'pivot';
  title?: string;
  height?: string;
  options: StatisticChartOptions | StatisticMapOptions | StatisticPivotOptions;
}

export interface CompiledStatisticCustomScripts {
  argumentAxisCustomizeText?: (
    layout: StatisticLayout,
    value: unknown,
    params: Record<string, unknown>,
    customParam: Record<string, unknown>,
    util: ScriptUtil,
  ) => string;
}

export interface CompiledStatistic {
  id: string;
  entity: string;
  identifier: string;
  name: string;
  layout?: StatisticLayout;
  mappingScript?: (
    data: Array<Record<string, unknown>>,
    layout: StatisticLayout,
    customParam: Record<string, unknown>,
    params: Record<string, unknown>,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    callback: (layout: StatisticLayout, data: Array<Record<string, unknown>>) => void,
  ) => void;
  customScripts?: CompiledStatisticCustomScripts;
}

export interface MetaStatisticApi {
  metadataForStatistic: (token: string, identifier: string) => Promise<CompiledStatistic>;
  dataForStatistic: (
    token: string,
    identifier: string,
    params: Record<string, unknown>,
  ) => Promise<Array<Record<string, unknown>>>;
}
