import React, { Component } from 'react'
import { Link } from 'react-router'

import { AppBar, Drawer, MenuItem, Slider } from 'material-ui'
import { Tabs, Tab } from 'material-ui/Tabs'

class Layout extends Component {

  render() {
    const buttonStyle = {
      color: 'rgb(255,255,255)'
    }
    const menuItemStyle = {
      cursor: 'pointer',
      backgroundColor: 'rgb(125,213,248)',
      textAlign: 'center'
    }
    const underLineStyle = {
      backgroundColor: 'rgb(240,211,146)'
    }

    return (
      <div>
      <AppBar
      className="navBar"
      title={"Hi"}
      children={
        <Tabs
        inkBarStyle={underLineStyle}>
        <Tab
        label="Home"
        className='navTabs'
        ></Tab>
        <Tab
        label="Search Tutors"
        className='navTabs'
        ></Tab>
        <Tab
        label="AKYUNA!!!"
        className='navTabs'
        ></Tab>
        </Tabs>
      }
      />

      {this.props.children}
      </div>
    )
  }
}



export default Layout
