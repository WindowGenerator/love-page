import { Component } from "react";
import { IHeart } from "../types/heart.type";
import { HeartProviderService } from "../services/heart-provider.service";
import './heart-viewer.component.css';


type Props = {};

export default class HeartViewer extends Component<Props, IHeart>{
  heartProviderService: HeartProviderService;

  constructor(props: Props) {
    super(props);

    this.heartProviderService = new HeartProviderService();
  }

  render() {
    const hearts = this.heartProviderService.generateHearts(200);

    return (
      <div className="main-container">
        <div className="hearts-container">
          {
            hearts.map((heart) => {
              return <div className="heart-symbol grow">
                {heart.symbol}
              </div>
            })
          }
        </div>
      </div>
    );
  }
}