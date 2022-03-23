import { useState} from 'react';

const Counter = () => {
    const[value,setValue] = useState(0);
    const[error,setError]= useState(false);

    const increaseValue = () =>{

        setValue(value+1);

    }

    const decreaseValue = () =>{

        if(value > 0)
        {
            setValue(value -1);

        }
        else
        {
           setError(true);
        }
        
    }

    return(
      <div className="container" data-test="counter-app">
          <div className="row text-center">
              <div className="col">
                  <div className="card shadow">

                    <h1 data-test="counter-text" className="text-primary">Counter</h1>

                    <h2 data-test="counter-value" className="text-warning">{value}</h2>

                    <div className='m-3 p-2'>
                        <button data-test="increment-btn" onClick={increaseValue} className='m-3 p-2 btn btn-success'>Increase</button>
                        <button data-test="decrement-btn" onClick={decreaseValue} className='m-3 p-2 btn btn-danger'>Decrease</button>

                    </div>



                  </div>

              </div>
          </div>

      </div>
    );

}

export default Counter;