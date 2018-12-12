import React from 'react';

export class ListGroupItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options:[
        'Box of matches',
        'Food concentrate',
        '50 ft of nylon rope',
        'Parachute silk',
        'Solar-powered portable heating unit',
        'Two .45 caliber pistols',
        'One case of dehydrated milk',
        'Two 100-pound tanks of oxygen',
        'Stellar map',
        'Self-inflating life raft',
        'Magnetic compass',
        'five gallons of water',
        'Signal Flares',
        'First-aid kit with hypodermic syringes',
        'Solar-powered FM transmitter/reciever'
       ]};
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged)
  }

  dragEnd(e) {
    let data = this.state.options;
    let from = Number(this.dragged.dataset.id);
    let to = Number(this.over.dataset.id);
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({colors: data});
  }

  dragOver(e) {
    event.preventDefault();
    this.over = e.target;
  }

  render() {
    let listItems = this.state.options.map((item, i) => {
      return (
        <li
          data-id={i}
          key={i}
          draggable='true'
          onDragEnd={this.dragEnd.bind(this)}
          onDragStart={this.dragStart.bind(this)}
          className="list-group-item">{item}
          </li>
      )
     });
    return(
      <ul onDragOver={this.dragOver.bind(this)} className="list-group">
        {listItems}
      </ul>
    );
  }
}


export default ListGroupItem;
