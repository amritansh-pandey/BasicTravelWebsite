import React, { useState } from 'react';
import './Home.css';
import FilterPanel from '../../components/Home/FilterPanel/FilterPanel';
import ListView from '../../components/Home/List/ListView';
import SearchBar from '../../components/Home/SearchBar/SearchBar';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);

    const handleSelectCategory = (event, value) => !value ? null : setSelectedCategory(value);
    const handleSelectRating = (event, value) => !value ? null : setSelectedRating(value);

    return (
        <div className="home">
            {/* Search Bar */}
            <SearchBar />

            <div className="home-panelList-wrap">
                <div className="home-panel-wrap">
                    {/* Side Panels */}
                    <FilterPanel selectToggle={handleSelectCategory} selectedCategory={selectedCategory} selectRating={handleSelectRating} selectedRating={selectedRating} />
                </div>
                <div className="home-list-wrap">
                    {/* List & Empty Views */}
                    <ListView />
                </div>
            </div>
        </div>
    );
};

export default Home;