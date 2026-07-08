import "./Tasks.css";
import { useFilteredTasks } from "./Search";
import { useTasks } from "./useTasks";
import TasksHeader from "./TasksHeader";
import TasksStats from "./TasksStats";
import TasksToolbar from "./TasksToolbar";
import TasksGrid from "./TasksGrid";
import Add from "./Add";
import DeleteItem from "./Delete";
import Update from "./Update";
import { useState } from "react";

export default function Tasks() {

  const {
    arr,
    formadd,
    formEdit,
    showaddmodel,
    Deleted,
    selectid,
    Edit,
    TotalProduct,
    Completed,
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
    SortByName,
    SortByDate,
    SortByPriority,
    ToggleComplete
  } = useTasks();


  const [currentFilter, setCurrentFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredArr = useFilteredTasks(arr, currentFilter, searchTerm);

  return (
    <>
      <main className="tasks-page">
        <TasksHeader onAddTask={OpenModelAdd} />

        <TasksStats
          total={TotalProduct}
          completed={Completed}
          pending={Status}
          highPriority={HighPriority}
        />

        <TasksToolbar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
          onSortByName={SortByName}
          onSortByDate={SortByDate}
          onSortByPriority={SortByPriority}
        />

        <TasksGrid
          tasks={filteredArr}
          onEdit={OpenEdit}
          onDelete={OpenDeleteModel}
          onToggleComplete={ToggleComplete}
        />
      </main>

      <Add
        CloseModal={CloseModal}
        formadd={formadd}
        HandleInput={HandleInput}
        AddTask={AddTask}
        showaddmodel={showaddmodel}
      />

      <DeleteItem
        Deleted={Deleted}
        CloseDeleteModel={CloseDeleteModel}
        Delete={Delete}
        selectid={selectid}
      />

      <Update
        Edit={Edit}
        CloseEditModal={CloseEditModal}
        formEdit={formEdit}
        HandleEditInput={HandleEditInput}
        SaveEdit={SaveEdit}
      />
    </>
  );
}