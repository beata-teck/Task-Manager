import React from 'react';
import './App.css';

import { stats, manager, teamMembers, notifications, recentActivity, projects, tasks } from './storage';

import Header from './Header/Header';
import Button from './Button/Button';
import AnchorLi from './AnchorLi/AnchorLi';
import Manager from './Manager/Manager';
import TeamCard from './TeamCard/TeamCard';
import NotificationCard from './NotificationCard/NotificationCard';
import RecentActivityCard from './RecentActivityCard/RecentActivityCard';
import StatCard from './StatCard/StatCard';
import ProjectCard from './ProjectCard/ProjectCard';
import TaskCard from './TaskCard/TaskCard';
import Footer from './Footer/Footer';

function Teams() {
  const teams = teamMembers.map(({ team_name, role, avatar }, idx) => {
    const key = `${team_name}-${role}-${idx}`;
    return <TeamCard key={key} team_name={team_name} role={role} avatar={avatar} />;
  });

  return (
    <div className="team-container">
      <h2 className="h2">Team Members</h2>
      <div className="inner-team-container">{teams}</div>
    </div>
  );
}

function Notifications() {
  const notification_list = notifications.map(({ noti_title, content, time }, idx) => {
    const key = `${noti_title}-${time}-${idx}`;
    return <NotificationCard key={key} noti_title={noti_title} content={content} time={time} />;
  });

  return (
    <div className="notifications">
      <h2 className="h2">Notifications</h2>
      <div className="notifications-container">{notification_list}</div>
    </div>
  );
}

function RecentActivity() {
  const recent_activity_list = recentActivity.map(({ person, deed, thing, time }, idx) => {
    const key = `${person}-${deed}-${thing}-${time}-${idx}`;
    return <RecentActivityCard key={key} person={person} deed={deed} thing={thing} time={time} />;
  });

  return (
    <div className="activity-container">
      <h2 className="h2">Recent Activity</h2>
      <div className="activity-list">{recent_activity_list}</div>
    </div>
  );
}

function Stats() {
  const statsList = stats.map(({ id, task_title, quan, task_status, task_color }) => {
    return (
      <StatCard
        key={id}
        // pass id if StatCard needs it internally:
        // id={id}
        task_title={task_title}
        quan={quan}
        task_status={task_status}
        task_color={task_color}
      />
    );
  });

  return <div className="card-container">{statsList}</div>;
}

function Projects() {
  const projects_list = projects.map(({ proj_title, description, members, date }, idx) => {
    const key = `${proj_title}-${date}-${idx}`;
    return (
      <ProjectCard
        key={key}
        proj_title={proj_title}
        description={description}
        members={members}
        date={date}
      />
    );
  });

  return <div className="project-container">{projects_list}</div>;
}

function Tasks() {
  const tasks_list = tasks.map(({ task_title, description, person, date }, idx) => {
    const key = `${task_title}-${person}-${date}-${idx}`;
    return (
      <TaskCard
        key={key}
        task_title={task_title}
        description={description}
        person={person}
        date={date}
      />
    );
  });

  return (
    <div className="tasks-container">
      <h2 className="tasks-header">Recent Tasks</h2>
      <div className="tasks-list">{tasks_list}</div>
    </div>
  );
}

function MainSection() {
  return (
    <section className="main-section">
      <div className="main-container">
        <main>
          <Stats />
          <Projects />
          <Tasks />
        </main>

        <aside>
          <Manager manager_name={manager.manager_name} title={manager.title} email={manager.email} avatar={manager.avatar} />
          <Teams />
          <Notifications />
          <RecentActivity />
        </aside>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}