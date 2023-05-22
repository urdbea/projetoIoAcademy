<template>
    <head>
        <link rel="stylesheet" href="path/to/bootstrap.css">
    </head>

    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">My App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <h2>Add a Form</h2>
            <form @submit="submitForm">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" v-model="formData.name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" v-model="formData.email" required>
                </div>
                <div class="form-group">
                    <label for="text">Ideia de Projeto:</label>
                    <input type="text" class="form-control" id="ideia" v-model="formData.ideaProjeto" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </body>
</template>

<script>
export default {
    data() {
        return {
            isNavbarOpen: false,
            formData: {
                name: '',
                email: '',
                ideaProjeto:'',
            }
        };
    },
    methods: {
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },
        submitForm() {
            // Save form data to local storage
            localStorage.setItem('formData', JSON.stringify(this.formData));

            // Clear the form
            this.formData.name = '';
            this.formData.email = '';
            this.formData.ideaProjeto = '';
        },
    },
};
</script>

<style>
/* Add your custom styles for the navigation bar here */
</style>
