

import "./Dashboard.css";
import { useTasks } from "./useTasks";
import { useFilteredTasks } from "./Search";
import { useState, useMemo } from "react";
import TasksGrid from "./TasksGrid";
import Add from "./Add";
import DeleteItem from "./Delete";
import Update from "./Update";

export default function Dashboard() {

    const {
    arr,
    formadd,
    formEdit,
    showaddmodel,
    Deleted,
    selectid,
    Edit,
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
    ToggleComplete
  } = useTasks();


  const [currentFilter, setCurrentFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredArr = useFilteredTasks(arr, currentFilter, searchTerm);

  const total = arr.length;
  const completed = arr.filter(t => t.Completed).length;
  const pending = arr.filter(t => !t.Completed).length;
  const highPriority = arr.filter(t => t.priority === '🔴 High').length;
  const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const overdueTasks = useMemo(() => {
    return arr.filter(task => {
      if (task.Completed) return false;
      const due = new Date(task.Due.replace('📅 Due: ', ''));
      due.setHours(0, 0, 0, 0);
      return due < today;
    });
  }, [arr]);


  const upcomingTasks = useMemo(() => {
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    return arr.filter(task => {
      if (task.Completed) return false;
      const due = new Date(task.Due.replace('📅 Due: ', ''));
      due.setHours(0, 0, 0, 0);
      return due >= today && due <= nextWeek;
    });
  }, [arr]);

  const priorityDist = useMemo(() => {
    const high = arr.filter(t => t.priority === '🔴 High').length;
    const medium = arr.filter(t => t.priority === '🟡 Medium').length;
    const low = arr.filter(t => t.priority === '🟢 Low').length;
    const max = Math.max(high, medium, low, 1);
    return { high, medium, low, max };
  }, [arr]);


  const thisWeekTasks = useMemo(() => {
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // الأحد
    return arr.filter(task => {
      const created = new Date(task.id); 
      return created >= startOfWeek;
    });
  }, [arr]);


  const avgDailyCompleted = useMemo(() => {
    if (arr.length === 0) return 0;
    const last7Days = arr.filter(task => {
      const created = new Date(task.id);
      const diffDays = (today - created) / (1000 * 60 * 60 * 24);
      return diffDays <= 7 && task.Completed;
    });
    return (last7Days.length / 7).toFixed(1);
  }, [arr]);


  const recentTasks = useMemo(() => {
    return [...arr].sort((a, b) => b.id - a.id).slice(0, 5);
  }, [arr]);


  const todayTasks = useMemo(() => {
    return arr.filter(task => {
      const due = new Date(task.Due.replace('📅 Due: ', ''));
      due.setHours(0, 0, 0, 0);
      return due.getTime() === today.getTime();
    });
  }, [arr]);


  const completedThisMonth = useMemo(() => {
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return arr.filter(task => {
      const created = new Date(task.id);
      return created >= startOfMonth && task.Completed;
    }).length;
  }, [arr]);

  const handleQuickComplete = (id) => {
    ToggleComplete(id);
  };


  return (
    <>
      <main className="dashboard-page">

        <section className="dashboard-header">
          <div>
            <h1>📊 Dashboard</h1>
            <p>Overview of your tasks and performance</p>
          </div>
          <button onClick={OpenModelAdd} className="add-btn">
            ➕ New Task
          </button>
        </section>

        <section className="stats-grid">
          <div className="stat-card total">
            <span className="stat-icon">📌</span>
            <div>
              <h2>{total}</h2>
              <span>Total Tasks</span>
            </div>
          </div>
          <div className="stat-card completed">
            <span className="stat-icon">✅</span>
            <div>
              <h2>{completed}</h2>
              <span>Completed</span>
            </div>
          </div>
          <div className="stat-card pending">
            <span className="stat-icon">⏳</span>
            <div>
              <h2>{pending}</h2>
              <span>Pending</span>
            </div>
          </div>
          <div className="stat-card high">
            <span className="stat-icon">🔥</span>
            <div>
              <h2>{highPriority}</h2>
              <span>High Priority</span>
            </div>
          </div>
        </section>

        <section className="dashboard-row">

          <div className="dashboard-card completion-card">
            <h3>📈 Completion Rate</h3>
            <div className="completion-circle">
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" className="circle-bg" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  className="circle-progress"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 50 * (completionRate / 100)} ${2 * Math.PI * 50}`
                  }}
                />
              </svg>
              <div className="completion-text">
                <span className="percentage">{completionRate}%</span>
                <span className="label">Done</span>
              </div>
            </div>
            <p className="completion-sub">
              {completed} of {total} tasks completed
            </p>
            <div className="completion-stats">
              <span>📅 Avg. daily: {avgDailyCompleted}</span>
              <span>📆 This month: {completedThisMonth}</span>
            </div>
          </div>


          <div className="dashboard-card priority-card">
            <h3>🎯 Priority Distribution</h3>
            <div className="priority-bars">
              <div className="priority-bar-item">
                <span className="priority-label">🔴 High</span>
                <div className="bar-track">
                  <div
                    className="bar-fill high"
                    style={{ width: `${(priorityDist.high / priorityDist.max) * 100}%` }}
                  />
                </div>
                <span className="priority-count">{priorityDist.high}</span>
              </div>
              <div className="priority-bar-item">
                <span className="priority-label">🟡 Medium</span>
                <div className="bar-track">
                  <div
                    className="bar-fill medium"
                    style={{ width: `${(priorityDist.medium / priorityDist.max) * 100}%` }}
                  />
                </div>
                <span className="priority-count">{priorityDist.medium}</span>
              </div>
              <div className="priority-bar-item">
                <span className="priority-label">🟢 Low</span>
                <div className="bar-track">
                  <div
                    className="bar-fill low"
                    style={{ width: `${(priorityDist.low / priorityDist.max) * 100}%` }}
                  />
                </div>
                <span className="priority-count">{priorityDist.low}</span>
              </div>
            </div>
            <div className="priority-extra">
              <span>📊 This week: {thisWeekTasks.length} tasks added</span>
            </div>
          </div>


          <div className="dashboard-card today-card">
            <h3>📅 Today's Tasks</h3>
            {todayTasks.length === 0 ? (
              <p className="empty-message">🎉 No tasks due today!</p>
            ) : (
              <ul className="today-list">
                {todayTasks.slice(0, 5).map(task => (
                  <li key={task.id} className="today-item">
                    <span className="today-title">{task.title}</span>
                    <span className="today-priority">{task.priority}</span>
                    <button
                      className="today-complete"
                      onClick={() => handleQuickComplete(task.id)}
                    >
                      ✅
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>


        <section className="alerts-row">
          {overdueTasks.length > 0 && (
            <div className="alert-card overdue">
              <div className="alert-header">
                <span className="alert-icon">⏰</span>
                <h4>Overdue Tasks</h4>
                <span className="alert-badge">{overdueTasks.length}</span>
              </div>
              <ul className="alert-list">
                {overdueTasks.slice(0, 4).map(task => (
                  <li key={task.id}>
                    <span>{task.title}</span>
                    <span className="alert-date">{task.Due}</span>
                    <button
                      className="alert-complete"
                      onClick={() => handleQuickComplete(task.id)}
                    >
                      Complete
                    </button>
                  </li>
                ))}
                {overdueTasks.length > 4 && <li>... and {overdueTasks.length - 4} more</li>}
              </ul>
            </div>
          )}

          {upcomingTasks.length > 0 && (
            <div className="alert-card upcoming">
              <div className="alert-header">
                <span className="alert-icon">📆</span>
                <h4>Upcoming (7 days)</h4>
                <span className="alert-badge">{upcomingTasks.length}</span>
              </div>
              <ul className="alert-list">
                {upcomingTasks.slice(0, 4).map(task => (
                  <li key={task.id}>
                    <span>{task.title}</span>
                    <span className="alert-date">{task.Due}</span>
                  </li>
                ))}
                {upcomingTasks.length > 4 && <li>... and {upcomingTasks.length - 4} more</li>}
              </ul>
            </div>
          )}
        </section>


        <section className="dashboard-card recent-card">
          <h3>📝 Recent Tasks</h3>
          <div className="recent-grid">
            {recentTasks.map(task => (
              <div className="recent-item" key={task.id}>
                <div className="recent-info">
                  <span className="recent-title">{task.title}</span>
                  <span className="recent-priority">{task.priority}</span>
                </div>
                <div className="recent-actions">
                  <span className="recent-status">{task.status}</span>
                  <button
                    className="recent-complete"
                    onClick={() => handleQuickComplete(task.id)}
                    style={{ backgroundColor: task.Completed ? '#22c55e' : '#6366f1' }}
                  >
                    {task.Completed ? '✅' : '☑️'}
                  </button>
                  <button
                    className="recent-delete"
                    onClick={() => OpenDeleteModel(task.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="dashboard-tasks-section">
          <div className="section-header">
            <h2>📋 All Tasks</h2>
            <div className="section-controls">
              <input
                type="text"
                placeholder="🔍 Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <select
                onChange={(e) => setCurrentFilter(e.target.value)}
                value={currentFilter}
                className="filter-select"
              >
                <option value="All">📂 All</option>
                <option value="High">🔥 High</option>
                <option value="Medium">🟡 Medium</option>
                <option value="Low">🟢 Low</option>
              </select>
            </div>
          </div>

          <TasksGrid
            tasks={filteredArr}
            onEdit={OpenEdit}
            onDelete={OpenDeleteModel}
            onToggleComplete={ToggleComplete}
          />
        </section>
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