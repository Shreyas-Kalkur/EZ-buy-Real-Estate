import React from 'react'
import './filter.scss'
const Filter = () => {
    return (
        <div className="filter">
            <h1>Search results for <b>London</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="City">Location</label>
                    <input type="text" name="city" id="city" placeholder='City location' />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="any">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="any">any</option>
                        <option value="apartments">Apartments</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min price</label>
                    <input type="number" name="minPrice" id="minPrice" placeholder='any' />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max price</label>
                    <input type="number" name="maxPrice" id="maxPrice" placeholder='any' />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" name="bedroom" id="bedroom" placeholder='any' />
                </div>
                <button><img src="/search.png" alt="" /></button>
            </div>
        </div>


    )
}

export default Filter
