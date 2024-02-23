import React from 'react';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent py-4 px-2">
                <div className="container-fluid">
                    <h1 className='text-light kdam-thmor'>St<span className='text-red'>a</span>r Wars Pl<span className='text-red'>a</span>nets</h1>
                    <form className="d-flex dnass" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Your Planet" aria-label="Search" />
                        <button className="btn btn-info" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}
