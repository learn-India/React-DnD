import React from 'react'
import { DragSource } from 'react-dnd'
const itemSource ={
    beginDrag(props){
        return props.obj
    },

    endDrag(props,monitor,compoenet){
        if(!monitor.didDrop()) {
            return
        }
        return props.handelDrop(props.obj.id)
    }
}
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging:monitor.isDragging()
    }
}
 class Item extends React.Component {

     render() {
        const {isDragging,connectDragSource, obj} = this.props
        const opacity = isDragging ? 0:1;
        return connectDragSource(
            <div className='item' style={{opacity}}>
            {obj.name}
            </div>
        )
    
        // return(
        //     <div className='item'>
        //         {name}
        //     </div>
        // )
    }

}

export default DragSource('item', itemSource, collect)(Item)