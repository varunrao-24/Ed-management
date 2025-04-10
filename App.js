// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SidebarLayout from "./components/Sidebar/SidebarLayout";
// import Dashboard from "./components/Dashboard";
// import Profile from "./components/Profile";
// import SaleInfo from "./components/SaleInfo"; 
// import Tasks from "./components/Tasks"; 
// import Ongoing from "./components/Ongoing";
// import Performance from "./components/Performance";
// import StatisticsLayout from "./components/Statistics/StatisticsLayout";
// import LatestTasks from "./components/Latest_tasks/TaskListLayout";
// import TopMarks from "./components/TopMarks/TableLayout";
// import Growth from "./components/Growth";
// import StdMainLayout from "./components/StdMainLayout"; 
// import StdTasksLayout from "./components/StdTasksLayout"; 
// import SubmitTasksLayout from "./components/SubmitTasksLayout"; 
// import EditTasksLayout from "./components/EditTasksLayout"; 
// import ViewMarksLayout from "./components/ViewMarksLayout";
// import NotificationsLayout from "./components/NotificationsLayout"; // Import NotificationsLayout

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <div style={{ display: "flex", position: "relative" }}>
//             <SidebarLayout />
//             <div style={{ flexGrow: 1, padding: "20px" }}>
//               <Dashboard />
//               <div style={{ display: "flex", gap: "10px", overflowX: "auto", marginBottom: "20px" }}> 
//                 <SaleInfo style={{ flex: "1 1 20%" }} />
//                 <Tasks style={{ flex: "1 1 20%" }} />
//                 <Ongoing style={{ flex: "1 1 20%" }} />
//                 <Performance style={{ flex: "1 1 20%" }} />
//               </div>
//               <div style={{ display: "flex", gap: "20px" }}>
//                 <div style={{ width: "65%" }}>
//                   <StatisticsLayout />
//                   <div style={{ marginTop: "20px" }}>
//                     <TopMarks />
//                   </div>
//                 </div>
//                 <div style={{ width: "35%" }}>
//                   <LatestTasks />
//                   <div style={{ marginTop: "20px" }}>
//                     <Growth />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Profile />
//           </div>
//         } />
//         <Route path="/profile" element={<StdMainLayout />} />
//         <Route path="/tasks" element={<StdTasksLayout />} />
//         <Route path="/submit-task" element={<SubmitTasksLayout />} />
//         <Route path="/edit-submit" element={<EditTasksLayout />} />
//         <Route path="/view-marks" element={<ViewMarksLayout />} />
//         <Route path="/notifications" element={<NotificationsLayout />} /> {/* Add this route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;









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
import StdTasksLayout from "./components/StdTasksLayout"; 
import SubmitTasksLayout from "./components/SubmitTasksLayout"; 
import EditTasksLayout from "./components/EditTasksLayout"; 
import ViewMarksLayout from "./components/ViewMarksLayout";
import NotificationsLayout from "./components/NotificationsLayout";
import AnnouncementsLayout from "./components/AnnouncementsLayout"; // Import AnnouncementsLayout

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ display: "flex", position: "relative" }}>
            <SidebarLayout />
            <div style={{ flexGrow: 1, padding: "20px" }}>
              <Dashboard />
              <div style={{ display: "flex", gap: "10px", overflowX: "auto", marginBottom: "20px" }}> 
                <SaleInfo style={{ flex: "1 1 20%" }} />
                <Tasks style={{ flex: "1 1 20%" }} />
                <Ongoing style={{ flex: "1 1 20%" }} />
                <Performance style={{ flex: "1 1 20%" }} />
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ width: "65%" }}>
                  <StatisticsLayout />
                  <div style={{ marginTop: "20px" }}>
                    <TopMarks />
                  </div>
                </div>
                <div style={{ width: "35%" }}>
                  <LatestTasks />
                  <div style={{ marginTop: "20px" }}>
                    <Growth />
                  </div>
                </div>
              </div>
            </div>
            <Profile />
          </div>
        } />
        <Route path="/profile" element={<StdMainLayout />} />
        <Route path="/tasks" element={<StdTasksLayout />} />
        <Route path="/submit-task" element={<SubmitTasksLayout />} />
        <Route path="/edit-submit" element={<EditTasksLayout />} />
        <Route path="/view-marks" element={<ViewMarksLayout />} />
        <Route path="/notifications" element={<NotificationsLayout />} />
        <Route path="/announcements" element={<AnnouncementsLayout />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
