import { useEffect, useState } from "react";

export function useFilteredTasks(arr, currentFilter, searchTerm) {
  const [filteredArr, setFilteredArr] = useState(arr);

  useEffect(() => {
    let result = arr;
    if (currentFilter === "High") {
      result = result.filter((e) => e.priority === "🔴 High");
    } else if (currentFilter === "Medium") {
      result = result.filter((e) => e.priority === "🟡 Medium");
    } else if (currentFilter === "Low") {
      result = result.filter((e) => e.priority === "🟢 Low");
    }
    if (searchTerm.trim() !== "") {
      result = result.filter((e) =>
        e.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredArr(result);
  }, [arr, currentFilter, searchTerm]);

  return filteredArr;
}