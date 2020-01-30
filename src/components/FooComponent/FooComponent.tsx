import React from 'react'

export interface FooProps {
  message: string
}

interface FooState {
  isBusy: boolean
}

export default class FooComponent extends React.PureComponent<FooProps, FooState> {

  public render(): React.ReactNode {
    return (
      <div>
        <h3>{this.props.message}</h3>
      </div>
    )
  }
}
