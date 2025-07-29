# Kozuto Website

A dark-themed personal website similar to the reference design with modern animations and interactive elements.

## Features

- **Real-time Clock**: Displays current time in 12-hour format with AM/PM
- **Custom Username Display**: Shows "! k o z u t o" with stylized spacing
- **Social Media Links**: Interactive icons for Discord, GitHub, WhatsApp, and Instagram
- **Volume Slider**: Custom-styled volume control with visual feedback
- **Background Video**: Support for background video with fallback gradient
- **Custom Cursor**: Custom cursor image support
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Fade-in effects and hover animations

## Customization

### Changing the Name
Edit the username in `index.html`:
```html
<div class="username">! your name here</div>
```

### Updating Social Links
Modify the URLs in `script.js`:
```javascript
const urls = {
    discord: 'https://discord.gg/yourserver',
    github: 'https://github.com/yourusername',
    whatsapp: 'https://wa.me/yournumber',
    instagram: 'https://instagram.com/yourusername'
};
```

### Adding Background Video
1. Place your video file as `background.mp4` in the project folder
2. Supported formats: MP4, WebM, OGV

### Custom Cursor
1. Add your cursor image as `cursor.png` in the project folder
2. Recommended size: 32x32 pixels

## Running the Website

1. Open `index.html` in a web browser, or
2. Use a local server for better performance:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Keyboard Shortcuts

- **F**: Toggle fullscreen mode
- **R**: Refresh animations

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design included
