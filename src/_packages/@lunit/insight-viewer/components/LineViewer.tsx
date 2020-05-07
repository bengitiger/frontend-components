import polylabel from 'polylabel';
import React, { Component, createRef, CSSProperties, Fragment, RefObject } from 'react';
import styled from 'styled-components';
import { InsightViewerGuestProps } from '../hooks/useInsightViewerSync';
import { Contour, Point } from '../types';

export interface LineViewerProps<T extends Contour> extends InsightViewerGuestProps {
  width: number;
  height: number;

  /** Contour 데이터를 상속받은 Annotation 데이터 */
  contours: T[];

  /** Mouse Over 등 User Interaction에 의해서 Focus 된 Contour */
  focusedContour: T | null;

  /** <svg className={}> */
  className?: string;

  /** <svg style={}> */
  style?: CSSProperties;

  /**
   * Line에 외곽을 그려준다
   * Line을 두 개 그려서 border를 표현하기 때문에,성능에 민감한 상황인 경우 비활성 시킬 수 있다.
   */
  border?: boolean;
}

function toLocal(element: HTMLElement, polygon: Point[]): Point[] {
  return polygon.map(([x, y]) => {
    const p = cornerstone.pixelToCanvas(element, { x, y });
    return [p.x, p.y];
  });
}

export class LineViewerBase<T extends Contour> extends Component<LineViewerProps<T>, {}> {
  static defaultProps: Pick<LineViewerProps<Contour>, 'border'> = {
    border: true,
  };

  private svgRef: RefObject<SVGSVGElement> = createRef();

  render() {
    const { cornerstoneRenderData, contours, focusedContour } = this.props;

    return (
      <svg
        ref={this.svgRef}
        className={this.props.className}
        style={this.props.style}
        width={this.props.width}
        height={this.props.height}
      >
        {contours.length > 0 &&
          cornerstoneRenderData &&
          cornerstoneRenderData.element &&
          contours.map((contour) => {
            const polygon: number[][] = toLocal(cornerstoneRenderData.element, contour.polygon);
            const labelCenter: number[] = polylabel([polygon], 1);
            const focused: boolean = contour === focusedContour;
            const dataAttrs: { [attr: string]: string } = contour.dataAttrs || {};

            return (
              <Fragment key={'polygon' + contour.id}>
                {this.props.border === true && (
                  <polyline
                    {...dataAttrs}
                    data-border="border"
                    data-id={contour.id}
                    data-focused={focused || undefined}
                    points={polygon.map(([x, y]) => `${x},${y}`).join(' ')}
                  />
                )}
                <polyline
                  {...dataAttrs}
                  data-id={contour.id}
                  data-focused={focused || undefined}
                  points={polygon.map(([x, y]) => `${x},${y}`).join(' ')}
                />
                {this.props.border === true && (
                  <text
                    {...dataAttrs}
                    data-border="border"
                    data-id={contour.id}
                    data-focused={focused || undefined}
                    fontSize={14 * Math.max(1, cornerstoneRenderData.viewport.scale)}
                    x={labelCenter[0]}
                    y={labelCenter[1]}
                  >
                    {contour.label
                      ? typeof contour.label === 'function'
                        ? contour.label(contour)
                        : contour.label
                      : contour.id}
                  </text>
                )}
                <text
                  {...dataAttrs}
                  data-id={contour.id}
                  data-focused={focused || undefined}
                  fontSize={14 * Math.max(1, cornerstoneRenderData.viewport.scale)}
                  x={labelCenter[0]}
                  y={labelCenter[1]}
                >
                  {contour.label
                    ? typeof contour.label === 'function'
                      ? contour.label(contour)
                      : contour.label
                    : contour.id}
                </text>
              </Fragment>
            );
          })}
      </svg>
    );
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const LineViewer: new <T extends Contour>() => LineViewerBase<T> = styled(LineViewerBase)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;

  --color: #ffffff;
  --focused-color: rgb(255, 194, 17);
  --stroke-width: 3px;
  --focused-stroke-width: 6px;

  > polyline {
    stroke-width: var(--contour-viewer-stroke-width, var(--stroke-width));
    stroke: var(--contour-viewer-color, var(--color));
    transition: stroke 120ms ease-out, stroke-width 120ms ease-out;
    fill: transparent;

    &[data-focused] {
      stroke-width: var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width));
      stroke: var(--contour-viewer-focused-color, var(--focused-color));
    }

    &[data-border] {
      stroke-width: calc(var(--contour-viewer-stroke-width, var(--stroke-width)) + 2px);
      stroke: #000000;

      &[data-focused] {
        stroke-width: calc(var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width)) + 2px);
        stroke: #000000;
      }
    }
  }

  > text {
    fill: var(--contour-viewer-color, var(--color));
    font-family: proximanova, noto_sans, sans-serif;
    font-weight: 600;
    text-anchor: middle;
    dominant-baseline: central;
    transition: fill 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      fill: var(--contour-viewer-focused-color, var(--focused-color));
    }

    &[data-border] {
      stroke-width: 4px;
      stroke: #000000;
      fill: transparent;
    }
  }
` as any;
