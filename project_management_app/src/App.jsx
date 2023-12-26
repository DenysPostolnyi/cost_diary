import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from 'react';
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectID: undefined,
        projects: [],
        tasks: [],
    });

    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectID: null,
            };
        });
    }

    function handleAddTask(task) {
        setProjectsState(prevState => {
            const newTask = {
                text: task,
                projectID: prevState.selectedProjectID,
                id: Math.random()
            };
            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks]
            };
        });
    }

    function handleDeleteTask(id) {
        console.log(projectsState.tasks);
        console.log(id);
        setProjectsState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== id)
            };
        });
    }

    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectID);

    let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}
                                   onDeleteTask={handleDeleteTask} onAddTask={handleAddTask}
                                   tasks={projectsState.tasks}/>;

    if (projectsState.selectedProjectID === null) {
        content = <NewProject onCancel={handleCancel} onAddProject={handleAddProject}/>;
    } else if (projectsState.selectedProjectID === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
    }

    function handleAddProject(projectData) {
        setProjectsState(prevState => {
            const newProject = {
                ...projectData,
                id: Math.random()
            };
            return {
                ...prevState,
                selectedProjectID: undefined,
                projects: [...prevState.projects, newProject]
            };
        });
    }

    function handleCancel() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectID: undefined,
            };
        });
    }

    function handleSelectProject(id) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectID: id,
            };
        });
    }

    function handleDeleteProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectID: undefined,
                projects: prevState.projects.filter((project) => {
                    project.id !== prevState.selectedProjectID
                })
            };
        });
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectSidebar onStartAddProject={handleStartAddProject}
                            projects={projectsState.projects}
                            onSelectProject={handleSelectProject}
                            selectedProjectId={projectsState.selectedProjectID}/>
            {content}
        </main>
    );
}

export default App;
