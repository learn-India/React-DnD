import React, { Component } from 'react'
import  DragableComponent from '../dragable-component/DragableComponent'
import  DroppableComponent from '../droppable-component/DroppableComponent'
import './AppHub.css'

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class AppHub extends Component {
render() {
    return(
        <div className ='AppHubContainer'>
            <DroppableComponent />
            <DragableComponent />
        </div>
    )
}
}

export default DragDropContext(HTML5Backend)(AppHub)