import React from 'react'
import { FormField,Loader } from '../components'
import { useNavigate } from 'react-router-dom'



const Posts = () => {
  const navigate = useNavigate()
  const [form,setForm] = useState({
    name:'',
    prompt:'',
    photo:''
  })
  const [generateImg,setgenerateImg] = useState(false)
  const [loading,setLoading] = useState(false)

  return (
    <section className='max-w-7x1 mx-auto'>
      <div>
        <h1 className='font-extrabold text-[32px]'> Create</h1>
      </div>
    </section>
  )
}

export default Posts
