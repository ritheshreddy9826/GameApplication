import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onselectedSortOrder :(sortOrder:string)=> void;
    sortOrder: string;
}

const SortSelector = ({onselectedSortOrder, sortOrder}:Props) => {
    const sortOrders=[{value:'',label:'Relevance'},
    {value:'-added',label:'Date Added'},
    {value:'name',label:'Name'},
    {value:'-released',label:'Release Date'},
    {value:'-metacritic',label:'Popularity'},
    {value:'-rating',label:'Average Rating'}
    ];
    const currentSortOrder = sortOrders.find((order)=>order.value===sortOrder);
  return (
    <>
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by : {currentSortOrder?.label||'Relevance'}</MenuButton>
    <MenuList>
      {sortOrders.map((order)=>(<MenuItem onClick={()=>onselectedSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>))}
     </MenuList>
    </Menu>
    </>
  )
}

export default SortSelector