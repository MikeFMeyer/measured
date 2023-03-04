import { useState } from 'react'
import Toggle from './components/Toggle'
import NumberInput from './components/NumberInput'


function App() {
  const [verticalChecked, setVerticalChecked] = useState(false)
  const [horizontalChecked, setHorizontalChecked] = useState(false)
  const [horizontalValue, setHorizontalValue] = useState()
  const [verticalValue, setVerticalValue] = useState()
  const [objectsAmount, setObjectsAmount] = useState()
  const [objectsSame, setObjectsSame] = useState(false)

  return (
    <div className="p-10">
        <h1 className="text-3xl font-bold text-center">
          Measured
        </h1>

        <div>
          <div className='mt-10'>
            <Toggle title="Vertical Calc" description="Perform a vertical calculation" isOn={verticalChecked} handleToggle={() => setVerticalChecked(!verticalChecked)}/>
          </div>
          {verticalChecked && <div className='mt-10'>
            <NumberInput label="Vertical Measurement" placeholder="e.g. 12" handleInput={(e) => setVerticalValue(e.target.value)}/>
          </div>}
        </div>

        <div className='mt-10'>
          <div className='mt-10'>
            <Toggle title="Horizontal Calc" description="Perform a horizontal calculation" isOn={horizontalChecked} handleToggle={() => setHorizontalChecked(!horizontalChecked)}/>
          </div>
          {horizontalChecked && <div className='mt-10'>
            <NumberInput label="Horizontal Measurement" placeholder="e.g. 12" handleInput={(e) => setHorizontalValue(e.target.value)}/>
          </div>}
        </div>
      
        <div className='mt-10'>
          <NumberInput label="Number of objects" placeholder="e.g. 2" helpText="How many objects should be taken into consideration when doing the calculations" handleInput={(e) => setObjectsAmount(e.target.value)}/>
        </div>

        <div className='mt-10'>
          <div className='mt-10'>
            <Toggle title="Objects same size" description="Are all of the objects mentioned above the same size?" isOn={objectsSame} handleToggle={() => setObjectsSame(!objectsSame)}/>
          </div>
        </div>

        {objectsAmount && objectsSame &&
          <div>one</div>
        }
        {objectsAmount && !objectsSame &&
          <div>more</div>
        }
    </div>
  )
}

export default App
