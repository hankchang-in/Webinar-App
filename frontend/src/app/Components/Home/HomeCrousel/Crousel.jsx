import './Crousel.css'
export default function Crousel() {
    
    return (
        <div>
            <div className="mainContainer flex justify-center items-center h-96">
                <h1 className='stepsText'>Step 1</h1>
                <div className="container1 bg-voilet-200 m-10 w-72 h-72 rounded-2xl shadow-2xl flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold">Select</h1>
                    <h1 className="text-4xl font-bold">Your</h1>
                    <h1 className="text-4xl font-bold">Product</h1>
                </div>
                <h1 className='stepsText' >Step 2</h1>
                <div className="container2 bg-orange-200 m-10 w-72 h-72 rounded-2xl shadow-2xl flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold">Your</h1>
                    <h1 className="text-4xl font-bold">Lucky Slot</h1>
                </div>
                <h1 className='stepsText'>Step 3</h1>
                <div className="container3 bg-blue-100  m-10 w-72 h-72 rounded-2xl shadow-2xl flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold">Be</h1>
                    <h1 className="text-4xl font-bold">The</h1>
                    <h1 className="text-4xl font-bold">Winner</h1>
                </div>
            </div>
        </div>
    )
}   