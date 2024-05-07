import {React,useState} from 'react'
import { preview } from '../assets'
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
  const createImage = () => {}
  return (
    <section className='max-w-7x1 mx-auto'>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField labelName="name" type="text" name="name" placeholder="Long Hoang" value={form.name} handleChange={handleChange} />
          <FormField labelName="prompt" type="text" name="prompt" placeholder="Write something" value={form.prompt} handleChange={handleChange} />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {
              form.photo ? (
                <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain'></img>
              ):( <img src={preview} alt="preview" className='w-9/12 h-9/12 object-contain opacity-40 ' ></img>)
            }
            {
              generateImg ? ( <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
            </div>)  : null
            }
          </div>
        </div>
        <div className='mt-5 flex gap-5'>
          <button
              type="button"
              onClick={createImage}
              className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {generateImg ? 'Generating...' : 'Generate'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Posts;
