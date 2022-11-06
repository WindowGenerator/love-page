import { Component } from "react";
import { IHeart } from "../types/heart.type";
import { HeartProviderService } from "../services/heart-provider.service";
import './heart-viewer.component.css';
import HeartSVG from "./heart-svg.component";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {};
type State = {
  hearts: IHeart[],
  modalIsOpen: boolean,
};

export default class HeartViewer extends Component<Props, State>{
  state: State = {
    hearts: [],
    modalIsOpen: false,
  };

  heartProviderService: HeartProviderService;

  constructor(props: Props) {
    super(props);

    this.heartProviderService = new HeartProviderService();

    this.fetchMoreHearts();
  }

  fetchMoreHearts = async () => {
    await setTimeout(() => {
      this.setState({
        hearts: [...this.state.hearts, ...this.heartProviderService.generateHearts(100)]
      });
    }, 200);
  };

  render() {
    return (
      <div className="main-container">
        <InfiniteScroll
          dataLength={this.state.hearts.length}
          next={this.fetchMoreHearts}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="hearts-container">
            {
              this.state.hearts.map((heart) => {
                return <div className="heart-symbol grow">
                  <HeartSVG
                      type={heart.type}
                      scale={0.8}
                      color={heart.color}
                    />
                </div>
              })
            }
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}