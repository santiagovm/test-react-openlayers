import React from 'react'
import TileLayer from 'ol/layer/Tile'
import Map from 'ol/Map'
import 'ol/ol.css'
import {fromLonLat} from 'ol/proj'
import OSM from 'ol/source/OSM'
import View from 'ol/View'

export interface FooProps {
  message: string
}

interface FooState {
  isBusy: boolean
}

export default class FooComponent extends React.PureComponent<FooProps, FooState> {

  private readonly mapContainerRef: React.RefObject<HTMLDivElement>;

  public map: Map | null;

  constructor(props: FooProps) {
    super(props);
    this.mapContainerRef = React.createRef()
    this.map = null;
  }

  getMap(): Map {
    if (this.map) {
      return this.map;
    }

    throw new Error('map undefined')
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

    this.map = new Map({
      target: this.mapContainerRef.current as HTMLElement,
    })

    this.map.addLayer(osmLayer)
    this.map.setView(view)
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
