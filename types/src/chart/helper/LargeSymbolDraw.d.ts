import * as graphic from '../../util/graphic';
import SeriesData from '../../data/SeriesData';
import { StageHandlerProgressParams } from '../../util/types';
import { CoordinateSystemClipArea } from '../../coord/CoordinateSystem';
import Element from 'zrender/src/Element';
interface UpdateOpt {
    clipShape?: CoordinateSystemClipArea;
}
declare class LargeSymbolDraw {
    group: graphic.Group;
    private _newAdded;
    /**
     * Update symbols draw by new data
     */
    updateData(data: SeriesData, opt?: UpdateOpt): void;
    updateLayout(data: SeriesData): void;
    incrementalPrepareUpdate(data: SeriesData): void;
    incrementalUpdate(taskParams: StageHandlerProgressParams, data: SeriesData, opt: UpdateOpt): void;
    eachRendered(cb: (el: Element) => boolean | void): void;
    private _create;
    private _setCommon;
    remove(): void;
    private _clear;
}
export default LargeSymbolDraw;
