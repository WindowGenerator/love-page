import { Component } from "react";
import './heart-viewer.component.css';
import {HeartType} from "../types/heart-svg.type";

type Props = {
  type: HeartType,
  scale: number,
  color: string,
};

type Demension = {
  width: number,
  height: number,
  scale: number,
};

const STANDARD_DEMENSION = {
  width: 100,
  height: 100,
  scale: 1,
} as Demension;


export default class HeartSVG extends Component<Props>{
  constructor(props: Props) {
    super(props);
  }

  private getDimensionsByScale(srcDemension: Demension): Demension {
    const maxVar = (srcDemension.width >= srcDemension.height) ? srcDemension.width : srcDemension.height;

    const dstDemension: Demension = {
      width: (srcDemension.width / maxVar) * STANDARD_DEMENSION.width * srcDemension.scale,
      height: (srcDemension.height / maxVar)  * STANDARD_DEMENSION.height * srcDemension.scale,
      scale: srcDemension.scale / (maxVar / STANDARD_DEMENSION.width)
    };



    return dstDemension;
  }

  private classicHeart() {
    const dimensions = this.getDimensionsByScale({width: 475.528, height: 475.528, scale: this.props.scale});
    const scale = `scale(${dimensions.scale})`;
    
    return (
      <>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
          x="0px" 
          y="0px" 
          width={dimensions.width} 
          height={dimensions.height} 
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
          <g>
            <g transform={scale}>
              <path
                d="M237.376,436.245l0.774,0.976c210.94-85.154,292.221-282.553,199.331-367.706
                c-92.899-85.154-199.331,30.953-199.331,30.953h-0.774c0,0-106.44-116.107-199.331-30.953
                C-54.844,154.658,26.437,351.092,237.376,436.245z"
                style={{
                  fill: this.props.color,
                }}
              />
            </g>
          </g>
        </svg>
      </>
    )
  }

  private multiHeart() {
    const dimensions = this.getDimensionsByScale({width: 534, height: 526, scale: this.props.scale});
    const scale = `scale(${dimensions.scale})`;
    
    return (
      <>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          x="0px" 
          y="0px" 
          width={dimensions.width} 
          height={dimensions.height} 
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
          <g transform={scale}>
            <path 
              d="m417.221 3.47c-56.509 0.0527-105.7 35.891-139.78 77.469-13.191 16.094-39.574 
              48.283-39.574 48.283-0.22075-6.9693-0.65655-14.571-2-19.363-13.99-49.92-67-86.04-118.69-82.8-38.484 
              2.4-79.87 19.95-101.08 53.2-23.894 37.46-10.563 85.62 7.609 123.02 34.091 70.179 96.408 119.46 142.6 180.72 28.401 
              37.662 37.761 84.718 52.678 128.44-0.82385 12.896 10.965 13.298 6.5 2.0703-1.5325-21.48 6.0708-42.802 12.807-63.047 
              15.416-46.332 44.051-87.495 81.812-118.5 53.661-44.058 121.05-69.379 168.51-121.26 36.683-40.108 57.984-103.94 
              27.879-152.12-22.572-36.125-63.911-56.144-99.268-56.111z"
              style={{
                fill: this.props.color,
              }}
            />
          </g>
        </svg>
      </>
    )
  }

  private emptyHeart() {
    const dimensions = this.getDimensionsByScale({width: 485.3, height: 485.3, scale: this.props.scale});
    const scale = `scale(${dimensions.scale})`;
    
    return (
      <>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          x="0px" 
          y="0px" 
          width={dimensions.width} 
          height={dimensions.height} 
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} 
        >
          <g>
            <g transform={scale}>
              <path 
                d="M349.6,28.95c-36.3,0-70.5,14.2-96.2,39.9l-10.6,10.6L232,68.65c-25.7-25.7-59.9-39.9-96.2-39.9
                c-36.2,0-70.3,14.1-96,39.8S0,128.35,0,164.65s14.2,70.4,39.9,96.1l190.5,190.5l0.4,0.4c3.3,3.3,7.7,4.9,12,4.9
                c4.4,0,8.8-1.7,12.1-5l190.5-190.5c25.7-25.7,39.9-59.8,39.9-96.1s-14.1-70.5-39.8-96.1C419.9,43.05,385.8,28.95,349.6,28.95z
                M421.2,236.75l-178.3,178.4L64.2,236.45c-19.2-19.2-29.8-44.7-29.9-71.9c0-27.1,10.5-52.6,29.7-71.8
                c19.2-19.1,44.7-29.7,71.7-29.7c27.2,0,52.7,10.6,72,29.9l22.9,22.9c6.4,6.4,17.8,6.4,24.3,0l22.8-22.8
                c19.2-19.2,44.8-29.8,71.9-29.8s52.6,10.6,71.8,29.8c19.2,19.2,29.8,44.7,29.7,71.9C451.1,192.05,440.5,217.55,421.2,236.75z"
                style={{
                  fill: this.props.color,
                }}
              />
            </g>
          </g>
        </svg>
      </>
    )
  }

  private pixelHeart() {
    const dimensions = this.getDimensionsByScale({width: 864, height: 864, scale: this.props.scale});
    const scale = `scale(${dimensions.scale})`;
    
    return (
      <>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
          x="0px" 
          y="0px" 
          width={dimensions.width} 
          height={dimensions.height} 
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
            <g transform={scale}>
              <path d="M766.1,257.5c-8.2-8.5-24.7-1.8-37.8-3c-0.3,0-0.9,0-1.2,0c-7.9,0.9-11.6-1.8-11.3-10.4
                c0.6-10.7-0.3-21.6,0.3-32.3c0.3-7.3-2.4-9.5-9.5-9.1c-11.3,0.3-22.6-0.3-33.8,0.3c-6.4,0.3-8.8-2.1-8.5-8.5
                c0.3-11.3,0-22.6,0.3-33.8c0.3-6.7-2.1-9.5-9.1-9.5c-46,0.3-92.1,0.3-137.8,0c-7.6,0-9.1,3-8.8,9.8c0.3,11.3,0,22.6,0.3,33.8
                c0.3,6.4-1.8,8.8-8.5,8.5c-9.8-0.3-19.8,0.3-29.9-0.3s-14.9,1.8-14,13.1c0.9,9.8,0,19.8,0.3,29.9c0.3,6.7-1.8,9.8-9.1,9.5
                c-10.7-0.6-21.6-0.6-32.3,0c-7.6,0.3-10.7-2.1-10.1-9.8c0.6-10.7,0-21.6,0.3-32.3c0.3-7.6-2.4-10.4-10.1-10.1
                c-11.3,0.6-22.6-0.3-33.8,0c-6.4,0.3-8.8-2.1-8.8-8.5c0.3-11.6,0-23.5,0.3-35.1c0-5.5-1.8-8.2-7.6-7.9c-46.3,0-93,0.3-139.3,0
                c-6.4,0-8.8,2.1-8.5,8.5c0.3,10.7-0.3,21.6,0.3,32.3c0.3,7.9-1.8,11.6-10.4,11c-9.5-0.6-18.9,0.6-28.4-0.3
                c-9.8-0.9-14,1.5-13.1,12.2c0.9,9.5-0.3,18.9,0.3,28.4c0.6,8.5-1.5,12.5-11,11.9c-9.5-0.9-18.9,0.3-28.4-0.3
                c-9.8-0.6-13.4,2.4-13.1,12.8c0.6,30.2,0.3,60.4,0.3,90.6l0,0c0,24.4,0,48.8,0,72.9c0,31.1,0,31.1,31.7,31.1
                c20.4,0,20.4,0,20.1,20.7c0,31.1,0,31.1,30.2,31.1c3.7,0,7.3,0.3,10.7,0c8.5-0.9,10.7,2.7,10.7,11c0,13.4-6.1,32,2.7,38.4
                c9.1,6.7,26.8,2.7,40.9,1.8c6.7-0.6,7.9,1.5,7.9,6.7c0,9.1,0,18,0,27.1c0,18.9,0,18.9,18.3,18.9c33.8,0,33.8,0,33.5,34.2
                c-0.3,18-3,18,16.8,18c34.8,0,35.4,0.3,34.8,35.1c-0.3,13.4,3,18.3,17.1,17.1c11.6-1.2,27.1-5.2,33.8,2.1c5.8,6.1,2.7,21.6,1.5,32.6
                c-1.5,13.7,2.7,18.6,16.8,16.8c11-1.5,25.9,3.4,32.6-2.1c7.9-6.7,3-22,2.4-33.5c-0.6-12.8,2.7-17.7,16.5-16.5
                c11,1.2,25.6,4,32.6-1.5c8.5-6.7,3.4-22,2.7-33.2c-0.6-13.4,3.4-18,17.1-17.1c11,0.9,25.3,5.2,32.6-1.8c7.3-7,2.1-21.3,2.4-32.3
                c0.6-17.7,0.3-17.7,18.6-17.4c5.5,0,11-0.6,16.2,0.3c13.1,1.8,18-2.4,17.4-16.8c-1.5-35.4-0.6-36,35.4-35.1
                c13.1,0.3,18.3-2.4,16.8-16.8c-1.2-11-5.2-25.3,1.8-32.6c7-7.6,21.3-1.5,32.3-2.4c1.2,0,2.7-0.3,4,0c11.3,2.1,13.4-3.4,13.1-13.4
                c-0.3-12.2-5.2-27.4,1.8-35.4c7.9-8.5,23.8-2.7,36-2.7c11,0,14.6-2.7,14.3-14c-0.6-51.5,0-102.8-0.3-154.3
                C768.2,281.6,773.4,265.4,766.1,257.5z M301.1,297.4c0.3,7-2.7,9.5-9.5,9.1c-9.8-0.3-19.8,0.3-29.9-0.3c-9.8-0.6-13.7,2.4-13.1,12.8
                c0.9,11.3,0.3,22.6,0.3,33.8c0,10.7,0,21.6,0,32.3l0,0c0,22.6-0.3,45.1,0,67.7c0,7-1.8,9.8-9.1,9.1c-11.3-0.6-22.6-0.6-33.8,0
                c-7.6,0.3-8.8-2.7-8.8-9.5c0.3-45.4,0.3-91.2,0-136.6c0-7.9,2.4-10.7,10.1-10.1c8.5,0.6,17.1,0,25.6,1.5c11.6,2.1,15.9-3,16.2-13.1
                c0.3-10.4,0.3-20.7,0-31.1c-0.3-6.7,2.1-9.1,8.5-8.5c0.9,0,1.8,0,2.7,0C312.7,256.3,299.2,243.8,301.1,297.4z"
                style={{
                  fill: this.props.color,
                }}
              />
            </g>
        </svg>
      </>
    )
  }

  render() {
    switch(this.props.type) {
      case HeartType.CLASSIC:
        return this.classicHeart();
      case HeartType.MULTI:
        return this.multiHeart();
      case HeartType.EMPTY:
        return this.emptyHeart();
      case HeartType.PIXEL:
        return this.pixelHeart();
      default:
        return this.classicHeart();
    }
  }
}