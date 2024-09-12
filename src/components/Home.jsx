import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const aiImages = [
    { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa00JqShSRixlWGQM5uMpn24g-fHA2MAHUOQ&s', prompt: 'Paid Prompt' },
    { id: 2, src: 'https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/bf3ea8b6-b8e0-41ed-9bb4-5e81575b7bf5/a3ef4884-8b5f-47bd-a30b-5c951c6f3e4f.png?format=1500w', prompt: 'Paid Prompt' },
    { id: 3, src: 'https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/b0f85e15-565b-43c9-ab17-8e7048661b72/57cd18c4-ab28-4878-9262-a4404e00d56f.png?format=1500w', prompt: 'Paid Prompt' },
    { id: 4, src: 'https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxrTURrd1pUVXdZaTFpTkdJeExUUXdZbUV0WWpKak1TMHpObVUyTlRCbE5HVTJaR01HT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--63bda44bf25a1465c4980610b186dc15447f2851/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-69331239d9e.png', prompt: 'a female assassin ninja in red and black ninja outfit, at night, black and red buildings , dark foggy sky, cyberpunk, fluorescent light, dynamic color palettes, red sky, red clouds, red moon, ominous weather, raining, anime inspired, hybrid art, (hyperrealism:0. 5)' },
    { id: 5, src: 'https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxrWlRrek56VXlZeTB6TWpoaUxUUXpOVFl0WVRZd05TMDNOMlZqTXpoalkyVXdOeklHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--9437cd8ba521eb47cdffeba7c270d135d0003ee8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-19d3d4258fa.png', prompt: 'Gorgeous girl of summer, walks in rain, detailed, cinematic, scenic, beautiful, vibrant colors, enhanced light, colorful, illuminated, majestic, clear, coherent, neonpunk, painterly, brush strokes, cinematic' },
    { id: 6, src: 'https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxpTW1RME1UYzRNUzA1TVdFeExUUmpOell0T1dJMlppMDFOV1ZpTWpCaE5EazVNRFFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--5642800ad3d0f47647f1240f0fe6c9661758ad34/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-5295d7ff30a.png', prompt: 'dreamscape an Asian woman in a gorgeously detailed dress with flowing fabrics blowing in the wind in an ethereal scene prompts' },
  ]

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="inline-block text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text" >Imagen</h1>
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">AI Image Gallery</h1>
        <Link to="/generate" className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
          <div  className="flex-1 px-6 py-3 text-xl font-bold bg-white rounded-xl">
            Generate Image with AI ✨
          </div>
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {aiImages.map((image) => (
          <div key={image.id} className="overflow-hidden bg-white rounded-lg shadow-md">
            <img
              src={image.src}
              alt={image.prompt}
              width={300}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <p className="text-sm text-gray-600">Prompt:</p>
              <p className="font-medium text-gray-800">{image.prompt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
