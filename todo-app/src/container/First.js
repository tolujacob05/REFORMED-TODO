import React from 'react';
import './css/First.css';

const First = () => {
    return (
        <>
            <div className='container'>
                {/* TODO */}
                <div className='first'>
                    <div className='todo'>
                        <div className='yey'></div>
                        <h5>TODO</h5>
                    </div>
                    <input className='input' type='text' placeholder='my name is'/>
                </div>

                {/* DOING */}
                <div className='second'>
                    <div className='doing'>
                        <div className='yes'></div>
                        <h5>DOING</h5>
                    </div>
                    <input className='input' type='text' placeholder='my name is'/>
                </div>

                {/* dONE */}
                <div className='third'>
                    <div className='done'>
                        <div className='ok'></div>
                        <h5>DONE</h5>
                    </div>
                    <input className='input' type='text' placeholder='my name is'/>
                </div>
            </div>
        </>
    )
}

export default First;