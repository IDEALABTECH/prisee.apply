const jobs = [
    { title: "Member of Design Team", house: "IDEALAB Divsion"},
    { title: "Member of ItechCode", house: "IDEALAB Division" },
    { title: "Member of ItechW&M", house: "IDEALAB Division" },
    { title: "Member of ItechCamp", house: "IDEALAB Division" },
    { title: "Member of ItechINSPIRE", house: "IDEALAB Division" },
    { title: "Member of Program Team", house: "IDEALAB Division" },

    { title: "Member of Photo Team", house: "SYMPOSIA Division" },
    { title: "Member of Content Team", house: "SYMPOSIA Division" },
        { title: "Member of Design Team", house: "SYMPOSIA Division" },


            { title: "Leader of ER Team", house: "PHOTON Division" },
      { title: "Member of Content and Learning Materials Team", house: "PHOTON Division" },
      { title: "Member of ER Team", house: "PHOTON Division" },
      { title: "Vice chief", house: "PHOTON Division" },
    
      { title: "Member", house: "EUREKA Division" },

    


    { title: "Member of HR Team", house: "HR" },


    // Thêm các công việc khác
];
function displayJobs(jobList) {
    const jobsContainer = document.getElementById("jobs");
    jobsContainer.innerHTML = "";
    jobList.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job");
        jobElement.innerHTML = `
         <h2 style="font-weight:bolder">${job.title}</h2>            
            <p style="font-size:25px;color: darkblue; font-weight: bold; letter-spacing: 2px">Khối/Ban: ${job.house}</p>
            <br/>
            <button onclick="openJobModal('${job.title}')">Xem Mô Tả</button>
            <button onclick="openApplyModal()">Ứng tuyển</button>
        `;
        jobsContainer.appendChild(jobElement);
    });
}
function filterJobs() {
const search = document.getElementById("search").value.toLowerCase();
const house = document.getElementById("house").value;
const filteredJobs = jobs.filter(job => {
    return (house === "all" || job.house === house) &&
           (job.title.toLowerCase().includes(search));
});

displayJobs(filteredJobs);
}
function openJobModal(jobTitle) {
document.getElementById("jobModal").style.display = "flex";
document.getElementById("jobImage").src = `images/${jobTitle}.png`; // Dùng tên file ảnh tùy theo tiêu đề công việc
}
function closeJobModal() {
document.getElementById("jobModal").style.display = "none";
}
function openApplyModal() {
document.getElementById("applyModal").style.display = "flex";
}
function closeApplyModal() {
document.getElementById("applyModal").style.display = "none";
}
window.onload = () => displayJobs(jobs);
