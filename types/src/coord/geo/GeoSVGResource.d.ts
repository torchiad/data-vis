import { SVGParserResultNamedItem } from 'zrender/src/tool/parseSVG';
import Group from 'zrender/src/graphic/Group';
import { HashMap } from 'zrender/src/core/util';
import BoundingRect from 'zrender/src/core/BoundingRect';
import { GeoResource, GeoSVGSourceInput } from './geoTypes';
import { GeoSVGRegion } from './Region';
export interface GeoSVGGraphicRecord {
    root: Group;
    boundingRect: BoundingRect;
    named: SVGParserResultNamedItem[];
}
export declare class GeoSVGResource implements GeoResource {
    readonly type = "geoSVG";
    private _mapName;
    private _parsedXML;
    private _firstGraphic;
    private _boundingRect;
    private _regions;
    private _regionsMap;
    private _usedGraphicMap;
    private _freedGraphics;
    constructor(mapName: string, svg: GeoSVGSourceInput);
    load(): {
        boundingRect: BoundingRect;
        regions: GeoSVGRegion[];
        regionsMap: HashMap<GeoSVGRegion, string | number>;
    };
    private _buildGraphic;
    /**
     * Consider:
     * (1) One graphic element can not be shared by different `geoView` running simultaneously.
     *     Notice, also need to consider multiple echarts instances share a `mapRecord`.
     * (2) Converting SVG to graphic elements is time consuming.
     * (3) In the current architecture, `load` should be called frequently to get boundingRect,
     *     and it is called without view info.
     * So we maintain graphic elements in this module, and enables `view` to use/return these
     * graphics from/to the pool with it's uid.
     */
    useGraphic(hostKey: string): GeoSVGGraphicRecord;
    freeGraphic(hostKey: string): void;
}