import React, { useState } from 'react'

async function query(data) {
  const token = process.env.REACT_APP_HUGGINGFACE_API_TOKEN

  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
  const result = await response.blob()
  console.log(result);

  return result
}

export default function Generator() {
  const [prompt, setPrompt] = useState('')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [style, setStyle] = useState('')

  const handleGenerate = async () => {
    setLoading(true)
    setError(null)
    try {
      const fullPrompt = style ? `${prompt}, ${style} style` : prompt
      const result = await query({ inputs: fullPrompt })
      const imageUrl = URL.createObjectURL(result)
      setImage(imageUrl)
    } catch (err) {
      setError('Failed to generate image. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    if (image) {
      const link = document.createElement('a')
      link.href = image
      link.download = 'generated-image.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <>
    <div className='flex items-center justify-center w-full m-2' >

     <span className='relative  inline-block overflow-hidden rounded-full p-[1px]'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <div className='inline-flex items-center justify-center w-full h-full px-3 py-1 text-lg font-medium rounded-full cursor-pointer bg-gray-950 text-gray-50 backdrop-blur-3xl'>
          <a href="https://github.com/gsubhampatra/imagen.ai">Github</a>
        </div>
      </span>
    </div>
    <div className="max-w-md p-6 mx-auto mt-10 rounded-lg shadow-lg bg-violet-100">
      
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
     


      <h1 className="mb-4 text-2xl font-bold text-center ">AI Image Generator</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter your prompt here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a style (optional)</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="artistic">Artistic</option>
          <option value="realistic">Realistic</option>
          <option value="cartoon">Cartoon</option>
          <option value="fantasy">Fantasy</option>
        </select>
        <button
          onClick={handleGenerate}
          disabled={loading || !prompt}
          className={`w-full px-4 py-2 text-white font-semibold rounded-md ${loading || !prompt
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
            }`}
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </button>
        {error && (
          <p className="text-sm text-center text-red-500">{error}</p>
        )}
        {loading && (
          <div className="flex justify-center">
            <img src="https://i.pinimg.com/originals/88/1e/97/881e975af06ff67857544c7b64e65cbc.gif" alt="Loading"
              className="object-cover w-full h-64 rounded-md" />
          </div>
        )}
        {image && (
          <div className="mt-4">
            <img src={image} alt="Generated" className="w-full h-auto rounded-lg" />
            <button
              onClick={handleDownload}
              className="w-full px-4 py-2 mt-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"
            >
              Download Image
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  )
}