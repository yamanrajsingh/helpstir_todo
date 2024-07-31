import { useEffect, useState } from "react";

function Search({Tasks}) {
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search tasks..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
         Search
        </button>
      </div>
    </div>
  );
}

export default Search;
