import React from 'react'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import {fromLonLat} from 'ol/proj'
import View from 'ol/View'
import Map from 'ol/Map'
import 'ol/ol.css'

export interface FooProps {
  message: string
}

interface FooState {
  isBusy: boolean
}

export default class FooComponent extends React.PureComponent<FooProps, FooState> {

  private readonly mapContainerRef: React.RefObject<HTMLDivElement>;

  constructor(props: FooProps) {
    super(props);
    this.mapContainerRef = React.createRef()
  }

  componentDidMount(): void {
    const osmLayer = new TileLayer({
      source: new OSM(),
    })

    const birmingham = fromLonLat([-1.81185, 52.44314])

    const view = new View({
      center: birmingham,
      zoom: 6,
    })

    const map = new Map({
      target: this.mapContainerRef.current as HTMLElement,
    })

    map.addLayer(osmLayer)
    map.setView(view)
  }

  public render(): React.ReactNode {
    return (
      <div>
        <h3>{this.props.message}</h3>
        <div ref={this.mapContainerRef} className="map" />
      </div>
    )
  }
}
