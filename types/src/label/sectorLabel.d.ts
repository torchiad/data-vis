import { BuiltinTextPosition } from 'zrender/src/core/types';
import { ElementCalculateTextPosition } from 'zrender/src/Element';
import { Sector } from '../util/graphic';
export declare type SectorTextPosition = BuiltinTextPosition | 'startAngle' | 'insideStartAngle' | 'endAngle' | 'insideEndAngle' | 'middle' | 'startArc' | 'insideStartArc' | 'endArc' | 'insideEndArc' | (number | string)[];
export declare type SectorLike = {
    cx: number;
    cy: number;
    r0: number;
    r: number;
    startAngle: number;
    endAngle: number;
    clockwise: boolean;
};
export declare function createSectorCalculateTextPosition<T extends (string | (number | string)[])>(positionMapping: (seriesLabelPosition: T) => SectorTextPosition, opts?: {
    /**
     * If has round cap on two ends. If so, label should have an extra offset
     */
    isRoundCap?: boolean;
}): ElementCalculateTextPosition;
export declare function setSectorTextRotation<T extends (string | (number | string)[])>(sector: Sector, textPosition: T, positionMapping: (seriesLabelPosition: T) => SectorTextPosition, rotateType: number | 'auto'): void;
