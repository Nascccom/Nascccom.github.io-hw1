import React from 'react'
import upIconImg from './upIconImg.png';
import downIconImg from './downIconImg.png';
import upDown from './upDown.png';

// добавить в проект иконки и импортировать
const downIcon = downIconImg
const upIcon = upIconImg
const noneIcon = upDown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return down;
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
  {
      sort, value, onChange, id = 'hw15',
  }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
      ? downIcon
      : sort === up
        ? upIcon
        : noneIcon

    return (
      <span
        id={id + '-sort-' + value}
        onClick={onChangeCallback}
        style={{cursor: 'pointer'}}
      >

          <img
            id={id + '-icon-' + sort}
            src={icon}
            style={{width: '10px', color: '#ADABAC'}}
            alt={'icon'}/>
        </span>
    )
}

export default SuperSort