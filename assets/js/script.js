const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

// script pour le menu burger
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('appear');
    console.log('clique')
});


// script pour la section Service
document.addEventListener('DOMContentLoaded', () => {
    const serviceSection = document.getElementById('services');
    const firstServiceText = document.getElementById('first_service');
    const secondServiceText = document.getElementById('second_service');
    const firstBoxImages = document.querySelectorAll('.first_box img');
    const secondBoxImages = document.querySelectorAll('.second_box img');

    function handleScroll() {
        const elementPosition = serviceSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (elementPosition.top <= windowHeight / 2 && elementPosition.bottom >= windowHeight / 2) {
            // Ajouter la classe qui déclenche l'animation pour le premier paragraphe
            firstServiceText.classList.add('slideIn');
            // Arrêter d'écouter le scroll une fois que l'animation est déclenchée
            window.removeEventListener('scroll', handleScroll);
        }
    }

    function handleFirstServiceAnimationEnd() {
        // Lorsqu'on détecte la fin de l'animation du premier paragraphe, animer les images de la première boîte
        firstBoxImages.forEach((image, index) => {
            image.style.animation = ''; // Réinitialise les animations précédentes
            image.style.animationDelay = `${index * 0.5}s`; // Ajoute un délai pour chaque image
            image.style.opacity = '1'; // Assure que les images sont visibles
            image.style.transform = 'scale(1)'; // Met les images à l'échelle normale
            image.style.animation = 'appearBox 2s forwards'; // Lance l'animation
        });

        // Ajouter la classe d'animation pour le second paragraphe après l'animation des images de la première boîte
        secondServiceText.classList.add('slideInLeft');
    }

    function handleSecondServiceAnimationEnd() {
        // Lorsqu'on détecte la fin de l'animation du second paragraphe, animer les images de la seconde boîte
        secondBoxImages.forEach((image, index) => {
            image.style.animation = ''; // Réinitialise les animations précédentes
            image.style.animationDelay = `${index * 0.5}s`; // Ajoute un délai pour chaque image
            image.style.opacity = '1'; // Assure que les images sont visibles
            image.style.transform = 'scale(1)'; // Met les images à l'échelle normale
            image.style.animation = 'appearBox 2s forwards'; // Lance l'animation
        });
    }

    // Écoute l'événement d'animation pour détecter la fin de slideIn
    firstServiceText.addEventListener('animationend', function(event) {
        if (event.animationName === 'slideInFromRight') {
            handleFirstServiceAnimationEnd();
        }
    });

    // Écoute l'événement d'animation pour détecter la fin de slideInLeft
    secondServiceText.addEventListener('animationend', function(event) {
        if (event.animationName === 'slideInFromLeft') {
            handleSecondServiceAnimationEnd();
        }
    });

    // Écoute l'événement de défilement
    window.addEventListener('scroll', handleScroll);

    // Appelle la fonction une première fois au chargement (pour le cas où l'élément est déjà visible)
    handleScroll();
});



// Script pour la section Projet
document.addEventListener('click', function(event) {
    if (event.target.closest('.project-filter li')) {
        const target = event.target.closest('.project-filter li');
        target.classList.add('project-filter-active');
        const siblings = target.parentElement.children;
        Array.prototype.forEach.call(siblings, function(sibling) {
            if (sibling !== target) {
                sibling.classList.remove('project-filter-active');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.list');
    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const value = this.getAttribute('data-filter');
            const projectBoxes = document.querySelectorAll('.project-box');
            
            if (value === 'all') {
                projectBoxes.forEach(function(box) {
                    box.style.display = 'block';
                });
            } else {
                projectBoxes.forEach(function(box) {
                    if (box.classList.contains(value)) {
                        box.style.display = 'block';
                    } else {
                        box.style.display = 'none';
                    }
                });
            }
        });
    });
});

document.querySelectorAll('.redirectBtn').forEach(button => {
    button.addEventListener('click', () => {
        redirectTo(button.id);
    })
})

function redirectTo(buttonId) {
    console.log(buttonId);
    window.location.href = buttonId + '.html';
}

// document.addEventListener('DOMContentLoaded', function() {
//     const projectBoxes = document.querySelectorAll('.project-box-link');
//     const projectDetails = document.getElementById('project-details');
//     const detailsIframe = document.getElementById('details-iframe');
//     const closeBtn = document.querySelector('.close-btn');
//     const detailsContent = document.querySelector('.details-content');

//     projectBoxes.forEach(box => {
//         box.addEventListener('click', function(event) {
//             // Prevent default action for project box link
//             event.preventDefault();
//         });

//         const viewMoreBtn = box.querySelector('.view-more-btn');
//         if (viewMoreBtn) {
//             viewMoreBtn.addEventListener('click', function(event) {
//                 event.preventDefault();
//                 const project = box.getAttribute('data-project');
//                 showProjectDetails(project);
//             });
//         }
//     });

//     closeBtn.addEventListener('click', function() {
//         closeProjectDetails();
//     });

//     projectDetails.addEventListener('click', function(event) {
//         if (!detailsContent.contains(event.target)) {
//             closeProjectDetails();
//         }
//     });

//     function showProjectDetails(project) {
//         const projectPages = {
//             'dashboard': 'dashboard.html',
//             'crescendo': 'crescendo.html',
//             'affiche_mmi': 'affiche_mmi.html',
//             'affiche_creme': 'affiche_creme.html',
//             'frontend_mentor': 'frontend_mentor.html',
//             'marlow': 'marlow.html',
//             'bugtracker': 'bugtracker.html',
//             'spine_skatepark': 'spine_skatepark.html',
//             'ecotracker': 'ecotracker.html'
//         };

//         const projectPage = projectPages[project];
//         if (projectPage) {
//             detailsIframe.src = projectPage;
//             projectDetails.style.display = 'flex';
//         }
//     }

//     function closeProjectDetails() {
//         projectDetails.style.display = 'none';
//         detailsIframe.src = '';
//     }
// });

