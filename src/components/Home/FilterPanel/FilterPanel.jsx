import FilterListToggle from '../../common/FilterListToggle/FilterListToggle';
import { categoryList } from '../../../constants/data';

const FilterPanel = () => {
    return (
      <div>
       {/* Category */}
       <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle} />
       </div>

       {/* Cusines */}

       {/* Price Range */}

       {/* Star Rating */}
      </div>
    )
  }

export default FilterPanel;