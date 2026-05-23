const STORAGE_KEY = "projects";

function getProjects(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveProjects(data){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function saveProject(){
    const title = titleInput.value;
    const desc = descInput.value;
    const category = categoryInput.value;
    const editIndex = editIndexInput.value;

    if(!title || !desc || !category){
        alert("Lengkapi data!");
        return;
    }

    const projects = getProjects();
    const imageFile = imageInput.files[0];
    const projectFile = fileInput.files[0];

    const project = { title, desc, category, image:"", file:"", fileName:"" };

    const readImage = imageFile ? readFile(imageFile) : Promise.resolve("");
    const readProject = projectFile ? readFile(projectFile) : Promise.resolve("");

    Promise.all([readImage, readProject]).then(([img, file])=>{
        project.image = img;
        project.file = file;
        project.fileName = projectFile ? projectFile.name : "";

        if(editIndex === ""){
            projects.push(project);
        } else {
            projects[editIndex] = project;
        }

        saveProjects(projects);
        clearForm();
        renderAdmin();
    });
}

function readFile(file){
    return new Promise(resolve=>{
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.readAsDataURL(file);
    });
}

function renderAdmin(){
    adminList.innerHTML = "";
    getProjects().forEach((p,i)=>{
        adminList.innerHTML += `
            <div class="card">
                <b>${p.title}</b> (${p.category})<br>
                <button class="btn" onclick="editProject(${i})">Edit</button>
                <button class="btn" onclick="deleteProject(${i})">Hapus</button>
            </div>
        `;
    });
}

function editProject(i){
    const p = getProjects()[i];
    titleInput.value = p.title;
    descInput.value = p.desc;
    categoryInput.value = p.category;
    editIndexInput.value = i;
}

function deleteProject(i){
    const projects = getProjects();
    projects.splice(i,1);
    saveProjects(projects);
    renderAdmin();
}

function clearForm(){
    titleInput.value = "";
    descInput.value = "";
    categoryInput.value = "";
    imageInput.value = "";
    fileInput.value = "";
    editIndexInput.value = "";
}

/* ELEMENTS */
const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");
const categoryInput = document.getElementById("category");
const imageInput = document.getElementById("imageFile");
const fileInput = document.getElementById("projectFile");
const editIndexInput = document.getElementById("editIndex");
const adminList = document.getElementById("adminList");

renderAdmin();
