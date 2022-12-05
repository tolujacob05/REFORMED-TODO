import React from 'react';
import './css/Pop1.css';

const Pop1 = () => {
    return (
        <>
            <div className='box'>
                <div className='pop-box'>
                    <div className='board'>
                        <h1>Add New Board</h1>
                    </div>
                    <div className='grey'>
                        <div className='name'>
                            <h6>Board Name</h6>
                            <input className='part' type="text" placeholder="e.g Web Design" />
                        </div>
                        <div className='columns'>
                            <h6>Board Columns</h6>
                            <input className='type' type="text" placeholder="e.g Todo..." />
                            <input className='type' type="text" placeholder="e.g Todo..." />                  
                        </div>
                        <div className='create'>
                            <h4>+Add New Column</h4>
                        </div>
                        <div className='new'>
                            <h4>Create New Board</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pop1;