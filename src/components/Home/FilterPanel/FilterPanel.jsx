import FilterListToggle from '../../common/FilterListToggle/FilterListToggle';
import { categoryList, ratingList } from '../../../constants/data';
import "./FilterPanel.css";

const FilterPanel = ({ selectedCategory, selectToggle, selectRating, selectedRating }) => {
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle} />
      </div>

      {/* Cusines */}

    <div className="input-group">
      <p className="label">Cuisines</p>
    </div>

      {/* Price Range */}

      {/* Star Rating */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle options={ratingList} value={selectedRating} selectToggle={selectRating} />
      </div>
    </div>
  )
}

export default FilterPanel;