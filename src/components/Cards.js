import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Box from './Box'

export class Cards extends Component {
  static propTypes = {}

  render() {
    let {title, description, imgUrl}  = this.props;
    return (
    <>
    <div className="container text-center my-3 ">
            <div className='row align-items-start'>
            <div className='col my-3'>
                    <Box title={title} description={description}></Box>
                </div>
                <div className='col my-3'>
                    <Box title={title} description={description}></Box>
                </div>
                <div className='col my-3'>
                    <Box title={title} description={description}></Box>
                </div>
                <div className='col my-3'>
                    <Box title={title} description={description}></Box>
                </div>
            </div>
        
    </div>
    </>
    )
  }
}


Cards.defaultProps = {
    title : "default title",
    description : "default description"    
}
export default Cards