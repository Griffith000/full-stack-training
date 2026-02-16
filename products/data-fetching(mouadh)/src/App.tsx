import React, { useState, useEffect } from 'react'

type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating?: { rate: number; count: number }
}

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((json) => {
        if (!mounted) return
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        if (!mounted) return
        setError(err)
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [url])

  return { data, loading, error }
}

const App: React.FC = () => {
  const { data, loading, error } = useFetch<Product[]>(
    'https://fakestoreapi.com/products'
  )

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error fetching data</div>
  if (!data) return null

  return (
    <div style={{ padding: 16 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 16,
        }}
      >
        {data.map((p) => (
          <div
            key={p.id}
            style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12 }}
          >
            <div style={{ height: 140, display: 'flex', alignItems: 'center' }}>
              <img
                src={p.image}
                alt={p.title}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </div>
            <h3 style={{ fontSize: 14, margin: '8px 0' }}>{p.title}</h3>
            <p style={{ fontWeight: 700, margin: 0 }}>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
