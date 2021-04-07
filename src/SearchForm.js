import axios from "axios";

export default function SearchForm() {
  return (
    <form className="search-form">
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          id="search-location"
          placeholder="Search Location"
          aria-label="Search Location"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary find-city"
          type="submit"
          value="submit"
        >
          <i class="fas fa-search"></i>
        </button>
        <button className="btn btn-outline-secondary pin-button" type="button">
          <i class="fas fa-map-pin"></i>
        </button>
      </div>
    </form>
  );
}
