let map;
async function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

initMap();

var marker = new google.maps.Marker({
    position: { lat: 20.5937, lng: 78.9629 },
    map: map,
    title: 'Hello World!'
});



// Timer
function updateTimer() {
    const now = new Date().getTime();
    const elapsedTime = now - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById('timer').innerText = `Mission Time :${hours}:${minutes}:${seconds}`;
}

// function formatTime(value) {
//   return value < 10 ? `0${value}` : value;
// }

let startTime = new Date().getTime();

const timerInterval = setInterval(updateTimer, 1000);

// const duration = 10000;
// setTimeout(function() {
//   clearInterval(timerInterval);
//   document.getElementById('timer').innerText = 'Timer Stopped';
// }, duration);

//1 
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('rollingChart').getContext('2d');
    var rollingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Chart',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                data: [],
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    min: 0,
                    max: 100
                }
            }
        }
    });

    setInterval(function () {
        var newDataPoint = Math.floor(Math.random() * 100);
        rollingChart.data.labels.push(rollingChart.data.labels.length);
        rollingChart.data.datasets[0].data.push(newDataPoint);
        rollingChart.update();
    }, 1000);
});
//2
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('rollingChart2').getContext('2d');
    var rollingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Chart',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                data: [],
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    min: 0,
                    max: 100
                }
            }
        }
    });

    setInterval(function () {
        var newDataPoint = Math.floor(Math.random() * 100);
        rollingChart.data.labels.push(rollingChart.data.labels.length);
        rollingChart.data.datasets[0].data.push(newDataPoint);

        rollingChart.update();
    }, 1000);
});
//3
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('rollingChart3').getContext('2d');
    var rollingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Chart',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                data: [],
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    min: 0,
                    max: 100
                }
            }
        }
    });

    setInterval(function () {
        var newDataPoint = Math.floor(Math.random() * 100);
        rollingChart.data.labels.push(rollingChart.data.labels.length);
        rollingChart.data.datasets[0].data.push(newDataPoint);

        rollingChart.update();
    }, 1000);
});
//4
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('rollingChart4').getContext('2d');
    var rollingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Chart',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                data: [],
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    min: 0,
                    max: 100
                }
            }
        }
    });

    setInterval(function () {
        var newDataPoint = Math.floor(Math.random() * 100);
        rollingChart.data.labels.push(rollingChart.data.labels.length);
        rollingChart.data.datasets[0].data.push(newDataPoint);

        rollingChart.update();
    }, 1000);
});

//5
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('rollingChart5').getContext('2d');
    var rollingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Chart',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                data: [],
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    min: 0,
                    max: 100
                }
            }
        }
    });
    setInterval(function () {
        var newDataPoint = Math.floor(Math.random() * 100);
        rollingChart.data.labels.push(rollingChart.data.labels.length);
        rollingChart.data.datasets[0].data.push(newDataPoint);
        rollingChart.update();
    }, 1000);
});

//6
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('rollingChart6').getContext('2d');
    var rollingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Chart',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                data: [],
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    min: 0,
                    max: 100
                }
            }
        }
    });

    setInterval(function () {
        var newDataPoint = Math.floor(Math.random() * 100);
        rollingChart.data.labels.push(rollingChart.data.labels.length);
        rollingChart.data.datasets[0].data.push(newDataPoint);


        rollingChart.update();
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('graph-container').appendChild(renderer.domElement);

    // Sample data points with latitude, longitude, and altitude
    const dataPoints = [
        { latitude: 37.7749, longitude: -122.4194, altitude: 100 },
        { latitude: 40.7128, longitude: -74.0060, altitude: 150 },
        { latitude: 34.0522, longitude: -118.2437, altitude: 80 },
        // Add more data points as needed
    ];

    // Create spheres for each data point
    const sphereGeometry = new THREE.SphereGeometry(0.5);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    dataPoints.forEach(dataPoint => {
        const { latitude, longitude, altitude } = dataPoint;

        // Convert latitude and longitude to X and Y coordinates
        const x = (longitude + 180) / 360 * window.innerWidth - window.innerWidth / 2;
        const y = -(latitude - 90) / 180 * window.innerHeight + window.innerHeight / 2;

        // Create a sphere at the calculated coordinates
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(x, y, altitude);
        scene.add(sphere);
    });

    // Position the camera
    camera.position.z = 200;

    // Animation loop
    const animate = function () {
        requestAnimationFrame(animate);

        // Rotate the spheres (optional)
        scene.children.forEach(child => {
            if (child instanceof THREE.Mesh) {
                child.rotation.x += 0.005;
                child.rotation.y += 0.005;
            }
        });

        renderer.render(scene, camera);
    };

    animate();
});

function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  }