import React,{useState} from 'react'

const Calculate = () => {
    const [weight, setWeight] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const calculateShippingCost = () => {
    // Burada kargo ücreti hesaplama mantığını yazabilirsiniz.
    // Örnek olarak: shippingCost = weight * length * width * height;
    setShippingCost(shippingCost);
  return (
    <>
    <div className="App">
      <h1>Kargo Hesaplayıcı</h1>
      <div>
        <label>Ağırlık: </label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Uzunluk: </label>
        <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
      </div>
      <div>
        <label>Genişlik: </label>
        <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
      </div>
      <div>
        <label>Yükseklik: </label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateShippingCost}>Kargo Ücretini Hesapla</button>
      <p>Kargo Ücreti: {shippingCost}</p>
    </div>
    <h1>salam</h1>
    </>
  )
}}

export default Calculate