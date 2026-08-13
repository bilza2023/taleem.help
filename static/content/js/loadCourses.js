



export default async function loadCourses(selectId, selectedSlug = "") {

    const token = localStorage.getItem("taleem-token");

    const response = await fetch("/api/public/course");

    const courses = await response.json();

    const select = document.getElementById(selectId);

    select.innerHTML = "";

    for (const course of courses) {

        const option = document.createElement("option");

        option.value = course.slug;
        option.textContent = course.title;

        if (course.slug === selectedSlug)
            option.selected = true;

        select.appendChild(option);

    }

}