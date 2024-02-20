<script setup>
import { ref, provide } from "vue";

// components
import Contact from "./components/ContactComponent/Contact.vue";
import About from "./components/About.vue";
import Education from "./components/Education.vue";
import WorkExperienceCard from "./components/WorkExperienceCard.vue";
import ProjectCard from "./components/ProjectComponent/ProjectCard.vue";
import Navbar from "./components/NavbarComponent/Navbar.vue";

const contact = ref({
    name: "Rio Gestavito",
    moto_profesional: "Fresh Graduate | Web Developer",
    location: "Indonesia, Bandung Barat",
    links: [
        { email: "mailto:riogesta.v@gmail.com" },
        { github: "https://github.com/riogesta" },
        { linkedin: "https://www.linkedin.com/in/rio-gestavito/" },
    ],
});

const about = ref(
    "Fresh Graduate lulusan Teknik Informatika dengan pengalaman magang dan kerja sebagai freelance web developer. Telah berhasil mengembangkan lebih dari 3 website dalam kurun waktu 3 bulan di akhir tahun 2023. Memiliki minat yang kuat dalam pengembangan aplikasi dan kemampuan untuk bekerja sambil terus belajar dan meningkatkan keterampilan."
);

const education = ref({
    universitas: "Universitas Jenderal Achmad Yani",
    jenjang: "S1",
    jurusan: "Teknik Informatika",
    tahun: "2019 - 2023",
});

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
        technologies: [
            "PHP",
            "Codeigniter 4",
            "Bootstrap",
            "jQuery",
            "MariaDB",
        ],
    },
    {
        project_name: "Katalog Buku",
        repo: "https://github.com/riogesta/katalog-buku-BE",
        deskripsi:
            "Aplikasi katalog buku sederhana yang mengimplementasikan restfull API.",
        technologies: [
            "Project Pribadi",
            "Backend",
            "Typescript",
            "Express",
            "SQLite",
        ],
    },
    {
        project_name: "KNN Flask",
        repo: "https://github.com/riogesta/KNN-Flask",
        deskripsi:
            "Klasifikasi data gagal ginjal menggunakan metode data mining KNN.",
        technologies: ["Python", "Flask", "Scikit Learn"],
    },
    {
        project_name: "Prediksi Harga Saham",
        repo: "https://github.com/riogesta/prediksi-svr",
        deskripsi:
            "Prediksi harga saham menggunakan metode data mining SVR (Support Vector Regression)",
        technologies: ["Python", "Flask", "Scikit Learn"],
    },
    {
        project_name: "Sistem Rekomendasi",
        repo: "https://github.com/riogesta/sistem-rekomendasi",
        deskripsi:
            "Sistem rekomendasi channel youtube menggunakan metode Collaborative Filtering",
        technologies: ["Python", "Flask", "Bootstrap", "SQLite"],
    },
]);

provide("works_experience", works_experience);
provide("projects", projects);
</script>

<template>
    <main
        class="container relative mx-auto overflow-auto scroll-my-12 print:p-12 md:p-16 md:m-5 md:mx-auto sm:p-5 p-5"
    >
        <section class="max-w-3xl mx-auto space-y-8">
            <Contact :contact="contact" />
            <About :about="about" />
            <Education :education="education" />
            <ProjectCard />
        </section>
    </main>
</template>
