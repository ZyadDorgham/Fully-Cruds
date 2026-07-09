
import { useState, useEffect,useMemo } from "react";

const priorityMap = {
  "High": "🔴 High",
  "Medium": "🟡 Medium",
  "Low": "🟢 Low"
};

const initial = [
  {
    id: 1,
    title: "Finish React Project",
    priority: "🔴 High",
    desc: "Complete the portfolio project with all features.",
    Due: "📅 Due: Jul 20, 2026",
    status: "⏳ Pending",
    Completed: false
  },
];

export function useTasks() {
  const [arr, setarr] = useState(() => {
    const data = localStorage.getItem("Items");
    return data ? JSON.parse(data) : initial;
  });

  const [showaddmodel, setshowaddmodel] = useState(false);
  const [Deleted, setdeleted] = useState(false);
  const [selectid, setselectid] = useState(null);
  const [Edit, setedit] = useState(false);

  const [formadd, setformadd] = useState({
    title: "",
    Priority: "",
    Date: "",
    Description: "",
    Status: "",
  });

  const [formEdit, setformEdit] = useState({
    title: "",
    Priority: "",
    Date: "",
    Description: "",
    Status: ""
  });

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(arr));
  }, [arr]);

  function HandleInput(e) {
    const { name, value, checked, type } = e.target;
    setformadd((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function HandleEditInput(e) {
    const { name, value, checked, type } = e.target;
    setformEdit((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function AddTask() {
    if (
      formadd.title === "" ||
      formadd.Priority === "" ||
      formadd.Date === "" ||
      formadd.Description === "" ||
      formadd.Status === ""
    )
      return;

    setarr([
      ...arr,
      {
        id: Date.now(),
        title: formadd.title,
        priority: priorityMap[formadd.Priority] || formadd.Priority,
        desc: formadd.Description,
        Due: `📅 Due: ${formadd.Date}`,
        status: `⏳ ${formadd.Status}`,
        Completed: false
      },
    ]);

    setformadd({
      title: "",
      Priority: "",
      Date: "",
      Description: "",
      Status: "",
    });
    setshowaddmodel(false);
  }

  function OpenModelAdd() {
    setshowaddmodel(true);
  }

  function CloseModal() {
    setshowaddmodel(false);
    setformadd({
      title: "",
      Priority: "",
      Date: "",
      Description: "",
      Status: "",
    });
  }

  function OpenDeleteModel(id) {
    setdeleted(true);
    setselectid(id);
  }

  function CloseDeleteModel() {
    setdeleted(false);
    setselectid(null);
  }

  function Delete(id) {
    const filtered = arr.filter((e) => e.id !== id);
    setarr(filtered);
    setdeleted(false);
    setselectid(null);
  }

  function OpenEdit(id) {
    const task = arr.find((t) => t.id === id);
    if (task) {
      setformEdit({
        title: task.title,
        Priority: task.priority,
        Date: task.Due.replace("📅 Due: ", ""),
        Description: task.desc,
        Status: task.status.replace("⏳ ", ""),
      });
      setselectid(id);
      setedit(true);
    }
  }

  function CloseEditModal() {
    setedit(false);
    setselectid(null);
    setformEdit({
      title: "",
      Priority: "",
      Date: "",
      Description: "",
      Status: "",
    });
  }

  function SaveEdit() {
    const id = selectid;
    if (
      formEdit.title === "" ||
      formEdit.Priority === "" ||
      formEdit.Date === "" ||
      formEdit.Description === "" ||
      formEdit.Status === ""
    ) {
      alert("All fields must be filled!");
      return;
    }

    const updated = arr.map((e) =>
      e.id === id
        ? {
            ...e,
            title: formEdit.title,
            priority: priorityMap[formEdit.Priority] || formEdit.Priority,
            desc: formEdit.Description,
            Due: `📅 Due: ${formEdit.Date}`,
            status: `⏳ ${formEdit.Status}`,
          }
        : e
    );

    setarr(updated);
    setedit(false);
    setselectid(null);
  }

 const Sorting =  useMemo(()=>{
    return function SortByName() {
    let sort = [...arr].sort((start, end) => {
      return start.title.localeCompare(end.title);
    });
    setarr(sort);
  }
  },[arr])
  
  const SortDate = useMemo(()=>{
    return function SortByDate() {
    const sorted = [...arr].sort((a, b) => {
      const dateA = new Date(a.Due.replace("📅 Due: ", ""));
      const dateB = new Date(b.Due.replace("📅 Due: ", ""));
      return dateA - dateB;
    });
    setarr(sorted);
  }
  },[arr])

  const SortPiriority  =useMemo(()=>{
    return function SortByPriority() {
    const priorityOrder = { "🔴 High": 3, "🟡 Medium": 2, "🟢 Low": 1 };
    const sorted = [...arr].sort((a, b) => {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    setarr(sorted);
  }
  },[arr])

  function ToggleComplete(id) {
    let map = arr.map((e) => {
      if (e.id === id) {
        return { ...e, Completed: !e.Completed };
      } else {
        return e;
      }
    });
    setarr(map);
  }

  const TotalProduct = arr.length;

  const Complete = useMemo(()=>{
    return  arr.reduce((start, end) => {
    if (end.Completed) start++;
    return start;
  }, 0);
  },[arr])

  const Status = useMemo(()=>{
    return arr.filter(item => item.status === '⏳ Pending').length;
  },[arr])
  const HighPriority = useMemo(()=>{
    return arr.filter(item => item.priority === '🔴 High').length;
  },[arr])

  return {
    arr,
    formadd,
    formEdit,
    showaddmodel,
    Deleted,
    selectid,
    Edit,
    TotalProduct,
    Complete,
    Status,
    HighPriority,
    HandleInput,
    HandleEditInput,
    AddTask,
    OpenModelAdd,
    CloseModal,
    OpenDeleteModel,
    CloseDeleteModel,
    Delete,
    OpenEdit,
    CloseEditModal,
    SaveEdit,
    Sorting,
    SortDate,
    SortPiriority,
    ToggleComplete
  };
}