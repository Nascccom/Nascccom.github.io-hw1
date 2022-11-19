import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'



/*
* 1 - описать типы AffairPriorityType, AffairType -completed
* 2 - указать нужный тип для defaultAffairs -completed
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами -completed
* 4 - выполнить пункт 3 для функции deleteAffair -
* 5 - указать нужный тип в useState с affairs -completed
* 6 - дописать тип и логику функции deleteAffairCallback -completed
* 7 - в файле Affairs.tsx дописать типизацию пропсов -completed
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow -completed
* 9 - в файле Affair.tsx дописать типизацию пропсов - completed
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать -completed
* 11 - в файле Affair.tsx отобразить приходящие данные -completed
* */

// types
export type AffairPriorityType = string // need to fix any

export type AffairType = {
  _id: number, // need to fix any
  name: string, // need to fix any
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
let defaultAffairs: Array<AffairType> = [ // need to fix any
  {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
  {_id: 2, name: 'anime', priority: 'low'},
  {_id: 3, name: 'games', priority: 'low'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
//need to fix
  if (filter === 'high') {
    return affairs.filter(el => el.priority === "high")
  }
  if (filter === 'low') {
    return affairs.filter(el => el.priority === "low")
  }
  if (filter === 'middle') {
    return affairs.filter(el => el.priority === "middle")
  }
    return affairs
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
  return affairs.filter(el => el._id !== _id)
}

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
  const [filter, setFilter] = useState<FilterType>('all') // need to fix any

  const filteredAffairs = filterAffairs(affairs, filter)

  const deleteAffairCallback = (_id: number) => {
    setAffairs(deleteAffair(affairs, _id))
  }

  return (
    <div id={'hw2'}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
    </div>
  )
}

export default HW2
