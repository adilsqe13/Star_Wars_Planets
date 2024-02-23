import React, { useContext, useEffect, useState } from 'react';
import residentsContext from '../CONTEXT/context/residentsContext';

export default function ResidentsCard() {
    const [residentsData, setResidentsData] = useState(JSON.parse(localStorage.getItem('planet-residents')));
    const { residents } = useContext(residentsContext);

    const handleResidents = async () => {
        if (residents !== null) {
            const data = await Promise.all(residents.map(async (item) => {
                const response = await fetch(item);
                return response.json();
            }));
            setResidentsData(data);
            localStorage.setItem('planet-residents', JSON.stringify(data));
        }
    }

    useEffect(() => {
        handleResidents();
    }, []);
    return (
        <>
            <div className="container planets-card-container mt-2">
                <div className="row">
               <p><span className='h3 text-light kdam-thmor'>{localStorage.getItem('planet-name')} planet</span> &nbsp; <small className='text-secondary kdam-thmor'>Results - {residentsData === null ? 0 : residentsData.length}</small></p> 
                    {residentsData === null ? <div className='container spinner-container dfjcac'><div class="lds-ripple"><div></div><div></div></div></div>
                        : residentsData.length === 0 ? <div className='container spinner-container dfjcac'><span className='text-danger bold fs-3 border p-4 bg-light'>No Data Available</span></div>
                            : residentsData.map((item, index) => {
                                return (
                                    <div className="col mt-4">
                                        <div key={index} className="card planet-card card-shadow bg-transparent" style={{ width: "18rem" }}>
                                            <img src={item.gender === 'male' ?
                                                "https://www.freeiconspng.com/thumbs/person-icon/person-icon-person-icon-17.jpg"
                                                : (item.gender === 'female' ? "https://www.parkamerica.net/wp-content/uploads/2020/12/placeholder-profile-female.jpg"
                                                    : "https://st2.depositphotos.com/6541572/12372/v/450/depositphotos_123725976-stock-illustration-anonymous-male-profile-picture-emotion.jpg")}
                                                className="card-img-top rounded-3" alt="..." height={250} />
                                            <div className="card-body blurry-transparent">
                                                <h3 className="card-title"><span className='text-yellow bold kdam-thmor'>{item.name}</span></h3>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span><strong className='text-offwhite font-size-small'>GENDER:</strong></span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className='text-green'>{item.gender}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span><strong className='text-offwhite font-size-small'>BIRTH YEAR:</strong></span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className='text-green '>{item.birth_year}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span><strong className='text-offwhite font-size-small'>EYE COLOR:</strong></span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className='text-green '>{item.eye_color}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span><strong className='text-offwhite font-size-small'>SKIN COLOR:</strong></span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className='text-green '>{item.skin_color}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span><strong className='text-offwhite font-size-small'>HAIR COLOR:</strong></span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className='text-green '>{item.hair_color}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span><strong className='text-offwhite font-size-small'>MASS:</strong></span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className='text-info '>{item.mass}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                </div>
            </div>
        </>
    )
}
