// src/components/FilterSidebar/FilterSidebar.js

import React from "react";
import "./FilterSidebar.css";

function FilterSidebar({setBrand}) {
  return (
    <div className="filter-sidebar">

      {/* Brand Section */}
      <div className="filter-section">
        <h3 className="filter-title">Brand</h3>

        <label className="filter-checkbox">
          <input 
            type="checkbox"
            value="CoffeeTime"
            onChange={(e) =>
              setBrand(e.target.checked ? "apple" : "")
            }
          />
          <span className="checkbox-text">Apple</span>
        </label>

        {/* <label className="filter-checkbox">
          <input 
            type="checkbox"
            value="UrbanVase"
            onChange={(e) =>
              setBrand(e.target.checked ? "apple" : "")
            }
          />
          <span className="checkbox-text">UrbanVase</span>
        </label>

        <label className="filter-checkbox">
          <input 
            type="checkbox"
            value="GlowHaven"
            onChange={(e) =>
              setBrand(e.target.checked ? "apple" : "")
            }
          />
          <span className="checkbox-text">Glow Haven</span>
        </label> */}
      </div>

      {/* Category Section
      <div className="filter-section">
        <h3 className="filter-title">Category</h3>

        <label className="filter-checkbox">
          <input 
            type="checkbox"
            value="Home"
            onChange={(e) =>
              setBrand(e.target.checked ? "apple" : "")
            }
          />
          <span className="checkbox-text">Home & Living</span>
        </label>

        <label className="filter-checkbox">
          <input 
            type="checkbox"
            value="Accessories"
            onChange={(e) =>
              setBrand(e.target.checked ? "apple" : "")
            }
          />
          <span className="checkbox-text">Accessories</span>
        </label>
      </div> */}

    </div>
  );
}

export default FilterSidebar;
