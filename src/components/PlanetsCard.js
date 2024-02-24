import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import residentsContext from '../CONTEXT/context/residentsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PlanetsCard() {
    const navigate = useNavigate();
    const { setResidents } = useContext(residentsContext);
    const [planets, setPlanets] = useState(null);
    const [nextUrl, setNextUrl] = useState('');
    const [preUrl, setPreUrl] = useState(null);
    const [pageNo, setPageNo] = useState(Number(localStorage.getItem('pageNo')) || 1);

    const handlePlanets = async (fetchUrl) => {
        try {
            window.scrollTo(0, 0);
            const response = await fetch(`${fetchUrl}`);
            const data = await response.json();
            setPlanets(data.results);
            setNextUrl(data.next);
            setPreUrl(data.previous);

        } catch (error) {
            console.log(error);
        }
    }

    const handleDetails = (residents, planetName) => {
        setResidents(residents);
        localStorage.setItem('planet-name', planetName);
        navigate('/residents-card');
    }

    const handleNext = async () => {
        setPlanets(null);
        handlePlanets(nextUrl);
        setPageNo(pageNo + 1);
        localStorage.setItem('current-page', `page=${pageNo + 1}&`);
        localStorage.setItem('pageNo', pageNo + 1);
    }
    const handlePre = async () => {
        setPlanets(null);
        handlePlanets(preUrl);
        setPageNo(pageNo - 1);
        localStorage.setItem('current-page', `page=${pageNo - 1}&`);
        localStorage.setItem('pageNo', pageNo - 1);
    }


    useEffect(() => {
        const page = localStorage.getItem('current-page') || '';
        handlePlanets(`https://swapi.dev/api/planets/?${page}format=json`);
    }, []);

    return (
        <>
            <div className="container planets-card-container mt-2">
                <div className="row">
                    <small className='text-offwhite kdam-thmor'>Page - {pageNo} &nbsp; Results - {planets === null ? 0 : planets.length}</small>
                    {planets === null ? <div className='container spinner-container dfjcac'><div class="lds-ripple"><div></div><div></div></div></div> : planets.map((planet, index) => {
                        return (
                            <div className="col mt-4">
                                <div key={index} className="card planet-card card-shadow bg-transparent" style={{ width: "18rem" }}>
                                    <img src="https://cdn.mos.cms.futurecdn.net/Ff66F3mWBR5qc49qsTyYn7.jpg" className="card-img-top rounded-3" height={170} alt="..." />
                                    <div className="card-body blurry-transparent">
                                        <h3 className="card-title"><span className='bold kdam-thmor text-light'>{planet.name}</span></h3>

                                        <div className="row">
                                            <div className="col-6">
                                                <h6><strong className='text-offwhite' >Climate:</strong></h6>
                                            </div>
                                            <div className="col-6">
                                                <span className='text-info'>{planet.climate}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h6><strong className='text-offwhite'>Population:</strong></h6>
                                            </div>
                                            <div className="col-6">
                                                <span className='text-warning'>{planet.population}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h6><strong className='text-offwhite'>Terrain:</strong></h6>
                                            </div>
                                            <div className="col-6">
                                                <span className='text-green'>{planet.terrain}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h6><strong className='text-offwhite'>Diameter:</strong></h6>
                                            </div>
                                            <div className="col-6">
                                                <span className='text-light'>{planet.diameter} km</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <h6><strong className='text-offwhite'>Orbital Period:</strong></h6>
                                            </div>
                                            <div className="col-6">
                                                <span className='text-danger bold'>{planet.orbital_period}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span><strong className='text-offwhite font-size-small'>Rotation Period:</strong></span>
                                            </div>
                                            <div className="col-6">
                                                <span className='text-danger bold'>{planet.rotation_period}</span>
                                            </div>
                                        </div>

                                        <button onClick={() => handleDetails(planet.residents, planet.name)} className="btn mt-3 view-details form-control bold">View Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row py-4">
                    <div className="col-6 dfjsac"><button disabled={preUrl === null} onClick={handlePre} className='btn btn-md btn-light bold'><FontAwesomeIcon icon={faArrowLeft} /> Previous</button></div>
                    <div className="col-6 dfjeac"><button disabled={nextUrl === null} onClick={handleNext} className='btn btn-light bold'>Next <FontAwesomeIcon icon={faArrowRight} /></button></div>
                </div>
            </div>
        </>
    )
}
