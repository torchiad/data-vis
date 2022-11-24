import ComponentModel from '../../model/Component';
import { AxisModelExtendedInCreator } from '../axisModelCreator';
import { AxisModelCommonMixin } from '../axisModelCommonMixin';
import ParallelAxis from './ParallelAxis';
import { ZRColor, ParsedValue } from '../../util/types';
import { AxisBaseOption } from '../axisCommonTypes';
import Parallel from './Parallel';
import { PathStyleProps } from 'zrender/src/graphic/Path';
export declare type ParallelActiveState = 'normal' | 'active' | 'inactive';
export declare type ParallelAxisInterval = number[];
declare type ParallelAreaSelectStyleKey = 'fill' | 'lineWidth' | 'stroke' | 'opacity';
export declare type ParallelAreaSelectStyleProps = Pick<PathStyleProps, ParallelAreaSelectStyleKey> & {
    width: number;
};
export declare type ParallelAxisOption = AxisBaseOption & {
    /**
     * 0, 1, 2, ...
     */
    dim?: number | number[];
    parallelIndex?: number;
    areaSelectStyle?: {
        width?: number;
        borderWidth?: number;
        borderColor?: ZRColor;
        color?: ZRColor;
        opacity?: number;
    };
    realtime?: boolean;
};
declare class ParallelAxisModel extends ComponentModel<ParallelAxisOption> {
    static type: 'baseParallelAxis';
    readonly type: "baseParallelAxis";
    axis: ParallelAxis;
    coordinateSystem: Parallel;
    /**
     * @readOnly
     */
    activeIntervals: ParallelAxisInterval[];
    getAreaSelectStyle(): ParallelAreaSelectStyleProps;
    /**
     * The code of this feature is put on AxisModel but not ParallelAxis,
     * because axisModel can be alive after echarts updating but instance of
     * ParallelAxis having been disposed. this._activeInterval should be kept
     * when action dispatched (i.e. legend click).
     *
     * @param intervals `interval.length === 0` means set all active.
     */
    setActiveIntervals(intervals: ParallelAxisInterval[]): void;
    /**
     * @param value When only attempting detect whether 'no activeIntervals set',
     *        `value` is not needed to be input.
     */
    getActiveState(value?: ParsedValue): ParallelActiveState;
}
interface ParallelAxisModel extends AxisModelCommonMixin<ParallelAxisOption>, AxisModelExtendedInCreator {
}
export default ParallelAxisModel;
