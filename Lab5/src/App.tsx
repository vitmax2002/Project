import React, { useState } from 'react';
import { useStore } from './LocalStore';
import './App.css';

function MyComponent() {
    const store = useStore();

    const [localData, setLocalData] = useState<any>({ name: '', type: '', year: '' });

    const myData = store.myData;

    const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        if (!localData.name || !localData.type || !localData.year) {
            alert('Complete all fields!');
            return;
        }
        store.addObject(localData);
        setLocalData({ name: '', type: '', year: '' });
    };

    const handleDeleteObject = (index: number) => {
        store.deleteObject(index);
        setLocalData({ name: '', type: '', year: '' });
    };


    return (
        <div className="container">
            <div className='start_img'>
                
                <div className="card_cont">
                    {myData.map((data: any, index: number) => (
                        <div key={index} className="card">              
                            <span className='second'>{data.name}</span>                           
                            <div className='card_ins'>
                                <span className='names'>Type: </span><span className='second'>{data.type}</span>
                            </div>
                            <div className='card_ins'>
                                <span className='names'>Year: </span><span className='second'>{data.year}</span>
                            </div>
                            <button className="button2" onClick={() => handleDeleteObject(index)}>Delete</button>
                        </div>
                    ))}
                </div>
                <form className="form" onSubmit={handleAddObject}>
                    <span className='title'>Movies</span>
                    <div className='inp_cont'>
                        <span className='inp_txt'>Movie Name </span>
                        <input className="input" type="text" value={localData.name} onChange={e => setLocalData({ ...localData, name: e.target.value })} />
                    </div>
                    <div className='inp_cont'>
                        <span className='inp_txt'>Type </span>             
                        <input className="input" type="text" value={localData.type} onChange={e => setLocalData({ ...localData, type: e.target.value })} />
                    </div>
                    <div className='inp_cont'>
                        <span className='inp_txt'>Year </span>  
                        <input className="input" type="text" value={localData.year} onChange={e => setLocalData({ ...localData, year: e.target.value })} />
                    </div>
                    <button className="button" type="submit">Insert</button>
                </form>
            </div>     
        </div>
    );
}

export default MyComponent;
