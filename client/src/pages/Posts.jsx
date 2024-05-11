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
  
  const handleChange = (e)  => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form.prompt)
  }
  const createImage = async () => {
    if (form.prompt) {
      try {
        setgenerateImg(true);
        const response = await fetch('http://localhost:3000/api/v1/images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Convert the prompt to JSON and send it to the server
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        console.log(data);
        setForm({ ...form, photo: data.photo});
      } catch (err) {
        alert(err);
      } finally {
        setgenerateImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  }
  return (
    <section className='max-w-7x1 mx-auto'>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#222328] text-[14px] max-w-[500px]">Generate an imaginative image through DALL-E AI MODEL</p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={createImage}>
        <div className='flex flex-col gap-5'>
          <FormField labelName="prompt" type="text" name="prompt" placeholder="Write something" value={form.prompt} handleChange={handleChange}  />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 flex justify-center items-center">
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
