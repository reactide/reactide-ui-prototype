import React from 'react';

const fileTreeItem = (props) => {

  const classes = 'fileTreeItem' + (props.isSelected ? ' active' : '');

  const onClick = (event) => {
    props.handler(props.ckey);
  }

  return (
    <li className="list-item" onClick={onClick}>
      <span className={classes}>
        {props.fileName}
      </span>
    </li>
  );
}

export default fileTreeItem;
