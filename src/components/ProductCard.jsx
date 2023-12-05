import { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { deleteDataFunc, updateDataFunc } from '../redux/dataSlice'
import { modalFunc } from '../redux/modalSlice'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({dt}) => {
  const [openEdit, setOpenEdit] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate() 

  const updateFunc = () => {
    dispatch(modalFunc())
    setOpenEdit(false)
    navigate(`/?update=${dt.id}`)
  }
  return (
    <div className="w-[200px] h-[280px] relative m-2 rounded-md">
      <img className="w-full h-full rounded-md object-cover" src={dt?.url} alt="" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2">
        <div className="text-lg font-semibold pt-1">{dt?.name}</div>
        <div className="pb-2">{dt?.price}€</div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)} className='absolute top-1 right-2'>
        <BsThreeDots color='white' size={24}/>
      </div>
      {
        openEdit && (
          <div className='bg-black border border-white text-white absolute top-5 right-2 py-1 px-2 text-sm'>
            <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer'>Sil</div>
            <div onClick={updateFunc} className='cursor-pointer'>Güncelle</div>
          </div>
        )
      }
    </div>  
  )
}

export default ProductCard