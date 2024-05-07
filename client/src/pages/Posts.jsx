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
  const handleSubmit = () => {

  }
  const handleChange = (e) => {

  }
  return (
    <section className='max-w-7x1 mx-auto'>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField lableName="name" type="text" name="name" placeholder="Long Hoang" value={form.name} handleChange={handleChange} />
          <FormField lableName="prompt" type="text" name="prompt" placeholder="Long Hoang" value={form.prompt} handleChange={handleChange} />
        </div>
      </form>
    </section>
  )
}

export default Posts;
