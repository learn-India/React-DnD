import React from 'react'
import './DroppableComponent.css'

import { DropTarget } from 'react-dnd'

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        obj: monitor.getItem(),
    }
}
class DroppableComponent extends React.Component {

    render() {
        const { connectDropTarget, hovered, obj } = this.props
        return connectDropTarget(
            <div className='droppableContainer'>
                DroppableComponent
      </div>
        )
        // return(
        //     <div className='droppableContainer'>
        //         DroppableComponent
        //     </div>
        // )
    }

}
export default DropTarget('item', {}, collect)(DroppableComponent)