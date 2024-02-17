<script setup>
import { ref, provide } from "vue";

// components
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";
import WorkExperienceCard from "./components/WorkExperienceCard.vue";
import ProjectsCard from "./components/ProjectComponent/ProjectsCard.vue";

const contact = ref({
    name: "Rio Gestavito",
    moto_profesional: "Fresh Graduate | Web Developer",
    location: "Indonesia, Bandung Barat",
});

const about = ref(
    "Fresh Graduate lulusan Teknik Informatika dengan pengalaman magang dan kerja sebagai freelance web developer. Telah berhasil mengembangkan lebih dari 3 website dalam kurun waktu 3 bulan di akhir tahun 2023. Memiliki minat yang kuat dalam pengembangan aplikasi dan kemampuan untuk bekerja sambil terus belajar dan meningkatkan keterampilan."
);

const works_experience = ref([
    {
        id: 0,
        perusahaan: "TEDC BANDUNG",
        stack: "FULL STACK",
        lama: "1 Bulan",
        deskripsi:
            "Pengambangan Aplikasi digital untuk menggantikan sistem pendataan alat tulis kantor konvensional :",
    },
]);

const projects = ref([
    {
        project_name: "Alat Tulis Kantor",
        repo: "https://github.com/riogesta/atk-tedc",
        deskripsi:
            "Pengambangan Aplikasi digital untuk menggantikan sistem pendataan alat tulis kantor konvensional.",
        technologies: ["PHP", "Codeigniter 4", "Bootstrap"],
    },
    {
        project_name: "Katalog Buku",
        repo: "https://github.com/riogesta/katalog-buku-BE",
        deskripsi:
            "Pengambangan Aplikasi digital untuk menggantikan sistem pendataan alat tulis kantor konvensional.",
        technologies: ["Project Pribadi", "Backend", "Typescript", "Express"],
    },
    {
        project_name: "KNN Flask",
        repo: "https://github.com/riogesta/KNN-Flask",
        deskripsi: "Klasifikasi data paru paru menggunakan KNN.",
        technologies: ["Python", "Flask", "Scikit Learn"],
    },
]);

provide("works_experience", works_experience);
provide("projects", projects);
</script>

<template>
    <main
        class="container mx-auto relative scoll-my-12 overflow-auto p-4 md:p-16"
    >
        <section class="mx-auto w-full max-w-2xl space-y-8">
            <Contact :contact="contact" />
            <About :about="about" />
            <hr />
            <WorkExperienceCard />
            <hr />
            <ProjectsCard />
        </section>
    </main>
</template>
