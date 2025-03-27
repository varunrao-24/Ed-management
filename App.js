import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarLayout from "./components/Sidebar/SidebarLayout";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import SaleInfo from "./components/SaleInfo"; 
import Tasks from "./components/Tasks"; 
import Ongoing from "./components/Ongoing";
import Performance from "./components/Performance";
import StatisticsLayout from "./components/Statistics/StatisticsLayout";
import LatestTasks from "./components/Latest_tasks/TaskListLayout";
import TopMarks from "./components/TopMarks/TableLayout";
import Growth from "./components/Growth";
import StdMainLayout from "./components/StdMainLayout"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ display: "flex", position: "relative" }}>
            {/* Sidebar Layout */}
            <SidebarLayout />

            {/* Main Content Area */}
            <div style={{ flexGrow: 1, padding: "20px" }}>
              <Dashboard />
              
              {/* Cards Container */}
              <div style={{ display: "flex", gap: "10px", overflowX: "auto", marginBottom: "20px" }}> 
                <SaleInfo style={{ flex: "1 1 20%" }} />
                <Tasks style={{ flex: "1 1 20%" }} />
                <Ongoing style={{ flex: "1 1 20%" }} />
                <Performance style={{ flex: "1 1 20%" }} />
              </div>

              {/* Main Content Layout */}
              <div style={{ display: "flex", gap: "20px" }}>
                {/* Left Column */}
                <div style={{ width: "65%" }}>
                  <StatisticsLayout />
                  <div style={{ marginTop: "20px" }}>
                    <TopMarks />
                  </div>
                </div>

                {/* Right Column */}
                <div style={{ width: "35%" }}>
                  <LatestTasks />
                  <div style={{ marginTop: "20px" }}>
                    <Growth />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Component */}
            <Profile />
          </div>
        } />
        <Route path="/profile" element={<StdMainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;



