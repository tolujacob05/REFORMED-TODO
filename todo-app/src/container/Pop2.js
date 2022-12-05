import React from 'react';
import './css/Pop2.css';

const Pop2 = () => {
    return (
        <>
            <div  className='whole'> 
                <div className='task'>
                    <div className='do'>
                        <h1> Add New Task</h1>
                    </div>
                    <div className='title'>
                        <h6>Title</h6>
                        <input className='dif' type="text" name="title" placeholder="e.g Take coffee break" />
                    </div>
                    <div className='description'>
                        <h6>Description</h6>
                        <input className='describe' type="text" name="description" placeholder="e.g it's always good to take a braek. This 15 minutes will recharge the batteries a little." />
                    </div>
                    <div className='sub-task'>
                        <h6>Subtasks</h6>
                        <input className='diff' type="text" name="subtasks" placeholder="e.g Make Coffee" />
                        <input className='diff' type="text" name="subtasks" placeholder=" e.g Drink coffe & smile" />
                    </div>
                    <div className='sub'>
                        <h5>+Add New Subtask</h5>
                    </div>
                    <div className='status'>
                        <h6>Status</h6>
                    </div>
                    <div className='work'>
                        <h5>Create Task</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pop2;