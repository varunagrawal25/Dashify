import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class Pricing extends Component {
    render() {
        return (
            <div>
              <div>Pricing</div>
              <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.
              </div>
              <Button>
              Monthly
              </Button>
              <Button>
              Annual
              </Button>
            </div>
        )
    }
}
