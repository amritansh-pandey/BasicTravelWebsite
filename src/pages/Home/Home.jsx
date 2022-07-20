import React from 'react';
import './Home.css';
import FilterPanel from '../../components/Home/FilterPanel/FilterPanel';
import ListView from '../../components/Home/List/ListView';
import SearchBar from '../../components/Home/SearchBar/SearchBar';

const Home = () => {
    return (
        <div className="home">
            {/* Search Bar */}
            <SearchBar />

            <div className="home-panelList-wrap">
                <div className="home-panel-wrap">
                    {/* Side Panels */}
                    <FilterPanel />
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