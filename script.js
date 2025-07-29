// Minecraft enchanting table symbols generator
function generateRandomText() {
    // Using the exact symbols from the user
    const enchantingSymbols = 'ᔑʖᓵ↸ᒷ⎓⊣⍑╎⋮ꖌꖎᒲリ𝙹!¡ᑑ∷ᓭℸ ̣⚍⍊∴̇/||⨅';
    
    return {
        randomChars: (length = 8) => {
            let result = '';
            for (let i = 0; i < length; i++) {
                result += enchantingSymbols.charAt(Math.floor(Math.random() * enchantingSymbols.length));
            }
            return result;
        }
    };
}

// Dynamic browser title with super fast enchanting symbols
function initDynamicTitle() {
    const textGen = generateRandomText();
    let isAnimating = false;
    let animationInterval;
    
    // Generate different length sequences of random symbols
    const textLengths = [5, 6, 7, 8, 9, 10, 6, 7, 8, 5];
    let lengthIndex = 0;
    
    function startContinuousAnimation() {
        if (isAnimating) return;
        isAnimating = true;
        
        const currentLength = textLengths[lengthIndex];
        lengthIndex = (lengthIndex + 1) % textLengths.length;
        
        // Super fast animation - change every 30ms
        animationInterval = setInterval(() => {
            const randomText = textGen.randomChars(currentLength);
            document.title = randomText;
        }, 30); // Super fast - 30ms per change
        
        // Change length every 2-3 seconds
        setTimeout(() => {
            clearInterval(animationInterval);
            isAnimating = false;
            
            // Brief pause before next sequence
            setTimeout(() => {
                startContinuousAnimation();
            }, 200);
        }, Math.random() * 1000 + 2000); // 2-3 seconds
    }
    
    // Start the continuous animation
    startContinuousAnimation();
}





// Clock functionality
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    
    // Add leading zeros
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    document.getElementById('clock').textContent = timeString;
}

// Volume slider functionality
function initScrollVolume() {
    const video = document.querySelector('video');
    const volumeSlider = document.getElementById('volumeSlider');

    if (!video || !volumeSlider) return;

    window.addEventListener('wheel', (event) => {
        event.preventDefault();

        let currentVolume = video.volume;
        if (event.deltaY < 0) {
            // Scroll up -> volume up
            currentVolume = Math.min(1, currentVolume + 0.05);
        } else {
            // Scroll down -> volume down
            currentVolume = Math.max(0, currentVolume - 0.05);
        }

        video.volume = currentVolume;
        volumeSlider.value = currentVolume * 100;
        volumeSlider.style.background = `linear-gradient(to right, #fff ${volumeSlider.value}%, #4d4d4d ${volumeSlider.value}%)`;
    }, { passive: false });
}

function initVolumeSlider() {
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeValue = document.getElementById('volumeValue');
    const video = document.querySelector('video');

    if (!volumeSlider || !volumeValue || !video) return;

    const setSliderBackground = (value) => {
        volumeSlider.style.background = `linear-gradient(to right, #fff ${value}%, #4d4d4d ${value}%)`;
    };

    // Set initial value and background
        // Start with video muted, but slider at a default value (e.g., 50)
    video.volume = 0; // Ensure it starts silent
    const initialValue = 50; // Set a default visual for the slider
    volumeSlider.value = initialValue;
    volumeValue.textContent = Math.round(initialValue);
    setSliderBackground(initialValue);

        volumeSlider.addEventListener('input', function() {
        const value = this.value;
        video.volume = value / 100;
        // The 'volumechange' event will handle updating the UI
    });

    video.addEventListener('volumechange', () => {
        const currentVolume = Math.round(video.volume * 100);
        volumeSlider.value = currentVolume;
        volumeValue.textContent = currentVolume;
        setSliderBackground(currentVolume);
    });
}

// Social links functionality
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-icon');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // You can add actual URLs here
            const platform = this.classList[1]; // Gets the second class (discord, github, etc.)
            console.log(`Clicked on ${platform} link`);
            
            // Example URLs - replace with your actual links
            const urls = {
                discord: 'https://discord.gg/yourserver',
                github: 'https://github.com/yourusername',
                whatsapp: 'https://wa.me/yournumber',
                instagram: 'https://instagram.com/yourusername'
            };
            
            if (urls[platform]) {
                // window.open(urls[platform], '_blank');
                console.log(`Would open: ${urls[platform]}`);
            }
        });
    });
}

// Smooth animations on load
function initAnimations() {
    const elements = document.querySelectorAll('.main-content > *');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Background video error handling
function initBackgroundVideo() {
    const video = document.getElementById('bg-video');
    if (video) {
        // Use a promise to catch potential errors if play() is interrupted
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error("Video play failed:", error);
                // If playing fails, hide video and show fallback gradient
                document.querySelector('.background-video').style.display = 'none';
                document.body.style.background = 'linear-gradient(45deg, #0a0a0a, #1a1a1a, #0a0a0a)';
                document.body.style.backgroundSize = '400% 400%';
                document.body.style.animation = 'gradientShift 15s ease infinite';
            });
        }
    }
}

// Add gradient animation for fallback
const style = document.createElement('style');
style.textContent = `
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;
document.head.appendChild(style);

// Cursor trail effect (optional)
function initCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', function(e) {
        trail.push({ x: e.clientX, y: e.clientY });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        // Remove existing trail elements
        document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
        
        // Create new trail elements
        trail.forEach((point, index) => {
            const trailElement = document.createElement('div');
            trailElement.className = 'cursor-trail';
            trailElement.style.cssText = `
                position: fixed;
                left: ${point.x}px;
                top: ${point.y}px;
                width: ${(index + 1) * 2}px;
                height: ${(index + 1) * 2}px;
                background: rgba(255, 255, 255, ${(index + 1) / trailLength * 0.5});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                transition: all 0.1s ease;
            `;
            document.body.appendChild(trailElement);
            
            // Remove after animation
            setTimeout(() => {
                if (trailElement.parentNode) {
                    trailElement.remove();
                }
            }, 100);
        });
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateClock();
    setInterval(updateClock, 1000);
    
    initVolumeSlider();
    initSocialLinks();
    initAnimations();
    initBackgroundVideo();
        initDynamicTitle();
    initScrollVolume();

    
    // Optional: Enable cursor trail (uncomment if you want this effect)
    // initCursorTrail();
    
    console.log('Website initialized successfully!');
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'F' for fullscreen
    if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
    
    // Press 'R' to refresh animations
    if (e.key === 'r' || e.key === 'R') {
        initAnimations();
    }
});
