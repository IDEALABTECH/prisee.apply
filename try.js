 const jobs = [
    { title: "Member of Academic Team for ITECHCODE", house: "IDEALAB Divsion"},
     { title: "Member of W&M Team", house: "IDEALAB Division" },

    { title: "Member of Design Team for IDEALAB", house: "IDEALAB Division" },
    { title: "Member of Finance-ER Team", house: "IDEALAB Division" },
    { title: "Member of Program Team for IDEALAB", house: "IDEALAB Division" },
    { title: "Member of Website Developer", house: "IDEALAB Division" },
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
window.onload = () => displayJobs(jobs);let zoomLevel = 1; // Keeps track of the current zoom level

// Zoom In functionality
function zoomIn() {
    const modalContent = document.querySelector('#jobModal .modal-content');
    zoomLevel += 0.5; // Increment zoom level
    modalContent.style.transform = `scale(${zoomLevel})`;
    modalContent.style.transition = 'transform 0.3s ease';
}

// Zoom Out functionality
function zoomOut() {
    const modalContent = document.querySelector('#jobModal .modal-content');
    zoomLevel = Math.max(1, zoomLevel - 0.5); // Decrement zoom level, minimum 1
    modalContent.style.transform = `scale(${zoomLevel})`;
    modalContent.style.transition = 'transform 0.3s ease';
}

// Open in New Tab functionality
function openInNewTab() {
    const jobImage = document.getElementById('jobImage').src;
    window.open(jobImage, '_blank');
}
