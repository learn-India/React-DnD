import React from 'react' 
import  './DragableComponent.css'
import Item from '../item/Item'


class  DragableComponent  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[
                {id:1,name:'item 1'},
                {id:2,name:'item 2'},
                {id:3,name:'item 3'},
                {id:4,name:'item 4'}
            ]
        } }
   deleteItem=(id) => {
     console.log('delecting '+id)
        }
    render() {
        const obj = {id:1,name:'item 1'}
       const it =  this.state.items.map((item,key)=>(
            <Item obj={obj} id="1" key={item.id} handelDrop={(id)=>this.deleteItem(id)}/>
           ))
    return(
        <div className='dragableComponent'>
            <div className='ItemContainer'>
              {it}
            </div>
        </div>
    )
    }
}
export default DragableComponent